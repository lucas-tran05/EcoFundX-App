'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { Avatar, Space, Typography, List } from 'antd';
import { fetchCommentsByPostId } from '@/lib/api/comment';
import { fetchUserById } from '@/lib/api/user';

const { Text } = Typography;

export interface CommentType {
    id: string;
    author_id: string;
    avatar: string;
    content: string;
    datetime: string;
}

interface CommentCardProps {
    comment: CommentType;
}

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    avatar_url: string;
    role: string;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
    login_type: string;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
    const [author, setAuthor] = useState<User | null>(null);

    useEffect(() => {
        const getAuthor = async () => {
            try {
                const result = await fetchUserById(comment.author_id);

                if (result?.data) {
                    setAuthor(result.data);
                } else {
                    console.warn('Author data not found');
                    setAuthor(null); // fallback
                }
            } catch (error) {
                console.error('Failed to fetch author:', error);
                setAuthor(null);
            }
        };

        getAuthor();
    }, [comment.author_id]);

    return (
        <List.Item style={{ padding: '16px 0', borderBottom: '1px solid #f0f0f0' }}>
            <List.Item.Meta
                avatar={<Avatar src={author?.avatar_url} size="large" />}
                title={
                    <Space>
                        <Text strong>{author?.name}</Text>
                        <Text type="secondary" style={{ fontSize: '12px' }}>{comment.datetime}</Text>
                    </Space>
                }
                description={
                    <Text style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                        {comment.content}
                    </Text>
                }
            />
        </List.Item>
    );
};

export default CommentCard;
