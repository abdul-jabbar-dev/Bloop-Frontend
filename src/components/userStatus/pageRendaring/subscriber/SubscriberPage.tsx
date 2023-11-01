'use client'
import { Col, Row } from "antd" 
import ActiveOrders from "../../ActiveOrders"
import { useGetMyOrdersQuery } from "../../../../redux/app/order/orderApi"
import Loading from "../../../ui/loading"


export default function SubscriberPage() {
    const { data } = useGetMyOrdersQuery({})

    if (!data?.data) {
        return <Loading />
    }

    return (
        <div className="">
            <h2 className=" font-light text-3xl text-gray-600">
                Order status
            </h2>
            <Row justify={"space-between"}>
                <Col xl={24} >
                    <ActiveOrders data={data} />
                </Col> 
            </Row>
        </div>
    )
}