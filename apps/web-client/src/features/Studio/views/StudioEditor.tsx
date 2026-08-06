import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProjectInfo, closeProject } from '../../../store/slices/projectSlice';

// Komponen Topbar
import { TitleEditor } from '../Topbar/TitleEditor';
import { UndoRedoControls } from '../Topbar/UndoRedoControls';
import { ExportButton } from '../Topbar/ExportButton';

// Komponen Canvas
import { MainCanvas } from '../Canvas/MainCanvas';
import { Guidelines } from '../Canvas/Guidelines';
import { Selectors } from '../Canvas/Selectors';

// Komponen Panels (Samping)
import { SceneManagerPanel } from '../Panels/SceneManagerPanel';
import { AssetLibraryPanel } from '../Panels/AssetLibraryPanel';
import { PropertiesPanel } from '../Panels/PropertiesPanel';

// Komponen Timeline (Bawah)
import { TimelineContainer } from '../Timeline/TimelineContainer';

export const StudioEditor: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Inisialisasi data project saat pertama kali halaman Studio dibuka
  useEffect(() => {
    if (projectId) {
      dispatch(setProjectInfo({ projectId, title: `Proyek (${projectId})` }));
    }

    return () => {
      // Bersihkan state saat user keluar dari halaman Studio kembali ke Dashboard
      dispatch(closeProject());
    };
  }, [projectId, dispatch]);

  const handleAddTextToCanvas = () => {
    // Fungsi pemicu penambahan teks (akan dihubungkan ke CanvasManager instance)
    console.log('Tambah teks ke kanvas');
  };

  const handleAddImageToCanvas = (url: string) => {
    // Fungsi pemicu penambahan aset gambar/prop
    console.log('Tambah gambar ke kanvas:', url);
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#10101E',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      color: '#FFFFFF',
      fontFamily: "'Inter', sans-serif",
    }}>
      
      {/* ================= TOPBAR (NAVIGASI ATAS) ================= */}
      <div style={{
        height: '56px',
        backgroundColor: '#161629',
        borderBottom: '1px solid #2E2E48',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxSizing: 'box-border',
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              backgroundColor: '#2E2E48',
              color: '#FFFFFF',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            ← Dashboard
          </button>
          <TitleEditor />
        </div>

        <UndoRedoControls />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ExportButton projectId={projectId || 'default_id'} />
        </div>
      </div>

      {/* ================= WORKSPACE TENGAH (PANEL & CANVAS) ================= */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        overflow: 'hidden',
      }}>
        
        {/* Panel Samping Kiri (Scene Manager & Asset Library) */}
        <div style={{ display: 'flex', flexDirection: 'row', zIndex: 10 }}>
          <SceneManagerPanel />
          <AssetLibraryPanel 
            onAddText={handleAddTextToCanvas} 
            onAddImage={handleAddImageToCanvas} 
          />
        </div>

        {/* Area Utama Kanvas Visual */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Guidelines />
          <Selectors />
          <MainCanvas width={1280} height={720} />
        </div>

        {/* Panel Samping Kanan (Properti & Aksi Karakter) */}
        <div style={{ display: 'flex', flexDirection: 'row', zIndex: 10 }}>
          <PropertiesPanel />
        </div>

      </div>

      {/* ================= PANEL TIMELINE BAWAH ================= */}
      <TimelineContainer />

    </div>
  );
};

export default StudioEditor;
