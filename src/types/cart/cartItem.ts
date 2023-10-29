import TService from "../Service/Service";
import { TUser } from "../users/user";

export type TCart = {
  serviceId: string;
  id: string;
  date?: string;
  user: TUser;
  service?:TService
};
