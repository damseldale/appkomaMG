import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// LAZY LOADING KOMPONEN
// Memecah bundle Javascript agar loading awal aplikasi jauh lebih cepat
// ----------------------------------------------------------------------
const DashboardHome = lazy(() => import('./features/Dashboard/views/DashboardHome'));
const StudioEditor = lazy(() => import('./features/Studio/views/StudioEditor'));
const CharacterBuilderHome = lazy(() => import('./features/CharacterBuilder/views/CharacterBuilderHome'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Jika user mengakses root (nama-domain.com/), langsung arahkan ke Dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* ----------------- HALAMAN DASHBOARD ----------------- */}
      <Route path="/dashboard" element={<DashboardHome />} />
      
      {/* ----------------- HALAMAN STUDIO EDITOR ----------------- */}
      {/* Membutuhkan parameter ID Project di URL agar editor tahu data mana yang diload */}
      <Route path="/studio/:projectId" element={<StudioEditor />} />
      
      {/* ----------------- HALAMAN PEMBUAT KARAKTER ----------------- */}
      <Route path="/character-builder" element={<CharacterBuilderHome />} />
      
      {/* ----------------- HALAMAN 404 (TIDAK DITEMUKAN) ----------------- */}
      <Route 
        path="*" 
        element={
          <div style={{ color: 'white', textAlign: 'center', marginTop: '20vh' }}>
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Sepertinya Anda tersesat dari timeline utama.</p>
          </div>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
