import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ProjectCard } from '../components/ProjectCard';

export const MyProjects: React.FC = () => {
  const [search, setSearch] = useState('');
  const [projects, setProjects] = useState([
    { id: 'proj-1', title: 'Animasi Presentasi Kantor', updatedAt: '2 jam lalu', thumbnail: '' },
    { id: 'proj-2', title: 'Iklan Produk Kuliner', updatedAt: 'Kemarin', thumbnail: '' },
    { id: 'proj-3', title: 'Tutorial Video Pembelajaran', updatedAt: '3 hari lalu', thumbnail: '' },
  ]);

  const filteredProjects = projects.filter((p) => 
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', backgroundColor: '#10101E', color: '#FFFFFF' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Semua Proyek Saya</h1>
            <p style={{ margin: '4px 0 0 0', color: '#A0A0B0', fontSize: '13px' }}>Kelola, ubah, atau hapus video animasi Anda.</p>
          </div>
          <input 
            type="text" 
            placeholder="Cari proyek..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              backgroundColor: '#1F1F38',
              border: '1px solid #2E2E48',
              color: '#FFF',
              padding: '10px 16px',
              borderRadius: '6px',
              width: '250px',
              fontSize: '13px',
            }}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <ProjectCard 
                key={proj.id}
                id={proj.id}
                title={proj.title}
                updatedAt={proj.updatedAt}
                thumbnail={proj.thumbnail}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p style={{ color: '#A0A0B0', fontSize: '14px' }}>Tidak ada proyek yang ditemukan.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default MyProjects;
