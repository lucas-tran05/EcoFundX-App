'use client';
import React from 'react';
import { Layout, Row, Col, Button, Typography, Progress, Card, Divider } from "antd";
import type { ProgressProps } from 'antd';
import GifCard from '@/components/card/GifCard';
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
        id:'5',
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
                            <Layout.Content style={{ background: '#fff', padding: '24px', minHeight: 280 }}>
                                <img src={project?.image} alt={project?.title} style={{ width: '100%', marginBottom: '24px' }} />
                                <Typography.Title level={4} ellipsis={{ rows: 2, expandable: true }}>{project?.title}</Typography.Title>
                                <Typography.Paragraph ellipsis={{ rows: 5, expandable: true }}>
                                    {project?.description}
                                </Typography.Paragraph>

                            </Layout.Content>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={10}>
                            <Layout.Content style={{ background: '#fff', padding: '24px', minHeight: 280 }}>
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
                                    Contribute now
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
                </Card>
            </Col>
        </Row>

    );
};

export default ProjectView;
