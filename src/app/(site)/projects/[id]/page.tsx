'use client';
import React, { useState, useEffect, FC } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
    Layout, Row, Col, Button, Typography, Progress, Card, Divider, Space, Avatar, Collapse, Input, List
} from "antd";
import {
    LinkedinOutlined, TwitterOutlined, GlobalOutlined,
    SafetyOutlined, WarningOutlined, DownOutlined, SendOutlined
} from '@ant-design/icons';
import type { ProgressProps } from 'antd';
import GifCard from '@/components/card/GifCard';
import CommentCard, { CommentType } from '@/components/card/CommentCard';
import { fetchProjectById } from '@/lib/api/project';

interface GifItem {
    id_gif: string;
    img: string;
    title: string;
    description: string;
    price: number;
}

interface Project {
    id: string;
    title: string;
    tag: string;
    description: string;
    image: string;
    endDate: string;
    progress: number;
    amount: number;
    gif: GifItem[];
}

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
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProject = async () => {
            const result = await fetchProjectById(id);
            if (result.success) {
                setProject(result.data!);
            } else {
                setError(result.error || 'Không tìm thấy dự án');
            }
            setLoading(false);
        };
        if (id) loadProject();
    }, [id]);

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>Lỗi: {error}</div>;
    if (!project) return <div>Không có dữ liệu</div>;

    const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#108ee9',
        '100%': '#87d068',
    };

    const daysRemaining = project.endDate
        ? Math.ceil((new Date(project.endDate).getTime() - Date.now()) / (1000 * 3600 * 24))
        : 'No end';

    return (
        <Row gutter={[24, 24]} align={"middle"} justify={"center"} style={{ padding: '8px', margin: 0 }}>
            <Col xs={24} sm={24} md={24} lg={20}>
                <Card style={{ width: '100%' }}>
                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={24} md={16} lg={14}>
                            <Layout.Content style={{ padding: '24px' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        maxHeight: '400px',      
                                        objectFit: 'cover', 
                                        marginBottom: '24px',
                                        borderRadius: '8px', 
                                    }}
                                />

                                <Typography.Title level={4} ellipsis={{ rows: 2, expandable: true }}>{project.title}</Typography.Title>
                                <Typography.Paragraph ellipsis={{ rows: 5, expandable: true }}>
                                    {project.description}
                                </Typography.Paragraph>
                            </Layout.Content>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={10}>
                            <Layout.Content style={{ padding: '24px' }}>
                                <Row align={"middle"}>
                                    <Col span={12}>
                                        <Typography.Title level={4} style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                                            ₫{((project.amount || 0) * (project.progress || 0) / 100).toLocaleString('vi-VN')}
                                        </Typography.Title>
                                    </Col>
                                    <Col span={12} style={{ textAlign: 'right' }}>
                                        <Typography.Title level={5}>
                                            of ₫{(project.amount || 0).toLocaleString('vi-VN')}
                                        </Typography.Title>
                                    </Col>
                                </Row>
                                <Progress percent={project.progress} status="active" strokeColor={twoColors} />
                                <Row gutter={[16, 16]} style={{ marginTop: '8px' }}>
                                    <Col span={12}>
                                        <Typography.Text strong>1,245</Typography.Text><br />
                                        <Typography.Text type="secondary">Người ủng hộ</Typography.Text>
                                    </Col>
                                    <Col span={12}>
                                        <Typography.Text strong>{daysRemaining}</Typography.Text><br />
                                        <Typography.Text type="secondary">Ngày còn lại</Typography.Text>
                                    </Col>
                                </Row>
                                <Button disabled={project.progress === 100} type="primary" size="large" block style={{ marginTop: '16px' }}>
                                    <Link href={`/projects/${project.id}/contribute/amount`}>Contribute now</Link>
                                </Button>
                                <Divider />
                                <Row>
                                    <Typography.Title level={5}>Can receive</Typography.Title>
                                    <Col span={24}>
                                        {project.gif?.map(gif => (
                                            <GifCard key={gif.id_gif} {...gif} />
                                        ))}
                                    </Col>
                                </Row>
                            </Layout.Content>
                        </Col>
                    </Row>

                    <Divider />

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

                    <Layout.Content style={{ padding: '24px' }}>
                        <Typography.Title level={4}>Risks & Challenges</Typography.Title>
                        <Row gutter={[24, 24]}>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Card>
                                    <WarningOutlined style={{ fontSize: '24px', color: '#faad14' }} />
                                    <Typography.Title level={5}>Supply Chain Risks</Typography.Title>
                                    <Typography.Text>
                                        Potential delays in component delivery due to global supply chain disruptions. We have multiple suppliers lined up to mitigate this risk.
                                    </Typography.Text>
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Card>
                                    <SafetyOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                                    <Typography.Title level={5}>Quality Assurance</Typography.Title>
                                    <Typography.Text>
                                        Each unit undergoes rigorous testing before deployment. We maintain ISO 9001 certification for quality management systems.
                                    </Typography.Text>
                                </Card>
                            </Col>
                        </Row>
                    </Layout.Content>

                    <Layout.Content style={{ padding: '24px' }}>
                        <Typography.Title level={4}>Funding Allocation</Typography.Title>
                        <Row gutter={[24, 24]}>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                {[
                                    { label: 'Research & Development', percent: 40, color: '#1bab6b' },
                                    { label: 'Manufacturing', percent: 30, color: '#4285f4' },
                                    { label: 'Distribution', percent: 20, color: '#a142f4' },
                                    { label: 'Marketing', percent: 10, color: '#f4b400' },
                                ].map(({ label, percent, color }) => (
                                    <div key={label} style={{ marginBottom: '16px' }}>
                                        <Typography.Text>{label}</Typography.Text>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Progress percent={percent} showInfo={false} strokeColor={color} style={{ flex: 1, marginRight: '10px' }} />
                                            <Typography.Text strong>{percent}%</Typography.Text>
                                        </div>
                                    </div>
                                ))}
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
                            <Button type="primary" icon={<SendOutlined />}>
                                Post Comment
                            </Button>
                        </div>
                        <List
                            itemLayout="horizontal"
                            dataSource={comments}
                            renderItem={(item) => <CommentCard key={item.id} comment={item} />}
                        />
                    </Layout.Content>
                </Card>
            </Col>
        </Row>
    );
};

export default ProjectView;
