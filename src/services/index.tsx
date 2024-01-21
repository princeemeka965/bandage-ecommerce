"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder: any) => ({
    getProductsListing: builder.query({
      query: (arg: any) => {
        const { skip, limit } = arg;
        return {
          url: "products",
          params: { skip, limit },
        };
      },
    }),
  }),
});

export const singleProductApi = createApi({
  reducerPath: "singleProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder: any) => ({
    getSingleProductListing: builder.query({
      query: (arg: any) => {
        const { id } = arg;
        return {
          url: `products/${id}`,
        };
      },
    }),
  }),
});

export const { useGetProductsListingQuery } = productsApi;

export const { useGetSingleProductListingQuery } = singleProductApi;
