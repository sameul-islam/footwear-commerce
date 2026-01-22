import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../../features/products/cartSlice';

const AddToCart = ({ product, activeVariant, selectedSize, onOpenCartDrawer }) => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (!selectedSize || isAdding) return;

    setIsAdding(true);

    dispatch(
      addToCart({
        product: {
          id: product.id,
          name: product.name,
          brand: product.brand,
          price: product.price
        },
        variant: {
          color: activeVariant.color || "N/A",
          images: activeVariant.images,
          price: activeVariant.price,
          stockBySize: activeVariant.stockBySize
        },
        size: selectedSize,
        quantity: 1
      })
    );


    await new Promise(resolve => setTimeout(resolve, 800));

 
    setIsAdding(false);


    setTimeout(() => {
      onOpenCartDrawer?.();
    }, 100);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="bg-black hover:bg-[#3d3d3d] text-white px-6 py-3 cursor-pointer transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isAdding ? <span className="font-Outfit text-sm font-semibold">ADDING...</span> : <span className="font-Outfit text-sm font-semibold">ADD TO CART</span>}
    </button>
  );
};

export default AddToCart;