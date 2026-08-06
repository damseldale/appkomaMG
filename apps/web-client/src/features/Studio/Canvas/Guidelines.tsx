import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export const Guidelines: React.FC = () => {
  const isEnabled = useSelector((state: RootState) => state.canvas.isGuidelinesEnabled);

  if (!isEnabled) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        zIndex: 10,
      }}
    />
  );
};

export default Guidelines;
