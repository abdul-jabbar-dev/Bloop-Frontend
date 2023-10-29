import React, { useState } from 'react'
import Form from '../../../ui/form/Form'
import FormInput from '../../../ui/form/FormInput'
import { TCreateServicePlaced } from '../../../../types/servicePlaced/servicePlaced'
import FormDatePicker from '../../../ui/form/FormDatePicker'
import FormTextArea from '../../../ui/form/FormTextArea'
import { dateFormat } from '../../../../constaint/dateFormat'
import dayjs from 'dayjs'
import { useCreateOrderMutation } from '../../../../redux/app/order/orderApi'
import { message } from 'antd'
import { useParams } from 'next/navigation'

export default function CheckOutIssueForm({ next }) {
    const [createOrder] = useCreateOrderMutation({})
    const [date, setDate] = useState<string>('')
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'makeOrder';
    const params = useParams() //orderId 

    const makeServicePlaced = (data: TCreateServicePlaced) => {
        data['serviceId'];//set serviceId find with orderId
        data['bookingDate'] = date
        createOrder({ servicePlacedInfo: data }).then((rre: any) => {

            if (rre?.data?.data) {
                next()
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

    }
    return (
        <div>
            <p className=" text-base leading-4 text-gray-600 ">Tell us about your issue</p>
            <Form submitHandler={makeServicePlaced}>
                {contextHolder}
                <div className="mt-8">
                    <label htmlFor='issueItem' className="mt-8 text-base leading-4 text-gray-800">Issue Item</label>
                    <FormInput size='large' name='issueItem' style={{ padding: ".8rem", borderRadius: "3px" }} inputClassName="border border-gray-300 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="AC" />
                </div>

                <div className="mt-8">
                    <label htmlFor='issueDetails' className="mt-8 text-base leading-4 text-gray-800">Issue details</label>
                    <FormTextArea name='issueDetails' rows={5} inputClassName="border border-gray-300 w-full text-base leading-4 placeholder-gray-600 text-gray-600" />
                </div>
                <div className="mt-8">
                    <label htmlFor='issueDetails' className="mt-8 text-base leading-4 text-gray-800">Booking Date</label>
                    <FormDatePicker ifDisabledPast DisabledDays={[dayjs('26-10-2023', dateFormat), dayjs('29-10-2023', dateFormat)]}
                        format={dateFormat} size='small' name='bookingDate'
                        onchange={(_, date) => setDate(date)}
                        style={{ padding: ".8rem", borderRadius: "3px" }}
                        inputClassName="border border-gray-300 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text" placeholder="Select a comfortable Date" />
                </div>

                <button /* onClick={() => next()} */ className="mt-8 border border-transparent hover:border-gray-300  bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                    <div>
                        <p className="text-base leading-4">Add </p>
                    </div>
                </button>
            </Form>
        </div>
    )
}
