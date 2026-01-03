import React from "react";
import { FiPlus } from "react-icons/fi";

const ProductCard = ({ product, view }) => {
  const { name, category, price, variants } = product;

  const primaryImages = variants?.[0]?.images || [];
  const mainImage = primaryImages[0];
  const hoverImage = primaryImages[4] || primaryImages[1] || primaryImages[0];

  const isBestSeller = product?.flags?.isBestSeller;
  const isFeatured = product?.flags?.isFeatured;

  const displayPrice = price.sale ?? price.original;



  return (
    <div className="group relative w-full cursor-pointer">

      {/* IMAGE WRAPPER */}
      <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-gray-100">

        {/* BADGE (Desktop only) */}
        {(isBestSeller || isFeatured) && (
          <span className="absolute top-3 left-3 z-10 hidden md:block 
            rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white">
            {isBestSeller ? "BEST SELLER" : "FEATURED"}
          </span>
        )}

        {/* MAIN IMAGE */}
        <img
          src={mainImage}
          alt={name}
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* HOVER IMAGE (index 4) */}
        <img
          src={hoverImage}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover 
            opacity-0 transition-opacity duration-500 
            group-hover:opacity-100"
        />

        {/* SIZE SELECTOR (Desktop Hover only) */}
        <div className="absolute bottom-0 left-0 right-0 
          translate-y-full group-hover:translate-y-0 
          transition-transform duration-300 
          hidden md:block bg-white/95 backdrop-blur-md">

          <div className="grid grid-cols-4 gap-2 p-3">
            {["40", "41", "42", "43"].map((size) => (
              <button
                key={size}
                className="rounded-md border border-gray-300 
                  py-1 text-sm font-medium 
                  hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE PLUS ICON */}
        <div className="absolute bottom-3 right-3 z-10 flex md:hidden 
          h-9 w-9 items-center justify-center 
          rounded-full bg-black text-white">
          <FiPlus />
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">
            {name}
          </h3>
          <p className="text-xs text-gray-500">{category}</p>
        </div>

        <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
          ${displayPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
