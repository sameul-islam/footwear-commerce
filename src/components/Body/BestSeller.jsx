import React, { useEffect, useRef, useState } from 'react'
import product1 from '../../assets/image/product1.avif'
import product2 from '../../assets/image/product2.avif'
import product3 from '../../assets/image/product3.avif'
import product4 from '../../assets/image/product4.avif'
import product5 from '../../assets/image/product5.avif'
import product6 from '../../assets/image/product6.avif'
import product7 from '../../assets/image/product7.avif'
import product8 from '../../assets/image/product8.avif'
import product9 from '../../assets/image/product9.webp'
import product10 from '../../assets/image/product10.avif'
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia'


const product = [
  {
    id: 1,
    image: product1,
    title: 'Summer Collection',
    category: "Men's Shoes",
    mrp: "MRP: $20.00"
  },
  {
    id: 2,
    image: product2,
    title: 'Autumn Essentials',
    category: "Men's Shoes",
    mrp: "MRP: $22.00"
  },
  {
    id: 3,
    image: product3,
    title: 'cortez SE',
    category: "Women's Shoes",
    mrp: "MRP: $19.00"
  },
  {
    id: 4,
    image: product4,
    title: 'Shox Ride 2 Premium',
    category: "Men's Shoes",
    mrp: "MRP: $12.50"
  },
  {
    id: 5,
    image: product5,
    title: 'Air Max Moto 2K',
    category: "Men's Shoes",
    mrp: "MRP: $19.00"
  },
  {
    id: 6,
    image: product6,
    title: 'cortez Leather',
    category: "Women's Shoes",
    mrp: "MRP: $15.00"
  },
  {
    id: 7,
    image: product7,
    title: 'Pegasus Premium',
    category: "Women's Shoes",
    mrp: "MRP: $17.00"
  },
  {
    id: 8,
    image: product8,
    title: 'Summer Collection',
    category: "Men's Shoes",
    mrp: "MRP: $20.00"
  },
  {
    id: 9,
    image: product9,
    title: 'Autumn Essentials',
    category: "Men's Shoes",
    mrp: "MRP: $22.00"
  },
  {
    id: 10,
    image: product10,
    title: 'cortez SE',
    category: "Women's Shoes",
    mrp: "MRP: $19.00"
  }

];

const BestSeller = () => {
       const scrollRef = useRef(null);
       const [canScrollLeft, setCanScrollLeft] = useState(false)
       const [canScrollRight, setCanScrollRight] = useState(true)
    
       useEffect(() => {
        handleScroll()
       },[])
       
      //  Arrow Enable/Disable
       const handleScroll = () => {
        const el = scrollRef.current
        if (!el) return
        setCanScrollLeft(el.scrollLeft > 0)
        setCanScrollRight(
        Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth
        )
       }
    
       const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
          scrollRight()
        } else if (e.key === 'ArrowLeft') {
          scrollLeft()
        }
       }
    
       const scrollRight = () => {
        scrollRef.current.scrollBy ({
          left: scrollRef.current.clientWidth
        })
       }
    
       const scrollLeft = () =>{
        scrollRef.current.scrollBy({
          left: -scrollRef.current.clientWidth
        })
       }

  return (
    <section className='mt-8 md:mt-14'>
     <div class="w-full flex justify-center pb-8 relative">
    

    <h1 class="font-Poppins text-xl md:text-2xl lg:text-3xl absolute left-1/2 transform -translate-x-1/2">
      Our Bestsellers
    </h1>


    <span class="absolute right-5 md:right-20 font-Poppins text-xs md:text-sm text-gray-800 hover:text-gray-500 border-b border-gray-400 cursor-pointer transition duration-300">
      View All
    </span>

  </div>

      
      <div className='relative group mt-8'>
       {/* Left Arrow */}
          <button onClick={scrollLeft} disabled={!canScrollLeft} aria-label='Scroll collection left' className={`flex absolute z-10 left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center opacity-0 group-hover:opacity-100 transition ${canScrollLeft ? 'bg-white border border-gray-800':'bg-black/20 text-gray-500 border border-gray-600'}`}>
            <LiaLongArrowAltLeftSolid size={28}/>
          </button>
          {/* Collection Image */}
          <div className='overflow-hidden'>
         <div
         ref={scrollRef}
         onScroll={handleScroll}
         onKeyDown={handleKeyDown}
         tabIndex={0}
         className='flex flex-row p-0.5 overflow-x-auto scroll-smooth no-scrollbar focus:outline-none'>
         {product.map((item) => (
           <div key={item.id} className='shrink-0 p-px md:p-1'>
   
           <img
           src={item.image}
           alt={item.title}
           onLoad={handleScroll}
           className='h-60 md:h-70 xl:h-90 2xl:h-100 cursor-pointer'
           />
           <div className='flex flex-col p-2 pt-0'>
            <p className='font-Lato font-semibold'>{item.title}</p>
            <p className='font-Poppins text-sm text-gray-500'>{item.category}</p>
            <p className='font-Poppins font-semibold'>{item.mrp}</p>
           </div>
           </div>
         ))}
         </div>
         </div>
   
          {/* Right Arrow */}
          <button onClick={scrollRight} disabled={!canScrollRight} aria-label='Scroll collection Right' className={`flex absolute z-10 right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center opacity-0 group-hover:opacity-100 transition ${canScrollRight ? 'bg-white border border-gray-800':'bg-black/20 text-gray-500 border border-gray-600'}`}>
          <LiaLongArrowAltRightSolid size={28}/>
          </button>
   
       </div>
       </section>
  )
}

export default BestSeller
