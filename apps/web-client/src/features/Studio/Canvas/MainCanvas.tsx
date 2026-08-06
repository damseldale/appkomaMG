import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CanvasManager } from '../../../core/engine/CanvasManager';
import { setSelectedObjects } from '../../../store/slices/canvasSlice';
import { RootState } from '../../../store/store';

interface MainCanvasProps {
  width?: number;
  height?: number;
}

export const MainCanvas: React.FC<MainCanvasProps> = ({ width = 1280, height = 720 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasManagerRef = useRef<CanvasManager | null>(null);
  const dispatch = useDispatch();
  const { zoomScale } = useSelector((state: RootState) => state.canvas);

  useEffect(() => {
    if (canvasRef.current) {
      const manager = new CanvasManager(canvasRef.current.id, width, height);
      canvasManagerRef.current = manager;

      // Event listener ketika objek di-klik atau dipilih di kanvas
      manager.canvas.on('selection:created', (e) => {
        const ids = e.selected?.map((obj: any) => obj.id || '').filter(Boolean) || [];
        dispatch(setSelectedObjects(ids));
      });

      manager.canvas.on('selection:updated', (e) => {
        const ids = e.selected?.map((obj: any) => obj.id || '').filter(Boolean) || [];
        dispatch(setSelectedObjects(ids));
      });

      manager.canvas.on('selection:cleared', () => {
        dispatch(setSelectedObjects([]));
      });

      return () => {
        manager.destroy();
      };
    }
  }, [width, height, dispatch]);

  return (
    <div 
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#10101E',
        overflow: 'hidden',
        transform: `scale(${zoomScale})`,
        transformOrigin: 'center center',
        transition: 'transform 0.1s ease',
      }}
    >
      <canvas id="animaker-main-canvas" ref={canvasRef} />
    </div>
  );
};

export default MainCanvas;
