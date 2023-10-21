"use client";
import { ArrowRightOutlined, DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Dropdown, Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import serviceType from "../../data/category";
import { getUserInfo, isLoggedIn } from "../../utils/auth.service";
import { useGetMyInfoQuery } from "../../redux/app/apis/authApi";
import Loading from "../../app/(home)/(serviceType)/services/loading";
import SubscriberMenu from "./menus/subscriberMenu";
import VerifyUser from "../auth/VerifyUser";
import GetLocalStore from "../../helpers/localStore/getLocalStore";
import CONFIG from "../../config";



const RenderedMenu = ({ data, IsLogin }: { data: any, IsLogin: Boolean }): React.JSX.Element | undefined => {
  const user = getUserInfo()
  if (IsLogin && !data) {
    return <Loading />
  } else {
    console.log(data)
  }
  if (data?.role === 'subscriber') return <SubscriberMenu data={data} />
}




export default function RootHeader() {
  const { data: myData } = useGetMyInfoQuery(null, { skip: !GetLocalStore(CONFIG.authKey) })
  const [services, setServices] = useState<{ title: string }[]>([]);
  const IsLogin = isLoggedIn()
  const data = myData?.data 
  useEffect(() => {
    setServices(serviceType());
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {
        (data && data?.status === 'deactive') && <VerifyUser />
      }
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
                {services.map((service: { title: string }) => (
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
          {IsLogin && data ? <Dropdown
            dropdownRender={() => (
              <Row justify={"center"} className="p-4 rounded-md inline-block  bg-white shadow-lg min-w-[250px]">
                <SubscriberMenu data={data} />

              </Row>
            )}
          >
            <Avatar size={"large"} src={data && data?.image?.url} icon={<UserOutlined />} />
          </Dropdown> : <Link href="/auth/login" className="text-lg text-gray-900">
            Log in <ArrowRightOutlined />
          </Link>}
        </div>
      </nav>
    </header>
  );
}
