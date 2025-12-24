import React from 'react'
import Image from '../../assets/image/visualImage1.jpg'




const BigImage = () => {
  return (
    <div className='w-full mt-5'>
      <h1 className='text-center font-Poppins text-lg md:text-xl lg:text-3xl py-4 md:py-10 font-semibold '>
        SpotLIght
      </h1>
        <img src={Image} alt="visualImage" className='object-contain w-full h-full' />

    </div>
  )
}

export default BigImage
