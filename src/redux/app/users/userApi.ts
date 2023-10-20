import CONFIG from "../../../config";
import GetLocalStore from "../../../helpers/localStore/getLocalStore";
import { baseAPI } from "../baseApi";

const userApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getSubscribers: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/users/get-subscribers`,
          method: "GET",
          params: arg,
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
    }),   
    //  getServiceProvider: build.query({
    //   query: (arg: Record<string, any>) => {
    //     return {
    //       url: `/users/get-service-provider`,
    //       method: "GET",
    //       params: arg,
    //       headers: {
    //         Authorization: GetLocalStore(CONFIG.authKey),
    //       },
    //     };
    //   },
    // }),
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
export const { useGetSubscribersQuery } = userApi;
