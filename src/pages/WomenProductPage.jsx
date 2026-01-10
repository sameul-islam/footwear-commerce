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
import banner from '../assets/image/womenbanner.jpg'
import Loader from '../components/Loader/Loader'

const WomenProductPage = () => {
    const [loading, setLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const dispatch = useDispatch();
    const viewMode = useSelector(selectViewMode);
    const isMobile = useIsMobile();



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
    
    const qty = useSelector(selectWomenProducts).length;



  return (
     <>
      { loading ? (<Loader/>) : (
    <div className='w-full mt-15 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-2'>
      
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
          <span className='md:border border-gray-500 rounded-full p-2'> <BsSliders2 className='text-gray-700'/></span> <span className='font-Outfit font-semibold text-gray-700'>FILTER & SORT</span> <span className=' font-Lato text-sm flex items-center gap-0.5 text-[#5d3321] font-semibold opacity-60'><MdOutlineArrowBackIos/>{qty} products<MdOutlineArrowForwardIos/></span>
         </div>

         <div onClick={changeView} className='flex items-center text-gray-600 font-Outfit font-semibold gap-2 cursor-pointer hover:text-gray-400 transition duration-300'>
          <MdGridView size={18}/> <span className='hidden md:flex text-sm'>CHANGE VIEW</span>
         </div>
      </div>

     {/* Product Image */}

     <ProductGrid products={products}/>

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
    </FilterDrawer>
  
    </div>

    )}

    </>
  )
}

export default WomenProductPage
