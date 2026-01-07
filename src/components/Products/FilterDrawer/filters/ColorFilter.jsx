import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "../FilterSection";
import { selectFilterOptions } from "../../../../features/products/productsSlice";
import { toggleColor } from "../../../../features/products/productsSlice";

const ColorFilter = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector(selectFilterOptions);
  const selectedColors = useSelector(state => state.products.filters.colors);

  return (
    <FilterSection title="Colors">
      <div className="flex flex-wrap gap-2">
        {colors.map(color => (
          <button
            key={color}
            className={`
              w-6 h-6 rounded-full border 
              ${selectedColors.includes(color) ? "border-green-500" : "border-gray-300"}
              transition
            `}
            style={{ backgroundColor: color }}
            onClick={() => dispatch(toggleColor(color))}
          />
        ))}
      </div>
    </FilterSection>
  );
};

export default ColorFilter;
