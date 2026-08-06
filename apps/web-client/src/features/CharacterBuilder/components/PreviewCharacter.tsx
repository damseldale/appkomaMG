import React from 'react';

interface CharacterConfig {
  skinTone?: string;
  hair?: string;
  eyes?: string;
  bodyType?: string;
  outfit?: string;
}

interface PreviewCharacterProps {
  config: CharacterConfig;
}

export const PreviewCharacter: React.FC<PreviewCharacterProps> = ({ config }) => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      backgroundColor: '#161629',
      borderRadius: '12px',
      border: '1px solid #2E2E48',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Representasi Visual Karakter */}
      <div style={{
        width: '120px',
        height: '180px',
        backgroundColor: config.skinTone || '#E0AC69',
        borderRadius: '60px 60px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        position: 'relative',
      }}>
        <div style={{ fontSize: '10px', color: '#111', fontWeight: 700, textAlign: 'center', padding: '0 4px' }}>
          {config.hair || 'Default Hair'}
        </div>
        <div style={{ fontSize: '9px', color: '#333', marginTop: '10px' }}>
          {config.outfit || 'Casual Outfit'}
        </div>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', color: '#FFF' }}>Preview Karakter Anda</h4>
        <span style={{ fontSize: '11px', color: '#A0A0B0' }}>Postur: {config.bodyType || 'Standard'}</span>
      </div>
    </div>
  );
};

export default PreviewCharacter;
