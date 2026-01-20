// import React from "react";
// import { useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity } from "../../features/products/cartSlice";
// import { LiaTimesSolid } from "react-icons/lia";

// const CartItem = ({ item }) => {
//   const dispatch = useDispatch();

//   const handleIncrease = () => {
//     dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
//   };

//   const handleDecrease = () => {
//     if (item.quantity > 1) {
//       dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
//     }
//   };

//   const handleRemove = () => {
//     dispatch(removeFromCart(item.id));
//   };

//   return (
//     <div className="flex items-center justify-between border-b pb-3">
//       {/* Image */}
//       <img
//         src={item.image} 
//         alt={item.name}
//         className="w-20 h-20 object-cover rounded"
//       />

//       {/* Info */}
//       <div className="flex-1 px-3 flex flex-col justify-between h-20">
//         <p className="font-semibold">{item.name}</p>
//         <p className="text-sm text-gray-600">
//           Color: {item.color || "N/A"} | Size: {item.size}
//         </p>
//         <p className="text-sm text-gray-800">
//           ${item.price?.currency || "$"}{Number(item.price?.original || 0).toFixed(2)}
//         </p>
//       </div>

//       {/* Quantity controls */}
//       <div className="flex flex-col items-center gap-1">
//         <div className="flex items-center border rounded overflow-hidden">
//           <button
//             onClick={handleDecrease}
//             className="px-2 bg-gray-100 hover:bg-gray-200"
//           >
//             -
//           </button>
//           <span className="px-3">{item.quantity}</span>
//           <button
//             onClick={handleIncrease}
//             className="px-2 bg-gray-100 hover:bg-gray-200"
//           >
//             +
//           </button>
//         </div>

//         {/* Remove button */}
//         <button
//           onClick={handleRemove}
//           className="text-red-600 hover:text-red-800 text-xs flex items-center gap-1 mt-1"
//         >
//           <LiaTimesSolid size={14} /> Remove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;








import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../features/products/cartSlice";
import { LiaTimesSolid } from "react-icons/lia";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between border-b pb-3">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />

      <div className="flex-1 px-3 flex flex-col justify-between h-20">
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-gray-600">
          Color: {item.color || "N/A"} | Size: {item.size}
        </p>
        <p className="text-sm text-gray-800">
          {item.price?.currency || "$"}{Number(item.price?.original || 0).toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center border rounded overflow-hidden">
          <button onClick={handleDecrease} className="px-2 bg-gray-100 hover:bg-gray-200">-</button>
          <span className="px-3">{item.quantity}</span>
          <button onClick={handleIncrease} className="px-2 bg-gray-100 hover:bg-gray-200">+</button>
        </div>

        <button
          onClick={handleRemove}
          className="text-red-600 hover:text-red-800 text-xs flex items-center gap-1 mt-1"
        >
          <LiaTimesSolid size={14} /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
