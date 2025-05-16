
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Layout, Flex, Button, Card, Typography, Row, Col, Avatar, Progress, Tag, Space, Divider } from 'antd';
import {
    PlusOutlined, EditOutlined, BankOutlined, TwitterOutlined, LinkedinFilled, GlobalOutlined,
    DollarCircleOutlined, UsergroupAddOutlined, LineChartOutlined,
    FilterOutlined, MoreOutlined, ClockCircleOutlined, TeamOutlined
} from '@ant-design/icons';
import Link from "next/link";
import { fetchUserProjectsByUserId, User } from '@/lib/api/user';
import { Project } from '@/lib/api/project';
import dayjs from 'dayjs';

interface UserProfileData extends User {
    description?: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        website?: string;
    };
}


const { Text, Title } = Typography;

const statsData = [
    { icon: <DollarCircleOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />, label: 'Total Raised', value: '$124,500' }, // These stats are hardcoded
    { icon: <UsergroupAddOutlined style={{ fontSize: '24px', color: 'var(--tertiary-color)' }} />, label: 'Total Backers', value: '1,240' }, // They are not calculated from userProjects
    { icon: <LineChartOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />, label: 'Success Rate', value: '85%' }
];


const ProfilePage: React.FC = () => {

    const router = useRouter();
    const [userData, setUserData] = useState<UserProfileData>({
        id: '',
        name: 'Loading...',
        email: '',
        password: '',
        phone: '',
        avatar_url: '',
        role: '',
        is_verified: false,
        created_at: '',
        updated_at: '',
        login_type: '',
        description: 'Loading description...',
        social: {},
    });

    const [userProjects, setUserProjects] = useState<Project[]>([]);
    const [loadingProjects, setLoadingProjects] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser) as UserProfileData;
                setUserData({
                    ...parsedUser,
                    description: parsedUser.description || 'Eco-entrepreneur passionate about sustainable innovation and green technology.',
                    social: {
                        twitter: parsedUser.social?.twitter || '#',
                        linkedin: parsedUser.social?.linkedin || '#',
                        website: parsedUser.social?.website || '#',
                    }
                });


                if (parsedUser.id) {
                    setLoadingProjects(true);
                    fetchUserProjectsByUserId(parsedUser.id).then(res => {
                        if (res.success && res.data) {
                            setUserProjects(res.data);
                        } else {
                            console.error('Failed to fetch user projects:', res.error);
                            setUserProjects([]); // Clear projects on error
                        }
                        setLoadingProjects(false);
                    });
                } else {
                    setLoadingProjects(false);
                }

            } catch (error) {
                console.error('Failed to parse user from localStorage', error);
                setLoadingProjects(false);
                window.location.href = ('/login');
                // Optionally clear user data or show an error message to the user
            }
        } else {
            setLoadingProjects(false);
            console.log("No user found in localStorage. Redirecting or showing login prompt recommended.");

        }
    }, []);

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

    // Helper function to format currency (simple version)
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Helper function to calculate days left
    const calculateDaysLeft = (endDateString: string): string => {
        const endDate = dayjs(endDateString);
        const now = dayjs();
        if (endDate.isBefore(now, 'day')) {
            return 'Ended';
        }
        const diff = endDate.diff(now, 'days');
        return `${diff} days left`;
    };

    const handleProjectClick = (project: Project) => {
        router.push(`/projects/${project.id}`);
    };

    return (
        <Flex vertical style={{ padding: '32px', background: 'var(--background-primary)', minHeight: '100vh', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header */}
            <Card style={headerCardStyle}>
                <Row gutter={[32, 24]} align="top">
                    <Col xs={24} md={8} lg={6}>
                        <Flex vertical align="center" style={{ textAlign: 'center' }}>
                            {/* Fallback avatar if avatar_url is empty or null */}
                            <Avatar size={96} src={userData.avatar_url || undefined} style={{ marginBottom: '16px' }}>
                                {!userData.avatar_url && userData.name ? userData.name.charAt(0).toUpperCase() : ''}
                            </Avatar>
                            <Title level={4} style={{ margin: 0, marginBottom: '4px', fontWeight: 600 }}>{userData.name || 'User Name'}</Title>
                            <Text type="secondary" style={{ fontSize: '13px', marginBottom: '12px' }}>{userData.description}</Text>
                            <Space size="middle">
                                {userData.social?.twitter && <a href={userData.social.twitter} target="_blank" rel="noopener noreferrer"><TwitterOutlined style={socialIconStyle} /></a>}
                                {userData.social?.linkedin && <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinFilled style={socialIconStyle} /></a>}
                                {userData.social?.website && <a href={userData.social.website} target="_blank" rel="noopener noreferrer"><GlobalOutlined style={socialIconStyle} /></a>}
                            </Space>
                        </Flex>
                    </Col>

                    <Col xs={24} md={16} lg={18}>
                        <Flex vertical gap="middle">
                            <Flex justify="start" gap="middle" wrap="wrap">
                                <Link href="/creator/create/infomations">
                                    <Button icon={<PlusOutlined />} style={{ background: 'var(--primary-color)', color: 'var(--text-quaternary)' }}>
                                        Create New Campaign
                                    </Button>
                                </Link>
                                {/* Edit Profile link - target depends on your routing */}
                                <Link href={`/profile/edit/${userData.id}`}><Button icon={<EditOutlined />} style={{ borderColor: 'var(--border-color)' }}>Edit Profile</Button></Link>
                                {/* Withdraw Funds link - target depends on your routing */}
                                <Link href="#"><Button icon={<BankOutlined />} type="primary" style={{ background: 'var(--tertiary-color)' }}>Withdraw Funds</Button></Link>
                            </Flex>

                            {/* Stats Section (Hardcoded) */}
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

            {/* Active Campaigns Section */}
            <Flex vertical style={{ marginTop: '30px', marginBottom: '60px' }}>
                <Flex justify="space-between" align="center" style={{ marginBottom: '16px' }}>
                    <Title level={4} style={{ margin: 0, fontWeight: 600 }}>Active Campaigns</Title>
                    <Button icon={<FilterOutlined />} style={{ color: 'var(--primary-color)', borderColor: 'var(--border-color)' }}>Filter</Button>
                </Flex>

                {loadingProjects ? (
                    <Text>Loading campaigns...</Text>
                ) : userProjects.length === 0 ? (
                    <Text>No active campaigns found.</Text>
                ) : (
                    <Row gutter={[24, 24]}>
                        {userProjects.map(campaign => {
                            // Derive values from the project data
                            const raisedAmount = campaign.amount * (campaign.progress / 100);
                            const goalAmount = campaign.amount;
                            const daysLeft = calculateDaysLeft(campaign.endDate);
                            const backersCount = Math.max(0, Math.floor(raisedAmount / 100000)); // Simple placeholder logic for backers

                            return (
                                <Col xs={24} lg={12} key={campaign.id}>
                                    <Card style={campaignCardStyle}>
                                        <Flex justify="space-between" align="start" style={{ marginBottom: '12px' }}>
                                            {/* Use tag directly for the label */}
                                            <Tag color="blue" style={{ fontWeight: 500 }}>
                                                {campaign.tag}
                                            </Tag>
                                            {/* More options button (colored grey or primary) */}
                                            <Button type="text" shape="circle" icon={<MoreOutlined style={{ fontSize: '20px', color: 'var(--text-secondary)' }} />} />
                                        </Flex>
                                        <Title
                                            level={4}
                                            style={{ marginBottom: '4px', fontWeight: 600 }}
                                            ellipsis={{ rows: 1, expandable: false }}
                                            onClick={() => handleProjectClick(campaign)}
                                        >
                                            {campaign.title}
                                        </Title>

                                        {/* Truncate description if too long */}
                                        <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>
                                            {campaign.description.length > 150 ? campaign.description.substring(0, 150) + '...' : campaign.description}
                                        </Text>
                                        <Flex justify="space-between" align="center" style={{ marginBottom: '4px' }}>
                                            <Text style={{ fontSize: '14px' }}>Progress</Text>
                                            <Text style={{ fontSize: '14px' }}>{campaign.progress}%</Text>
                                        </Flex>
                                        <Progress
                                            percent={campaign.progress}
                                            showInfo={false}
                                            strokeColor="var(--primary-color)"
                                            trailColor="var(--background-tertiary)"
                                            style={{ marginBottom: '16px' }}
                                            size="small"
                                        />
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <Text style={{ fontSize: '14px', display: 'block' }}>Raised</Text>
                                                <Text strong style={{ fontSize: '16px' }}>{formatCurrency(raisedAmount)}</Text>
                                            </Col>
                                            <Col span={12} style={{ textAlign: 'right' }}>
                                                <Text style={{ fontSize: '14px', display: 'block' }}>Goal</Text>
                                                <Text strong style={{ fontSize: '16px' }}>{formatCurrency(goalAmount)}</Text>
                                            </Col>
                                        </Row>
                                        <Divider style={{ margin: '12px 0' }} />
                                        <Row gutter={16} style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                                            <Col span={12}>
                                                <ClockCircleOutlined style={{ marginRight: '6px' }} />{daysLeft}
                                            </Col>
                                            <Col span={12} style={{ textAlign: 'right' }}>
                                                <TeamOutlined style={{ marginRight: '6px' }} />{backersCount} backers
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </Flex>
        </Flex>
    );
};

export default ProfilePage;