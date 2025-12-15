import React from 'react';
import { Section } from './Section';
import { TrialData } from '../types';

interface ClinicalTrialsProps {
  trials: TrialData[];
}

export const ClinicalTrials: React.FC<ClinicalTrialsProps> = ({ trials }) => {
  if (!trials || trials.length === 0) return null;

  return (
    <Section title="Evidence & Outcomes" variant="solid">
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="w-full text-left border-collapse bg-black/20 min-w-[700px]">
          <thead>
            <tr>
              <th className="p-3 text-xs font-semibold text-white/60 bg-white/5 border-b border-white/10 w-[25%]">Trial / Study</th>
              <th className="p-3 text-xs font-semibold text-white/60 bg-white/5 border-b border-white/10 w-[15%]">Design/Window</th>
              <th className="p-3 text-xs font-semibold text-white/60 bg-white/5 border-b border-white/10 w-[30%]">Primary Outcome</th>
              <th className="p-3 text-xs font-semibold text-white/60 bg-white/5 border-b border-white/10">Safety / Conclusion</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {trials.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/5 transition-colors">
                <td className="p-3 align-top">
                  <span className="block font-medium text-white text-sm">{row.name}</span>
                  <span className="block text-xs text-white/40 mt-1">{row.description}</span>
                </td>
                <td className="p-3 text-sm text-white/80 align-top font-mono text-xs">{row.window}</td>
                <td className="p-3 text-sm text-white/80 align-top">{row.outcome}</td>
                <td className="p-3 text-sm text-white/70 align-top">{row.safety}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};