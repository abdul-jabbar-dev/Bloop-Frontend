import React from 'react'
import ActiveOrder from './orderView/ActiveOrder'
import TOrder from '../../types/order/order'
import { TStatus } from '../../types/common'
import { Empty } from 'antd'

export default function ActiveOrders({ data }: { data: { data: TOrder[] } }) {
    const order = data?.data?.filter((item: TOrder) => {
        if (item?.status === TStatus.booked) {
            return item
        }
    })
    return (
        <>
            <div className=' w-full flex-row gap-y-7'>

                {order && order?.length > 0 ? order?.map((cart, i) => <ActiveOrder key={i} cart={cart} />) : <Empty description="No order Found" />}
            </div>
        </>
    )

}
