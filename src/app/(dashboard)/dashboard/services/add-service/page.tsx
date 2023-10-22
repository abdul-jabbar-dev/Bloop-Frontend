'use client'
import { Button, Col, Row, message } from "antd";
import Form from "../../../../../components/ui/form/Form";
import FormInput from "../../../../../components/ui/form/FormInput";
import FormDynamicInput from "../../../../../components/ui/form/FormDynamicInput";
import FormTextArea from "../../../../../components/ui/form/FormTextArea";
import FormSelect from "../../../../../components/ui/form/FormSelect";
import FormUpload from "../../../../../components/ui/form/FormUpload";
import { useGetServiceTypeQuery } from "../../../../../redux/app/serviceTypeAndProvider/serviceTypeAndProvider";
import { TServiceType } from "../../../../../types/serviceType/serviceType";
import { useCreateServiceMutation } from "../../../../../redux/app/service/serviceApi";
import bg from '/src/assets/servicePage/ac-installation.gif'
import Image from "next/image";
import FormBody from "../../../../../components/ui/formBodyPage/FormBody";

export default function Page() {
    const { data } = useGetServiceTypeQuery({})
    const [createService] = useCreateServiceMutation()
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'Creatable';

    const createANewService = (newData: any) => {
        const formData = new FormData()
        formData.append('file', newData.thumbnail)
        delete newData['thumbnail']
        formData.append('data', JSON.stringify(newData))
        createService(formData).then((rre:any) => {
            
            if ((rre as any)?.data?.data) {
                messageApi.open({
                    key,
                    type: 'success',
                    content: 'Successfully create',
                    duration: 2,
                }
                )

            } else {
                messageApi.open({
                    key,
                    type: 'error',
                    content: (rre as any)?.error?.message || (rre as any)?.error?.data,
                    duration: 2,
                }
                )
            }
        }).catch((rre:any) => console.error(rre))
    }

    const districtData = [
        { label: "Dhaka", value: "Dhaka" },
        { label: "Gazipur", value: "Gazipur" },
        { label: "Narayanganj", value: "Narayanganj" },
        { label: "Tangail", value: "Tangail" },
        { label: "Manikganj", value: "Manikganj" },
        { label: "Munshiganj", value: "Munshiganj" },
        { label: "Narsingdi", value: "Narsingdi" },
        { label: "Rajbari", value: "Rajbari" },
        { label: "Faridpur", value: "Faridpur" },
        { label: "Gopalganj", value: "Gopalganj" },
        { label: "Madaripur", value: "Madaripur" },
        { label: "Shariatpur", value: "Shariatpur" },
        { label: "Chandpur", value: "Chandpur" },
        { label: "Kishoreganj", value: "Kishoreganj" },
        { label: "Brahmanbaria", value: "Brahmanbaria" },
        { label: "Comilla", value: "Comilla" },
        { label: "Noakhali", value: "Noakhali" },
        { label: "Laxmipur", value: "Laxmipur" },
        { label: "Feni", value: "Feni" },
        { label: "Khagrachari", value: "Khagrachari" },
        { label: "Rangamati", value: "Rangamati" },
        { label: "Bandarban", value: "Bandarban" },
        { label: "Cox's Bazar", value: "Cox's Bazar" },
        { label: "Chittagong", value: "Chittagong" },
        { label: "Rangpur", value: "Rangpur" },
        { label: "Kurigram", value: "Kurigram" },
        { label: "Lalmonirhat", value: "Lalmonirhat" },
        { label: "Nilphamari", value: "Nilphamari" },
        { label: "Thakurgaon", value: "Thakurgaon" },
        { label: "Panchagarh", value: "Panchagarh" },
        { label: "Dinajpur", value: "Dinajpur" },
        { label: "Joypurhat", value: "Joypurhat" },
        { label: "Bogura", value: "Bogura" },
        { label: "Rajshahi", value: "Rajshahi" },
        { label: "Naogaon", value: "Naogaon" },
        { label: "Natore", value: "Natore" },
        { label: "Chapainawabganj", value: "Chapainawabganj" },
        { label: "Pabna", value: "Pabna" },
        { label: "Sirajganj", value: "Sirajganj" },
        { label: "Jamalpur", value: "Jamalpur" },
        { label: "Mymensingh", value: "Mymensingh" },
        { label: "Netrokona", value: "Netrokona" },
        { label: "Sherpur", value: "Sherpur" },
        { label: "Habiganj", value: "Habiganj" },
        { label: "Moulvibazar", value: "Moulvibazar" },
        { label: "Sylhet", value: "Sylhet" },
        { label: "Sunamganj", value: "Sunamganj" },
        { label: "Brahmanbaria", value: "Brahmanbaria" },
        { label: "Narsingdi", value: "Narsingdi" },
        { label: "Narayanganj", value: "Narayanganj" },
        { label: "Munshiganj", value: "Munshiganj" },
        { label: "Gopalganj", value: "Gopalganj" },
        { label: "Shariatpur", value: "Shariatpur" },
        { label: "Madaripur", value: "Madaripur" },
        { label: "Chandpur", value: "Chandpur" },
        { label: "Barisal", value: "Barisal" },
        { label: "Bhola", value: "Bhola" },
        { label: "Patuakhali", value: "Patuakhali" },
        { label: "Barguna", value: "Barguna" },
        { label: "Jhalokati", value: "Jhalokati" },
        { label: "Pirojpur", value: "Pirojpur" },
        { label: "Khulna", value: "Khulna" },
        { label: "Bagerhat", value: "Bagerhat" },
        { label: "Satkhira", value: "Satkhira" }
    ];
    const orderTypes = [
        { label: "Online", value: "Online" },
        { label: "Offline", value: "Offline" },
        { label: "Hybrid", value: "Hybrid" }
    ]
    return (
        <FormBody title=" Create a new service" image={<Image width={400} height={500} src={bg} style={{ width: "100%" }} alt="Service background" />}>
            <Form submitHandler={createANewService}>{contextHolder}
                <Row className="w-full" justify={'space-between'}>
                    <Col span={24} xl={11}>
                        <FormUpload label="Service Thumbnail" name="thumbnail" />
                    </Col>
                    <Col span={24} xl={11}>
                        <FormDynamicInput required style={{ width: "100%" }} inputClassName="w-full flex-grow" placeholder="Item" size="large" name="serviceItem" label="Add Service Items" />

                    </Col>
                </Row>
                <Row className="w-full" justify={'space-between'}>
                    <Col span={24} xl={11}>
                        <FormInput size="large" required name="title" label="Service Name" />
                    </Col>
                    <Col span={24} xl={11}>
                        <FormSelect style={{ width: "100%" }} size="large" required name="orderType" label="Order Type" optionsValue={orderTypes} />
                    </Col>
                </Row>
                <Row className="w-full" justify={'space-between'}>
                    <Col span={24} xl={11}>
                        <FormInput type="number" required size="large" name="price" label="Service Price" />
                    </Col>
                    <Col span={24} xl={11}>
                        <FormInput size="large" required name="serviceGuarantee" label="Service Guarantee" />
                    </Col>
                </Row>
                <Row className="w-full" justify={'space-between'}>
                    <Col span={24} xl={11}>
                        <FormSelect style={{ width: "100%" }} mode="tags" size="large" required name="serviceArea" label="Service Areas" optionsValue={districtData} />
                    </Col>
                    <Col span={24} xl={11}>
                        <FormSelect style={{ width: "100%" }} size="large" required name="serviceTypeId" label="Service Category" optionsValue={data?.data?.map((category: TServiceType) => ({ label: category.title, value: category.id }))} />
                    </Col>
                </Row>

                <Row className="w-full" justify={'space-between'}>
                    <Col span={24}>
                        <FormTextArea placeholder="Write service about some information" name="details" label="Service Details" />
                    </Col>
                </Row>
                <Row className="w-full mt-6" justify={'space-between'}>
                    <Col span={24}>
                        <Button htmlType="submit">submit</Button>
                    </Col>
                </Row>
            </Form>
        </FormBody>
    )
}
