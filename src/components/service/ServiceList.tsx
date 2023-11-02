'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import TService from '../../types/Service/Service'
import { HomeOutlined } from '@ant-design/icons'
import { TServiceType } from '../../types/serviceType/serviceType'
import { useGetServiceTypeQuery } from '../../redux/app/serviceTypeAndProvider/serviceTypeAndProvider'
import { Empty, Skeleton } from 'antd'
import { useGetAllServiceQuery } from '../../redux/app/service/serviceApi'

export default function ServiceList() {
    const pathName = usePathname()
    const [query, setQuery] = useState<string>("Electronic service")

    const { data: serviceTypes } = useGetServiceTypeQuery({})
    const { data: services, isLoading, isSuccess } = useGetAllServiceQuery({ serviceTypeId: query }, { skip: query.length < 1 })

    const joinPath = (service: any) => (service.title).split(' ').join('_')
    useEffect(() => {
        if (query.length) {
            const paths = pathName?.split('/')
            setQuery(((paths[paths?.length - 1]?.split('_'))?.join(" ")))
        }
    }, [])

    const activeLink = (servType: TServiceType) => {

        if (query.length <= 0) {
            setQuery(servType.title)
        }
        return " text-blue-600 font-semibold underline"
    }
    return (
        < >
            <Link href={"/"}>
                <HomeOutlined /> Home
            </Link>
            <h1 className='my-6 uppercase'>All Services</h1>
            <div className=' flex flex-col space-y-2 text-xl'>
                <Skeleton loading={!serviceTypes} paragraph={{ rows: 4, width: "200px", className: "h-9 w-[200px]" }} title={false} active> {(serviceTypes?.data)?.map((service: TServiceType) => <span key={service.title}>

                    <Link onClick={() => setQuery(service.id!)} href={'/services/' + joinPath(service)}
                        key={service.title}

                        className={`hover:text-blue-700 uppercase leading-9 cursor-pointer ${usePathname().includes(joinPath(service)) ? activeLink(service) : " font-light"}`}>
                        {service.title}
                    </Link>
                    {usePathname().includes('/services/' + joinPath(service)) && < ul className='mb-4 '><Skeleton loading={isLoading} paragraph={{ rows: 1, width: "140px", className: " w-[140px] ms-4 mt-3" }} title={false} active>
                        {

                            (services?.data?.length > 0 && isSuccess&&!isLoading) ? ((services?.data)?.map((item: TService) =>
                                <Link href={'/services/' + joinPath(service) + '/' + joinPath(item)}
                                    className={` text-sm font-light ml-2 block leading-5 my-2 
                                ${usePathname().includes('/services/' + joinPath(service) + '/' + joinPath(item)) ? " text-blue-600 " : " font-light"}`
                                    }>- {item.title}</Link>)

                            ) : <p className='text-gray-400 mx-auto text-sm'>No Item Found</p>}



                    </Skeleton></ul>}
                </span>
                )}
                </Skeleton>
            </div>
        </>
    )
}
