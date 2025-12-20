import React from "react";
import { motion } from "framer-motion";
import { MENU_CONFIG } from "./menuData";

const SubMenuDrawer = ({ isOpen, onClose, onBack, menuName, onOpenItemList }) => {
  const menuData = MENU_CONFIG[menuName];

  if (!menuData) return null;

  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <motion.div
        className="fixed top-0 left-0 w-full md:w-[50%] h-full bg-white z-50 shadow-xl flex flex-col"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <button onClick={onBack}>back</button>
          <h2 className="font-bold text-lg">{menuName}</h2>
          <button className="text-gray-600 font-bold" onClick={onClose}>
            X
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul>
            {menuData.columns.map((col, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-4 border-b cursor-pointer hover:bg-gray-100"
                onClick={() => onOpenItemList(menuName, col.title)}
              >
                <span className="font-medium">{col.title}</span>
                <span className="text-gray-400">{">"}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SubMenuDrawer;
