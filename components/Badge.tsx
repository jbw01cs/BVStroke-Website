import React from 'react';

interface BadgeProps {
  type: 'good' | 'warn' | 'bad' | 'neutral';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ type, children }) => {
  let styles = '';
  switch (type) {
    case 'good':
      styles = 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
      break;
    case 'warn':
      styles = 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      break;
    case 'bad':
      styles = 'bg-rose-500/10 text-rose-300 border-rose-500/20';
      break;
    case 'neutral':
    default:
      styles = 'bg-gray-500/10 text-gray-300 border-gray-500/20';
      break;
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${styles} whitespace-nowrap`}>
      {children}
    </span>
  );
};