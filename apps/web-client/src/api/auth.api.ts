import axios from 'axios';

// Konfigurasi dasar Axios (Sebaiknya dipisah ke file apiClient.ts, tapi saya gabungkan untuk konteks)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY_URL || 'http://localhost:5000/api',
  withCredentials: true, // Penting jika menggunakan cookie HTTP-Only untuk refresh token
});

// Interceptor untuk menyisipkan Access Token otomatis ke setiap request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const AuthAPI = {
  /** Login user dan dapatkan token */
  login: async (email: string, password: string) => {
    const response = await api.post('/users/auth/login', { email, password });
    if (response.data.access_token) {
      localStorage.setItem('access_token', response.data.access_token);
    }
    return response.data;
  },

  /** Registrasi user baru */
  register: async (name: string, email: string, password: string) => {
    const response = await api.post('/users/auth/register', { name, email, password });
    return response.data;
  },

  /** Ambil profil user yang sedang login (untuk mengecek auth state saat refresh page) */
  getMe: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },

  /** Logout dan hapus token */
  logout: () => {
    localStorage.removeItem('access_token');
    // Opsional: Panggil API logout di backend jika perlu mematikan session/refresh token
    return api.post('/users/auth/logout');
  },
};
