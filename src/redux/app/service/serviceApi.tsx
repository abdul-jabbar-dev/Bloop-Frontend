import CONFIG from "../../../config";
import GetLocalStore from "../../../helpers/localStore/getLocalStore";
import { baseAPI } from "../baseApi";

const serviceApi = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        createService: build.mutation({
            query: (data: Record<string, any>) => {
                return {
                    url: `/service`,
                    method: "POST",
                    data,
                    contentType: "multipart/form-data",
                    headers: {
                        Authorization: GetLocalStore(CONFIG.authKey),
                    },
                };
            },
        }),
        getAllService: build.query({
            query: (arg: Record<string, any>) => {
                 
                return {
                    url: `/service`,
                    method: "GET",
                    params: arg,
                    headers: {
                        Authorization: GetLocalStore(CONFIG.authKey),
                    },
                };
            },
        }),

    }),
});
export const { useCreateServiceMutation,useGetAllServiceQuery } = serviceApi;
