'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { Layout, Menu, Row, Col, Card, Typography, Button, Space, Table, Tag, Input, Avatar, Flex } from 'antd';
import { HistoryOutlined, RedoOutlined, SafetyCertificateOutlined, PlusOutlined, ArrowRightOutlined, QrcodeOutlined, DollarCircleOutlined, LineChartOutlined, SearchOutlined, FilterOutlined, } from '@ant-design/icons';
import Link from 'next/link';
import { FaSolarPanel } from "react-icons/fa6";
import { MdForest } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BsHourglassSplit } from "react-icons/bs";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

interface AccountData {
    availableBalance: number;
    lastUpdated: string;
    totalInvested: number;
    projectsCount: number;
    pendingReturns: number;
    expectedReturnDate: string;
}

const accountData: AccountData = {
    availableBalance: 12458.90,
    lastUpdated: '2 mins ago',
    totalInvested: 45250.00,
    projectsCount: 12,
    pendingReturns: 3840.00,
    expectedReturnDate: '15 Mar 2025',
};

interface Transaction {
    key: string;
    project: { name: string; icon: React.ReactNode };
    type: string;
    amount: number;
    status: string;
    date: string;
}

const recentTransactionsData: Transaction[] = [
    {
        key: '1',
        project: { name: 'Solar Farm', icon: <FaSolarPanel style={{ fontSize: '20px' }} /> },
        type: 'Investment',
        amount: 2500.00,
        status: 'Completed',
        date: 'Mar 10, 2025',
    },
    {
        key: '2',
        project: { name: 'Reforestation', icon: <MdForest style={{ fontSize: '20px' }} /> },
        type: 'Withdrawal',
        amount: -1200.00,
        status: 'Pending',
        date: 'Mar 8, 2025',
    },
];

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
    width: undefined,
    height: undefined,
    });

    useEffect(() => {
        function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const MobileHorizontalNav = () => (
    <div style={{
        display: 'flex',
        backgroundColor: '#f0f2f5',
        padding: '10px',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTop: '1px solid #d9d9d9',
    }}>
        <Link href="/wallet" passHref style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#1890ff', textDecoration: 'none' }}>
            <FaWallet style={{ fontSize: '1.3em' }} />
            <span style={{ fontSize: '0.8em', marginTop: '3px' }}>Wallet</span>
        </Link>
        <Link href="/transaction-history" passHref style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#595959', textDecoration: 'none' }}>
            <HistoryOutlined style={{ fontSize: '1.3em' }} />
            <span style={{ fontSize: '0.8em', marginTop: '3px' }}>History</span>
        </Link>
        <Link href="/refunds" passHref style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#595959', textDecoration: 'none' }}>
            <RedoOutlined style={{ fontSize: '1.3em' }} />
            <span style={{ fontSize: '0.8em', marginTop: '3px' }}>Refunds</span>
        </Link>
        <Link href="/security" passHref style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#595959', textDecoration: 'none' }}>
            <SafetyCertificateOutlined style={{ fontSize: '1.3em' }} />
            <span style={{ fontSize: '0.8em', marginTop: '3px' }}>Security</span>
        </Link>
    </div>
);

const WalletPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 768;

    const mobileTextStyle = { fontSize: '1em' };
    const mobileTitleStyle = { fontSize: '1.5em', margin: '5px 0' };
    const mobileIconStyle = { fontSize: '1.4em' };
    const mobileAvatarStyle = { backgroundColor: 'transparent', scale: '0.9' };
    const mobileTagStyle = { fontSize: '0.7em' };
    const mobileButtonStyle = { fontSize: '1em' };
    const mobileInputStyle = { maxWidth: 150 };

    const columns = useMemo(() => {
        const baseColumns = [
            {
                title: <Text style={isMobile ? mobileTextStyle : {}}>Project</Text>,
                dataIndex: 'project',
                key: 'project',
                render: (project: { name: string; icon: React.ReactNode }) => (
                    <Space>
                        <Avatar shape="square" icon={project.icon} style={isMobile ? mobileAvatarStyle : { backgroundColor: 'transparent' }} />
                        <Text style={isMobile ? mobileTextStyle : {}}>{project.name}</Text>
                    </Space>
                ),
            },
            {
                title: <Text style={isMobile ? mobileTextStyle : {}}>Type</Text>,
                dataIndex: 'type',
                key: 'type',
                render: (text: string) => <Text style={isMobile ? mobileTextStyle : {}}>{text}</Text>,
            },
            {
                title: <Text style={isMobile ? mobileTextStyle : {}}>Amount</Text>,
                dataIndex: 'amount',
                key: 'amount',
                render: (amount: number) => (
                    <Text style={{ color: amount > 0 ? 'green' : 'red', ... (isMobile ? mobileTextStyle : {}) }}>
                        {amount > 0 ? '+' : '-'}${Math.abs(amount).toFixed(2)}
                    </Text>
                ),
            },
            {
                title: <Text style={isMobile ? mobileTextStyle : {}}>Status</Text>,
                key: 'status',
                dataIndex: 'status',
                render: (status: string) => {
                    const color = status === 'Completed' ? 'green' : 'red';
                    return (
                        <Tag color={color} key={status} style={isMobile ? mobileTagStyle : {}}>
                            {status.toUpperCase()}
                        </Tag>
                    );
                },
            },
            {
                title: <Text style={isMobile ? mobileTextStyle : {}}>Date</Text>,
                dataIndex: 'date',
                key: 'date',
                render: (text: string) => <Text style={isMobile ? mobileTextStyle : {}}>{text}</Text>,
            },
        ];

        const isSmallScreen = windowSize.width && windowSize.width < 768;
        const isMediumScreen = windowSize.width && windowSize.width < 992;

        return baseColumns.filter(column => {
            if (isSmallScreen && (column.key === 'project' || column.key === 'date')) {
                return false;
            }
            if (isMediumScreen && column.key === 'date') {
                return false;
            }
                return true;
        });
    }, [windowSize.width, isMobile, mobileTextStyle, mobileAvatarStyle, mobileTagStyle]);

    return (
        <Layout style={{ minHeight: '100vh', background: 'var(--background-primary)', marginTop: '30px', marginBottom: '30px' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                breakpoint="lg"
                collapsedWidth="80"
                onBreakpoint={(broken) => {
                    setCollapsed(broken);
                }}
                theme="light"
                style={{ borderRight: '1px solid var(--border-color)', height: '100vh', display: isMobile ? 'none' : 'block' }}
            >
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<FaWallet style={{ fontSize: '1.1em' }} />}>
                        Wallet
                    </Menu.Item>
                    <Menu.Item key="2" icon={<HistoryOutlined style={{ fontSize: '1.1em' }} />}>
                        Transaction History
                    </Menu.Item>
                    <Menu.Item key="3" icon={<RedoOutlined style={{ fontSize: '1.1em' }} />}>
                        Refunds
                    </Menu.Item>
                    <Menu.Item key="4" icon={<SafetyCertificateOutlined style={{ fontSize: '1.1em' }} />}>
                        Security
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout className="site-layout" style={{ background: 'var(--background-primary)', paddingBottom: isMobile ? '50px' : '0' }}>
                {isMobile && <MobileHorizontalNav />}
                <Content style={{ padding: 24 }}>
                <Row gutter={[24, 16]} style={{ marginBottom: '24px' }}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
                    <Flex justify="space-between" align="start">
                    <div>
                    <Text style={isMobile ? mobileTextStyle : {}}>Available Balance</Text>
                    <Title level={3} style={isMobile ? mobileTitleStyle : { margin: '8px 0' }}>${accountData.availableBalance.toFixed(2)}</Title>
                    <Text type="secondary" style={isMobile ? mobileTextStyle : { fontSize: '12px' }}>Last updated: {accountData.lastUpdated}</Text>
                    </div>
                    <DollarCircleOutlined style={isMobile ? mobileIconStyle : { fontSize: '24px', color: 'var(--primary-color)' }} />
                    </Flex>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
                    <Flex justify="space-between" align="start">
                    <div>
                    <Text style={isMobile ? mobileTextStyle : {}}>Total Invested</Text>
                    <Title level={3} style={isMobile ? mobileTitleStyle : { margin: '8px 0' }}>${accountData.totalInvested.toFixed(2)}</Title>
                    <Text type="secondary" style={isMobile ? mobileTextStyle : { fontSize: '12px' }}>Across {accountData.projectsCount} projects</Text>
                    </div>
                    <LineChartOutlined style={isMobile ? mobileIconStyle : { fontSize: '24px', color: 'var(--tertiary-color)' }} />
                    </Flex>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
                    <Flex justify="space-between" align="start">
                    <div>
                    <Text style={isMobile ? mobileTextStyle : {}}>Pending Returns</Text>
                    <Title level={3} style={isMobile ? mobileTitleStyle : { margin: '8px 0' }}>${accountData.pendingReturns.toFixed(2)}</Title>
                    <Text type="secondary" style={isMobile ? mobileTextStyle : { fontSize: '12px' }}>Expected by {accountData.expectedReturnDate}</Text>
                    </div>
                    <BsHourglassSplit style={isMobile ? mobileIconStyle : { fontSize: '24px', color: 'var(--icon-tertiary-bg)' }} />
                    </Flex>
                    </Card>
                </Col>
                </Row>

                <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Button type="primary" icon={<PlusOutlined />} size="large" block style={isMobile ? mobileButtonStyle : {}}>
                    {isMobile ? <Text style={mobileButtonStyle}>Add Funds</Text> : 'Add Funds'}
                    </Button>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Button icon={<ArrowRightOutlined />} size="large" block style={isMobile ? mobileButtonStyle : {}}>
                    {isMobile ? <Text style={mobileButtonStyle}>Withdraw</Text> : 'Withdraw'}
                    </Button>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Button icon={<QrcodeOutlined />} size="large" block style={isMobile ? mobileButtonStyle : {}}>
                    {isMobile ? <Text style={mobileButtonStyle}>Pay via QR</Text> : 'Pay via QR'}
                    </Button>
                </Col>
                </Row>

                <Card style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
                <Flex justify="space-between" align="center" style={{ marginBottom: '20px' }} wrap="wrap">
                    <Title level={5} style={{ margin: 0, ... (isMobile ? mobileTextStyle : {}) }}>Recent Transactions</Title>
                    <Space style={{ marginTop: 16 }}>
                    <Input placeholder="Search transactions..." prefix={<SearchOutlined />} style={isMobile ? mobileInputStyle : {}} size={isMobile ? 'middle' : 'middle'} />
                    <Button icon={<FilterOutlined />} size={isMobile ? 'middle' : 'middle'} />
                    </Space>
                </Flex>

                <div style={{ overflowX: 'auto' }}>
                    <Table
                    columns={columns}
                    dataSource={recentTransactionsData}
                    pagination={false}
                    size="middle"
                    />
                </div>

                <Flex justify="center" style={{ marginTop: '20px' }}>
                    <Link href="/transaction-history" passHref>
                    <Button type="link" style={{ color: 'var(--primary-color)', ... (isMobile ? mobileButtonStyle : {}) }}>
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