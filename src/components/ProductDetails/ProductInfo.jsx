import React, { useState } from "react";
import VariantSelector from "./VariantSelector";
import AddToCart from "./AddToCart";

const ProductInfo = ({ product, activeVariant, setActiveVariant }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="w-1/2 h-screen items-center">
      <div className="max-w-lg mx-auto py-10 flex flex-col">

      {/* Product Name */}
      <h1 className="font-IM text-2xl text-black mb-1">{product.name}</h1>

      {/* Price */}
      <p className="text-xs font-semibold text-gray-900 mb-6">
        {product.price.original} {product.price.currency}
      </p>

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

      {/* Short Description */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">About this product</h3>
        <p className="text-gray-700">{product.description.short}</p>
      </div>

     </div>
    </div>
  );
};

export default ProductInfo;
