// project.ts

export interface Gif {
    id_gif: string;
    img: string;
    title: string;
    description: string;
    price: number;
}

export interface Project {
    id: string;
    title: string;
    tag: string;
    description: string;
    image: string;
    endDate: string;
    progress: number;
    amount: number;
    author_id: string;
    gif: Gif[];
}

export interface ProjectResponse {
    success: boolean;
    data?: Project[];
    error?: string;
}

export async function fetchProjects(count?: number): Promise<ProjectResponse> {
    try {
        const res = await fetch('/data/projects.json');
        console.log('Response:', res);
        if (!res.ok) throw new Error('Failed to fetch projects');

        const projects: Project[] = await res.json();

        // Nếu count được truyền vào và nhỏ hơn tổng số dự án thì cắt mảng
        const slicedProjects = count && count > 0 ? projects.slice(0, count) : projects;

        return {
            success: true,
            data: slicedProjects,
        };
    } catch (error: any) {
        console.error('Fetch projects error:', error);
        return {
            success: false,
            error: error.message || 'Lỗi không xác định khi lấy dữ liệu dự án',
        };
    }
}


export async function fetchProjectById(id: string): Promise<{ success: boolean; data?: Project; error?: string }> {
    try {
        const res = await fetch('/data/projects.json');
        if (!res.ok) throw new Error('Failed to fetch projects');

        const projects: Project[] = await res.json();
        const project = projects.find((p) => String(p.id) === id);

        if (!project) {
            return {
                success: false,
                error: `Không tìm thấy dự án với id = ${id}`,
            };
        }

        return {
            success: true,
            data: project,
        };
    } catch (error: any) {
        console.error('Fetch project by id error:', error);
        return {
            success: false,
            error: error.message || 'Lỗi không xác định khi lấy dự án theo ID',
        };
    }
}

export async function fetchRandomProjects(count: number): Promise<ProjectResponse> {
    try {
        const res = await fetch('/data/projects.json');
        if (!res.ok) throw new Error('Failed to fetch projects');

        const projects: Project[] = await res.json();

        // Shuffle mảng và chọn `count` phần tử đầu tiên
        const shuffled = projects.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count);

        return {
            success: true,
            data: selected,
        };
    } catch (error: any) {
        console.error('Fetch random projects error:', error);
        return {
            success: false,
            error: error.message || 'Lỗi không xác định khi lấy dự án ngẫu nhiên',
        };
    }
}
