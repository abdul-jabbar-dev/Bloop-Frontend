'use client'
import React from 'react'
import { useGetMyInfoQuery } from '../../../redux/app/apis/authApi'
import GetLocalStore from '../../../helpers/localStore/getLocalStore'
import CONFIG from '../../../config' 
import SubscriberPage from '../../../components/userStatus/pageRendaring/subscriber/SubscriberPage'
import ServiceProviderPage from '../../../components/userStatus/pageRendaring/serviceProvider/ServiceProviderPage'
import dynamic from 'next/dynamic'
import AdminPage from '../../../components/userStatus/pageRendaring/admin/AdminPage'
const Loader = dynamic(
    () => import('../loading'),
    { ssr: false }
)

export default function page() {
    const { data: myData, isLoading } = useGetMyInfoQuery(null, { skip: !GetLocalStore(CONFIG.authKey) })
    if (!myData) {
        return <Loader />
    }
    if (myData?.data.role === "serviceProvider") {
        return <ServiceProviderPage />
    } else if (myData?.data.role === "subscriber") {
        return <SubscriberPage />
    } else if (myData?.data.role === "admin") {
        return <AdminPage />
    }

}
