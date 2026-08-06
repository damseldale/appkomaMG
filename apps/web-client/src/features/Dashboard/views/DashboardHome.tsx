import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Dashboard/Sidebar'; // Atau sesuaikan path jika di views/
import { TemplateGrid, TemplateItem } from '../components/TemplateGrid';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectsAPI } from '../../../api/projects.api';

// Data tiruan untuk contoh template awal
const DUMMY_TEMPLATES: TemplateItem[] = [
  { id: 'tpl-1', title: 'Explainer Video SaaS', category: 'Business', thumbnailUrl: '' },
  { id: 'tpl-2', title: 'Social Media Promo', category: 'Marketing', thumbnailUrl: '' },
  { id: 'tpl-3', title: 'Educational Whiteboard', category: 'Education', thumbnailUrl: '' },
];

export const DashboardHome: React.FC = () => {
  const navigate = useNavigate();
  const [recentProjects, setRecentProjects] = useState([
    { id: 'proj-1', title: 'Animasi Presentasi Kantor', updatedAt: '2 jam lalu', thumbnail: '' },
    { id: 'proj-2', title: 'Iklan Produk Kuliner', updatedAt: 'Kemarin', thumbnail: '' },
  ]);

  const handleCreateNewProject = async () => {
    try {
      // Panggil API untuk membuat proyek baru kosong
      const res = await ProjectsAPI.createProject('Proyek Tanpa Judul');
      navigate(`/studio/${res.id || 'new-project-123'}`);
    } catch (err) {
      // Fallback navigasi langsung jika backend belum aktif
      navigate(`/studio/new-project-123`);
    }
  };

  const handleDeleteProject = (id: string) => {
    setRecentProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', backgroundColor: '#10101E', color: '#FFFFFF' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Header Sambutan & Tombol Buat Video */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '26px', fontWeight: 700 }}>Selamat Datang Kembali! 👋</h1>
            <p style={{ margin: '6px 0 0 0', color: '#A0A0B0', fontSize: '14px' }}>Mau buat video animasi apa hari ini?</p>
          </div>
          <button
            onClick={handleCreateNewProject}
            style={{
              backgroundColor: '#FF5A5F',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(255,90,95,0.4)',
              transition: 'transform 0.1s ease',
            }}
          >
            + Buat Video Baru
          </button>
        </div>

        {/* Section Template Pilihan */}
        <TemplateGrid 
          templates={DUMMY_TEMPLATES} 
          onSelectTemplate={(tplId) => navigate(`/studio/template-${tplId}`)} 
        />

        {/* Section Proyek Terbaru */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '16px', color: '#FFFFFF' }}>Proyek Terakhir Anda</h3>
            <span 
              onClick={() => navigate('/dashboard/projects')} 
              style={{ fontSize: '13px', color: '#FF5A5F', cursor: 'pointer' }}
            >
              Lihat Semua
            </span>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px',
          }}>
            {recentProjects.map((proj) => (
              <ProjectCard 
                key={proj.id}
                id={proj.id}
                title={proj.title}
                updatedAt={proj.updatedAt}
                thumbnail={proj.thumbnail}
                onDelete={handleDeleteProject}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;
