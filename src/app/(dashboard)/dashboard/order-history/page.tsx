'use client'
import { useGetMyOrdersQuery } from "../../../../redux/app/order/orderApi"

export default function page() {
  const { data } = useGetMyOrdersQuery({})
  console.log(data)
  return (
    <div>page</div>
  )
}
