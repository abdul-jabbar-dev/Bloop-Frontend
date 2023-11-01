
import React from "react";
import { TCart } from "../../types/cart/cartItem";
import Link from "next/link";
import { useGetFromCartQuery } from "../../redux/app/cart/cartApi";
import Loading from "../ui/loading";
import { TStatus } from "../../types/common";
import TOrder from "../../types/order/order";
import { Empty } from "antd";

export default function CartItemInCartList() {
    const { data: cartData } = useGetFromCartQuery({})

    if (!(cartData?.data)) {
        return <Loading />
    }
    type TCartWithOrder = {
        order: TOrder
    } & TCart;
    const data: TCartWithOrder[] = cartData?.data

    return (
        <div className='bg-white'>
            {!data ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={"Empty Cart"} /> : data.filter(item => {
                if (!(item?.order)) return item
                else if (item?.order?.status !== TStatus.booked) {
                    return item
                }
            }).map(item =><><div className="mb-8 lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/3 rounded-xl h-72 lg:h-56" src={item.service?.image?.url} alt="" />

                <div className="mt-6 lg:w-2/3 lg:mt-0 lg:mx-6 ">
                    <p className="text-sm text-blue-500 uppercase">{item.service?.service?.title}</p>

                    <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800    md:text-3xl">
                        {item.service?.title}
                    </a>

                    <div className="flex items-center mt-6 ">
                        <p className="text-2xl text-gray-700 w-full"> Price: <span>{item.service?.price}</span> </p>
                        <Link href={'/cart/checkout/' + item.id} className="w-full">
                            <button className=" border border-transparent outline bg-gray-900 hover:bg-transparent hover:outline-1 hover:outline-gray-900   text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                <p className="text-base leading-4">Proceed </p>
                            </button>
                        </Link>
                    </div>
                </div>

            </div></>)}
        </div>)

}
