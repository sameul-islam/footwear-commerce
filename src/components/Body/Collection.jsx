import React, { useEffect, useRef, useState } from 'react'
import collection1 from '../../assets/image/collection1.jpg'
import collection2 from '../../assets/image/collection2.jpg'
import collection3 from '../../assets/image/collection3.jpg'
import collection4 from '../../assets/image/collection4.jpg'
import collection5 from '../../assets/image/collection5.jpg'
import collection6 from '../../assets/image/collection6.jpg'
import collection7 from '../../assets/image/collection7.jpg'
import collection8 from '../../assets/image/collection8.jpg'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

// const collectionImage = [collection1, collection2, collection3, collection4, collection5, collection6, collection7, collection8];

const collections = [
  {
    id: 1,
    image: collection1,
    title: 'Summer Collection',
  },
  {
    id: 2,
    image: collection2,
    title: 'Autumn Essentials',
  },
  {
    id: 3,
    image: collection3,
    title: 'Minimal Series',
  },
  {
    id: 4,
    image: collection4,
    title: 'Everyday Classics'
  },
  {
    id: 5,
    image: collection5,
    title: 'Urban Collection'
  },
  {
    id: 6,
    image: collection6,
    title: 'Signature Line'
  },
  {
    id: 7,
    image: collection7,
    title: 'Modern Comfort'
  },
  {
    id: 8,
    image: collection8,
    title: 'Timeless Edition'
  }
];

const Collection = () => {
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
    <div className='mt-8 md:mt-14'>
     
     <h1 className='text-center font-Poppins text-xl md:text-2xl lg:text-3xl'>
      Our Collection
     </h1>
   
   <div className='relative group mt-8'>
    {/* Left Arrow */}
       <button onClick={scrollLeft} disabled={!canScrollLeft} aria-label='Scroll collection left' className={`flex absolute z-10 left-1 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center backdrop-blur shadow opacity-0 group-hover:opacity-100 transition ${canScrollLeft ? 'bg-white/70':'bg-white/10'}`}>
         <IoChevronBack/>
       </button>
       {/* Collection Image */}
       <div className='overflow-hidden'>
      <div
      ref={scrollRef}
      onScroll={handleScroll}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className='flex flex-row overflow-x-auto scroll-smooth no-scrollbar focus:outline-none'>
      {collections.map((item) => (
        <div key={item.id} className='relative shrink-0 p-px'>

        <img
        src={item.image}
        alt={item.title}
        onLoad={handleScroll}
        className='h-100 md:h-115 xl:h-126 2xl:h-128 cursor-pointer'
        />
        <span className='absolute font-Lato bottom-4 left-4 px-3 py-1 text-xs tracking-widest uppercase text-white/90 backdrop-blur-xs bg-black/20 rounded'>
          {item.title}
        </span>
        </div>
      ))}
      </div>
      </div>

       {/* Right Arrow */}
       <button onClick={scrollRight} disabled={!canScrollRight} aria-label='Scroll collection Right' className={`flex absolute z-10 right-1 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center backdrop-blur shadow opacity-0 group-hover:opacity-100 transition ${canScrollRight ? 'bg-white/70':'bg-white/10'}`}>
        <IoChevronForward/>
       </button>

    </div>
    </div>
  )
}

export default Collection
