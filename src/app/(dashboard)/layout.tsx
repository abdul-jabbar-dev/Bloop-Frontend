'use client'
import { Layout} from 'antd'
import React, { ReactElement } from 'react'
import DashboardSidebar from '../../components/header/DashboardSidebar' 
const { Content } = Layout;
export default function layout({ children }: { children: React.ReactNode | ReactElement }) { 
    return (
    <Layout hasSider style={{ minHeight: '100vh' }}>
      <DashboardSidebar/>
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









