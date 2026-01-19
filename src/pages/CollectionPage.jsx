// import React, { useEffect, useState } from 'react'
// import { BsSliders2 } from 'react-icons/bs'
// import { MdGridView, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
// import { useDispatch, useSelector } from 'react-redux'
// import { setViewMode, selectViewMode, selectAllProducts } from '../features/products/productsSlice'
// import ProductGrid from '../components/Products/ProductGrid'
// import { useIsMobile } from '../components/Products/mobileView'
// import FilterDrawer from '../components/Products/FilterDrawer/FilterDrawer'
// import ProductTypeFilter from '../components/Products/FilterDrawer/filters/ProductTypeFilter'
// import PriceRangeFilter from '../components/Products/FilterDrawer/filters/PriceRangeFilter'
// import ColorFilter from '../components/Products/FilterDrawer/filters/ColorFilter'
// import SizeFilter from '../components/Products/FilterDrawer/filters/SizeFilter'
// import Loader from '../components/Loader/Loader'
// import GenderFilter from '../components/Products/FilterDrawer/filters/GenderFilter'
// import { useParams } from 'react-router-dom'




// const CollectionPage = () => {
//     const [loading, setLoading] = useState(true);
//     const [isFilterOpen, setIsFilterOpen] = useState(false);
//     const dispatch = useDispatch();
//     const viewMode = useSelector(selectViewMode);
//     const isMobile = useIsMobile();

//     const { gender, productType } = useParams();


//     useEffect(() => {
//       const timer = setTimeout(() => setLoading(false), 1500);
//       return () => clearTimeout(timer);
//     }, []);


//     const changeView = () => {
//       if (isMobile) {
//         dispatch(setViewMode(viewMode === 2 ? 1 : 2));
//       } else {
//         dispatch(setViewMode(viewMode === 3 ? 1 : viewMode + 1));
//       }
//     };

//     const products = useSelector(selectAllProducts);

//     const filteredProducts = products.filter(
//       (p) => p.gender === gender && p.productType === productType
//     );


    
//     const qty = products.length;



//   return (
//     <>
//     {loading ? ( <Loader/> ) : (

//     <div className='w-full mt-15 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-20'>
      
//       {/* header */}
//       <h1>
//         Collection
//       </h1>
  
//       {/* Filter & Grid view */}
//       <div className='flex w-[92%] mx-auto rounded-full bg-gray-50 border-t border-b border-gray-100 items-center justify-between mt-2 md:mt-5 p-2 md:p-4 px-3 lg:px-8 mb-5'>
//          <div onClick={() => setIsFilterOpen(true)} className='flex items-center gap-1 md:gap-2 cursor-pointer'>
//           <span className='md:border border-gray-500 rounded-full p-2'> <BsSliders2 className='text-gray-700'/></span> <span className='font-Outfit font-semibold text-gray-700'>FILTER & SORT</span> <span className=' font-Lato text-sm flex items-center gap-0.5 text-[#5d3321]/60 font-semibold'><MdOutlineArrowBackIos/>{qty} products<MdOutlineArrowForwardIos/></span>
//          </div>

//          <div onClick={changeView} className='flex items-center text-gray-600 font-Outfit font-semibold gap-2 cursor-pointer hover:text-gray-400 transition duration-300'>
//           <MdGridView size={18}/> <span className='hidden md:flex text-sm'>CHANGE VIEW</span>
//          </div>
//       </div>

//      {/* Product Image */}

//      <ProductGrid products={filteredProducts}/>

    
//     {/* Filter Drawer */}
//     <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
//       <GenderFilter/>
//       <ProductTypeFilter/>
//       <PriceRangeFilter/>
//       <SizeFilter/>
//       <ColorFilter/>
//     </FilterDrawer>
  
//     </div>

//    )}
//     </>
//   )
// }

// export default CollectionPage

















