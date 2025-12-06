import React from 'react';

interface ChevronIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ChevronIcon({ direction = 'down', className = '', ...props }: ChevronIconProps) {
  const getPath = () => {
    switch (direction) {
      case 'up':
        return 'M18 15l-6-6-6 6'; // Approx
      case 'down':
        return 'M6 9l6 6 6-6';
      case 'left':
        return 'M15 18l-6-6 6-6';
      case 'right':
        return 'M9 18l6-6-6-6';
      default:
        return 'M6 9l6 6 6-6';
    }
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}>
      <path d={getPath()} />
    </svg>
  );
}
