import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY_URL || 'http://localhost:5000/api',
});
// (Gunakan interceptor token yang sama seperti di auth.api.ts)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const ProjectsAPI = {
  /** Ambil semua list project milik user untuk di halaman Dashboard */
  getMyProjects: async (page = 1, limit = 10) => {
    const response = await api.get(`/projects?page=${page}&limit=${limit}`);
    return response.data;
  },

  /** Buat project baru yang kosong (atau dari template) */
  createProject: async (title: string, templateId?: string) => {
    const response = await api.post('/projects', { title, templateId });
    return response.data;
  },

  /** Load data lengkap JSON animasi untuk masuk ke Studio Editor */
  getProjectById: async (projectId: string) => {
    const response = await api.get(`/projects/${projectId}`);
    return response.data;
  },

  /** 
   * Auto-save Canvas JSON State. 
   * Payload ini akan sangat besar, berisi seluruh koordinat dan timeline animasi.
   */
  updateProjectState: async (projectId: string, stateData: any, thumbnailDataUrl?: string) => {
    const response = await api.put(`/projects/${projectId}/state`, {
      state: stateData, // JSON raksasa dari Fabric.js / Redux Store
      thumbnail: thumbnailDataUrl, // Snapshot canvas terakhir
    });
    return response.data;
  },

  /** Hapus (Pindahkan ke Trash) */
  deleteProject: async (projectId: string) => {
    const response = await api.delete(`/projects/${projectId}`);
    return response.data;
  },
};
