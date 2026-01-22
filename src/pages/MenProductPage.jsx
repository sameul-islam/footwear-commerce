import React, { useEffect, useState } from 'react'
import { BsSliders2 } from 'react-icons/bs'
import { MdGridView, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setViewMode, selectViewMode, selectMenProducts } from '../features/products/productsSlice'
import ProductGrid from '../components/Products/ProductGrid'
import { useIsMobile } from '../components/Products/mobileView'
import FilterDrawer from '../components/Products/FilterDrawer/FilterDrawer'
import ProductTypeFilter from '../components/Products/FilterDrawer/filters/ProductTypeFilter'
import PriceRangeFilter from '../components/Products/FilterDrawer/filters/PriceRangeFilter'
import ColorFilter from '../components/Products/FilterDrawer/filters/ColorFilter'
import SizeFilter from '../components/Products/FilterDrawer/filters/SizeFilter'
import banner from '../assets/image/menbanner.png'
import Loader from '../components/Loader/Loader'
import { motion } from 'framer-motion'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import BrandFilter from '../components/Products/FilterDrawer/filters/BrandFilter'




const faqData = [
  { 
    question: "Are these shoes true to size?", 
    answer: "Yes, most of our shoes fit true to size. If you are between two sizes, we recommend choosing the slightly larger size for optimal comfort. Our shoes are designed with ergonomic foot support, ensuring they conform naturally to your foot shape, reducing pressure points and allowing you to move comfortably throughout the day. This approach minimizes blisters and keeps your feet fatigue-free even during long wear." 
  },
  { 
    question: "Can I wear them daily?", 
    answer: "Absolutely. These shoes are crafted for daily use with a perfect balance of comfort, support, and durability. Whether you are walking, commuting, or spending long hours on your feet, they provide responsive cushioning and breathable materials that maintain freshness. The lightweight construction ensures effortless movement while maintaining a polished look for casual or semi-formal outfits." 
  },
  { 
    question: "What materials are used?", 
    answer: "We use only premium materials, including full-grain leather, engineered mesh, and high-density rubber soles. The leather offers natural durability and elegance, mesh provides ventilation to keep your feet cool, and the soles ensure excellent grip and long-lasting wear. Every material is handpicked to combine comfort, aesthetics, and longevity, delivering a premium experience that evolves beautifully over time." 
  },
  { 
    question: "Do these shoes come in multiple colors?", 
    answer: "Yes, each style comes in a thoughtfully curated range of colors. We ensure each color complements the design, allowing you to match the shoes with various outfits. Whether you prefer classic neutrals or bold statement colors, our selection accommodates different personal styles while maintaining the premium quality and elegance of our collection." 
  },
  { 
    question: "How can I return if not satisfied?", 
    answer: "If you are not completely satisfied with your purchase, you can return unused shoes in their original packaging within the standard return window. Our return process is straightforward and hassle-free, designed to give you confidence while shopping. Customer support is available to guide you through the steps, ensuring a smooth experience whether you need a replacement, exchange, or refund." 
  },
];





const MenProductPage = () => {
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

    const products = useSelector(selectMenProducts);
    
    const qty = products.length;



  return (
    <>
    {loading ? ( <Loader/> ) : (

    <div className='w-full mt-15 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-20'>
      
      {/* header */}
      <div className=' bg-[#7FAE8C] w-[99%] mx-auto p-5 flex items-center justify-center font-Libre text-white rounded-t-xl md:rounded-t-2xl '>
        <Link to="/" className='p-1 cursor-pointer hover:text-gray-300 transition duration-300'>Home</Link> /<span className='p-1'>Men</span>
      </div>

      {/* banner */}
      <div className='w-[99%] mx-auto'>
        <img src={banner} alt="menBannerImage" className='object-cover object-center h-60 md:h-80 lg:h-100 w-full rounded-b-xl md:rounded-b-2xl' />
      </div>
  
      {/* Filter & Grid view */}
      <div className='flex w-[92%] mx-auto rounded-full bg-gray-50 border-t border-b border-gray-100 items-center justify-between mt-2 md:mt-5 p-2 md:p-4 px-3 lg:px-8 mb-5'>
         <div onClick={() => setIsFilterOpen(true)} className='flex items-center gap-1 md:gap-2 cursor-pointer'>
          <span className='md:border border-gray-500 rounded-full p-2'> <BsSliders2 className='text-gray-700'/></span> <span className='font-Outfit font-semibold text-gray-700'>FILTER & SORT</span> <span className=' font-Lato text-sm flex items-center gap-0.5 text-[#5d3321]/60 font-semibold '><MdOutlineArrowBackIos/>{qty} products<MdOutlineArrowForwardIos/></span>
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
         MEN'S SHOES
         </h2>
         <p className='text-center text-gray-600 text-sm md:text-base mb-8'>
          Find your perfect blend of style and comfort with our collection of men's shoes for any occasion. From business casual days to meeting up with friends after work to taking on your favorite trail, our men's shoes provide the ultimate in sustainable support for every step of your day—and look incredible while doing so. 
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
     <div className='mt-14 text-center max-w-5xl mx-auto'>
      <h1 className='text-3xl md:text-5xl font-Outfit text-gray-600 font-extralight'>Explore others collections</h1>
       <div className='grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center p-10 font-Unna'>
        <Link to='/women' className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>Womens </Link>
        <Link to="/sneakers" className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>Sneakers</Link>
        <Link to="/bestsellers" className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>BestSellers</Link>
        <Link to="/featureds" className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>Featureds</Link>
       </div>
     </div>

    
    {/* Filter Drawer */}
    <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
      <ProductTypeFilter/>
      <PriceRangeFilter/>
      <SizeFilter/>
      <ColorFilter/>
      <BrandFilter/>
    </FilterDrawer>
  
    </div>

   )}
    </>
  )
}

export default MenProductPage
