'use client';

import React from 'react';
import { Card, Steps, Form, Input, Button, Divider, Typography, Row, Col, ConfigProvider} from 'antd';
import { GoogleOutlined, FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import Link from "next/link";

const { Step } = Steps;
const { Text, Paragraph } = Typography;

const RegistrationPage = () => {
  const onFinish = (values: any) => {
      console.log('Form values:', values);
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
        <Steps current={0} size="small" style={{ marginBottom: '30px' }}>
          <Step title="Basic Info" />
          <Step title="Account Type" />
          <Step title="Additional Info" />
        </Steps>

        {/* Form */}
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter your full name!' }]}>
                <Input placeholder="John Cooper" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter a username!' }]}>
                <Input placeholder="johncooper" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                <Input placeholder="+1 (555) 123-4567" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Email Address" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
                <Input placeholder="john@example.com" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter a password!' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
        
        
          <Form.Item 
            label="Confirm Password" 
            name="confirmPassword" 
            dependencies={['password']} 
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}>
              <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        
          {/* Continue Button */}
          <Link href="/register/accountType">
              <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                  <Button type="primary">
                      Continue →
                  </Button>
              </div>
          </Link> 
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
                Already have an account?{' '}
                <Link href="/login" style={{ color: 'var(--primary-color)' }}>Log in here</Link>
            </Paragraph>
      </Card>
  );
};

export default RegistrationPage;
