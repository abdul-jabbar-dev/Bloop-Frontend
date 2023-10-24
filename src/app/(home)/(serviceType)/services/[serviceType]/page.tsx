'use client'
import { useEffect, useState } from 'react'

import img from '../../../../../assets/service/car rent.jpg'
import Image from 'next/image'
import Link from 'next/link'
import TService from '../../../../../types/Service/Service'
import service from '../../../../../data/service'
import { useGetAllServiceQuery } from '../../../../../redux/app/service/serviceApi'
type Props = { params: { serviceType: string }, searchParams: {} }

export default function page(pages: Props) { 
    const serviceType = ((pages.params.serviceType)?.replaceAll("_", ' ')) || ""
    const { data: services } = useGetAllServiceQuery({ "service.title": serviceType }, { skip: serviceType.length < 1 })

    return (
        <>
            {
                services?.data?.map((item: TService) => <div className="mt-8 xl:-mx-6 xl:flex xl:items-center">
                    <Image className="object-cover w-full xl:mx-6 xl:w-1/2 rounded-xl md:h-72 h-60  " width={800} height={800} src={item?.image?.url} alt="" />

                    <div className="mt-6 xl:w-1/2 xl:mt-0 xl:mx-6 ">

                        <p className="text-sm uppercase">{item?.service?.title}</p>

                        <Link href={'/services/' + ((item?.service?.title)!)?.replaceAll(' ', '_') + '/' + (item.title)?.replaceAll(' ', '_')} className="block mt-4 text-2xl  font-semibold text-gray-800 hover:underline  md:text-3xl">
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
