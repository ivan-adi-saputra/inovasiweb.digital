import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { companyApi } from "./company";
import { imageApi } from "./image";

export const store = configureStore({
  reducer: {
    [companyApi.reducerPath]: companyApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companyApi.middleware, imageApi.middleware),
});

setupListeners(store.dispatch);
