import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        backgroundColor: '#1F1F38',
        borderRadius: '12px',
        width: '450px',
        maxWidth: '90%',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        border: '1px solid #2E2E48',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}>
        <div style={{
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #2E2E48',
        }}>
          <h3 style={{ margin: 0, fontSize: '18px' }}>{title}</h3>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#A0A0B0', cursor: 'pointer', fontSize: '18px' }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: '20px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
