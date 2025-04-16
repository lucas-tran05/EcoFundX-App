'use client';
import React from 'react';
import { Layout, Flex, Button, Card, Typography, Row, Col, Avatar, Progress, Tag, Space, Divider } from 'antd';
import { PlusOutlined, EditOutlined, BankOutlined, TwitterOutlined, LinkedinFilled, GlobalOutlined, DollarCircleOutlined, UsergroupAddOutlined, LineChartOutlined, FilterOutlined, MoreOutlined, ClockCircleOutlined, TeamOutlined } from '@ant-design/icons';
import Link from "next/link"; 

const { Text, Title, Paragraph } = Typography;

const userData = {
    name: 'Alex Thompson',
    avatarUrl: '#', 
    description: 'Eco-entrepreneur passionate about sustainable innovation and green technology.',
    social: {
        twitter: '#',
        linkedin: '#',
        website: '#'
    },
};

const statsData = [
    { icon: <DollarCircleOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }}/>, label: 'Total Raised', value: '$124,500' },
    { icon: <UsergroupAddOutlined style={{ fontSize: '24px', color: 'var(--tertiary-color)' }}/>, label: 'Total Backers', value: '1,240' },
    { icon: <LineChartOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }}/>, label: 'Success Rate', value: '85%' }
];

const activeCampaignsData = [
    {
        id: 1,
        status: 'Active',
        statusBgColor: 'var(--background-quinary)', 
        statusColor: 'var(--primary-color)',  
        title: 'Solar-Powered Water Purifier',
        description: 'Clean water solution for remote areas',
        progress: 78,
        progressColor: 'var(--primary-color)', 
        raised: '$39,000',
        goal: '$50,000',
        daysLeft: 12,
        backers: 248
    },
    {
        id: 2,
        status: 'Funding',
        statusBgColor: 'var(--background-senary)',
        statusColor: 'var(--tertiary-color)',  
        title: 'Community Garden Initiative',
        description: 'Urban farming project',
        progress: 45,
        progressColor: 'var(--tertiary-color)',
        raised: '$22,500',
        goal: '$50,000',
        daysLeft: 25,
        backers: 156
    },
];


const topSupportersData = [
    { 
        id: 1, 
        name: 'Michael Chen', 
        avatarUrl: '#', 
        total: '$12,500' 
    }, 
    { 
        id: 2,
        name: 'Emma Wilson', 
        avatarUrl: '#', 
        total: '$8,750' 
    },
    { 
        id: 3, 
        name: 'David Park', 
        avatarUrl: '#', 
        total: '$6,200' 
    },
];


