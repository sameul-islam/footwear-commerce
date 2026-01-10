import React from "react";
import { motion } from "framer-motion";

const TypingIndicator = () => {
  return (
    <div className="flex space-x-1 items-center">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-2.5 h-2.5 bg-green-600 rounded-full"
          animate={{ y: ["0%", "-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default TypingIndicator;
