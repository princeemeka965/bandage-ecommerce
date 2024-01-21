import productsDataSlice from "@/reducers/productsDataSlice";
import { productsApi, singleProductApi } from "@/services";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedProductsDataReducer = persistReducer(
  persistConfig,
  productsDataSlice
);

export const store: any = configureStore({
  reducer: {
    productsData: persistedProductsDataReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [singleProductApi.reducerPath]: singleProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(singleProductApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
