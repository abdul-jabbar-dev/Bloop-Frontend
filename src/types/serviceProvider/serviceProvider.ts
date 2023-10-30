import { TStatus } from "../common";
import TServicePlaced from "../servicePlaced/servicePlaced";
import { TServiceType } from "../serviceType/serviceType";
import { TUser } from "../users/user";

export type TCreateServiceProvider = {
  id?: string;
  serviceTypeId: string;
  userId: string;
};
type TServiceProvider = {
  user: TUser;
  serviceType:TServiceType;
  feedback: Record<string,any>;
  servicePlaced: TServicePlaced;
  id: string;
  providerId: string;
  userId: string;
  serviceTypeId: string;
  availability: boolean;
  status:TStatus;
  createdAt: Date;
  updatedAt: Date;
};
export default TServiceProvider