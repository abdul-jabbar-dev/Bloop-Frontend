'use client'
import React, { useEffect, useState } from 'react'

import { Button } from 'antd'
import TService from '../../../../../../types/Service/Service'
import { useGetAllServiceQuery } from '../../../../../../redux/app/service/serviceApi'
import Loading from './loading'
import { addToCart } from '../../../../../../helpers/cart/cart'


export default function page(props: any) {
    const serviceN = (props.params.service as string)?.replaceAll('_', " ")

    const { data } = useGetAllServiceQuery({ title: serviceN }, { skip: serviceN.length < 1 })
    if (!data) {
        return <Loading />
    }

    const service: TService = data?.data[0];
    return (
        <>
            <div>
                <div className="hidden rounded bg-center bg-no-repeat lg:block filter w-full h-72 origin-center  " style={{ backgroundImage: `url(${service?.image?.url})` }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-60">
                        <div>
                            <h2 className="text-4xl font-bold text-white">{service?.title}</h2>

                            <p className="max-w-xl mt-3 text-gray-300">{service?.details}</p>
                        </div>
                    </div>
                    <h3>{service?.price}</h3>
                    <Button onClick={() => addToCart(service.id)} type='default' className='my-6'>add to cart</Button>
                </div>
                {/* <Image className="object-cover filter w-full h-64 origin-center " width={800} height={800} src={img} alt="" /> */}

            </div>

        </>
    )
}
