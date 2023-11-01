'use client'
import { Empty } from "antd"
import { useGetMyOrdersQuery } from "../../../../redux/app/order/orderApi"
import { useGetMyInfoQuery } from "../../../../redux/app/apis/authApi"
import { TUser } from "../../../../types/users/user"
import SubscriberHistory from "../../../../components/userStatus/orderHistory/SubscriberHistory"

export default function page() {
  const { data: userInfo } = useGetMyInfoQuery({})
  const user: TUser = userInfo?.data

  switch (user?.role) {
    case 'subscriber':
      return <SubscriberHistory user={user} />

    default:
      return <Empty />
  }
}
