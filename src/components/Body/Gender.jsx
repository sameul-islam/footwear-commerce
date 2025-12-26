import React from 'react'
import ImageWomen from '../../assets/image/women.jpg'
import ImageMen from '../../assets/image/men.jpg'
import ImageKids from '../../assets/image/kid.jpg'


const genderImage = [
    {
        id: 1,
        category: "Women",
        image: ImageWomen
    },
    {
        id: 2,
        category: "Men",
        image: ImageMen
    },
    {
        id: 3,
        category: "Kids",
        image: ImageKids
    }
];

const Gender = () => {
  return (
    <div className='mt-4 sm:mt-8 md:mt-14 lg:mt-18 xl:mt-22 w-full'>

     <h1 className='text-center font-Poppins text-lg sm:text-xl md:text-2xl lg:text-3xl'>
      Designed for You
     </h1>

    <div className='flex items-center justify-around w-full mt-3.5 sm:mt-4 md:mt-8 p-1.5 sm:p-3 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-4 xl:gap-6 2xl:gap-10 overflow-x-auto'>
      {genderImage.map((item, idx) => ( 
        <div className='relative flex shrink-0 cursor-pointer mx-auto'>
          <img
          key={idx}
          src={item.image}
          alt={item.category}
          className=' rounded-xl sm:rounded-2xl h-90 md:h-105 lg:h-130 xl:h-150 2xl:h-200 object-contain'
          />
          <span className='absolute top-3 left-3 md:top-5  lg:left-4 text-white text-sm md:text-xl lg:text-2xl font-Poppins uppercase'>
            {item.category}
          </span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Gender



