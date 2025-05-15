'use client';

import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button, Checkbox, Upload, Row, Col, Typography, Card, Flex } from 'antd';
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhone, FaRegClock } from "react-icons/fa6";
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const validateAgreement = (_: any, value: boolean) => {
    if (value) {
        return Promise.resolve();
    }
    return Promise.reject(new Error('You must agree to the terms!'));
};

const quickContactOptions = [
    {
        value: 'support@ecofundx.com',
        icons: <MdOutlineAttachEmail />,
    },
    {
        value: '+1 (555) 123-4567',
        icons: <FaPhone />,
    },
    {
        value: 'Mon - Fri, 9AM - 6PM EST',
        icons: <FaRegClock />,
    },
];

const ContactForm: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    const uploadProps = {
        beforeUpload: (file: File) => {
            console.log('Uploaded file:', file);
            return false; // Prevent auto upload
        },
    };

    return (
        <Row gutter={[32, 32]} justify="center" align="top" style={{ padding: '40px', margin: 0 }}>
            <Row gutter={[16, 16]}>
                <Flex justify="center" align="center" style={{ width: '100%' }}>
                    <Typography.Title level={2} style={{ fontWeight: 'bold' }}>
                        We'd Love to Hear from You!
                    </Typography.Title>
                    <Typography.Paragraph>
                        Have questions about EcoFundX? We're here to help and listen to your feedback.
                    </Typography.Paragraph>
                </Flex>
            </Row>

            <Row
                gutter={[32, 32]}
                style={{ width: windowWidth < 768 ? '90%' : '80%' }}
                align="top"
                justify="center"
            >
                {/* Contact Info Column */}
                <Col xs={24} sm={24} md={14} lg={8}>
                    <Card>
                        <Typography.Title level={4} style={{ fontWeight: 'bold' }}>
                            Quick Contact
                        </Typography.Title>
                        {quickContactOptions.map((option) => (
                            <Flex
                                align="center"
                                gap={16}
                                key={option.value}
                                style={{ marginBottom: '16px' }}
                            >
                                <div
                                    style={{
                                        backgroundColor: 'var(--icon-primary-bg)',
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--primary-color)',
                                    }}
                                >
                                    {option.icons}
                                </div>
                                {option.value}
                            </Flex>
                        ))}
                    </Card>
                </Col>

                {/* Contact Form Column */}
                <Col xs={24} sm={24} md={14} lg={14}>
                    <Form layout="vertical" onFinish={onFinish} style={{ margin: '0 auto' }} size="large">
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please enter your full name!' }]}
                        >
                            <Input placeholder="John Doe" />
                        </Form.Item>

                        <Form.Item
                            label="Email Address"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email address!' },
                                { type: 'email', message: 'Please enter a valid email address!' },
                            ]}
                        >
                            <Input placeholder="john@example.com" />
                        </Form.Item>

                        <Form.Item
                            label="Subject"
                            name="subject"
                            rules={[{ required: true, message: 'Please select a subject!' }]}
                        >
                            <Select placeholder="Select a subject">
                                <Option value="general">General Inquiry</Option>
                                <Option value="support">Support</Option>
                                <Option value="feedback">Feedback</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            name="message"
                            rules={[{ required: true, message: 'Please enter your message!' }]}
                        >
                            <Input.TextArea rows={4} placeholder="Your message here..." />
                        </Form.Item>

                        <Form.Item label="Attachments (Optional)" name="attachments">
                            <Upload {...uploadProps}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[{ validator: validateAgreement }]}
                        >
                            <Checkbox>I agree to the privacy policy and terms of service</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Row>
    );
};

export default ContactForm;
