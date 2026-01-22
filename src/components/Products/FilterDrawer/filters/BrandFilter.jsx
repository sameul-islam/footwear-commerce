import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "../FilterSection";
import { selectFilterOptions, toggleBrand } from "../../../../features/products/productsSlice";

const BrandFilter = () => {
  const dispatch = useDispatch();

  const { brands } = useSelector(selectFilterOptions);

  const selectedBrands = useSelector(
    state => state.products.filters.brands
  );

  return (
    <FilterSection title="BRAND">
      <div className="flex flex-wrap gap-2">
        {brands.map(brand => {
          const isActive = selectedBrands.includes(brand);

          return (
            <button
              key={brand}
              className={`
                px-3 py-1 rounded-xs border
                text-sm font-Outfit md:font-semibold
                transition
                ${
                  isActive
                    ? "bg-black/70 text-gray-50 border-black/70"
                    : "border-gray-300 text-gray-600 hover:border-gray-400"
                }
              `}
              onClick={() => dispatch(toggleBrand(brand))}
            >
              {brand.charAt(0).toUpperCase() + brand.slice(1)}
            </button>
          );
        })}
      </div>
    </FilterSection>
  );
};

export default BrandFilter;
