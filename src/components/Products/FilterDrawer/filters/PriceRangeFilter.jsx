import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "../FilterSection";
import { selectFilterOptions, setPriceRange } from "../../../../features/products/productsSlice";
import { MdOutlineCompareArrows } from "react-icons/md";

const PriceRangeFilter = () => {
  const dispatch = useDispatch();
  const reduxRange = useSelector(state => state.products.filters.priceRange);

  const [range, setRange] = useState(reduxRange);

  useEffect(() => {
    setRange(reduxRange);
  }, [reduxRange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value === "" ? null : Number(value);

    const newRange =
      name === "min" ? [val, range[1]] : [range[0], val];

    setRange(newRange);
    dispatch(setPriceRange(newRange));
  };

  return (
    <FilterSection title="SORT BY PRICE">
      <div className="flex items-center gap-2 font-Libre text-gray-600">
        <input
          type="number"
          name="min"
          placeholder="Min"
          value={range[0] === null ? "" : range[0]}
          onChange={handleChange}
          className="border border-gray-300 rounded-tl-2xl rounded-br-2xl p-1 px-3 w-1/2"
        />
        <span><MdOutlineCompareArrows size={20}/></span>
        <input
          type="number"
          name="max"
          placeholder="Max"
          value={range[1] === null ? "" : range[1]}
          onChange={handleChange}
          className="border border-gray-300 rounded-tl-2xl rounded-br-2xl p-1 px-3 w-1/2"
        />
      </div>
    </FilterSection>
  );
};

export default PriceRangeFilter;
