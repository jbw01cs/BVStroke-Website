import React from 'react';

export interface KPI {
  label: string;
  value: string;
  tag: string;
}

export interface ProtocolItem {
  id: number;
  text: string;
  highlight?: string;
}

export interface WindowRow {
  col1: string; // e.g. Window
  col2: string; // e.g. Patient Profile
  col3: string; // e.g. Imaging/Management
  col4: string; // e.g. Endpoint/Goal
  type: 'good' | 'warn' | 'bad' | 'neutral';
  badgeText?: string; // Optional override for the badge text
}

export interface TrialData {
  name: string;
  description: string;
  window: string;
  outcome: string;
  safety: string;
}

export interface Reference {
  id: number;
  text: string;
  url: string;
  linkText: string;
}

export interface StrokeStatsData {
  year: string;
  total: number;
  breakdown: {
    label: string;
    count: number;
    color: string; // tailwind color class prefix e.g. 'emerald'
  }[];
}

export interface MTStatsData {
  total: number;
  eligibleRange: string;
  eligiblePercent: string;
  treatedRange: string;
  treatedPercent: string;
}

export interface PageData {
  id: string;
  navTitle: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  kpis: KPI[];
  
  indicationsTitle: string;
  indications: ProtocolItem[];
  exclusionsTitle: string;
  exclusions: ProtocolItem[];
  protocolNote?: string;
  
  tableTitle: string;
  tableHeaders: [string, string, string, string];
  tableData: WindowRow[];
  
  trials: TrialData[];
  references: Reference[];
  
  strokeStats?: StrokeStatsData;
  mtStats?: MTStatsData;
}