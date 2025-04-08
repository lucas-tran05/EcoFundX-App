'use client';
import React from 'react';
import { Button, List, Typography,  Flex, Row } from 'antd';
import PostsCard from '@/components/card/PostsCard';

const { Title } = Typography;

const ForumBookmark: React.FC = () => {
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
    return (
        <>
            <Flex justify="space-between" align="center" style={{ marginBottom: '24px' }}>
                <Title level={3} style={{ margin: 0 }}>Bookmarks </Title>
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

export default ForumBookmark;
