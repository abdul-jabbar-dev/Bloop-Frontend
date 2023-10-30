"use client";
import { ArrowRightOutlined, DownOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Col, Dropdown, Row, Space } from "antd";
import Link from "next/link";
import { isLoggedIn } from "../../utils/auth.service";
import { useGetMyInfoQuery } from "../../redux/app/apis/authApi";
import Loading from "../../app/(home)/(serviceType)/services/loading";
import SubscriberMenu from "./menus/subscriberMenu";
import VerifyUser from "../auth/VerifyUser";
import GetLocalStore from "../../helpers/localStore/getLocalStore";
import CONFIG from "../../config";
import ModelCart from "../ui/cart/ModelCart";
import { useGetServiceTypeQuery } from "../../redux/app/serviceTypeAndProvider/serviceTypeAndProvider";



const RenderedMenu = ({ data, IsLogin }: { data: any, IsLogin: Boolean }): React.JSX.Element | undefined => {

  if (IsLogin && !data) {
    return <Loading />
  } else {
    console.log(data)
  }
  if (data?.role === 'subscriber') return <SubscriberMenu data={data} />
}

export default function RootHeader() {
  const { data: myData } = useGetMyInfoQuery(null, { skip: !GetLocalStore(CONFIG.authKey) })
  const { data: serviceT } = useGetServiceTypeQuery({})

  const IsLogin = isLoggedIn()
  const services = serviceT?.data
  const data = myData?.data
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
                {services.map((service: { title: string }, i: number) => (
                  <Link
                    key={i}
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
        </div>
        <Space size={'large'} className=" flex flex-1 justify-end">
          {(IsLogin && data) && <ModelCart><Avatar className="hover:cursor-pointer btn-primary" alt="asdfsadf" icon={<ShoppingCartOutlined />} size="large"></Avatar></ModelCart>}
          {IsLogin && data ? <Dropdown
            dropdownRender={() => (
              <Row justify={"center"} className=" p-4 rounded-md inline-block  bg-white shadow-lg min-w-[250px]">
                <SubscriberMenu data={data} />
              </Row>
            )}
          >
            <Avatar size={"large"} className="cursor-pointer" src={data && data?.image?.url} icon={<UserOutlined />} />
          </Dropdown> : <Link href="/auth/login" className="text-lg text-gray-900">
            Log in <ArrowRightOutlined />
          </Link>}
        </Space>
      </nav>
    </header>
  );
}
