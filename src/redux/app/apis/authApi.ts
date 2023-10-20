import CONFIG from "../../../config";
import GetLocalStore from "../../../helpers/localStore/getLocalStore";
import { baseAPI } from "../baseApi";

const authApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (registerInfo) => {
        return {
          url: `/auth/create-subscriber`,
          method: "POST",
          data: registerInfo,
        };
      },
    }),

    login: build.mutation({
      query: (loginInfo) => {
        return {
          url: `/auth/login`,
          method: "POST",
          data: loginInfo,
        };
      },
    }),

    createUserByProvider: build.mutation({
      query: (providedInfo) => {
        return {
          url: `/auth/create-by-provider`,
          method: "POST",
          data: providedInfo,
        };
      },
    }),

    updateUserInfo: build.mutation({
      query: (updatedUserInfo) => {
        return {
          url: `/users/update-profile`,
          method: "PATCH",
          contentType: "multipart/form-data",
          data: updatedUserInfo,
        };
      },invalidatesTags:["user"]
    }),

    getMyInfo: build.query({
      query: () => {
        return {
          url: `/users/my-profile`,
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
    }),
  }),
});
export const {
  useRegisterMutation,
  useLoginMutation,
  useCreateUserByProviderMutation,
  useGetMyInfoQuery,
  useUpdateUserInfoMutation
} = authApi;
