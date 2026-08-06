import React from 'react';

export interface ContextMenuItem {
  label: string;
  onClick: () => void;
  isDanger?: boolean;
}

interface ContextMenuProps {
  x: number;
  y: number;
  items: ContextMenuItem[];
  onClose: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, items, onClose }) => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
      }}
      onClick={onClose}
    >
      <div 
        style={{
          position: 'absolute',
          top: y,
          left: x,
          backgroundColor: '#1F1F38',
          border: '1px solid #2E2E48',
          borderRadius: '6px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
          width: '160px',
          overflow: 'hidden',
          padding: '4px 0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              item.onClick();
              onClose();
            }}
            style={{
              padding: '8px 16px',
              fontSize: '13px',
              color: item.isDanger ? '#E63946' : '#FFFFFF',
              cursor: 'pointer',
              transition: 'background 0.1s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2E2E48')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
