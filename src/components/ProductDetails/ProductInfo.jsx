import React, { useEffect, useState } from "react";
import VariantSelector from "./VariantSelector";
import AddToCart from "./AddToCart";
import RatingStars from "./RatingStars";
import { GoVerified } from "react-icons/go";
import TrustIcon from "./TrustIcon";
import ProductDescription from "./ProductDescription";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openCartDrawer } from "../../features/products/uiSlice";

const ProductInfo = ({ product, activeVariant, setActiveVariant }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const price = activeVariant.price || product.price;

  useEffect(() => { 
    if (activeVariant && activeVariant.stockBySize) {
      const sizes = Object.keys(activeVariant.stockBySize);
      if(sizes.length > 0) {
        setSelectedSize(sizes[0]);
      }
    }
  }, [activeVariant]);

  const dispatch = useDispatch()

  return (
    <div className=" w-full md:w-1/2 md:h-screen items-center md:overflow-y-scroll no-scrollbar">
      <div className=" w-[94%] sm:max-w-xl md:max-w-xs lg:max-w-md xl:max-w-lg mx-auto py-10 flex flex-col">

      {/* Product Name */}
      <Link to={`/${product.gender}`} className="text-xs font-Lora cursor-pointer underline font-semibold uppercase mb-2">{product.gender}</Link>
      <h1 className="font-IM text-2xl text-black mb-1">{product.name}</h1>

      {/* reviews & ratings */}
      <RatingStars rating={product.rating} reviews={product.reviewsCount || 120} />

      {/* Price */}
      <p className="text-xs font-semibold text-gray-900 mb-1">
        {price.original} {price.currency}
      </p>

      <p className="text-sm font-Unna mb-6 text-[#791b1b] flex items-center gap-1"><GoVerified/> Honest Pricing Guide <span className="cursor-pointer hover:text-[#d08585] underline transition font-semibold">Learn More</span></p>

      {/* Variant Selector */}
      <VariantSelector
        variants={product.variants}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      {/* Add to Cart */}
      {selectedSize && (
      <AddToCart
        product={product}
        activeVariant={activeVariant}
        selectedSize={selectedSize}
        onOpenCartDrawer={() => dispatch(openCartDrawer())}
      />
      )}


      {/* icons for trust information */}

      <TrustIcon/>

      {/* Product Detail */}
      <ProductDescription description={product.description}/>

     </div>
    </div>
  );
};

export default ProductInfo;
