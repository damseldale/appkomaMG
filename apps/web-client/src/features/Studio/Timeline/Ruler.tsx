import React from 'react';

interface RulerProps {
  durationMs: number;
  zoomScale: number;
}

export const Ruler: React.FC<RulerProps> = ({ durationMs, zoomScale }) => {
  const pixelsPerMs = (2 / 100) * zoomScale;
  const totalWidth = durationMs * pixelsPerMs;
  
  // Buat marker setiap 1 detik (1000ms)
  const markers = [];
  for (let ms = 0; ms <= durationMs; ms += 1000) {
    markers.push({
      timeMs: ms,
      label: `${ms / 1000}s`,
      left: ms * pixelsPerMs,
    });
  }

  return (
    <div style={{
      height: '24px',
      backgroundColor: '#1F1F38',
      borderBottom: '1px solid #2E2E48',
      position: 'relative',
      width: `${Math.max(totalWidth, 1000)}px`,
    }}>
      {markers.map((marker) => (
        <div
          key={marker.timeMs}
          style={{
            position: 'absolute',
            left: `${marker.left}px`,
            top: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingLeft: '4px',
          }}
        >
          <span style={{ fontSize: '9px', color: '#A0A0B0' }}>{marker.label}</span>
          <div style={{ width: '1px', height: '6px', backgroundColor: '#4A4A6A' }} />
        </div>
      ))}
    </div>
  );
};

export default Ruler;
