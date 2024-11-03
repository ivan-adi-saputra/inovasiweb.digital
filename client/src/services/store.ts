import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { companyApi } from "./company";
import { imageApi } from "./image";
import { serviceApi } from "./service";
import { projectApi } from "./project";
import authReducer from "./authSlice";
import { authApi } from "./auth";

export const store = configureStore({
  reducer: {
    [companyApi.reducerPath]: companyApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      companyApi.middleware,
      imageApi.middleware,
      serviceApi.middleware,
      projectApi.middleware,
      authApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
