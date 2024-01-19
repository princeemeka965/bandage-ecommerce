import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsDataSlice = createSlice({
  name: "productDataSlice",
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { SET_PRODUCTS } = productsDataSlice.actions;

export default productsDataSlice.reducer;
