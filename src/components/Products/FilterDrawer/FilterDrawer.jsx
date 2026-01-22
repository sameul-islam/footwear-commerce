import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { RiCloseLargeLine } from 'react-icons/ri';

const FilterDrawer = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div>
          {/* BackDrop */}
          <motion.div 
          className='fixed inset-0 bg-black/40 z-40'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          />

          {/* Mobile Drawer */}
          <motion.div className='fixed z-50 bg-white w-full bottom-0 h-[85vh] rounded-t-2xl md:hidden flex flex-col'
          initial={{ y: "100%", x: 0 }}
          animate={{ y: 0, x: 0 }}
          exit={{ y: "100%", x: 0 }}
          transition={{ type: "tween", duration: 0.35 }}
          >
            {/* Header */}
            <div className='flex items-center justify-between px-5 py-4 border-b-2 border-[#7FAE8C]'>
              <h2 className='text-lg text-gray-600 font-semibold font-Outfit'>
                Filter & Sort
              </h2>
              <button onClick={onClose}>
                <RiCloseLargeLine size={24} className='text-gray-600'/>
              </button>
            </div>

            {/* Content */}
            <div className='flex-1 overflow-y-auto px-5 py-4'>
              {children}
            </div>

            {/* Footer (future use) */}
             <div className='border-t px-5 py-4 hidden'>
               {/* Reset / Apply buttons (later) */}
             </div>
          </motion.div>
          

          {/* Desktop Drawer */}
          <motion.div className='fixed z-50 bg-white w-140 xl:w-150 bottom-0 top-0 right-0  h-full  hidden md:flex flex-col'
          initial={{ y: 0, x: "100%" }}
          animate={{ y: 0, x: 0 }}
          exit={{ y: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.35 }}
          >
            {/* Header */}
            <div className='flex items-center justify-between px-5 py-4 border-b-2 border-[#7FAE8C]'>
              <h2 className='text-lg text-gray-600 font-semibold font-Outfit'>
                Filter & Sort
              </h2>
              <button onClick={onClose}>
                <RiCloseLargeLine size={26} className='text-gray-600 hover:rotate-180 transition duration-700 cursor-pointer'/>
              </button>
            </div>

            {/* Content */}
            <div className='flex-1 overflow-y-auto px-5 py-4'>
              {children}
            </div>

            {/* Footer (future use) */}
             <div className='border-t px-5 py-4 hidden'>
               {/* Reset / Apply buttons (later) */}
             </div>
          </motion.div>
          
        </div>
      )}
    </AnimatePresence>
  )
}

export default FilterDrawer
