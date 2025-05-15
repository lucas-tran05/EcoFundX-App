export interface Post {
    _id: string;
    author_id: string;
    title: string;
    content: string;
    timeAgo: string;
    replies: number;
    likes: number;
    isBookmarked: boolean;
    tag: string;
    image: string;
}

export interface PostResponse {
    success: boolean;
    data?: Post[];
    error?: string;
}

export async function fetchPosts(count?: number): Promise<PostResponse> {
    try {
        const res = await fetch('/data/posts.json');
        if (!res.ok) throw new Error('Failed to fetch posts');

        const posts: Post[] = await res.json();

        const slicedPosts = count && count > 0 ? posts.slice(0, count) : posts;

        return {
            success: true,
            data: slicedPosts,
        };
    } catch (error: any) {
        console.error('Fetch posts error:', error);
        return {
            success: false,
            error: error.message || 'Lỗi không xác định khi lấy dữ liệu bài viết',
        };
    }
}

export async function fetchPostById(id: string): Promise<{ success: boolean; data?: Post; error?: string }> {
    try {
        const res = await fetch('/data/posts.json');
        if (!res.ok) throw new Error('Failed to fetch posts');

        const posts: Post[] = await res.json();
        const post = posts.find((p) => String(p._id) === id);

        if (!post) {
            return {
                success: false,
                error: `Không tìm thấy bài viết với id = ${id}`,
            };
        }

        return {
            success: true,
            data: post,
        };
    } catch (error: any) {
        console.error('Fetch post by id error:', error);
        return {
            success: false,
            error: error.message || 'Lỗi không xác định khi lấy bài viết theo ID',
        };
    }
}

export async function getRandomPosts(count: number): Promise<{ success: boolean; data?: Post[]; error?: string }> {
    const posts = await fetchPosts();
    if (!posts.success || !posts.data) {
        return { success: false, error: 'Failed to fetch posts' };
    }

    // Shuffle posts
    const shuffledPosts = posts.data.sort(() => 0.5 - Math.random());
    const selectedPosts = shuffledPosts.slice(0, count);

    return { success: true, data: selectedPosts };
}
