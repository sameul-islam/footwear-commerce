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
    <FilterSection title="COLORS">
      <div className="flex flex-wrap gap-2">
        {colors.map(color => (
          <button
            key={color}
            className={`
              w-6 h-6 border-2 p-1 
              ${selectedColors.includes(color) ? "border-gray-900 rounded-lg" : "border-gray-100"}
              transition duration-500
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
