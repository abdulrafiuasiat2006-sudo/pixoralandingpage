import React from 'react';

interface PixoraLogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const PixoraIcon: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <rect width="32" height="32" rx="7" fill="#1A1A1A" />
      {/* Top Left: Splitter tile */}
      <rect x="6.5" y="6.5" width="8.5" height="8.5" rx="2" fill="#FF7A1A" />
      {/* Top Right: Compressor tile */}
      <rect x="17" y="6.5" width="8.5" height="8.5" rx="2" fill="#FAF8F3" fillOpacity="0.85" />
      {/* Bottom Left: Resizer tile */}
      <rect x="6.5" y="17" width="8.5" height="8.5" rx="2" fill="#FAF8F3" fillOpacity="0.85" />
      {/* Bottom Right: Cropper tile */}
      <rect x="17" y="17" width="8.5" height="8.5" rx="2" fill="#FF7A1A" />
      {/* Precision center focal crosshair */}
      <circle cx="16" cy="16" r="1.5" fill="#1A1A1A" />
    </svg>
  );
};

export const PixoraLogo: React.FC<PixoraLogoProps> = ({
  className = '',
  iconOnly = false,
  variant = 'dark',
  size = 'md',
}) => {
  const iconSizes = {
    sm: 22,
    md: 28,
    lg: 36,
  };

  const textSizes = {
    sm: 'text-base tracking-tight',
    md: 'text-xl tracking-tight',
    lg: 'text-2xl tracking-tighter',
  };

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none font-bold ${className}`}>
      <PixoraIcon size={iconSizes[size]} />
      {!iconOnly && (
        <span
          className={`font-extrabold uppercase font-sans ${textSizes[size]} ${
            isLight ? 'text-[#FAF8F3]' : 'text-[#1A1A1A]'
          }`}
        >
          PIXORA
        </span>
      )}
    </div>
  );
};

export default PixoraLogo;
