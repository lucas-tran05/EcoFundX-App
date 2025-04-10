'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Col, Row, Steps } from 'antd'
import { SmileOutlined, SolutionOutlined, UserOutlined, PayCircleFilled } from '@ant-design/icons'

export default function CreateLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    let currentStep = 0;
    if (pathname.includes('amount')) {
        currentStep = 0;
    } else if (pathname.includes('legality')) {
        currentStep = 1;
    } else if (pathname.includes('pay')) {
        currentStep = 2;
    } else if (pathname.includes('bill')) {
        currentStep = 3;
    }

    return (
        <Row gutter={[24, 24]} align="middle" justify="center" style={{ padding: '32px', margin: 0 }}>
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                <Steps
                    current={currentStep}
                    size='small'
                    type='navigation'
                    items={[
                        {
                            title: 'Amount',
                            icon: <UserOutlined />,
                        },
                        {
                            title: 'Legality',
                            icon: <SolutionOutlined />,
                        },
                        {
                            title: 'Pay',
                            icon: <PayCircleFilled />,
                        },
                        {
                            title: 'Bill',
                            icon: <SmileOutlined />,
                        },
                    ]}
                    style={{ marginBottom: '32px' }}
                />

                <Row gutter={[24, 24]} align="middle" justify="center">
                    <Col span={24}>
                        {children}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
