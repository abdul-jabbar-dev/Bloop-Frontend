'use client'
import React, { useEffect, useState } from 'react'
import { Button, message, Result, StepProps, Steps, theme } from 'antd';
import { CheckOutlined, DollarOutlined, FileDoneOutlined, IssuesCloseOutlined, LoadingOutlined, PayCircleOutlined, UserOutlined } from '@ant-design/icons';
import CheckOutIssueForm from '../../cart/checkout/makeCheckout/CheckOutIssueForm';

import { useParams } from 'next/navigation';
import { useGetServicePlacedByCartIdQuery } from '../../../redux/app/order/orderApi';
import { useGetACartQuery } from '../../../redux/app/cart/cartApi';
import Loading from '../loading';
import CheckOutPaymentForm from './CheckOutPaymentForm';
import { TStatus } from '../../../types/common';


export default function CheckoutStepper() {
    const { cartId } = useParams()
    const [current, setCurrent] = useState(0);
    const { data } = useGetACartQuery({ cartId: cartId as string })
    const { data: isAlreadyOrder } = useGetServicePlacedByCartIdQuery({ cartId: cartId as string })

    const next = () => {
        setCurrent((pre) => pre + 1);
    };

    const issueItemState = (): { content: any, status: string, icon: any } => {
        if (isAlreadyOrder === undefined) {
            return { content: <Loading />, status: "wait", icon: <LoadingOutlined /> }
        } else {

            if (isAlreadyOrder?.data?.id) {
                if (current === 0) {
                    setCurrent(1)
                }
                return { content: <CheckOutIssueForm cart={data?.data} next={next} />, status: "finish", icon: <CheckOutlined /> }
            } else {
                return { content: <CheckOutIssueForm cart={data?.data} next={next} />, status: "wait", icon: <IssuesCloseOutlined /> }
            }
        }
    }

    const paymentItemState = (): { content: any, status: string, icon: any } => {
        const CheckoutPayment = isAlreadyOrder?.data?.servicePlaced
        if (CheckoutPayment?.payment === undefined) {
            return { content: <Loading />, status: "wait", icon: <LoadingOutlined /> }
        } else {

            if ((CheckoutPayment?.order?.status !== TStatus.pending) && CheckoutPayment?.payment?.id) {
                if (current === 1) {
                    setCurrent(2)
                }
                return { content: <CheckOutPaymentForm cart={data?.data} next={next} ordered={isAlreadyOrder} />, status: "finish", icon: <CheckOutlined /> }
            } else {
                return { content: <CheckOutPaymentForm cart={data?.data} next={next} ordered={isAlreadyOrder} />, status: "wait", icon: <DollarOutlined /> }
            }
        }
    }
    const steps = [
        {
            title: 'Issue Item',
            content: issueItemState().content,
            icon: issueItemState().icon,
            status: issueItemState().status,

        },
        {
            title: 'Payment',
            content: paymentItemState().content,
            icon: paymentItemState().icon,
            status: paymentItemState().status,
        },
        {
            title: 'Finished',
            content: <Result
                status="success"
                title="Checkout successful"
                subTitle={"Order id: " + isAlreadyOrder?.data?.servicePlaced?.order?.id + " ! Service Provider meet with you in " + isAlreadyOrder?.data?.servicePlaced?.bookingDate + "."}
                extra={[
                    <div></div>
                ]}
            />,

            status: 'wait',
            icon: <DollarOutlined />,
        }
    ];
    const items: StepProps[] = steps.map((item, i) => ({ key: i, title: item.title, icon: item.icon, status: item.status })) as StepProps[];

    return (
        <>
            <Steps current={2} items={items} />
            <div style={{ marginTop: 24 }}>{steps[current].content}</div>
        </>
    );
}
