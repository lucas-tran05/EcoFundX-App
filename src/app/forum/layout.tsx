'use client';
import React, { useState } from 'react';
import {  Menu, List, Avatar, Tag, Space, Typography, Badge, Row, Col } from 'antd';
import { HomeOutlined, CompassOutlined, BookOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';

const { Title, Text } = Typography;

interface Topic {
    name: string;
    color: string;
    posts: number;
}

export default function ForumLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [selectedMenu, setSelectedMenu] = useState('home');

    const menuItems: MenuProps['items'] = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: <Link href="/forum/">Contact</Link>,
        },
        {
            key: 'explore',
            icon: <CompassOutlined />,
            label: <Link href="/forum/explore">Explore</Link>,
        },
        {
            key: 'bookmarks',
            icon: <BookOutlined />,
            label: <Link href="/forum/bookmarks">Bookmarks</Link>,
        },
    ];

    const categories = [
        { name: 'Environment', count: 248 },
        { name: 'Education', count: 156 },
        { name: 'Health', count: 42 },
    ];

    const posts = [
        {
            _id: 1,
            author: {
                name: 'Alice Johnson',
                avatar: 'https://i.pravatar.cc/150?img=32',
                role: 'Admin',
            },
            title: 'Building a Sustainable Future',
            content: 'Let’s work together to make the world greener and cleaner!',
            timeAgo: '2h ago',
            replies: 12,
            likes: 124,
            isBookmarked: true,
        },
        {
            _id: 2,
            author: {
                name: 'Bob Smith',
                avatar: 'https://i.pravatar.cc/150?img=12',
                role: 'Member',
            },
            title: 'Eco-Friendly Tips',
            content: 'Here are 5 simple ways to reduce your carbon footprint every day.',
            timeAgo: '5h ago',
            replies: 8,
            likes: 89,
            isBookmarked: false,
        },
        {
            _id: 3,
            author: {
                name: 'Charlie Rose',
                avatar: 'https://i.pravatar.cc/150?img=45',
                role: 'Contributor',
            },
            title: 'Join Our Green Campaign',
            content: 'Excited to announce our new initiative to plant 1,000 trees!',
            timeAgo: '1d ago',
            replies: 20,
            likes: 230,
            isBookmarked: true,
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
                {children}
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