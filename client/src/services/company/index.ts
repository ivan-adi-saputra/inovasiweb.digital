import { config } from "@/config";
import {
  allCompanyResponse,
  companyForm,
  companyResponse,
} from "@/types/company";
import { IdCardIcon } from "@radix-ui/react-icons";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api_url}/company`,
  }),
  tagTypes: ["company"],
  endpoints: (builder) => ({
    getAllCompany: builder.query<allCompanyResponse, void>({
      query: () => ({
        url: "/",
      }),
      providesTags: ["company"],
    }),
    getOneCompany: builder.query<companyResponse, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ["company"],
    }),
    createCompany: builder.mutation<companyResponse, companyForm>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["company"],
    }),
    updateCompany: builder.mutation<
      companyResponse,
      { id: string; body: companyForm }
    >({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["company"],
    }),
    deleteCompany: builder.mutation<companyResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["company"],
    }),
  }),
});

export const {
  useGetAllCompanyQuery,
  useGetOneCompanyQuery,
  useCreateCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
