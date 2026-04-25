import React from 'react';

interface CollapsibleProps {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ label, children, defaultOpen = false }) => {
  return (
    <details
      open={defaultOpen}
      className="group border border-cardBorder rounded-[18px] bg-card/60 shadow-lg overflow-hidden"
    >
      <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between hover:bg-white/5 transition-colors">
        <span className="text-sm font-semibold text-white/85 tracking-wide">{label}</span>
        <span className="flex items-center gap-2 text-xs text-white/50">
          <span className="hidden sm:inline">Show / Hide</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-open:rotate-180"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </summary>
      <div className="px-1 sm:px-2 pb-2 pt-1 space-y-4">
        {children}
      </div>
    </details>
  );
};
