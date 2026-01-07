import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "../FilterSection";
import { selectFilterOptions } from "../../../../features/products/productsSlice";
import { setProductType } from "../../../../features/products/productsSlice";

const ProductTypeFilter = () => {
  const dispatch = useDispatch();
  const { productTypes } = useSelector(selectFilterOptions);
  const selectedType = useSelector(state => state.products.filters.productType);

  return (
    <FilterSection title="Product Type">
      {productTypes.map(type => (
        <button
          key={type}
          className={`
            px-3 py-1 rounded-full border
            ${selectedType === type ? "bg-green-500 text-white" : "border-gray-300 text-gray-700"}
            text-sm font-Outfit font-semibold
            transition
          `}
          onClick={() => dispatch(setProductType(selectedType === type ? null : type))}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </FilterSection>
  );
};

export default ProductTypeFilter;
