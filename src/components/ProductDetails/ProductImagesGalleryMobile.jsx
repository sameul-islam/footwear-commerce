import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiaTimesSolid } from "react-icons/lia";

const ProductImagesGalleryMobile = ({ product }) => {
  const [activeVariant] = useState(product.variants[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const scrollRef = useRef(null);

  // Horizontal scroll handler for dots
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setActiveIndex(newIndex);
  };

  const handleDotClick = (index) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <div className="md:hidden w-full bg-[#f5f5f5]">
      {/* Horizontal scroll images */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        {activeVariant.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${product.name} ${idx}`}
            loading="lazy"
            className="w-full shrink-0 snap-center cursor-pointer"
            onClick={() => setFullscreen(true)}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mb-2 space-x-2">
        {activeVariant.images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              idx === activeIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

    {/* Fullscreen modal for mobile */}
<AnimatePresence>
  {fullscreen && (
    <motion.div
      className="fixed inset-0 w-full h-full bg-[#f5f5f5] z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close button */}
      <button
        className="fixed top-5 right-5 text-gray-900 bg-white border border-gray-100 rounded-full p-3 z-50"
        onClick={() => setFullscreen(false)}
      >
        <LiaTimesSolid size={26} />
      </button>

      {/* Only clicked image */}
      <motion.img
        src={activeVariant.images[activeIndex]}
        alt={`${product.name} fullscreen`}
        className="w-full h-full object-contain touch-none"
        initial={{ scale: 1 }}
        whileTap={{ scale: 1 }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.2}
        pinch={{ scale: 1 }}
        style={{ touchAction: "none" }} 
      />
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default ProductImagesGalleryMobile;
