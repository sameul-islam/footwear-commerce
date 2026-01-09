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
    <FilterSection title="MATERIAL">
      {productTypes.map(type => (
        <button
          key={type}
          className={`
            px-3 py-1 rounded-xs border
            ${selectedType === type ? "bg-black/70 text-gray-50" : "border-gray-300 text-gray-600"}
            text-sm font-Outfit md:font-semibold
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
