// import React, { useEffect, useState } from 'react'
// import slider1 from '../../../assets/image/slider1.png';
// import slider2 from '../../../assets/image/slider2.jpg';
// import slider3 from '../../../assets/image/slider3.jpg';
// import {motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';



//  const slideImage = [slider1, slider2, slider3]

// const Hero = () => {
//     const [isSlide, setisSlide] = useState(0);

   

//     useEffect(() => {
//          const interval = setInterval (() => {
//             setisSlide((prev) => (prev + 1) % slideImage.length)
//          }, 700000);
//          return () => clearInterval(interval)
//     }, []);

//   return (
//     <div className='p-1 md:p-2'>
//         <div className='relative w-full mt-14 sm:mt-16 md:mt-20 lg:mt-26 xl:mt-0 -z-10 overflow-hidden'>
//         <AnimatePresence mode='wait'>
//            <motion.img
//            key={isSlide}
//            src={slideImage[isSlide]} 
//            alt="slideImage" 
//            className='w-full h-[50vh] md:h-[75vh] xl:h-[85vh] 2xl:h-[90vh] object-cover rounded-t-xl md:rounded-t-2xl rounded-b-sm md:rounded-b-md'
//            initial={{ opacity: 0, scale: 1.05 }}
//            animate={{ opacity: 1, scale: 1 }}
//            exit={{ opacity: 0, scale: 0.98 }}
//            transition={{ duration: 0.7, ease: 'easeInOut' }}
//            />
//         </AnimatePresence>

//        {/* Indicator Wrapper */}
//        <div className="absolute bottom-0 left-0 w-full">
  
//              {/* Dots */}
//          <div className="flex justify-center gap-3 md:gap-6 mb-2 md:mb-4">
//              {slideImage.map((_, index) => (
//              <motion.span
//               key={index}
//               className="h-1 w-1 md:h-2 md:w-2 rounded-full"
//               animate={{
//               backgroundColor:
//               index === isSlide
//               ? "#2f3640"
//               : "rgba(255,255,255,0.4)",
//               scale: index === isSlide ? 1.4 : 1,
//              }}
//               transition={{ duration: 0.3 }}
//              />
//             ))}
//           </div>

//              {/* Progress Bar */}
//              <motion.div
//                key={isSlide}
//                className="h-0.5 md:h-1 w-full bg-[#7f8fa6]"
//                initial={{ scaleX: 0 }}
//                animate={{ scaleX: 1 }}
//                transition={{ duration: 7, ease: "linear" }}
//                style={{ transformOrigin: "left" }}
//               />
//             </div>


//         </div>
        

//     </div>
//   )  
// }

// export default Hero








import React, { useEffect, useState } from 'react'
import slider1 from '../../../assets/image/slider1.png';
import slider2 from '../../../assets/image/slider2.webp';
import {motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';



 const slideImage = [slider1, slider2]

const Hero = () => {
    const [isSlide, setisSlide] = useState(0);

   

    useEffect(() => {
         const interval = setInterval (() => {
            setisSlide((prev) => (prev + 1) % slideImage.length)
         }, 10000);
         return () => clearInterval(interval)
    }, []);

  return (
    <div className='p-1 md:p-2 mb-3 md:mb-7 xl:mb-10 '>
        <div className='relative w-full mt-14 sm:mt-16 md:mt-20 lg:mt-26 xl:mt-20 overflow-hidden'>
        <AnimatePresence mode='wait'>
           <motion.img
           key={isSlide}
           src={slideImage[isSlide]} 
           alt="slideImage" 
           fetchPriority='high'
           className='w-full h-[56vh] md:h-[70vh] xl:h-[85vh]  object-cover rounded-xl md:rounded-2xl'
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5, ease: "easeInOut" }}
           />
        </AnimatePresence>

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/20 rounded-xl md:rounded-2xl pointer-events-none' />

       <div className='absolute bottom-10 flex flex-col md:flex-row items-center justify-between w-full gap-5 md:px-20'>
        {/* Hero Text */}

           <h1 className="text-white text-2xl md:text-4xl xl:text-5xl font-IM tracking-wide leading-tight">
           Crafted for the Few.
          </h1>


        {/* CTA */}
        <div className="flex items-center md:items-end gap-2">
        <Link to="/men" className="font-Outfit text-sm font-semibold text-white transition-all duration-300 border-2 border-white rounded-full py-1 px-2.5 hover:bg-white hover:text-gray-800 hover:border-gray-200">
         SHOP MEN
        </Link>
        <Link to="/women" className="text-sm font-Outfit font-semibold text-white transition-all duration-300 border-2 border-white rounded-full py-1 px-2.5 hover:bg-white hover:text-gray-800 hover:border-gray-200">
        SHOP WOMEN
       </Link>
      </div>
       </div>

        </div>
        

    </div>
  )  
}

export default Hero

