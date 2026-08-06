import React from 'react';

export interface TemplateItem {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
}

interface TemplateGridProps {
  templates: TemplateItem[];
  onSelectTemplate: (templateId: string) => void;
}

export const TemplateGrid: React.FC<TemplateGridProps> = ({ templates, onSelectTemplate }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h3 style={{ margin: 0, fontSize: '16px', color: '#FFFFFF' }}>Mulai dari Template</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
      }}>
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            onClick={() => onSelectTemplate(tpl.id)}
            style={{
              backgroundColor: '#1F1F38',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #2E2E48',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FF5A5F')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2E2E48')}
          >
            <div style={{
              height: '120px',
              backgroundColor: '#2E2E48',
              backgroundImage: `url(${tpl.thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
            <div style={{ padding: '10px 12px' }}>
              <span style={{ fontSize: '10px', color: '#FF5A5F', textTransform: 'uppercase', fontWeight: 700 }}>
                {tpl.category}
              </span>
              <h4 style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#FFFFFF' }}>{tpl.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
