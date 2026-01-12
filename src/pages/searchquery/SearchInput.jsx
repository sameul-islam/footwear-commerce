import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { setSearchQuery } from '../../features/products/productsSlice';
import { debounce } from 'lodash';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setInputValue(q);
    dispatch(setSearchQuery(q));
  }, []);

  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(setSearchQuery(query));
      setSearchParams(query ? { q: query } : {});
    }, 500),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    }
  },[debouncedSearch]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value.toLowerCase());
  };

  const handleClear = () => {
    setInputValue("");
    dispatch(setSearchQuery(""));
    setSearchParams({});
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      debouncedSearch.flush();
    }
  };

  return (
    <div className="flex items-center px-3 py-2 max-w-5xl mx-auto mt-10  mb-10 md:mb-20 border-b border-gray-200">
      <FiSearch className="text-gray-400 mr-2" size={24} />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for products..."
        className="text-gray-700 font-Outfit p-3 w-full outline-none"
      />
      {inputValue && (
        <FiX
          onClick={handleClear}
          className="ml-2 cursor-pointer text-gray-400 hover:text-gray-600 hover:rotate-180 transition duration-500"
          size={24}
        />
      )}
    </div>
  )
}

export default SearchInput
