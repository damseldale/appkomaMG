import React from 'react';

interface UndoRedoControlsProps {
  onUndo?: () => void;
  onRedo?: () => void;
}

export const UndoRedoControls: React.FC<UndoRedoControlsProps> = ({ onUndo, onRedo }) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      <button
        onClick={onUndo}
        style={{
          backgroundColor: '#2E2E48',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '4px',
          padding: '6px 10px',
          cursor: 'pointer',
          fontSize: '12px',
        }}
        title="Undo (Ctrl+Z)"
      >
        ↩ Undo
      </button>
      <button
        onClick={onRedo}
        style={{
          backgroundColor: '#2E2E48',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '4px',
          padding: '6px 10px',
          cursor: 'pointer',
          fontSize: '12px',
        }}
        title="Redo (Ctrl+Y)"
      >
        Redo ↪
      </button>
    </div>
  );
};

export default UndoRedoControls;
