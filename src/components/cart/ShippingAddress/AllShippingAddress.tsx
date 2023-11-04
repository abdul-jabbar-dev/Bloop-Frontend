'use client'
import React from 'react'
import ShippingAddressItem from './ShippingAddressItem'
import { useGetSippingAddressQuery } from '../../../redux/app/shippingAddress/shippingAddressApi'
import { TShippingAddress } from '../../../types/shippingAddress/shippingAddress'
import { Empty } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import Link from 'next/link'


export default function AllShippingAddress() {
    const { data: shippingAddress } = useGetSippingAddressQuery({})
   
    return (
        <div className=''>
            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 flex justify-between my-2">My Shipping Addresses <Link href={'/dashboard/shipping-address'}><span className='text-xs hover:text-blue-700 cursor-pointer'>Edit <EditOutlined /></span></Link></h2>

            {!(shippingAddress?.data && (shippingAddress?.data?.length === 0)) ?
                (shippingAddress?.data.map((address: TShippingAddress, i: number) => <ShippingAddressItem addressInfo={address} key={i} />))
                : <Empty description={"No Shipping Address"} image={Empty.PRESENTED_IMAGE_SIMPLE} />}

            <p className='text-right text-gray-500'>{shippingAddress?.data?.length || 0}/3</p>

        </div>

    )
}
