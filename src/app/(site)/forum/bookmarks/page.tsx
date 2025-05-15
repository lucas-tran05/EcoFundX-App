// src/components/card/BookMarks.tsx
import React from 'react';

export interface Author {
    _id: number;
    name: string;
    avatar: string;
    role: string;
}

export interface PostsCardProps {
    _id: number;
    author: Author;
    title: string;
    content: string;
    timeAgo: string;
    replies: number;
    likes: number;
    isBookmarked: boolean;
    onClick: () => void;
}

const BookMarks: React.FC<PostsCardProps> = ({
    _id,
    author,
    title,
    content,
    timeAgo,
    replies,
    likes,
    isBookmarked,
    onClick,
}) => {
    return (
        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: 8,
                padding: 16,
                marginBottom: 16,
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <img
                    src={author.avatar}
                    alt={author.name}
                    style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 12 }}
                />
                <div>
                    <strong>{author.name}</strong> <small>({author.role})</small>
                    <div style={{ fontSize: 12, color: '#888' }}>{timeAgo}</div>
                </div>
            </div>
            <h3 style={{ margin: '8px 0' }}>{title}</h3>
            <p style={{ marginBottom: 12 }}>{content}</p>
            <div style={{ fontSize: 14, color: '#555', display: 'flex', gap: 16 }}>
                <span>Replies: {replies}</span>
                <span>Likes: {likes}</span>
                <span>{isBookmarked ? '⭐ Bookmarked' : ''}</span>
            </div>
        </div>
    );
};

export default BookMarks;
