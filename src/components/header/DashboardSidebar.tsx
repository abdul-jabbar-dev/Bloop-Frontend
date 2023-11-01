'use client'

import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import DashboardSubscriberMenu from './dashbarMenu/DashboardSubscriberMenu';
import DashboardAdminMenu from './dashbarMenu/DashboardAdminMenu';
import { useGetMyInfoQuery } from '../../redux/app/apis/authApi';
import GetLocalStore from '../../helpers/localStore/getLocalStore';
import CONFIG from '../../config';
import { isLoggedIn } from '../../utils/auth.service';
import { redirect } from 'next/navigation';
import DashboardServiceProviderMenu from './dashbarMenu/DashboardServiceProviderMenu';
const IsLogin = isLoggedIn()


export default function DashboardSidebar() {
  const { data: myData, isLoading } = useGetMyInfoQuery(null, { skip: !GetLocalStore(CONFIG.authKey) })
  const [collapsed, setCollapsed] = useState(false);

  const data = myData?.data
  if (isLoading || !IsLogin) {
    return <div>'Loading...'</div>
  } else if (!isLoading && !IsLogin) {
    redirect('/')
  }
  const rendedMenu = () => {
    if (data?.role === 'subscriber') {
      return DashboardSubscriberMenu({ data, collapsed })
    } else if (data?.role === 'admin') {
      return DashboardAdminMenu({ data, collapsed })
    } else if (data?.role === 'serviceProvider') {
      return DashboardServiceProviderMenu({ data, collapsed })
    }
  }

  return (
    <div>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" > </div>
        <Menu theme="dark" mode="inline" items={rendedMenu()} />
      </Sider>
    </div>
  )
}
