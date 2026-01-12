import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

const NoResults = ({ query, onClear }) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center px-4">
      
      {/* Icon */}
      <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
        <FiSearch size={28} className="text-gray-400" />
      </div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-Outfit font-semibold text-gray-700">
        No results found
      </h2>

      {/* Subtitle */}
      <p className="mt-2 text-sm md:text-base text-gray-500 max-w-md font-Poppins">
        We couldn't find any products matching{" "}
        <span className="font-semibold text-gray-700">“{query}”</span>.
        Try a different keyword or clear your search.
      </p>

      {/* Clear Button */}
      <button
        onClick={onClear}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold font-Lato text-gray-600 hover:bg-gray-100 transition"
      >
        <FiX size={16} />
        Clear search
      </button>
    </div>
  );
};

export default NoResults;
