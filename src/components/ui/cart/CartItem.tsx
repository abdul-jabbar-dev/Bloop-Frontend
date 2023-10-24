import React, { useEffect, useState } from 'react'
import FormDatePicker from '../form/FormDatePicker'
import { TCartItem } from '../../../types/cart/cartItem'
import { useGetAllServiceQuery } from '../../../redux/app/service/serviceApi'
import Loading from '../loading'
import TService from '../../../types/Service/Service'
import Image from 'next/image'
import { CloseCircleOutlined } from '@ant-design/icons'
import { getItemByCartIDFromCart, removeItemFromCart } from '../../../helpers/cart/cart'

export default function CartItem({ item, setOnSelect, onSelect }: { onSelect: string, item: TCartItem, setOnSelect: React.Dispatch<React.SetStateAction<string>> }) {
    const [orderDate, setOrderDate] = useState<string[]>([])
    const [onRemove, setOnRemove] = useState<string>("")
    const [getFromLS, setGetFromLS] = useState<TCartItem | {}>({})
    useEffect(() => {
        setGetFromLS(getItemByCartIDFromCart(item.cartId))
    }, [])
    if (!item) {
        return <Loading />
    }
    const { data, isLoading } = useGetAllServiceQuery({ id: item.serviceId }, { skip: item?.serviceId?.length < 1 })
    if (!data || isLoading) {
        return <Loading />
    }
    const service: TService = data?.data[0]



    const removeFromItemCart = () => {
        removeItemFromCart(item.cartId)
        setOnRemove(item.cartId)
    }
    return (

        <div onMouseEnter={() => setOnSelect(item.cartId)} onMouseLeave={() => setOnSelect("")}
            className={'text-gray-700 rounded-lg  relative border-[1px] transform transition-all delay-200 border-[transparent] w-full bg-white px-3 py-[12px] my-1 hover:border-gray-200  hover:shadow-lg hover:shadow-[#e2e1e16a] ' + (onSelect === item.cartId ? " opacity-100  hover:shadow-xl hover:shadow-[#c9c9c96a]" : (onSelect.length > 1 ? " opacity-60 select-none bg-gray-200" : " ")) + (onRemove === item.cartId ? " removeItemAnimation " : " ")} >

            <div className="flex h-full w-full items-start justify-between transition-all duration-150   ">
                <div className="flex items-center w-full gap-3">
                    <div className="flex flex-grow-0 h-16 w-18 items-center justify-center">
                        <Image
                            width={60}
                            height={40}
                            className="h-full w-full rounded-lg"
                            src={service.image?.url}
                            alt={service.title}
                        />
                    </div>
                    <div className="flex flex-grow flex-col">
                        <h5 className="text-base font-bold ">
                            {service.title}
                        </h5>
                        <div className='flex justify-end'>
                            <div className="ml-1 flex items-center text-sm font-bold ">
                                {service.price}<p className="ml-1 text-xs font-thin">BDT</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CloseCircleOutlined onClick={removeFromItemCart} className='w-min hover:rounded-full p-1 hover:bg-gray-200 cursor-pointer' />
            </div>
            <div>
                <FormDatePicker format='DD-MM-YYYY' size='small' placeholder='Order Date' onchange={(_, date) => { setOrderDate([...orderDate, date]) }} name='servicingDate' />
                <div className='rounded-[10px] border-[1px] border-gray-200 w-full mx-auto p-3 bg-white bg-clip-border shadow-md shadow-[#e2e1e16a]'>
                    getFromLS
                </div>
            </div>
        </div>

    )
}
