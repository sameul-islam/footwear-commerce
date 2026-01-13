import React, { useState } from "react";
import VariantSelector from "./VariantSelector";
import AddToCart from "./AddToCart";
import RatingStars from "./RatingStars";
import { GoVerified } from "react-icons/go";
import TrustIcon from "./TrustIcon";

const ProductInfo = ({ product, activeVariant, setActiveVariant }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="w-1/2 h-screen items-center overflow-y-scroll no-scrollbar">
      <div className="max-w-lg mx-auto py-10 flex flex-col">

      {/* Product Name */}
      <span className="text-xs font-Lora font-semibold uppercase mb-2">{product.gender}</span>
      <h1 className="font-IM text-2xl text-black mb-1">{product.name}</h1>

      {/* reviews & ratings */}
      <RatingStars rating={product.rating} reviews={product.reviewsCount || 120} />

      {/* Price */}
      <p className="text-xs font-semibold text-gray-900 mb-1">
        {product.price.original} {product.price.currency}
      </p>

      <p className="text-sm font-Unna mb-6 text-[#791b1b] flex items-center gap-1"><GoVerified/> Honest Pricing Guide <span className="border-b border-[#791b1b] cursor-pointer hover:text-[#d08585] hover:border-[#d08585] border-dashed transition font-semibold">Learn More</span></p>

      {/* Variant Selector */}
      <VariantSelector
        variants={product.variants}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      {/* Add to Cart */}
      <AddToCart
        product={product}
        activeVariant={activeVariant}
        selectedSize={selectedSize}
      />

      {/* icons for trust information */}

      <TrustIcon/>


     </div>
    </div>
  );
};

export default ProductInfo;
