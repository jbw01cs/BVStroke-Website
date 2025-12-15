import React from 'react';
import { Section } from './Section';
import { StrokeStatsData } from '../types';

interface StrokeStatsProps {
  data: StrokeStatsData;
}

export const StrokeStats: React.FC<StrokeStatsProps> = ({ data }) => {
  if (!data) return null;

  // Calculate percentages based on total volume
  const getPercentage = (count: number) => Math.min(100, Math.round((count / data.total) * 100));

  // Helper to map color names to tailwind classes
  const getColorClass = (color: string, opacity: string = '100') => {
    switch(color) {
      case 'emerald': return `bg-emerald-500`;
      case 'amber': return `bg-amber-400`;
      case 'rose': return `bg-rose-500`;
      case 'indigo': return `bg-indigo-500`;
      default: return `bg-blue-500`;
    }
  };

  const getBgClass = (color: string) => {
     switch(color) {
      case 'emerald': return `bg-emerald-500/20 text-emerald-300`;
      case 'amber': return `bg-amber-400/20 text-amber-200`;
      case 'rose': return `bg-rose-500/20 text-rose-300`;
      case 'indigo': return `bg-indigo-500/20 text-indigo-300`;
      default: return `bg-blue-500/20 text-blue-300`;
    }
  };

  return (
    <Section title={`${data.year} Regional Stroke Volume`} variant="solid" className="border-accent/10">
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        {/* Main Total Metric */}
        <div className="flex flex-col justify-center items-center p-6 bg-black/20 rounded-xl border border-white/5 min-w-[200px]">
          <span className="text-4xl font-bold text-white tracking-tighter">{data.total.toLocaleString()}</span>
          <span className="text-sm font-medium text-white/50 uppercase tracking-widest mt-2">Total Patients</span>
          <div className="h-1 w-16 bg-accent/50 rounded-full mt-4"></div>
        </div>

        {/* Breakdown Charts */}
        <div className="flex-1 space-y-5">
          {data.breakdown.map((item, idx) => {
            const percent = getPercentage(item.count);
            return (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium text-white/80">{item.label}</span>
                  <div className="flex items-center gap-2">
                     <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${getBgClass(item.color)}`}>
                        {item.count}
                     </span>
                     <span className="text-xs text-white/30 w-8 text-right">{percent}%</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${getColorClass(item.color)}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};