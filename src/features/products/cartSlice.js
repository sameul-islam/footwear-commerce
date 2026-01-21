import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const { product, variant, size, quantity } = action.payload;

      const safeQuantity = quantity || 1;

      if (!size) return;

      const id = `${product.id}-${variant.color}-${size}`;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity = Math.min(
          existingItem.quantity + safeQuantity,
          variant.stockBySize[size]
        );
      } else {
        state.items.push({
          id,
          productId: product.id,
          name: product.name,
          brand: product.brand,
          image: variant.images[0],
          price: variant.price?.original || product.price.original,
          currency: product.price.currency,
          variantColor: variant.color,
          size,
          quantity: safeQuantity,
          stock: variant.stockBySize[size],
        });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = Math.min(Math.max(1, quantity), item.stock);
      }
    },

    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = state => state.cart.items;

export const selectCartQuantity = state => 
  state.cart.items.reduce((acc, item) => acc + item.quantity, 0);

export const selectCartTotal = state =>
  state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);