'use client';
import React, { useState } from 'react';
import { Layout, Menu, Button, List, Avatar, Tag, Space, Typography, Badge, Flex, Row, Col } from 'antd';
import { HomeOutlined, CompassOutlined, BookOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import PostsCard from '@/components/card/PostsCard';

const { Title, Text } = Typography;

interface Topic {
    name: string;
    color: string;
    posts: number;
}

const ForumPage: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState('home');

    const menuItems: MenuProps['items'] = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: 'Home',
        },
        {
            key: 'explore',
            icon: <CompassOutlined />,
            label: 'Explore',
        },
        {
            key: 'bookmarks',
            icon: <BookOutlined />,
            label: 'Bookmarks',
        },
    ];

    const categories = [
        { name: 'Environment', count: 248 },
        { name: 'Education', count: 156 },
        { name: 'Health', count: 42 },
    ];

    const posts = [
        {
            id: 1,
            author: {
                name: 'Sarah Chen',
                avatar: '/avatars/sarah.jpg',
            },
            title: 'Best practices for React Performance Optimization',
            content: 'I\'ve been working on optimizing our React application and wanted to share some insights about performance improvements...',
            timeAgo: '2 hours ago',
            replies: 24,
            likes: 89,
            isBookmarked: false,
        },
        {
            id: 2,
            author: {
                name: 'Mike Johnson',
                avatar: '/avatars/mike.jpg',
            },
            title: 'UI Design Trends for 2025',
            content: 'Let\'s discuss the upcoming UI design trends that will shape the future of web and mobile applications...',
            timeAgo: '5 hours ago',
            replies: 18,
            likes: 45,
            isBookmarked: false,
        },
    ];

    const trendingTopics: Topic[] = [
        { name: '#contribution', color: 'blue', posts: 1200 },
        { name: '#rasing', color: 'green', posts: 892 },
        { name: '#giveaway', color: 'purple', posts: 654 },
    ];

    const topCommenters = [
        { name: 'Alex Turner', role: 'Senior Developer', avatar: '/avatars/alex.jpg' },
        { name: 'Emma Wilson', role: 'UI Designer', avatar: '/avatars/emma.jpg' },
        { name: 'Lisa Anderson', role: 'Product Manager', avatar: '/avatars/lisa.jpg' },
    ];

    return (
        <Row gutter={[32, 32]} style={{ minHeight: '100vh', padding: '12px 64px', margin: 0 }}>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    selectedKeys={[selectedMenu]}
                    onClick={e => setSelectedMenu(e.key)}
                    style={{ border: 'none' }}
                    items={menuItems}
                />
            </Col>
            <Col xs={0} sm={0} md={4} lg={4} xl={4}>
                <Title level={4}>Forum</Title>
                <Menu
                    mode="inline"
                    selectedKeys={[selectedMenu]}
                    onClick={e => setSelectedMenu(e.key)}
                    style={{ border: 'none' }}
                    items={menuItems}
                />
                <Title level={4} style={{ margin: '24px 0' }}>Categories</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={categories}
                    renderItem={item => (
                        <List.Item style={{ padding: '8px 0' }}>
                            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                                <Text>{item.name}</Text>
                                <Badge count={item.count} style={{ backgroundColor: '#e6f7ff', color: '#1890ff' }} />
                            </Space>
                        </List.Item>
                    )}
                />
            </Col>

            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <Flex justify="space-between" align="center" style={{ marginBottom: '24px' }}>
                    <Title level={3} style={{ margin: 0 }}>Recent Discussions</Title>
                    <Button type="primary" size='large' icon={<PlusOutlined />}>New Post</Button>
                </Flex>
                <List
                    itemLayout="vertical"
                    dataSource={posts}
                    renderItem={(post) => (
                        <PostsCard
                            key={post.id}
                            _id={post.id}
                            author={post.author}
                            title={post.title}
                            content={post.content}
                            timeAgo={post.timeAgo}
                            replies={post.replies}
                            likes={post.likes}
                            isBookmarked={post.isBookmarked}
                            onClick={() => { }}
                        />
                    )}
                />
                <Row justify="center" style={{ marginTop: '30px' }}>
                    <Button type='dashed' size="large">Load More</Button>
                </Row>
            </Col>
            <Col xs={0} sm={0} md={4} lg={4} xl={4}>
                <Title level={4}>Top Trending</Title>
                <List
                    dataSource={trendingTopics}
                    renderItem={item => (
                        <List.Item style={{ padding: '8px 0', border: 'none' }}>
                            <Space>
                                <Tag color={item.color}>{item.name}</Tag>
                                <Text type="secondary">{item.posts} posts</Text>
                            </Space>
                        </List.Item>
                    )}
                />
                <Title level={4} style={{ margin: '24px 0' }}>Top Commenters</Title>
                <List
                    dataSource={topCommenters}
                    renderItem={item => (
                        <List.Item style={{ padding: '8px 0', border: 'none' }}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar}>{item.name[0]}</Avatar>}
                                title={item.name}
                                description={item.role}
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    );
};

export default ForumPage;
