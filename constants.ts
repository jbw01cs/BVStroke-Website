import { PageData } from './types';

// --- 0. Landing Page (Home) ---
const DATA_HOME: PageData = {
  id: 'home',
  navTitle: 'Home',
  title: 'Brazos Valley Stroke',
  subtitle: 'Regional Clinical Pathways',
  description: "Welcome to the central resource for Brazos Valley Stroke. \n\nThis application aggregates evidence-based protocols for Stroke, and other cerebrovascular pathologies, tailored for the Bryan / College Station and surrounding Brazos Valley region.",
  kpis: [
    { label: "Region", value: "Bryan / CS", tag: "Brazos Valley" },
    { label: "Designation", value: "Primary", tag: "Stroke Centers" },
    { label: "Network", value: "Brazos Valley", tag: "RAC Area" },
    { label: "Helpline", value: "911", tag: "Emergency" }
  ],
  indicationsTitle: "Site Navigation",
  indications: [
    { id: 1, text: "Navigate using the top bar to specific clinical scenarios." },
    { id: 2, text: "Review inclusion/exclusion criteria for MT and IVT." },
    { id: 3, text: "Access dosing tables for Tenecteplase." },
    { id: 4, text: "Evaluate evidence for MeVo, ICAD, and Dissection." },
  ],
  exclusionsTitle: "Key Contacts",
  exclusions: [
    { id: 3, text: "St. Joseph Regional Hospital\n(979) 776-3777" },
    { id: 4, text: "Baylor Scott & White Hospital\n(979) 207-0100" },
  ],
  tableTitle: "Primary Stroke Centers",
  tableHeaders: ["Center Name", "Address", "Contact", "Capabilities"],
  tableData: [
    { col1: "St. Joseph Regional", col2: "2801 Franciscan Dr, Bryan", col3: "(979) 776-3777", col4: "CT/CTA/MRI, TNK, MT, 24/7 Neuro", type: "good", badgeText: "PSC" },
    { col1: "BSW College Station", col2: "700 Scott & White Dr", col3: "(979) 207-0100", col4: "CT/CTA/MRI, TNK, Tele-Neuro", type: "good", badgeText: "PSC" },
  ],
  strokeStats: {
    year: "2025",
    total: 958,
    breakdown: [
      { label: "Ischemic Stroke", count: 606, color: "emerald" },
      { label: "TIA", count: 252, color: "amber" },
      { label: "Intracranial Hemorrhage (ICH)", count: 93, color: "rose" },
      { label: "Subarachnoid Hemorrhage (SAH)", count: 7, color: "indigo" }
    ],
    compareTo: {
      year: "2024",
      total: 960,
      breakdown: [
        { label: "Ischemic Stroke", count: 599, color: "emerald" },
        { label: "TIA", count: 257, color: "amber" },
        { label: "Intracranial Hemorrhage (ICH)", count: 86, color: "rose" },
        { label: "Subarachnoid Hemorrhage (SAH)", count: 18, color: "indigo" }
      ]
    }
  },
  trials: [],
  references: []
};

