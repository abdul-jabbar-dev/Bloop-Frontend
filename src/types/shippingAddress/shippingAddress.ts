import TSubscriber from "../Subscriber/Subscriber";

export type TShippingAddress = {
  id?: string;
  address: string;
  street: string;
  area: string;
  city: string;
  isDefault: boolean;
  subscriberId?: string;
  label: string;
  subscriber?:TSubscriber
  contactNo: string;
  createdAt?: Date;
  updatedAt?: Date;
};
