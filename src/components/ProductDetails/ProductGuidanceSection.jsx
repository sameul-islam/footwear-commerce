import React from "react";
import { AiOutlineShoppingCart, AiOutlineUndo, AiOutlineInfoCircle } from "react-icons/ai";
import sampleImage from "../../assets/image/product-guidance.webp"
import { GoDotFill } from "react-icons/go";

const ProductGuidanceSection = () => {
  return (
    <div className="w-full px-3 xl:px-10 flex flex-col xl:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Image Section */}
      <div className="overflow-hidden relative">
        <img
          src={sampleImage}
          alt="Product Guidance"
          loading="lazy"
          className="w-auto max-h-180"
        />
      </div>
      
      {/* Right Text Section */}
      <div className="xl:w-1/2 p-6 md:p-12 flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl flex flex-col sm:flex-row items-center gap-2 font-Lavishly font-semibold text-gray-800">
          Maximize the Value of Your Purchase <div className="w-20 h-0.5 bg-gray-600" /> <span className="font-Outfit text-xs">Maximize the Value of Your Purchase</span>
        </h2>

        <ul className="flex flex-col gap-4">
          <li className="flex items-start gap-3">
            <GoDotFill size={26} className="text-gray-700 mt-1" />
            <span className="text-gray-700 font-Outfit text-sm md:text-base">
              Choose your preferred size and variant, then click <strong>"Add to Cart"</strong> to ensure your premium product is secured instantly.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <GoDotFill size={26} className="text-gray-700 mt-1" />
            <span className="text-gray-700 font-Outfit text-sm md:text-base">
              Hassle-Free Returns & Exchanges: Enjoy a 30-day easy return policy if your product doesn't meet your expectations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <GoDotFill size={26} className="text-gray-700 mt-1" />
            <span className="text-gray-700 font-Outfit text-sm md:text-base">
              Care & Maintenance: Maintain peak quality by cleaning your shoes or socks gently, storing them in a dry, cool place, and using recommended care products to extend lifespan.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <GoDotFill size={26} className="text-gray-700 mt-1" />
            <span className="text-gray-700 font-Outfit text-sm md:text-base">
              Recommended Accessories: Enhance durability and performance with complementary care items—premium cleaners, brushes, and moisture-control socks help preserve your investment.
            </span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ProductGuidanceSection;
