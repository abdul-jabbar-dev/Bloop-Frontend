'use client'
import { Col, Empty, Row, Table, message } from 'antd'
import React from 'react'
import { useCompleteOrderMutation, useGetMyOrdersQuery, useGetServiceProvidersActiveOrdersQuery } from '../../../../redux/app/order/orderApi'
import Loading from '../../../ui/loading'

import dayjs from 'dayjs'
import { dateFormat } from '../../../../constaint/dateFormat'
import { CheckCircleOutlined, CheckCircleTwoTone, ClockCircleOutlined, CreditCardTwoTone, DollarTwoTone, PauseCircleTwoTone } from '@ant-design/icons'
import { TCart } from '../../../../types/cart/cartItem'


export default function ServiceProviderPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const [makeComplete] = useCompleteOrderMutation()
  const { data } = useGetServiceProvidersActiveOrdersQuery({})
  if (!data) {
    return <Loading />
  }

  const cart = data?.data?.find((cart:TCart) => cart.status==='booked'&& dayjs(cart.servicePlaced.bookingDate, dateFormat).format(dateFormat)===dayjs().format(dateFormat))
 
  const checkoutOrder = ( ) => { 
    makeComplete({ orderId: cart?.servicePlaced?.orderId }).then((rre: any) => {
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
  return (
    <Row justify={'center'} >

      <Col lg={20}>
        <div className=' w-full flex-row gap-y-7 my-16'>
          <h2 className=" font-light text-3xl text-gray-600 my-4">
            Today Assignment
          </h2>
          {contextHolder}
          {cart&&Object?.keys(cart)?.length > 1 ?
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
                <Table scroll={{ x: true }} size='middle' pagination={false} dataSource={[cart?.servicePlaced]} columns={[{
                  title: 'Delivery Date',
                  render: (value, record, index) => {
                    return (new Date(dayjs(cart.servicePlaced.bookingDate, dateFormat).format()).toDateString()) !== 'Invalid Date' ?
                      (new Date(dayjs(cart.servicePlaced.bookingDate, dateFormat).format()).toDateString()) : cart.servicePlaced.bookingDate
                  },
                  key: 'deliveryDate',
                  width: "20%"
                }, {
                  title: 'Issue Item',
                  dataIndex: 'issueItemName',
                  key: 'issueItemName',
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
                <div className="flex items-center gap-1 w-full justify-end">
                  <button onClick={checkoutOrder} className='btn-primary py-2 px-3 flex items-center gap-1 rounded-md'><CheckCircleOutlined twoToneColor="#52c41a" className='text-md ' />Finished Assignment</button>
                </div>

              </div>
            </div> : <Empty description="No Assignment today" />
          }
        </div>
      </Col>


    </Row>
  )
}
