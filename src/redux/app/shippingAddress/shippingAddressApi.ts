import CONFIG from "../../../config";
import GetLocalStore from "../../../helpers/localStore/getLocalStore";
import { TShippingAddress } from "../../../types/shippingAddress/shippingAddress";
import { baseAPI } from "../baseApi";

const shippingAddressApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    createSippingAddress: build.mutation({
      query: (shippingAddressData: TShippingAddress) => {
        return {
          url: `/shipping-address/create-shipping-address`,
          method: "POST",
          data: shippingAddressData,
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["shippingAddress"],
    }),

    getSippingAddress: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/shipping-address/get-shipping-address`,
          method: "GET",
          params: arg,
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["shippingAddress"],
    }),

    setDefaultSippingAddress: build.mutation({
      query: ({ shippingAddressId }: { shippingAddressId: string }) => {
        return {
          url: `/shipping-address/set-default/` + shippingAddressId,
          method: "PATCH",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["shippingAddress"],
    }),

    getASippingAddress: build.query({
      query: ({ shippingAddressId }: { shippingAddressId: string }) => {
        return {
          url: `/shipping-address/get-shipping-address/` + shippingAddressId,
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
    }),

    deleteSippingAddress: build.mutation({
      query: ({ shippingAddressId }: { shippingAddressId: string }) => {
        return {
          url: `/shipping-address/delete-shipping-address/` + shippingAddressId,
          method: "DELETE",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
    }),
  }),
});
export const {
  useCreateSippingAddressMutation,
  useDeleteSippingAddressMutation,
  useGetASippingAddressQuery,
  useGetSippingAddressQuery,
  useSetDefaultSippingAddressMutation
} = shippingAddressApi;
