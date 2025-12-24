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
      Find Your Fit
     </h1>

    <div className='flex items-center justify-center mt-3.5 sm:mt-4 md:mt-8 sm:p-0.5 md:p-2 xl:p-3 gender-gap gap-1 sm:gap-1.5 md:gap-2.5 lg:gap-4 xl:gap-6 2xl:gap-10 overflow-hidden'>
      {genderImage.map((item, idx) => ( 
        <div className='relative cursor-pointer'>
          <img
          key={idx}
          src={item.image}
          alt={item.category}
          className='gender-image-xs gender-image h-65 sm:h-80 md:h-100 lg:h-130 xl:h-150 2xl:h-180 object-contain'
          />
          <span className='absolute top-2 left-2 md:top-5 xl:top-4 lg:left-3 text-white text-sm md:text-xl lg:text-2xl font-Poppins uppercase'>
            {item.category}
          </span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Gender



