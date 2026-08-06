import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY_URL || 'http://localhost:5000/api',
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const RenderAPI = {
  /** 
   * Memicu proses render.
   * Ini tidak langsung mengembalikan MP4, tapi mengembalikan JobID yang masuk ke RabbitMQ.
   */
  startRenderQueue: async (projectId: string, resolution: '720p' | '1080p' = '1080p') => {
    const response = await api.post('/render/start', {
      projectId,
      resolution,
    });
    return response.data; // Contoh return: { jobId: "job_12345", status: "queued" }
  },

  /** 
   * Cek status render berdasarkan JobID.
   * UI akan memanggil API ini setiap 3-5 detik selama loading screen render.
   */
  getRenderStatus: async (jobId: string) => {
    const response = await api.get(`/render/status/${jobId}`);
    // Contoh return: { status: "processing", progress: 45 } 
    // atau { status: "completed", downloadUrl: "https://s3.../video.mp4" }
    return response.data;
  },

  /** Mengambil riwayat video yang pernah dirender (Export History) */
  getRenderHistory: async (projectId: string) => {
    const response = await api.get(`/render/history/${projectId}`);
    return response.data;
  }
};
