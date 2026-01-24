import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../features/products/cartSlice";
import  logo  from '../../assets/image/logo.webp'
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import paymentImage from '../../assets/image/payment.png'
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (    
    <div className="fixed inset-0 z-50 bg-white w-full">

      {/* top logo */}
      <Link className="w-full border-b border-black/15">
      <div className="max-w-5xl mx-auto items-center justify-start">
        <img src={logo} alt="logo" className="h-16" />
      </div>
      </Link>

      <div className=" h-screen w-full sm:w-[98%] md:w-[95%] lg:w-[75%] xl:w-[65%] 2xl:w-[55%] mx-auto flex flex-col md:flex-row overflow-hidden">

      {/* LEFT — CHECKOUT FORM */}
      <div className="md:w-[53%] w-full h-full px-5 pb-25 pt-8 border-r border-black/15 overflow-y-auto no-scrollbar">

      <div className="max-w-3xl mx-auto items-center justify-end flex flex-col">

        <h1 className="text-2xl font-semibold justify-start items-center w-full mb-8 font-Lavishly">
          Secure Checkout
        </h1>

        {/* Contact */}
        <section className="mb-12 w-full">
          <div className="w-full flex items-center justify-between font-Quicksand mb-4 text-gray-800 font-semibold">
          <h2 className="text-2xl">Contact</h2>
          <span className="text-sm underline cursor-pointer">Sign in</span>
          </div>
          <input
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 text-sm font-Outfit p-3 mb-4 focus:outline-none"
          />
          <div className="font-Outfit text-sm flex gap-2">
            <input type="checkbox"/> Email me with news and offers
          </div>
        </section>

        {/* Shipping */}
        <section className="mb-12 w-full">
          <h2 className="text-2xl font-Quicksand text-gray-800 font-semibold mb-4">Delivery</h2>

          <input list="countries" placeholder="Bangladesh" onChange={handleChange} className="border border-gray-300 font-Outfit text-sm p-3 mb-4 w-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="firstName" placeholder="First name" onChange={handleChange} className="border border-gray-300 p-3 font-Outfit text-sm" />
            <input name="lastName" placeholder="Last name" onChange={handleChange} className="border border-gray-300 p-3 font-Outfit text-sm" />
          </div>

          <input name="address" placeholder="Address" onChange={handleChange} className="w-full border border-gray-300 p-3 mb-4 font-Outfit text-sm" />
          <input name="address" placeholder="Appartment, suit, etc. (optional)" onChange={handleChange} className="w-full border border-gray-300 p-3 mb-4 font-Outfit text-sm" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="city" placeholder="City" onChange={handleChange} className="border border-gray-300 font-Outfit text-sm p-3" />
            <input name="country" placeholder="Country" onChange={handleChange} className="border border-gray-300 font-Outfit text-sm p-3" />
            <input name="postalCode" placeholder="Postal Code" onChange={handleChange} className="border border-gray-300 font-Outfit text-sm p-3" />
          </div>

          <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full border border-gray-300 p-3 mt-4 font-Outfit text-sm" />
        </section>

        {/*  Shipping */}
        <section className="mb-12 w-full">
          <h2 className="text-2xl font-Quicksand text-gray-800 font-semibold mb-4">
            Shipping Method
          </h2>
           <div className="border border-gray-300 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800 font-Outfit">Express Courier (Air)</h3>
              <span className="text-gray-800 text-sm font-semibold font-Outfit">BDT 5500</span>
            </div>
            <div className="flex flex-col text-gray-500 text-xs font-Outfit">
              <span>3 to 6 business days</span>
              <span>Prepayment of duties and taxes supported. Order delivery is subject to carrier delays</span>
            </div>
           </div>

           <div className="border border-gray-300 p-5 mt-2">
             <span className="text-xs text-gray-500 font-Outfit">Please allow 1-2 business days for your order to be processed for shipping.</span>
           </div>
        </section>

        {/* Payment */}
        <section className="mb-12 w-full">
         <h2 className="text-2xl font-Quicksand text-gray-800  mb-4 font-semibold">Payment</h2>

         <div className="border border-gray-300">

          <div className="flex items-center gap-2 justify-between border-b border-gray-300 bg-[#f5f5f5] px-5 py-2">
           <div className="flex items-center text-sm text-gray-700 font-Outfit gap-2 font-semibold cursor-pointer"><FaDotCircle/>Credit or Debit Card</div>
            <div className="flex items-center gap-2">
              <img src={paymentImage} alt="payment" className="h-5" />
              <span className="py-1 px-2 cursor-pointer bg-white text-xs font-Outfit">+5</span>
            </div>
          </div>

          
          <div className="p-5 bg-[#f7f7f7]">
          <input type="number" placeholder="Card Number" onChange={handleChange} className="border border-gray-300 font-Outfit text-sm p-3 mb-4 w-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="date" placeholder="Expiration Date (MM/YY)" onChange={handleChange} className="border border-gray-300 p-3 font-Outfit text-sm" />
            <input type="number" placeholder="Security Code" onChange={handleChange} className="border border-gray-300 p-3 font-Outfit text-sm" />
          </div>

          <input type="text" placeholder="Name of Cards" onChange={handleChange} className="w-full border border-gray-300 p-3 mb-4 font-Outfit text-sm" />
           
          <div className="font-Outfit text-sm flex gap-2">
            <input type="checkbox"/> Use shipping address as billing address
          </div>

          </div>

          <div className="flex items-center gap-2 justify-between border-t border-gray-300 bg-[#f5f5f5] px-5 py-3">
          <div className="flex items-center text-sm text-gray-700 font-Outfit gap-2 font-semibold cursor-pointer">
            <FaRegDotCircle/> More Payment Option
          </div>
          <HiDotsHorizontal className=" cursor-pointer"/>
          </div>

         </div>
        </section>

        {/* Remember */}
        <section className="mb-12 w-full">
          <h2 className="text-2xl font-Quicksand text-gray-800  mb-4 font-semibold">
            Remember me
          </h2>
          <div className="border border-gray-300 p-5">
           <div className="font-Outfit text-sm flex gap-2 mb-4">
            <input type="checkbox"/>Save my information for a faster checkout
          </div>
            <input
            type="number"
            name="email"
            placeholder="+880 1234-56789"
            onChange={handleChange}
            className="w-full border border-gray-300 text-sm font-Outfit p-3 mb-4 focus:outline-none"
          />
          </div>
          <div className="text-sm text-gray-600 font-Outfit mt-5">
            <p>By clicking below and placing your order, you agree (i) to make your purchase from Global-e as merchant of record for this transaction, subject to Global-e's Terms & Conditions; (ii) that your information will be handled by Global-e in accordance with the Global-e Privacy Policy; and (iii) that your information (excluding the payment details) will be shared between Global-e and The James.</p>
          </div>
        </section>

        {/* Place Order */}
        <button className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition cursor-pointer">
          Complete Order
        </button>

        <p className="text-sm text-gray-600 font-Quicksand mt-5">
          Your info will be saved to a Shop account. By continuing, you agree to Shop's Terms of Service and acknowledge the Privacy Policy.
        </p>
        </div>
      </div>



      {/* RIGHT — ORDER SUMMARY */}
      <div className="md:w-[47%] w-full h-full overflow-y-auto no-scrollbar px-6 py-12 bg-[#f5f5f5] md:bg-white">

        <h2 className="text-2xl font-semibold mb-6 font-Lavishly">Order Summary</h2>

        <div className="flex flex-col gap-4 mb-8">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-4 border-b border-gray-200 p-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover bg-[#f5f5f5]" />
              <div className="flex-1">
                <p className="text-sm font-medium font-Outfit">{item.name}</p>
                <p className="text-xs text-gray-600 font-Outfit">
                  {item.variantColor} · {item.size}
                </p>
                <p className="text-sm font-semibold mt-1">
                  ${item.price} * {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-6 space-y-3 text-sm font-Outfit mb-30">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Calculated at next step</span>
          </div>
          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

      </div>
     </div>
    </div>
  );
};

export default CheckoutPage;
