import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../products/productsSlice';
import cartReducer from '../products/cartSlice';
import uiReducer from '../products/uiSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
});