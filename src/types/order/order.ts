import TSubscriber from "../Subscriber/Subscriber";
import { TStatus } from "../common";
import TServicePlaced from "../servicePlaced/servicePlaced";
import { TShippingAddress } from "../shippingAddress/shippingAddress";

type TOrder = {
  data: TOrder;
  id?: string;
  subscriberId: string;
  status: TStatus;
  subscriber?: TSubscriber;
  feedback?: /*  Feedback[] */ Record<string, any>;
  shippingAddress?: TShippingAddress;
  shippingAddressId?: string;
  cartId: string;
  servicePlaced?: TServicePlaced;
  createdAt?: Date;
  updatedAt?: Date;
};

export default TOrder;
