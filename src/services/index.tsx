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

export const { useGetProductsListingQuery } = productsApi;
