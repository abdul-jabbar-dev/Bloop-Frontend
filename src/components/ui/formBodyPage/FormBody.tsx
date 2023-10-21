import { Col, Row } from 'antd'
import React, { ReactElement, ReactNode } from 'react'

export default function FormBody({ title, image, children }: {
    title?: string, children: ReactElement | ReactNode, image: ReactElement | ReactNode
}) {
    return (
        <div className="min-h-screen gap-y-12 flex align-middle justify-center flex-col ">
            {title ? <Row>
                <Col span={24}>
                    <h2 className="font-light text-3xl text-gray-600">
                        Create a new service
                    </h2>
                </Col>
            </Row> : null}
            <Row className="w-full" >
                <Col className="order-2 xl:order-1" span={24} xl={16} >
                    {children}
                </Col>
                <Col span={24} xl={8} className="flex justify-center order-1 xl:order-2">
                    <div> {image}</div>
                </Col>

            </Row>

        </div>
    )
}
