import { Col, Row } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import MobileIcon from "../ui/icons/MobileIcon";
import TvIcon from "../ui/icons/TvIcon";
import PropertyIcon from "../ui/icons/CarWash";
import SmartWatchIcon from "../ui/icons/AcIcon";
import FashionIcon from "../ui/icons/FashionIcon";
import ComputerIcon from "../ui/icons/Computer";
import HearphoneIcon from "../ui/icons/HearphoneIcon";
import CarIcon from "../ui/icons/CarIcon";
import BikeIcon from "../ui/icons/BikeIcon";
import AcIcon from "../ui/icons/AcIcon";

const items = [
  {
    title: "Mobiles service",
    icon: <MobileIcon height={40} width={40} />,
  },
  {
    title: "Electronic service",
    icon: <TvIcon height={40} width={40} />,
  },
  {
    title: "Car wash",
    icon: <PropertyIcon height={40} width={40} />,
  },
  {
    title: "Booking a Car",
    icon: <CarIcon height={40} width={40} />,
  },
  {
    title: "AC Service",
    icon: <AcIcon height={40} width={40} />,
  },
  {
    title: "Laptop service",
    icon: <ComputerIcon height={40} width={40} />,
  },
];

export default function Store() {
  return (
    <div className="py-16  containers mx-auto">
 
      <div className="my-8">
        <p className="text-lg font-medium text-slate-600">
          Upcoming catagories
        </p>
        <div className="p-12">
          <Row justify={"space-between"} className="gap-10">
            {items.map((item) => (
              <div className="w-1/5 lg:w-1/4 flex justify-center">
                <span className="w-52 flex items-start gap-2  ">
                  <div className="min-w-min">
                    <span className="w-full">{item.icon}</span>
                    <span className="flex flex-col  ">
                      <h3 className="text-xl"> {item.title}</h3>
                    </span>
                  </div>
                </span>
              </div>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
