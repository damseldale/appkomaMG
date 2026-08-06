import React from 'react';

interface KeyframeNodeProps {
  positionPercent: number; // Posisi persentase di dalam klip (0 - 100)
  onClick?: () => void;
}

export const KeyframeNode: React.FC<KeyframeNodeProps> = ({ positionPercent, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        left: `${positionPercent}%`,
        transform: 'translate(-50%, -50%) rotate(45deg)',
        width: '10px',
        height: '10px',
        backgroundColor: '#FFBE0B',
        border: '1px solid #FFFFFF',
        cursor: 'pointer',
        zIndex: 5,
      }}
      title="Keyframe Animasi"
    />
  );
};

export default KeyvalnodeComponent => KeyframeNode;
