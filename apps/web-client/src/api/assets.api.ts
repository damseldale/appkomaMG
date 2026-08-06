import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY_URL || 'http://localhost:5000/api',
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const AssetsAPI = {
  /** Ambil aset dari library (Bisa aset sistem/bawaan atau aset upload user sendiri) */
  getLibrary: async (category: 'images' | 'audio' | 'characters' | 'props', isUserAsset = false) => {
    const response = await api.get(`/assets`, {
      params: { category, isUserAsset }
    });
    return response.data;
  },

  /** 
   * Upload file (Gambar/Audio) menggunakan FormData.
   * Dilengkapi dengan onUploadProgress untuk animasi loading bar di UI.
   */
  uploadUserAsset: async (file: File, category: string, onProgress?: (percent: number) => void) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);

    const response = await api.post('/assets/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total && onProgress) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(percentCompleted);
        }
      },
    });
    
    // Mengembalikan URL S3 dari backend
    return response.data; 
  },

  deleteUserAsset: async (assetId: string) => {
    const response = await api.delete(`/assets/${assetId}`);
    return response.data;
  },
};
