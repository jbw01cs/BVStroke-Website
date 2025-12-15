import React from 'react';
import { Section } from './Section';
import { WindowRow } from '../types';
import { Badge } from './Badge';

interface TreatmentWindowsProps {
  title: string;
  headers: [string, string, string, string];
  rows: WindowRow[];
}

export const TreatmentWindows: React.FC<TreatmentWindowsProps> = ({ title, headers, rows }) => {
  return (
    <Section title={title} variant="solid">
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="w-full text-left border-collapse bg-black/20 min-w-[700px]">
          <thead>
            <tr>
              <th className="p-3 text-xs font-semibold text-white/60 bg-white/5 border-b border-white/10 w-[18%]">{headers[0]}</th>
              <th className="p-3 text-xs font-semibold text-white/60 bg-white/5 border-b border-white/10 w-[27%]">{headers[1]}</th>
              <th className="p-3 text-xs font-semibold text-white/60 bg-white/5 border-b border-white/10 w-[27%]">{headers[2]}</th>
              <th className="p-3 text-xs font-semibold text-white/60 bg-white/5 border-b border-white/10">{headers[3]}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/5 transition-colors">
                <td className="p-3 align-top">
                  <Badge type={row.type}>{row.badgeText || row.col1}</Badge>
                </td>
                <td className="p-3 text-sm text-white/80 align-top">{row.col2}</td>
                <td className="p-3 text-sm text-white/70 align-top">{row.col3}</td>
                <td className="p-3 text-sm text-white/70 align-top">{row.col4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};