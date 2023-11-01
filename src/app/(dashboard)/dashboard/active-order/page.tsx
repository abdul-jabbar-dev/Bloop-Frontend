'use client'
import React from 'react'
import { useGetServiceProvidersActiveOrdersQuery } from '../../../../redux/app/order/orderApi'
import ActiveOrders from '../../../../components/userStatus/ActiveOrders'
import ActiveAssignment from '../../../../components/userStatus/orderView/ActiveAssignment'
import TOrder from '../../../../types/order/order'
import Loading from '../loading'

export default function page() {
    const { data } = useGetServiceProvidersActiveOrdersQuery({})
    if (!data) {
        return <Loading />
    }
 
    return (
        <div>
            <div className='flex space-x-4'>

                <div className='md:w-6/12 '>
                    <h2 className="my-3 font-light text-3xl text-gray-600">
                        Newest Assignment
                    </h2>
                    <ActiveOrders data={data} />
                </div>
                <div className='md:w-6/12 border'>
                    <ActiveAssignment data={data} />
                </div>
            </div>
        </div>
    )
}
