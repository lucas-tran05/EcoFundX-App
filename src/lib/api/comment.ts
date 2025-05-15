export interface Comment {
    id: string;
    post_id: string;
    author_id: string;
    avatar: string;
    content: string;
    datetime: string;
}

export async function fetchCommentsByPostId(postId: string): Promise<{ success: boolean; data?: Comment[]; error?: string }> {
    try {
        const res = await fetch('/data/comments.json');
        if (!res.ok) throw new Error('Failed to fetch comments');

        const allComments: Comment[] = await res.json();

        // Lọc comment theo post_id
        const postComments = allComments.filter(c => c.post_id === postId);

        return {
            success: true,
            data: postComments,
        };
    } catch (error: any) {
        console.error('Fetch comments error:', error);
        return {
            success: false,
            error: error.message || 'Lỗi không xác định khi lấy bình luận',
        };
    }
}
