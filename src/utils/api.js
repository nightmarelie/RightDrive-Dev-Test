import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const openBlurApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openblur.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "238caad448msh6e4a052dda5d60ep12d738jsn83915432d912", // TODO: For now, we can keep it here. Move to .env in the feature
      "X-RapidAPI-Host": "openblur.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getCollections: builder.query({
      query: () => `collections`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCollectionsQuery } = openBlurApi;
