import React from 'react' 
import Loading from '../../ui/loading'
import Image from 'next/image'
import { Collapse, CollapseProps, List } from 'antd'
import Link from 'next/link'
import { useGetACartQuery } from '../../../redux/app/cart/cartApi'
import { useParams } from 'next/navigation'

export default function CheckOutItem() {

    const  cartId = useParams().cartId as string
    const { data: cartData } = useGetACartQuery({ cartId  })
     
    const data = cartData?.data
    const service = data?.service
    if (!service) {
        return <Loading />
    }

    const items: CollapseProps['items'] = [
        {
            key: '1',
            headerClass: "text-base ",
            label: <span className='text-gray-600 font-semibold'>Service Items</span>,
            children: <>
                <List
                    itemLayout="horizontal"
                    dataSource={service.serviceItem}
                    size='small'
                    renderItem={(item:string, index) => (
                        <List.Item key={index}>
                            <List.Item.Meta
                                title={<p className='m-0 p-0 text-gray-500'>{item}</p>}
                            />
                        </List.Item>
                    )}
                />
            </>,
        },
        {
            key: '2',
            headerClass: "text-base ",
            label: <span className='text-gray-600 font-semibold'>Service Area</span>,
            children: <>
                <List
                    itemLayout="horizontal"
                    dataSource={service.serviceArea}
                    size='small'
                    renderItem={(item:string, index) => (
                        <List.Item key={index}>
                            <List.Item.Meta
                                title={<p className='m-0 p-0 text-gray-500'>{item}</p>}
                            />
                        </List.Item>
                    )}
                />
            </>,
        },

    ];


    return (
        <>
            <div className="w-full flex-row justify-between h-full  mb-8 flex-shrink-0 order-1 lg:mb-0 lg:order-2">
                <div className="flex justify-center lg:justify-end mb-6">
                    <div className="rounded-md max-w-md w-full  ">
                        <div className="flex justify-between ">
                            <div className="flex flex-col gap-y-3">
                                <Image width={400} height={380} className="w-full object-cover rounded" src={service.image.url} alt="" />
                                <div className="">
                                    <h3 className="text-lg  text-gray-600 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-right">BDT {service.price}</p>
                                    <Collapse accordion items={items} className='bg-transparent' bordered={false} defaultActiveKey={['1']} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={'/cart'}><button className=' btn-primary w-full py-2  rounded-md'>Change</button></Link>
            </div>


        </>
    )
}
