// import React from 'react'
// import DesktopImage from '../../assets/image/visualImage1.jpg'
// import MobileImage from '../../assets/image/visualImage2.jpg'




// const SpotLight = () => {
//   return (
//     <div className='w-full mt-2'>
//       <h1 className='text-center font-Poppins text-lg md:text-xl lg:text-3xl py-4 md:py-10 font-semibold '>
//         SpotLIght
//       </h1>
//         <img src={DesktopImage} alt="visualImage" className='hidden lg:flex object-contain w-full h-full rounded-4xl p-3.5' />
//         <img src={MobileImage} alt="visualImage" className='flex lg:hidden object-contain w-full h-full rounded-3xl p-2' />

//     </div>
//   )
// }

// export default SpotLight







import React from "react";
import { motion } from "framer-motion";

import bgVideo from "../../assets/image/background.mp4";
import shoeImage from "../../assets/image/shoe.webp";

const Spotlight = () => {


  return (
    <section className="relative w-full overflow-hidden my-8 md:my-12 xl:my-16">

      {/* Background Video */}
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full object-cover
                   h-[70vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] rounded-2xl lg:rounded-3xl p-1 lg:p-2"
      />

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">

        {/* Outer rotating circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute w-80 h-80
                     md:w-95 md:h-95 lg:h-110 lg:w-110 xl:w-120 xl:h-120
                     border border-white/60 rounded-full flex items-center justify-center"
        >
          {/* dots */}
          <div className="absolute -top-1 w-2 h-2 bg-white rounded-full" />
          <div className="absolute -bottom-1 w-2 h-2 bg-white rounded-full" />
          <div className="absolute -left-1 w-2 h-2 bg-white rounded-full" />
          <div className="absolute -right-1 w-2 h-2 bg-white rounded-full" />
        </motion.div>

        {/* Inner circle */}

               <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute w-65 h-65
                     md:w-80 md:h-80 lg:w-95 lg:h-95 xl:w-100 xl:h-100
                     border border-white/80 rounded-full flex items-center justify-center"
        >
          {/* dots */}
          <div className="absolute -left-1 w-1.5 h-1.5 bg-white rounded-full" />
          <div className="absolute -right-1 w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>

    {/* 
       <div
          className="absolute w-65 h-65
                     md:w-80 md:h-80 lg:w-95 lg:h-95 xl:w-100 xl:h-100
                     border border-white/60 rounded-full"
        /> */}
        
        {/* Inner Background */}
        <div className="absolute w-55 h-55 md:w-60 md:h-60 lg:w-75 lg:h-75 xl:w-85 xl:h-85 bg-black/50 rounded-full"/>

        {/* Shoe image */}
        <motion.img
          src={shoeImage}
          loading="lazy"
          alt="Premium Shoe"
          className="relative w-60 md:w-80 lg:w-100 xl:w-110 select-none"
        />
      </div>
    </section>
  );
};

export default Spotlight;






