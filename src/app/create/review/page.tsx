'use client';

import React from 'react';
import Link from 'next/link';
import { Typography, Card, Row, Col, Button, Divider, Tag, Image, Descriptions, List } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

// Assume this data is fetched from application state or context
const projectData = {
    basicInfo: {
        title: 'Solar-Powered Water Purification System',
        description: 'A project to develop water purification systems using solar energy, providing clean water to remote areas while minimizing environmental impact.',
        coverImage: '/images/project-cover.jpg',
        fundingGoal: 85000,
        campaignDuration: '08/06/2025',
    },
    rewards: [
        {
            id: '1',
            title: 'Basic Support Package',
            minimumAmount: 25,
            description: 'Receive an electronic thank you letter and regular updates on project progress.',
            estimatedDelivery: 'Immediately after the project is fully funded',
        },
        {
            id: '2',
            title: 'Silver Sponsor Package',
            minimumAmount: 100,
            description: 'Receive a miniature model of the water purification system and your name will be listed on the project website.',
            estimatedDelivery: 'October 2025',
        },
        {
            id: '3',
            title: 'Gold Sponsor Package',
            minimumAmount: 500,
            description: 'Receive a mini water purification system for your family and an invitation to the project launch event.',
            estimatedDelivery: 'December 2025',
        },
    ],
    agreements: [
        'Terms of Service',
        'Privacy Policy',
        'Community Guidelines',
    ]
};

const ProjectReviewPage: React.FC = () => {
    const handleSubmit = () => {
        console.log('Project has been successfully submitted!');
        // Redirect to confirmation page or homepage
    };

    return (
            <Card>
                <Title level={4} style={{ marginBottom: '24px' }}>Review Your Project</Title>
                <Text type="secondary" style={{ marginBottom: '16px', display: 'block' }}>
                    Please carefully review your project information before submitting. After submission, you can still edit some information, but certain basic details cannot be changed.
                </Text>

                <Card
                    title="Basic Information"
                    style={{ marginBottom: '24px' }}
                    extra={<Button type="link" href="/project/edit">Edit</Button>}
                >
                    <Row gutter={[24, 24]}>
                        <Col xs={24} md={12}>
                            <Image
                                src={projectData.basicInfo.coverImage}
                                alt={projectData.basicInfo.title}
                                style={{ width: '100%', borderRadius: '4px' }}
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <Descriptions column={1} size="small">
                                <Descriptions.Item label="Project Title">{projectData.basicInfo.title}</Descriptions.Item>
                                <Descriptions.Item label="Short Description">{projectData.basicInfo.description}</Descriptions.Item>
                                <Descriptions.Item label="Funding Goal">${projectData.basicInfo.fundingGoal.toLocaleString()}</Descriptions.Item>
                                <Descriptions.Item label="Campaign Deadline">{projectData.basicInfo.campaignDuration}</Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                </Card>

                <Card
                    title="Rewards for Backers"
                    style={{ marginBottom: '24px' }}
                    extra={<Button type="link" href="/project/rewards">Edit</Button>}
                >
                    {projectData.rewards.map((reward) => (
                        <Card
                            key={reward.id}
                            type="inner"
                            style={{ marginBottom: '16px' }}
                            title={
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{reward.title}</span>
                                    <Tag color="green">${reward.minimumAmount}+</Tag>
                                </div>
                            }
                        >
                            <Paragraph>{reward.description}</Paragraph>
                            <Text type="secondary">Estimated Delivery: {reward.estimatedDelivery}</Text>
                        </Card>
                    ))}
                </Card>

                <Card
                    title="Agreements Accepted"
                    style={{ marginBottom: '24px' }}
                    extra={<Button type="link" href="/project/agreement">Edit</Button>}
                >
                    <List>
                        {projectData.agreements.map((agreement, index) => (
                            <List.Item key={index}>
                                <Text><CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />{agreement}</Text>
                            </List.Item>
                        ))}
                    </List>
                </Card>

                <Divider />

                <Row justify="space-between">
                    <Link href="/create/legality">
                        <Button icon={<ArrowLeftOutlined />} >
                            Back
                        </Button>
                    </Link>

                    <Button
                        type="primary"
                        onClick={handleSubmit}
                        style={{ backgroundColor: '#10b981' }}
                    >
                        Complete and Submit Project
                    </Button>
                </Row>
            </Card>
    );
};

export default ProjectReviewPage;
