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
      invalidatesTags: ["order", "createOrder"],
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
      providesTags: ["cart", "createOrder"],
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
    getAllOrders: build.query({
      query: () => {
        return {
          url: "/order/all-orders",
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["order"],
    }),
    getServiceProvidersActiveOrders: build.query({
      query: () => {
        return {
          url: "/order/find-providers-active-orders",
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["order", "completeOrder"],
    }),

    getServiceProvidersAllOrders: build.query({
      query: () => {
        return {
          url: "/order/find-providers-all-orders",
          method: "GET",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      providesTags: ["order", "completeOrder"],
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
    completeOrder: build.mutation({
      query: ({ orderId }: { orderId: string }) => {
        return {
          url: `/order/complete-order/` + orderId,
          method: "POST",
          headers: {
            Authorization: GetLocalStore(CONFIG.authKey),
          },
        };
      },
      invalidatesTags: ["completeOrder"],
    }),
  }),
});
export const {
  useCreateOrderMutation,
  useGetServicePlacedByCartIdQuery,
  useMakePaymentAndConfirmMutation,
  useGetMyOrdersQuery,
  useGetServiceProvidersActiveOrdersQuery,
  useGetServiceProvidersAllOrdersQuery,
  useCompleteOrderMutation,
  useGetAllOrdersQuery
} = orderApi;
