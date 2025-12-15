import React from 'react';
import { Section } from './Section';
import { ProtocolItem } from '../types';

interface ProtocolGridProps {
  indicationsTitle: string;
  indications: ProtocolItem[];
  exclusionsTitle: string;
  exclusions: ProtocolItem[];
  protocolNote?: string;
}

export const ProtocolGrid: React.FC<ProtocolGridProps> = ({ 
  indicationsTitle, 
  indications, 
  exclusionsTitle, 
  exclusions,
  protocolNote 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <Section title={indicationsTitle} className="md:col-span-3 bg-card" variant="solid">
        <ul className="space-y-3">
          {indications.map((item) => (
            <li key={item.id} className="flex items-start gap-3 text-sm text-white/80">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="whitespace-pre-line">{item.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={exclusionsTitle} className="md:col-span-2 bg-card" variant="solid">
        <ul className="space-y-3">
          {exclusions.map((item) => (
            <li key={item.id} className="flex items-start gap-3 text-sm text-white/70">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              <span className="whitespace-pre-line">{item.text}</span>
            </li>
          ))}
        </ul>
        
        {protocolNote && (
          <div className="mt-6 p-3 rounded-lg bg-black/20 border border-white/5 text-xs text-white/60 leading-relaxed">
              <strong className="text-white/90">Note:</strong> {protocolNote}
          </div>
        )}
      </Section>
    </div>
  );
};