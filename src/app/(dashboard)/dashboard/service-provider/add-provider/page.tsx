'use client'
import React from 'react'
import { useGetSubscribersQuery } from '../../../../../redux/app/users/userApi'
import FormSelect from '../../../../../components/ui/form/FormSelect'
import Form from '../../../../../components/ui/form/Form'
import { Avatar, Button, Col, Image, Row } from 'antd'
import Loading from '../../loading'
import { TUser } from '../../../../../types/users/user'
import { ERole, EStatus } from '../../../../../types/common'
import { UserOutlined } from '@ant-design/icons'
import { useGetServiceTypeQuery } from '../../../../../redux/app/serviceType/serviceTypeAndProvider'
import { TServiceType } from '../../../../../types/serviceType/serviceType'
import { DefaultOptionType } from 'antd/es/select'

export default function Page() {
    const { data, isLoading: sisLoading } = useGetSubscribersQuery({})
    const { data: serviceType, isLoading: serisLoading } = useGetServiceTypeQuery({})
    if (sisLoading || serisLoading) {
        return <Loading />
    }
    const userOptions = [...data?.data?.filter((s: TUser) => s.role === ERole.subscriber && s.status === EStatus.active).map((subscribe: TUser) => {
        return {
            label: <span className=' flex gap-x-2'>
                <Avatar src={(subscribe?.image?.url) ? subscribe?.image?.url : <UserOutlined />} />
                <span className=' flex gap-x-2 text-gray-700'>
                    Full Name:  <span className='text-gray-900 font-semibold'>{subscribe?.firstName + " " + subscribe?.lastName}</span>,
                    Email: <span className='text-gray-900 font-semibold'>{subscribe?.email || 'No Email'}</span>
                </span>
            </span>,
            value: subscribe.id
        }
    })]
    const serviceTypeOptions: DefaultOptionType[] = [...serviceType?.map((st: TServiceType) => ({
        label: st.title,
        value: st.id

    }))]
    return (
        <>
            <Form submitHandler={(datae) => console.log(datae)}>
                <Row>
                    <Col span={24}>
                        <FormSelect placeholder='New Worker' label='Select New Service provider' style={{ width: "50%", height: "100%" }} optionsValue={userOptions} name='serviceId' />
                    </Col>
                    <Col span={24}>
                        <FormSelect placeholder='Select Service type' label='Select Service category to handle new service provider' style={{ width: "50%" }} optionsValue={serviceTypeOptions} name='serviceTypeId' />
                    </Col>
                </Row>
                <Button htmlType='submit'>Create</Button>
            </Form>
        </>
    )
}
