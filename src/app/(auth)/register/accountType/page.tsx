'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Layout, Flex, Button, Card, Steps, Divider, List, Typography, Row, Col, Space, ConfigProvider} from 'antd';
import { BulbFilled, GoogleOutlined, FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import { FaLightbulb, FaHandHoldingUsd } from "react-icons/fa";
import Link from "next/link"; 

const { Step } = Steps;
const { Text, Paragraph} = Typography;

type AccountTypeValue = 'creator' | 'investor';

const AccountTypePage: React.FC = () => {
    const [selectedType, setSelectedType] = useState<AccountTypeValue | null>(null);
    const router = useRouter();

    const handleContinue = () => {
        sessionStorage.setItem('registerStep2', JSON.stringify({ accountType: selectedType }));
        router.push('/register/additionalInfo'); 
        
    };

    const handleSelectType = (type: AccountTypeValue) => {
        setSelectedType(type);
    };

    return (
        <Card
            style={{
                maxWidth: 860,
                margin: '40px auto',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Steps */}
            <Steps current={1} size="small" style={{ marginBottom: '30px' }}>
                <Step title="Basic Info" />
                <Step title="Account Type" />
                <Step title="Additional Info" />
            </Steps>

            {/* Account Type Selection */}
            <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <Card
                        hoverable
                        onClick={() => handleSelectType('creator')}
                        style={{
                            border: selectedType === 'creator' ? '2px solid var(--primary-color)' : '1px solid var(--border-color)', 
                            backgroundColor: selectedType === 'creator' ? 'var(--background-quaternary)' : 'var(--background-primary)',
                            cursor: 'pointer',
                            boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)'
                        }}
                    >
                        <Space size="middle" align="center">
                            <Button
                                icon={<FaLightbulb style={{ fontSize: '35px', color: 'var(--primary-color)' }} />}
                                style={{ 
                                    border: 'none', 
                                    backgroundColor: selectedType === 'creator' ? 'var(--background-quaternary)' : 'var(--background-primary)',
                                    pointerEvents: 'none' 
                                }} 
                            />
                            <div style={{ padding: '10px 0px'}}>
                                <Text strong style={{ fontSize: '20px'}}>Project Creator</Text>
                            </div>
                        </Space>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <Card
                        hoverable
                        onClick={() => handleSelectType('investor')}
                        style={{
                            border: selectedType === 'investor' ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                            backgroundColor: selectedType === 'investor' ? 'var(--background-quaternary)' : 'var(--background-primary)',
                            boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
                            cursor: 'pointer'
                        }}
                    >
                        <Space size="middle" align="center">
                            <Button
                                icon={<FaHandHoldingUsd style={{ fontSize: '35px', color: 'var(--primary-color)' }} />}
                                style={{ 
                                    border: 'none', 
                                    backgroundColor: selectedType === 'investor' ? 'var(--background-quaternary)' : 'var(--background-primary)',
                                    pointerEvents: 'none' 
                                }} 
                            />
                            <div style={{ padding: '10px 0px'}}>
                                <Text strong style={{ fontSize: '20px' }}>Investor</Text>
                            </div>
                        </Space>
                    </Card>
                </Col>
            </Row>

            {/* Navigation Buttons*/}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
                <Link href="/register/basicInfo">
                    <Button type="text" >← Back</Button>
                </Link>
                <Button
                    type="primary"
                    onClick={handleContinue}
                    disabled={!selectedType}
                >
                    Continue →
                </Button>
            </div>

            {/*Social Media and Login Link */}
            <Divider style={{ marginTop: '30px'}}>Or sign up with</Divider>
            <Row justify="center" gutter={[16, 10]} >
                <Col xs={24} sm={6} md={6} lg={6}>
                    <Button icon={<GoogleOutlined style={{ fontSize: 20 }}/>} size="large" block style={{ fontSize: '14px'}}>
                    Google
                    </Button>
                </Col>
                <Col xs={24} sm={6} md={6} lg={6}>
                    <Button icon={<FacebookFilled style={{ fontSize: 20, color: 'var(--tertiary-color)' }}/>} size="large" block style={{ fontSize: '14px'}}>
                    Facebook
                    </Button>
                </Col>
                <Col xs={24} sm={6} md={6} lg={6}>
                    <Button icon={<LinkedinFilled style={{ fontSize: 20, color: 'var(--tertiary-color)' }}/>} size="large" block style={{ fontSize: '14px' }}>
                    Linkedln
                    </Button>
                </Col>
            </Row>

            {/* Login Link */}
            <Paragraph style={{ marginTop: '20px', textAlign: 'center' }}>
                Already have an account?{' '}
                <Link href="/login" style={{ color: 'var(--primary-color)' }}>Log in here</Link>
            </Paragraph>
        </Card>
    );
};

export default AccountTypePage;
