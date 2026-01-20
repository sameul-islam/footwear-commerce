// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from '../../features/products/cartSlice'

// const AddToCart = ({ 
//   product, 
//   activeVariant, 
//   selectedSize,
//   onOpenCartDrawer
// }) => {
//   const dispatch = useDispatch();
//   const [isAdding, setIsAdding] = useState(false);

//   const handleAddToCart = () => {
//     if (!selectedSize || isAdding) return;

//     setIsAdding(true);

//     onOpenCartDrawer?.();

//     dispatch(
//       addToCart({
//         id: product.id + selectedSize,
//         name: product.name,
//         image: activeVariant.images[0],
//         color: activeVariant.color || "N/A",
//         price: {
//           original: activeVariant.price?.original || 0,
//           currency: activeVariant.price?.currency || "$",
//         },
//         size: selectedSize,
//         quantity: 1,
//       })
//     );

//     setTimeout(() => {
//       setIsAdding(false);
//     }, 800);
//   };

//   return (
//     <button
//       onClick={handleAddToCart}
//       disabled={isAdding}
//       className="bg-black hover:bg-[#3d3d3d] text-white px-6 py-3 cursor-pointer font-Outfit text-sm transition duration-300 disabled:opacity-60"
//     >
//       {isAdding ? "ADDING..." : "ADD TO CART"}
//     </button>
//   );
// };

// export default AddToCart;









import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../../features/products/cartSlice'

const AddToCart = ({ product, activeVariant, selectedSize, onOpenCartDrawer }) => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize || isAdding) return;
    setIsAdding(true);

    dispatch(
      addToCart({
        id: product.id + selectedSize,
        name: product.name,
        image: activeVariant.images[0],
        color: activeVariant.color || "N/A",
        price: {
          original: activeVariant.price?.original || 0,
          currency: activeVariant.price?.currency || "$",
        },
        size: selectedSize,
        quantity: 1,
      })
    );

    onOpenCartDrawer?.();

    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="bg-black hover:bg-[#3d3d3d] text-white px-6 py-3 cursor-pointer font-Outfit text-sm transition duration-300 disabled:opacity-60"
    >
      {isAdding ? "ADDING..." : "ADD TO CART"}
    </button>
  );
};

export default AddToCart;
