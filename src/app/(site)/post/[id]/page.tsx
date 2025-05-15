'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    Flex,
    Tag,
    Row,
    Col,
    Typography,
    Avatar,
    Card,
    Divider,
    Image,
    Space,
    Button,
    Input,
    List,
} from 'antd';
import { FaRegBookmark, FaRegHeart, FaRegComment, FaShareAlt } from 'react-icons/fa';
import PostsCard from '@/components/card/PostsCard';
import CommentCard, { CommentType } from '@/components/card/CommentCard';
import { fetchPostById, getRandomPosts } from '@/lib/api/post';
import { fetchUserById, User } from '@/lib/api/user';
import { fetchCommentsByPostId } from '@/lib/api/comment';

const { Title, Text, Paragraph } = Typography;

interface Post {
    _id: string;
    author_id: string;
    title: string;
    content: string;
    timeAgo: string;
    replies: number;
    likes: number;
    isBookmarked?: boolean;
    tag?: string;
    image?: string;
}

export default function PostPage() {
    const params = useParams();
    const id = params?.id as string;

    const [post, setPost] = useState<Post | null>(null);
    const [author, setAuthor] = useState<User | null>(null);
    const [comments, setComments] = useState<CommentType[]>([]);
    const [loading, setLoading] = useState(true);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [commentsError, setCommentsError] = useState<string | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

    useEffect(() => {
        if (!id) return;

        setLoading(true);
        setError(null);

        fetchPostById(id)
            .then((result) => {
                if (result.success && result.data) {
                    setPost(result.data);
                    return fetchUserById(result.data.author_id);
                } else {
                    setPost(null);
                    setError(result.error || 'Không tìm thấy bài viết');
                    setLoading(false);
                    return Promise.reject('Post not found');
                }
            })
            .then((resUser) => {
                if (resUser.success && resUser.data) {
                    setAuthor(resUser.data);
                } else {
                    setAuthor(null);
                }
            })
            .catch((err) => {
                if (typeof err === 'string' && err === 'Post not found') return;
                setAuthor(null);
                setError(typeof err === 'string' ? err : err.message || 'Error occurred');
            })
            .finally(() => {
                setLoading(false);
            });

        getRandomPosts(3)
            .then((res) => {
                if (res.success && res.data) {
                    setRelatedPosts(res.data);
                } else {
                    setRelatedPosts([]);
                }
            })
            .catch(() => {
                setRelatedPosts([]);
            });

        // Fetch comments separately
        setCommentsLoading(true);
        fetchCommentsByPostId(id)
            .then((resComments) => {
                if (resComments.success && resComments.data) {
                    setComments(resComments.data);
                } else {
                    setComments([]);
                    setCommentsError(resComments.error || 'Không thể tải bình luận');
                }
            })
            .catch((err) => {
                setComments([]);
                setCommentsError(err.message || 'Lỗi khi tải bình luận');
            })
            .finally(() => {
                setCommentsLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading post...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Post not found!</div>;

    return (
        <Row gutter={[16, 16]} align="middle" justify="center" style={{ padding: '8px', margin: 0 }}>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Card style={{ padding: '8px' }}>
                    <Flex align="center" justify="space-between" style={{ marginBottom: '16px' }}>
                        {post.tag && <Tag color="blue">{post.tag}</Tag>}
                        <FaRegBookmark />
                    </Flex>
                    <Title level={3}>{post.title}</Title>
                    <Flex align="center" style={{ marginBottom: '16px' }}>
                        <Avatar src={author?.avatar_url} size={50} style={{ marginRight: '16px' }}>
                            {author?.name?.[0]}
                        </Avatar>
                        <Flex vertical align="start">
                            <Text strong>
                                {author ? (
                                    <Link style={{ color: 'var(--text-primary)' }} href={`/view/profile/${author.id}`}>
                                        {author.name}
                                    </Link>
                                ) : (
                                    'Unknown Author'
                                )}
                            </Text>
                            <Text type="secondary">{post.timeAgo}</Text>
                        </Flex>
                    </Flex>
                    <Divider />
                    {post.image ? (
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={16}>
                                <Paragraph>{post.content}</Paragraph>
                            </Col>
                            <Col xs={24} md={8}>
                                <Image src={post.image} alt="Post Image" width="100%" style={{ borderRadius: '8px' }} />
                            </Col>
                        </Row>
                    ) : (
                        <Paragraph>{post.content}</Paragraph>
                    )}
                    <Divider />
                    <Row style={{ width: '100%' }}>
                        <Flex justify="space-between" style={{ width: '100%' }}>
                            <Flex gap="large">
                                <Space>
                                    <FaRegHeart />
                                    <Text strong>{post.likes} Likes</Text>
                                </Space>
                                <Space>
                                    <FaRegComment />
                                    <Text strong>{comments.length} Comments</Text>
                                </Space>
                            </Flex>
                            <Space>
                                <FaShareAlt />
                                <Text strong>Share</Text>
                            </Space>
                        </Flex>
                    </Row>
                    <Divider />
                    <Flex vertical style={{ width: '100%' }}>
                        <Title level={4}>Comments ({comments.length})</Title>
                        <Flex align="flex-start" gap="16px" style={{ width: '100%', marginBottom: '16px' }}>
                            <Avatar src={author?.avatar_url} size={50} style={{ marginRight: '16px' }}>
                                {author?.name?.[0]}
                            </Avatar>
                            <Flex vertical style={{ width: '100%' }} gap="8px">
                                <Input.TextArea placeholder="Add a comment..." rows={4} style={{ width: '100%', borderRadius: '8px' }} />
                                <Flex justify="start">
                                    <Button type="primary">Post Comment</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        {commentsLoading ? (
                            <Text>Loading comments...</Text>
                        ) : commentsError ? (
                            <Text type="danger">Error: {commentsError}</Text>
                        ) : (
                            <List
                                itemLayout="horizontal"
                                dataSource={comments}
                                renderItem={(item) => <CommentCard key={item.id} comment={item} />}
                            />
                        )}
                    </Flex>
                    <Divider />
                    <Title level={4}>Related Posts</Title>
                    <List
                        itemLayout="vertical"
                        dataSource={relatedPosts}
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
                </Card>
            </Col>
        </Row>
    );
}