import React, { useEffect, useState } from 'react'
import { BsSliders2 } from 'react-icons/bs'
import { MdGridView, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setViewMode, selectViewMode, selectAllProducts } from '../features/products/productsSlice'
import ProductGrid from '../components/Products/ProductGrid'
import { useIsMobile } from '../components/Products/mobileView'
import FilterDrawer from '../components/Products/FilterDrawer/FilterDrawer'
import ProductTypeFilter from '../components/Products/FilterDrawer/filters/ProductTypeFilter'
import PriceRangeFilter from '../components/Products/FilterDrawer/filters/PriceRangeFilter'
import ColorFilter from '../components/Products/FilterDrawer/filters/ColorFilter'
import SizeFilter from '../components/Products/FilterDrawer/filters/SizeFilter'
import Loader from '../components/Loader/Loader'
import GenderFilter from '../components/Products/FilterDrawer/filters/GenderFilter'
import { useParams, useSearchParams } from 'react-router-dom'

const CollectionPage = () => {
    const [loading, setLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const dispatch = useDispatch();
    const viewMode = useSelector(selectViewMode);
    const isMobile = useIsMobile();

    const { gender, productType } = useParams();
    const [searchParams] = useSearchParams();

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

    const products = useSelector(selectAllProducts);

    // Advanced Filtering Logic
    const filteredProducts = products.filter((product) => {
      // Gender filter (from URL)
      if (gender && product.gender !== gender) {
        return false;
      }

      // ProductType/Category filter (from URL)
      if (productType) {
        const matchesProductType = product.productType === productType;
        const matchesCategory = product.category === productType;
        const matchesTags = product.tags.includes(productType);
        
        if (!matchesProductType && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      return true;
    });

    const qty = filteredProducts.length;

    // Generate page title
    const getPageTitle = () => {
      if (gender && productType) {
        const genderText = gender.charAt(0).toUpperCase() + gender.slice(1);
        const typeText = productType.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        return `${genderText}'s ${typeText}`;
      } else if (gender) {
        return `${gender.charAt(0).toUpperCase() + gender.slice(1)}'s Collection`;
      } else if (productType) {
        return productType.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      }
      return 'Collection';
    };

    return (
      <>
        {loading ? ( <Loader/> ) : (
          <div className='w-full mt-15 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-20'>
            
            {/* Header */}
            <div className='w-[92%] mx-auto'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold font-Outfit text-gray-800 mb-2'>
                {getPageTitle()}
              </h1>
              <p className='text-gray-600 font-Lato text-sm md:text-base'>
                Discover our curated collection of premium footwear
              </p>
            </div>
        
            {/* Filter & Grid view */}
            <div className='flex w-[92%] mx-auto rounded-full bg-gray-50 border-t border-b border-gray-100 items-center justify-between mt-5 md:mt-8 p-2 md:p-4 px-3 lg:px-8 mb-5'>
              <div onClick={() => setIsFilterOpen(true)} className='flex items-center gap-1 md:gap-2 cursor-pointer'>
                <span className='md:border border-gray-500 rounded-full p-2'> 
                  <BsSliders2 className='text-gray-700'/>
                </span> 
                <span className='font-Outfit font-semibold text-gray-700'>FILTER & SORT</span> 
                <span className='font-Lato text-sm flex items-center gap-0.5 text-[#5d3321]/60 font-semibold'>
                  <MdOutlineArrowBackIos/>
                  {qty} {qty === 1 ? 'product' : 'products'}
                  <MdOutlineArrowForwardIos/>
                </span>
              </div>

              <div onClick={changeView} className='flex items-center text-gray-600 font-Outfit font-semibold gap-2 cursor-pointer hover:text-gray-400 transition duration-300'>
                <MdGridView size={18}/> 
                <span className='hidden md:flex text-sm'>CHANGE VIEW</span>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts}/>
            ) : (
              <div className='w-[92%] mx-auto text-center py-20'>
                <h2 className='text-2xl font-Outfit font-semibold text-gray-700'>No products found</h2>
                <p className='text-gray-500 mt-2'>Try adjusting your filters or browse other collections</p>
              </div>
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

export default CollectionPage