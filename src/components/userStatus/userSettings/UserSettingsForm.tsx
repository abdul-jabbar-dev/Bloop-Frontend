
'use client'
import { Avatar, Button, Col, Row, Tooltip, message } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { EditOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons'
import { useGetMyInfoQuery } from '../../../redux/app/apis/authApi'
import GetLocalStore from '../../../helpers/localStore/getLocalStore'
import CONFIG from '../../../config'
import { useUpdateUserInfoMutation } from '../../../redux/app/users/userApi'
import Loading from '../../ui/loading'
import Form from '../../ui/form/Form'
import FormInput from '../../ui/form/FormInput'
import FormUpload from '../../ui/form/FormUpload'
export default function UserSettingsForm() {

    const [messageApi, contextHolder] = message.useMessage();
    const [editable, setEditable] = useState(true)
    const { data: userData } = useGetMyInfoQuery(null, { skip: !GetLocalStore(CONFIG.authKey) })
    const data = userData?.data
    const key = 'updatable';
    const [update] = useUpdateUserInfoMutation()
    if (!data) {
        return <Loading />
    }

    const updateProfile = async (updateData: any) => {
        for (const key in updateData) {
            if (updateData.hasOwnProperty(key)) {
                if (typeof updateData[key] === 'string') {
                    updateData[key] = updateData[key].trim();
                }
            }
        }
        updateData = Object.fromEntries(Object.entries(updateData).filter(([_, v]) => v != null));
        const formData = new FormData()
        if (updateData?.profileImage) {
            formData.append('file', updateData?.profileImage)
            delete updateData['profileImage']
        }
        formData.append('data', JSON.stringify(updateData))
        update(formData).then((rre: any) => {
            if ((rre as any).data) {
                messageApi.open({
                    key,
                    type: 'success',
                    content: 'Successfully login',
                    duration: 2,
                }
                )
                setEditable(true)
            } else {
                messageApi.open({
                    key,
                    type: 'error',
                    content: (rre as any).error.message,
                    duration: 2,
                }
                )
            }
        })


    }
    return (
        <div>     <Row>{contextHolder}
            <Col lg={7} span={22} className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">User Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details.</p>
            </Col>
            <Col lg={17} span={22} className="mt-6 border-t border-gray-100">
                <Form submitHandler={updateProfile}>
                    <Row className='gap-x-3'>

                        <Col span={22} md={10} className='flex justify-center'>

                            {(editable && !data?.image) && <Avatar size={200} src={data && data?.image?.url} icon={<UserOutlined />} />}
                            {(editable) ? <Avatar className='w-full' size={200} src={<Image alt='Profile' width={300} height={200} src={data?.image?.url} />} /> : <FormUpload name='profileImage' defaultSrc={data?.image?.url} />
                            }
                        </Col>
                        <Col span={22} md={10} className='flex justify-center'>

                        </Col>
                        <Col span={22} md={10} className='mt-7'>
                            <h3 className='text-sm text-gray-500'>First Name: </h3>
                            <div className="text-base font-medium text-gray-700  ">
                                <FormInput name='firstName' required isNotEditable={editable} value={data?.firstName}></FormInput>
                            </div>
                        </Col>

                        <Col span={22} md={10} className='mt-7'>
                            <h3 className='text-sm text-gray-500'>Last Name: </h3>
                            <div className="text-base font-medium text-gray-700  ">
                                <FormInput name='lastName' required isNotEditable={editable} value={data?.lastName}></FormInput>
                            </div>
                        </Col>

                        <Col span={22} md={10} className='mt-7'>
                            <h3 className='text-sm text-gray-500'>Email: </h3>
                            <div className="text-base font-medium text-gray-700  ">

                                <FormInput name='email' type='email' /* required={!(data.email)}  */ isNotEditable={editable} value={data?.email}></FormInput>
                            </div>

                        </Col>

                        <Col span={22} md={10} className='mt-7'>
                            <h3 className='text-sm text-gray-500'>Gender: </h3>
                            <div className="text-base font-medium text-gray-700  ">

                                <FormInput name='gender' isNotEditable={editable} value={data?.gender}></FormInput>
                            </div>
                        </Col>

                        <Col span={22} md={10} className='mt-7'>
                            <h3 className='text-sm text-gray-500'>Date Of Birth: </h3>
                            <div className="text-base font-medium text-gray-700  ">
                                <FormInput name='dateOfBirth' isNotEditable={editable} value={data?.dateOfBirth}></FormInput>

                            </div>
                        </Col>
                        <Col span={22} md={10} className='mt-7'>
                            <h3 className='text-sm text-gray-500'>Contact No: </h3>
                            <div className="text-base font-medium text-gray-700  ">
                                <FormInput name='contactNo' isNotEditable={editable} value={data?.contactNo}></FormInput>
                            </div>
                        </Col>

                        <Col span={22} md={10} className='my-7'>
                            <h3 className='text-sm text-gray-500'>Blood Group: </h3>
                            <div className="text-base font-medium text-gray-700  ">

                                <FormInput name='bloodGroup' isNotEditable={editable} value={data?.bloodGroup}></FormInput>
                            </div>
                        </Col>
                        <Col span={22} md={10} className='my-7'>
                            <h3 className='text-sm text-gray-500'>Status: </h3>
                            <div className="text-base font-medium text-gray-700  ">{data?.status}</div>
                        </Col>
                        <Col span={24} >
                            <Row align={'middle'}>
                                <Col span={12} >
                                    <Tooltip title={editable ? "Edit Profile" : "View Profile"}>
                                        <Button size={'large'} onClick={() => setEditable(!editable)} shape="circle" icon={editable ? <EditOutlined /> : <ReadOutlined />} />
                                    </Tooltip>
                                </Col>

                                {
                                    !editable && <Col span={12} className='mt-7'>
                                        <Button htmlType='submit'>Update</Button>
                                    </Col>
                                }
                            </Row>
                        </Col>

                    </Row>
                </Form>
            </Col>

        </Row></div>
    )
}
