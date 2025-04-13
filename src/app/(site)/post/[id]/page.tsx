'use client';

import React from 'react';
import Link from 'next/link';
import { Flex, Tag, Row, Col, Typography, Avatar, Card, Divider, Image, Space, Button, Input, List } from 'antd';
import PostsCard from '@/components/card/PostsCard';
import CommentCard, { CommentType } from '@/components/card/CommentCard';
import { FaRegBookmark, FaRegHeart, FaRegComment, FaShareAlt } from 'react-icons/fa';
import { useParams } from 'next/navigation';

const mockPosts = [
    {
        _id: '1',
        author: {
            _id: '1',
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
        tag: 'Environment',
        image: '/images/post.png',
    },
    {
        _id: '2',
        author: {
            _id: '2',
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
        tag: 'Tips',
        image: 'https://source.unsplash.com/featured/?eco',
    }
];

const comments: CommentType[] = [
    {
        id: '1',
        author: 'Sarah Johnson',
        avatar: '/avatars/sarah.jpg',
        content: 'This is exactly the kind of sustainable solution we need. Looking forward to seeing this implemented!',
        datetime: '2 days ago'
    },
    {
        id: '2',
        author: 'David Williams',
        avatar: '/avatars/david.jpg',
        content: 'Have you considered implementing this in tropical regions? The solar efficiency might be even better there.',
        datetime: '1 day ago'
    }
];

export default function PostPage() {
    const params = useParams();
    const id = params?.id as string;
    const post = mockPosts.find((p) => p._id === id);

    if (!post) {
        return <div>Post not found!</div>;
    }

    return (
        <Row gutter={[16, 16]} align="middle" justify="center" style={{ padding: '8px', margin: 0 }}>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Card style={{ padding: '8px' }}>
                    <Flex align="center" justify="space-between" style={{ marginBottom: '16px' }}>
                        <Tag color="blue">{post.tag}</Tag>
                        <FaRegBookmark />
                    </Flex>
                    <Typography.Title level={3}>{post.title}</Typography.Title>
                    <Flex align="center" style={{ marginBottom: '16px' }}>
                        <Avatar src={post.author.avatar} size={50} style={{ marginRight: '16px' }} />
                        <Flex vertical align="start">
                            <Typography.Text strong><Link style={{ color: 'var(--text-primary)' }} href={`/view/profile/${post.author._id}`}>{post.author.name}</Link></Typography.Text>
                            <Typography.Text type="secondary">{post.timeAgo}</Typography.Text>
                        </Flex>
                    </Flex>
                    <Divider />
                    {post.image ? (
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={16}>
                                <Typography.Paragraph>{post.content}</Typography.Paragraph>
                            </Col>
                            <Col xs={24} md={8}>
                                <Image
                                    src={post.image}
                                    alt="Post Image"
                                    width="100%"
                                    style={{ borderRadius: '8px' }}
                                />
                            </Col>
                        </Row>
                    ) : (
                        <Typography.Paragraph>{post.content}</Typography.Paragraph>
                    )}
                    <Divider />
                    <Row style={{ width: '100%' }}>
                        <Flex justify="space-between" style={{ width: '100%' }}>
                            <Flex gap="large">
                                <Space>
                                    <FaRegHeart />
                                    <Typography.Text strong>{post.likes} Likes</Typography.Text>
                                </Space>
                                <Space>
                                    <FaRegComment />
                                    <Typography.Text strong>{post.replies} Comments</Typography.Text>
                                </Space>
                            </Flex>
                            <Space>
                                <FaShareAlt />
                                <Typography.Text strong>Share</Typography.Text>
                            </Space>
                        </Flex>
                    </Row>
                    <Divider />
                    {/* Bạn có thể thêm phần bình luận, form nhập comment ở đây */}
                    <Divider />
                    <Flex vertical style={{ width: '100%' }}>
                        <Typography.Title level={4}>Comments ({post.replies})</Typography.Title>
                        <Flex align="flex-start" gap="16px" style={{ width: '100%', marginBottom: '16px' }}>
                            <Avatar src={post.author.avatar} size={50} style={{ marginRight: '16px' }} />
                            <Flex vertical style={{ width: '100%' }} gap="8px">
                                <Input.TextArea
                                    placeholder="Add a comment..."
                                    rows={4}
                                    style={{ width: '100%', borderRadius: '8px' }}
                                />
                                <Flex justify="start">
                                    <Button type="primary">
                                        Post Comment
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <List
                            itemLayout="horizontal"
                            dataSource={comments}
                            renderItem={(item) => (
                                <CommentCard key={item.id} comment={item} />
                            )}
                        />
                    </Flex>
                    <Divider />
                    { /* Render comments here */}
                    <Typography.Title level={4}>Related Posts</Typography.Title>
                    <Row gutter={[16, 16]}>
                        <Col key={post._id} xs={24} sm={24} md={24} lg={24}>
                            <List
                                itemLayout="vertical"
                                dataSource={mockPosts}
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
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}
