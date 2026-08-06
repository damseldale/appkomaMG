import React from 'react';

export const ActionSettingsPanel: React.FC = () => {
  return (
    <div style={{
      width: '280px',
      height: 'calc(100vh - 260px)',
      backgroundColor: '#161629',
      borderLeft: '1px solid #2E2E48',
      display: 'flex',
      flexDirection: 'column',
      color: '#FFFFFF',
      boxSizing: 'border-box',
      padding: '16px',
      gap: '16px',
      overflowY: 'auto',
    }}>
      <h3 style={{ margin: 0, fontSize: '15px', borderBottom: '1px solid #2E2E48', paddingBottom: '8px' }}>
        Animasi & Aksi
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '12px', color: '#A0A0B0' }}>Efek Masuk (Entrance)</label>
          <select style={{ backgroundColor: '#1F1F38', border: '1px solid #2E2E48', color: '#FFF', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>
            <option value="fade">Fade In</option>
            <option value="slide">Slide From Left</option>
            <option value="pop">Pop / Zoom In</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '12px', color: '#A0A0B0' }}>Ekspresi Karakter</label>
          <select style={{ backgroundColor: '#1F1F38', border: '1px solid #2E2E48', color: '#FFF', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>
            <option value="happy">Senang (Happy)</option>
            <option value="sad">Sedih (Sad)</option>
            <option value="angry">Marah (Angry)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ActionSettingsPanel;
