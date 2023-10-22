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
import {redirect } from 'next/navigation';


export default function DashboardSidebar() {
  const { data: myData, isLoading } = useGetMyInfoQuery(null, { skip: !GetLocalStore(CONFIG.authKey) })
  const [collapsed, setCollapsed] = useState(false);
  const IsLogin = isLoggedIn()
  if (isLoading) {
    return <div>'Loading...'</div>
  } if (!IsLogin) {
    redirect('/')
    return <></>
  }
  const data = myData?.data
  const rendedMenu = () => {
    if (data?.role === 'subscriber') {
      return DashboardSubscriberMenu({ data, collapsed })
    } else if (data?.role === 'admin') {
      return DashboardAdminMenu({ data, collapsed })
    }
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={rendedMenu()} />
    </Sider>
  )
}
