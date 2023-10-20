'use client'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import DashboardSubscriberMenu from './dashbarMenu/DashboardSubscriberMenu';
import DashboardAdminMenu from './dashbarMenu/DashboardAdminMenu';

export default function DashboardSidebar(user: any) {
  const { data } = user
  const [collapsed, setCollapsed] = useState(false);

  if (!data) {
    return "Loading"
  }


  const rendedMenu = () => {
    if (data.role === 'subscriber') {
      return DashboardSubscriberMenu({ data, collapsed })
    } else if (data.role === 'admin') {
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
