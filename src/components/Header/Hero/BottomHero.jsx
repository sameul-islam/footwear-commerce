import React from 'react'
import { IoReturnDownBackSharp } from 'react-icons/io5'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { MdOutlineDiscount, MdOutlineEventAvailable } from 'react-icons/md'

const BottomHero = () => {
  return (
    <div>
      <div className='flex flex-row overflow-x-auto overflow-y-hidden no-scrollbar bg-gray-50 md:bg-white mt-0 w-full items-center justify-around border-b border-gray-200 md:border-none'>

         <div className='flex items-center gap-2 p-4 md:p-7 whitespace-nowrap border-r  border-gray-200 md:border-none pr-4'>
           <LiaShippingFastSolid className='text-xl'/> <span className='font-Lato text-sm font-light'>Free shipping over Rs.799 </span>
         </div>

         <div className='flex items-center gap-2 p-4 md:p-7 whitespace-nowrap border-r  border-gray-200 md:border-none pr-4'>
           <MdOutlineDiscount className='text-xl'/> <span className='font-Lato text-sm font-light'>Lowest pricing </span>
         </div>

         <div className='flex items-center gap-2 p-4 md:p-7 whitespace-nowrap border-r  border-gray-200 md:border-none pr-4'>
           <IoReturnDownBackSharp className='text-xl'/> <span className='font-Lato text-sm font-light'>Easy returns </span>
         </div>

         <div className='flex items-center gap-2 p-4 md:p-7 whitespace-nowrap'>
          <MdOutlineEventAvailable className='text-xl'/> <span className='font-Lato text-sm font-light'>COD available </span>
         </div>

      </div>
    </div>
  )
}

export default BottomHero
