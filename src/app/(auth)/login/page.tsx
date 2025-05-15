'use client';
import { useState } from 'react';
import { Layout, Flex, Button, Card, Input, Checkbox, Divider, Typography, Row, Col, Form, Image, notification, Alert } from 'antd';
import { GoogleOutlined, FacebookFilled, LinkedinFilled, MailOutlined, LockOutlined } from '@ant-design/icons';
import Link from "next/link";
import { loginUser } from "@/lib/api/auth";
import React from 'react';

const { Text, Title, Paragraph } = Typography;

const LoginPage: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    const onFinish = async (values: any) => {
        try {
            const { success, data } = await loginUser(values.email, values.password);
            setMessage(data.message);

            if (success) {
                // Lưu user vào localStorage
                if (data.user) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                }

                // Chuyển hướng
                window.location.href = '/';
            } else {
                notification.error({
                    message: 'Login Failed',
                    description: data.message,
                    placement: 'topRight',
                    duration: 3,
                });
            }
        } catch (error) {
            console.error('Login error:', error);
            notification.error({
                message: 'Login Failed',
                description: 'An unexpected error occurred. Please try again later.',
                placement: 'topRight',
                duration: 3,
            });
        }
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
                            rules={[
                                { required: true, message: 'Please input your Email Address!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
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
                            <Button type="primary" htmlType="submit" block size="large">
                                Log In
                            </Button>
                        </Form.Item>
                    </Form>

                    {/* Social Media Sign-Up */}
                    <Divider style={{ marginTop: '30px' }}>Or sign up with</Divider>
                    <Row justify="center" gutter={[16, 10]}>
                        <Col xs={24} sm={6} md={6} lg={6}>
                            <Button icon={<GoogleOutlined style={{ fontSize: 20 }} />} size="large" block style={{ fontSize: '14px' }}>
                                Google
                            </Button>
                        </Col>
                        <Col xs={24} sm={6} md={6} lg={6}>
                            <Button icon={<FacebookFilled style={{ fontSize: 20, color: 'var(--tertiary-color)' }} />} size="large" block style={{ fontSize: '14px' }}>
                                Facebook
                            </Button>
                        </Col>
                        <Col xs={24} sm={6} md={6} lg={6}>
                            <Button icon={<LinkedinFilled style={{ fontSize: 20, color: 'var(--tertiary-color)' }} />} size="large" block style={{ fontSize: '14px' }}>
                                LinkedIn
                            </Button>
                        </Col>
                    </Row>

                    {/* Register Link */}
                    <Paragraph style={{ marginTop: '20px', textAlign: 'center' }}>
                        Don't have an account?{' '}
                        <Link href="/register/basicInfo" style={{ color: 'var(--primary-color)' }}>
                            Sign up
                        </Link>
                    </Paragraph>
                </Card>
            </Flex>
        </Flex>
    );
};

export default LoginPage;
