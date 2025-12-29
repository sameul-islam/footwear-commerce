import React, { useEffect, useRef, useState } from 'react'
import { products } from '../../data/productData';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia'



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
    
      //  product
       const bestSellers = products.filter((item) => item.isBestseller)

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
         {bestSellers.map((item) => (
           <div key={item.id} className='shrink-0 p-1 md:p-2'>
   
           <img
           src={item.images[0]}
           alt={item.name}
           onLoad={handleScroll}
           loading='lazy'
           className='h-60 md:h-70 xl:h-90 2xl:h-100 cursor-pointer bg-gray-50 rounded-2xl'
           />

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
