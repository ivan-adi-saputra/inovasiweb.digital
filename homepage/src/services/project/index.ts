import { config } from "@/config";
import allProjectResponse from "@/types/project";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.url_host}/project`,
  }),
  endpoints: (builder) => ({
    getAllProject: builder.query<allProjectResponse, void>({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});

export const { useGetAllProjectQuery } = projectApi;
