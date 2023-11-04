import TSubscriber from "../Subscriber/Subscriber";
import TOrder from "../order/order";

export type TShippingAddress = {
  id?: string;
  address: string;
  street: string;
  area: string;
  city: string;
  isDefault: boolean;
  subscriberId?: string;
  label: string;
  Order?:TOrder[]
  subscriber?: TSubscriber;
  contactNo: string;
  createdAt?: Date;
  updatedAt?: Date;
};
