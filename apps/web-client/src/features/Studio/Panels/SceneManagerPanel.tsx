import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setScenes } from '../../../store/slices/timelineSlice';

export const SceneManagerPanel: React.FC = () => {
  const dispatch = useDispatch();
  const { scenes, activeSceneId } = useSelector((state: RootState) => state.timeline);

  const handleAddScene = () => {
    const newScene = {
      id: `scene-${Date.now()}`,
      name: `Scene ${scenes.length + 1}`,
      duration: 5000,
      backgroundColor: '#ffffff',
      transitionOut: { type: 'fade' as const, duration: 500 },
      elements: [],
      order: scenes.length,
    };
    dispatch(setScenes([...scenes, newScene]));
  };

  return (
    <div style={{
      width: '220px',
      height: 'calc(100vh - 260px)',
      backgroundColor: '#161629',
      borderRight: '1px solid #2E2E48',
      display: 'flex',
      flexDirection: 'column',
      color: '#FFFFFF',
      boxSizing: 'border-box',
      padding: '16px',
      gap: '12px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '14px' }}>Scene Manager</h3>
        <button
          onClick={handleAddScene}
          style={{
            backgroundColor: '#2E2E48',
            color: '#FFF',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            cursor: 'pointer',
          }}
        >
          + Scene
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {scenes.map((scene, idx) => (
          <div
            key={scene.id}
            style={{
              padding: '10px',
              backgroundColor: activeSceneId === scene.id ? '#2E2E48' : '#1F1F38',
              border: '1px solid #2E2E48',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 600 }}>{idx + 1}. {scene.name}</span>
            <div style={{ fontSize: '10px', color: '#A0A0B0', marginTop: '2px' }}>{scene.duration / 1000}s</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SceneManagerPanel;
