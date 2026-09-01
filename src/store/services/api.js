import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const _baseUrl = "http://localhost:3000";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: _baseUrl }),
  endpoints: (builder) => ({
    getModules: builder.query({
      query: () => "/modules",
    }),
    getDataHeroSection: builder.query({
      query: () => "/heroSection",
    }),
  }),
});

export const { useGetModulesQuery, useGetDataHeroSectionQuery } = api;
