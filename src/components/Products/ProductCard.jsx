import React from "react";
import { FiPlus } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { name, category, price, variants } = product;

  const primaryImages = variants?.[0]?.images || [];
  const mainImage = primaryImages[0];
  const hoverImage = primaryImages[4] || primaryImages[1] || primaryImages[0];
  const sizes = variants?.[0]?.stockBySize

  const isBestSeller = product?.flags?.isBestSeller;
  const isFeatured = product?.flags?.isFeatured;

  const displayPrice = price.sale ?? price.original;




  return (
    <div className="group relative cursor-pointer py-2">

      {/* IMAGE WRAPPER */}
      <div className="relative overflow-hidden rounded-md md:rounded-xl bg-gray-50 border border-gray-100 -z-10">

        {/* BADGE (Desktop only) */}
        {(isBestSeller || isFeatured) && (
          <span className="absolute top-3 left-3 hidden md:block font-semibold
             text-xs text-gray-500">
            {isBestSeller ? "Best Seller" : "Featured"}
          </span>
        )}

        {/* MAIN IMAGE */}
        <img
          src={mainImage}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />

        {/* HOVER IMAGE (index 4) */}
        <img
          src={hoverImage}
          alt={name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover 
            opacity-0 transition-opacity duration-700 
            group-hover:opacity-100"
        />

        {/* SIZE SELECTOR (Desktop Hover only) */}
        <div className="absolute bottom-1 left-1 right-1 
          translate-y-full group-hover:translate-y-0 
          transition-transform duration-500 
          hidden md:block">

          <div className="flex px-2">
            {Object.keys(sizes || {}).map((size) => (
              <div
                key={size}
                className="
                  p-1 text-xs text-[#5d3321] opacity-75 font-semibold font-Lora"
              >
               {size}
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE PLUS ICON */}
        {/* <div className="absolute bottom-3 right-3 z-10 flex md:hidden">
          <FiPlus size={14}/>
        </div> */}
      </div>

      {/* PRODUCT INFO */}
      <div className="mt-3 px-3 flex flex-col md:flex-row items-start justify-between gap-1">
        <div>
          <h3 className="text-xs md:text-sm font-semibold font-Lato text-gray-900 leading-tight">
            {name}
          </h3>
          <p className="text-xs text-gray-500">{category}</p>
        </div>

        <span className="text-xs md:text-sm font-semibold font-PT text-gray-600 whitespace-nowrap">
          ${displayPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
