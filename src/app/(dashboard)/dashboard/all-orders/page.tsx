'use client'
import React from 'react'
import { useGetAllOrdersQuery, useGetServiceProvidersAllOrdersQuery } from '../../../../redux/app/order/orderApi'
import Loading from '../loading'
import ActiveOrder from '../../../../components/userStatus/orderView/ActiveOrder'
import { useGetMyInfoQuery } from '../../../../redux/app/apis/authApi'
import { useRouter } from 'next/navigation'


export default function page() {
    const router = useRouter()
    const { data: myInfo, isSuccess } = useGetMyInfoQuery({})
    if (isSuccess && myInfo && !(myInfo?.data)) return router.push('/')
    let data: any;

    // const { data: providerData } = useGetServiceProvidersAllOrdersQuery({}, { skip: myInfo?.data?.role !== 'serviceProvider' })
    const { data: adminData } = useGetAllOrdersQuery({}, { skip: myInfo?.data?.role !== 'admin' })
    data = adminData/*  || providerData */
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
