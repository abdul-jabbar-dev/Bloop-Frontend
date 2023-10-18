import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../baseQuery/axios.baseQuery";
import CONFIG from "../../config";
export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: CONFIG.apiRootURL }),
  endpoints: () => ({}),
  tagTypes: [],
});
