import CONFIG from "../../../config";
import GetLocalStore from "../../../helpers/localStore/getLocalStore";
import { TCreateServiceProvider } from "../../../types/serviceProvider/serviceProvider";
import { TServiceType } from "../../../types/serviceType/serviceType";
import { baseAPI } from "../baseApi";

const serviceType = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getServiceType: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/service-type`,
          method: "GET",
          params: arg,
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["serviceType"],
    }),
    createServiceType: build.mutation({
      query: (data: TServiceType) => {
        return {
          url: `/service-type`,
          method: "POST",
          data: data,
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["serviceType"],
    }),

    getServiceProvider: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/users/get-service-provider`,
          method: "GET",
          params: arg,
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags:['serviceProvider']
    }),
    createServiceProvider: build.mutation({
      
      query: (data: TCreateServiceProvider) => { 
        return {
          url: `/auth/create-service-provider`,
          method: "POST",
          data,
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags:['serviceProvider']
    }),
    // getMyInfo: build.query({
    //   query: () => {
    //     return {
    //       url: `/users/my-profile`,
    //       method: "GET",
    //       headers: {
    //         Authorization: GetLocalStore(CONFIG.authKey),
    //       },
    //     };
    //   },
    // }),
  }),
});
export const {
  useGetServiceTypeQuery,
  useGetServiceProviderQuery,
  useCreateServiceTypeMutation,
  useCreateServiceProviderMutation
} = serviceType;
