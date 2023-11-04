import { UseFormReturn } from 'react-hook-form'
import { message } from 'antd'
import { useCreateSippingAddressMutation } from '../../../redux/app/shippingAddress/shippingAddressApi';
import { TShippingAddress } from '../../../types/shippingAddress/shippingAddress';
import Form from '../../ui/form/Form';
import FormInput from '../../ui/form/FormInput';
import FormSelect from '../../ui/form/FormSelect';
import FormSelectAndNew from '../../ui/form/FormSelectAndNew';
import FormCheckBox from '../../ui/form/FormCheckBox';
export default function ShippingAddressForm() {
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'shippingAddress';
    const [createAddress] = useCreateSippingAddressMutation()

    const cityData = [
        { label: "Dhaka", value: "Dhaka" },
        { label: "Chittagong", value: "Chittagong" },
        { label: "Khulna", value: "Khulna" },
        { label: "Rajshahi", value: "Rajshahi" },
        { label: "Sylhet", value: "Sylhet" },
        { label: "Barisal", value: "Barisal" },
        { label: "Comilla", value: "Comilla" },
        { label: "Narayanganj", value: "Narayanganj" },
        { label: "Dinajpur", value: "Dinajpur" },
        { label: "Rangpur", value: "Rangpur" }
    ]
    const submitAddress = (data: TShippingAddress, _: any, methods?: UseFormReturn<Record<string, any>, any, undefined> | undefined) => {

        const errContainer = document.getElementById('errContainer')!
        errContainer.innerHTML = ''
        if (!data) {
            return
        }
        const filter: Partial<(keyof TShippingAddress | undefined)>[] = (['address', 'city', 'contactNo', 'label', 'isDefault', 'street', 'area'] as Partial<(keyof TShippingAddress)[]>).filter((ke: Partial<(keyof TShippingAddress | undefined)>) => {

            if (ke === undefined) { } else {
                if (ke === 'isDefault' && typeof data[ke] === undefined) {
                    methods?.setValue('isDefault', false)
                } if ((data[ke] === " " || !data[ke] || (data[ke] as string).length < 1) && ke !== 'isDefault') {
                    return ke
                }
            }

        });
        if (filter.length > 0) {
            errContainer.innerHTML = `<div class="max-w-4xl mx-auto">
            <div class="bg-red-50 border-l-8 border-red-900">
            <div class="flex items-center">
            <div class="px-2 py-1">
            <div class="flex items-center">
            <div class="ml-2">
            <svg class="h-8 w-8 text-red-900 mr-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    </div>
                                    <p class="px-6 py-4 text-red-900 font-semibold text-lg">Please fix the
                        following
                        errors.</p>
                        </div>
                        <div id='errMsg' class="px-16 mb-4">
                     
                        </div>
                        </div>
                        </div>
                        </div>
        </div>`
            const d = document.getElementById('errMsg')
            filter.map(er => {
                const list = document.createElement('span')
                list.innerHTML = `<li class="text-md font-bold text-red-500 text-sm">${er} field is required.</li>`
                d!.appendChild(list)
            })

        } else {
            createAddress(data).then((rre: any) => {

                if (rre?.data?.data) {
                    messageApi.open({
                        key,
                        type: 'success',
                        content: 'Successfully Added',
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
        }
        setTimeout(() => {
            errContainer.innerHTML = ''
        }, 10000)
    }

    return (
        <>
            <Form id="shippingAddressForm" submitHandler={submitAddress}  >
                <section>
                    {contextHolder}
                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping Information</h2>
                    <fieldset>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">

                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Address</span>
                                <FormInput placeholder='------' name="address" ifBorder={false} inputClassName="focus:outline-none px-3" required />
                            </label>

                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Street</span>
                                <FormInput placeholder='------' name="street" ifBorder={false} inputClassName="focus:outline-none px-3" required />
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">area</span>
                                <FormInput placeholder='------' name="area" ifBorder={false} inputClassName="focus:outline-none px-3 " required />
                            </label>

                            <label className="flex w-full border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">City</span>
                                <FormSelect placeholder='------' ifBorder={false} style={{ width: "100%" }} name="city" size="large" required optionsValue={cityData} />
                                <br />
                            </label>

                        </fieldset>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">

                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2 whitespace-nowrap">Contact No.</span>
                                <FormInput placeholder='------' name="contactNo" ifBorder={false} inputClassName="focus:outline-none px-3" required />
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2 whitespace-nowrap">Label</span>
                                <FormSelectAndNew name="label" optionsValue={['Basic', 'Office', 'Home']}
                                    placeholder='------' ifBorder={false} style={{ width: "100%" }} />
                            </label>

                        </fieldset>
                        <fieldset className="mb-3 rounded-md text-gray-600">

                            <label className="flex h-12 py-3 items-center">
                                <FormCheckBox name='isDefault' text='Set default Address?' />
                            </label>

                        </fieldset>
                        <div id={'errContainer'}></div>
                    </fieldset>
                </section>
                <button className="submit-button px-4 py-3 rounded-md outline bg-gray-900 hover:bg-transparent hover:outline-1 hover:outline-gray-900   text-white hover:text-gray-900 w-full text-xl font-semibold transition-colors">
                    Add Shipping
                </button>
            </Form>
        </>
    )
}
