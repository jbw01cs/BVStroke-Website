import React from 'react';
import { PageId, PAGES } from '../constants';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  return (
    <div className="sticky top-4 z-50 flex flex-col md:flex-row md:items-center justify-between p-2 md:p-3 rounded-3xl md:rounded-full border border-white/10 bg-bg0/80 backdrop-blur-md shadow-2xl gap-3 md:gap-0">
      <div className="flex items-center gap-3 pl-2">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-link shadow-lg flex items-center justify-center shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-bg0">
             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
           </svg>
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-bold text-white tracking-wide leading-none">BV Stroke</h1>
          <span className="text-xs text-white/50 leading-none mt-1">Clinical Pathways</span>
        </div>
      </div>
      
      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-1 px-1">
        {(Object.keys(PAGES) as PageId[]).map((pageKey) => (
          <button
            key={pageKey}
            onClick={() => onNavigate(pageKey)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activePage === pageKey 
                ? 'bg-accent text-bg0 shadow-lg shadow-accent/20' 
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {PAGES[pageKey].navTitle}
          </button>
        ))}
      </div>
    </div>
  );
};