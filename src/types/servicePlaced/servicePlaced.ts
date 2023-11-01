import TService from "../Service/Service";
import TOrder from "../order/order";
import TServiceProvider, {
  TCreateServiceProvider,
} from "../serviceProvider/serviceProvider";
import TPayment from "./payment/payment";

type TServicePlaced = {
  id: string;
  bookingDate: string;
  orderId: string;
  serviceId: string;
  serviceProviderId?: string;
  paymentId: string | null;
  issueItemName: string;
  payment: TPayment;
  service: TService;
  order: TOrder;
  serviceProvider: TServiceProvider;
  issueDetails: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TCreateServicePlaced = {
  bookingDate: string;
  serviceId: string;
  cartId: string;
  issueItemName: string;
  issueDetails: string;
};
export default TServicePlaced;
