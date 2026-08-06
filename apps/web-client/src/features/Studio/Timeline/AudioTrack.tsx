import React from 'react';

interface AudioTrackProps {
  trackName: string;
  audioUrl: string;
  startTime: number;
  duration: number;
  zoomScale: number;
}

export const AudioTrack: React.FC<AudioTrackProps> = ({ trackName, startTime, duration, zoomScale }) => {
  const pixelsPerMs = (2 / 100) * zoomScale;
  const left = startTime * pixelsPerMs;
  const width = duration * pixelsPerMs;

  return (
    <div style={{ display: 'flex', height: '40px', borderBottom: '1px solid #2E2E48', alignItems: 'center' }}>
      <div style={{ width: '160px', paddingLeft: '16px', fontSize: '12px', color: '#A0A0B0', fontWeight: 600, borderRight: '1px solid #2E2E48', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#1A1A2E' }}>
        🎵 {trackName}
      </div>
      <div style={{ flex: 1, position: 'relative', height: '100%', backgroundColor: '#131322' }}>
        <div
          style={{
            position: 'absolute',
            left: `${left}px`,
            width: `${width}px`,
            height: '32px',
            top: '4px',
            backgroundColor: '#1E3A5F',
            border: '1px solid #3A86FF',
            borderRadius: '4px',
            padding: '4px 8px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '11px', color: '#A0C4FF' }}>🔊 Background Audio Waveform</span>
        </div>
      </div>
    </div>
  );
};

export default AudioTrack;
