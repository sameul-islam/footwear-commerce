import { createSelector, createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/productData";

const initialState = {
  allProducts: products,
  filteredProducts: products,
  searchQuery: "",
  activeCategory: "all",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.activeCategory = action.payload;
      state.filteredProducts = action.payload === "all"? state.allProducts : state.allProducts.filter(
        (product) => product.category.toLowerCase() === action.payload.toLowerCase()
      );
    },
     searchProducts: (state, action) => {
      state.searchQuery = action.payload.toLowerCase();
      state.filteredProducts = state.allProducts.filter((product) => product.name.toLowerCase().includes(state.searchQuery)
      );
    },
    resetFilters: (state) => {
      state.filteredProducts = state.allProducts;
      state.activeCategory = "all";
      state.searchQuery = "";
    },
  },
});

export const selectAllProducts = (state) => state.products.allProducts;
export const selectBestSellers = createSelector( [selectAllProducts], (products) => products.filter(product => product.flags.isBestseller));
export const selectSneakers = createSelector( 
  state => state.products.allProducts, allProducts => allProducts.filter(p => p.productType === "sneakers")
);

export const { filterByCategory, searchProducts, resetFilters } = productsSlice.actions;
export default productsSlice.reducer;