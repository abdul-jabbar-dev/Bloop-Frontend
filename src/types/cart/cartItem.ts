import TService from "../Service/Service";
import { TUser } from "../users/user";

export type TCart = {
  serviceId: string;
  id: string;
  bookingDate?: string;
  user?: TUser;
  service?: TService;
};
