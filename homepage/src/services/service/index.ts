import { config } from "@/config";
import allServiceResponse from "@/types/service";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.url_host}/service`,
  }),
  endpoints: (builder) => ({
    getAllService: builder.query<allServiceResponse, void>({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});

export const { useGetAllServiceQuery } = serviceApi;
