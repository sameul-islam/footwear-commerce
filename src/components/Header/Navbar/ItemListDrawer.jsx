import React from "react";
import { motion } from "framer-motion";
import { MENU_CONFIG } from "./menuData"; 
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const ItemListDrawer = ({ isOpen, onClose, onBack, menuName, columnTitle }) => {
  if (!menuName || !columnTitle) return null;

  const column = MENU_CONFIG[menuName]?.columns.find(
    (col) => col.title === columnTitle
  );

  if (!column) return null;

  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  z-50"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <motion.div
        className="fixed top-0 left-0 w-full md:w-[55%] h-full bg-white z-60 shadow-lg flex flex-col"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="p-4 sm:p-5 border-b border-red-100 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-0.5">
             <MdOutlineArrowBackIosNew className="font-semibold text-red-500 cursor-pointer h-6 w-6 sm:h-7 sm:w-7"/><span className="font-Lato text-gray-400/80 text-md sm:text-lg">Back</span> 
          </button>
          <h2 className="font-semibold font-Lato text-lg sm:text-xl text-gray-700">{columnTitle}</h2>
          <button onClick={onClose}>
             <GrClose className="font-semibold text-red-500 cursor-pointer h-6 w-6 sm:h-7 sm:w-7"/>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul>
            {column.items.map((item, idx) => (
              <li
                key={idx}
                className="p-4 sm:p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              >
                <Link to={item.href} className="flex font-Lato  text-gray-700 items-center justify-between" onClick={onClose}> 
                  <span>{item.label}</span> <GoArrowUpRight/>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ItemListDrawer;