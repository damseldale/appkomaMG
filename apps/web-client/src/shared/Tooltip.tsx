import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div style={{
          position: 'absolute',
          bottom: '120%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#0F0F1A',
          color: '#FFFFFF',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '11px',
          whiteSpace: 'nowrap',
          zIndex: 1000,
          border: '1px solid #2E2E48',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        }}>
          {text}
        </div>
      )}
    </div>
  );
};
