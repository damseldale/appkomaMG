import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  style,
  ...props
}) => {
  const getBackgroundColor = () => {
    if (disabled) return '#4A4A6A';
    switch (variant) {
      case 'primary': return '#FF5A5F';
      case 'secondary': return '#2E2E48';
      case 'danger': return '#E63946';
      case 'ghost': return 'transparent';
      default: return '#FF5A5F';
    }
  };

  return (
    <button
      style={{
        backgroundColor: getBackgroundColor(),
        color: '#FFFFFF',
        border: variant === 'secondary' ? '1px solid #4A4A6A' : 'none',
        borderRadius: '6px',
        padding: size === 'sm' ? '6px 12px' : size === 'lg' ? '12px 24px' : '8px 16px',
        fontSize: size === 'sm' ? '12px' : size === 'lg' ? '16px' : '14px',
        fontWeight: 600,
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'background 0.2s ease',
        ...style,
      }}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
