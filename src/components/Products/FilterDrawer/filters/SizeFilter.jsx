import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "../FilterSection";
import { selectFilterOptions } from "../../../../features/products/productsSlice";
import { toggleSize } from "../../../../features/products/productsSlice";

const SizeFilter = () => {
  const dispatch = useDispatch();
  const { sizes } = useSelector(selectFilterOptions);
  const selectedSizes = useSelector(state => state.products.filters.sizes);

  return (
    <FilterSection title="SIZE">
      <div className="flex flex-wrap gap-2">
        {sizes.map(size => (
          <button
            key={size}
            className={`
              px-2 py-1 border rounded-full rounded-tr-none text-sm font-Lora font-semibold
              ${selectedSizes.includes(size) ? "bg-black/70 text-gray-50 border-gray-900" : "border-gray-300 text-gray-600"}
              transition
            `}
            onClick={() => dispatch(toggleSize(size))}
          >
            {size}
          </button>
        ))}
      </div>
    </FilterSection>
  );
};

export default SizeFilter;
