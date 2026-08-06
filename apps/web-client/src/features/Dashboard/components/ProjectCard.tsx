import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  thumbnail?: string;
  updatedAt: string;
  onDelete: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  thumbnail,
  updatedAt,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#1F1F38',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #2E2E48',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/studio/${id}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          width: '100%',
          height: '140px',
          backgroundColor: '#2E2E48',
          backgroundImage: thumbnail ? `url(${thumbnail})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#A0A0B0',
          fontSize: '12px',
        }}
      >
        {!thumbnail && 'No Preview'}
      </div>
      <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h4 style={{ margin: 0, fontSize: '14px', color: '#FFFFFF', fontWeight: 600 }}>{title}</h4>
          <span style={{ fontSize: '11px', color: '#A0A0B0' }}>Updated: {updatedAt}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          style={{
            background: 'none',
            border: 'none',
            color: '#A0A0B0',
            cursor: 'pointer',
            fontSize: '14px',
          }}
          title="Hapus Proyek"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};
