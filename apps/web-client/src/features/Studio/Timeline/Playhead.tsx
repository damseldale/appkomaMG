import React from 'react';

interface PlayheadProps {
  currentTimeMs: number;
  totalDurationMs: number;
}

export const Playhead: React.FC<PlayheadProps> = ({ currentTimeMs, totalDurationMs }) => {
  // Kalkulasi posisi pixel berdasarkan waktu (asumsi 100ms = 2px pada zoom normal)
  const pixelsPerMs = 2 / 100;
  const leftPosition = currentTimeMs * pixelsPerMs;

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: `${leftPosition}px`,
      width: '2px',
      height: '100%',
      backgroundColor: '#FF5A5F',
      zIndex: 50,
      pointerEvents: 'none',
    }}>
      {/* Kepala Segitiga Penanda */}
      <div style={{
        position: 'absolute',
        top: '-2px',
        left: '-5px',
        width: 0,
        height: 0,
        borderLeft: '6px solid transparent',
        borderRight: '6px solid transparent',
        borderTop: '8px solid #FF5A5F',
      }} />
    </div>
  );
};

export default Playhead;
