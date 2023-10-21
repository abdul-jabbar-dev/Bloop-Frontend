'use client'
import { Layout, Menu, theme } from 'antd'
import React, { ReactElement } from 'react'
import DashboardSidebar from '../../components/header/DashboardSidebar'
import { useGetMyInfoQuery } from '../../redux/app/apis/authApi'; 
import { isLoggedIn } from '../../utils/auth.service';
import GetLocalStore from '../../helpers/localStore/getLocalStore';
import CONFIG from '../../config';
import Loading from './loading';
const { Content } = Layout;
export default function layout({ children }: { children: React.ReactNode | ReactElement }) {
  const { data, isLoading, refetch } = useGetMyInfoQuery(null, { skip: !GetLocalStore(CONFIG.authKey) })
  const IsLogin = isLoggedIn()
  if ((IsLogin && !data) || isLoading) {
    return <Loading />
  } else {
  }
  return (
    <Layout hasSider style={{ minHeight: '100vh' }}>
      <DashboardSidebar data={data?.data} />
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









