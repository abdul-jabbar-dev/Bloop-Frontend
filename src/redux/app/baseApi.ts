import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CONFIG from "../../config";
import axiosBaseQuery from "../baseQuery/axios.baseQuery";
export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: CONFIG.apiRootURL }),
  endpoints: () => ({}),
  tagTypes: ['user'],
});
