import React, { useRef, useState } from 'react'
import collection1 from '../../assets/image/collection1.jpg'
import collection2 from '../../assets/image/collection2.jpg'
import collection3 from '../../assets/image/collection3.jpg'
import collection4 from '../../assets/image/collection4.jpg'
import collection5 from '../../assets/image/collection5.jpg'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

const collectionImage = [collection1, collection2, collection3, collection4, collection5];

const Collection = () => {
   const scrollRef = useRef(null);
   const [canScrollLeft, setCanScrollLeft] = useState(false)
   const [canScrollRight, SetCanScrollRight] = useState(true)

   const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    SetCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    )
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
    <div className='mt-8 md:mt-14'>
     
     <h1 className='text-center font-Poppins text-xl md:text-2xl lg:text-3xl'>
      Our Collection
     </h1>
   
   <div className='relative group mt-8'>
    {/* Left Arrow */}
       <button onClick={scrollLeft} disabled={!canScrollLeft} className={`flex absolute left-1 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center backdrop-blur shadow opacity-0 group-hover:opacity-100 transition ${canScrollLeft ? 'bg-white/70':'bg-white/10'}`}>
         <IoChevronBack/>
       </button>
       {/* Collection Image */}
      <div
      ref={scrollRef}
      onScroll={handleScroll}
      className='flex flex-row overflow-x-auto scroll-smooth no-scrollbar'>
      {collectionImage.map((img, idx) => (
        <img key={idx}
        src={img}
        alt={`collectionImage${idx}`}
        className='h-100 md:h-115 xl:h-126 2xl:h-127 shrink-0 p-px cursor-pointer'
        />
      ))}
      </div>

       {/* Right Arrow */}
       <button onClick={scrollRight} disabled={!canScrollRight} className={`flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center backdrop-blur shadow opacity-0 group-hover:opacity-100 transition ${canScrollRight ? 'bg-white/70':'bg-white/10'}`}>
        <IoChevronForward/>
       </button>

    </div>
    </div>
  )
}

export default Collection
