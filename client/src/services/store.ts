import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { companyApi } from "./company";
import { imageApi } from "./image";
import { serviceApi } from "./service";
import { projectApi } from "./project";

export const store = configureStore({
  reducer: {
    [companyApi.reducerPath]: companyApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      companyApi.middleware,
      imageApi.middleware,
      serviceApi.middleware,
      projectApi.middleware
    ),
});

setupListeners(store.dispatch);