const ProfilePage: React.FC = () => {

    const headerCardStyle: React.CSSProperties = {
        width: '100%',
        boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
        marginBottom: '32px',
        borderRadius: '8px',
    };

    const campaignCardStyle: React.CSSProperties = {
        width: '100%',
        boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), 0 5px 12px 4px rgba(0, 0, 0, 0.05)', 
        borderRadius: '8px'
    };

    const statCardStyle: React.CSSProperties = {
        padding: '16px',
        backgroundColor: 'var(--background-secondary)', 
        borderRadius: '4px',
        textAlign: 'center', 
        height: '100%'
    };

    const socialIconStyle: React.CSSProperties = {
        fontSize: '18px',
        color: 'var(--tertiary-color)'
    };

    return (
        <Flex
            vertical 
            style={{
                padding: '32px', 
                background: '--background-primary', 
                minHeight: '100vh',
                maxWidth: '1200px', 
                margin: '0 auto' 
            }}
        >
            {/* --- Header Section --- */}
            <Card style={headerCardStyle}>
                <Row gutter={[32, 24]} align="top"> 
                    {/* Profile Info Column */}
                    <Col xs={24} md={8} lg={6}>
                        <Flex vertical align="center" style={{ textAlign: 'center' }}> 
                            <Avatar size={96} src={userData.avatarUrl} style={{ marginBottom: '16px' }} /> 
                            <Title level={4} style={{ margin: 0, marginBottom: '4px', fontWeight: 600 }}>{userData.name}</Title>
                            <Text type="secondary" style={{ fontSize: '13px', marginBottom: '12px' }}>{userData.description}</Text>
                            <Space size="middle">
                                <a href={userData.social.twitter} target="_blank" rel="noopener noreferrer"><TwitterOutlined style={socialIconStyle} /></a>
                                <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinFilled style={socialIconStyle} /></a>
                                <a href={userData.social.website} target="_blank" rel="noopener noreferrer"><GlobalOutlined style={socialIconStyle} /></a>
                            </Space>
                        </Flex>
                    </Col>

                    {/* Actions and Stats Column */}
                    <Col xs={24} md={16} lg={18}>
                        <Flex vertical gap="middle">    
                            {/* Action Buttons */}
                            <Flex justify="start" gap="middle" wrap="wrap">
                                <Link href="/creator/create/infomations">
                                    <Button icon={<PlusOutlined />} style={{ background: 'var(--primary-color)', color: 'var( --text-quaternary)' }}>
                                        Create New Campaign
                                    </Button>
                                </Link> 
                                <Link href="#" >
                                    <Button icon={<EditOutlined />} style={{ borderColor: 'var(--border-color)' }}>Edit Profile</Button>
                                </Link>
                                <Link href="#" >
                                    <Button icon={<BankOutlined />} type="primary" style={{ background: 'var(--tertiary-color)' }}>Withdraw Funds</Button>
                                </Link>
                                
                            </Flex>

                            {/* Stats Row */}
                            <Row gutter={[16, 16]}>
                                {statsData.map((stat, index) => (
                                    <Col key={index} xs={24} sm={8}>
                                        <Card style={statCardStyle}> 
                                            {stat.icon}
                                            <Title style={{ display: 'block', fontSize: '14px', fontWeight: 400, margin: '4px 0' }}>{stat.label}</Title>
                                            <Title level={4} style={{ margin: 0, fontWeight: 600 }}>{stat.value}</Title>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Flex>
                    </Col>
                </Row>
            </Card>

            {/* --- Active Campaigns Section --- */}
            <Flex vertical style={{ marginTop: '30px', marginBottom: '60px' }}>
                <Flex justify="space-between" align="center" style={{ marginBottom: '16px' }}>
                    <Title level={4} style={{ margin: 0, fontWeight: 600 }}>Active Campaigns</Title>
                    <Button icon={<FilterOutlined />} style={{ color: 'var(--primary-color)', borderColor: 'var(--border_color)' }}>Filter</Button> 
                </Flex>
                <Row gutter={[24, 24]}>
                    {activeCampaignsData.map((campaign) => (
                        <Col xs={24} lg={12} key={campaign.id}> 
                            <Card
                                style={campaignCardStyle}
                            >
                                <Flex justify="space-between" align="start" style={{ marginBottom: '12px' }}>
                                    <Tag style={{ 
                                        background: campaign.statusBgColor, 
                                        color: campaign.statusColor, 
                                        border: `1px solid ${campaign.statusColor}`, 
                                        fontWeight: 500 }}
                                    >
                                        {campaign.status}
                                    </Tag>
                                    <Button type="text" shape="circle" icon={<MoreOutlined style={{ fontSize: '20px', color: campaign.statusColor }}/>} />
                                </Flex>
                                <Title level={4} style={{ marginBottom: '4px', fontWeight: 600 }}>{campaign.title}</Title>
                                <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>{campaign.description}</Text>
                                <Flex justify="space-between" align="center" style={{ marginBottom: '4px' }}>
                                    <Text style={{ fontSize: '14px' }}>Progress</Text>
                                    <Text style={{ fontSize: '14px' }}>{campaign.progress}%</Text>
                                </Flex>
                                <Progress
                                    percent={campaign.progress}
                                    showInfo={false}
                                    strokeColor={campaign.progressColor}
                                    trailColor="var(--background-tertiary)" 
                                    style={{ marginBottom: '16px' }}
                                    size="small" 
                                />
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Text style={{ fontSize: '14px', display: 'block' }}>Raised</Text>
                                        <Text strong style={{ fontSize: '16px' }}>{campaign.raised}</Text>
                                    </Col>
                                    <Col span={12} style={{ textAlign: 'right' }}> 
                                        <Text style={{ fontSize: '14px', display: 'block' }}>Goal</Text>
                                        <Text strong style={{ fontSize: '16px' }}>{campaign.goal}</Text>
                                    </Col>
                                </Row>
                                <Divider style={{ margin: '12px 0' }} /> 
                                <Row gutter={16} style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                                     <Col span={12}>
                                        <ClockCircleOutlined style={{ marginRight: '6px' }} />{campaign.daysLeft} days left
                                    </Col>
                                    <Col span={12} style={{ textAlign: 'right' }}> 
                                        <TeamOutlined style={{ marginRight: '6px' }} />{campaign.backers} backers
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Flex>

            {/* --- Top Supporters Section --- */}
            <Flex vertical style={{ marginBottom: '80px'}}>
                <Title level={4} style={{ margin: 0, marginBottom: '30px', fontWeight: 600 }}>Top Supporters</Title>
                <Row gutter={[32, 16]}>
                    {topSupportersData.map(supporter => (
                        <Col key={supporter.id} xs={24} sm={12} md={8}>
                            <Card
                                style={{
                                    width: '100%', 
                                    height: '100%',
                                    boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Flex align="center" gap="middle">
                                    <Avatar size={48} src={supporter.avatarUrl} />
                                    <Flex vertical>
                                        <Text strong style={{ fontSize: '16px' }}>
                                            {supporter.name}
                                        </Text>
                                        <Text style={{ fontSize: '14px' }}>
                                            Total: {supporter.total}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Flex>
        </Flex>
    );
};

export default ProfilePage;
