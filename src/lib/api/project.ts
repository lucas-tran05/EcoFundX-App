// project.ts

export interface Gif {
    id_gif: number;
    img: string;
    title: string;
    description: string;
    price: number;
}

export interface Project {
    id: number;
    title: string;
    tag: string;
    description: string;
    image: string;
    endDate: string; // date dạng string ISO (JSON)
    progress: number;
    amount: number;
    gif: Gif[];
}

export interface ProjectResponse {
    success: boolean;
    data?: Project[];
    error?: string;
}

export async function fetchProjects(): Promise<ProjectResponse> {
    try {
        const res = await fetch('/data/projects.json');
        console.log('Response:', res);
        if (!res.ok) throw new Error('Failed to fetch projects');

        const projects: Project[] = await res.json();

        return {
            success: true,
            data: projects,
        };
    } catch (error: any) {
        console.error('Fetch projects error:', error);
        return {
            success: false,
            error: error.message || 'Lỗi không xác định khi lấy dữ liệu dự án',
        };
    }
}

export async function fetchProjectById(id: number): Promise<{ success: boolean; data?: Project; error?: string }> {
    try {
        const res = await fetch('/data/projects.json');
        if (!res.ok) throw new Error('Failed to fetch projects');

        const projects: Project[] = await res.json();
        const project = projects.find((p) => p.id === id);

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
