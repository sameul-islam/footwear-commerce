// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'
// import { selectAllProducts } from '../features/products/productsSlice';

// const ProductDetailPage = () => {

//   const { slug } = useParams();
//   const products = useSelector(selectAllProducts);
//   const product =products.find(p => p.slug === slug);

//   const [activeImage, setActiveImage] = useState(null);
//   const [activeVariant, setActiveVariant] = useState(null);

//   useEffect(() => {
//     if (product) {
//       setActiveVariant(product.variants[0]);
//       setActiveImage(product.variants[0].images[0]);
//     }
//   }, [product]);

//   if (!product) {
//     return <div>Product not found</div>
//   }

//   if (!product || !activeVariant) {
//     return <div>Loading product...</div>
//   }

//   return (
//    <div style={{ padding: "40px" }}>

//       <h1>{product.name}</h1>
//       <p>{product.brand}</p>

//       <img
//         src={activeImage}
//         alt={product.name}
//         style={{ width: "300px" }}
//       />

//       <p>
//         Price: {product.price.original} {product.price.currency}
//       </p>

//       <h3>Colors</h3>
//       {product.variants.map((variant) => (
//         <button
//           key={variant.color}
//           onClick={() => {
//             setActiveVariant(variant);
//             setActiveImage(variant.images[0]);
//           }}
//         >
//           {variant.color}
//         </button>
//       ))}

//       <h3>Sizes</h3>

//       {activeVariant && Object.keys(activeVariant.stockBySize).map((size) => (
//         <button key={size} disabled={activeVariant.stockBySize[size] === 0}>
//           {size}
//         </button>
//       ))}

//       <p>{product.description.short}</p>

//     </div>
//   )
// }

// export default ProductDetailPage






import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllProducts } from "../features/products/productsSlice";
import ProductImagesGallery from "../components/ProductDetails/ProductImagesGallery";
import ProductInfo from "../components/ProductDetails/ProductInfo";

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
    <div className="flex flex-row items-center justify-between h-screen">
      <ProductImagesGallery
        product={product}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
      />
      <ProductInfo
        product={product}
        activeVariant={activeVariant}
        setActiveVariant={setActiveVariant}
      />
    </div>
  );
};

export default ProductDetailPage;
