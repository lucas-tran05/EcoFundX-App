'use client';
import React, { useEffect, useState } from 'react';
import { Button, List, Typography, Row, Spin, Alert } from 'antd';
import PostsCard from '@/components/card/PostsCard';
import { fetchPosts, Post } from '@/lib/api/post';

const { Title } = Typography;

const ForumPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [count, setCount] = useState(3);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadPosts = async (limit: number) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetchPosts(limit);
            if (res.success && res.data) {
                setPosts(res.data);
            } else {
                setError(res.error || 'Lỗi khi tải bài viết');
            }
        } catch (e) {
            setError('Lỗi không xác định khi tải bài viết');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPosts(count);
    }, [count]);

    const handleLoadMore = () => {
        setCount(prev => prev + 3); // mỗi lần bấm load thêm 3 bài
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, alignItems: 'center' }}>
                <Title level={3} style={{ margin: 0 }}>Recent Discussions</Title>
                <Button type="primary" size="large">New Post</Button>
            </div>

            {loading && <Spin tip="Đang tải bài viết..." style={{ display: 'block', marginBottom: 24 }} />}
            {error && <Alert type="error" message={error} style={{ marginBottom: 24 }} />}

            <List
                itemLayout="vertical"
                dataSource={posts}
                renderItem={(post) => (
                    <PostsCard
                        key={post._id}
                        _id={post._id}
                        author_id={post.author_id}
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

            <Row justify="center" style={{ marginTop: 30 }}>
                <Button type="dashed" size="large" onClick={handleLoadMore} disabled={loading}>
                    Load More
                </Button>
            </Row>
        </>
    );
};

export default ForumPage;
