import { Col, Row, Tag } from "antd";
import { TShippingAddress } from "../../../types/shippingAddress/shippingAddress";
import { CheckOutlined } from "@ant-design/icons";
import { useSetDefaultSippingAddressMutation } from "../../../redux/app/shippingAddress/shippingAddressApi";


export default function ShippingAddressItem({ addressInfo }: { addressInfo: TShippingAddress }) {
    const [setDefault] = useSetDefaultSippingAddressMutation({})
    const makeSetDefault = () => {
        setDefault({ shippingAddressId: addressInfo.id! })
    }
    return (
        <div className="mb-[2px] px-2 bg-white shadow-text-base leading-normal sm:leading-4 text-gray-600">
            <div className="border-b">

                <div className=" px-1 py-3">
                    {!!addressInfo.isDefault ?
                        <Tag className="mb-1 bg-gray-900 text-white flex w-min gap-x-1 border-gray-900">DEFAULT <CheckOutlined /> </Tag> :
                        <Tag onClick={makeSetDefault} className="mb-1 border-gray-900 hover:text-white hover:bg-gray-900 cursor-pointer">SET DEFAULT</Tag>}

                    <Row justify={'space-between'} className="my-1 text-base" >
                        <Col xl={3} sm={5}>
                            <span className="text-right whitespace-nowrap w-max">Contact Number: </span>
                        </Col>
                        <Col xl={19} sm={18} className="w-full">
                            <div className="">{addressInfo.contactNo}</div>
                        </Col>
                    </Row>
                    <Row justify={'space-between'} className="text-base" >
                        <Col xl={3} sm={5}>
                            <span className="text-right  whitespace-nowrap w-max">Address: </span>
                        </Col>
                        <Col xl={19} sm={18} className="w-full">
                            <div >{addressInfo.address + " " + addressInfo.street + " " + addressInfo.area + " " + addressInfo.city}</div>
                        </Col>
                    </Row>

                    <Row justify={'space-between'} className="my-1 text-base">
                        <Col xl={3} sm={5}>
                            <span className="text-right  whitespace-nowrap w-max">Label: </span>
                        </Col>
                        <Col xl={19} sm={18} className="w-full">
                            <div className="">{addressInfo.label}</div>
                        </Col>
                    </Row>
                </div>
            </div></div>
    )

}
