import React from "react";
import { AiOutlineShoppingCart, AiOutlineUndo, AiOutlineInfoCircle } from "react-icons/ai";
import sampleImage from "../../assets/image/product-guidance.png"

const ProductGuidanceSection = () => {
  return (
    <div className="w-full px-3 xl:px-10 mt-10 md:mt-20 xl:mt-25 flex flex-col-reverse xl:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Text Section */}
      <div className="xl:w-1/2 p-6 md:p-12 flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-Outfit text-gray-800">
          How to Make the Most of Your Purchases
        </h2>

        <ul className="flex flex-col gap-4">
          <li className="flex items-start gap-3">
            <AiOutlineShoppingCart size={24} className="text-gray-600 mt-1" />
            <span className="text-gray-700 font-Outfit text-sm md:text-base">
              Select your desired size and color, then click "Add to Cart" to secure your product.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <AiOutlineUndo size={24} className="text-gray-700 mt-1" />
            <span className="text-gray-700 font-Outfit text-sm md:text-base">
              Easy Returns & Exchanges: Return within 30 days if it doesn't fit or meet your expectations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <AiOutlineInfoCircle size={24} className="text-gray-600 mt-1" />
            <span className="text-gray-700 font-Outfit text-sm md:text-base">
              Care Instructions: Keep your shoes clean and store in a cool, dry place to maintain premium quality.
            </span>
          </li>
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="overflow-hidden relative">
        <img
          src={sampleImage}
          alt="Product Guidance"
          className="w-auto max-h-150 object-cover rounded-4xl xl:rounded-full border border-gray-300 xl:border-8 xl:border-gray-500"
        />
      </div>
    </div>
  );
};

export default ProductGuidanceSection;
