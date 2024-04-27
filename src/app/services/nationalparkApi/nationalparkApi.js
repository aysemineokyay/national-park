import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://developer.nps.gov/api/v1";
const apiKey = import.meta.env.VITE_APP_API_KEY;

export const nationalparkApi = createApi({
  reducerPath: "nationalparkApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Parks"],
  endpoints: (builder) => ({
    getParks: builder.query({
      query: () => ({
        url: `/parks?parkCode=yose`,
        headers: {
          "x-Api-Key": apiKey,
        },
      }),
      transformResponse: (response) => {
        return response.data[0];
      },
      providesTags: ["Parks"],
    }),
    getParksThingsToDo: builder.query({
      query: () => ({
        url: `/thingstodo?parkCode=yose`,
        headers: {
          "x-Api-Key": apiKey,
        },
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Parks"],
    }),
    getParksPlaces: builder.query({
      query: () => ({
        url: `/places?parkCode=yose`,
        headers: {
          "x-Api-Key": apiKey,
        },
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Parks"],
    }),
    getParksFees: builder.query({
      query: () => ({
        url: `/feespasses?parkCode=yose`,
        headers: {
          "x-Api-Key": apiKey,
        },
      }),
      transformResponse: (response) => {
        return response.data[0];
      },
      providesTags: ["Parks"],
    }),
  }),
});

export const {
  useGetParksQuery,
  useGetParksThingsToDoQuery,
  useGetParksPlacesQuery,
  useGetParksFeesQuery,
} = nationalparkApi;
