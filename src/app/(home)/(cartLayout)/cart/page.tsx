'use client'
import React from 'react'
import BackButton from '../../../../components/ui/BackButton'
import { Col, Row } from 'antd'
import { useGetFromCartQuery } from '../../../../redux/app/cart/cartApi'
import CartItemInCartList from '../../../../components/cart/CartItemInCartList'
import { TCart } from '../../../../types/cart/cartItem'
import CartAddressBar from '../../../../components/cart/CartAddressBar'
import CartTitleBar from '../../../../components/ui/layout/CartTitleBar'

export default function page() {
    const { data: cartData } = useGetFromCartQuery({})

    const data = cartData?.data
    return (
            <div className="py-16 px-4 container md:px-6 2xl:px-0  2xl:mx-auto 2xl:container">
                <div className='flex justify-start flex-col mb-3 items-start space-y-3'>
                    <BackButton link='#' />
                </div>
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <CartTitleBar Title='Cart' />
                    <Row justify={{ sm: 'space-between', xs: "center" }} className='w-full'>
                        <Col md={12} className='order-2 lg:order-1  w-full '>
                            {data?.map((item: TCart, i: number) => <CartItemInCartList key={i} item={item} />)}
                        </Col>
                        <Col md={11} className='order-1 lg:order-2 w-full '>
                            <CartAddressBar />
                        </Col>
                    </Row>
                </div>
            </div>
    )
}
