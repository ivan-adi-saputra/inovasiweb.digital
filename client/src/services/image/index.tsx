import { config } from "@/config";
import { imageResponse } from "@/types/image";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api_url}/image`,
  }),
  tagTypes: ["image"],
  endpoints: (builder) => ({
    uploadImage: builder.mutation<imageResponse, any>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = imageApi;
