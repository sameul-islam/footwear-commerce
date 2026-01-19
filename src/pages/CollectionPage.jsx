import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../features/products/productsSlice'
import ProductGrid from '../components/Products/ProductGrid'
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'

const CollectionPage = () => {
    const [loading, setLoading] = useState(true);


    const { gender, productType } = useParams();

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);

    const products = useSelector(selectAllProducts);

    const filteredProducts = products.filter((product) => {
      if (gender && product.gender !== gender) {
        return false;
      }

      if (productType) {
        const matchesProductType = product.productType === productType;
        const matchesCategory = product.category === productType;
        const matchesTags = product.tags?.includes(productType);
        
        if (!matchesProductType && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      return true;
    });

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
            <div className='w-[92%] mx-auto text-center mb-10 mt-20 md:mt-30'>
              <h1 className='text-2xl md:text-3xl font-Outfit text-gray-800 mb-2'>
                {getPageTitle()}
              </h1>
              <p className='text-gray-600 font-Tommorrow text-sm md:text-base'>
                Discover our curated collection of premium footwear
              </p>
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
          
          </div>
        )}
      </>
    )
}

export default CollectionPage