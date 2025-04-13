'use client';
import React from 'react';
import Link from 'next/link';
import { Layout, Row, Col, Button, Typography, Progress, Card, Divider, Space, Avatar, Collapse, Input, List } from "antd";
import { LinkedinOutlined, TwitterOutlined, GlobalOutlined, SafetyOutlined, WarningOutlined, DownOutlined, SendOutlined } from '@ant-design/icons';
import type { ProgressProps } from 'antd';
import GifCard from '@/components/card/GifCard';
import CommentCard, { CommentType } from '@/components/card/CommentCard';
import { FC } from "react";
import { useParams } from 'next/navigation';

const projects = [
    {
        id: '1',
        title: "Project 1",
        tag: "Renewable energy",
        description: "Description of project 1",
        image: "/images/post.png",
        endDate: new Date("2026-12-31"),
        progress: 50,
        amount: 1000000,
        gif: [
            {
                id_gif: '1',
                img: "/images/post.png",
                title: "Project 1 - Gif 1",
                description: "Gif description 1",
                price: 500000
            },
            {
                id_gif: '2',
                img: "/images/post.png",
                title: "Project 1 - Gif 2",
                description: "Gif description 2",
                price: 500000
            }
        ],
        onClick: () => console.log("Project 1 clicked"),
    },
    {
        id: '2',
        title: "Project 2",
        tag: "Renewable energy",
        description: "Description of project 2",
        image: "/images/post.png",
        endDate: new Date("2026-01-31"),
        progress: 75,
        amount: 2000000,
        gif: [
            {
                id_gif: '3',
                img: "/images/post.png",
                title: "Project 2 - Gif 1",
                description: "Gif description 1",
                price: 1000000
            },
            {
                id_gif: '4',
                img: "/images/post.png",
                title: "Project 2 - Gif 2",
                description: "Gif description 2",
                price: 1000000
            }
        ],
        onClick: () => console.log("Project 2 clicked"),
    },
    {
        id: '3',
        title: "Project 3",
        tag: "Renewable energy",
        description: "Description of project 3",
        image: "/images/home.svg",
        endDate: new Date("2026-02-28"),
        progress: 25,
        amount: 500000,
        gif: [
            {
                id_gif: '5',
                img: "/images/home.svg",
                title: "Project 3 - Gif 1",
                description: "Gif description 1",
                price: 250000
            },
            {
                id_gif: '6',
                img: "/images/home.svg",
                title: "Project 3 - Gif 2",
                description: "Gif description 2",
                price: 250000
            }
        ],
        onClick: () => console.log("Project 3 clicked"),
    },
    {
        id: '4',
        title: "Project 4",
        tag: "Renewable energy",
        description: "Description of project 4",
        image: "/images/post.png",
        endDate: new Date("2026-03-31"),
        progress: 100,
        amount: 1500000,
        gif: [
            {
                id_gif: '7',
                img: "/images/post.png",
                title: "Project 4 - Gif 1",
                description: "Gif description 1",
                price: 750000
            },
            {
                id_gif: '8',
                img: "/images/post.png",
                title: "Project 4 - Gif 2",
                description: "Gif description 2",
                price: 750000
            }
        ],
        onClick: () => console.log("Project 4 clicked"),
    },
    {
        id: '5',
        title: "Project 5",
        tag: "Renewable energy",
        description: "Description of project 5",
        image: "/images/home.svg",
        endDate: new Date("2026-04-30"),
        progress: 10,
        amount: 3000000,
        gif: [
            {
                id_gif: '9',
                img: "/images/home.svg",
                title: "Project 5 - Gif 1",
                description: "Gif description 1",
                price: 1500000
            },
            {
                id_gif: '10',
                img: "/images/home.svg",
                title: "Project 5 - Gif 2",
                description: "Gif description 2",
                price: 1500000
            }
        ],
        onClick: () => console.log("Project 5 clicked"),
    },
    {
        id: '6',
        title: "Project 6",
        tag: "Renewable energy",
        description: "Description of project 6",
        image: "/images/post.png",
        endDate: new Date("2026-05-31"),
        progress: 60,
        amount: 1200000,
        gif: [
            {
                id_gif: '11',
                img: "/images/post.png",
                title: "Project 6 - Gif 1",
                description: "Gif description 1",
                price: 600000
            },
            {
                id_gif: '12',
                img: "/images/post.png",
                title: "Project 6 - Gif 2",
                description: "Gif description 2",
                price: 600000
            }
        ],
        onClick: () => console.log("Project 6 clicked"),
    }
];

