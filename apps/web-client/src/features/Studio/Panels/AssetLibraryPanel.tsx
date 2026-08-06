import React, { useState } from 'react';

interface AssetLibraryPanelProps {
  onAddText: () => void;
  onAddImage: (url: string) => void;
}

export const AssetLibraryPanel: React.FC<AssetLibraryPanelProps> = ({ onAddText, onAddImage }) => {
  const [activeTab, setActiveTab] = useState<'props' | 'characters' | 'text' | 'audio'>('props');

  const DUMMY_ASSETS = {
    props: [
      { id: 'p1', name: 'Laptop', url: 'https://via.placeholder.com/150' },
      { id: 'p2', name: 'Kopi', url: 'https://via.placeholder.com/150' },
    ],
    characters: [
      { id: 'c1', name: 'Karakter Pria', url: 'https://via.placeholder.com/150' },
      { id: 'c2', name: 'Karakter Wanita', url: 'https://via.placeholder.com/150' },
    ],
  };

  return (
    <div style={{
      width: '280px',
      height: 'calc(100vh - 260px)',
      backgroundColor: '#161629',
      borderRight: '1px solid #2E2E48',
      display: 'flex',
      flexDirection: 'column',
      color: '#FFFFFF',
      boxSizing: 'border-box',
    }}>
      {/* Tab Navigasi Kategori */}
      <div style={{ display: 'flex', borderBottom: '1px solid #2E2E48', backgroundColor: '#1F1F38' }}>
        {(['props', 'characters', 'text', 'audio'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: '10px 4px',
              backgroundColor: activeTab === tab ? '#2E2E48' : 'transparent',
              color: activeTab === tab ? '#FFF' : '#A0A0B0',
              border: 'none',
              fontSize: '11px',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'capitalize',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Konten Aset Berdasarkan Tab */}
      <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
        {activeTab === 'text' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={onAddText}
              style={{
                backgroundColor: '#FF5A5F',
                color: '#FFF',
                border: 'none',
                padding: '10px',
                borderRadius: '6px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '13px',
              }}
            >
              + Tambah Judul Teks
            </button>
          </div>
        )}

        {(activeTab === 'props' || activeTab === 'characters') && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {DUMMY_ASSETS[activeTab].map((item) => (
              <div
                key={item.id}
                onClick={() => onAddImage(item.url)}
                style={{
                  backgroundColor: '#1F1F38',
                  borderRadius: '6px',
                  padding: '8px',
                  border: '1px solid #2E2E48',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <div style={{ height: '70px', backgroundColor: '#2E2E48', borderRadius: '4px', marginBottom: '6px' }} />
                <span style={{ fontSize: '11px', color: '#A0A0B0' }}>{item.name}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'audio' && (
          <div style={{ color: '#A0A0B0', fontSize: '12px', textAlign: 'center', marginTop: '20px' }}>
            Belum ada trek audio tersedia.
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetLibraryPanel;
