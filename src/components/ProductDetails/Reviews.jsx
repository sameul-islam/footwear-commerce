import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import sampleShoeImg from "../../assets/image/reviews.webp";
import { IoStarHalfSharp, IoStarSharp } from "react-icons/io5";
import { VscVerifiedFilled } from "react-icons/vsc";

const fakeReviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    date: "Jan 15, 2025",
    verified: true,
    comment: "Absolutely love these shoes! Super comfortable and perfect for daily runs.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 2,
    name: "Emily Smith",
    rating: 4,
    date: "Jan 18, 2025",
    verified: true,
    comment: "Great quality socks. They stay in place and feel amazing even after long hours.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 3,
    name: "Michael Brown",
    rating: 5,
    date: "Jan 20, 2025",
    verified: true,
    comment: "The shoe cleaner works wonders! My sneakers look brand new again.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 4,
    name: "Sophia Johnson",
    rating: 4,
    date: "Jan 21, 2025",
    verified: true,
    comment: "Comfortable, premium, and stylish. Highly recommend to anyone looking for daily wear shoes.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 5,
    name: "Daniel Lee",
    rating: 5,
    date: "Jan 22, 2025",
    verified: true,
    comment: "Socks are perfect for intense workouts. Breathable and high-quality fabric.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 6,
    name: "Olivia Davis",
    rating: 4,
    date: "Jan 23, 2025",
    verified: true,
    comment: "Cleaned my shoes easily with the premium cleaner. No damage to the material!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 7,
    name: "William Garcia",
    rating: 5,
    date: "Jan 24, 2025",
    verified: true,
    comment: "Super soft socks. Perfect fit and excellent for long runs.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 8,
    name: "Ava Martinez",
    rating: 5,
    date: "Jan 25, 2025",
    verified: true,
    comment: "Stylish and durable sneakers. Really worth the price.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 9,
    name: "James Wilson",
    rating: 4,
    date: "Jan 26, 2025",
    verified: true,
    comment: "Cleaner is very gentle but effective. My leather shoes look brand new.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 10,
    name: "Isabella Anderson",
    rating: 5,
    date: "Jan 27, 2025",
    verified: true,
    comment: "These socks provide amazing arch support. Highly recommend for running.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 11,
    name: "Ethan Thomas",
    rating: 5,
    date: "Jan 28, 2025",
    verified: true,
    comment: "Super comfortable and lightweight sneakers. Perfect for daily use.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 12,
    name: "Mia Jackson",
    rating: 4,
    date: "Jan 29, 2025",
    verified: true,
    comment: "Premium socks with great material. Worth every penny.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 13,
    name: "Alexander White",
    rating: 5,
    date: "Jan 30, 2025",
    verified: true,
    comment: "The shoe cleaner removed tough stains effortlessly. Very impressed.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 14,
    name: "Charlotte Harris",
    rating: 4,
    date: "Jan 31, 2025",
    verified: true,
    comment: "Great sneakers! Comfortable for long walks and stylish.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 15,
    name: "Benjamin Martin",
    rating: 5,
    date: "Feb 1, 2025",
    verified: true,
    comment: "These socks are perfect for winter and sports activities. Very happy.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 16,
    name: "Amelia Thompson",
    rating: 5,
    date: "Feb 2, 2025",
    verified: true,
    comment: "Premium quality and easy to use cleaner. My shoes look amazing.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 17,
    name: "Lucas Garcia",
    rating: 4,
    date: "Feb 3, 2025",
    verified: true,
    comment: "Very comfortable socks. Excellent material and breathable.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 18,
    name: "Harper Clark",
    rating: 5,
    date: "Feb 4, 2025",
    verified: true,
    comment: "The cleaner is gentle but powerful. Shoes feel brand new every time.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 19,
    name: "Henry Lewis",
    rating: 5,
    date: "Feb 5, 2025",
    verified: true,
    comment: "Socks are soft, breathable, and perfect for running. Excellent product.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
  {
    id: 20,
    name: "Evelyn Walker",
    rating: 4,
    date: "Feb 6, 2025",
    verified: true,
    comment: "Premium sneakers, stylish and comfortable. Highly recommend! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, perspiciatis sed ratione nam eum corporis quia nihil aliquid non labore ad ea delectus commodi maiores! Corrupti voluptas facilis modi sed.",
    productImg: sampleShoeImg
  },
];

const Reviews = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleSeeMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, fakeReviews.length));
  };

  return (
    <section className="mt-15 md:mt-30 w-full md:w-[80%] mx-auto">
      <h2 className="text-xl md:text-3xl font-Outfit text-center text-gray-800 mb-1">
        Customer Reviews
      </h2>
      <div className="text-center mb-10 text-sm font-Outfit text-gray-600 flex items-center justify-center gap-2">
        <p className="">4.5 STARS</p> <span className="text-[#791b1b] flex items-center gap-1"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarHalfSharp/> </span> <span className="px-2">2204 Reiviews</span>
      </div>

      <div className="flex flex-col gap-6">
        {fakeReviews.slice(0, visibleCount).map(review => (
          <div key={review.id} className="flex flex-col md:flex-row gap-4 p-6 border-b border-gray-300">
            
            {/* Left Section */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold font-Lavishly text-gray-800">{review.name}</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < review.rating ? <IoStarSharp key={i} className="text-[#791b1b]"/> : <IoStarHalfSharp key={i} className="text-[#791b1b]"/>
                  )}
                </div>
              </div>
              <p className="text-gray-700 font-Outfit text-sm w-[70%]">{review.comment}</p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-end gap-2">
              <img src={review.productImg} alt={review.name} loading="lazy" className="w-20 h-20 md:w-24 md:h-24 object-cover"/>
              <span className="text-[#791b1b] font-Poppins text-xs">{review.date}</span>
              <span className="text-[#791b1b] font-Poppins text-xs flex items-center gap-0.5"><VscVerifiedFilled/> {review.verified ? "Verified Buyer" : "Unverified"}</span>
            </div>

          </div>
        ))}

        {visibleCount < fakeReviews.length && (
          <button
            onClick={handleSeeMore}
            className="self-center mt-4 cursor-pointer font-Outfit relative group"
          >
            See More Reviews
            <span className='absolute left-0 -bottom-px h-px w-full bg-[#2f3542] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left'/>
          </button>
        )}
      </div>
    </section>
  );
};

export default Reviews;
