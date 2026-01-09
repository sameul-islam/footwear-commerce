import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "../FilterSection";
import { selectFilterOptions } from "../../../../features/products/productsSlice";
import { setSortBy } from "../../../../features/products/productsSlice";

const FlagsFilter = () => {
  const dispatch = useDispatch();
  const { flags } = useSelector(selectFilterOptions);

  return (
    <FilterSection title="SPECIAL">
      <div className="flex flex-wrap gap-2">
        {flags.map(flag => (
          <button
            key={flag}
            className="px-3 py-1 border border-gray-300 rounded-br-md rounded-tl-md rounded-bl-lg rounded-tr-xl text-sm font-Outfit hover:bg-gray-700 hover:text-gray-50 transition"
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
