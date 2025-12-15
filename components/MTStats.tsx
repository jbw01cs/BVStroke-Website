import React from 'react';
import { Section } from './Section';
import { MTStatsData } from '../types';

interface MTStatsProps {
  data: MTStatsData;
}

export const MTStats: React.FC<MTStatsProps> = ({ data }) => {
  if (!data) return null;

  return (
    <Section title="Regional MT Utilization Targets" variant="solid" className="border-accent/10">
      <div className="flex flex-col md:flex-row gap-4 items-stretch justify-between">
        
        {/* Metric 1: Total Strokes */}
        <div className="flex-1 bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors">
          <div className="relative z-10">
            <span className="text-xs font-semibold text-white/40 uppercase tracking-widest block mb-1">Total Ischemic Strokes</span>
            <span className="text-3xl font-bold text-white block mb-1">{data.total}</span>
            <span className="text-xs text-white/50 block">100% (Baseline 2024)</span>
          </div>
          <div className="absolute right-0 bottom-0 h-16 w-16 bg-blue-500/10 blur-xl rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
        </div>

        {/* Arrow (Hidden on mobile) */}
        <div className="hidden md:flex items-center justify-center text-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>

        {/* Metric 2: Eligible */}
        <div className="flex-1 bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors">
          <div className="relative z-10">
             <span className="text-xs font-semibold text-emerald-400/80 uppercase tracking-widest block mb-1">Expected Eligible</span>
             <span className="text-3xl font-bold text-white block mb-1">{data.eligibleRange}</span>
             <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">{data.eligiblePercent}</span>
             </div>
          </div>
          <div className="absolute right-0 bottom-0 h-16 w-16 bg-emerald-500/10 blur-xl rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
        </div>

        {/* Arrow (Hidden on mobile) */}
        <div className="hidden md:flex items-center justify-center text-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>

        {/* Metric 3: Treated Target */}
        <div className="flex-1 bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors">
          <div className="relative z-10">
             <span className="text-xs font-semibold text-accent/80 uppercase tracking-widest block mb-1">Target Treatment Vol</span>
             <span className="text-3xl font-bold text-white block mb-1">{data.treatedRange}</span>
             <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent text-xs font-medium">{data.treatedPercent}</span>
             </div>
          </div>
          <div className="absolute right-0 bottom-0 h-16 w-16 bg-accent/10 blur-xl rounded-full group-hover:bg-accent/20 transition-colors"></div>
        </div>

      </div>
      <div className="mt-3 text-[10px] text-right text-white/30 italic">
        See References [5, 6] for utilization data sources.
      </div>
    </Section>
  );
};