'use client';
import React from 'react';
import { Layout, Flex, Button, Card, Input, Checkbox, Divider, Typography, Row, Col, Form, Image } from 'antd'; // Bỏ ConfigProvider nếu không dùng theme riêng ở đây
import { GoogleOutlined, FacebookFilled, LinkedinFilled, MailOutlined, LockOutlined } from '@ant-design/icons';
import Link from "next/link";

const { Text, Title, Paragraph } = Typography;

const LoginPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Flex
            justify="center" 
            align="center"  
            style={{
                minHeight: '100vh', 
                background: 'var(--background-gradient)', 
                padding: '20px',
            }}
        >
            <Flex
                vertical
                align="center"
                style={{
                    width: '100%',
                    maxWidth: '500px', 
                }}
            >
                
                <Flex vertical align="center" style={{ marginBottom: '24px' }}>
                    <Title
                        level={2}
                        style={{
                            color: 'var(--primary-color)', 
                            margin: 0,
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            src="/images/logo_ecofundx.png" 
                            alt="Logo EcoFundX"
                            width={50}
                            height={50}
                            preview={false} 
                            style={{ marginRight: '10px' }} 
                        />
                        EcoFundX
                    </Title>
                    <Text type="secondary" style={{ fontSize: '14px', marginTop: '8px' }}>
                        Welcome back! Please login to your account
                    </Text>
                </Flex>

                {/* Card Đăng nhập */}
                <Card
                    style={{
                        width: '100%', 
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout="vertical"
                        requiredMark={false}
                    >
                        {/* Email Input */}
                        <Form.Item
                            label={<Text>Email Address</Text>}
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email Address!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                        >
                            <Input
                                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Enter your email"
                                size="large"
                            />
                        </Form.Item>

                        {/* Password Input */}
                        <Form.Item
                            label={<Text>Password</Text>}
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Enter your password"
                                size="large"
                            />
                        </Form.Item>

                        {/* Remember Me & Forgot Password */}
                        <Form.Item style={{ marginBottom: '10px' }}>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Link href="/forgot-password" style={{ color: 'var(--primary-color)' }}>
                                    Forgot Password?
                                </Link>
                            </Flex>
                        </Form.Item>

                        {/* Login Button */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block size="large" >
                                Log In
                            </Button>
                        </Form.Item>
                    </Form>

                    {/* Social Media Sign-Up */}
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
                        Don't have an account?{' '}
                        <Link href="/register/basicInfo" style={{ color: 'var(--primary-color)' }}>Sign up</Link>
                    </Paragraph>
                </Card>
            </Flex>
        </Flex>
    );
};

export default LoginPage;
