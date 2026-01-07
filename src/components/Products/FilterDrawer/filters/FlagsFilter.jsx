import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "../FilterSection";
import { selectFilterOptions } from "../../../../features/products/productsSlice";
import { setSortBy } from "../../../../features/products/productsSlice";

const FlagsFilter = () => {
  const dispatch = useDispatch();
  const { flags } = useSelector(selectFilterOptions);

  return (
    <FilterSection title="Special">
      <div className="flex flex-wrap gap-2">
        {flags.map(flag => (
          <button
            key={flag}
            className="px-3 py-1 border rounded text-sm font-Outfit bg-gray-100 hover:bg-green-500 hover:text-white transition"
            onClick={() => dispatch(setSortBy(flag))}
          >
            {flag.replace("is", "")}
          </button>
        ))}
      </div>
    </FilterSection>
  );
};

export default FlagsFilter;
