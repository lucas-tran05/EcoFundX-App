'use client';
import React from "react";
import { useEffect, useState } from "react";
import Header from "@/components/AppHeader";
import Footer from "@/components/AppFooter";
import Image from "next/image";
import Link from "next/link";
import ProjectsCard from "@/components/card/ProjectsCard";
import { Layout, Typography, Flex, Row, Col, Button, Card, Space } from "antd";
import { FaRocket, FaCheck, FaChartLine, FaRegQuestionCircle, FaSeedling, FaHandshake } from "react-icons/fa";
import { fetchRandomProjects } from "@/lib/api/project";


export interface Gif {
    id_gif: string;
    img: string;
    title: string;
    description: string;
    price: number;
}

export interface Project {
    id: string;
    title: string;
    tag: string;
    description: string;
    image: string;
    endDate: string; // date dạng string ISO (JSON)
    progress: number;
    amount: number;
    gif: Gif[];
}
export interface ProjectResponse {
    success: boolean;
    data?: Project[];
    error?: string;
}
export default function HomePage() {
    const benefits = [
        {
            title: "Transparent Fundraising",
            description: "Clear processes, detailed reporting, and real-time project progress tracking.",
            iconBg: "#DCFCE7",
            icon: <FaRegQuestionCircle style={{ color: "var(--primary-color)" }} />,
        },
        {
            title: "Green Startup Support",
            description: "Accompany startups in developing sustainable solutions for the environment.",
            iconBg: "#DBEAFE",
            icon: <FaSeedling style={{ color: "var(--tertiary-color)" }} />,
        },
        {
            title: "Investor Connections",
            description: "Access a large network of investors interested in sustainable development.",
            iconBg: "#DCFCE7",
            icon: <FaHandshake style={{ color: "var(--primary-color)" }} />,
        },
    ];
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchRandomProjects(3) // lấy 3 project ngẫu nhiên
            .then((res) => {
                if (res.success && res.data) {
                    setProjects(res.data);
                } else {
                    setError(res.error || "Lỗi không xác định");
                }
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Header />
            <Layout.Content
            >
                {/* Hero Section */}
                <Row
                    gutter={[16, 16]}
                    align="middle"
                    justify="center"
                    style={{
                        minHeight: "95vh",
                        background: "var(--background-gradient)",
                        margin: 0,
                        padding: "64px 0",
                    }}
                >
                    <Col xs={24} sm={24} md={10} lg={10} style={{ padding: "0 64px" }}>
                        <Flex vertical gap="small">
                            <Typography.Title
                                level={2}
                                style={{
                                    color: "var(--text-primary)",
                                    fontWeight: "bold",
                                    marginBottom: 0,
                                }}
                            >
                                Connecting resources
                            </Typography.Title>
                            <Typography.Title
                                level={2}
                                style={{
                                    color: "var(--primary-color)",
                                    fontWeight: "bold",
                                    marginTop: 0,
                                }}
                            >
                                Powering green forces
                            </Typography.Title>
                            <Typography.Paragraph
                                style={{ color: "var(--text-secondary)", marginTop: "16px" }}
                            >
                                The leading crowdfunding platform dedicated to environmental
                                protection projects. We bring visionary investors together with
                                innovative green ideas, empowering the future of sustainability.
                            </Typography.Paragraph>
                            <Flex gap={16} style={{ marginTop: "32px" }}>
                                <Button type="primary" size="large">
                                    <Link href="/creator/create/infomations">Get Started</Link>
                                </Button>
                                <Button type="default" size="large" onClick={() => {
                                    scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                                }}>
                                    Learn More
                                </Button>
                            </Flex>
                        </Flex>
                    </Col>

                    <Col xs={24} sm={24} md={10} lg={10} style={{ textAlign: "center", padding: "0 32px" }}>
                        <Image
                            src="/images/home.svg"
                            alt="Home Illustration"
                            width={500}
                            height={300}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Col> 
                </Row>

                {/* Benefits Section */}
                <Flex vertical gap="large" style={{ padding: "32px" }} >
                    <Typography.Title level={2} style={{ textAlign: "center", fontWeight: "bold" }}>
                        Benefits of the platform
                    </Typography.Title>

                    <Row gutter={[24, 24]} justify="center">
                        {benefits.map((item, index) => (
                            <Col xs={24} sm={24} md={8} lg={8} key={index}>
                                <Card
                                    style={{
                                        padding: "24px",
                                    }}
                                    hoverable={true}
                                >
                                    <Flex vertical gap="middle">
                                        <div
                                            style={{
                                                backgroundColor: item.iconBg,
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {item.icon}
                                        </div>
                                        <Typography.Title level={4} style={{ margin: 0, fontWeight: "bold" }}>
                                            {item.title}
                                        </Typography.Title>
                                        <Typography.Paragraph style={{ color: "var(--text-secondary)" }}>
                                            {item.description}
                                        </Typography.Paragraph>
                                    </Flex>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Flex>
                {/* More */}

                <Flex align="middle" justify="center" style={{ padding: "32px", background: "var(--quaternary-color)" }}>
                    <Row gutter={[16, 16]} style={{ width: "100%" }}>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Card style={{ padding: "24px", textAlign: "left" }}>
                                <FaRocket style={{ fontSize: "48px", color: "var(--primary-color)" }} />
                                <Typography.Title level={4} style={{ fontWeight: "bold", marginTop: "16px" }}>
                                    Call for Funding for the Project
                                </Typography.Title>
                                <Flex vertical gap="small" style={{ marginTop: "16px" }}>
                                    <Typography.Text style={{ color: "var(--text-secondary)", display: "block" }}>
                                        <FaCheck style={{ color: "var(--primary-color)" }} /> Easy Registration
                                    </Typography.Text>
                                    <Typography.Text style={{ color: "var(--text-secondary)", display: "block" }}>
                                        <FaCheck style={{ color: "var(--primary-color)" }} /> Approaching Potential Investors
                                    </Typography.Text>
                                    <Typography.Text style={{ color: "var(--text-secondary)", display: "block" }}>
                                        <FaCheck style={{ color: "var(--primary-color)" }} /> Project Development Support
                                    </Typography.Text>
                                </Flex>
                                <Button
                                    type="primary"
                                    size="large"
                                    style={{ width: "100%", marginTop: "24px" }}
                                >
                                    <Link href="/create/infomations">Start Funding Now</Link>
                                </Button>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Card style={{ padding: "24px", textAlign: "left" }}>
                                <FaChartLine style={{ fontSize: "48px", color: "var(--tertiary-color)" }} />
                                <Typography.Title level={4} style={{ fontWeight: "bold", marginTop: "16px" }}>
                                    For Investors
                                </Typography.Title>
                                <Flex vertical gap="small" style={{ marginTop: "16px" }}>
                                    <Typography.Text style={{ color: "var(--text-secondary)", display: "block" }}>
                                        <FaCheck style={{ color: "var(--tertiary-color)" }} /> Diverse project portfolio
                                    </Typography.Text>
                                    <Typography.Text style={{ color: "var(--text-secondary)", display: "block" }}>
                                        <FaCheck style={{ color: "var(--tertiary-color)" }} /> Investments with social impact
                                    </Typography.Text>
                                    <Typography.Text style={{ color: "var(--text-secondary)", display: "block" }}>
                                        <FaCheck style={{ color: "var(--tertiary-color)" }} /> Track investment performance
                                    </Typography.Text>
                                </Flex>
                                <Button
                                    type="primary"
                                    size="large"
                                    style={{ width: "100%", marginTop: "24px", backgroundColor: "var(--tertiary-color)" }}
                                >
                                    <Link href="/projects" >Explore opportunities</Link>
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Flex>

                {/* Projects Section */}
                <Flex vertical gap="large" align="center" style={{ padding: "32px" }} >
                    <Typography.Title level={2} style={{ textAlign: "center", fontWeight: "bold" }} ellipsis={{ rows: 1 }}>
                        Featured Projects
                    </Typography.Title>
                    <Row gutter={[16, 16]} justify="center" style={{ width: "100%" }}>
                        {projects.map((project) => (
                            <Col xs={24} sm={24} md={8} lg={8}>
                                <ProjectsCard
                                    key={project.id}
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
                </Flex>
                {/* Footer Section */}
                <Flex vertical justify="center" align="center" gap="large" style={{ padding: "64px", background: "var(--quaternary-color)" }}>
                    <Typography.Title
                        level={2}
                        className="text-2xl md:text-4xl font-bold text-center break-words"
                    >
                        Ready to contribute to a greener future? Be part of the solution. Invest in a sustainable future
                    </Typography.Title>
                    <Typography.Paragraph style={{ color: "var(--text-secondary)" }}>
                        Sign up now to start your journey towards a greener tomorrow.
                    </Typography.Paragraph>
                    <Space>
                        <Button type="primary" size="large">
                            <Link href="/create/infomations">Start Funding</Link>
                        </Button>
                        <Button type="default" size="large">
                            <Link href="/projects">Explore Projects</Link>
                        </Button>
                    </Space>
                </Flex>
            </Layout.Content>
            <Footer />
        </>
    );
}