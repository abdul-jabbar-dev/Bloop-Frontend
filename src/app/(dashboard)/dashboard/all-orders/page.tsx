'use client'
import React from 'react'
import { useGetMyOrdersQuery, useGetServiceProvidersAllOrdersQuery } from '../../../../redux/app/order/orderApi'
import Loading from '../loading'
import ActiveOrder from '../../../../components/userStatus/orderView/ActiveOrder'
 

export default function page() {
    const { data } = useGetServiceProvidersAllOrdersQuery({})
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
