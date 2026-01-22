import React, { useEffect, useState } from 'react'
import { BsSliders2 } from 'react-icons/bs'
import { MdGridView, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setViewMode, selectViewMode, selectWomenProducts } from '../features/products/productsSlice'
import ProductGrid from '../components/Products/ProductGrid'
import { useIsMobile } from '../components/Products/mobileView'
import FilterDrawer from '../components/Products/FilterDrawer/FilterDrawer'
import ProductTypeFilter from '../components/Products/FilterDrawer/filters/ProductTypeFilter'
import PriceRangeFilter from '../components/Products/FilterDrawer/filters/PriceRangeFilter'
import ColorFilter from '../components/Products/FilterDrawer/filters/ColorFilter'
import SizeFilter from '../components/Products/FilterDrawer/filters/SizeFilter'
import banner from '../assets/image/womenbanner.png'
import Loader from '../components/Loader/Loader'
import { motion } from 'framer-motion'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import BrandFilter from '../components/Products/FilterDrawer/filters/BrandFilter'


const faqData = [
  {
    question: "Are these shoes true to size?",
    answer: "Yes, our women's shoes generally fit true to size. If you are between sizes, we recommend selecting the slightly larger size for optimal comfort. Each shoe is designed with ergonomic support to contour naturally to the shape of your foot, ensuring stability, reducing pressure points, and preventing discomfort during extended wear."
  },
  {
    question: "Can I wear them all day comfortably?",
    answer: "Absolutely. These shoes are crafted for long hours of wear without compromising on style or comfort. With cushioned insoles, flexible yet supportive soles, and breathable materials, they keep your feet fresh and comfortable whether you're at work, running errands, or enjoying a night out."
  },
  {
    question: "What materials are used in these shoes?",
    answer: "Our shoes are made from premium materials including soft full-grain leather, vegan leather options, breathable mesh, and durable rubber soles. The combination ensures long-lasting wear, aesthetic appeal, and ultimate comfort. Every material is carefully selected to provide support, flexibility, and an elegant look suitable for different occasions."
  },
  {
    question: "Do these shoes come in multiple colors?",
    answer: "Yes, every style is offered in a variety of colors, from classic neutrals to bold, fashionable hues. Each color palette is designed to complement the shoe's style, allowing you to match them seamlessly with your wardrobe while maintaining the elegance and premium feel of the collection."
  },
  {
    question: "How do I care for these shoes?",
    answer: "To maintain the beauty and longevity of your shoes, clean them gently with a soft cloth or brush. For leather shoes, use appropriate leather conditioner occasionally to keep them supple. Store them in a cool, dry place, and avoid excessive exposure to moisture. Proper care ensures that your shoes remain stylish and durable for years to come."
  },
  {
    question: "Can I return or exchange if needed?",
    answer: "Yes, you can return or exchange shoes that are unused and in their original packaging within the standard return window. Our hassle-free process is designed to give you peace of mind, and our customer support team is always available to guide you through returns, exchanges, or replacements promptly and efficiently."
  },
];



const WomenProductPage = () => {
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

    const products = useSelector(selectWomenProducts);
    
    const qty = products.length;



  return (
     <>
      { loading ? (<Loader/>) : (
    <div className='w-full mt-15 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-20'>
      
      {/* header */}
      <div className=' bg-[#7FAE8C] w-[99%] mx-auto p-5 flex items-center justify-center font-Libre text-white rounded-t-xl md:rounded-t-2xl '>
        <Link to="/" className='p-1 cursor-pointer hover:text-gray-300 transition duration-300'>Home</Link> /<span className='p-1'>Women</span>
      </div>

      {/* banner */}
      <div className='w-[99%] mx-auto'>
        <img src={banner} alt="menBannerImage" className='object-cover object-center h-60 md:h-80 lg:h-100 w-full rounded-b-xl md:rounded-b-2xl' />
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
         WOMEN'S SHOES
         </h2>
         <p className='text-center text-gray-600 text-sm md:text-base mb-8'>
         Discover the perfect combination of style, comfort, and elegance with our curated collection of women's shoes. Designed for every occasion—from professional settings to casual outings and weekend adventures—our shoes prioritize comfort, support, and high-quality materials, ensuring your feet look and feel amazing all day long. 
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
        <Link to='/men' className='text-gray-50 border border-gray-800 py-1.5 px-3 rounded-md bg-black/70 cursor-pointer hover:bg-gray-200 hover:text-gray-700 transition duration-500'>Mens </Link>
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

export default WomenProductPage
