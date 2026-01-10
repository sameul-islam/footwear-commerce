import { createSlice, createSelector } from "@reduxjs/toolkit";
import { products } from "../../data/productData";
import { flatten, unique } from "./filterUtils";

const prices = products.map(p => p.price.original);
const defaultPriceRange = [Math.min(...prices), Math.max(...prices)];

const initialState = {
  viewMode: 2,

  products: products,

  filters: {
    productType: null,
    priceRange: defaultPriceRange,
    sizes: [],
    colors: [],
    availability: null,
    flags: [],
    gender: null,
  },

  sortBy: "default",

};

const productsSlice = createSlice ({
  name: "products",
  initialState,
  reducers: {

    setProductType(state, action) {
      state.filters.productType = action.payload;
    },

    setPriceRange(state, action) {
      state.filters.priceRange = action.payload;
    },

    toggleSize(state, action) {
      const size = action.payload;
      state.filters.sizes.includes(size)? state.filters.sizes = state.filters.sizes.filter(s => s !== size): state.filters.sizes.push(size);
    },

    toggleColor(state, action) {
      const color = action.payload;
      state.filters.colors.includes(color) ? state.filters.colors = state.filters.colors.filter(c => c !== color) : state.filters.colors.push(color);
    },

    setAvailability(state, action) {
      state.filters.availability = action.payload;
    },

    toggleFlag(state, action) {
      const flag = action.payload;
      state.filters.flags.includes(flag) ? state.filters.flags = state.filters.flags.filter(f => f !== flag) : state.filters.flags.push(flag);
    },

    setGender(state, action) {
      state.filters.gender = action.payload;
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;
    },

    resetFilters(state) {
      state.filters = { ...initialState.filters };
      state.sortBy = "default";
    },

    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },

  }
});

export const { setProductType, setPriceRange, toggleSize, toggleColor,toggleFlag,setGender, setAvailability, setSortBy, resetFilters, setViewMode } = productsSlice.actions;

export default productsSlice.reducer;

export const selectViewMode = (state) => state.products.viewMode;


// Filters and sorts products for UI rendering. Applies all active filters (type, price, size, color, availability) and returns the final product list shown in ProductGrid.  ( Making filtering )
const selectProducts = state => state.products.products;
const selectFilters = state => state.products.filters;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    let result = [...products];

    if (filters.productType)
      result = result.filter(p => p.productType === filters.productType);

    if (filters.gender)
      result = result.filter(p => p.gender === filters.gender);

    result = result.filter(p =>
      p.price.original >= filters.priceRange[0] &&
      p.price.original <= filters.priceRange[1]
    );

    if (filters.sizes.length)
      result = result.filter(p =>
        p.variants.some(v =>
          filters.sizes.some(size => v.stockBySize[size] > 0)
        )
      );

    if (filters.colors.length)
      result = result.filter(p =>
        p.variants.some(v => filters.colors.includes(v.color))
      );

    return result;
  }
);


// product page 
export const selectMenProducts = createSelector(
  [selectFilteredProducts],
  products => products.filter(p => p.gender === "men")
);

export const selectWomenProducts = createSelector(
  [selectFilteredProducts],
  products => products.filter(p => p.gender === "women")
);

export const selectSneakers = createSelector(
  [selectFilteredProducts],
  products => products.filter(p => p.productType === "sneakers")
);

export const selectFeaturedProducts = createSelector(
  [selectFilteredProducts],
  products => products.filter(p => p.flags.isFeatured)
);

export const selectBestSellers = createSelector(
  [selectFilteredProducts],
  products => products.filter(p => p.flags.isBestseller)
);



  

//  Generates available filter options for the filter UI. Used to display product types, price range, colors, sizes.  availability and flags in the filter sidebar/drawer. (That means just make options , Don't filtering)
  const selectAllProducts = (state) => state.products.products;

  export const selectFilterOptions = createSelector([selectAllProducts],(products) => {

    const productTypes = unique(products.map(p => p.productType));

    const prices = products.map(p => p.price.original);

    const priceRange = {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };

    const colors = unique(flatten(products.map(p => p.variants.map(v => v.color))));

    const sizes = unique(flatten(products.map(p => p.variants.map(v => Object.keys(v.stockBySize).filter(size => v.stockBySize[size] > 0 ))))).sort((a, b) => a - b);

    const genders = unique(products.map(p => p.gender));

    return {
      productTypes, priceRange, colors, sizes, genders
    };

  });