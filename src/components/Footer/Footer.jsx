import React from 'react'
import { BsSend, BsTwitterX } from 'react-icons/bs';
import { FaLinkedinIn, FaPinterestP, FaTiktok } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { TfiFacebook } from 'react-icons/tfi';
import { VscSend } from 'react-icons/vsc';

const categoryList = [
  {
    title: "Support",
    item: [
      { label: "Contact Us", link: "#" },
      { label: "Help Center", link: "#" },
      { label: "Order Status", link: "#" },
      { label: "Shipping Information", link: "#" },
      { label: "Returns & Exchanges", link: "#" },
      { label: "Size Guide", link: "#" },
      { label: "Care Instructions", link: "#" },
      { label: "Warranty", link: "#" },
      { label: "FAQs", link: "#" },
      { label: "Track Your Order", link: "#" },
      { label: "Payment Methods", link: "#" },
      { label: "Student Discount", link: "#" },
      { label: "Accessibility", link: "#" },
      { label: "Report an Issue", link: "#" },
      { label: "Live Chat Support", link: "#" }
    ]
  },
  {
    title: "Shop",
    item: [
      { label: "All Shoes", link: "#" },
      { label: "Men's Shoes", link: "#" },
      { label: "Women's Shoes", link: "#" },
      { label: "New Arrivals", link: "#" },
      { label: "Best Sellers", link: "#" },
      { label: "Limited Edition", link: "#" },
      { label: "Seasonal Collection", link: "#" },
      { label: "Everyday Essentials", link: "#" },
      { label: "Premium Line", link: "#" },
      { label: "Sale", link: "#" },
      { label: "Gift Cards", link: "#" },
      { label: "Sustainable Products", link: "#" },
      { label: "Trending Now", link: "#" },
      { label: "Shop by Collection", link: "#" },
      { label: "Shop by Style", link: "#" }
    ]
  },
  {
    title: "Company",
    item: [
      { label: "Our Story", link: "#" },
      { label: "Our Philosophy", link: "#" },
      { label: "Design Process", link: "#" },
      { label: "Craftsmanship", link: "#" },
      { label: "Sustainability", link: "#" },
      { label: "Innovation", link: "#" },
      { label: "Careers", link: "#" },
      { label: "Press", link: "#" },
      { label: "Investors", link: "#" },
      { label: "Affiliates", link: "#" },
      { label: "Wholesale", link: "#" },
      { label: "Corporate Responsibility", link: "#" },
      { label: "Community", link: "#" },
      { label: "Events", link: "#" },
      { label: "Newsroom", link: "#" }
    ]
  },
  {
    title: "Legal",
    item: [
      { label: "Privacy Policy", link: "#" },
      { label: "Terms of Service", link: "#" },
      { label: "Cookie Policy", link: "#" },
      { label: "Accessibility Statement", link: "#" },
      { label: "Refund Policy", link: "#" },
      { label: "Shipping Policy", link: "#" },
      { label: "Warranty Policy", link: "#" },
      { label: "Modern Slavery Statement", link: "#" },
      { label: "Compliance", link: "#" }
    ]
  }
];


const Footer = () => {
  return (
    <div className='mt-16 md:mt-20 bg-[#1c1b1b] text-white w-full'>

      <div className=' flex flex-col lg:flex-row justify-around items-start p-5 md:p-10 mb-0 w-full'>

        <div className='flex flex-col items-center justify-center pt-6 md:pt-10'>
            <p className='font-Poppins text-white/70 text-sm p-5'>SUBSCRIBE TO OUR EMAILS</p>
            <div className='flex items-center gap-5'>
              <input type="text" className='text-white w-full font-Poppins  p-2 pr-8 border-0 focus:outline-none focus:ring-0 placeholder-white/80 border-b border-white/80' placeholder='Your email' /> <VscSend size={30} className='text-white/70 hover:text-white cursor-pointer transition duration-300 '/>
            </div>
        </div>

        <ul className='flex flex-col lg:flex-row w-[60%]  justify-evenly mt-10 '>
         {categoryList.map((category, idx) => (
          <li key={idx}>
          <h4 className='mb-4 font-Poppins text-white/90'>
           {category.title}
          </h4>

          <ul>
           {category.item.map((linkItem, index) => (
            <li key={index} className='py-2'>
             <a href={linkItem.link} className='text-xs text-white/60 hover:text-white transition duration-300'>
              {linkItem.label}
             </a>
            </li>
           ))}
          </ul>

          </li>
         ))}
        </ul>

      </div>



      <div className='flex gap-4 md:gap-5 mt-5 md:mt-0 items-center justify-center lg:items-start lg:justify-start sm:p-8 md:p-20'>

        <div className='inline-flex justify-center items-center cursor-pointer p-2 border rounded-full border-white/70 hover:border-white transition'>
        <SiInstagram  className='text-white/80 hover:text-white text-xl md:text-2xl transition'/>
        </div>
        <div className='inline-flex justify-center items-center cursor-pointer p-2 border rounded-full border-white/70 hover:border-white transition'>
        <FaPinterestP  className='text-white/80 hover:text-white text-xl md:text-2xl transition'/>
        </div>
        <div className='inline-flex justify-center items-center cursor-pointer p-2 border rounded-full border-white/70 hover:border-white transition'>
        <TfiFacebook  className='text-white/80 hover:text-white text-xl md:text-2xl transition'/>
        </div>
        <div className='inline-flex justify-center items-center cursor-pointer p-2 border rounded-full border-white/70 hover:border-white transition'>
        <BsTwitterX  className='text-white/80 hover:text-white text-xl md:text-2xl transition'/>
        </div>
        <div className='inline-flex justify-center items-center cursor-pointer p-2 border rounded-full border-white/70 hover:border-white transition'>
        <FaLinkedinIn  className='text-white/80 hover:text-white text-xl md:text-2xl transition'/>
        </div>
        <div className='inline-flex justify-center items-center cursor-pointer p-2 border rounded-full border-white/70 hover:border-white transition'>
        <FaTiktok className='text-white/80 hover:text-white text-xl md:text-2xl transition'/>
        </div>
      </div>

      <div className='w-[95%] justify-center items-center mx-auto border-t border-white/50 text-center font-Lato text-sm mt-5 p-5 pb-20 md:pb-5 text-white/80'>
         @ 2025 The James, All Rights Reserved
      </div>

    </div>
  )
}

export default Footer
