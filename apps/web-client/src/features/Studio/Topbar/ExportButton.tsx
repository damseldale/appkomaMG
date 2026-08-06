import React, { useState } from 'react';
import { RenderAPI } from '../../../api/render.api';

interface ExportButtonProps {
  projectId: string;
}

export const ExportButton: React.FC<ExportButtonProps> = ({ projectId }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStartExport = async () => {
    try {
      setIsExporting(true);
      setProgress(10);
      
      // Panggil API Render Queue
      const res = await RenderAPI.startRenderQueue(projectId, '1080p');
      const jobId = res.jobId || 'job_mock_123';

      setProgress(40);
      alert(`Render dimulai! Job ID: ${jobId}. Video Anda sedang diproses di server.`);
      setIsExporting(false);
    } catch (err) {
      alert('Gagal memulai render video.');
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleStartExport}
      disabled={isExporting}
      style={{
        backgroundColor: '#FF5A5F',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        padding: '8px 16px',
        fontWeight: 600,
        fontSize: '13px',
        cursor: isExporting ? 'not-allowed' : 'pointer',
        boxShadow: '0 2px 8px rgba(255,90,95,0.4)',
      }}
    >
      {isExporting ? `Rendering (${progress}%)` : '🎬 Ekspor Video'}
    </button>
  );
};

export default ExportButton;
