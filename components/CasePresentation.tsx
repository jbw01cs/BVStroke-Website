import React from 'react';
import { Section } from './Section';
import { CaseData, CASES } from '../caseData';

interface CasePresentationProps {
  caseId: string;
  onBack: () => void;
}

function nihssSeverity(nihss: number): string {
  if (nihss === 0) return 'No deficit';
  if (nihss <= 4) return 'Minor';
  if (nihss <= 8) return 'Mild';
  if (nihss <= 15) return 'Moderate';
  if (nihss <= 20) return 'Mod-Severe';
  return 'Severe';
}

function ticiDescription(tici: string): string {
  if (tici === '3') return 'Full distal recanalization';
  if (tici === '2c') return 'Near-complete reperfusion';
  if (tici === '2b') return 'Substantial reperfusion';
  return 'Partial/minimal reperfusion';
}

export const CasePresentation: React.FC<CasePresentationProps> = ({ caseId, onBack }) => {
  const caseIndex = CASES.findIndex(c => c.id === caseId);
  const caseData = CASES[caseIndex];
  if (!caseData) return null;

  const c = caseData;
  const nihssDrop = c.nihssAdmit - c.nihssDischarge;
  const nihssDropPct = ((nihssDrop / c.nihssAdmit) * 100).toFixed(0);

  // Build TICI bar segments for post score
  const ticiLabels = ['0', '1', '2a', '2b', '2c', '3'];
  const ticiPostIndex = ticiLabels.indexOf(c.ticiPost);

  return (
    <div className="space-y-6">
      {/* Back link */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Case Presentations
      </button>

      <Section title={`Case ${caseIndex + 1} — LVO · Recanalization (TICI ${c.ticiPost})`} variant="solid" className="border-accent/10">
        <div className="text-sm text-white/60 mb-6 max-w-3xl">{c.summary}</div>

        {/* Patient Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Patient', value: `${c.age} yo ${c.sex}`, sub: 'No prior stroke' },
            { label: 'Diagnosis', value: c.diagnosis, sub: c.diagnosisSub },
            { label: 'Procedure', value: 'Mech. Thrombectomy', sub: 'Endovascular MT' },
            { label: 'Outcome', value: `TICI ${c.ticiPost} / NIHSS ${c.nihssDischarge}`, sub: ticiDescription(c.ticiPost) },
          ].map((item) => (
            <div key={item.label} className="bg-black/20 rounded-xl p-4 border border-white/5">
              <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-base font-bold text-white">{item.value}</div>
              <div className="text-xs text-accent/70 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-black/20 rounded-xl p-4 border border-white/5">
            <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-2">Admission NIHSS</div>
            <div className="text-3xl font-bold text-rose-400">{c.nihssAdmit}</div>
            <div className="text-xs text-white/40 mt-1">{nihssSeverity(c.nihssAdmit)} neurological deficit</div>
          </div>
          <div className="bg-black/20 rounded-xl p-4 border border-white/5">
            <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-2">Discharge NIHSS</div>
            <div className="text-3xl font-bold text-emerald-400">{c.nihssDischarge}</div>
            <div className="text-xs text-white/40 mt-1">↓ {nihssDropPct}% reduction from baseline</div>
          </div>
          <div className="bg-black/20 rounded-xl p-4 border border-white/5">
            <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-2">Pre-Procedure TICI</div>
            <div className="text-3xl font-bold text-amber-400">{c.ticiPre}</div>
            <div className="text-xs text-white/40 mt-1">No antegrade perfusion</div>
          </div>
          <div className="bg-black/20 rounded-xl p-4 border border-white/5">
            <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-2">Post-Procedure TICI</div>
            <div className="text-3xl font-bold text-emerald-400">{c.ticiPost}</div>
            <div className="text-xs text-white/40 mt-1">{ticiDescription(c.ticiPost)}</div>
          </div>
        </div>

        {/* Reperfusion & Neurological Recovery */}
        <div className="bg-black/10 rounded-xl border border-white/5 p-5 mb-6">
          <h3 className="text-sm font-semibold text-white mb-4">Reperfusion &amp; Neurological Recovery</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* TICI Scale */}
            <div>
              <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3">TICI Score — Before &amp; After</div>
              <div className="space-y-2 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-rose-400 w-20 shrink-0">Pre — TICI {c.ticiPre}</span>
                  <div className="flex gap-1 flex-1 h-2">
                    {ticiLabels.map((_, i) => (
                      <div key={i} className={`flex-1 rounded ${i === 0 ? 'bg-rose-500/70' : 'bg-white/5'}`} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-emerald-400 w-20 shrink-0">Post — TICI {c.ticiPost}</span>
                  <div className="flex gap-1 flex-1 h-2">
                    {ticiLabels.map((_, i) => (
                      <div key={i} className={`flex-1 rounded ${i <= ticiPostIndex ? (i === ticiPostIndex ? 'bg-emerald-500' : 'bg-emerald-500/25') : 'bg-white/5'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-white/20 pl-[92px]">
                {ticiLabels.map(l => <span key={l}>{l}</span>)}
              </div>
              <p className="text-xs text-white/30 mt-3 leading-relaxed">
                TICI {c.ticiPost} = {c.ticiPost === '3' ? 'full antegrade perfusion of all distal branches. The optimal angiographic endpoint for mechanical thrombectomy.' : 'substantial reperfusion of the target territory.'}
              </p>
            </div>

            {/* NIHSS Flow */}
            <div>
              <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3">NIHSS Score Timeline</div>
              <div className="flex items-center gap-0 py-2">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-rose-400 bg-rose-500/15 flex items-center justify-center text-2xl font-bold text-rose-400 mx-auto mb-1.5">{c.nihssAdmit}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider">Admission</div>
                  <div className="text-[10px] text-white/20">{nihssSeverity(c.nihssAdmit)}</div>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1 px-3 mb-5">
                  <span className="text-xs font-medium text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 whitespace-nowrap">↓ {nihssDrop} points · {nihssDropPct}%</span>
                  <div className="w-full h-px bg-white/10" />
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-emerald-400 bg-emerald-500/15 flex items-center justify-center text-2xl font-bold text-emerald-400 mx-auto mb-1.5">{c.nihssDischarge}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider">Discharge</div>
                  <div className="text-[10px] text-white/20">{nihssSeverity(c.nihssDischarge)}</div>
                </div>
              </div>
              <p className="text-xs text-white/30 mt-3 leading-relaxed">
                {c.nihssDischarge === 0
                  ? 'Complete neurological recovery — discharge NIHSS of 0 is the best possible outcome.'
                  : `Discharge NIHSS ≤ 8 correlates with favorable mRS at 90 days. A ${nihssDrop}-point reduction is a clinically significant result.`}
              </p>
            </div>
          </div>
        </div>

        {/* DSA Images */}
        <div className="bg-black/10 rounded-xl border border-white/5 p-5 mb-6">
          <h3 className="text-sm font-semibold text-white mb-4">Digital Subtraction Angiography (DSA)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 rounded-lg overflow-hidden border border-white/5">
            <div className="relative bg-black">
              <img src={c.dsaPre} alt={`Pre-thrombectomy DSA — TICI ${c.ticiPre}`} className="w-full aspect-[1/1.2] object-cover" />
              <div className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded bg-rose-500/85 text-white">Pre-Procedure</div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                <div className="text-sm font-semibold text-white">Large Vessel Occlusion — TICI {c.ticiPre}</div>
                <div className="text-xs text-white/50">{c.dsaPreCaption}</div>
              </div>
            </div>
            <div className="relative bg-black">
              <img src={c.dsaPost} alt={`Post-thrombectomy DSA — TICI ${c.ticiPost}`} className="w-full aspect-[1/1.2] object-cover" />
              <div className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/85 text-black">Post-Procedure</div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                <div className="text-sm font-semibold text-white">Recanalization — TICI {c.ticiPost}</div>
                <div className="text-xs text-white/50">{c.dsaPostCaption}</div>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-white/20 text-center mt-2">
            DSA · Left: pre-intervention (TICI {c.ticiPre}) · Right: post-mechanical thrombectomy (TICI {c.ticiPost})
          </div>
        </div>

        {/* CT Perfusion — only if CTP data exists */}
        {c.ctp && (
          <div className="bg-black/10 rounded-xl border border-white/5 p-5 mb-6">
            <h3 className="text-sm font-semibold text-white mb-4">CT Perfusion (CTP) — Ischemic Core &amp; Penumbra</h3>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-start">
              <div className="bg-black rounded-lg overflow-hidden border border-white/5">
                <img src={c.ctp.image} alt="CT Perfusion RAPID output" className="w-full" />
                <div className="text-[10px] text-white/30 text-center p-2.5 border-t border-white/5">
                  RAPID automated perfusion analysis · rCBF &lt;30% (core, red) · TMax &gt;6s (hypoperfusion, green)
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3.5">
                  <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 text-rose-400">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    Ischemic Core (rCBF &lt;30%)
                  </div>
                  <div className="text-2xl font-bold text-white leading-none">{c.ctp.coreCC}<span className="text-sm font-normal text-white/40 ml-1">cc</span></div>
                  <div className="text-[11px] text-white/30 mt-1">Irreversibly infarcted tissue</div>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3.5">
                  <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 text-emerald-400">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    Hypoperfused Volume (TMax &gt;6s)
                  </div>
                  <div className="text-2xl font-bold text-white leading-none">{c.ctp.hypoperfusedCC}<span className="text-sm font-normal text-white/40 ml-1">cc</span></div>
                  <div className="text-[11px] text-white/30 mt-1">Total at-risk territory</div>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3.5">
                  <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 text-amber-400">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    Mismatch Volume
                  </div>
                  <div className="text-2xl font-bold text-white leading-none">{c.ctp.mismatchCC}<span className="text-sm font-normal text-white/40 ml-1">cc</span></div>
                  <div className="text-[11px] text-white/30 mt-1">Salvageable penumbra ({c.ctp.hypoperfusedCC} − {c.ctp.coreCC})</div>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3.5">
                  <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 text-blue-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    Mismatch Ratio
                  </div>
                  <div className="text-2xl font-bold text-white leading-none">{c.ctp.mismatchRatio !== null ? c.ctp.mismatchRatio : 'N/A'}</div>
                  <div className="text-[11px] text-white/30 mt-1">{c.ctp.mismatchRatio !== null ? `Tmax / Core — ${c.ctp.mismatchRatio >= 1.8 ? 'meets' : 'near'} DEFUSE-3 threshold` : 'Not applicable — core volume is zero'}</div>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3 text-xs text-white/40 leading-relaxed">
                  {c.ctp.interpretation}
                </div>
              </div>
            </div>

            {/* Map Interpretation Table */}
            <div className="mt-5">
              <div className="text-sm font-semibold text-white mb-3">Map Interpretation</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">Parameter</th>
                      <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">This Case</th>
                      <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">Threshold</th>
                      <th className="text-left text-[11px] font-medium text-white/30 py-2 px-3">Interpretation</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-rose-500/15 text-rose-400 border border-rose-500/25">Core</span></td>
                      <td className="py-2.5 px-3 text-white">{c.ctp.coreCC} cc</td>
                      <td className="py-2.5 px-3 text-white/50">&lt; 70 cc ideal</td>
                      <td className="py-2.5 px-3 text-white/50">{c.ctp.coreCC < 70 ? 'Small core — favorable for intervention' : 'Large core; clinical context supported intervention'}</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">At Risk</span></td>
                      <td className="py-2.5 px-3 text-white">{c.ctp.hypoperfusedCC} cc</td>
                      <td className="py-2.5 px-3 text-white/50">TMax &gt; 6s</td>
                      <td className="py-2.5 px-3 text-white/50">Total hypoperfused volume — penumbra + core combined</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-400 border border-amber-500/25">Salvage</span></td>
                      <td className="py-2.5 px-3 text-white">{c.ctp.mismatchCC} cc</td>
                      <td className="py-2.5 px-3 text-white/50">&gt; 15 cc target</td>
                      <td className="py-2.5 px-3 text-white/50">{c.ctp.mismatchCC >= 15 ? 'Salvageable territory recoverable with recanalization' : 'Limited penumbra; clinical judgment required'}</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3"><span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-500/15 text-blue-400 border border-blue-500/25">Mismatch Ratio</span></td>
                      <td className="py-2.5 px-3 text-white">{c.ctp.mismatchRatio !== null ? c.ctp.mismatchRatio : 'N/A'}</td>
                      <td className="py-2.5 px-3 text-white/50">&gt; 1.8 ideal</td>
                      <td className="py-2.5 px-3 text-white/50">{c.ctp.mismatchRatio === null ? 'Not applicable — core volume is zero' : c.ctp.mismatchRatio >= 1.8 ? 'Exceeds threshold — strong candidate for intervention' : 'Near-threshold; clinical-core mismatch context supported proceeding'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Footer note */}
        <div className="text-[10px] text-white/15 text-center mt-4 italic">
          Case presentation for educational purposes. Patient data is de-identified.
        </div>
      </Section>
    </div>
  );
};
