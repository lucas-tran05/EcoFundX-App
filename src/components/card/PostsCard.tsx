'use client'
import React from 'react';
import { Layout, Button, Input, List, Avatar, Tag, Space, Typography } from 'antd';
import { MessageOutlined, LikeOutlined, MoreOutlined } from '@ant-design/icons';
import Link from 'next/link';
const { Title, Text } = Typography;

interface PostsCardProps {
    _id: string | number;
    author: {
        _id: string | number;
        name: string;
        avatar: string;
        role?: string;
    }
    title: string;
    content: string;
    timeAgo: string;
    replies: number;
    likes: number;
    isBookmarked?: boolean;
    onClick?: () => void;
}

export default function PostsCard({
    _id = "none",
    author = {
        _id: "none",
        name: "none",
        avatar: "none",
        role: "none"
    },
    title = "none",
    content = "none",
    timeAgo = "none",
    replies = 0,
    likes = 0,
    isBookmarked = false,
    onClick
}: PostsCardProps) {
    return (
        <List.Item
            key={_id}
            style={{ padding: '24px', marginBottom: '16px', border: '1px solid #f0f0f0', borderRadius: '8px' }}
            actions={[
                <Space key="replies">
                    <MessageOutlined />
                    {replies} replies
                </Space>,
                <Space key="likes">
                    <LikeOutlined />
                    {likes} likes
                </Space>,
                <LikeOutlined key="bookmark" />,
            ]}
            extra={<Button type="text" icon={<MoreOutlined />} />}
        >
            <List.Item.Meta
                avatar={<Avatar src={author.avatar}>{author.name[0]}</Avatar>}
                title={<Space direction="vertical" size={0}>
                    <Text strong><Link style={{ color: 'var(--text-primary)' }} href={`/view/profile/${author._id}`}>{author.name}</Link></Text>
                    <Text type="secondary" style={{ fontSize: '12px' }}>{timeAgo}</Text>
                </Space>}
                style={{ marginBottom: '0' }}
            />
            <Title level={4}><Link style={{ color: 'var(--text-primary)' }} href={`/post/${_id}`}>{title}</Link></Title>
            <Text>{content}</Text>
        </List.Item>
    );
}
