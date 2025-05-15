'use client';
import React, { useEffect, useState } from 'react';
import { fetchUserById, User } from '@/lib/api/user';
import { Layout, Button, Input, List, Avatar, Tag, Space, Typography } from 'antd';
import { MessageOutlined, LikeOutlined, MoreOutlined } from '@ant-design/icons';
import Link from 'next/link';
const { Title, Text, Paragraph } = Typography;

interface PostsCardProps {
    _id: string | number;
    author_id?: string;
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
    author_id = "none",
    title = "none",
    content = "none",
    timeAgo = "none",
    replies = 0,
    likes = 0
}: PostsCardProps) {
    const [author, setAuthor] = useState<User | null>(null);

    useEffect(() => {
        if (author_id && author_id !== "none") {
            fetchUserById(author_id).then(res => {
                if (res.success && res.data) {
                    setAuthor(res.data);
                } else {
                    setAuthor(null);
                }
            });
        }
    }, [author_id]);

    console.log('Author:', author_id, author);

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
                avatar={<Avatar src={author?.avatar_url}>{author?.name?.[0] ?? 'U'}</Avatar>}
                title={
                    <Space direction="vertical" size={0}>
                        <Text strong>
                            {author ? (
                                <Link style={{ color: 'var(--text-primary)' }} href={`/view/profile/${author.id}`}>
                                    {author.name}
                                </Link>
                            ) : (
                                'Unknown Author'
                            )}
                        </Text>
                        <Text type="secondary" style={{ fontSize: '12px' }}>{timeAgo}</Text>
                    </Space>
                }
                style={{ marginBottom: 0 }}
            />
            <Title level={4}>
                <Link style={{ color: 'var(--text-primary)' }} href={`/post/${_id}`}>
                    {title}
                </Link>
            </Title>
            <Paragraph ellipsis={{ rows: 2, expandable: false }}>{content}</Paragraph>
        </List.Item>
    );
}
