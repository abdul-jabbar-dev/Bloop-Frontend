import React, {  useState } from 'react'
import Form from '../form/Form'
import FormInput from '../form/FormInput'
import FormSelect from '../form/FormSelect'
import { CPaymentMethods, EPaymentMethods, TCreatePayment } from '../../../types/servicePlaced/payment/payment'
import TOrder from '../../../types/order/order'
import Loading from '../loading'
import { useMakePaymentAndConfirmMutation } from '../../../redux/app/order/orderApi'
import { message } from 'antd' 

export default function CheckOutPaymentForm({ next, ordered }: { next: any, ordered: { data: TOrder } }) {
 
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'confirmPayment'
    if (!ordered) {
        return <Loading />
    }

    const [makePayment] = useMakePaymentAndConfirmMutation()
    const [paymentType, setPaymentType] = useState("")



    const makeServicePlaced = (data: TCreatePayment) => {
        if (paymentType === EPaymentMethods.CashOnDelivery) {
            data['paymentVarificationCode'] = undefined
        }
        data['orderId'] = ordered.data.id
        makePayment({ servicePlacedInfo: data }).then((rre: any) => { 
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
            <p className=" text-base leading-4 text-gray-600 ">Make your bill</p>
            <Form submitHandler={makeServicePlaced}>
                {contextHolder}
                <div className="mt-8">
                    <label htmlFor='paymentMethod' className="mt-8 text-base leading-4 text-gray-800">Payment Type</label>
                    <FormSelect placeholder='Card' optionsValue={Object.keys(CPaymentMethods as any as EPaymentMethods[])
                        .map((meth: EPaymentMethods) => ({ key: meth, value: meth, label: meth }))} size='large' name='paymentMethod' style={{ padding: ".8rem", borderRadius: "4px" }} ifBorder={false} inputClassName="py-6 h-full border border-gray-300 w-full bg-white placeholder text-base leading-4 placeholder-gray-600 text-gray-600 " type="text" selectedData={(value) => setPaymentType(value)} />
                </div>

                {paymentType !== EPaymentMethods.CashOnDelivery && <div className="mt-8">
                    <label htmlFor='paymentVarificationCode' className="mt-8 text-base leading-4  text-gray-800">Transaction ID</label>
                    <FormInput size='large' placeholder='    *********' name='paymentVarificationCode' style={{ padding: ".8rem", borderRadius: "4px" }} inputClassName="py-6 h-full border border-gray-300 w-full text-base leading-4 placeholder-gray-600 text-gray-600 " type="text" />
                </div>}
                <button className="mt-8 border border-transparent hover:border-gray-300  bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                    <div>
                        <p className="text-base leading-4">Add </p>
                    </div>
                </button>
            </Form>
        </div>
    )
}
