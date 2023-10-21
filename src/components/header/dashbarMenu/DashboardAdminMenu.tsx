import {
  CodeSandboxOutlined,
  ControlOutlined,
  FileProtectOutlined,
  HistoryOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Avatar, Col, MenuProps, Row } from "antd";
import Link from "next/link";

export default function DashboardAdminMenu({ data, collapsed }: any) {

  type MenuItem = Required<MenuProps>["items"][number];
  const authItem: MenuItem[] = [
    {
      key: "profile",
      disabled: true,
      style: {
        cursor: "auto",
        height: "max-content",
        display: "flex",
        justifyItems: "center",
        margin: "16px 0",
      },

      label: (
        <Row className="w-full h-max text-gray-300" justify={"center"}>
          <Col>
            <Avatar
              className="mx-auto"
              src={data && data?.image?.url}
              size={!collapsed ? 80 : 32}
              icon={<UserOutlined />}
            />
          </Col>
          <Col className="text-start">
            <h2 className="font-semibold text-md mt-2 mb-0">
              {data?.firstName + " " + data?.lastName}
            </h2>
            <p className="font-normal text-justify font whitespace-normal  w-min text-sm">
              {data?.email}
            </p>
          </Col>
        </Row>
      ),
    },
    {
      key: "1",
      label: <Link href={'/dashboard/'}>Status</Link>,
      icon: <ControlOutlined />,
    },
    {
      key: "2",
      label: <Link href={'/dashboard/all-history'}>All Order</Link>,
      icon: <HistoryOutlined />,
    },
    {
      key: "3",
      label: <Link href={'/dashboard/service-type'}>Service Type</Link>,
      icon: < CodeSandboxOutlined />,
    }, {
      key: "4",
      label: <Link href={'/dashboard/services'}>Services</Link>,
      icon: <FileProtectOutlined />,
    }, {
      key: "5",
      label: <Link href={'/dashboard/subscriber'}>Subscriber</Link>,
      icon: <UserOutlined />,
    }, {
      key: "56",
      label: <Link href={'/dashboard/service-provider'}>Service Provider</Link>,
      icon: <UserSwitchOutlined />,
    },
    {
      key: "7",
      label: <Link href={'/dashboard/settings'}>Settings</Link>,
      icon: <SettingOutlined />,
    },
  ];
  return authItem;
}
