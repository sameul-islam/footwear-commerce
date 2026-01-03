// import { createSelector, createSlice } from "@reduxjs/toolkit";
// import { products } from "../../data/productData";

// const initialState = {
//   allProducts: products,
//   filteredProducts: products,
//   searchQuery: "",
//   activeCategory: "all",
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     filterByCategory: (state, action) => {
//       state.activeCategory = action.payload;
//       state.filteredProducts = action.payload === "all"? state.allProducts : state.allProducts.filter(
//         (product) => product.category.toLowerCase() === action.payload.toLowerCase()
//       );
//     },
//      searchProducts: (state, action) => {
//       state.searchQuery = action.payload.toLowerCase();
//       state.filteredProducts = state.allProducts.filter((product) => product.name.toLowerCase().includes(state.searchQuery)
//       );
//     },
//     resetFilters: (state) => {
//       state.filteredProducts = state.allProducts;
//       state.activeCategory = "all";
//       state.searchQuery = "";
//     },
//   },
// });

// export const selectAllProducts = (state) => state.products.allProducts;
// export const selectBestSellers = createSelector( [selectAllProducts], (products) => products.filter(product => product.flags.isBestseller));
// export const selectSneakers = createSelector( 
//   state => state.products.allProducts, allProducts => allProducts.filter(p => p.productType === "sneakers")
// );

// export const { filterByCategory, searchProducts, resetFilters } = productsSlice.actions;
// export default productsSlice.reducer;






import { createSlice, createSelector } from "@reduxjs/toolkit";
import { products } from "../../data/productData";

const initialState = {
  allProducts: products,
  filteredProducts: products,
  viewMode: 3,

  products: products,

  filters: {
    gender: null,
    productType: null,
    priceRange: [0, 1000],
    sizes: [],
    colors: [],
    rating: null,
    availability: null,
  },

  sortBy: "default",
};

const productsSlice = createSlice ({
  name: "products",
  initialState,
  reducers: {
    setGender(state, action) {
      state.filters.gender = action.payload;
    },

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

    setRating(state, action) {
      state.filters.rating = action.payload;
    },

    setAvailability(state, action) {
      state.filters.availability = action.payload;
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;
    },

    resetFilters(state) {
      state.filters = initialState.filters;
      state.sortBy = "default";
    },




    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },

  }
});

export const { setGender, setProductType, setPriceRange, toggleSize, toggleColor, setRating, setAvailability, setSortBy, resetFilters } = productsSlice.actions;

export default productsSlice.reducer;

export const selectViewMode = (state) => state.products.viewMode;
export const { setViewMode } = productsSlice.actions;



const selectProducts = state => state.products.products;
const selectFilters = state => state.products.filters;
const selectSortBy = state => state.products.sortBy;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters, selectSortBy],
  (products, filters, sortBy) => {
    let result = [...products];

    if (filters.gender)
      result = result.filter(p => p.gender === filters.gender);

    if (filters.productType)
      result = result.filter(p => p.productType === filters.productType);

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

    if (filters.rating)
      result = result.filter(p => p.rating >= filters.rating);

    if (filters.availability)
      result = result.filter(p => p.availability === filters.availability);

    if (sortBy === "price-low")
      result.sort((a, b) => a.price.original - b.price.original);

    if (sortBy === "price-high")
      result.sort((a, b) => b.price.original - a.price.original);

    if (sortBy === "rating")
      result.sort((a, b) => b.rating - a.rating);

    return result;
  }
);



export const selectMenProducts = createSelector(
  [selectProducts],
  products => products.filter(p => p.gender === "men")
);




export const selectWomenProducts = createSelector(
  [selectProducts],
  products => products.filter(p => p.gender === "women")
);




export const selectSneakers = createSelector(
  [selectProducts],
  products => products.filter(p => p.productType === "sneakers")
);





export const selectFeaturedProducts = createSelector(
  [selectProducts],
  products => products.filter(p => p.flags.isFeatured)
);





export const selectBestSellers = createSelector(
  [selectProducts],
  products => products.filter(p => p.flags.isBestseller)
);





export const selectProductBySlug = slug =>
  createSelector([selectProducts],
    products => products.find(p => p.slug === slug)
  );
