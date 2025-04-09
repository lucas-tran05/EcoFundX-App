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
            _id: 1,
            author: {
                _id: 1,
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
                _id: 2,
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
                _id: 3,
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
        <>
            <Flex justify="space-between" align="center" style={{ marginBottom: '24px' }}>
                <Title level={3} style={{ margin: 0 }}>Recent Discussions</Title>
                <Button type="primary" size='large' icon={<PlusOutlined />}>New Post</Button>
            </Flex>
            <List
                itemLayout="vertical"
                dataSource={posts}
                renderItem={(post) => (
                    <PostsCard
                        key={post._id}
                        _id={post._id}
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
        </>
    );
};

export default ForumPage;
