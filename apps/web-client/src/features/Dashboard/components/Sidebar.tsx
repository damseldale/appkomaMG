import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Beranda / Proyek', path: '/dashboard', icon: '🏠' },
    { label: 'Character Builder', path: '/character-builder', icon: '👤' },
    { label: 'Brand Kit', path: '/dashboard/brand', icon: '🎨' },
    { label: 'Trash', path: '/dashboard/trash', icon: '🗑️' },
  ];

  return (
    <div style={{
      width: '240px',
      height: '100vh',
      backgroundColor: '#161629',
      borderRight: '1px solid #2E2E48',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 0',
      boxSizing: 'border-box',
    }}>
      <div style={{ padding: '0 20px 20px 20px', borderBottom: '1px solid #2E2E48' }}>
        <h2 style={{ margin: 0, color: '#FF5A5F', fontSize: '20px', fontWeight: 800 }}>AnimakerClone</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '20px 10px', flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
                backgroundColor: isActive ? '#2E2E48' : 'transparent',
                color: isActive ? '#FFFFFF' : '#A0A0B0',
                fontWeight: isActive ? 600 : 400,
                fontSize: '14px',
                transition: 'background 0.1s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = '#1F1F38';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
      <div style={{ padding: '0 20px' }}>
        <button
          onClick={() => {
            localStorage.removeItem('access_token');
            navigate('/dashboard');
          }}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'transparent',
            border: '1px solid #2E2E48',
            color: '#E63946',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '13px',
          }}
        >
          Keluar
        </button>
      </div>
    </div>
  );
};
