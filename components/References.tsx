import React from 'react';
import { Section } from './Section';
import { Reference } from '../types';

interface ReferencesProps {
  references: Reference[];
}

export const References: React.FC<ReferencesProps> = ({ references }) => {
  if (!references || references.length === 0) return null;

  return (
    <Section title="Key References" className="bg-gradient-to-b from-white/5 to-transparent" id="references">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        {references.map((ref) => (
          <div key={ref.id} className="flex items-baseline gap-2 text-sm">
            <span className="text-white/30 font-mono text-xs w-4">{ref.id}.</span>
            <div className="flex-1">
              <span className="text-white/60 mr-2">{ref.text}</span>
              <a 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-link hover:text-white transition-colors inline-flex items-center gap-0.5 text-xs font-medium border-b border-link/30 hover:border-white"
              >
                {ref.linkText}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};