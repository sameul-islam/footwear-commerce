import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGender } from "../../../../features/products/productsSlice";
import { selectFilterOptions } from "../../../../features/products/productsSlice";
import FilterSection from "../FilterSection";

const GenderFilter = () => {
  const dispatch = useDispatch();
  const { genders } = useSelector(selectFilterOptions); 
  const selectedGender = useSelector(state => state.products.filters.gender);

  const handleGenderChange = (gender) => {
    dispatch(setGender(selectedGender === gender ? null : gender));
  };

  return (
    <FilterSection title="GENDER">
        {genders.map((gender) => (
          <button
            key={gender}
            onClick={() => handleGenderChange(gender)}
            className={` px-3 py-1 rounded-xs font-Outfit font-semibold text-sm border ${
              selectedGender === gender
                ? "bg-black/70 text-gray-50"
                : " text-gray-700 border-gray-300"
            } transition-all duration-300`}
          >
            {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </button>
        ))}
    </FilterSection>
  );
};

export default GenderFilter;
