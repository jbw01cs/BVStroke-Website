import React from 'react';
import { KPI } from '../types';
import ReactMarkdown from 'react-markdown'; // Assuming we don't have this, we'll use simple rendering or a helper. 
// Actually, let's stick to standard React rendering for simplicity without adding deps.

interface HeroProps {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  kpis: KPI[];
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, description, kpis }) => {
  return (
    <div className="border border-cardBorder bg-gradient-to-br from-white/10 to-white/5 rounded-[20px] p-6 shadow-2xl backdrop-blur-sm">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{title}</h2>
        <h3 className="text-xl text-accent mb-2">{subtitle}</h3>
        <div className="text-white/70 max-w-3xl leading-relaxed whitespace-pre-wrap">
            {/* Simple Bold parser for **text** */}
            {typeof description === 'string' ? description.split(/(\*\*.*?\*\*)/).map((part, i) => 
                part.startsWith('**') && part.endsWith('**') ? 
                <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong> : 
                part
            ) : description}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-card border border-cardBorder rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">{kpi.label}</span>
            <div>
              <span className="block text-lg font-medium text-white mb-1 leading-snug">{kpi.value}</span>
              <span className="block text-xs text-accent/80">{kpi.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};