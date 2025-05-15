export async function loginUser(email: string, password: string) {
    try {
        const res = await fetch('/data/user.json');
        const users = await res.json();

        const user = users.find(
            (u: any) => u.email === email && u.password === password
        );

        if (user) {
            return {
                success: true,
                data: {
                    message: 'Đăng nhập thành công',
                    user: {
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        phone: user.phone,
                        avatar_url: user.avatar_url,
                    },
                },
            };
        } else {
            return {
                success: false,
                data: { message: 'Email hoặc mật khẩu không đúng' },
            };
        }
    } catch (error) {
        console.error('Login error:', error);
        return {
            success: false,
            data: { message: 'Lỗi kết nối đến server' },
        };
    }
}
