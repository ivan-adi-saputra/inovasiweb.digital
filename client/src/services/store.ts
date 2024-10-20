import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { companyApi } from "./company";
import { imageApi } from "./image";
import { serviceApi } from "./service";

export const store = configureStore({
  reducer: {
    [companyApi.reducerPath]: companyApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      companyApi.middleware,
      imageApi.middleware,
      serviceApi.middleware
    ),
});

setupListeners(store.dispatch);
