import { PageData } from './types';

// --- 0. Landing Page (Home) ---
const DATA_HOME: PageData = {
  id: 'home',
  navTitle: 'Home',
  title: 'Brazos Valley Stroke',
  subtitle: 'Regional Clinical Pathways',
  description: "Welcome to the central resource for **Brazos Valley Stroke**. \n\nThis application aggregates evidence-based protocols for **Stroke**, and other cerebrovascular pathologies, tailored for the **Bryan / College Station** and surrounding Brazos Valley region.",
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
    year: "2024",
    total: 1046,
    breakdown: [
      { label: "Ischemic Stroke", count: 599, color: "emerald" },
      { label: "TIA", count: 257, color: "amber" },
      { label: "Intracranial Hemorrhage (ICH)", count: 86, color: "rose" },
      { label: "Subarachnoid Hemorrhage (SAH)", count: 18, color: "indigo" }
    ]
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
  description: "Endovascular clot retrieval for **large-vessel occlusion (LVO)** in acute ischemic stroke.",
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
  ],
  exclusionsTitle: "Exclusions / Relative",
  exclusions: [
    { id: 1, text: "Intracranial hemorrhage on initial imaging." },
    { id: 2, text: "No treatable target or inaccessible distal occlusion." },
    { id: 3, text: "Large established infarct (ASPECTS < 6)." },
    { id: 4, text: "Severe comorbidity or life expectancy < 6 months." },
    { id: 5, text: "Uncorrectable bleeding diathesis (case-by-case)." },
  ],
  tableTitle: "Treatment Windows & Selection",
  tableHeaders: ["Window", "Candidate Profile", "Imaging Required", "Endpoint Goal"],
  tableData: [
    { col1: "0–6 hours", col2: "Classic anterior LVO (ICA/M1)", col3: "NCCT + CTA (Perfusion optional)", col4: "Fast reperfusion (mTICI 2b-3)", type: "good" },
    { col1: "6–16 hours", col2: "Anterior LVO + Mismatch", col3: "CTP or MRI (DEFUSE 3 criteria)", col4: "mRS shift; mRS 0-2", type: "warn" },
    { col1: "6–24 hours", col2: "Clinical-Core Mismatch", col3: "CTP or MRI (DAWN criteria)", col4: "Functional independence", type: "warn" },
    { col1: "Large Core", col2: "ASPECTS 3-5 (SELECT2)", col3: "NCCT + CTA +/- CTP", col4: "Salvage (Reduced disability)", type: "neutral", badgeText: "Any Time" }
  ],
  trials: [
    { name: "SWIFT PRIME", description: "Standard Window (≤6h)", window: "≤6h", outcome: "mRS 0–2: 60% vs 35%", safety: "sICH 0% vs 3%" },
    { name: "EXTEND-IA", description: "Perfusion-selected", window: "≤4.5h", outcome: "mRS 0–2: 71% vs 40%", safety: "Reperfusion 100% vs 37%" },
    { name: "DEFUSE 3", description: "Perfusion mismatch", window: "6–16h", outcome: "mRS 0–2: 45% vs 17%", safety: "Mortality 14% vs 26%" },
    { name: "DAWN", description: "Clinical-Core mismatch", window: "6–24h", outcome: "mRS 0–2: 49% vs 13%", safety: "sICH 6% vs 3%" },
    { name: "SELECT2", description: "Large Core (ASPECTS 3-5)", window: "≤24h", outcome: "mRS 0–2: 20% vs 7%", safety: "Infrequent sICH" }
  ],
  references: [
    { id: 1, text: "AHA/ASA Guideline Update (2019)", url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211", linkText: "Stroke" },
    { id: 2, text: "DAWN Trial", url: "https://pubmed.ncbi.nlm.nih.gov/29129157/", linkText: "PubMed" },
    { id: 3, text: "DEFUSE 3 Trial", url: "https://pubmed.ncbi.nlm.nih.gov/29364767/", linkText: "PubMed" },
    { id: 4, text: "SELECT2 (Large Core)", url: "https://pubmed.ncbi.nlm.nih.gov/36762865/", linkText: "NEJM" },
    { id: 5, text: "Heart Disease & Stroke Statistics 2024 Update", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001209", linkText: "Circulation" },
    { id: 6, text: "Recent Trends in Mechanical Thrombectomy (2023)", url: "https://jnis.bmj.com/", linkText: "JNIS" }
  ]
};

// --- 2. TNKase (Chemical Thrombolysis) ---
const DATA_TNK: PageData = {
  id: 'tnk',
  navTitle: 'TNKase (IVT)',
  title: 'Tenecteplase (TNKase)',
  subtitle: 'Chemical Thrombolysis for AIS',
  description: "A genetically modified variant of alteplase with **higher fibrin specificity** and longer half-life, allowing for **single bolus dosing**. Preferred in many centers for LVO bridge therapy.",
  kpis: [
    { label: "Dose", value: "0.25 mg/kg", tag: "Max 25mg • Single Bolus" },
    { label: "Time Window", value: "≤ 4.5 Hours", tag: "From Last Known Well" },
    { label: "Target", value: "DTN < 30m", tag: "Door-to-Needle" },
    { label: "2024 Rate", value: "15%", tag: "BV Ischemic Stroke" }
  ],
  indicationsTitle: "Inclusion Criteria",
  indications: [
    { id: 1, text: "Clinical diagnosis of ischemic stroke with measurable deficit." },
    { id: 2, text: "Onset of symptoms < 4.5 hours before treatment start." },
    { id: 3, text: "Age ≥ 18 years." },
    { id: 4, text: "Considered standard of care for LVO patients bridging to MT (EXTEND-IA TNK)." },
    { id: 5, text: "Non-LVO patients (AcT trial showed non-inferiority to alteplase)." },
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
    { name: "TRACE-2", description: "TNK vs tPA (China)", window: "≤4.5h", outcome: "Non-inferior", safety: "Consistent w/ AcT" }
  ],
  references: [
    { id: 1, text: "Campbell et al. (EXTEND-IA TNK)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1804798", linkText: "NEJM 2018" },
    { id: 2, text: "Menon et al. (AcT Trial)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)01054-6/fulltext", linkText: "Lancet 2022" },
    { id: 3, text: "AHA/ASA Scientific Statement (2019)", url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000203", linkText: "Stroke" }
  ]
};

// --- 3. MeVo (Medium Vessel Occlusion) ---
const DATA_MEVO: PageData = {
  id: 'mevo',
  navTitle: 'MeVo (Distal)',
  title: 'MeVo Thrombectomy',
  subtitle: 'Distal & Medium Vessel Occlusions',
  description: "Endovascular treatment of **M2/M3, A1/A2, and P1/P2** segments. While technically feasible with modern mini-catheters, recent RCTs have **failed to demonstrate superiority** over best medical management (BMM), suggesting careful patient selection is critical.",
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
    { name: "ESCAPE-MeVO", description: "M2/M3/A1/P1 vs BMM", window: "RCT (Stopped)", outcome: "Neutral (mRS shift not signif)", safety: "More ICH in EVT arm (trend)" },
    { name: "DISTAL", description: "Distal occlusion RCT", window: "RCT (Stopped)", outcome: "Neutral / Futile", safety: "No clear benefit over BMM" },
    { name: "DISCOUNT", description: "MeVo Thrombectomy", window: "RCT", outcome: "Pending / Mixed", safety: "Technical success ≠ Clinical benefit" },
    { name: "Previous Registries", description: "Observational Data", window: "Retrospective", outcome: "Suggested benefit", safety: "Likely selection bias (treaters chose best cases)" }
  ],
  references: [
    { id: 1, text: "ESCAPE-MeVO Presentation", url: "https://www.nejm.org/", linkText: "Clinical Trials (Pending)" },
    { id: 2, text: "DISTAL Trial Info", url: "https://clinicaltrials.gov/ct2/show/NCT05029414", linkText: "ClinicalTrials.gov" },
    { id: 3, text: "Sarraj et al. (MeVo Review)", url: "https://www.strokejournal.org/article/S1052-3057(23)00000-0/fulltext", linkText: "J Stroke" }
  ]
};

// --- 4. CT Perfusion (CTP) ---
const DATA_CTP: PageData = {
  id: 'ctp',
  navTitle: 'CT Perfusion',
  title: 'CT Perfusion (CTP)',
  subtitle: 'Physiology & Interpretation',
  description: "Advanced imaging to distinguish **irreversibly damaged core** from **salvageable penumbra**. Essential for decision making in the **extended window (6–24h)** or stroke of unknown onset (Wake-Up).",
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
  description: "Management of symptomatic ICAD (70-99% stenosis). Evidence strongly favors **aggressive medical management** as first-line therapy. Stenting is reserved for select refractory cases.",
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

export const PAGES = {
  home: DATA_HOME,
  mt: DATA_MT,
  tnk: DATA_TNK,
  mevo: DATA_MEVO,
  ctp: DATA_CTP,
  icad: DATA_ICAD,
  dissection: DATA_DISSECTION
};

export type PageId = keyof typeof PAGES;