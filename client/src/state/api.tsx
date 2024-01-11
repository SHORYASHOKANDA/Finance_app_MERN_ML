import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Assuming you're using React

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main", // Corrected typo from reducePath to reducerPath
    tagTypes: ["Kpis"], // Corrected tagTypes array syntax
    endpoints: (builder) => ({ // Corrected build to builder
        getKpis: builder.query({
            query: () => "kpi/kpis",
            providesTags: ["Kpis"] // Corrected typo from providesTages to providesTags
        })
    })
});

export const {useGetKpiQuery} = api;