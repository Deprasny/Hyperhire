import React from 'react';

export default function MenuIcon({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
