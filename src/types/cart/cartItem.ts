import TService from "../Service/Service";
import { TStatus } from "../common";
import TServicePlaced from "../servicePlaced/servicePlaced";
import { TUser } from "../users/user";

export type TCart = {
  serviceId: string;
  id: string;
  bookingDate?: string;
  user?: TUser;
  service?: TService;
  status?: TStatus;
  servicePlaced?: TServicePlaced;
};
