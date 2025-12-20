import React from "react";
import { motion } from "framer-motion";
import { Menu } from "./menuData"; 

const MainDrawer = ({ isOpen, onClose, onOpenSubMenu }) => {
  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-3xl z-50"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <motion.div
        className={`fixed top-0 left-0 w-full md:w-[50%] h-full bg-white z-50 shadow-xl flex flex-col`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">Menu</h2>
          <button
            className="text-gray-600 font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul>
            {Menu.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 border-b cursor-pointer hover:bg-gray-100"
                onClick={() => onOpenSubMenu(item.name)}
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-400">{">"}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default MainDrawer;
