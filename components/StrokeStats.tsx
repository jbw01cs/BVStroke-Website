import React from 'react';
import { Section } from './Section';
import { StrokeStatsData } from '../types';

interface StrokeStatsProps {
  data: StrokeStatsData;
}

const getBarColor = (color: string) => {
  switch (color) {
    case 'emerald': return 'bg-emerald-500';
    case 'amber': return 'bg-amber-400';
    case 'rose': return 'bg-rose-500';
    case 'indigo': return 'bg-indigo-500';
    default: return 'bg-blue-500';
  }
};

const getBadgeColor = (color: string) => {
  switch (color) {
    case 'emerald': return 'bg-emerald-500/20 text-emerald-300';
    case 'amber': return 'bg-amber-400/20 text-amber-200';
    case 'rose': return 'bg-rose-500/20 text-rose-300';
    case 'indigo': return 'bg-indigo-500/20 text-indigo-300';
    default: return 'bg-blue-500/20 text-blue-300';
  }
};

const TotalBlock: React.FC<{ year: string; total: number }> = ({ year, total }) => (
  <div className="flex flex-col items-center px-4">
    <span className="text-sm font-semibold text-white/70 uppercase tracking-wider">{year}</span>
    <span className="text-3xl font-bold text-white tracking-tighter mt-1">{total.toLocaleString()}</span>
  </div>
);

const YearBar: React.FC<{
  year: string;
  count: number;
  color: string;
  scaleMax: number;
  muted?: boolean;
}> = ({ year, count, color, scaleMax, muted }) => {
  const percent = Math.min(100, Math.round((count / scaleMax) * 100));
  return (
    <div className="flex items-center gap-2">
      <span className={`text-xs font-semibold uppercase tracking-wider w-12 shrink-0 ${muted ? 'text-white/50' : 'text-white/80'}`}>{year}</span>
      <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${getBarColor(color)} ${muted ? 'opacity-50' : ''}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className={`text-xs font-bold px-2 py-0.5 rounded w-12 text-center ${getBadgeColor(color)} ${muted ? 'opacity-70' : ''}`}>
        {count}
      </span>
    </div>
  );
};

export const StrokeStats: React.FC<StrokeStatsProps> = ({ data }) => {
  if (!data) return null;

  const prior = data.compareTo;
  const allCounts = prior
    ? [...data.breakdown.map(b => b.count), ...prior.breakdown.map(b => b.count)]
    : data.breakdown.map(b => b.count);
  const scaleMax = Math.max(...allCounts);

  const title = prior
    ? `Regional Stroke Volume — ${prior.year} vs ${data.year}`
    : `${data.year} Regional Stroke Volume`;

  return (
    <Section title={title} variant="solid" className="border-accent/10">
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {/* Totals */}
        <div className="flex md:flex-col justify-center items-center gap-4 md:gap-3 p-5 bg-black/20 rounded-xl border border-white/5 md:min-w-[200px]">
          {prior && <TotalBlock year={prior.year} total={prior.total} />}
          {prior && <div className="hidden md:block h-px w-12 bg-white/10" />}
          {prior && <div className="md:hidden w-px h-10 bg-white/10" />}
          <TotalBlock year={data.year} total={data.total} />
          <span className="hidden md:block text-xs font-medium text-white/50 uppercase tracking-widest mt-1">Total Patients</span>
        </div>

        {/* Breakdown with paired bars */}
        <div className="flex-1 space-y-5">
          {data.breakdown.map((item, idx) => {
            const priorItem = prior?.breakdown.find(b => b.label === item.label);
            return (
              <div key={idx} className="space-y-1.5">
                <span className="text-sm font-medium text-white/80">{item.label}</span>
                <div className="space-y-1.5">
                  {priorItem && (
                    <YearBar
                      year={prior!.year}
                      count={priorItem.count}
                      color={priorItem.color}
                      scaleMax={scaleMax}
                      muted
                    />
                  )}
                  <YearBar
                    year={data.year}
                    count={item.count}
                    color={item.color}
                    scaleMax={scaleMax}
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
