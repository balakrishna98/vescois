"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  AlertCircle,
  Award,
  BarChart,
  Info,
  TrendingUp,
} from "lucide-react";

export function QualityReportPreview() {
  const [selectedMonth, setSelectedMonth] = useState("Q2 2026 Audit Period");

  return (
    <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 shadow-xl shadow-slate-200/50 space-y-6 text-[#102A43]">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D9E2EC] pb-4">
        <div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0F9F8F] uppercase tracking-wider bg-[#DFF7F3] px-2.5 py-0.5 rounded-full border border-[#0F9F8F]/30">
            Quality Operations Dashboard
          </span>
          <h3 className="text-xl font-heading font-bold text-[#102A43] mt-1">
            Coding Quality Assurance Summary
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-[#F7FAFC] border border-[#D9E2EC] text-xs text-[#102A43] rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          >
            <option>Q2 2026 Audit Period</option>
            <option>Q1 2026 Audit Period</option>
            <option>Q4 2025 Baseline Audit</option>
          </select>
        </div>
      </div>

      {/* Illustrative data warning */}
      <div className="bg-[#EAF2FF] border border-[#2563EB]/20 rounded-xl p-3 flex items-center gap-2.5 text-xs text-[#204969]">
        <Info className="w-4 h-4 text-[#2563EB] shrink-0" />
        <span className="font-medium">Illustrative interface — sample demo data only.</span>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#F7FAFC] border border-[#D9E2EC] rounded-xl p-4">
          <div className="flex items-center justify-between text-xs text-[#627D98]">
            <span>Overall Coding Accuracy</span>
            <CheckCircle className="w-4 h-4 text-[#0F9F8F]" />
          </div>
          <div className="text-2xl font-bold font-heading text-[#102A43] mt-2">98.6%</div>
          <div className="text-[11px] text-[#0F9F8F] flex items-center gap-1 mt-1 font-semibold">
            <TrendingUp className="w-3 h-3" />
            <span>+1.4% baseline improvement</span>
          </div>
        </div>

        <div className="bg-[#F7FAFC] border border-[#D9E2EC] rounded-xl p-4">
          <div className="flex items-center justify-between text-xs text-[#627D98]">
            <span>OASIS-E Consistency Index</span>
            <Award className="w-4 h-4 text-[#2563EB]" />
          </div>
          <div className="text-2xl font-bold font-heading text-[#102A43] mt-2">99.1%</div>
          <div className="text-[11px] text-[#627D98] mt-1">
            2,480 items audited
          </div>
        </div>

        <div className="bg-[#F7FAFC] border border-[#D9E2EC] rounded-xl p-4">
          <div className="flex items-center justify-between text-xs text-[#627D98]">
            <span>Documentation Query Rate</span>
            <AlertCircle className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-bold font-heading text-[#102A43] mt-2">3.2%</div>
          <div className="text-[11px] text-[#627D98] mt-1">
            Pre-submission queries
          </div>
        </div>
      </div>

      {/* Error Distribution Breakdown */}
      <div className="bg-[#F7FAFC] border border-[#D9E2EC] rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-heading font-semibold text-[#102A43] flex items-center gap-2">
            <BarChart className="w-4 h-4 text-[#2563EB]" />
            <span>Error Category Breakdown (Audited Charts)</span>
          </h4>
          <span className="text-xs text-[#627D98]">Sample distribution</span>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between text-[#102A43] font-medium mb-1">
              <span>Primary Diagnosis Specificity</span>
              <span className="text-[#0F9F8F] font-semibold font-mono">99.2% Compliant</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full bg-[#0F9F8F] w-[99.2%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[#102A43] font-medium mb-1">
              <span>Secondary Comorbidity Alignment</span>
              <span className="text-[#2563EB] font-semibold font-mono">98.4% Compliant</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full bg-[#2563EB] w-[98.4%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[#102A43] font-medium mb-1">
              <span>M1021 / M1023 OASIS Items</span>
              <span className="text-[#0F9F8F] font-semibold font-mono">98.9% Compliant</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full bg-[#0F9F8F] w-[98.9%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
