import CONFIG from "../../../config";
import GetLocalStore from "../../../helpers/localStore/getLocalStore";
import { TCreateServicePlaced } from "../../../types/servicePlaced/servicePlaced";
import { baseAPI } from "../baseApi";

const orderApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: ({
        servicePlacedInfo,
      }: {
        servicePlacedInfo: TCreateServicePlaced;
      }) => {
        return {
          url: `/order/create-order`,
          method: "POST",
          data: servicePlacedInfo,
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["order"],
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
export const { useCreateOrderMutation } = orderApi;
