import React from 'react';

interface SectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'solid';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, className = "", children, variant = 'default', id }) => {
  const bgClass = variant === 'solid' ? 'bg-card' : 'bg-transparent';
  
  return (
    <section id={id} className={`border border-cardBorder rounded-[18px] p-5 shadow-lg ${bgClass} ${className}`}>
      {title && <h3 className="text-base font-semibold text-white/95 mb-4 tracking-wide">{title}</h3>}
      {children}
    </section>
  );
};