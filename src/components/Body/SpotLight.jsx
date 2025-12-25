import React from 'react'
import DesktopImage from '../../assets/image/visualImage1.jpg'
import MobileImage from '../../assets/image/visualImage2.jpg'




const BigImage = () => {
  return (
    <div className='w-full mt-2'>
      <h1 className='text-center font-Poppins text-lg md:text-xl lg:text-3xl py-4 md:py-10 font-semibold '>
        SpotLIght
      </h1>
        <img src={DesktopImage} alt="visualImage" className='hidden lg:flex object-contain w-full h-full rounded-4xl p-3.5' />
        <img src={MobileImage} alt="visualImage" className='flex lg:hidden object-contain w-full h-full rounded-3xl p-2' />

    </div>
  )
}

export default BigImage
