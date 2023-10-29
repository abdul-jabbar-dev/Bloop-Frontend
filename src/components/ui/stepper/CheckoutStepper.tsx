'use client'
import React, { useEffect, useState } from 'react'
import { Button, message, Steps, theme } from 'antd';
import { IssuesCloseOutlined, UserOutlined } from '@ant-design/icons';
import CheckOutIssueForm from '../../cart/checkout/makeCheckout/CheckOutIssueForm';


export default function CheckoutStepper() {

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const steps = [
        {
            title: 'Issue Item',
            content: <CheckOutIssueForm next={next} />,
            icon: <IssuesCloseOutlined />,
        },
        {
            title: 'Second',
            content: 'Second-content',
            icon: <UserOutlined />,
        },
        {
            title: 'Last',
            content: 'Last-content',
            icon: <UserOutlined />,
        },
    ];
    const items = steps.map((item) => ({ key: item.title, title: item.title, icon: item.icon }));

    useEffect(() => {
        console.log(current)
    }, [current])


    return (
        <>
            <Steps current={current} items={items} />
            <div style={{ marginTop: 24 }}>{steps[current].content}</div>
            <div style={{ marginTop: 24 }}>
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
}
