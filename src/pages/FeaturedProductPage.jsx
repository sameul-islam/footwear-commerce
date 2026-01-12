import React, { useEffect, useState } from 'react'
import { BsSliders2 } from 'react-icons/bs'
import { MdGridView, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setViewMode, selectViewMode, selectSneakers, selectBestSellers, selectFeaturedProducts } from '../features/products/productsSlice'
import ProductGrid from '../components/Products/ProductGrid'
import { useIsMobile } from '../components/Products/mobileView'
import FilterDrawer from '../components/Products/FilterDrawer/FilterDrawer'
import ProductTypeFilter from '../components/Products/FilterDrawer/filters/ProductTypeFilter'
import PriceRangeFilter from '../components/Products/FilterDrawer/filters/PriceRangeFilter'
import ColorFilter from '../components/Products/FilterDrawer/filters/ColorFilter'
import SizeFilter from '../components/Products/FilterDrawer/filters/SizeFilter'
import Loader from '../components/Loader/Loader'
import GenderFilter from '../components/Products/FilterDrawer/filters/GenderFilter'
import { motion } from 'framer-motion'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const faqData = [
  {
    question: "What makes these products featured?",
    answer: "These items are handpicked based on innovation, design, and popularity. Each product showcases unique features or trends that set it apart, whether it's an exclusive material, cutting-edge design, or exceptional functionality. Our Featured Collection highlights the very best, giving you access to products that are stylish, premium, and ahead of the curve."
  },
  {
    question: "Are these featured products high quality?",
    answer: "Absolutely. Every item in the Featured Collection undergoes strict quality control to ensure it meets our high standards. From materials to finishing details, stitching, durability, and comfort, each product is designed to deliver a premium experience, ensuring long-lasting satisfaction and reliability."
  },
  {
    question: "Do these featured products come in multiple sizes or colors?",
    answer: "Yes, wherever applicable, our Featured products are offered in a variety of sizes and colors. We carefully curate the options to ensure style and versatility, allowing customers to choose according to their personal taste and needs while maintaining the high-quality standard of the collection."
  },
  {
    question: "Can these products be gifted?",
    answer: "Certainly. Featured items are perfect for gifting due to their unique design, premium quality, and universal appeal. Whether it’s for birthdays, holidays, or special occasions, gifting from our Featured Collection ensures a stylish and memorable experience for the recipient."
  },
  {
    question: "What is the return or exchange policy for featured items?",
    answer: "Unused featured products in their original packaging can be returned or exchanged within the standard return window. Our process is customer-friendly and designed to make shopping risk-free. Support staff is available to assist with exchanges, replacements, or returns to ensure a smooth and hassle-free experience."
  },
  {
    question: "Are these products suitable for daily use?",
    answer: "Yes, depending on the type of product, our Featured Collection items are designed for both style and functionality. Many are versatile enough for daily wear, offering comfort, durability, and aesthetic appeal. Each product balances trendiness with practical usability, ensuring it looks great while performing well."
  },
];


const FeaturedProductPage = () => {
    const [loading, setLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const dispatch = useDispatch();
    const viewMode = useSelector(selectViewMode);
    const isMobile = useIsMobile();
    const [activeFAQ, setActiveFAQ] = useState(null);
    const toggleFAQ = (index) => {
     setActiveFAQ(activeFAQ === index ? null : index);
    };


    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);


    const changeView = () => {
      if (isMobile) {
        dispatch(setViewMode(viewMode === 2 ? 1 : 2));
      } else {
        dispatch(setViewMode(viewMode === 3 ? 1 : viewMode + 1));
      }
    };

    const products = useSelector(selectFeaturedProducts);
    
    const qty = products.length;



  return (
    <>
    {loading ? ( <Loader/> ) : (

    <div className='w-full mt-15 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-2'>
      
      {/* header */}
      <div className=' bg-[#7FAE8C] w-full p-5 flex items-center justify-center font-Libre text-white '>
        <Link to="/" className='p-1 cursor-pointer hover:text-gray-300 transition duration-300'>Home</Link> /<span className='p-1'>Featureds</span>
      </div>
  
      {/* Filter & Grid view */}
      <div className='flex w-[92%] mx-auto rounded-full bg-gray-50 border-t border-b border-gray-100 items-center justify-between mt-2 md:mt-5 p-2 md:p-4 px-3 lg:px-8 mb-5'>
         <div onClick={() => setIsFilterOpen(true)} className='flex items-center gap-1 md:gap-2 cursor-pointer'>
          <span className='md:border border-gray-500 rounded-full p-2'> <BsSliders2 className='text-gray-700'/></span> <span className='font-Outfit font-semibold text-gray-700'>FILTER & SORT</span> <span className=' font-Lato text-sm flex items-center gap-0.5 text-[#5d3321]/60 font-semibold'><MdOutlineArrowBackIos/>{qty} products<MdOutlineArrowForwardIos/></span>
         </div>

         <div onClick={changeView} className='flex items-center text-gray-600 font-Outfit font-semibold gap-2 cursor-pointer hover:text-gray-400 transition duration-300'>
          <MdGridView size={18}/> <span className='hidden md:flex text-sm'>CHANGE VIEW</span>
         </div>
      </div>

     {/* Product Image */}

     <ProductGrid products={products}/>

      {/* FAQ  */}
          <motion.div className='w-full max-w-5xl mx-auto my-10 px-4 md:px-0' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h2 className='text-2xl md:text-3xl font-Outfit text-gray-700 text-center mb-4'>
              FEATURED COLLECTION
              </h2>
              <p className='text-center text-gray-600 text-sm md:text-base mb-8'>
             Explore our Featured Collection—carefully curated to highlight standout products that combine style, quality, and innovation. Each item is selected for its uniqueness, trending design, and exceptional craftsmanship. Perfect for those looking to elevate their wardrobe with products that are both fashionable and functional, our Featured Collection ensures premium comfort, style, and long-lasting appeal. 
              </p>
     
              <div className="space-y-4 max-w-3xl mx-auto">
                {faqData.map((item, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="border-b border-gray-200"
                    >
                     <button
                    className="w-full text-left p-4 flex justify-between items-center font-Outfit font-semibold text-gray-700 hover:bg-gray-50 transition"
                    onClick={() => toggleFAQ(index)}
                    >
                    {item.question}
                      <span className="ml-2">{activeFAQ === index ? <AiOutlineMinus/> : <AiOutlinePlus/>}</span>
                     </button>
                      <motion.div
                       className="overflow-hidden px-4 text-gray-600"
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: activeFAQ === index ? "auto" : 0, opacity:  activeFAQ === index ? 1 : 0 }}
                       transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                 <div className="py-2">
                 {item.answer}
                </div>
              </motion.div>
     
         </motion.div>
       ))}
     </div>
     
      </motion.div>
     

     {/* bottom part */}
     <div className='my-8 text-center max-w-5xl mx-auto'>
      <h1 className='text-3xl md:text-5xl font-Outfit text-gray-600 font-extralight'>Explore others collections</h1>
       <div className='grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center p-10 font-Unna'>
        <Link to='/women' className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>Womens </Link>
        <Link to="/men" className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>Mens</Link>
        <Link to="/sneakers" className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>Sneakers</Link>
        <Link to="/bestsellers" className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>Bestsellers</Link>
       </div>
     </div>

    
    {/* Filter Drawer */}
    <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
      <GenderFilter/>
      <ProductTypeFilter/>
      <PriceRangeFilter/>
      <SizeFilter/>
      <ColorFilter/>
    </FilterDrawer>
  
    </div>

   )}
    </>
  )
}

export default FeaturedProductPage
