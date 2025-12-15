import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProtocolGrid } from './components/ProtocolGrid';
import { TreatmentWindows } from './components/TreatmentWindows';
import { ClinicalTrials } from './components/ClinicalTrials';
import { References } from './components/References';
import { StrokeStats } from './components/StrokeStats';
import { MTStats } from './components/MTStats';
import { PAGES, PageId } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const data = PAGES[activePage];

  return (
    <div className="min-h-screen bg-bg0 bg-gradient-to-b from-bg0 to-bg1 selection:bg-accent selection:text-bg0 pb-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[1200px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-[5%] right-[5%] w-[900px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[55%] w-[1000px] h-[700px] bg-amber-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <Header activePage={activePage} onNavigate={setActivePage} />
        
        {/* We use a key here to force re-render/animation when page changes */}
        <main key={activePage} className="space-y-8 animate-fade-in">
          <Hero 
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
            kpis={data.kpis}
          />

          {data.mtStats && (
            <MTStats data={data.mtStats} />
          )}

          <ProtocolGrid 
            indicationsTitle={data.indicationsTitle}
            indications={data.indications}
            exclusionsTitle={data.exclusionsTitle}
            exclusions={data.exclusions}
            protocolNote={data.protocolNote}
          />
          <TreatmentWindows 
            title={data.tableTitle}
            headers={data.tableHeaders}
            rows={data.tableData}
          />
          <ClinicalTrials 
            trials={data.trials}
          />
          <References 
            references={data.references}
          />
          
          {data.strokeStats && (
            <StrokeStats data={data.strokeStats} />
          )}

          {activePage === 'home' && (
            <div className="flex justify-center pt-8 pb-4 opacity-60 hover:opacity-100 transition-opacity">
              <a 
                href="mailto:info@BVStroke.com" 
                className="text-xs font-medium text-white/40 hover:text-white transition-colors border-b border-transparent hover:border-white/20"
              >
                Administrative Contact: info@BVStroke.com
              </a>
            </div>
          )}
        </main>
      </div>

      <a 
        href="#references"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-xl hover:bg-black/60 transition-all group"
      >
        <div className="w-2 h-2 rounded-full bg-link group-hover:scale-125 transition-transform" />
        <span className="text-sm font-medium text-white/90">References</span>
      </a>
    </div>
  );
};

export default App;