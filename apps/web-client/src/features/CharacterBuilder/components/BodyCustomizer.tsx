import React from 'react';

interface BodyCustomizerProps {
  onSelectBodyPart: (partType: string, value: string | number) => void;
}

export const BodyCustomizer: React.FC<BodyCustomizerProps> = ({ onSelectBodyPart }) => {
  const bodyTypes = [
    { id: 'standard', name: 'Standar' },
    { id: 'athletic', name: 'Atletis' },
    { id: 'chubby', name: 'Berisi' },
  ];

  const heights = [
    { id: 'short', name: 'Pendek' },
    { id: 'medium', name: 'Sedang' },
    { id: 'tall', name: 'Tinggi' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#FFF' }}>
      <h4 style={{ margin: 0, fontSize: '14px', color: '#FF5A5F' }}>Pengaturan Postur Tubuh</h4>

      {/* Bentuk Tubuh */}
      <div>
        <label style={{ fontSize: '12px', color: '#A0A0B0', display: 'block', marginBottom: '8px' }}>Bentuk Tubuh</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {bodyTypes.map((body) => (
            <button
              key={body.id}
              onClick={() => onSelectBodyPart('bodyType', body.id)}
              style={{
                backgroundColor: '#1F1F38',
                color: '#FFF',
                border: '1px solid #2E2E48',
                padding: '8px',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              {body.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tinggi Badan */}
      <div>
        <label style={{ fontSize: '12px', color: '#A0A0B0', display: 'block', marginBottom: '8px' }}>Tinggi Badan</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {heights.map((h) => (
            <button
              key={h.id}
              onClick={() => onSelectBodyPart('height', h.id)}
              style={{
                backgroundColor: '#1F1F38',
                color: '#FFF',
                border: '1px solid #2E2E48',
                padding: '8px',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              {h.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyCustomizer;
