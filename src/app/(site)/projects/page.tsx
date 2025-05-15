'use client';
import React, { useEffect, useState } from 'react';
import ProjectsCard from "@/components/card/ProjectsCard";
import { Flex, Input, Layout, Row, Col, Select, Button, Spin, Alert } from "antd";
import { fetchProjects, Project } from "@/lib/api/project";

const ProjectPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        const getProjects = async () => {
            setLoading(true);   
            const res = await fetchProjects(limit);
            if (res.success && res.data) {
                setProjects(res.data);
                setError(null);
            } else {
                setError(res.error || 'Lỗi không xác định');
            }
            setLoading(false);
        };
        getProjects();
    }, [limit]);

    const handleLoadMore = () => {
        setLimit(prev => prev + 3);
    };

    return (
        <Layout.Content style={{ padding: '32px' }}>
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
                            options={[
                                { value: 'renewable', label: 'Renewable energy' },
                                { value: 'education', label: 'Education' }
                            ]}
                        />
                        <Button type="primary" size="large" style={{ marginLeft: '10px' }}>Filter</Button>
                    </Flex>
                </Col>
            </Row>

            {loading ? (
                <Spin tip="Đang tải dự án..." />
            ) : error ? (
                <Alert type="error" message={error} />
            ) : (
                <>
                    <Row gutter={[16, 16]} justify="center" align="middle" style={{ width: "100%", marginTop: '30px' }}>
                        {projects.map((project) => (
                            <Col xs={24} sm={24} md={8} lg={8} key={project.id}>
                                <ProjectsCard
                                    _id={project.id}
                                    title={project.title}
                                    tag={project.tag}
                                    description={project.description}
                                    image={project.image}
                                    endDate={new Date(project.endDate)}
                                    progress={project.progress}
                                    amount={project.amount}
                                />
                            </Col>
                        ))}
                    </Row>
                    {/* Nếu chưa lấy hết dự án thì hiển thị nút Load More */}
                    {projects.length >= limit && (
                        <Row justify="center" style={{ marginTop: '30px' }}>
                            <Button type='dashed' size="large" onClick={handleLoadMore}>
                                Load More
                            </Button>
                        </Row>
                    )}
                </>
            )}
        </Layout.Content>
    );
};

export default ProjectPage;
