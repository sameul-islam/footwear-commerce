import React, { useEffect, useState } from "react";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

const CustomCursor = ({ isHovering, fullscreen }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  const Icon = fullscreen ? <TfiMinus /> : isHovering ? <TfiPlus /> : null;

  if (!Icon) return null; 

  return (
    <div
      className="fixed z-50 pointer-events-none text-gray-900 transition-transform duration-150"
      style={{
        top: mousePos.y,
        left: mousePos.x,
        transform: "translate(-50%, -50%)",
      }}
    >
      <TfiPlus size={30}/>
    </div>
  );
};

export default CustomCursor;




