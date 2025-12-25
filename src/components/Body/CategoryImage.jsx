import React from 'react'
import Image1 from '../../assets/image/categoryImage1.webp'
import Image2 from '../../assets/image/categoryImage2.webp'
import Image3 from '../../assets/image/categoryImage3.webp'
import Image4 from '../../assets/image/categoryImage4.webp'

const image = [
  {
    id: 1,
    img: Image1,
    category: "ALL SHOES"
  },
  {
    id: 2,
    img: Image2,
    category: "MEN"
  },
  {
    id: 3,
    img: Image3,
    category: "WOMEN"
  },
  {
    id: 4,
    img: Image4,
    category: "FEATURED"
  },
];

const CategoryImage = () => {
  return (
    <div>

      <div className='flex overflow-x-auto items-center md:justify-between gap-1.5 sm:gap-2 p-1.5 sm:p-3'>
        {image.map((item, idx) => (
          <div key={idx} className='relative flex shrink-0 overflow-hidden category-img'>
          <img
          
          src={item.img}
          alt={`Image${idx}`}
          className='h-75 sm:h-90 md:h-130 lg:h-140 xl:h-150 w-full object-cover transform'
          />
          <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-1 px-2 text-white hover:text-gray-700 text-sm font-Lato border-2 cursor-pointer rounded-full hover:bg-white transition duration-300 whitespace-nowrap'>
            {item.category}
          </span>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default CategoryImage
