const API_URL = process.env.API_URL || 'http://localhost:8000';
export interface LoginResponse {
    message: string;
    user?: {
        name: string;
        [key: string]: any;
    };
}

// export interface RegisterResponse {
//     message: string;
//     user?: {
//         name: string;
//         [key: string]: any;
//     };
// }

export async function loginUser(
    email: string,
    password: string
): Promise<{ success: boolean; data: LoginResponse }> {
    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include',
        });

        const data: LoginResponse = await res.json();

        return { success: res.ok, data };
    } catch (error) {
        console.error('Login error:', error);
        return {
            success: false,
            data: { message: 'Lỗi kết nối đến server' },
        };
    }
}

// export async function registerUser(
//     name: string,
//     email: string,
//     password: string,
//     acountType: string,
//     phoneNumber: string,
//     bio: string,
//     address: string,
//     website: string,
//     socialLinks: string,
//     avatar: string,
//     companyName: string,
//     companyAddress: string,
//     companyWebsite: string,
//     companyDescription: string,
// ): Promise<{ success: boolean; data: LoginResponse }> {
//     try {
//         const res = await fetch(`${API_URL}/auth/register`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name, email, password }),
//             credentials: 'include',
//         });

//         const data: LoginResponse = await res.json();

//         return { success: res.ok, data };
//     } catch (error) {
//         console.error('Register error:', error);
//         return {
//             success: false,
//             data: { message: 'Lỗi kết nối đến server' },
//         };
//     }
// }
