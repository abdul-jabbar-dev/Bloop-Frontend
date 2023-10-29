import TSubscriber from "../Subscriber/Subscriber";
import { TStatus } from "../common";

type TOrder = {
  id?: string;
  subscriberId: string;
  status: TStatus;
  subscriber?: TSubscriber;
  feedback?: /*  Feedback[] */ Record<string, any>;
  servicePlaced?: /*  ServicePlaced? */ Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
};

export default TOrder;
