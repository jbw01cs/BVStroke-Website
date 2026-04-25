import React from 'react';
import { Section } from './Section';
import { OsmoticAgent } from '../types';

interface OsmoticAgentsProps {
  agents: OsmoticAgent[];
}

const accentClasses: Record<OsmoticAgent['accent'], { ring: string; chip: string; dot: string; label: string }> = {
  mannitol: {
    ring: 'border-emerald-500/30',
    chip: 'bg-emerald-500/15 text-emerald-200 border border-emerald-500/30',
    dot: 'bg-emerald-400',
    label: 'Osmotic diuretic'
  },
  hts15: {
    ring: 'border-sky-500/30',
    chip: 'bg-sky-500/15 text-sky-200 border border-sky-500/30',
    dot: 'bg-sky-400',
    label: 'Mild hyperosmolar'
  },
  hts3: {
    ring: 'border-indigo-500/30',
    chip: 'bg-indigo-500/15 text-indigo-200 border border-indigo-500/30',
    dot: 'bg-indigo-400',
    label: 'Standard hyperosmolar'
  },
  rescue: {
    ring: 'border-rose-500/30',
    chip: 'bg-rose-500/15 text-rose-200 border border-rose-500/30',
    dot: 'bg-rose-400',
    label: 'Rescue / herniation'
  }
};

const Row: React.FC<{ label: string; value: string; mono?: boolean }> = ({ label, value, mono }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">{label}</span>
    <span className={`text-sm text-white/85 leading-snug ${mono ? 'font-mono' : ''}`}>{value}</span>
  </div>
);

export const OsmoticAgents: React.FC<OsmoticAgentsProps> = ({ agents }) => {
  if (!agents || agents.length === 0) return null;

  return (
    <Section title="Osmotic Therapy — Dosing & Monitoring" variant="solid">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {agents.map((a, idx) => {
          const c = accentClasses[a.accent];
          return (
            <div
              key={idx}
              className={`relative rounded-xl bg-black/25 border ${c.ring} p-4 hover:bg-black/35 transition-colors`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-2.5">
                  <span className={`mt-1.5 w-2 h-2 rounded-full ${c.dot} shrink-0`} />
                  <div>
                    <div className="text-base font-semibold text-white leading-tight">{a.name}</div>
                    {a.subtitle && (
                      <div className="text-xs text-white/55 mt-0.5">{a.subtitle}</div>
                    )}
                  </div>
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${c.chip} whitespace-nowrap`}>
                  {c.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <Row label="Bolus" value={a.bolus} mono />
                <Row label="Maintenance / Repeat" value={a.maintenance} mono />
                <Row label="Targets / Monitoring" value={a.targets} />
                <Row label="Access" value={a.access} />
              </div>

              <div className="pt-3 border-t border-white/5 text-xs text-white/65 leading-relaxed">
                <span className="text-white/80 font-medium">Notes: </span>{a.notes}
              </div>
            </div>
          );
        })}
      </div>

    </Section>
  );
};
