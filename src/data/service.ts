import TService from "../types/Service/Service";

const service = (): TService[] => [
  {
    id:"",
    title: "Electronic Appliance Checking",
    price: 1450,
    serviceType: "Electronic service",
    orderType: "basic",
    serviceArea: ["dhaka", "gazipur"],
    inServicePackage: [],
    details:
      "The largest marketplace in Bangladesh where we serve you with every possible service. AC Repairing service is one of our services to repair all types of AC related problems. We deliver expert and AC repair services with integrity from our professional service providers.",
    serviceGuarantee: "16D",
    serviceItem: [],
    thumbnail: "@/../assets/service/oven.jpg",
  },
  {
    id:"",
    title: "Electronic Appliance service",
    price: 1450,
    serviceType: "Electronic service",
    orderType: "basic",
    serviceArea: ["dhaka", "gazipur"],
    inServicePackage: [],
    details:
      "The largest marketplace in Bangladesh where we serve you with every possible service. AC Repairing service is one of our services to repair all types of AC related problems. We deliver expert and AC repair services with integrity from our professional service providers.",
    serviceGuarantee: "16D",
    serviceItem: [],
    thumbnail: "@/../assets/service/oven.jpg",
  },
  {
    id:"",
    title: "Mobile phone and gadget service",
    price: 3000,
    serviceType: "Device service",
    orderType: "basic",
    serviceArea: ["dhaka", "gazipur"],
    inServicePackage: [],
    details:
      "The largest marketplace in Bangladesh where we serve you with every possible service. AC Repairing service is one of our services to repair all types of AC related problems. We deliver expert and AC repair services with integrity from our professional service providers.",
    serviceGuarantee: "16D",
    serviceItem: ["Mobile", "HeadPhone", "Smart Watch", "Camera"],
    thumbnail: "@/../assets/service/mobile.png",
  },
  {
    id:"",
    title: "Car and bike wash service",
    price: 600,
    serviceType: "wash service",
    orderType: "basic",
    serviceArea: ["dhaka", "gazipur"],
    details:
      "The largest marketplace in Bangladesh where we serve you with every possible service. AC Repairing service is one of our services to repair all types of AC related problems. We deliver expert and AC repair services with integrity from our professional service providers.",
    serviceGuarantee: "16D",
    inServicePackage: [],
    serviceItem: ["Car", "Bike", "Bus"],
    thumbnail: "@/../assets/service/car wash.jpeg",
  },
  {
    id:"",
    title: "Rent a car",
    price: 3000,
    serviceType: "Rent service",
    orderType: "basic",
    inServicePackage: [],
    serviceArea: ["dhaka", "gazipur"],
    details:
      "The largest marketplace in Bangladesh where we serve you with every possible service. AC Repairing service is one of our services to repair all types of AC related problems. We deliver expert and AC repair services with integrity from our professional service providers.",
    serviceGuarantee: "negotiable",
    serviceItem: ["Car", "Bike", "Bus"],
    thumbnail: "@/../assets/service/car rent.jpg",
  },
  {
    id:"",
    title: "Ac and freeze service",
    price: 3000,
    serviceType: "ac and freeze service",
    orderType: "basic",
    inServicePackage: [],
    serviceArea: ["dhaka", "gazipur"],
    details:
      "The largest marketplace in Bangladesh where we serve you with every possible service. AC Repairing service is one of our services to repair all types of AC related problems. We deliver expert and AC repair services with integrity from our professional service providers.",
    serviceGuarantee: "45d",
    serviceItem: ["AC", "freeze", "Deep"],
    thumbnail: "@/../assets/service/ac.jpg",
  },
  {
    id:"",
    title: "Laptop or computer service",
    price: 3000,
    serviceType: "fixing service",
    orderType: "basic",
    inServicePackage: [],
    serviceArea: ["dhaka", "gazipur"],
    details:
      "The largest marketplace in Bangladesh where we serve you with every possible service. AC Repairing service is one of our services to repair all types of AC related problems. We deliver expert and AC repair services with integrity from our professional service providers.",
    serviceGuarantee: "negotiable",
    serviceItem: ["Laptop", "computer"],
    thumbnail: "@/../assets/service/laptop.jpg",
  },
];

export default service;
