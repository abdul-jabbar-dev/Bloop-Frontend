type TService = {
  id: string;
  title: string;
  price: number;
  serviceType: string;
  orderType: string;
  inServicePackage: string[];
  serviceArea: string[];
  details: string;
  serviceGuarantee: string;
  serviceItem: string[];
  thumbnail?: string;
  service?:Record<string,any>
};
export default TService;
