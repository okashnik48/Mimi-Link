import {
    createApi,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  import { RootState } from "../store/store";

  export const ROOT_URL = "https://waisys.dev.m0e.space/api/";


  
  const baseQuery = fetchBaseQuery({
    baseUrl: ROOT_URL,
    method: "GET",
    prepareHeaders: (headers, { getState }) => {
      try {
        const state = getState() as RootState;
  
        if (!state) return headers;
        
      } catch (error) {
        console.log("fetchBaseQuery", error);
      }
      finally{
        return headers;
      }
    },
  });
  
  export const serviceApi = createApi({
    baseQuery: baseQuery,
    tagTypes: ["link"],
    reducerPath: "api",
    refetchOnFocus: false, // true, TRUE only for production
    refetchOnReconnect: true,
    keepUnusedDataFor: 120, // default is 60
    refetchOnMountOrArgChange: 900,
    endpoints: () => ({}),
  });
  