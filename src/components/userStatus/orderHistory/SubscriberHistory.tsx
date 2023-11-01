import React from 'react'
import { useGetMyOrdersQuery } from '../../../redux/app/order/orderApi'
import { TUser } from '../../../types/users/user'
import Loading from '../../ui/loading'
import TOrder from '../../../types/order/order'
import ActiveOrder from '../orderView/ActiveOrder'

export default function SubscriberHistory({ user }: { user: TUser }) {
    const { data } = useGetMyOrdersQuery({})
    if (!data?.data) {
        return <Loading />
    }
    const allOrder = data.data 
    return (
        <div className=' w-full flex-row gap-y-7'>
            <h2 className=" font-light text-3xl text-gray-600">
                All Orders
            </h2>
            {allOrder.map((cart, i) => <ActiveOrder key={i} cart={cart} />)}
        </div>
    )
}
