import React from "react";
import { motion } from "framer-motion";
import { Menu } from "./menuData"; 
import  logo  from '../../../assets/image/logo.webp'
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { IoLanguageSharp } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const MainDrawer = ({ isOpen, onClose, onOpenSubMenu }) => {
  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <motion.div
        className={`fixed top-0 left-0 w-full md:w-[55%] h-full bg-white z-50 shadow-lg flex flex-col`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="p-4 sm:p-5 border-b border-red-100 flex justify-between items-center">
          <h2 className="font-semibold text-lg sm:text-xl font-Playfair">Menu.</h2>
        <Link to="/">  <img src={logo} alt="logo" className="h-12 sm:h-14" /> </Link>
          <button
            onClick={onClose}
          >
            <GrClose className="font-semibold text-red-500 cursor-pointer h-6 w-6 sm:h-7 sm:w-7"/>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul>
            {Menu.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                onClick={() => onOpenSubMenu(item.name)}
              >
                <span className="font-medium text-gray-800 font-Lato">{item.name}</span>
                <span className="text-gray-600"><SlArrowRight/></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col bottom-4 items-center p-6 gap-5">
          <div className="font-Lato text-gray-600 pb-2 border-b border-red-100">
            Call Support free:(+880 1234-567890)
          </div>
          <div className="flex mx-auto whitespace-nowrap gap-1 items-center justify-between w-[90%]">
          <div className="flex items-center gap-1">
            <CiLocationOn size={22}/>Location
          </div>
           <div>
            <MdFavoriteBorder size={22}/>
           </div>
            <div className="flex items-center gap-1">
              BN || EN  
           </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainDrawer;
