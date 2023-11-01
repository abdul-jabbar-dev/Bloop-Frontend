import { TShippingAddress } from "../shippingAddress/shippingAddress";
import { TUser } from "../users/user";

 
type TSubscriber = {
  id?: string;
  status?: Record<string, any>;
  user?: TUser;
  userId?: string;
  order?: Record<string, any>;
  shippingAddress?: TShippingAddress;
  createdAt?: string;
  updatedAt?: string;
};
export default TSubscriber;
