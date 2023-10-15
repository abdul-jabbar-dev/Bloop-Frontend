'use client'
import React, { Suspense, useEffect, useState } from 'react'

import img from '../../../../../assets/service/car rent.jpg'
import Image from 'next/image'
import Link from 'next/link'
import TService from '../../../../../types/Service/Service'
import service from '../../../../../data/service'
type Props = { params: { serviceType: string }, searchParams: {} }

export default function page(pages: Props) {
    const [data, setData] = useState<TService[]>([])
    const serviceType = (pages.params.serviceType).split('_').join(' ')
    useEffect(() => {
        setData(service().filter((item: TService) => {
            return (item.serviceType).toLowerCase() === (serviceType).toLowerCase()
        }))

    }, [])
    return (
        <>
            {
                data.map(item => <div className="mt-8 xl:-mx-6 xl:flex xl:items-center">
                    <Image className="object-cover w-full xl:mx-6 xl:w-1/2 rounded-xl md:h-72 h-60  " width={800} height={800} src={img} alt="" />

                    <div className="mt-6 xl:w-1/2 xl:mt-0 xl:mx-6 ">

                        <p className="text-sm uppercase">{item.serviceType}</p>

                        <Link href={'/services/' + (item.serviceType).split(' ').join('_') + '/' + (item.title).split(' ').join('_')} className="block mt-4 text-2xl  font-semibold text-gray-800 hover:underline  md:text-3xl">
                            {item.title}
                        </Link>

                        <p className="mt-3 text-sm text-gray-600   md:text-sm">
                           {item.details}
                        </p>


                    </div>
                </div>)
            }
        </>
    )
}
