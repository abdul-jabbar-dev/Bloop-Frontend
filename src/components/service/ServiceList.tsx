'use client'
import React, { useEffect, useState } from 'react'
import serviceType from '../../data/category'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import TService from '../../types/Service/Service'
import allService from '../../data/service'
import { HomeOutlined } from '@ant-design/icons'
import { TServiceType } from '../../types/serviceType/serviceType'

export default function ServiceList() {
    const [servicesType, setServicesType] = useState<TServiceType[]>([])
    const [services, setServices] = useState<TService[]>([])
    const joinPath = (service: any) => (service.title).split(' ').join('_')
    useEffect(() => {
        setServicesType(serviceType())
        setServices(allService())
    }, [])
    const activeLink = " text-blue-600 font-semibold underline"
    return (
        <div >
            <Link href={"/"}>
                <HomeOutlined /> Home
            </Link>
            <h1 className='my-6 uppercase'>All Services</h1>
            <div className=' flex flex-col space-y-2 text-xl'>
                {servicesType.map((service: TServiceType) => <span key={service.title}>

                    <Link href={'/services/' + joinPath(service)}
                        key={service.title}
                        className={`hover:text-blue-700 uppercase leading-9 cursor-pointer ${usePathname().includes(joinPath(service)) ? activeLink : " font-light"}`}>
                        {service.title}
                    </Link>
                    {usePathname().includes('/services/' + joinPath(service)) && < ul className='mb-4 '>{

                        services?.filter((ser: TService) =>
                            (ser.serviceType).toLowerCase() === (service.title).toLowerCase()).map(item =>
                                <Link href={'/services/' + joinPath(service) + '/' + joinPath(item)}
                                    className={`text-sm font-light ml-2 block leading-5 my-2 
                                ${usePathname().includes('/services/' + joinPath(service) + '/' + joinPath(item)) ? " text-blue-600 " : " font-light"}`
                                    }>- {item.title}</Link>
                            )}</ul>}


                </span>
                )}
            </div>
        </div>
    )
}
