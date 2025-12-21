import React from "react";
import { motion } from "framer-motion";
import { MENU_CONFIG } from "./menuData";
import { GrClose } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";

const SubMenuDrawer = ({ isOpen, onClose, onBack, menuName, onOpenItemList }) => {
  const menuData = MENU_CONFIG[menuName];

  if (!menuData) return null;

  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50  z-50"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <motion.div
        className="fixed top-0 left-0 w-full md:w-[55%] h-full bg-white z-50 shadow-lg flex flex-col"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="p-4 sm:p-5 border-b border-red-100 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-0.5">
            <MdOutlineArrowBackIosNew className="font-semibold text-red-500 cursor-pointer h-6 w-6 sm:h-7 sm:w-7"/><span className="font-Lato text-gray-400/80 text-md sm:text-lg">Back</span> 
            </button>
          <h2 className="font-semibold font-Lato text-lg sm:text-xl text-gray-700">{menuName}</h2>
          <button onClick={onClose}>
           <GrClose className="font-semibold text-red-500 cursor-pointer h-6 w-6 sm:h-7 sm:w-7"/>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul>
            {menuData.columns.map((col, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-4 sm:p5 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                onClick={() => onOpenItemList(menuName, col.title)}
              >
                <span className="font-medium text-gray-800 font-Lato">{col.title}</span>
                <span className="text-gray-600"><SlArrowRight/></span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SubMenuDrawer;
