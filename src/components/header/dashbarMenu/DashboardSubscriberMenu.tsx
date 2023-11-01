import {
  ControlOutlined,
  HistoryOutlined,
  HomeFilled,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Col, MenuProps, Row } from "antd";
import Link from "next/link";

export default function DashboardSubscriberMenu({ data, collapsed }: any) {

  type MenuItem = Required<MenuProps>["items"][number];
  const authItem: MenuItem[] = [
    {
      key: "0",
      label: <Link href={'/'}>Home</Link>,
      icon: <HomeFilled />,

    }, { type: "divider" },
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
              className="mx-auto my-auto"
              style={{ margin: "auto", justifyContent: "center", display: "flex", alignItems: "center" }}
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
      label: <Link href={'/dashboard/order-history'}>Order History</Link>,
      icon: <HistoryOutlined />,
    },
    {
      key: "3",
      label: <Link href={'/dashboard/settings'}>Settings</Link>,
      icon: <SettingOutlined />,
    },
  ];
  return authItem;
}
