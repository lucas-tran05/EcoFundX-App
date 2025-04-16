'use client';

import React, { useState } from 'react';
import { Card, Steps, Form, Input, Button, Divider, Typography, Row, Col, ConfigProvider, Upload, Checkbox, Space, message } from 'antd';
import { GoogleOutlined, FacebookFilled, LinkedinFilled, UploadOutlined, TwitterOutlined } from '@ant-design/icons';
import Link from "next/link";
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const { Step } = Steps;
const { Paragraph, Text } = Typography;
const { TextArea } = Input;

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
// --- End Helper Functions ---


const RegistrationAdditionalInfoPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  // --- Handler for Upload component state ---
  const handleUploadChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
        message.success(`${info.file.name} file uploaded successfully`);
      });
    }
    if (info.file.status === 'error') {
      setLoading(false);
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  // --- Handler for Form submission ---
  const onFinish = (values: any) => {
    const finalValues = { ...values, avatarUrl: imageUrl };
    console.log('Form values:', finalValues);
    message.success('Registration Submitted!');
  };

  // --- Handler for Back button (Placeholder) ---
  const handleBack = () => {
    console.log('Navigate back to previous step');
  };

  // --- Handler for removing photo ---
  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setImageUrl(undefined); 
    message.info('Photo removed.');
  };

  // --- Upload Button UI ---
  const uploadButton = (
    <button style={{ border: 0, background: 'none', cursor: 'pointer' }} type="button">
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );


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

      {/* Form */}
      <Form layout="vertical" onFinish={onFinish} >

        {/* Photo Upload Section */}
        <Form.Item label="Upload a photo" name="avatar" >
          <Space align="start" size="large">
            <Upload
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleUploadChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              ) : (
                // Display loading state on the button itself
                loading ? <div>Loading...</div> : uploadButton
              )}
            </Upload>
            {/* Conditionally render Remove button only if there's an image */}
            {imageUrl && (
              <Button type="link" onClick={handleRemovePhoto} style={{ padding: '0', height: 'auto', lineHeight: 'inherit', marginTop: '8px', color: 'red' }}>
                Remove
              </Button>
            )}
          </Space>
        </Form.Item>

        {/* Bio Section */}
        <Form.Item label="Bio" name="bio">
          <TextArea rows={4} placeholder="Tell us a bit about yourself or your project..." />
        </Form.Item>

        {/* Social Media Links Section */}
        <Text style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Social Media Links</Text>
        <Form.Item name="facebookUrl" >
          <Input prefix={<FacebookFilled style={{ color: 'var(--tertiary-color)', marginRight: '8px' }} />} placeholder="Facebook profile URL" />
        </Form.Item>
        <Form.Item name="twitterUrl">
          <Input prefix={<TwitterOutlined style={{ color: 'var(--tertiary-color)', marginRight: '8px' }} />} placeholder="Twitter profile URL" />
        </Form.Item>
        <Form.Item name="linkedinUrl">
          <Input prefix={<LinkedinFilled style={{ color: 'var(--tertiary-color)', marginRight: '8px' }} />} placeholder="LinkedIn profile URL" />
        </Form.Item>

        {/* Terms and Conditions Checkbox */}
        <Form.Item
          name="termsAccepted"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Please accept the terms and conditions')),
            }
          ]}
          style={{ marginBottom: '30px' }}
        >
          <Checkbox>
            <Text style={{ fontSize: '13px', lineHeight: '1.4' }}> {/* Adjust font size */}
              Yes, I understand and agree to the EcofundX
              <Link href="/terms" style={{ color: 'var(--primary-color)' }}>Terms of Service</Link>, including the
              <Link href="/user-agreement" style={{ color: 'var(--primary-color)' }}>User Agreement</Link> and
              <Link href="/privacy" style={{ color: 'var(--primary-color)' }}>Privacy Policy</Link>.
            </Text>
          </Checkbox>
        </Form.Item>

        {/* Navigation Buttons */}
        {/* Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
          <Link href="/register/accountType">
            <Button type="text" >← Back</Button>
          </Link>
          <Link href="/#">
            <Button type="primary">Continue →</Button>
          </Link>
        </div>
      </Form>

      {/* Social Media Sign-Up */}
      <Divider style={{ marginTop: '30px' }}>Or sign up with</Divider>
      <Row justify="center" gutter={[16, 10]} >
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

export default RegistrationAdditionalInfoPage;

