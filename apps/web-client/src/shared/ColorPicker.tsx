import React from 'react';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  label?: string;
}

const PRESET_COLORS = ['#FF5A5F', '#3A86FF', '#8338EC', '#FF006E', '#FB5607', '#FFBE0B', '#06D6A0', '#000000', '#FFFFFF'];

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange, label }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && <span style={{ fontSize: '12px', color: '#A0A0B0' }}>{label}</span>}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="color" 
          value={color} 
          onChange={(e) => onChange(e.target.value)}
          style={{ width: '36px', height: '36px', border: 'none', background: 'none', cursor: 'pointer' }}
        />
        <input 
          type="text" 
          value={color} 
          onChange={(e) => onChange(e.target.value)}
          style={{
            backgroundColor: '#161629',
            border: '1px solid #2E2E48',
            color: '#FFF',
            padding: '6px 10px',
            borderRadius: '4px',
            width: '90px',
            fontSize: '12px'
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '4px', marginTop: '4px', flexWrap: 'wrap' }}>
        {PRESET_COLORS.map((preset) => (
          <div
            key={preset}
            onClick={() => onChange(preset)}
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: preset,
              borderRadius: '4px',
              cursor: 'pointer',
              border: color === preset ? '2px solid #FFF' : '1px solid #2E2E48'
            }}
          />
        ))}
      </div>
    </div>
  );
};
