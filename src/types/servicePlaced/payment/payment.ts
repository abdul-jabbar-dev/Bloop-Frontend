import TServicePlaced from "../servicePlaced";

export enum EPaymentMethods {
  Bkash = "Bkash",
  Rocket = "Rocket",
  Nogod = "Nogod",
  CashOnDelivery = "CashOnDelivery",
  Card = "Card",
}
export enum EPaymentStatus {
  PAID = "paid",
  pending = "pending",
}

export const CPaymentMethods = {
  Bkash: "Bkash",
  Rocket: "Rocket",
  Nogod: "Nogod",
  CashOnDelivery: "CashOnDelivery",
  Card: "Card",
};

export const CPaymentStatus = {
  paid: "paid",
  pending: "pending",
};
type TPayment = {
  id?: string;
  price: string;
  paymentVarificationCode: string | null;
  status: EPaymentStatus;
  paymentMethod: EPaymentMethods;
  servicePlaced?: TServicePlaced;
  createdAt?: Date;
  updatedAt?: Date;
};
export type TCreatePayment = {
  paymentVarificationCode?: string;
  paymentMethod: EPaymentMethods;
  orderId: string;
};
export default TPayment;
