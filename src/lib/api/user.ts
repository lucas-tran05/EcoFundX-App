export interface User {
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

export interface UserResponse {
    success: boolean;
    data?: User;
    error?: string;
}

export async function fetchUserById(id: string): Promise<UserResponse> {
    try {
        const res = await fetch('/data/user.json');
        if (!res.ok) throw new Error('Failed to fetch users');

        const users: User[] = await res.json();
        const user = users.find(u => u.id === id);

        if (!user) {
            return {
                success: false,
                error: `Không tìm thấy user với id = ${id}`,
            };
        }

        return {
            success: true,
            data: user,
        };
    } catch (error: any) {
        console.error('Fetch user by id error:', error);
        return {
            success: false,
            error: error.message || 'Lỗi không xác định khi lấy user',
        };
    }
}
