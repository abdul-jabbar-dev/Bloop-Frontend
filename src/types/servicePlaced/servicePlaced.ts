type TServicePlaced = {
  id: string;
  bookingDate: string;
  orderId: string;
  serviceId: string;
  serviceProviderId?: string;
  paymentId: string | null;
  issueItemName: string;
  issueDetails: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TCreateServicePlaced = {
  bookingDate: string;
  serviceId: string;
  issueItemName: string;
  issueDetails: string; 
};
export default TServicePlaced;
