import React, { useEffect, useState } from 'react'
import slider1 from '../../../assets/image/slider1.jpg';
import slider2 from '../../../assets/image/slider2.jpg';
import slider3 from '../../../assets/image/slider3.jpg';
import {motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';



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
    <div className='p-1 md:p-2'>
      <Link to="/" className=' cursor-pointer'>
        <div className='relative w-full mt-14 sm:mt-16 md:mt-20 lg:mt-26 xl:mt-0 -z-10 overflow-hidden'>
        <AnimatePresence mode='wait'>
           <motion.img
           key={isSlide}
           src={slideImage[isSlide]} 
           alt="slideImage" 
           className='w-full hero-image-xs hero-image h-[30vh] sm:h-[40vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-[83vh] object-cover rounded-t-xl md:rounded-t-2xl'
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0.98 }}
           transition={{ duration: 0.7, ease: 'easeInOut' }}
           />
        </AnimatePresence>

       {/* Indicator Wrapper */}
       <div className="absolute bottom-0 left-0 w-full">
         
         {/* Simple direction text */}
        <div className='mb-4 md:mb-8 xl:mb-12 text-center'>
          <span className='border-b border-red-500/70 text-white/80 font-Lato md:text-xl lg:text-2xl'> SHOP NOW </span>
        </div>

  
             {/* Dots */}
         <div className="flex justify-center gap-3 md:gap-6 mb-2 md:mb-4">
             {slideImage.map((_, index) => (
             <motion.span
              key={index}
              className="h-1 w-1 md:h-2 md:w-2 rounded-full"
              animate={{
              backgroundColor:
              index === isSlide
              ? "#dc2626"
              : "rgba(255,255,255,0.4)",
              scale: index === isSlide ? 1.4 : 1,
             }}
              transition={{ duration: 0.3 }}
             />
            ))}
          </div>

             {/* Progress Bar */}
             <motion.div
               key={isSlide}
               className="h-0.5 md:h-1 w-full bg-red-600"
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 5, ease: "linear" }}
               style={{ transformOrigin: "left" }}
              />
            </div>


        </div>
        
        </Link>
    </div>
  )  
}

export default Hero
