import React from "react";
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from "react-icons/io5";

  const RatingStars = ({ rating = 0, reviews = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center mb-2 gap-2 font-Outfit">
      {/* Stars */}
      <div className="flex items-center gap-1 text-[#791b1b]">
        {[...Array(fullStars)].map((_, i) => (
         <IoStarSharp key={`full-${i}`} className="text-sm" />
        ))}

        {hasHalfStar && <IoStarHalfSharp className="text-sm" />}

        {[...Array(emptyStars)].map((_, i) => (
          <IoStarOutline key={`empty-${i}`} className="text-sm" />
        ))}
      </div>

      {/* Reviews count */}
      <span className="text-sm text-gray-400">
        {reviews} reviews
      </span>
    </div>
  );
};

export default RatingStars;
