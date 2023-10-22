'use client'
import { Popconfirm, PopconfirmProps } from 'antd'
import React from 'react'



type Props = {
    title: PopconfirmProps["title"],
    description: PopconfirmProps["description"],
    handleOk?: (e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => boolean
}

const ConfirmPop =({  title, description, handleOk }: Props) => {
    return (
        <Popconfirm
            title={title}
            description={description}
            onConfirm={handleOk}
            okButtonProps={{ loading: handleOk && handleOk() }}
        > 
        </Popconfirm>
    )
}
export default ConfirmPop