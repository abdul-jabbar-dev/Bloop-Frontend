import React from 'react'
import TOrder from '../../../types/order/order'
import { CheckCircleOutlined, CheckCircleTwoTone, ClockCircleOutlined, CloseCircleOutlined, CreditCardTwoTone, DollarTwoTone, PauseCircleTwoTone } from '@ant-design/icons'
import { Table, message } from 'antd'
import { dateFormat } from '../../../constaint/dateFormat'
import dayjs from 'dayjs'
import { useGetMyInfoQuery } from '../../../redux/app/apis/authApi'
import { useCompleteOrderMutation } from '../../../redux/app/order/orderApi'

export default function ActiveOrder({ cart }: { cart: TOrder }) {
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const [makeComplete] = useCompleteOrderMutation()
    const { data } = useGetMyInfoQuery({})

    const checkoutOrder = () => {
        makeComplete({ orderId: cart.servicePlaced.orderId }).then((rre: any) => {
            if (rre?.data?.data) {
                messageApi.open({
                    key,
                    type: 'success',
                    content: 'Successfully Completed',
                    duration: 2,
                }
                )
            } else {
                messageApi.open({
                    key,
                    type: 'error',
                    content: rre.error?.data?.message || rre?.error?.data,
                    duration: 2,
                }
                )
            }
        })
            .catch((rre: any) => console.error(rre))
        // console.log(cart.servicePlaced.orderId)
    }
    const renderButton = () => {
        if (dayjs().isAfter((dayjs(cart.servicePlaced.bookingDate, 'D-M-YYYY')))) {

            if (dayjs().format(dateFormat) === dayjs(cart.servicePlaced.bookingDate, dateFormat).format(dateFormat)) {
                return (<div className="flex items-center gap-1 w-full justify-end">
                    <button onClick={checkoutOrder} className='btn-primary py-2 px-3 flex items-center gap-1 rounded-md'><CheckCircleOutlined twoToneColor="#52c41a" className='text-md ' />Finished Assignment</button>
                </div>)
            } else {
                return (
                    <div className="flex items-center gap-1 w-full justify-end">
                        <button disabled className='border border-gray-400  text-gray-500 py-2 px-3 flex items-center gap-1 rounded-md'><ClockCircleOutlined twoToneColor="#52c41a" className='text-md ' />Upcoming</button>
                    </div>
                )
            }
        } else if (dayjs().isBefore((dayjs(cart.servicePlaced.bookingDate, 'D-M-YYYY')))) {
            if (dayjs().format(dateFormat) === dayjs(cart.servicePlaced.bookingDate, dateFormat).format(dateFormat)) {
                return (<div className="flex items-center gap-1 w-full justify-end">
                    <button onClick={checkoutOrder} className='btn-primary py-2 px-3 flex items-center gap-1 rounded-md'><CheckCircleOutlined twoToneColor="#52c41a" className='text-md ' />Finished Assignment</button>
                </div>)
            } else {

                if (cart.status === 'finish') {
                    return (
                        <div className="flex items-center gap-1 w-full justify-end">
                            <button disabled className='border border-gray-400  text-gray-500 py-2 px-3 flex items-center gap-1 rounded-md'><CheckCircleOutlined twoToneColor="#52c41a" className='text-md ' />Complete</button>
                        </div>

                    )
                } else {
                    return (
                        <div className="flex items-center gap-1 w-full justify-end">
                            <button disabled className='border border-red-400  text-red-500 py-2 px-3 flex items-center gap-1 rounded-md'><CloseCircleOutlined twoToneColor="#52c41a" className='text-md ' />No Processed</button>
                        </div>

                    )
                }

            }
        }
    }
    return (

        <div
            className="w-full whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 mb-3 text-sm text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
        >
            <div className="mb-2 flex items-center gap-3">
                <a
                    href="#"
                    className="block font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors "
                >
                    {cart.servicePlaced.service.title}
                </a>
                <div
                    className={"center relative inline-block select-none whitespace-nowrap rounded-full  border py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-white ".concat(cart.status === 'finish' ? " bg-green-600 " : "  bg-gray-600 ")}
                >
                    <div className="mt-px">{cart.status}</div>
                </div>
            </div>
            <div>
                {contextHolder}
                <Table scroll={{x:true}} size='middle' pagination={false} dataSource={[cart?.servicePlaced]} columns={[{
                    title: 'Delivery Date',
                    render: (value, record, index) => {
                        return (new Date(dayjs(cart.servicePlaced.bookingDate, dateFormat).format()).toDateString()) !== 'Invalid Date' ?
                            (new Date(dayjs(cart.servicePlaced.bookingDate, dateFormat).format()).toDateString()) : cart.servicePlaced.bookingDate
                    },
                    key: 'deliveryDate',
                    width: "15%"
                }, {
                    title: 'Issue Item',
                    dataIndex: 'issueItemName',
                    key: 'issueItemName',
                    width: "15%"
                }, {
                    title: 'Shipping Address', 
                    key: 'issueItemName',
                    render:(value, record, index)=> {
                        const {address,area,city,street} = cart.shippingAddress
                        return address + " " + street + " " + area + " " + city
                    },
                    width: "20%"
                }, {
                    title: 'Issue Details',
                    dataIndex: 'issueDetails',
                    key: 'issueDetails',
                    width: "100%"
                }]} />
            </div>
            <div className="mt-4 flex items-center gap-5">
                <div className='flex items-center flex-wrap md:flex-nowrap flex-auto  gap-5 w-full'>
                    <div className="flex  items-center  gap-x-1">
                        <ClockCircleOutlined />
                        <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
                            {new Date(dayjs(cart.createdAt).format()).toLocaleString()}

                        </p>
                    </div>
                    <div className="flex  items-center gap-1">
                        <DollarTwoTone twoToneColor="hotpink" className='text-md' />
                        <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
                            {cart.servicePlaced.payment.price} BDT
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        {cart.servicePlaced.payment.status === 'paid' ? <CheckCircleTwoTone twoToneColor="#52c41a" className='text-md' /> : <PauseCircleTwoTone twoToneColor="#f25f5f" className='text-md' />}
                        <p className="block font-sans text-xs uppercase font-normal text-gray-700 antialiased">
                            {cart.servicePlaced.payment.status}
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <CreditCardTwoTone twoToneColor="#52c41a" className='text-md' />
                        <p className="block font-sans text-xs uppercase font-normal text-gray-700 antialiased">
                            {cart.servicePlaced.payment?.paymentMethod}
                        </p>
                    </div>
                </div>
                {data?.data?.role === 'serviceProvider' && renderButton()}
            </div>
        </div>

    )
}
