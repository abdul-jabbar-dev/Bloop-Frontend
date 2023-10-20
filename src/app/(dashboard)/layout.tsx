'use client'
import { Layout, Menu, theme } from 'antd'
import React, { ReactElement } from 'react'
import DashboardSidebar from '../../components/header/DashboardSidebar'
import { useGetMyInfoQuery } from '../../redux/app/apis/authApi';
import Loading from '../(home)/(serviceType)/services/loading';
import { isLoggedIn } from '../../utils/auth.service';
const { Content } = Layout;
export default function layout({ children }: { children: React.ReactNode | ReactElement }) {
  const { data, isLoading, refetch } = useGetMyInfoQuery(undefined)
  const IsLogin = isLoggedIn()
  if ((IsLogin && !data) || isLoading) {
    return <Loading />
  } else { 
  }
  return (
    <Layout hasSider style={{ minHeight: '100vh' }}>
      <DashboardSidebar data={data} />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>



  )
}









