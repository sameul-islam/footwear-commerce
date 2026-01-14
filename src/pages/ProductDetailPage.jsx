import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllProducts } from "../features/products/productsSlice";
import ProductImagesGallery from "../components/ProductDetails/ProductImagesGallery";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import ProductImagesGalleryMobile from "../components/ProductDetails/ProductImagesGalleryMobile";
import Spotlight from "../components/ProductDetails/SpotLight";
import RecommendedProduct from "../components/ProductDetails/RecommendedProduct";
import Reviews from "../components/ProductDetails/Reviews";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const products = useSelector(selectAllProducts);
  const product = products.find((p) => p.slug === slug);

  const [activeVariant, setActiveVariant] = useState(
    product?.variants[0] || null
  );

  if (!product) return <div>Product not found</div>;
  if (!activeVariant) return <div>Loading...</div>;

  return (
    <div>
      {/* Upper Part */}
    <div className="flex flex-col md:flex-row min-h-screen mt-14 md:mt-20 xl:mt-0">
      <ProductImagesGallery
        product={product}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
      />
      <ProductImagesGalleryMobile product={product}/>

      <ProductInfo
        product={product}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
      />
    </div>

    {/* Lower Part */}
    <Spotlight/>
    <RecommendedProduct/>
    <Reviews/>

    </div>
  );
};

export default ProductDetailPage;
