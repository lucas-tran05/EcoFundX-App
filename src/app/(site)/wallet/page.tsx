'use client';
import React, { useState } from 'react';
import { Layout, Menu, Row, Col, Card, Typography, Button, Space, Table, Tag, Input, Avatar, Flex } from 'antd';
import { WalletOutlined, HistoryOutlined, RedoOutlined, SafetyCertificateOutlined, PlusOutlined, ArrowRightOutlined, QrcodeOutlined, DollarCircleOutlined, LineChartOutlined, FieldTimeOutlined, SearchOutlined, FilterOutlined, } from '@ant-design/icons';
import Link from 'next/link';
import { FaSolarPanel } from "react-icons/fa6";
import { MdForest } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const accountData = {
    availableBalance: 12458.90,
    lastUpdated: '2 mins ago',
    totalInvested: 45250.00,
    projectsCount: 12,
    pendingReturns: 3840.00,
    expectedReturnDate: '15 Mar 2025',
};

const recentTransactionsData = [
    {
        key: '1',
        project: { name: 'Solar Farm Project', icon: <FaSolarPanel style={{ color: 'var(--icon-primary-bg)', fontSize: '20px' }} /> },
        type: 'Investment',
        amount: 2500.00,
        status: 'Completed',
        date: 'Mar 10, 2025',
    },
    {
        key: '2',
        project: { name: 'Reforestation Initiative', icon: <MdForest style={{ color: 'var(--icon-secondary-bg)', fontSize: '20px' }} /> },
        type: 'Withdrawal',
        amount: -1200.00,
        status: 'Pending',
        date: 'Mar 8, 2025',
    },
];


const columns = [
    {
        title: 'Project',
        dataIndex: 'project',
        key: 'project',
        render: (project: { name: string; icon: React.ReactNode }) => (
            <Space>
                <Avatar shape="square" icon={project.icon} style={{ backgroundColor: 'transparent' }} />
                <Text>{project.name}</Text>
            </Space>
        ),
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (amount: number) => (
            <Text style={{ color: amount > 0 ? 'green' : 'red' }}>
                {amount > 0 ? '+' : '-'}${Math.abs(amount).toFixed(2)}
            </Text>
        ),
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status: string) => {
            let color = status === 'Completed' ? 'green' : 'red';
            return (
                <Tag color={color} key={status}>
                    {status.toUpperCase()}
                </Tag>
            );
        },
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
];


const WalletPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh', background: 'var(--background-primary)', marginTop: '30px', marginBottom: '30px' }}>
            {/* Sidebar */}
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                breakpoint="lg"
                collapsedWidth="80"
                onBreakpoint={(broken) => {
                    console.log('Breakpoint triggered:', broken);
                    setCollapsed(broken);
                }}
                theme="light"
                style={{ borderRight: '1px solid var(--border-color)', height: '100vh' }}
            >
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<FaWallet />}>
                        Wallet
                    </Menu.Item>
                    <Menu.Item key="2" icon={<HistoryOutlined />}>
                        Transaction History
                    </Menu.Item>
                    <Menu.Item key="3" icon={<RedoOutlined />}>
                        Refunds
                    </Menu.Item>
                    <Menu.Item key="4" icon={<SafetyCertificateOutlined />}>
                        Security
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Main Content Area */}
            <Layout style={{ background: 'var(--background-primary)', padding: '24px 24px' }}>
                <Content>
                    {/* Summary Cards */}
                    <Row gutter={[24, 16]} style={{ marginBottom: '24px' }}>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <Card style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
                                <Flex justify="space-between" align="start">
                                    <div>
                                        <Text>Available Balance</Text>
                                        <Title level={3} style={{ margin: '8px 0' }}>${accountData.availableBalance.toFixed(2)}</Title>
                                        <Text type="secondary" style={{ fontSize: '12px' }}>Last updated: {accountData.lastUpdated}</Text>
                                    </div>
                                    <DollarCircleOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />
                                </Flex>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <Card style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
                                <Flex justify="space-between" align="start">
                                    <div>
                                        <Text>Total Invested</Text>
                                        <Title level={3} style={{ margin: '8px 0' }}>${accountData.totalInvested.toFixed(2)}</Title>
                                        <Text type="secondary" style={{ fontSize: '12px' }}>Across {accountData.projectsCount} projects</Text>
                                    </div>
                                    <LineChartOutlined style={{ fontSize: '24px', color: 'var(--tertiary-color)' }} />
                                </Flex>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <Card style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
                                <Flex justify="space-between" align="start">
                                    <div>
                                        <Text>Pending Returns</Text>
                                        <Title level={3} style={{ margin: '8px 0' }}>${accountData.pendingReturns.toFixed(2)}</Title>
                                        <Text type="secondary" style={{ fontSize: '12px' }}>Expected by {accountData.expectedReturnDate}</Text>
                                    </div>
                                    <BsHourglassSplit style={{ fontSize: '24px', color: 'var(--icon-tertiary-bg)' }} />
                                </Flex>
                            </Card>
                        </Col>
                    </Row>

                    {/* Action Buttons */}
                    <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
                        <Col>
                            <Button type="primary" icon={<PlusOutlined />} size="large">
                                Add Funds
                            </Button>
                        </Col>
                        <Col>
                            <Button icon={<ArrowRightOutlined />} size="large">
                                Withdraw
                            </Button>
                        </Col>
                        <Col>
                            <Button icon={<QrcodeOutlined />} size="large">
                                Pay via QR
                            </Button>
                        </Col>
                    </Row>

                    {/* Recent Transactions */}
                    <Card style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
                        <Flex justify="space-between" align="center" style={{ marginBottom: '20px' }}>
                            <Title level={5} style={{ margin: 0 }}>Recent Transactions</Title>
                            <Space>
                                <Input placeholder="Search transactions..." prefix={<SearchOutlined />} />
                                <Button icon={<FilterOutlined />} />
                            </Space>
                        </Flex>

                        <Table
                            columns={columns}
                            dataSource={recentTransactionsData}
                            pagination={false}
                            size="middle"
                        />

                        <Flex justify="center" style={{ marginTop: '20px' }}>
                            <Link href="/transaction-history" passHref>
                                <Button type="link" style={{ color: 'var(--primary-color)' }}>
                                    View All Transactions <ArrowRightOutlined />
                                </Button>
                            </Link>
                        </Flex>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    );
};

export default WalletPage;
