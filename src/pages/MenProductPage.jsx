import React, { useState } from 'react'
import { BsSliders2 } from 'react-icons/bs'
import { MdGridView } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setViewMode, selectViewMode, selectMenProducts } from '../features/products/productsSlice'
import ProductGrid from '../components/Products/ProductGrid'
import { useIsMobile } from '../components/Products/mobileView'
import FilterDrawer from '../components/Products/FilterDrawer/FilterDrawer'
import ProductTypeFilter from '../components/Products/FilterDrawer/filters/ProductTypeFilter'
import PriceRangeFilter from '../components/Products/FilterDrawer/filters/PriceRangeFilter'
import ColorFilter from '../components/Products/FilterDrawer/filters/ColorFilter'
import AvailabilityFilter from '../components/Products/FilterDrawer/filters/AvailabilityFilter'
import FlagsFilter from '../components/Products/FilterDrawer/filters/FlagsFilter'
import SizeFilter from '../components/Products/FilterDrawer/filters/SizeFilter'

const MenProductPage = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const dispatch = useDispatch();
    const viewMode = useSelector(selectViewMode);
    const isMobile = useIsMobile();


    const changeView = () => {
      if (isMobile) {
        dispatch(setViewMode(viewMode === 2 ? 1 : 2));
      } else {
        dispatch(setViewMode(viewMode === 3 ? 1 : viewMode + 1));
      }
    };

    const products = useSelector(selectMenProducts);



  return (
    <div className='w-full mt-15 md:mt-20 lg:mt-24 xl:mt-0'>
      
      {/* header */}
      <div className=' bg-[#7FAE8C] w-full p-5 flex items-center justify-center font-Libre text-white'>
        <Link to="/" className='p-1 cursor-pointer hover:text-gray-300 transition duration-300'>Home</Link> /<span className='p-1'>Men</span>
      </div>
  
      {/* Filter & Grid view */}
      <div className='flex w-[92%] mx-auto rounded-full bg-gray-50 border-t border-b border-gray-100 items-center justify-between mt-2 md:mt-5 p-2 md:p-4 px-3 lg:px-8 mb-10 md:mb-20'>
         <div onClick={() => setIsFilterOpen(true)} className='flex items-center gap-1 md:gap-2 cursor-pointer'>
          <span className='md:border border-gray-500 rounded-full p-2'> <BsSliders2 className='text-gray-700'/></span> <span className='font-Outfit font-semibold text-gray-700'>FILTER & SORT</span> <span className='text-gray-500 font-Lato text-sm'>(50 products)</span>
         </div>

         <div onClick={changeView} className='flex items-center text-gray-600 font-Outfit font-semibold gap-2 cursor-pointer hover:text-gray-400 transition duration-300'>
          <MdGridView size={18}/> <span className='hidden md:flex text-sm'>CHANGE VIEW</span>
         </div>
      </div>

     {/* Product Image */}

     <ProductGrid products={products}/>

    
    {/* Filter Drawer */}
    <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
      <ProductTypeFilter/>
      <PriceRangeFilter/>
      <SizeFilter/>
      <ColorFilter/>
      <AvailabilityFilter/>
      <FlagsFilter/>
    </FilterDrawer>
  
    </div>
  )
}

export default MenProductPage
