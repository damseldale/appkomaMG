import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaceCustomizer } from '../components/FaceCustomizer';
import { BodyCustomizer } from '../components/BodyCustomizer';
import { OutfitSelector } from '../components/OutfitSelector';
import { PreviewCharacter } from '../components/PreviewCharacter';

export const CharacterBuilderHome: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'face' | 'body' | 'outfit'>('face');
  const [config, setConfig] = useState({
    skinTone: '#E0AC69',
    hair: 'Short Hair',
    eyes: 'Normal',
    bodyType: 'standard',
    height: 'medium',
    outfit: 'Casual Hoodie & Jeans',
  });

  const handleUpdateConfig = (key: string, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveCharacter = () => {
    alert('Karakter berhasil disimpan ke Library Anda!');
    navigate('/dashboard');
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#10101E',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      color: '#FFFFFF',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Topbar Navigasi */}
      <div style={{
        height: '56px',
        backgroundColor: '#161629',
        borderBottom: '1px solid #2E2E48',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              backgroundColor: '#2E2E48',
              color: '#FFFFFF',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            ← Dashboard
          </button>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Character Builder Studio</h2>
        </div>
        <button
          onClick={handleSaveCharacter}
          style={{
            backgroundColor: '#FF5A5F',
            color: '#FFFFFF',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '13px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(255,90,95,0.4)',
          }}
        >
          💾 Simpan Karakter
        </button>
      </div>

      {/* Main Workspace */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
      }}>
        {/* Panel Samping Kiri: Tab Pilihan Kustomisasi */}
        <div style={{
          width: '320px',
          backgroundColor: '#161629',
          borderRight: '1px solid #2E2E48',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #2E2E48', backgroundColor: '#1F1F38' }}>
            {(['face', 'body', 'outfit'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: '12px 0',
                  backgroundColor: activeTab === tab ? '#2E2E48' : 'transparent',
                  color: activeTab === tab ? '#FFF' : '#A0A0B0',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            {activeTab === 'face' && (
              <FaceCustomizer 
                onSelectFacePart={(part, val) => handleUpdateConfig(part, val)} 
              />
            )}
            {activeTab === 'body' && (
              <BodyCustomizer 
                onSelectBodyPart={(part, val) => handleUpdateConfig(part, val)} 
              />
            )}
            {activeTab === 'outfit' && (
              <OutfitSelector 
                onSelectOutfit={(part, val) => handleUpdateConfig(part, val)} 
              />
            )}
          </div>
        </div>

        {/* Area Kanan: Pratinjau Karakter (Live Preview) */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
          backgroundColor: '#10101E',
        }}>
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <PreviewCharacter config={config} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterBuilderHome;
