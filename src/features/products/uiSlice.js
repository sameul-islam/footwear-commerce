import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartDrawerOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openCartDrawer: (state) => {
      state.isCartDrawerOpen = true;
    },
    closeCartDrawer: (state) => {
      state.isCartDrawerOpen = false;
    },
  },
});

export const { openCartDrawer, closeCartDrawer } = uiSlice.actions;
export default uiSlice.reducer;

export const selectIsCartDrawerOpen = (state) => state.ui.isCartDrawerOpen;
