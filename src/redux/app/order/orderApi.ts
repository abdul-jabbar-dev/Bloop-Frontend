import CONFIG from "../../../config";
import GetLocalStore from "../../../helpers/localStore/getLocalStore";
import { TCreatePayment } from "../../../types/servicePlaced/payment/payment";
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

    getServicePlacedByCartId: build.query({
      query: ({ cartId }: { cartId: string }) => {
        return {
          url: "/order/find-by-cartId/" + cartId,
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["cart"],
    }),
    getMyOrders: build.query({
      query: () => {
        return {
          url: "/order/find-my-orders",
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["cart"],
    }),

    makePaymentAndConfirm: build.mutation({
      query: ({
        servicePlacedInfo: createPaymentInfo,
      }: {
        servicePlacedInfo: TCreatePayment;
      }) => {
        return {
          url: `/order/confirm-payment`,
          method: "POST",
          data: createPaymentInfo,
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["order"],
    }),
  }),
});
export const {
  useCreateOrderMutation,
  useGetServicePlacedByCartIdQuery,
  useMakePaymentAndConfirmMutation,
  useGetMyOrdersQuery,
} = orderApi;
