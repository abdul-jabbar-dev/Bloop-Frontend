'use client'
import { DashboardOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Col } from 'antd'
import Link from 'next/link'
import React from 'react'
import firebaseApp from '../../../utils/auth/firebaseApp'
import RemoveLocalStore from '../../../helpers/localStore/removeLocalStore'
import CONFIG from '../../../config'

export default function SubscriberMenu(allData: any) {
    const { data } = allData

    const logoutAction = () => {
        firebaseApp().logout().then(res => {
            RemoveLocalStore(CONFIG.authKey)
        })
    }
    return (
        <>
            <Col span={24} className="flex items-center gap-x-4">
                <span className="w-min"><Avatar src={data && data?.image?.url} size={{ xs: 40, sm: 40, md: 40, lg: 56, xl: 56, xxl: 56 }} icon={<UserOutlined />} /></span>
                <div className="flex-grow w-full flex justify-start">
                    <span>
                        <h2 className="text-2xl">{data?.firstName + " " + data?.lastName}</h2>
                        <h2 className="text-md">{data?.email}</h2>
                    </span>
                </div>
            </Col>

            <Link href={'/dashboard'}>
                <Col span={24} className="mt-2">
                    <button className="w-full py-3 hover:bg-gray-200 rounded-md flex justify-start gap-x-4 px-2 items-center"><DashboardOutlined />Dashboard</button>
                </Col>
            </Link>

            <Col span={24} className="mt-2">
                <button onClick={() => logoutAction()} className="w-full py-3 hover:bg-red-500 hover:text-white rounded-md flex justify-start gap-x-4 px-2 items-center">
                    <span className="w-min"><LogoutOutlined /></span>
                    <div className="flex-grow w-full flex justify-start">Logout</div>
                </button>
            </Col>

        </>
    )
}
