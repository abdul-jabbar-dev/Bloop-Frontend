'use client'
import React, { useEffect, useState } from 'react'
 
import img from '../../../../../../assets/customerService.png'
import { Button } from 'antd'
import TService from '../../../../../../types/Service/Service'
import service from '../../../../../../data/service'


export default function page(props: any) {
    const serviceType = (props.params.service).split('_').join(' ')
    const [services, setServices] = useState<TService | undefined>()
    useEffect(() => {
        setServices(service().find(item => (item.title).toLowerCase() === serviceType.toLowerCase()))
    }, [serviceType])

    return (
        <>
            <div>
                <div className="hidden rounded bg-center bg-no-repeat lg:block filter w-full h-72 origin-center  " style={{ backgroundImage: `url(${img.src})` }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-60">
                        <div>
                            <h2 className="text-4xl font-bold text-white">{services?.title}</h2>

                            <p className="max-w-xl mt-3 text-gray-300">{services?.details}</p>
                        </div>
                    </div>
                    <h3>{services?.price}</h3>
                    <Button type='primary' className='my-6'>Make a order</Button>
                </div>
                {/* <Image className="object-cover filter w-full h-64 origin-center " width={800} height={800} src={img} alt="" /> */}

            </div>

        </>
    )
}
