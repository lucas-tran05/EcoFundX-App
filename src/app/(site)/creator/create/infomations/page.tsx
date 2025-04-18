'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Typography, Form, Input, Upload, DatePicker, InputNumber, Button, Row, Col, Card } from 'antd';
import { InboxOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Dragger } = Upload;

const ProjectInformationForm: React.FC = () => {
    const [form] = Form.useForm();

    const uploadProps: UploadProps = {
        name: 'file',
        multiple: false,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                console.log(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                console.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
            <Card>
                <Title level={4} style={{ marginBottom: '24px' }}>Project Information</Title>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    style={{ padding: '8px'}}
                >
                    <Form.Item
                        name="projectTitle"
                        label="Project Title"
                        rules={[{ required: true, message: 'Please enter your project title' }]}
                    >
                        <Input placeholder="Enter your project title" />
                    </Form.Item>
                    <Form.Item
                        name="coverImage"
                        label="Cover Image"
                        rules={[{ required: true, message: 'Please upload a cover image' }]}
                    >
                        <Dragger {...uploadProps} style={{ borderRadius: '4px' }}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined style={{ color: '#bbb', fontSize: '32px' }} />
                            </p>
                            <p className="ant-upload-text" style={{ color: '#888' }}>
                                Drag and drop your image here or
                            </p>
                            <Button type="default" style={{ marginTop: '8px' }}>
                                Browse Files
                            </Button>
                        </Dragger>
                    </Form.Item>
                    <Form.Item
                        name="shortDescription"
                        label="Short Description"
                        rules={[{ required: true, message: 'Please provide a brief summary' }]}
                    >
                        <TextArea
                            placeholder="Provide a brief summary of your project"
                            autoSize={{ minRows: 3, maxRows: 6 }}
                        />
                    </Form.Item>
                    <Row gutter={24}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                name="fundingGoal"
                                label="Funding Goal"
                                rules={[{ required: true, message: 'Please enter funding goal' }]}
                            >
                                <InputNumber
                                    addonBefore="₫"
                                    placeholder="Enter amount"
                                    style={{ width: '100%' }}
                                    min={10000}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                name="campaignDuration"
                                label="Campaign Duration"
                                rules={[{ required: true, message: 'Please select end date' }]}
                            >
                                <DatePicker
                                    format="MM/DD/YYYY"
                                    placeholder="mm/dd/yyyy"
                                    style={{ width: '100%' }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify="end" style={{ marginTop: '24px' }}>
                        <Link href="/creator/create/rewards">
                            <Button type="primary" htmlType="submit" >
                                Next <ArrowRightOutlined />
                            </Button>
                        </Link>
                    </Row>
                </Form>
            </Card>
    );
};

export default ProjectInformationForm;
