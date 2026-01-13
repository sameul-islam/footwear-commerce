import React from "react";

const VariantSelector = ({
  variants,
  activeVariant,
  setActiveVariant,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className="mb-6">
      {/* Color */}
      <h5 className="font-Poppins text-xs text-gray-700 mb-2">COLOR :</h5>
      <div className="flex mb-6">
        {variants.map((v) => (
          <div
            key={v.color}
            className={`mr-2 cursor-pointer text-xs ${
              v.color === activeVariant.color
                ? "text-black font-semibold"
                : "text-gray-900"
            }`}
            onClick={() => setActiveVariant(v)}
          >
            /{v.color}
          </div>
        ))}
      </div>

      {/* Size */}
      <div className="flex justify-between mb-3">
      <h5 className="font-Poppins text-xs text-gray-700">SIZES</h5>
      <h5 className="font-Poppins text-xs text-gray-700 cursor-pointer border-b border-gray-400 hover:text-black transition">SIZE GUIDE</h5>
      </div>
      <div className="flex flex-wrap">
        {activeVariant &&
          Object.keys(activeVariant.stockBySize).map((size) => (
            <button
              key={size}
              className={`mr-2 mb-2 px-3 py-2 font-Outfit text-sm border border-gray-300 ${
                selectedSize === size ? "bg-black text-white transition duration-300" : "text-gray-900"
              }`}
              disabled={activeVariant.stockBySize[size] === 0}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
      </div>
    </div>
  );
};

export default VariantSelector;
