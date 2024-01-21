import productsDataSlice from "@/reducers/productsDataSlice";
import { productsApi, singleProductApi } from "@/services";
import { configureStore } from "@reduxjs/toolkit";

const store: any = configureStore({
  reducer: {
    productsData: productsDataSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [singleProductApi.reducerPath]: singleProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(singleProductApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
