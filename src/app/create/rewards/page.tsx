'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Typography, Card, Form, Input, InputNumber, Upload, Button, Flex } from 'antd';
import { PlusOutlined, DeleteOutlined, ArrowLeftOutlined, InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Dragger } = Upload;

interface RewardItem {
    id: string;
    title: string;
    description: string;
    price: number;
    image?: string;
    estimatedDelivery?: string;
}

const ProjectRewardsPage: React.FC = () => {
    const [form] = Form.useForm();
    const [rewards, setRewards] = useState<RewardItem[]>([
        {
            id: '1',
            title: '',
            description: '',
            price: 0,
        },
    ]);

    const uploadProps: UploadProps = {
        name: 'file',
        multiple: false,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                console.log(`${info.file.name} uploaded successfully.`);
            } else if (status === 'error') {
                console.error(`${info.file.name} upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const addReward = () => {
        const newReward: RewardItem = {
            id: Date.now().toString(),
            title: '',
            description: '',
            price: 0,
        };
        setRewards([...rewards, newReward]);
    };

    const removeReward = (id: string) => {
        if (rewards.length > 1) {
            setRewards(rewards.filter((reward) => reward.id !== id));
        }
    };

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <Card>
            <Title level={4} style={{ marginBottom: '24px' }}>Supporter Rewards</Title>
            <Text type="secondary" style={{ marginBottom: '16px', display: 'block' }}>
                Add attractive rewards to encourage people to support your project. Each reward should have special value and meaning.
            </Text>

            <Form form={form} layout="vertical" onFinish={onFinish}>
                {rewards.map((reward, index) => (
                    <Card
                        key={reward.id}
                        style={{ marginBottom: '24px', borderColor: '#e8e8e8' }}
                        title={
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text strong>Reward #{index + 1}</Text>
                                {rewards.length > 1 && (
                                    <Button
                                        type="text"
                                        danger
                                        icon={<DeleteOutlined />}
                                        onClick={() => removeReward(reward.id)}
                                    />
                                )}
                            </div>
                        }
                    >
                        <Form.Item
                            name={['rewards', index, 'title']}
                            label="Reward Title"
                            rules={[{ required: true, message: 'Please enter the reward title' }]}
                        >
                            <Input placeholder="Example: Basic Support Package, Silver Sponsor Package..." />
                        </Form.Item>

                        <Form.Item
                            name={['rewards', index, 'description']}
                            label="Reward Description"
                            rules={[{ required: true, message: 'Please enter the reward description' }]}
                        >
                            <TextArea rows={3} placeholder="Describe what supporters will receive..." />
                        </Form.Item>

                        <Form.Item
                            name={['rewards', index, 'price']}
                            label="Support Amount (VND)"
                            rules={[{ required: true, message: 'Please enter the support amount' }]}
                        >
                            <InputNumber
                                min={10000}
                                style={{ width: '100%' }}
                                placeholder="Enter amount (e.g., 10000)"
                            />
                        </Form.Item>

                        <Form.Item
                            name={['rewards', index, 'coverImage']}
                            label="Cover Image"
                            rules={[{ required: true, message: 'Please upload a cover image' }]}
                        >
                            <Dragger {...uploadProps} style={{ borderRadius: '4px' }}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single image upload only.</p>
                            </Dragger>
                        </Form.Item>

                        <Form.Item
                            name={['rewards', index, 'estimatedDelivery']}
                            label="Estimated Delivery (optional)"
                        >
                            <Input placeholder="Example: December 2025" />
                        </Form.Item>
                    </Card>
                ))}

                <Form.Item>
                    <Button
                        type="dashed"
                        onClick={addReward}
                        block
                        icon={<PlusOutlined />}
                        style={{ marginBottom: '24px' }}
                    >
                        Add Another Reward
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Flex justify="space-between">
                        <Link  href="/create/infomations"><Button icon={<ArrowLeftOutlined />}>Back</Button></Link>
                        <Link  href="/create/legality"><Button type="primary" htmlType="submit">Save and Continue</Button></Link>
                    </Flex>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default ProjectRewardsPage;
