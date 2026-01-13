import React from "react";

const AddToCart = ({ product, activeVariant, selectedSize }) => {
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
    console.log("Add to cart:", {
      productId: product.id,
      variant: activeVariant.color,
      size: selectedSize,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-black hover:bg-[#3d3d3d] text-white px-6 py-3 cursor-pointer font-Outfit text-sm transition duration-300 "
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
