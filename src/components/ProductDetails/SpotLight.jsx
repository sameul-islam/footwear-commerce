
import React from "react";
import { motion } from "framer-motion";

import Video from '../../assets/image/detailpageVideo.mp4'
import shoeImage from '../../assets/image/detailshoe.webp'


const Spotlight = () => {


  return (
    <section className="relative w-full overflow-hidden my-8 md:my-12 xl:my-16">

      {/* Background Video */}
      <video
        src={Video}
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
          alt="Premium Shoe"
          className="relative w-60 md:w-80 lg:w-100 xl:w-110 select-none"
        />
      </div>
    </section>
  );
};

export default Spotlight;








