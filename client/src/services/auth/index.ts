import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api_url}/user`,
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signIn: builder.mutation<any, any>({
      query: (body) => ({
        url: "/signin",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useSignInMutation } = authApi;
