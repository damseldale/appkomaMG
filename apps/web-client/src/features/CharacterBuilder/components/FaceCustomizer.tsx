import React from 'react';

interface FaceCustomizerProps {
  onSelectFacePart: (partType: string, value: string) => void;
}

export const FaceCustomizer: React.FC<FaceCustomizerProps> = ({ onSelectFacePart }) => {
  const skinTones = ['#F5D0B1', '#E0AC69', '#C68642', '#8D5524', '#3F2204'];
  const hairStyles = ['Short Hair', 'Long Hair', 'Curly Hair', 'Bald'];
  const eyesTypes = ['Normal', 'Happy', 'Winking', 'Surprised'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#FFF' }}>
      <h4 style={{ margin: 0, fontSize: '14px', color: '#FF5A5F' }}>Pengaturan Wajah & Kepala</h4>

      {/* Warna Kulit */}
      <div>
        <label style={{ fontSize: '12px', color: '#A0A0B0', display: 'block', marginBottom: '8px' }}>Warna Kulit</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          {skinTones.map((color) => (
            <div
              key={color}
              onClick={() => onSelectFacePart('skinTone', color)}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: color,
                cursor: 'pointer',
                border: '2px solid #2E2E48',
              }}
            />
          ))}
        </div>
      </div>

      {/* Gaya Rambut */}
      <div>
        <label style={{ fontSize: '12px', color: '#A0A0B0', display: 'block', marginBottom: '8px' }}>Gaya Rambut</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {hairStyles.map((hair) => (
            <button
              key={hair}
              onClick={() => onSelectFacePart('hair', hair)}
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
              {hair}
            </button>
          ))}
        </div>
      </div>

      {/* Bentuk Mata */}
      <div>
        <label style={{ fontSize: '12px', color: '#A0A0B0', display: 'block', marginBottom: '8px' }}>Bentuk Mata</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {eyesTypes.map((eye) => (
            <button
              key={eye}
              onClick={() => onSelectFacePart('eyes', eye)}
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
              {eye}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaceCustomizer;
