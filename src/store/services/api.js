import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const _baseUrl = "http://localhost:3000";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: _baseUrl }),
  endpoints: (builder) => ({
    getModules: builder.query({
      query: () => "/modules",
    }),
    getModuleById: builder.query({
      query: (id) => `/modules/${id}`,
    }),
    getDataHeroSection: builder.query({
      query: () => "/heroSection",
    }),
  }),
});

export const {
  useGetModulesQuery,
  useGetDataHeroSectionQuery,
  useGetModuleByIdQuery,
} = api;
