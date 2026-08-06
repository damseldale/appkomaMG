import React from 'react';

interface TrackItemData {
  id: string;
  name: string;
  startTime: number;
  duration: number;
}

interface VideoTrackProps {
  trackName: string;
  items: TrackItemData[];
  zoomScale: number;
}

export const VideoTrack: React.FC<VideoTrackProps> = ({ trackName, items, zoomScale }) => {
  const pixelsPerMs = (2 / 100) * zoomScale;

  return (
    <div style={{ display: 'flex', height: '40px', borderBottom: '1px solid #2E2E48', alignItems: 'center' }}>
      {/* Label Sisi Kiri Track */}
      <div style={{ width: '160px', paddingLeft: '16px', fontSize: '12px', color: '#A0A0B0', fontWeight: 600, borderRight: '1px solid #2E2E48', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#1A1A2E' }}>
        🎬 {trackName}
      </div>
      
      {/* Area Klip Timeline */}
      <div style={{ flex: 1, position: 'relative', height: '100%', backgroundColor: '#131322' }}>
        {items.map((item) => {
          const left = item.startTime * pixelsPerMs;
          const width = item.duration * pixelsPerMs;
          return (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                left: `${left}px`,
                width: `${width}px`,
                height: '32px',
                top: '4px',
                backgroundColor: '#2E2E48',
                border: '1px solid #4A4A6A',
                borderRadius: '4px',
                padding: '4px 8px',
                boxSizing: 'border-box',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '11px', color: '#FFFFFF', whiteSpace: 'nowrap' }}>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoTrack;
