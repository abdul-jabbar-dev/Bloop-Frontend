import { LoadingOutlined } from '@ant-design/icons'
import { Row, Spin } from 'antd';
import React from 'react'

export default function Loading() {
  const antIcon = <LoadingOutlined style={{ fontSize: 42 }} spin />;
  return (
    <Row justify={'center'} ><Spin indicator={antIcon}></Spin></Row>
  )
}