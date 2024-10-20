import { config } from "@/config";
import {
  allServiceResponse,
  serviceForm,
  serviceResponse,
} from "@/types/service";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api_url}/service`,
  }),
  tagTypes: ["service"],
  endpoints: (builder) => ({
    getAllService: builder.query<allServiceResponse, void>({
      query: () => ({
        url: "/",
      }),
      providesTags: ["service"],
    }),
    getOneService: builder.query<serviceResponse, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ["service"],
    }),
    createService: builder.mutation<serviceResponse, serviceForm>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["service"],
    }),
    updateService: builder.mutation<
      serviceResponse,
      { id: string; body: serviceForm }
    >({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: builder.mutation<serviceResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetAllServiceQuery,
  useGetOneServiceQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
