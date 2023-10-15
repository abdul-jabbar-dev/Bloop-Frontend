"use client";
import { ArrowRightOutlined, DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import serviceType from "../../data/category";
import { TServiceType } from "../../types/Service/ServiceType";

export default function RootHeader() {
  const [services, setServices] = useState<TServiceType[]>([]);
  useEffect(() => {
    setServices(serviceType());
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>

        <div className=" flex  gap-x-12">
          <Dropdown
            dropdownRender={() => (
              <span className="flex flex-col space-y-1 p-4">
                {services.map((service: TServiceType) => (
                  <Link
                    key={service.title}
                    href={`/services/${service.title.split(" ").join("_")}`}
                  >
                    <p className="text-lg text-gray-900 hover:text-blue-800">
                      {service.title}
                    </p>
                  </Link>
                ))}
              </span>
            )}
          >
            <Link className="text-lg text-gray-900" href={"/services"}>
              All Services <DownOutlined />
            </Link>
          </Dropdown>

          <a href="#" className="text-lg text-gray-900">
            Company
          </a>
        </div>
        <div className=" flex flex-1 justify-end">
          <Link href="/auth/login" className="text-lg text-gray-900">
            Log in <ArrowRightOutlined />
          </Link>
        </div>
      </nav>
    </header>
  );
}
