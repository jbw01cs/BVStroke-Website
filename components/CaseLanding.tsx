import React from 'react';
import { Section } from './Section';
import { CASES } from '../caseData';

interface CaseLandingProps {
  onBack: () => void;
  onSelectCase: (caseId: string) => void;
}

export const CaseLanding: React.FC<CaseLandingProps> = ({ onBack, onSelectCase }) => {
  const totalCases = CASES.length;
  const avgNihssAdmit = CASES.reduce((s, c) => s + c.nihssAdmit, 0) / totalCases;
  const avgNihssDischarge = CASES.reduce((s, c) => s + c.nihssDischarge, 0) / totalCases;
  const avgNihssDrop = avgNihssAdmit - avgNihssDischarge;
  const avgNihssDropPct = ((avgNihssDrop / avgNihssAdmit) * 100);
  const tici2bOrBetter = CASES.filter(c => c.ticiPostNumeric >= 2.5).length;
  const tici3 = CASES.filter(c => c.ticiPostNumeric === 3).length;
  const ticiSuccessRate = ((tici2bOrBetter / totalCases) * 100);
  const casesWithCTP = CASES.filter(c => c.ctp).length;

  return (
    <div className="space-y-6">
      {/* Back link */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Mechanical Thrombectomy
      </button>

      {/* Header */}
      <Section title="" variant="solid">
        <h3 className="text-base font-semibold text-white/95 mb-4 tracking-wide flex items-center gap-2.5">
          MT Case Presentations
          <span className="text-sm font-semibold text-accent/90 px-2 py-0.5 rounded border border-accent/25 bg-accent/10">Year: 2026</span>
        </h3>
        <p className="text-sm text-white/50 max-w-3xl">
          De-identified case examples demonstrating mechanical thrombectomy for large vessel occlusion stroke. Select an individual case below for detailed imaging, perfusion data, and clinical narrative.
        </p>
      </Section>

      {/* Aggregate Stats */}
      <Section title="Aggregate Outcomes" variant="solid" className="border-accent/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {/* Total Cases */}
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors">
            <div className="relative z-10">
              <span className="text-[10px] font-semibold text-white/30 uppercase tracking-widest block mb-1">Total Cases</span>
              <span className="text-3xl font-bold text-white block mb-1">{totalCases}</span>
              <span className="text-xs text-white/40 block">{casesWithCTP} with CT Perfusion</span>
            </div>
            <div className="absolute right-0 bottom-0 h-16 w-16 bg-blue-500/10 blur-xl rounded-full group-hover:bg-blue-500/20 transition-colors" />
          </div>

          {/* TICI Success */}
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors">
            <div className="relative z-10">
              <span className="text-[10px] font-semibold text-emerald-400/80 uppercase tracking-widest block mb-1">TICI 2b–3 Rate</span>
              <span className="text-3xl font-bold text-white block mb-1">{ticiSuccessRate.toFixed(0)}%</span>
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                  {tici2bOrBetter}/{totalCases} cases
                </span>
                <span className="text-[10px] text-white/30">({tici3} TICI 3)</span>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 h-16 w-16 bg-emerald-500/10 blur-xl rounded-full group-hover:bg-emerald-500/20 transition-colors" />
          </div>

          {/* Avg NIHSS Change */}
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors">
            <div className="relative z-10">
              <span className="text-[10px] font-semibold text-accent/80 uppercase tracking-widest block mb-1">Avg NIHSS Δ</span>
              <span className="text-3xl font-bold text-white block mb-1">↓ {avgNihssDrop.toFixed(1)}</span>
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                  {avgNihssDropPct.toFixed(0)}% reduction
                </span>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 h-16 w-16 bg-accent/10 blur-xl rounded-full group-hover:bg-accent/20 transition-colors" />
          </div>

          {/* Avg Admit → Discharge */}
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors">
            <div className="relative z-10">
              <span className="text-[10px] font-semibold text-amber-400/80 uppercase tracking-widest block mb-1">NIHSS Admit → DC</span>
              <span className="text-3xl font-bold text-white block mb-1">{avgNihssAdmit.toFixed(0)} → {avgNihssDischarge.toFixed(0)}</span>
              <span className="text-xs text-white/40 block">Average across all cases</span>
            </div>
            <div className="absolute right-0 bottom-0 h-16 w-16 bg-amber-500/10 blur-xl rounded-full group-hover:bg-amber-500/20 transition-colors" />
          </div>
        </div>

        {/* Per-case summary table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">Case</th>
                <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">Patient</th>
                <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">Circulation</th>
                <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">NIHSS Admit</th>
                <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">NIHSS DC</th>
                <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">Δ NIHSS</th>
                <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">TICI</th>
                <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">CTP</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {CASES.map((c, i) => {
                const drop = c.nihssAdmit - c.nihssDischarge;
                const dropPct = ((drop / c.nihssAdmit) * 100).toFixed(0);
                return (
                  <tr key={c.id} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors cursor-pointer" onClick={() => onSelectCase(c.id)}>
                    <td className="py-2.5 px-3">
                      <span className="text-accent font-semibold hover:underline">#{i + 1}</span>
                    </td>
                    <td className="py-2.5 px-3 text-white/70">{c.age}yo {c.sex}</td>
                    <td className="py-2.5 px-3 text-white/50">{c.diagnosis.includes('Posterior') ? 'Posterior' : 'Anterior'}</td>
                    <td className="py-2.5 px-3">
                      <span className="text-rose-400 font-semibold">{c.nihssAdmit}</span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="text-emerald-400 font-semibold">{c.nihssDischarge}</span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-medium">
                        ↓{drop} ({dropPct}%)
                      </span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="text-white/40">{c.ticiPre}</span>
                      <span className="text-white/20 mx-1">→</span>
                      <span className="text-emerald-400 font-semibold">{c.ticiPost}</span>
                    </td>
                    <td className="py-2.5 px-3">
                      {c.ctp ? (
                        <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-medium">Yes</span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="text-[10px] text-white/15 text-center mt-2 italic">
        All case presentations are for educational purposes. Patient data is de-identified.
      </div>
    </div>
  );
};
