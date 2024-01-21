import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  singleProduct: {},
  cartProducts: [],
  wishListProducts: [],
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
    SET_CART_PRODUCTS: (state, action) => {
      state.cartProducts = action.payload;
    },
    SET_WISHLIST_PRODUCTS: (state, action) => {
      state.wishListProducts = action.payload;
    },
  },
});

export const {
  SET_PRODUCTS,
  SET_SINGLE_PRODUCT,
  SET_CART_PRODUCTS,
  SET_WISHLIST_PRODUCTS,
} = productsDataSlice.actions;

export default productsDataSlice.reducer;
