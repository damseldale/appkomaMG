import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Konfigurasi Server Lokal
  server: {
    port: 3000, // Menjalankan frontend di http://localhost:3000
    open: true, // Otomatis membuka browser saat 'npm run dev' dijalankan
  },

  // Konfigurasi Path Alias untuk mempermudah import file
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Konfigurasi Build untuk Production
  build: {
    outDir: 'dist',
    sourcemap: true, // Berguna untuk debugging jika terjadi error di production
    
    // Memecah bundle besar (seperti fabric.js) agar loading awal web lebih ringan
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          fabric: ['fabric'],
          redux: ['@reduxjs/toolkit', 'react-redux']
        }
      }
    }
  }
});
