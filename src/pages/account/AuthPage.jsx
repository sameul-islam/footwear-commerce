import React, { useState } from "react";
import logo from "../../assets/image/logo.webp"
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-white">

      <div className="p-3">
        
        <div className="w-full flex flex-col-reverse items-center justify-between mb-10">
        <h1 className="font-Lavishly text-gray-800 text-3xl font-semibold text-center">Account Login</h1>

        <Link to="/">
          <img src={logo} alt="logo" loading="lazy" className="h-16 "/>
        </Link>
        </div>

        <h2 className="text-2xl font-Outfit text-gray-800 mb-6">
          {isSignUp ? "Create Account" : "Sign In"}
        </h2>

        <form className="space-y-5">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 font-Outfit border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 font-Outfit border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 font-Outfit border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
          />

          <button
            type="submit"
            className="w-full bg-gray-600 font-Outfit hover:bg-gray-700 text-white font-semibold py-3 cursor-pointer transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 font-Outfit text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-gray-900 font-semibold cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
