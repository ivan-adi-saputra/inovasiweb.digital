import { config } from "@/config";
import {
  ActivateForm,
  ActivateResponse,
  SigninForm,
  SigninResponse,
  SignupForm,
  SignupResponse,
} from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.url_host}/client`,
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signIn: builder.mutation<SigninResponse, SigninForm>({
      query: (body) => ({
        url: "/signin",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    signUp: builder.mutation<SignupResponse, SignupForm>({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    Activate: builder.mutation<ActivateResponse, ActivateForm>({
      query: (body) => ({
        url: "/activate",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useActivateMutation } =
  authApi;
