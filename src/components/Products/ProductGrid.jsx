import React from "react";
import { useSelector } from "react-redux";
import { gridMap } from "./utils/gridClasses";
import ProductCard from "./ProductCard";
import { selectViewMode } from "../../features/products/productsSlice";

const ProductGrid = ({ products }) => {
  const viewMode = useSelector(selectViewMode);

  return (
    <div
      className={`grid ${gridMap[viewMode]} gap-4 md:gap-6 lg:gap-8`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
