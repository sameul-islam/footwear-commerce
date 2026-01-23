import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { selectAllProducts } from '../../features/products/productsSlice';

const RecommendedProduct = () => {
  const { slug } = useParams();
  const products = useSelector(selectAllProducts);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  const currentProduct = products.find(p => p.slug === slug);


  const recommendedProducts = products.filter(
    p => p.productType === currentProduct.productType && p.id !== currentProduct.id
  );

  useEffect(() => {
    handleScroll();
  }, []);

  // Arrow Enable/Disable Logic
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: 'smooth'
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section className="mt-12 md:mt-16">
      <h2 className="font-Tommorrow text-xl md:text-2xl lg:text-3xl text-center">
        You Might Also Like
      </h2>

      <div className="relative group mt-6">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className={`flex absolute z-10 left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center opacity-0 group-hover:opacity-100 transition ${
            canScrollLeft
              ? 'bg-white/60 backdrop-blur-lg border border-gray-200'
              : 'bg-black/20 text-gray-900 border border-gray-100'
          }`}
        >
          <LiaLongArrowAltLeftSolid size={28} />
        </button>

        {/* Products Scroll */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            tabIndex={0}
            className="flex flex-row p-0.5 overflow-x-auto scroll-smooth no-scrollbar focus:outline-none"
          >
            {recommendedProducts.map(item => (
              <div key={item.id} className="shrink-0 p-1 md:p-2">
                <Link to={`/product/${item.slug}`}>
                  <img
                    src={item.variants?.[0]?.images?.[0] || 'placeholder.webp'}
                    alt={item.name}
                    className="h-65 md:h-90 xl:h-113 2xl:h-125 border border-gray-100 cursor-pointer bg-[#f5f5f5]"
                  />
                </Link>
                <div className="mt-1 flex flex-col md:flex-row justify-between md:px-3 text-sm text-gray-800 font-Quicksand">
                  <p className="font-Outfit font-semibold">{item.name}</p>
                  <p className="text-sm font-Outfit font-semibold mt-1">${item.price.original}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className={`flex absolute z-10 right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center opacity-0 group-hover:opacity-100 transition ${
            canScrollRight
              ? 'bg-white/60 backdrop-blur-lg border border-gray-200'
              : 'bg-black/20 text-gray-900 border border-gray-100'
          }`}
        >
          <LiaLongArrowAltRightSolid size={28} />
        </button>
      </div>
    </section>
  );
};

export default RecommendedProduct;
