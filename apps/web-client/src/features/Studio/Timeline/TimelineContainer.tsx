import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { togglePlay, setCurrentTime } from '../../../store/slices/timelineSlice';
import { Ruler } from './Ruler';
import { Playhead } from './Playhead';
import { VideoTrack } from './VideoTrack';
import { AudioTrack } from './AudioTrack';

export const TimelineContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { isPlaying, currentTimeMs, totalDurationMs, scenes } = useSelector((state: RootState) => state.timeline);
  const [zoomScale, setZoomScale] = useState<number>(1);

  return (
    <div style={{
      height: '220px',
      backgroundColor: '#161629',
      borderTop: '1px solid #2E2E48',
      display: 'flex',
      flexDirection: 'column',
      color: '#FFFFFF',
      boxSizing: 'border-box',
      userSelect: 'none',
    }}>
      {/* Toolbar Kontrol Timeline (Play/Pause, Zoom) */}
      <div style={{
        height: '40px',
        backgroundColor: '#1F1F38',
        borderBottom: '1px solid #2E2E48',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => dispatch(togglePlay())}
            style={{
              backgroundColor: '#FF5A5F',
              color: '#FFF',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 12px',
              fontWeight: 600,
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
          <span style={{ fontSize: '12px', color: '#A0A0B0' }}>
            Waktu: {(currentTimeMs / 1000).toFixed(2)}s / {(totalDurationMs / 1000).toFixed(2)}s
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: '#A0A0B0' }}>Zoom:</span>
          <input 
            type="range" 
            min="0.5" 
            max="3" 
            step="0.1" 
            value={zoomScale} 
            onChange={(e) => setZoomScale(parseFloat(e.target.value))}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Area Visual Track & Ruler */}
      <div style={{ flex: 1, position: 'relative', overflowX: 'auto', overflowY: 'auto' }}>
        <Ruler durationMs={totalDurationMs} zoomScale={zoomScale} />
        <Playhead currentTimeMs={currentTimeMs} totalDurationMs={totalDurationMs} />

        {/* Daftar Track */}
        <div style={{ padding: '8px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <VideoTrack 
            trackName="Visual / Scene Track" 
            items={scenes.map((s, idx) => ({ id: s.id, name: s.name, startTime: idx * 5000, duration: s.duration }))} 
            zoomScale={zoomScale} 
          />
          <AudioTrack 
            trackName="Background Music" 
            audioUrl="" 
            startTime={0} 
            duration={totalDurationMs} 
            zoomScale={zoomScale} 
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineContainer;
