import { useState } from 'react'
import { useGetAllServiceQuery } from '../../../redux/app/service/serviceApi'
import Loading from '../loading'
import TService from '../../../types/Service/Service'
import Image from 'next/image'
import { CloseCircleOutlined } from '@ant-design/icons'

import { TCart } from '../../../types/cart/cartItem'
import { useRemoveItemCartMutation } from '../../../redux/app/cart/cartApi'
 

export default function CartItem({ item, setOnSelect, onSelect }: { onSelect: string, item: TCart, setOnSelect: React.Dispatch<React.SetStateAction<string>> }) {
    const [onRemove, setOnRemove] = useState<string>("")

    if (!item) {
        return <Loading />
    }
    const { data, isLoading } = useGetAllServiceQuery({ id: item.serviceId }, { skip: item?.serviceId?.length < 1 })
    const [removeItem] = useRemoveItemCartMutation()
    if (!data || isLoading) {
        return <Loading />
    }
    const service: TService = data?.data[0]

    const removeFromItemCart = () => {
        removeItem(item.id).then((res: any) => {
            if (res?.data?.data) {
                console.log()
                setOnRemove(res?.data?.data.id)
            }
        })
    }
    return (

        <div onMouseEnter={() => setOnSelect(item.id)} onMouseLeave={() => setOnSelect("")}
            className={'text-gray-700 rounded-lg  relative border-[1px] transform transition-all delay-200 border-[transparent] w-full bg-white px-3 py-[12px] my-1 hover:border-gray-200  hover:shadow-lg hover:shadow-[#e2e1e16a] ' + (onSelect === item.id ? " opacity-100  hover:shadow-xl hover:shadow-[#c9c9c96a]" : (onSelect.length > 1 ? " opacity-60 select-none bg-gray-200" : " ")) + (onRemove === item.id ? " removeItemAnimation " : " ")} >

            <div className="flex h-full w-full items-start justify-between transition-all duration-150   ">
                <div className="flex items-center w-full gap-3">
                    <div className="flex flex-grow-0   items-center justify-center h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                            width={80}
                            height={80}
                            className="h-full w-full rounded-lg"
                            src={service.image?.url}
                            alt={service.title}
                        />
                    </div>
                    <div className="flex flex-grow flex-col">
                        <h5 className="text-base   ">
                            {service.title}
                        </h5>
                        <div className="ml-1 flex items-center text-sm  font-medium ">
                            {service.price}<p className="ml-1 text-xs font-thin">BDT</p>
                        </div>
                        <div className='flex justify-end'>
                            <button className=" border border-transparent outline bg-gray-900 hover:bg-transparent hover:outline-1 hover:outline-gray-900   text-white hover:text-gray-900 flex justify-center items-center py-2 rounded w-full">
                                <div>
                                    <p className="text-base leading-4">Proceed </p>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
                <CloseCircleOutlined onClick={removeFromItemCart} className='w-min hover:rounded-full p-1 hover:bg-gray-200 cursor-pointer' />
            </div>
            {/* <div>
                <FormDatePicker ifDisabledPast DisabledDays={[dayjs('26-10-2023', dateFormat), dayjs('29-10-2023', dateFormat)]} format={dateFormat} size='small' placeholder='Order Date' onchange={(_, date) => setDateIntoItem({ itemId: item.id, date })} name='servicingDate' />
                <div className='rounded-[10px] border-[1px] border-gray-200 w-full mx-auto p-3 bg-white bg-clip-border shadow-md shadow-[#e2e1e16a]'>
                    Appointment date
                    {item.date}
                </div>
            </div> */}
        </div>

    )
}
