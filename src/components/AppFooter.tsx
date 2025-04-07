"use client";

import React from "react";
import { Typography, Space, Row, Col, Divider, Layout, Flex } from "antd";
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Text } = Typography;

const Footer: React.FC = () => {
    return (
        <Layout.Footer style={{
            backgroundColor: "var(--footer-background)",
            color: "var(--footer-text)",
            padding: "48px 0 24px 0"
        }}>
            <Flex vertical align="center">
                <Flex gap={48}>
                    {/* Logo và mô tả */}
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Title level={4} style={{ color: "var(--footer-text)", margin: "0 0 16px 0" }}>
                            <span style={{ color: "var(--primary-color)" }}>EcoFund</span>X
                        </Title>
                        <Text style={{ color: "var(--text-tertiary)", margin: "0 0 16px 0" }}>
                            EcoFundX is a crowdfunding platform dedicated to supporting environmental protection projects
                        </Text>
                    </Col>

                    {/* Liên kết */}
                    <Col xs={24} sm={8} md={5} lg={5}>
                        <Title level={5} style={{ color: "white", margin: "0 0 16px 0" }}>
                            Links
                        </Title>
                        <Space direction="vertical" size={12}>
                            <Link href="/" style={{ color: "var(--text-tertiary)" }}>
                                Home
                            </Link>
                            <Link href="/projects" style={{ color: "var(--text-tertiary)" }}>
                                Projects
                            </Link>
                            <Link href="/forum" style={{ color: "var(--text-tertiary)" }}>
                                Forum
                            </Link>
                            <Link href="/contact" style={{ color: "var(--text-tertiary)" }}>
                                Contact
                            </Link>
                        </Space>
                    </Col>
                    {/* Pháp lý */}
                    <Col xs={24} sm={8} md={5} lg={5}>
                        <Title level={5} style={{ color: "white", margin: "0 0 16px 0" }}>
                            Legal
                        </Title>
                        <Space direction="vertical" size={12}>
                            <Link href="#" style={{ color: "var(--text-tertiary)" }}>
                                Terms of Use
                            </Link>
                            <Link href="#" style={{ color: "var(--text-tertiary)" }}>
                                Privacy Policy
                            </Link>
                            <Link href="#" style={{ color: "var(--text-tertiary)" }}>
                                Fundraising Regulations
                            </Link>
                        </Space>
                    </Col>

                    {/* Kết nối */}
                    <Col xs={24} sm={8} md={6} lg={6}>
                        <Title level={5} style={{ color: "white", margin: "0 0 16px 0" }}>
                            Connect with us
                        </Title>
                        <Space size={16}>
                            <Link href="https://facebook.com" target="_blank" style={{ color: "white" }}>
                                <FacebookOutlined style={{ fontSize: 20 }} />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" style={{ color: "white" }}>
                                <TwitterOutlined style={{ fontSize: 20 }} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" style={{ color: "white" }}>
                                <LinkedinOutlined style={{ fontSize: 20 }} />
                            </Link>
                        </Space>
                    </Col>
                </Flex>

                <Divider style={{ borderColor: "var(--border-color)", margin: "32px 0 24px 0" }} />

                <Row style={{ textAlign: "center" }}>
                    <Text style={{ color: "var(--text-tertiary)" }}>
                        Copyright © 2025 EcoFundX. All rights reserved. Design by EcoFundX team.
                    </Text>
                </Row>
            </Flex>
        </Layout.Footer>
    );
};

export default Footer;
