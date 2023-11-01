import TSubscriber from "../Subscriber/Subscriber";
import { TStatus } from "../common";
import TServicePlaced from "../servicePlaced/servicePlaced";

type TOrder = {
  data: TOrder;
  id?: string;
  subscriberId: string;
  status: TStatus;
  subscriber?: TSubscriber;
  feedback?: /*  Feedback[] */ Record<string, any>;
  cartId: string;
  servicePlaced?: TServicePlaced;
  createdAt?: Date;
  updatedAt?: Date;

};

export default TOrder;
