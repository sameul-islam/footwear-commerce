import React, { useEffect, useState } from 'react'
import { BsSliders2 } from 'react-icons/bs'
import { MdGridView, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setViewMode, selectViewMode, selectSneakers } from '../features/products/productsSlice'
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
    question: "Are these sneakers true to size?",
    answer: "Yes, our sneakers generally fit true to size. If you are between sizes, we recommend choosing the slightly larger size for optimal comfort. Designed with ergonomic foot support, these sneakers conform naturally to your foot shape, minimizing pressure points and ensuring comfort even during long walks, runs, or daily activities."
  },
  {
    question: "Can I use them for sports and running?",
    answer: "Absolutely. Our sneakers are crafted for both casual wear and active use. With cushioned midsoles, flexible yet supportive outsoles, and breathable uppers, they provide excellent traction, shock absorption, and comfort for jogging, gym workouts, or light sports. They strike a perfect balance between performance and style."
  },
  {
    question: "What materials are used?",
    answer: "These sneakers are made from high-quality materials such as engineered mesh, synthetic leather, and durable rubber soles. The breathable mesh keeps your feet cool, synthetic leather adds durability and sleek style, and the rubber soles ensure grip and long-lasting wear. Each material is carefully selected to provide comfort, flexibility, and support."
  },
  {
    question: "Do these sneakers come in multiple colors?",
    answer: "Yes, each sneaker style comes in a curated range of colors. From classic black and white to bold statement shades, we ensure that there is a sneaker to suit every personality and outfit. Each color is designed to complement the sneaker’s style and provide a fashionable yet functional look."
  },
  {
    question: "How do I clean and maintain these sneakers?",
    answer: "To keep your sneakers looking fresh, wipe them with a damp cloth or soft brush regularly. For mesh or fabric areas, gentle soap and water can be used. Avoid soaking them completely and let them air dry. Storing them in a cool, dry place will maintain shape and durability, ensuring your sneakers stay stylish for a long time."
  },
  {
    question: "Can I return or exchange sneakers if needed?",
    answer: "Yes, unused sneakers in their original packaging can be returned or exchanged within the standard return period. Our easy return and exchange process ensures you can shop confidently. Customer support is always available to help with any questions or guide you through returns, exchanges, or replacements quickly and smoothly."
  },
];


const SneakersProductPage = () => {
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

    const products = useSelector(selectSneakers);
    
    const qty = products.length;



  return (
    <>
    {loading ? ( <Loader/> ) : (

    <div className='w-full mt-15 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-20'>
      
      {/* header */}
      <div className=' bg-[#7FAE8C] w-full p-5 flex items-center justify-center font-Libre text-white '>
        <Link to="/" className='p-1 cursor-pointer hover:text-gray-300 transition duration-300'>Home</Link> /<span className='p-1'>Sneakers</span>
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
              SNEAKERS COLLECTION
              </h2>
              <p className='text-center text-gray-600 text-sm md:text-base mb-8'>
                Step into style and comfort with our premium sneakers collection. Designed for performance, casual wear, and everyday adventures, our sneakers combine ergonomic support, breathable materials, and modern designs. Perfect for running errands, hitting the gym, or exploring the city, these sneakers ensure your feet stay comfortable, supported, and stylish all day long. 
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
        <Link to="/bestsellers" className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>BestSellers</Link>
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

export default SneakersProductPage
