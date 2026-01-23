import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrawerRecommendations } from '../../features/products/productsSlice';
import { Link } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { closeCartDrawer } from '../../features/products/uiSlice';

const RecommendedDrawerProducts = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { shoeCare, socks } = useSelector(selectDrawerRecommendations);

  useEffect(() => handleScroll(), []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth);
  };

  const scrollRight = () => scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth });
  const scrollLeft = () => scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth });

  // Merge shoe care + socks for this drawer section
  const recommendedProducts = [...shoeCare, ...socks];


  const dispatch = useDispatch()

  return (
    <section className='my-10'>
      <h2 className='font-semibold font-Outfit text-sm mb-4'>
        You Might Also Need
      </h2>

      <div className='relative group'>
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label='Scroll left'
          className={`absolute left-1 top-1/2 -translate-y-1/2 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-white/70 shadow-md opacity-0 group-hover:opacity-100 transition ${
            canScrollLeft ? '' : 'hidden'
          }`}
        >
          <LiaLongArrowAltLeftSolid size={20} />
        </button>

        {/* Scrollable container */}
        <div className='overflow-hidden'>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            tabIndex={0}
            className='flex flex-row gap-2 p-1 overflow-x-auto scroll-smooth no-scrollbar focus:outline-none'
          >
            {recommendedProducts.map((item) => (
              <Link
                key={item.id}
                onClick={() => dispatch(closeCartDrawer())}
                to={`/product/${item.slug}`}
                className='shrink-0  p-3 bg-[#f5f5f5]/30  border border-gray-100 rounded-xl transition flex flex-col items-center'
              >
                <img
                  src={item.variants?.[0]?.images?.[0] || 'placeholder.webp'}
                  alt={item.name}
                  className='w-28 md:w-32 lg:w-36 h-20 md:h-24 lg:h-28 object-contain rounded-md mb-1'
                  loading='lazy'
                />
                <p className='text-xs md:text-sm font-medium font-Poppins text-center'>{item.name}</p>
                <p className='text-[10px] md:text-xs font-Lato text-gray-500 text-center mt-0.5'>
                  {item.productType === 'socks'
                    ? 'Perfect for comfort & performance'
                    : 'Keep your shoes clean & fresh'}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label='Scroll right'
          className={`absolute right-1 top-1/2 -translate-y-1/2 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-white/70 shadow-md opacity-0 group-hover:opacity-100 transition ${
            canScrollRight ? '' : 'hidden'
          }`}
        >
          <LiaLongArrowAltRightSolid size={20} />
        </button>
      </div>
    </section>
  );
};

export default RecommendedDrawerProducts;
