'use client';

import React from 'react';
import { Avatar, Space, Typography, List } from 'antd';

const { Text } = Typography;

export interface CommentType {
    id: string;
    author: string;
    avatar: string;
    content: string;
    datetime: string;
}

interface CommentCardProps {
    comment: CommentType;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
    return (
        <List.Item style={{ padding: '16px 0', borderBottom: '1px solid #f0f0f0' }}>
            <List.Item.Meta
                avatar={<Avatar src={comment.avatar} size="large" />}
                title={
                    <Space>
                        <Text strong>{comment.author}</Text>
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