const comments: CommentType[] = [
    {
        id: '1',
        author: 'Sarah Johnson',
        avatar: '/avatars/sarah.jpg',
        content: 'This is exactly the kind of sustainable solution we need. Looking forward to seeing this implemented!',
        datetime: '2 days ago'
    },
    {
        id: '2',
        author: 'David Williams',
        avatar: '/avatars/david.jpg',
        content: 'Have you considered implementing this in tropical regions? The solar efficiency might be even better there.',
        datetime: '1 day ago'
    }
];

const ProjectView: FC = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#108ee9',
        '100%': '#87d068',
    };
    return (
        <Row gutter={[24, 24]} align={"middle"} justify={"center"} style={{ padding: '8px', margin: 0 }}>
            <Col xs={24} sm={24} md={24} lg={20}>
                <Card style={{ width: '100%' }}>
                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={24} md={16} lg={14}>
                            <Layout.Content style={{padding: '24px' }}>
                                <img src={project?.image} alt={project?.title} style={{ width: '100%', marginBottom: '24px' }} />
                                <Typography.Title level={4} ellipsis={{ rows: 2, expandable: true }}>{project?.title}</Typography.Title>
                                <Typography.Paragraph ellipsis={{ rows: 5, expandable: true }}>
                                    {project?.description}
                                </Typography.Paragraph>

                            </Layout.Content>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={10}>
                            <Layout.Content style={{ padding: '24px' }}>
                                <Row align={"middle"}>
                                    <Col span={12}>
                                        <Typography.Title level={4} style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                                            ₫{((project?.amount || 0) * (project?.progress || 0) / 100).toLocaleString('vi-VN')}
                                        </Typography.Title>
                                    </Col>
                                    <Col span={12} style={{ textAlign: 'right' }}>
                                        <Typography.Title level={5} >of  ₫{(project?.amount || 0 / 100).toLocaleString('vi-VN')}</Typography.Title>
                                    </Col>
                                </Row>
                                <Progress percent={project?.progress} status="active" strokeColor={twoColors} />
                                <Row gutter={[16, 16]} style={{ marginTop: '8px' }}>
                                    <Col span={12}>
                                        <Typography.Text strong>1,245</Typography.Text>
                                        <br />
                                        <Typography.Text type="secondary">Người ủng hộ</Typography.Text>
                                    </Col>
                                    <Col span={12}>
                                        <Typography.Text strong>{project?.endDate ? Math.ceil((project?.endDate.getTime() - Date.now()) / (1000 * 3600 * 24)) : "No end"}</Typography.Text>
                                        <br />
                                        <Typography.Text type="secondary">Ngày còn lại</Typography.Text>
                                    </Col>
                                </Row>
                                <Button disabled={project?.progress === 100} type="primary" size="large" block style={{ marginTop: '16px' }}>
                                    <Link href={`/projects/${project?.id}/contribute/amount`}>Contribute now</Link>
                                </Button>
                                <Divider />
                                <Row >
                                    <Typography.Title level={5}> Can receive</Typography.Title>
                                    <Col span={24}>
                                        {Array.isArray(project?.gif) && project.gif.map((gif) => (
                                            <GifCard
                                                key={gif.id_gif}
                                                id_gif={gif.id_gif}
                                                img={gif.img}
                                                title={gif.title}
                                                description={gif.description}
                                                price={gif.price}
                                            />
                                        ))}
                                    </Col>
                                </Row>
                            </Layout.Content>
                        </Col>
                    </Row>
                    <Divider />
                    {/* Project Creator */}
                    <Layout.Content style={{ padding: '24px' }}>
                        <Typography.Title level={4}>Project Creator</Typography.Title>
                        <Row gutter={[16, 16]} align="middle" style={{ marginBottom: '16px' }}>
                            <Col xs={24} sm={24} md={6} lg={4} style={{ textAlign: 'center' }}>
                                <Avatar size={100} src="/avatar.jpg" />
                            </Col>
                            <Col xs={24} sm={24} md={18} lg={20}>
                                <Typography.Title level={5}>Dr. Michael Chen</Typography.Title>
                                <Typography.Text type="secondary">Environmental Engineer & Sustainability Expert</Typography.Text>
                                <Typography.Paragraph style={{ marginTop: '8px' }}>
                                    With 15 years of experience in sustainable technology development, Dr. Chen has successfully implemented water purification systems across three continents.
                                </Typography.Paragraph>
                                <Space>
                                    <LinkedinOutlined />
                                    <TwitterOutlined />
                                    <GlobalOutlined />
                                </Space>
                            </Col>
                        </Row>
                    </Layout.Content>
                    {/* Risks & Challenges */}
                    <Layout.Content style={{ padding: '24px' }}>
                        <Typography.Title level={4}>Risks & Challenges</Typography.Title>
                        <Row gutter={[24, 24]}>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Card>
                                    <WarningOutlined style={{ fontSize: '24px', color: '#faad14' }} />
                                    <div>
                                        <Typography.Title level={5}>Supply Chain Risks</Typography.Title>
                                        <Typography.Text>
                                            Potential delays in component delivery due to global supply chain disruptions. We have multiple suppliers lined up to mitigate this risk.
                                        </Typography.Text>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Card>
                                    <SafetyOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                                    <div>
                                        <Typography.Title level={5}>Quality Assurance</Typography.Title>
                                        <Typography.Text>
                                            Each unit undergoes rigorous testing before deployment. We maintain ISO 9001 certification for quality management systems.
                                        </Typography.Text>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Layout.Content>
                    {/* Funding Allocation */}
                    <Layout.Content style={{ padding: '24px' }}>
                        <Typography.Title level={4}>Funding Allocation</Typography.Title>
                        <Row gutter={[24, 24]}>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <div style={{ marginBottom: '16px' }}>
                                    <Typography.Text>Research & Development</Typography.Text>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Progress
                                            percent={40}
                                            showInfo={false}
                                            strokeColor="#1bab6b"
                                            style={{ flex: 1, marginRight: '10px' }}
                                        />
                                        <Typography.Text strong>40%</Typography.Text>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '16px' }}>
                                    <Typography.Text>Manufacturing</Typography.Text>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Progress
                                            percent={30}
                                            showInfo={false}
                                            strokeColor="#4285f4"
                                            style={{ flex: 1, marginRight: '10px' }}
                                        />
                                        <Typography.Text strong>30%</Typography.Text>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '16px' }}>
                                    <Typography.Text>Distribution</Typography.Text>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Progress
                                            percent={20}
                                            showInfo={false}
                                            strokeColor="#a142f4"
                                            style={{ flex: 1, marginRight: '10px' }}
                                        />
                                        <Typography.Text strong>20%</Typography.Text>
                                    </div>
                                </div>
                                <div>
                                    <Typography.Text>Marketing</Typography.Text>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Progress
                                            percent={10}
                                            showInfo={false}
                                            strokeColor="#f4b400"
                                            style={{ flex: 1, marginRight: '10px' }}
                                        />
                                        <Typography.Text strong>10%</Typography.Text>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Card style={{ marginBottom: '24px' }}>
                                    <Typography.Title level={5}>Transparent Reporting</Typography.Title>
                                    <Typography.Text>
                                        Monthly updates on fund utilization will be shared with all backers through our dashboard.
                                    </Typography.Text>
                                </Card>
                                <Card>
                                    <Typography.Title level={5}>Milestone-based Release</Typography.Title>
                                    <Typography.Text>
                                        Funds will be released in phases based on achievement of project milestones.
                                    </Typography.Text>
                                </Card>
                            </Col>
                        </Row>
                    </Layout.Content>
                    {/* FAQ Section */}
                    <Layout.Content style={{ padding: '24px' }}>
                        <Typography.Title level={4}>Frequently Asked Questions</Typography.Title>
                        <Collapse
                            bordered={false}
                            expandIconPosition="end"
                            expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
                        >
                            <Collapse.Panel header="What is the expected delivery timeline?" key="1">
                                <p>Content for delivery timeline question</p>
                            </Collapse.Panel>
                            <Collapse.Panel header="How will the funds be managed?" key="2">
                                <p>Content for funds management question</p>
                            </Collapse.Panel>
                            <Collapse.Panel header="What happens if the project doesn't reach its goal?" key="3">
                                <p>Content for project goal question</p>
                            </Collapse.Panel>
                        </Collapse>
                    </Layout.Content>
                    <Layout.Content style={{ padding: '24px' }}>

                        <Typography.Title level={4} style={{ marginBottom: '24px' }}>Community Discussion</Typography.Title>

                        <div style={{ marginBottom: '20px' }}>
                            <Input.TextArea
                                placeholder="Share your thoughts..."
                                autoSize={{ minRows: 3, maxRows: 6 }}
                                style={{ marginBottom: '16px', borderRadius: '8px', padding: '12px' }}
                            />
                            <Button
                                type="primary"
                                icon={<SendOutlined />}
                            >
                                Post Comment
                            </Button>
                        </div>

                        <List
                            itemLayout="horizontal"
                            dataSource={comments}
                            renderItem={(item) => (
                                <CommentCard key={item.id} comment={item} />
                            )}
                        />

                    </Layout.Content>
                </Card>
            </Col>
        </Row>

    );
};

export default ProjectView;