// --- 1. Mechanical Thrombectomy (MT) ---
const DATA_MT: PageData = {
  id: 'mt',
  navTitle: 'Mech. Thrombectomy',
  title: 'Mechanical Thrombectomy (MT)',
  subtitle: 'LVO Acute Ischemic Stroke',
  description: "Endovascular clot retrieval for large-vessel occlusion (LVO) in acute ischemic stroke.",
  kpis: [
    { label: "Primary Target", value: "Anterior LVO", tag: "ICA / Proximal MCA" },
    { label: "Standard Window", value: "≤ 6 Hours", tag: "NCCT + CTA" },
    { label: "Extended Window", value: "6 – 24 Hours", tag: "Perfusion / MRI" },
    { label: "Procedural Goal", value: "mTICI 2b–3", tag: "Successful reperfusion" }
  ],
  mtStats: {
    total: 599,
    eligibleRange: "60 – 90",
    eligiblePercent: "10 – 15%",
    treatedRange: "36 – 54",
    treatedPercent: "6 – 9%"
  },
  indicationsTitle: "Indications (Checklist)",
  indications: [
    { id: 1, text: "Disabling neurologic deficit consistent with LVO stroke." },
    { id: 2, text: "Confirmed LVO on CTA/MRA (Intracranial ICA or Proximal MCA/M1)." },
    { id: 3, text: "NCCT excludes hemorrhage; early infarct burden acceptable." },
    { id: 4, text: "Baseline function minimal disability (mRS 0–1)." },
    { id: 5, text: "Meets specific time window & imaging selection criteria." },
    { id: 6, text: "Basilar artery occlusion within 24h with NIHSS ≥ 10 (ATTENTION, BAOCHE)." },
    { id: 7, text: "Pediatric patients ≥ 6 years with confirmed LVO." },
  ],
  exclusionsTitle: "Exclusions / Relative",
  exclusions: [
    { id: 1, text: "Intracranial hemorrhage on initial imaging." },
    { id: 2, text: "No treatable target or inaccessible distal occlusion." },
    { id: 3, text: "Severe established infarct (ASPECTS ≤ 2); ASPECTS 3–5 may benefit in extended window (SELECT2, ANGEL-ASPECT)." },
    { id: 4, text: "Severe comorbidity or life expectancy < 6 months." },
    { id: 5, text: "Uncorrectable bleeding diathesis (case-by-case)." },
    { id: 6, text: "Intensive SBP lowering (<140 mmHg) after successful EVT is HARMFUL." },
  ],
  tableTitle: "Treatment Windows & Selection",
  tableHeaders: ["Window", "Candidate Profile", "Imaging Required", "Endpoint Goal"],
  tableData: [
    { col1: "0–6 hours", col2: "Classic anterior LVO (ICA/M1)", col3: "NCCT + CTA (Perfusion optional)", col4: "Fast reperfusion (mTICI 2b-3)", type: "good" },
    { col1: "6–16 hours", col2: "Anterior LVO + Mismatch", col3: "CTP or MRI (DEFUSE 3 criteria)", col4: "mRS shift; mRS 0-2", type: "warn" },
    { col1: "6–24 hours", col2: "Clinical-Core Mismatch", col3: "CTP or MRI (DAWN criteria)", col4: "Functional independence", type: "warn" },
    { col1: "Large Core", col2: "ASPECTS 3–5 (SELECT2, ANGEL-ASPECT)", col3: "NCCT + CTA +/- CTP", col4: "Salvage (Reduced disability)", type: "neutral", badgeText: "≤24h" }
  ],
  trials: [
    { name: "SWIFT PRIME", description: "Standard Window (≤6h)", window: "≤6h", outcome: "mRS 0–2: 60% vs 35%", safety: "sICH 0% vs 3%" },
    { name: "EXTEND-IA", description: "Perfusion-selected", window: "≤4.5h", outcome: "mRS 0–2: 71% vs 40%", safety: "Reperfusion 100% vs 37%" },
    { name: "DEFUSE 3", description: "Perfusion mismatch", window: "6–16h", outcome: "mRS 0–2: 45% vs 17%", safety: "Mortality 14% vs 26%" },
    { name: "DAWN", description: "Clinical-Core mismatch", window: "6–24h", outcome: "mRS 0–2: 49% vs 13%", safety: "sICH 6% vs 3%" },
    { name: "SELECT2", description: "Large Core (ASPECTS 3-5)", window: "≤24h", outcome: "mRS 0–2: 20% vs 7%", safety: "Infrequent sICH" },
    { name: "ANGEL-ASPECT", description: "Large Core EVT (ASPECTS 3-5)", window: "≤24h", outcome: "mRS shift favoring EVT (OR 1.37)", safety: "Confirms SELECT2; sICH 4.3% vs 2.7%" },
    { name: "ATTENTION", description: "Basilar Artery Occlusion EVT", window: "≤12h", outcome: "mRS 0–3 at 90d: 46% vs 23%", safety: "Supports EVT for BAO; NIHSS ≥10" },
    { name: "BAOCHE", description: "Basilar Artery Occlusion EVT", window: "6–24h", outcome: "mRS 0–3: 48% vs 28%", safety: "EVT superior in extended BAO window" }
  ],
  references: [
    { id: 1, text: "2026 AHA/ASA AIS Guidelines", url: "https://www.ahajournals.org/journal/str", linkText: "Stroke 2026" },
    { id: 2, text: "DAWN Trial", url: "https://pubmed.ncbi.nlm.nih.gov/29129157/", linkText: "PubMed" },
    { id: 3, text: "DEFUSE 3 Trial", url: "https://pubmed.ncbi.nlm.nih.gov/29364767/", linkText: "PubMed" },
    { id: 4, text: "SELECT2 (Large Core)", url: "https://pubmed.ncbi.nlm.nih.gov/36762865/", linkText: "NEJM" },
    { id: 5, text: "Heart Disease & Stroke Statistics 2024 Update", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001209", linkText: "Circulation" },
    { id: 6, text: "ANGEL-ASPECT Trial", url: "https://pubmed.ncbi.nlm.nih.gov/37272534/", linkText: "NEJM" },
    { id: 7, text: "ATTENTION Trial (Basilar EVT)", url: "https://pubmed.ncbi.nlm.nih.gov/37272537/", linkText: "NEJM" }
  ]
};

// --- 2. TNKase (Chemical Thrombolysis) ---
const DATA_TNK: PageData = {
  id: 'tnk',
  navTitle: 'TNKase (IVT)',
  title: 'Tenecteplase (TNKase)',
  subtitle: 'Chemical Thrombolysis for AIS',
  description: "A genetically modified variant of alteplase with higher fibrin specificity and longer half-life, allowing for single bolus dosing. Now the preferred thrombolytic at most stroke centers. Not recommended for non-disabling minor stroke (NIHSS ≤5) where DAPT is preferred.",
  kpis: [
    { label: "Dose", value: "0.25 mg/kg", tag: "Max 25mg • Single Bolus" },
    { label: "Time Window", value: "≤ 4.5 Hours", tag: "From Last Known Well" },
    { label: "Target", value: "DTN < 30m", tag: "Door-to-Needle" },
    { label: "2024 Rate", value: "15%", tag: "BV Ischemic Stroke" }
  ],
  indicationsTitle: "Inclusion Criteria",
  indications: [
    { id: 1, text: "Clinical diagnosis of ischemic stroke with measurable, disabling deficit." },
    { id: 2, text: "Onset of symptoms < 4.5 hours before treatment start." },
    { id: 3, text: "Age ≥ 18 years." },
    { id: 4, text: "LVO patients bridging to MT — standard of care (EXTEND-IA TNK)." },
    { id: 5, text: "Non-LVO patients — non-inferior to alteplase (AcT, TRACE-2)." },
    { id: 6, text: "Non-disabling minor stroke (NIHSS ≤5): IVT NOT recommended — use DAPT instead (ARAMIS, TEMPO-2)." },
  ],
  exclusionsTitle: "Contraindications (Same as Alteplase)",
  exclusions: [
    { id: 1, text: "Significant head trauma or prior stroke in last 3 months." },
    { id: 2, text: "Symptoms suggest SAH or active internal bleeding." },
    { id: 3, text: "Recent intracranial/intraspinal surgery." },
    { id: 4, text: "Severe uncontrolled BP (>185/110)." },
    { id: 5, text: "Active anticoagulant use (INR>1.7 or DOAC within 48h)." },
  ],
  tableTitle: "Dosing & Administration",
  tableHeaders: ["Parameter", "Protocol", "Notes", "Key Safety"],
  tableData: [
    { col1: "Dosing", col2: "0.25 mg/kg", col3: "Maximum 25 mg total", col4: "Do NOT confuse w/ MI dose (0.5)", type: "good" },
    { col1: "Administration", col2: "IV Bolus over 5-10 sec", col3: "Flush line before/after", col4: "No infusion required", type: "good" },
    { col1: "Monitoring", col2: "Neuro checks + BP q15m", col3: "ICU/Stroke Unit admission", col4: "Stop if headache/nausea/vomiting", type: "warn" },
    { col1: "Angioedema", col2: "Observe tongue/lips", col3: "Treat w/ steroids/epi if needed", col4: "Less common than w/ Alteplase", type: "neutral" }
  ],
  trials: [
    { name: "EXTEND-IA TNK", description: "TNK 0.25 vs tPA prior to MT", window: "≤4.5h", outcome: "Reperfusion 22% vs 10%", safety: "Better functional outcome" },
    { name: "EXTEND-IA TNK 2", description: "TNK 0.40 vs 0.25 mg/kg", window: "≤4.5h", outcome: "No benefit to higher dose", safety: "Higher bleed risk w/ 0.40" },
    { name: "AcT Trial", description: "TNK vs tPA (All comers)", window: "≤4.5h", outcome: "Non-inferior (mRS 0-1)", safety: "Safety profile similar" },
    { name: "NOR-TEST", description: "TNK 0.4 vs tPA (Minor stroke)", window: "≤4.5h", outcome: "Non-inferior", safety: "Included many mimics" },
    { name: "TRACE-2", description: "TNK vs tPA (China)", window: "≤4.5h", outcome: "Non-inferior", safety: "Consistent w/ AcT" },
    { name: "ARAMIS", description: "IVT vs No IVT in minor stroke", window: "≤4.5h", outcome: "No benefit of IVT over DAPT alone", safety: "Supports DAPT-first for NIHSS ≤5" },
    { name: "TEMPO-2", description: "TNK vs DAPT in minor stroke/TIA", window: "≤12h", outcome: "TNK no better than DAPT; trend toward harm", safety: "Stopped early; IVT not recommended for minor stroke" },
    { name: "INSPIRES", description: "Clopidogrel + ASA in atherosclerotic minor stroke/TIA", window: "≤72h", outcome: "DAPT superior for ICAD-related mechanism", safety: "Supports DAPT (not IVT) for atherosclerotic TIA/minor stroke" }
  ],
  references: [
    { id: 1, text: "Campbell et al. (EXTEND-IA TNK)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1804798", linkText: "NEJM 2018" },
    { id: 2, text: "Menon et al. (AcT Trial)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)01054-6/fulltext", linkText: "Lancet 2022" },
    { id: 3, text: "2026 AHA/ASA AIS Guidelines", url: "https://www.ahajournals.org/journal/str", linkText: "Stroke 2026" },
    { id: 4, text: "TEMPO-2 Trial", url: "https://pubmed.ncbi.nlm.nih.gov/37272535/", linkText: "NEJM" }
  ]
};

// --- 3. MeVo (Medium Vessel Occlusion) ---
const DATA_MEVO: PageData = {
  id: 'mevo',
  navTitle: 'MeVo (Distal)',
  title: 'MeVo Thrombectomy',
  subtitle: 'Distal & Medium Vessel Occlusions',
  description: "Endovascular treatment of M2/M3, A1/A2, and P1/P2 segments. While technically feasible with modern mini-catheters, completed RCTs (ESCAPE-MeVO, DISTAL) have definitively failed to demonstrate benefit over best medical management (BMM). Routine EVT for MeVo is not recommended — individual cases with disabling deficits require shared decision-making.",
  kpis: [
    { label: "Anatomy", value: "M2-3 / A1-2 / P1", tag: "Distal to Circle of Willis" },
    { label: "Tech. Success", value: "> 85%", tag: "High reperfusion rates" },
    { label: "Clinical Data", value: "Neutral", tag: "RCTs vs Medical Mgmt" },
    { label: "Key Factor", value: "Eloquence", tag: "Deficit vs Risk" }
  ],
  indicationsTitle: "Selection Factors (Case-by-Case)",
  indications: [
    { id: 1, text: "Disabling deficit in eloquent territory (e.g., Aphasia, Hemiplegia)." },
    { id: 2, text: "Failed IV Thrombolysis or ineligible for IVT." },
    { id: 3, text: "Accessible anatomy for smaller devices (3mm/4mm stentrievers, 3-4Fr aspiration)." },
    { id: 4, text: "No large established core in the territory." },
    { id: 5, text: "Understanding that evidence is currently equivocal (Shared decision making)." },
  ],
  exclusionsTitle: "Factors Favoring Medical Management",
  exclusions: [
    { id: 1, text: "Mild or non-disabling symptoms (low NIHSS)." },
    { id: 2, text: "Asymptomatic occlusion (Incidental finding)." },
    { id: 3, text: "Extreme tortuosity increasing procedural risk." },
    { id: 4, text: "Very distal (M3/M4) without clear penumbra." },
  ],
  protocolNote: "The decision to treat MeVo is often driven by the 'eloquence' of the cortex involved rather than just the vessel size.",
  tableTitle: "Anatomical Targets & Techniques",
  tableHeaders: ["Segment", "Risk Profile", "Technique", "Clinical Nuance"],
  tableData: [
    { col1: "M2 (MCA)", col2: "Moderate", col3: "Mini-Stentriever or Aspiration", col4: "Strongest case for EVT if eloquent", type: "good" },
    { col1: "A1 / A2 (ACA)", col2: "High (Leg paresis)", col3: "Smaller systems required", col4: "Often managed medically if stable", type: "warn" },
    { col1: "P1 / P2 (PCA)", col2: "Visual Field", col3: "High risk (perforators)", col4: "Vision loss often non-disabling?", type: "neutral" },
    { col1: "M3 / Distal", col2: "Hemorrhagic Risk", col3: "Pharmacologic intra-arterial tPA?", col4: "RCTs do not support routine EVT", type: "bad" }
  ],
  trials: [
    { name: "ESCAPE-MeVO", description: "M2/M3/A1/P1 vs BMM", window: "RCT (Published 2024)", outcome: "Neutral — no mRS shift benefit (primary endpoint missed)", safety: "Higher ICH rate in EVT arm" },
    { name: "DISTAL", description: "Distal occlusion RCT (Europe)", window: "RCT (Published 2024)", outcome: "Neutral — EVT no better than BMM", safety: "No clinical benefit" },
    { name: "DISCOUNT", description: "MeVo Thrombectomy", window: "RCT", outcome: "Pending / Mixed", safety: "Technical success ≠ Clinical benefit" },
    { name: "Previous Registries", description: "Observational Data", window: "Retrospective", outcome: "Suggested benefit", safety: "Likely selection bias (treaters chose best cases)" }
  ],
  references: [
    { id: 1, text: "ESCAPE-MeVO Trial (Ospel et al., 2024)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2314867", linkText: "NEJM 2024" },
    { id: 2, text: "DISTAL Trial (Bhogal et al., 2024)", url: "https://clinicaltrials.gov/ct2/show/NCT05029414", linkText: "ClinicalTrials.gov" },
    { id: 3, text: "2026 AHA/ASA AIS Guidelines", url: "https://www.ahajournals.org/journal/str", linkText: "Stroke 2026" }
  ]
};

// --- 4. CT Perfusion (CTP) ---
const DATA_CTP: PageData = {
  id: 'ctp',
  navTitle: 'CT Perfusion',
  title: 'CT Perfusion (CTP)',
  subtitle: 'Physiology & Interpretation',
  description: "Advanced imaging to distinguish irreversibly damaged core from salvageable penumbra. Essential for decision making in the extended window (6–24h) or stroke of unknown onset (Wake-Up).",
  kpis: [
    { label: "Ischemic Core", value: "CBF < 30%", tag: "Irreversible" },
    { label: "Penumbra", value: "Tmax > 6s", tag: "Tissue at Risk" },
    { label: "Mismatch", value: "Ratio > 1.8", tag: "Target for Therapy" },
    { label: "Total Vol", value: "Core < 70ml", tag: "Ideal candidate" }
  ],
  indicationsTitle: "When to Obtain CTP",
  indications: [
    { id: 1, text: "Last Known Well > 6 hours (Extended Window)." },
    { id: 2, text: "Wake-up Stroke / Unknown Time of Onset." },
    { id: 3, text: "Evaluation for TNK in extended window (per local protocol)." },
    { id: 4, text: "Distinguishing mimics (seizure/migraine) from stroke (though MRI better)." },
    { id: 5, text: "Confirming small core in late-presenting LVO." },
  ],
  exclusionsTitle: "Pitfalls & Artifacts",
  exclusions: [
    { id: 1, text: "Motion Artifact (Head movement creates 'ghost' cores)." },
    { id: 2, text: "Bone Artifact (Base of skull interference)." },
    { id: 3, text: "Poor Contrast Bolus (Low cardiac output / poor IV access)." },
    { id: 4, text: "Chronic Infarcts (Can mimic core or be excluded)." },
    { id: 5, text: "Seizure (Hyperperfusion can look misleading)." },
  ],
  tableTitle: "Map Interpretation",
  tableHeaders: ["Parameter", "Threshold", "Physiology", "Implication"],
  tableData: [
    { col1: "CBF (Flow)", col2: "< 30% of normal", col3: "Infarct Core (Dead tissue)", col4: "If volume >70ml, poor outcome likely", type: "bad", badgeText: "Core" },
    { col1: "Tmax (Time)", col2: "> 6.0 seconds", col3: "Hypoperfusion (Penumbra + Core)", col4: "Total area of ischemia", type: "warn", badgeText: "At Risk" },
    { col1: "Mismatch Vol", col2: "Tmax Vol - Core Vol", col3: "Salvageable Tissue", col4: "Target for reperfusion (>15ml)", type: "good", badgeText: "Salvage" },
    { col1: "Mismatch Ratio", col2: "> 1.8", col3: "Ratio of Tmax / Core", col4: "Indicates significant benefit to Rx", type: "good" }
  ],
  trials: [
    { name: "DEFUSE 3", description: "6-16h Window", window: "Selection RCT", outcome: "Core <70ml, Ratio >1.8, Vol >15ml", safety: "Basis for automated parameters" },
    { name: "DAWN", description: "6-24h Window", window: "Selection RCT", outcome: "Clinical-Core Mismatch", safety: "Used volume criteria" },
    { name: "EXTEND", description: "4.5-9h Thrombolysis", window: "IV tPA RCT", outcome: "Perfusion mismatch selected", safety: "Benefit of IVT in late window" },
    { name: "CRISP", description: "CTP in early window?", window: "Observational", outcome: "Not required <6h", safety: "Delays treatment if used early" }
  ],
  references: [
    { id: 1, text: "Albers et al. (DEFUSE 3)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1713973", linkText: "NEJM" },
    { id: 2, text: "Nogueira et al. (DAWN)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1706442", linkText: "NEJM" },
    { id: 3, text: "AHA Guidelines (Imaging)", url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211", linkText: "Stroke" }
  ]
};

// --- 5. ICAD (Intracranial Atherosclerotic Disease) ---
const DATA_ICAD: PageData = {
  id: 'icad',
  navTitle: 'ICAD & Stenting',
  title: 'Intracranial Atherosclerotic Disease',
  subtitle: 'Aggressive Medical Management vs. Stenting',
  description: "Management of symptomatic ICAD (70-99% stenosis). Evidence strongly favors aggressive medical management as first-line therapy. Stenting is reserved for select refractory cases.",
  kpis: [
    { label: "Primary Rx", value: "Medical Mgmt", tag: "DAPT + Statin + BP" },
    { label: "DAPT Duration", value: "90 Days", tag: "ASA + Clopidogrel" },
    { label: "Statin Goal", value: "LDL < 70", tag: "High-intensity statin" },
    { label: "BP Target", value: "< 140 mmHg", tag: "Stable control" }
  ],
  indicationsTitle: "Criteria for Intervention (Stenting)",
  indications: [
    { id: 1, text: "Recurrent TIA/Stroke despite aggressive medical therapy (Failure of Medical Rx)." },
    { id: 2, text: "Severe stenosis (70–99%) in territory of symptoms." },
    { id: 3, text: "Good mRS (0-1) prior to event." },
    { id: 4, text: "Consider if hypoperfusion symptoms dependent on blood pressure." },
    { id: 5, text: "WEAVE/WOVEN protocol compliance (On-label use)." },
  ],
  exclusionsTitle: "Factors Favoring Medical Only",
  exclusions: [
    { id: 1, text: "First presentation (Medical management superior in SAMMPRIS)." },
    { id: 2, text: "Stenosis < 70%." },
    { id: 3, text: "Long lesion length (>14mm) or excessive tortuosity." },
    { id: 4, text: "Symptoms not clearly attributable to vascular territory." },
    { id: 5, text: "High periprocedural risk anatomy." },
  ],
  tableTitle: "Management Protocols",
  tableHeaders: ["Strategy", "Regimen", "Duration", "Evidence"],
  tableData: [
    { col1: "SAMMPRIS Protocol", col2: "ASA 325mg + Clopidogrel 75mg", col3: "90 days, then monotherapy", col4: "Standard of Care", type: "good" },
    { col1: "Lipid Control", col2: "Rosuvastatin 20-40 or Atorva 80", col3: "Indefinite", col4: "Goal LDL < 70 mg/dL", type: "good" },
    { col1: "Risk Factors", col2: "BP < 140/90, HbA1c < 7%", col3: "Permanent lifestyle mod", col4: "Critical for prevention", type: "neutral" },
    { col1: "Wingspan Stent", col2: "Self-expanding nitinol stent", col3: "Procedure + DAPT", col4: "High risk (14.7% periproc)", type: "bad", badgeText: "Refractory Only" }
  ],
  trials: [
    { name: "SAMMPRIS", description: "Stenting vs Aggressive Medical", window: "RCT", outcome: "Stenting 14.7% stroke/death vs 5.8% Medical", safety: "Stopped early for harm" },
    { name: "VISSIT", description: "Balloon-expandable stent vs Medical", window: "RCT", outcome: "Stenting 36% vs Medical 15%", safety: "Worse outcomes w/ stent" },
    { name: "WEAVE", description: "Post-market surveillance (On-label)", window: "Registry", outcome: "2.6% Stroke/Death rate", safety: "Safe in experienced hands" },
    { name: "CASSISS", description: "China Stenting vs Medical", window: "RCT", outcome: "No difference (Non-inferior)", safety: "Medical mgmt still preferred" }
  ],
  references: [
    { id: 1, text: "SAMMPRIS Trial (Chimowitz et al.)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1105335", linkText: "NEJM 2011" },
    { id: 2, text: "WEAVE Trial (Alexander et al.)", url: "https://stroke.ahajournals.org/content/50/4/889", linkText: "Stroke 2019" },
    { id: 3, text: "WASID Trial", url: "https://pubmed.ncbi.nlm.nih.gov/15766994/", linkText: "Warfarin vs ASA" }
  ]
};

// --- 6. Cervical Artery Dissection ---
const DATA_DISSECTION: PageData = {
  id: 'dissection',
  navTitle: 'Carotid/Vert Dissection',
  title: 'Cervical Artery Dissection',
  subtitle: 'Carotid & Vertebral Pathologies',
  description: "A tear in the intimal lining of the cervical arteries, a common cause of stroke in young adults. Treatment focuses on preventing thromboembolism while the vessel heals.",
  kpis: [
    { label: "Primary Rx", value: "Antithrombotic", tag: "Antiplatelet OR Anticoagulation" },
    { label: "Duration", value: "3 – 6 Months", tag: "Until imaging confirms healing" },
    { label: "Healing Rate", value: "~80-90%", tag: "Stenosis resolution" },
    { label: "Recurrence", value: "~2% @ 90d", tag: "Low recurrent stroke rate" }
  ],
  indicationsTitle: "Treatment Selection Factors",
  indications: [
    { id: 1, text: "Extracranial dissection: Antiplatelet OR Anticoagulation (Equivocal efficacy)." },
    { id: 2, text: "Intracranial dissection: Antiplatelet preferred (Avoid anticoagulation due to SAH risk)." },
    { id: 3, text: "Presence of free-floating thrombus: Anticoagulation often favored." },
    { id: 4, text: "Pseudoaneurysm formation: Doesn't mandate AC; monitor size." },
    { id: 5, text: "Persistent ischemia despite AP: Switch to AC or consider endovascular." },
  ],
  exclusionsTitle: "Red Flags / Considerations",
  exclusions: [
    { id: 1, text: "Intracranial extension (High SAH risk with Heparin/Warfarin)." },
    { id: 2, text: "Large infarction (Hemorrhagic conversion risk)." },
    { id: 3, text: "Connective tissue disorders (Ehlers-Danlos IV, Marfan)." },
    { id: 4, text: "Expanding pseudoaneurysm causing mass effect (CN palsies)." },
  ],
  tableTitle: "Treatment Strategies",
  tableHeaders: ["Strategy", "Regimen", "Pros", "Cons"],
  tableData: [
    { col1: "Antiplatelet (AP)", col2: "ASA or Clopidogrel", col3: "Ease of use, lower bleed risk", col4: "Less effective for large thrombus?", type: "good" },
    { col1: "Anticoagulation (AC)", col2: "Warfarin or Heparin", col3: "Theoretically better for clot", col4: "Higher bleeding risk, monitoring", type: "warn" },
    { col1: "Endovascular", col2: "Stenting / Embolization", col3: "Salvage for hemodynamic failure", col4: "High risk, permanent implant", type: "bad", badgeText: "Rescue" },
    { col1: "Thrombolysis (IVT)", col2: "tPA / TNK", col3: "Allowed if within window", col4: "Small risk of extension/PE", type: "neutral" }
  ],
  trials: [
    { name: "CADISS", description: "Antiplatelet vs Anticoagulation", window: "RCT (n=250)", outcome: "No difference in stroke risk (2-3%)", safety: "Stroke rate lower than expected" },
    { name: "TREAT-CAD", description: "ASA vs Vitamin K Antagonist", window: "Non-inferiority", outcome: "Failed to prove non-inferiority for ASA", safety: "But clinical outcomes similar" },
    { name: "Meta-Analyses", description: "Pooled observational data", window: "Review", outcome: "Equivocal efficacy AP vs AC", safety: "AC has higher bleed risk" }
  ],
  references: [
    { id: 1, text: "CADISS Trial Investigators", url: "https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(15)00018-9/fulltext", linkText: "Lancet Neurol" },
    { id: 2, text: "TREAT-CAD Trial", url: "https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(21)00044-2/fulltext", linkText: "Lancet Neurol" },
    { id: 3, text: "ESO Guidelines on Carotid Dissection", url: "https://journals.sagepub.com/doi/10.1177/23969873211046475", linkText: "ESO 2021" }
  ]
};

// --- 7. Elevated ICP / Cerebral Edema ---
const DATA_ICP: PageData = {
  id: 'icp',
  navTitle: 'ICP & Edema',
  title: 'Elevated ICP & Cerebral Edema',
  subtitle: 'Ischemic & Hemorrhagic Stroke',
  description: "",
  kpis: [
    { label: "ICP Target", value: "< 22 mm Hg", tag: "Sustained > 5 min triggers tx" },
    { label: "CPP Target", value: "60 – 70 mm Hg", tag: "Avoid CPP < 60" },
    { label: "Serum Na Goal", value: "145 – 155 mEq/L", tag: "Hypertonic saline" },
    { label: "Serum Osm Goal", value: "< 320 mOsm/kg", tag: "Mannitol therapy" }
  ],
  indicationsTitle: "Surgical Indications",
  indications: [
    { id: 1, text: "Decompressive hemicraniectomy for malignant MCA infarction in patients ≤ 60y who deteriorate within 48h despite medical therapy." },
    { id: 2, text: "Decompressive hemicraniectomy in selected patients > 60y reduces mortality; functional outcome benefit is uncertain." },
    { id: 3, text: "Suboccipital craniectomy for cerebellar infarct ≥ 15 mL with brainstem compression, neurological deterioration, or radiographic mass effect." },
    { id: 4, text: "Cerebellar ICH with deterioration, brainstem compression, hydrocephalus, or hematoma volume ≥ 15 mL → emergent surgical evacuation ± EVD." },
    { id: 5, text: "EVD for obstructive hydrocephalus from cerebellar stroke or large IVH; add intraventricular thrombolytic for large IVH to reduce mortality." },
    { id: 6, text: "Minimally invasive evacuation of supratentorial ICH (20–30 mL+) reduces mortality." },
    { id: 7, text: "Open craniotomy for supratentorial ICH may be considered as a lifesaving measure in deteriorating patients." },
  ],
  exclusionsTitle: "Therapies NOT Recommended",
  exclusions: [
    { id: 1, text: "Corticosteroids: not recommended for ischemic or hemorrhagic stroke edema (increased infection risk without benefit)." },
    { id: 2, text: "Therapeutic hypothermia and barbiturate coma: not routinely recommended." },
    { id: 3, text: "IV glibenclamide for large hemispheric infarct: no functional benefit." },
    { id: 4, text: "Decompressive surgery > 72h after onset is associated with worse outcomes — operate within 48h when indicated." },
    { id: 5, text: "Avoid prophylactic hyperventilation; brief PaCO₂ reduction (30–35) only as a bridge to definitive therapy." },
    { id: 6, text: "Avoid hypotonic IV fluids and D5W; serum Na < 135 worsens edema." },
  ],
  protocolNote: "General measures first: head of bed 30°, neutral neck, normothermia, normoglycemia, treat pain/agitation, normocapnia, avoid hypoxia, treat seizures. Escalate to osmotherapy → consider surgical decompression for refractory ICP or clinical deterioration.",
  tableTitle: "Surgical Evidence Summary",
  tableHeaders: ["Intervention", "Target Population", "Timing / Window", "Outcome"],
  tableData: [
    { col1: "Hemicraniectomy", col2: "Malignant MCA, age ≤ 60", col3: "< 48h from onset", col4: "↓ Mortality ~50%; ~43% achieve good functional outcome (mRS ≤ 3)", type: "good", badgeText: "DH ≤60y" },
    { col1: "Hemicraniectomy", col2: "Malignant MCA, age > 60", col3: "< 48h", col4: "↓ Mortality; functional benefit uncertain", type: "warn", badgeText: "DH >60y" },
    { col1: "Suboccipital craniectomy", col2: "Cerebellar infarct ≥ 15 mL with mass effect", col3: "Before brainstem compression", col4: "↓ Mortality; better functional recovery vs medical alone", type: "good", badgeText: "Cerebellar AIS" },
    { col1: "Suboccipital craniectomy + evacuation", col2: "Cerebellar ICH ≥ 15 mL or deterioration", col3: "Emergent", col4: "↓ Mortality vs medical management", type: "good", badgeText: "Cerebellar ICH" },
    { col1: "Minimally invasive evacuation", col2: "Supratentorial ICH 20–30 mL+", col3: "Within 72h", col4: "↓ Mortality; functional outcome neutral; benefit if residual clot ≤ 15 mL", type: "warn", badgeText: "MIS ICH" },
    { col1: "EVD ± intraventricular thrombolytic", col2: "Obstructive hydrocephalus / large IVH", col3: "Acute", col4: "↓ Mortality; functional benefit greatest with > 85% IVH clearance", type: "good", badgeText: "EVD/IVH" }
  ],
  osmoticAgents: [
    {
      name: "Mannitol 20%",
      subtitle: "Osmotic diuretic — first-line bolus option",
      bolus: "0.25 – 1.0 g/kg IV over 15 – 30 min",
      maintenance: "0.25 – 0.5 g/kg IV every 4 – 6 h PRN",
      targets: "Serum osm < 320 mOsm/kg • Osm gap < 10 – 20 • SBP > 90 mm Hg",
      notes: "Free-water diuresis → risk of hypovolemia, hypokalemia, AKI, rebound ICP. Replace urine output.",
      access: "Peripheral IV acceptable",
      accent: "mannitol"
    },
    {
      name: "Hypertonic Saline 1.5% (NaCl)",
      subtitle: "Maintenance / sustained mild hyperosmolar therapy",
      bolus: "Not typically used as bolus",
      maintenance: "Continuous infusion 30 – 100 mL/h, titrate to target Na",
      targets: "Serum Na 145 – 155 mEq/L • Δ Na ≤ 8 – 10 mEq/L per 24 h",
      notes: "Lower osmolarity makes this the safest HTS for peripheral and prolonged use. Useful after a 3% bolus to maintain hyperosmolar state.",
      access: "Peripheral IV acceptable",
      accent: "hts15"
    },
    {
      name: "Hypertonic Saline 3% (NaCl)",
      subtitle: "Workhorse osmotherapy — bolus + maintenance",
      bolus: "250 – 500 mL IV over 15 – 30 min (≈ 2.5 – 5 mL/kg)",
      maintenance: "Continuous infusion 30 – 150 mL/h, titrate to target Na",
      targets: "Serum Na 145 – 155 mEq/L (do not exceed 160) • Recheck Na q4–6h",
      notes: "Preferred when hypovolemia or AKI limits mannitol. Avoid rapid Na correction (> 10 – 12 mEq/L per 24 h) to limit central pontine myelinolysis risk.",
      access: "Central line preferred for prolonged or bolus infusion",
      accent: "hts3"
    },
    {
      name: "23.4% NaCl  (Rescue)",
      subtitle: "Reserved for refractory ICP / impending herniation",
      bolus: "30 mL IV over 5 – 10 min  ×  may repeat once",
      maintenance: "Not for maintenance — bridge to definitive therapy",
      targets: "Reverses transtentorial herniation; transient ↓ ICP within minutes",
      notes: "Strict central line requirement. Anticipate transient hypotension. Used as a bridge to decompressive surgery.",
      access: "Central line REQUIRED",
      accent: "rescue"
    }
  ],
  trials: [
    { name: "DECIMAL / DESTINY / HAMLET (pooled)", description: "Hemicraniectomy in malignant MCA, age ≤ 60", window: "< 48h", outcome: "Absolute mortality reduction ~50%; mRS ≤ 3 at 12 mo: 43% vs 21%", safety: "Supports early decompression in younger patients" },
    { name: "DESTINY II", description: "Hemicraniectomy ≥ 60y", window: "< 48h", outcome: "12-mo mortality 33% vs 70%; few patients achieved mRS ≤ 3", safety: "Mortality benefit but high residual disability" },
    { name: "CHARM", description: "IV glibenclamide for large hemispheric infarct", window: "Acute", outcome: "No improvement in 90-day mRS shift", safety: "Not recommended" },
    { name: "MISTIE III", description: "Minimally invasive evacuation + alteplase for supratentorial ICH", window: "Within 72h", outcome: "↓ Mortality at 7d, 180d, 365d; primary functional endpoint neutral", safety: "Functional benefit when residual clot ≤ 15 mL" },
    { name: "CLEAR III", description: "EVD + alteplase for severe IVH", window: "Acute", outcome: "↓ Mortality at 180d; functional benefit when > 85% IVH cleared", safety: "Lower ventriculitis vs saline arm" },
    { name: "Kuramatsu meta-analysis", description: "Cerebellar ICH surgical evacuation", window: "Emergent", outcome: "Survival benefit at 3 and 12 mo for hematomas ≥ 15 mL", safety: "Mortality benefit clear; functional outcome equivocal" }
  ],
  references: [
    { id: 1, text: "2026 AHA/ASA AIS Guidelines — §6 In-Hospital Management of Acute Complications", url: "https://www.ahajournals.org/journal/str", linkText: "Stroke 2026" },
    { id: 2, text: "2022 AHA/ASA Spontaneous Intracerebral Hemorrhage Guideline", url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000407", linkText: "Stroke 2022" },
    { id: 3, text: "Vahedi K. DECIMAL/DESTINY/HAMLET pooled analysis. Lancet Neurol 2007", url: "https://pubmed.ncbi.nlm.nih.gov/17303527/", linkText: "PubMed" },
    { id: 4, text: "Jüttler E. DESTINY II. NEJM 2014", url: "https://pubmed.ncbi.nlm.nih.gov/24645942/", linkText: "NEJM" },
    { id: 5, text: "Hanley DF. MISTIE III. Lancet 2019", url: "https://pubmed.ncbi.nlm.nih.gov/30739747/", linkText: "Lancet" },
    { id: 6, text: "Hanley DF. CLEAR III. Lancet 2017", url: "https://pubmed.ncbi.nlm.nih.gov/28081952/", linkText: "Lancet" },
    { id: 7, text: "Sheth KN. CHARM (IV glibenclamide). Lancet Neurol 2024", url: "https://pubmed.ncbi.nlm.nih.gov/39577925/", linkText: "Lancet Neurol" },
    { id: 8, text: "Kuramatsu JB. Cerebellar ICH evacuation. JAMA 2019", url: "https://pubmed.ncbi.nlm.nih.gov/31593271/", linkText: "JAMA" }
  ]
};

export const PAGES = {
  home: DATA_HOME,
  mt: DATA_MT,
  tnk: DATA_TNK,
  mevo: DATA_MEVO,
  ctp: DATA_CTP,
  icad: DATA_ICAD,
  dissection: DATA_DISSECTION,
  icp: DATA_ICP
};

export type PageId = keyof typeof PAGES;