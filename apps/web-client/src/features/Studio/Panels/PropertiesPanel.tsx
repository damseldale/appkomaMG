import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { ColorPicker } from '../../../shared/ColorPicker';

export const PropertiesPanel: React.FC = () => {
  const selectedIds = useSelector((state: RootState) => state.canvas.selectedObjectIds);

  if (selectedIds.length === 0) {
    return (
      <div style={{
        width: '280px',
        height: 'calc(100vh - 260px)',
        backgroundColor: '#161629',
        borderLeft: '1px solid #2E2E48',
        padding: '20px',
        color: '#A0A0B0',
        fontSize: '13px',
        boxSizing: 'border-box',
      }}>
        Pilih objek di kanvas untuk mengatur propertinya.
      </div>
    );
  }

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
        Properti Objek
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ColorPicker 
          label="Warna Objek" 
          color="#FF5A5F" 
          onChange={(color) => console.log('Warna diubah:', color)} 
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '12px', color: '#A0A0B0' }}>Opasitas</label>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            defaultValue="1" 
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;
