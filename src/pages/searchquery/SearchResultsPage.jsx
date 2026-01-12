import React, { useEffect, useState } from 'react'
import { BsSliders2 } from 'react-icons/bs'
import { MdGridView } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setViewMode, selectViewMode, selectSearchedProducts, setSearchQuery } from '../../features/products/productsSlice'
import Grid from './Grid'
import { useIsMobile } from '../../components/Products/mobileView'
import FilterDrawer from '../../components/Products/FilterDrawer/FilterDrawer'
import ProductTypeFilter from '../../components/Products/FilterDrawer/filters/ProductTypeFilter'
import PriceRangeFilter from '../../components/Products/FilterDrawer/filters/PriceRangeFilter'
import ColorFilter from '../../components/Products/FilterDrawer/filters/ColorFilter'
import SizeFilter from '../../components/Products/FilterDrawer/filters/SizeFilter'
import Loader from '../../components/Loader/Loader'
import GenderFilter from '../../components/Products/FilterDrawer/filters/GenderFilter'
import SearchInput from './SearchInput'
import NoResults from './NoResults'
import Pagination from './Pagination'






const SearchResultsPage = () => {
    const [loading, setLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const dispatch = useDispatch();
    const viewMode = useSelector(selectViewMode);
    const isMobile = useIsMobile();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;


    const searchQuery = useSelector(
      (state) => state.products.searchQuery
    );


    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);


    const changeView = () => {
      if (isMobile) {
        dispatch(setViewMode(viewMode === 2 ? 1 : 2));
      } else {
        dispatch(setViewMode(viewMode === 3 ? 1 : viewMode + 1));
      }
    };

    const products = useSelector(selectSearchedProducts);
    
    const qty = products.length;


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProdduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProdduct, indexOfLastProduct);


    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);


  return (
    <>
    {loading ? ( <Loader/> ) : (

    <div className='w-full mt-15 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-2'>

      <SearchInput/>

      <p className='text-sm text-gray-500 mb-2 text-center font-Poppins'>
       Showing {qty} results {searchQuery && ( <>for <span className='font-semibold'>"{searchQuery}"</span></>)}
      </p>
      
  
      {/* Filter & Grid view */}
      <div className='flex w-[92%] mx-auto rounded-full  border-t border-b border-gray-100 border-dashed items-center justify-between mt-2 md:mt-5 p-2 md:p-4 px-3 lg:px-8 mb-10'>
         <div onClick={() => setIsFilterOpen(true)} className='flex items-center gap-1 md:gap-2 cursor-pointer'>
          <span className='md:border border-gray-500 rounded-full p-2'> <BsSliders2 className='text-gray-700 hover:text-gray-500 transition'/></span> <span className='font-Outfit font-semibold text-gray-700 hover:text-gray-500 transition'>FILTER & SORT</span>
         </div>

         <div onClick={changeView} className='flex items-center text-gray-600 font-Outfit font-semibold gap-2 cursor-pointer hover:text-gray-400 transition duration-300'>
          <MdGridView size={18}/> <span className='hidden md:flex text-sm'>CHANGE VIEW</span>
         </div>
      </div>

     {/* Product Image */}

    { products.length > 0 ? (
      <Grid products={currentProducts} /> ) : (<NoResults query={searchQuery} onClear={() => dispatch(setSearchQuery(""))}/> )
     }

     {/* Pagination */}
 {products.length > productsPerPage && (
  <Pagination
    totalProducts={products.length}
    productsPerPage={productsPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  />
)}



    
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

export default SearchResultsPage
