import CONFIG from "../../../config";
import GetLocalStore from "../../../helpers/localStore/getLocalStore";
import { baseAPI } from "../baseApi";

const cartApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation({
      query: ({ serviceId }: { serviceId: string }) => {
        return {
          url: `/cart/add-to-cart`,
          method: "POST",
          data: { serviceId },
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["cart"],
    }),

    getFromCart: build.query({
      query: () => {
        return {
          url: `/cart/get-from-cart`,
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["cart"],
    }),

    getACart: build.query({
      query: ({ cartId }: { cartId: string }) => { 
        return {
          url: `/cart/get-from-cart/` + cartId,
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["cart"],
    }),

    getItemFromCart: build.query({
      query: () => {
        return {
          url: `/cart/get-cart-item`,
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["cart"],
    }),

    setDateIntoItemCart: build.mutation({
      query: ({
        bookingDate,
        itemId,
      }: {
        bookingDate: string;
        itemId: string;
      }) => {
        return {
          url: `/cart/set-date/` + itemId,
          method: "PATCH",
          data: { bookingDate },
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["cart"],
    }),

    removeDateFromItemCart: build.mutation({
      query: (itemId: string) => {
        return {
          url: `/cart/remove-date/` + itemId,
          method: "DELETE",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["cart"],
    }),
    removeItemCart: build.mutation({
      query: (itemId: string) => {
        return {
          url: `/cart/remove-cart/` + itemId,
          method: "DELETE",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["cart"],
    }),
  }),
});
export const {
  useAddToCartMutation,
  useGetFromCartQuery,
  useSetDateIntoItemCartMutation,
  useRemoveItemCartMutation,
  useRemoveDateFromItemCartMutation,
  useGetItemFromCartQuery,
  useGetACartQuery
} = cartApi;
