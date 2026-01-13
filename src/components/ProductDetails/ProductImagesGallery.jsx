import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiaTimesSolid } from "react-icons/lia";
import CustomCursor from "./CustomCursor";

const ProductImagesGallery = ({ product }) => {
  const [activeVariant, setActiveVariant] = useState(product.variants[0]);
  const [fullscreen, setFullscreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const [clickedImageIndex, setClickedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setClickedImageIndex(index);
    setFullscreen(true);
  };

  return (
    <div className="w-1/2 h-screen flex flex-col overflow-y-scroll no-scrollbar bg-[#f5f5f5] border border-gray-100">
      <CustomCursor isHovering={isHovering} fullscreen={fullscreen}/>

      {/* Images column */}
      {activeVariant.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${product.name} ${index}`}
          className="cursor-none shadow-xs"
          onClick={() => handleImageClick(index)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
      ))}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-[#f5f5f5] z-50 flex flex-col overflow-y-auto no-scrollbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              className="fixed top-5 right-5 text-gray-800 hover:text-gray-600 bg-white/60 rounded-full p-3 hover:rotate-180 cursor-pointer z-50 transition duration-500"
              onClick={() => setFullscreen(false)}
            >
              <LiaTimesSolid size={26}/>
            </button>

            {/* Scrollable all images */}
            <div className="flex flex-col items-center">
              {activeVariant.images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`${product.name} fullscreen ${idx}`}
                  className="w-full h-full shadow-xs"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductImagesGallery;
