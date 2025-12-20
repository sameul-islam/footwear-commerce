import React from "react";
import { motion } from "framer-motion";
import { MENU_CONFIG } from "./menuData"; 

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
          className="fixed inset-0 bg-black/50 backdrop-blur-3xl z-50"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <motion.div
        className="fixed top-0 left-0 w-full md:w-[50%] h-full bg-white z-60 shadow-xl flex flex-col"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <button onClick={onBack}>back</button>
          <h2 className="font-bold text-lg">{columnTitle}</h2>
          <button className="text-gray-600 font-bold" onClick={onClose}>
            X
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul>
            {column.items.map((item, idx) => (
              <li
                key={idx}
                className="p-4 border-b cursor-pointer hover:bg-gray-100"
              >
                <a href={item.href} className="block text-gray-700">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ItemListDrawer;