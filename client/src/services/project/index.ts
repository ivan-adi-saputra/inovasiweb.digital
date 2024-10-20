import { config } from "@/config";
import {
  allProjectResponse,
  ProjectForm,
  projectResponse,
} from "@/types/project";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api_url}/project`,
  }),
  tagTypes: ["project"],
  endpoints: (builder) => ({
    getAllProject: builder.query<allProjectResponse, void>({
      query: () => ({
        url: "/",
      }),
      providesTags: ["project"],
    }),
    getOneProject: builder.query<projectResponse, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ["project"],
    }),
    createProject: builder.mutation<projectResponse, ProjectForm>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["project"],
    }),
    updateProject: builder.mutation<
      projectResponse,
      { id: string; body: ProjectForm }
    >({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["project"],
    }),
    deleteProject: builder.mutation<projectResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useGetAllProjectQuery,
  useGetOneProjectQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
