import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

interface SelectorsProps {
  onBringForward?: () => void;
  onSendBackwards?: () => void;
  onDelete?: () => void;
}

export const Selectors: React.FC<SelectorsProps> = ({ onBringForward, onSendBackwards, onDelete }) => {
  const selectedIds = useSelector((state: RootState) => state.canvas.selectedObjectIds);

  if (selectedIds.length === 0) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#1F1F38',
      border: '1px solid #2E2E48',
      borderRadius: '8px',
      padding: '6px 12px',
      display: 'flex',
      gap: '8px',
      zIndex: 100,
      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
      alignItems: 'center',
    }}>
      <span style={{ fontSize: '12px', color: '#A0A0B0', marginRight: '4px' }}>
        {selectedIds.length} objek dipilih
      </span>
      <button 
        onClick={onBringForward}
        style={{ background: '#2E2E48', border: 'none', color: '#FFF', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
        title="Pindahkan ke Depan"
      >
        Bring Forward
      </button>
      <button 
        onClick={onSendBackwards}
        style={{ background: '#2E2E48', border: 'none', color: '#FFF', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
        title="Pindahkan ke Belakang"
      >
        Send Backward
      </button>
      <button 
        onClick={onDelete}
        style={{ background: '#E63946', border: 'none', color: '#FFF', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}
        title="Hapus Objek"
      >
        Hapus
      </button>
    </div>
  );
};

export default Selectors;
