
'use client'
import React from "react";
import CheckOutItem from '../../../../../../components/cart/checkout/CheckOutItem'
import CheckOutForm from "../../../../../../components/cart/checkout/CheckOutForm";
import BackButton from "../../../../../../components/ui/BackButton";
import CartTitleBar from "../../../../../../components/ui/layout/CartTitleBar";
import { useGetACartQuery } from "../../../../../../redux/app/cart/cartApi";

export default function page(props) {
    const { cartId } = props.params
    const { data:cartData } = useGetACartQuery({ cartId })
    const data =cartData?.data
    return (
        <div className="py-16 px-4 container md:px-6 2xl:px-0  2xl:mx-auto 2xl:container">
            <div className='flex justify-start flex-col mb-3 items-start space-y-3'>
                <BackButton link='#' />
            </div>
            <div className="flex flex-col justify-start items-start w-full space-y-9">
                <CartTitleBar Title='Cart' />
                <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">

                    <div className="  flex justify-center h-full  bg-gray-100 py-7 pt-8 p-4 xl:w-1/5 rounded-md">
                        <CheckOutItem data={data} />
                    </div>

                    <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-4/5 rounded-md">
                        <CheckOutForm />
                    </div>

                </div>
            </div>
        </div>

    )
}
