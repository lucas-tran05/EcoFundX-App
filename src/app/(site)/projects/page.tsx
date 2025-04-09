'use client';
import React from 'react';
import ProjectsCard from "@/components/card/ProjectsCard";
import { Flex, Input, Layout, Row, Col, Select, Button, Typography } from "antd";
import { FC } from "react";

const Register: FC = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            tag: "Renewable energy",
            description: "Description of project 1",
            image: "/images/post.png",
            endDate: new Date("2026-12-31"),
            progress: 50,
            amount: 1000000,
            gif: [
                {
                    id_gif: 1,
                    img: "/images/post.png",
                    title: "Project 1 - Gif 1",
                    description: "Gif description 1",
                    price: 500000
                },
                {
                    id_gif: 2,
                    img: "/images/post.png",
                    title: "Project 1 - Gif 2",
                    description: "Gif description 2",
                    price: 500000
                }
            ],
            onClick: () => console.log("Project 1 clicked"),
        },
        {
            id: 2,
            title: "Project 2",
            tag: "Renewable energy",
            description: "Description of project 2",
            image: "/images/post.png",
            endDate: new Date("2026-01-31"),
            progress: 75,
            amount: 2000000,
            gif: [
                {
                    id_gif: 3,
                    img: "/images/post.png",
                    title: "Project 2 - Gif 1",
                    description: "Gif description 1",
                    price: 1000000
                },
                {
                    id_gif: 4,
                    img: "/images/post.png",
                    title: "Project 2 - Gif 2",
                    description: "Gif description 2",
                    price: 1000000
                }
            ],
            onClick: () => console.log("Project 2 clicked"),
        },
        {
            id: 3,
            title: "Project 3",
            tag: "Renewable energy",
            description: "Description of project 3",
            image: "/images/home.svg",
            endDate: new Date("2026-02-28"),
            progress: 25,
            amount: 500000,
            gif: [
                {
                    id_gif: 5,
                    img: "/images/home.svg",
                    title: "Project 3 - Gif 1",
                    description: "Gif description 1",
                    price: 250000
                },
                {
                    id_gif: 6,
                    img: "/images/home.svg",
                    title: "Project 3 - Gif 2",
                    description: "Gif description 2",
                    price: 250000
                }
            ],
            onClick: () => console.log("Project 3 clicked"),
        },
        {
            id: 4,
            title: "Project 4",
            tag: "Renewable energy",
            description: "Description of project 4",
            image: "/images/post.png",
            endDate: new Date("2026-03-31"),
            progress: 100,
            amount: 1500000,
            gif: [
                {
                    id_gif: 7,
                    img: "/images/post.png",
                    title: "Project 4 - Gif 1",
                    description: "Gif description 1",
                    price: 750000
                },
                {
                    id_gif: 8,
                    img: "/images/post.png",
                    title: "Project 4 - Gif 2",
                    description: "Gif description 2",
                    price: 750000
                }
            ],
            onClick: () => console.log("Project 4 clicked"),
        },
        {
            id: 5,
            title: "Project 5",
            tag: "Renewable energy",
            description: "Description of project 5",
            image: "/images/home.svg",
            endDate: new Date("2026-04-30"),
            progress: 10,
            amount: 3000000,
            gif: [
                {
                    id_gif: 9,
                    img: "/images/home.svg",
                    title: "Project 5 - Gif 1",
                    description: "Gif description 1",
                    price: 1500000
                },
                {
                    id_gif: 10,
                    img: "/images/home.svg",
                    title: "Project 5 - Gif 2",
                    description: "Gif description 2",
                    price: 1500000
                }
            ],
            onClick: () => console.log("Project 5 clicked"),
        },
        {
            id: 6,
            title: "Project 6",
            tag: "Renewable energy",
            description: "Description of project 6",
            image: "/images/post.png",
            endDate: new Date("2026-05-31"),
            progress: 60,
            amount: 1200000,
            gif: [
                {
                    id_gif: 11,
                    img: "/images/post.png",
                    title: "Project 6 - Gif 1",
                    description: "Gif description 1",
                    price: 600000
                },
                {
                    id_gif: 12,
                    img: "/images/post.png",
                    title: "Project 6 - Gif 2",
                    description: "Gif description 2",
                    price: 600000
                }
            ],
            onClick: () => console.log("Project 6 clicked"),
        }
    ];

    return (
        <Layout.Content style={{ padding: '50px' }}>
            <Row justify="space-between" align="middle" gutter={[16, 16]}>
                <Col xs={24} sm={24} md={10} lg={10}>
                    <Input.Search
                        placeholder="Search projects"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ width: '100%' }}
                    />
                </Col>
                <Col xs={24} sm={24} md={5} lg={5}>
                    <Flex>
                        <Select
                            defaultValue="renewable"
                            size="large"
                            style={{ width: '100%' }}
                            // onChange={handleChange}
                            options={[
                                { value: 'renewable', label: 'Renewable energy' },
                                { value: 'education', label: 'Education' }
                            ]}
                        />
                        <Button type="primary" size="large" style={{ marginLeft: '10px' }}>Filter</Button>
                    </Flex>
                </Col>
            </Row>

            <Row gutter={[32, 32]} justify="center" style={{ width: "100%", marginTop: '30px' }}>
                {projects.map((project) => (
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <ProjectsCard
                            key={project.id}
                            _id={project.id}
                            title={project.title}
                            tag={project.tag}
                            description={project.description}
                            image={project.image}
                            endDate={project.endDate}
                            progress={project.progress}
                            amount={project.amount}
                            onClick={project.onClick}
                        />
                    </Col>
                ))}
            </Row>
            <Row justify="center" style={{ marginTop: '30px' }}>
                <Button type='dashed' size="large">Load More</Button>
            </Row>
        </Layout.Content>
    );
};

export default Register;
