import React, { useEffect, useState } from 'react'
import slider1 from '../../../assets/image/slider1.jpg';
import slider2 from '../../../assets/image/slider2.jpg';
import slider3 from '../../../assets/image/slider3.jpg';
import {motion, AnimatePresence } from 'framer-motion';



 const slideImage = [slider1, slider2, slider3]

const Hero = () => {
    const [isSlide, setisSlide] = useState(0);

   

    useEffect(() => {
         const interval = setInterval (() => {
            setisSlide((prev) => (prev + 1) % slideImage.length)
         }, 5000);
         return () => clearInterval(interval)
    }, []);

  return (
    <div>
        <div className='relative w-full mt-12 md:mt-16 xl:mt-0 overflow-hidden'>
        <AnimatePresence mode='wait'>
           <motion.img
           key={isSlide}
           src={slideImage[isSlide]} 
           alt="slideImage" 
           className='w-full xl:h-[80vh] object-contain xl:object-cover'
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0.98 }}
           transition={{ duration: 0.7, ease: 'easeInOut' }}
           />
        </AnimatePresence>
        <motion.div
        key={isSlide} 
        className='absolute bottom-0 left-0 h-0.75 w-full bg-red-600'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 5, ease: "linear" }}
        />
        </div>
    </div>
  )
}

export default Hero
