import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 20, color = 'currentColor', className = '', ...props }) => {
  // Placeholder renderer ikon berdasarkan nama
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill={color} stroke="none">
        {name.charAt(0).toUpperCase()}
      </text>
    </svg>
  );
};
