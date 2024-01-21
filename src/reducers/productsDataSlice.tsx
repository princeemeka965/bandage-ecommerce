import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  singleProduct: {},
};

export const productsDataSlice = createSlice({
  name: "productDataSlice",
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});

export const { SET_PRODUCTS, SET_SINGLE_PRODUCT } = productsDataSlice.actions;

export default productsDataSlice.reducer;
