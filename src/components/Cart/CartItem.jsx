import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../features/products/cartSlice";
import { LiaTimesSolid } from "react-icons/lia";
import { BsFileMinus, BsPlus } from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    if (item.quantity < item.stock) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
    }
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
    <div className="flex items-center justify-between border-b border-gray-300 pb-3">
      <img 
        src={item.image} 
        alt={item.name} 
        loading="lazy"
        className="w-18 h-18 sm:w-20 sm:h-20 bg-gray-50/60 object-cover rounded-lg" 
      />

      <div className="flex-1 px-3 flex flex-col justify-between h-20 font-Outfit">
        <p className="font-semibold text-sm">{item.name}</p>
        <p className="text-xs text-gray-600">
          {item.brand && <span>{item.brand} | </span>}
          Color: {item.variantColor} | Size: {item.size}
        </p>
        <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
          <span>{item.currency}</span> <span>{Number(item.price).toFixed(2)}</span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center border border-gray-300 overflow-hidden">
          <button 
            onClick={handleDecrease} 
            disabled={item.quantity <= 1}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <HiOutlineMinusSm/>
          </button>
          <span className="px-3 text-sm">{item.quantity}</span>
          <button 
            onClick={handleIncrease} 
            disabled={item.quantity >= item.stock}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <BsPlus/>
          </button>
        </div>

        <button
          onClick={handleRemove}
          className="text-red-600 hover:text-red-800 text-xs flex items-center cursor-pointer gap-1 mt-1"
        >
          <LiaTimesSolid size={14} /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;