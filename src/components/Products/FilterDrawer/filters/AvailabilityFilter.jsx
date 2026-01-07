import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "../FilterSection";
import { selectFilterOptions } from "../../../../features/products/productsSlice";
import { setAvailability } from "../../../../features/products/productsSlice";

const AvailabilityFilter = () => {
  const dispatch = useDispatch();
  const { availability } = useSelector(selectFilterOptions);
  const selectedAvailability = useSelector(state => state.products.filters.availability);

  return (
    <FilterSection title="Availability">
      <div className="flex flex-col gap-2">
        {availability.map(av => (
          <label key={av} className="flex items-center gap-2 text-sm font-Outfit">
            <input
              type="radio"
              name="availability"
              checked={selectedAvailability === av}
              onChange={() => dispatch(setAvailability(selectedAvailability === av ? null : av))}
              className="form-radio text-green-500"
            />
            {av === "inStock" ? "In Stock" : "Out of Stock"}
          </label>
        ))}
      </div>
    </FilterSection>
  );
};

export default AvailabilityFilter;
