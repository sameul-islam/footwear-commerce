import React, { useEffect, useState } from 'react'
import { BsSliders2 } from 'react-icons/bs'
import { MdGridView, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setViewMode, selectViewMode, selectSneakers, selectBestSellers } from '../features/products/productsSlice'
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
    question: "Why are these products bestsellers?",
    answer: "These products have consistently received excellent reviews and repeat purchases from our customers. They combine premium quality, comfort, and style, making them a preferred choice for everyday wear, casual outings, or special occasions. Popularity reflects customer trust and satisfaction in both durability and design."
  },
  {
    question: "Are these bestsellers true to size?",
    answer: "Yes, our BestSellers are generally true to size. If you're between sizes, we recommend choosing the larger size for optimal comfort. Each product is carefully designed to provide the perfect fit while maintaining long-lasting support and minimizing discomfort, even during extended wear."
  },
  {
    question: "Can I trust the quality of these items?",
    answer: "Absolutely. Each bestseller undergoes strict quality checks to ensure materials, construction, and finishes meet our premium standards. From stitching to cushioning and from leather quality to sole durability, every detail is verified so you can enjoy both comfort and longevity in every product."
  },
  {
    question: "Do these products come in multiple colors or styles?",
    answer: "Yes, our BestSellers collection often includes a variety of colors and style variations to suit different tastes. Whether you prefer classic neutrals, bold statement colors, or timeless designs, there's a BestSeller for every preference. All options maintain the high quality and craftsmanship that make them popular."
  },
  {
    question: "What is the return or exchange policy for these items?",
    answer: "Unused items from our BestSellers collection can be returned or exchanged within the standard return window. Our process is simple and customer-friendly, ensuring peace of mind. Support staff is available to guide you through returns, exchanges, or replacements, making shopping both safe and enjoyable."
  },
  {
    question: "Are these products suitable for gifting?",
    answer: "Yes, BestSellers make excellent gifts due to their popularity, quality, and universal appeal. Each product is packaged with care and designed to impress. Whether it's a birthday, holiday, or special occasion, gifting from our BestSellers collection guarantees delight and satisfaction."
  },
];


const BestsellersProductPage = () => {
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

    const products = useSelector(selectBestSellers);
    
    const qty = products.length;



  return (
    <>
    {loading ? ( <Loader/> ) : (

    <div className='w-full mt-15 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-2'>
      
      {/* header */}
      <div className=' bg-[#7FAE8C] w-full p-5 flex items-center justify-center font-Libre text-white '>
        <Link to="/" className='p-1 cursor-pointer hover:text-gray-300 transition duration-300'>Home</Link> /<span className='p-1'>BestSellers</span>
      </div>
  
      {/* Filter & Grid view */}
      <div className='flex w-[92%] mx-auto rounded-full bg-gray-50 border-t border-b border-gray-100 items-center justify-between mt-2 md:mt-5 p-2 md:p-4 px-3 lg:px-8 mb-5'>
         <div onClick={() => setIsFilterOpen(true)} className='flex items-center gap-1 md:gap-2 cursor-pointer'>
          <span className='md:border border-gray-500 rounded-full p-2'> <BsSliders2 className='text-gray-700'/></span> <span className='font-Outfit font-semibold text-gray-700'>FILTER & SORT</span> <span className=' font-Lato text-sm flex items-center gap-0.5 text-[#5d3321] font-semibold opacity-60'><MdOutlineArrowBackIos/>{qty} products<MdOutlineArrowForwardIos/></span>
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
              BESTSELLERS COLLECTION
              </h2>
              <p className='text-center text-gray-600 text-sm md:text-base mb-8'>
              Discover our most popular and loved products in the BestSellers collection. These items are chosen by our customers for their superior quality, timeless style, and exceptional comfort. Whether you're shopping for shoes, sneakers, or trending essentials, our BestSellers guarantee satisfaction, reliability, and style for everyday use or special occasions. 
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
        <Link to="/featureds" className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>Featureds</Link>
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

export default BestsellersProductPage
