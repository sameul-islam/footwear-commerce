import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProductBySlug } from "../features/products/productsSlice";
import ProductImagesGallery from "../components/ProductDetails/ProductImagesGallery";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import ProductImagesGalleryMobile from "../components/ProductDetails/ProductImagesGalleryMobile";
import Spotlight from "../components/ProductDetails/SpotLight";
import RecommendedProduct from "../components/ProductDetails/RecommendedProduct";
import ProductGuidanceSection from "../components/ProductDetails/ProductGuidanceSection";

const ProductDetailPage = () => {
  const { slug } = useParams();

  const product = useSelector(useMemo(() =>  selectProductBySlug(slug), [slug]));

const [activeVariant, setActiveVariant] = useState(null);

useEffect(() => {
  if (product?.variants?.length) {
    setActiveVariant(product.variants[0]);
  }
}, [product]);


if (!product) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Product not available</h1>
      <p className="text-gray-500 mt-2">
        The product you are looking for no longer exists.
      </p>
    </section>
  );
}

 
  if (!activeVariant) return <div>Loading...</div>;

  return (
    <div>
      {/* Upper Part */}
    <div className="flex flex-col md:flex-row min-h-screen mt-14 md:mt-20 xl:mt-18">
      <ProductImagesGallery
        product={product}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
      />
      <ProductImagesGalleryMobile product={product}  activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}/>

      <ProductInfo
        product={product}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
      />
    </div>

    {/* Lower Part */}
    <ProductGuidanceSection/>
    <Spotlight/>
    <RecommendedProduct/>

    </div>
  );
};

export default ProductDetailPage;
