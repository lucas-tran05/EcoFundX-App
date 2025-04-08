'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Col, Row, Steps } from 'antd'
import { SmileOutlined, SolutionOutlined, UserOutlined, PayCircleFilled } from '@ant-design/icons'

export default function CreateLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    let currentStep = 0;
    if (pathname.includes('step-1')) {
        currentStep = 0;
    } else if (pathname.includes('step-2')) {
        currentStep = 1;
    } else if (pathname.includes('step-3')) {
        currentStep = 2;
    } else if (pathname.includes('step-4')) {
        currentStep = 3;
    }

    return (
        <Row gutter={[24, 24]} align="middle" justify="center" style={{ padding: '32px', margin: 0 }}>
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                <Steps
                    current={currentStep}
                    items={[
                        {
                            title: 'Login',
                            icon: <UserOutlined />,
                        },
                        {
                            title: 'Verification',
                            icon: <SolutionOutlined />,
                        },
                        {
                            title: 'Pay',
                            icon: <PayCircleFilled />,
                        },
                        {
                            title: 'Done',
                            icon: <SmileOutlined />,
                        },
                    ]}
                />
                {children}
            </Col>
        </Row>
    )
}
