import { EGender, ERole, EStatus } from "../common";

export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string | null;
  profileImage?: string | null;
  address?: string | null;
  contactNo?: string | null;
  gender?: EGender;
  image?: Record<string, any>;
  dateOfBirth?: string | null;
  role: ERole;
  bloodGroup: string | null;
  status: EStatus;
  providerUid: string | null;
  createdAt: Date;
  updatedAt: Date;
};
