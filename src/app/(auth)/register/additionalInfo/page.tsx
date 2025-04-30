'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { registerUser } from '@/lib/api/auth';
import { Card, Steps, Form, Input, Button, Divider, Typography, Row, Col, Checkbox, Space, message } from 'antd';
import { GoogleOutlined, FacebookFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons';
import Link from "next/link";

const { Step } = Steps;
const { Paragraph, Text } = Typography;

const RegistrationAdditionalInfoPage: React.FC = () => {
  const router = useRouter();

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedData = sessionStorage.getItem('registerStep3');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      form.setFieldsValue(parsedData);
    }
  }, [form]);

  const onFinish = async (values: any) => {
    console.log('Form values:', values);
    sessionStorage.setItem('registerStep3', JSON.stringify(values));
    router.push('/login');
    ['registerStep1', 'registerStep2', 'registerStep3'].forEach(key => sessionStorage.removeItem(key));
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
      <Steps current={2} size="small" style={{ marginBottom: '30px' }}>
        <Step title="Account Type" />
        <Step title="Basic Info" />
        <Step title="Additional Info" />
      </Steps>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Bio" name="bio">
          <Input.TextArea rows={4} placeholder="Tell us a bit about yourself or your project..." />
        </Form.Item>

        <Text style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Social Media Links</Text>
        <Form.Item name="facebookUrl">
          <Input prefix={<FacebookFilled style={{ color: 'var(--tertiary-color)', marginRight: '8px' }} />} placeholder="Facebook profile URL" />
        </Form.Item>
        <Form.Item name="twitterUrl">
          <Input prefix={<TwitterOutlined style={{ color: 'var(--tertiary-color)', marginRight: '8px' }} />} placeholder="Twitter profile URL" />
        </Form.Item>
        <Form.Item name="linkedinUrl">
          <Input prefix={<LinkedinFilled style={{ color: 'var(--tertiary-color)', marginRight: '8px' }} />} placeholder="LinkedIn profile URL" />
        </Form.Item>

        <Form.Item
          name="termsAccepted"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Please accept the terms and conditions')),
            },
          ]}
          style={{ marginBottom: '30px' }}
        >
          <Checkbox>
            <Text style={{ fontSize: '13px', lineHeight: '1.4' }}>
              Yes, I understand and agree to the EcofundX{' '}
              <Link href="/terms" style={{ color: 'var(--primary-color)' }}>Terms of Service</Link>, including the{' '}
              <Link href="/user-agreement" style={{ color: 'var(--primary-color)' }}>User Agreement</Link> and{' '}
              <Link href="/privacy" style={{ color: 'var(--primary-color)' }}>Privacy Policy</Link>.
            </Text>
          </Checkbox>
        </Form.Item>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
          <Link href="/register/accountType">
            <Button type="text">← Back</Button>
          </Link>
          <Button type="primary" htmlType="submit">Continue →</Button>
        </div>
      </Form>

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

      <Paragraph style={{ marginTop: '20px', textAlign: 'center' }}>
        Already have an account?{' '}
        <Link href="/login" style={{ color: 'var(--primary-color)' }}>Log in here</Link>
      </Paragraph>
    </Card>
  );
};

export default RegistrationAdditionalInfoPage;
