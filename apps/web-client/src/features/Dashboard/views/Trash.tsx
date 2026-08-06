import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';

export const Trash: React.FC = () => {
  const [trashItems, setTrashItems] = useState([
    { id: 'trash-1', title: 'Video Animasi Lama', deletedAt: '5 hari lalu' },
  ]);

  const handleRestore = (id: string) => {
    setTrashItems(prev => prev.filter(item => item.id !== id));
    alert('Proyek berhasil dipulihkan!');
  };

  const handlePermanentDelete = (id: string) => {
    setTrashItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', backgroundColor: '#10101E', color: '#FFFFFF' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>Tempat Sampah (Trash)</h1>
          <p style={{ margin: '4px 0 0 0', color: '#A0A0B0', fontSize: '13px' }}>Proyek yang dihapus akan otomatis dibersihkan setelah 30 hari.</p>
        </div>

        <div style={{
          backgroundColor: '#1F1F38',
          borderRadius: '8px',
          border: '1px solid #2E2E48',
          overflow: 'hidden'
        }}>
          {trashItems.length > 0 ? (
            trashItems.map((item) => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  borderBottom: '1px solid #2E2E48',
                }}
              >
                <div>
                  <h4 style={{ margin: 0, fontSize: '14px', color: '#FFFFFF' }}>{item.title}</h4>
                  <span style={{ fontSize: '11px', color: '#A0A0B0' }}>Dihapus: {item.deletedAt}</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleRestore(item.id)}
                    style={{
                      backgroundColor: '#2E2E48',
                      color: '#FFF',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    Pulihkan
                  </button>
                  <button
                    onClick={() => handlePermanentDelete(item.id)}
                    style={{
                      backgroundColor: '#E63946',
                      color: '#FFF',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    Hapus Permanen
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '40px', textAlign: 'center', color: '#A0A0B0', fontSize: '14px' }}>
              Tempat sampah Anda kosong.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Trash;
