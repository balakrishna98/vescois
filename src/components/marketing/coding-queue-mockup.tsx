"use client";

import React from "react";
import {
  FileText,
  CheckCircle2,
  Clock,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export function CodingQueueMockup() {
  const sampleWorkQueue = [
    {
      id: "SOC-84920",
      service: "Home Health Start of Care Review",
      discipline: "Nursing & OASIS-E Validation",
      status: "Auditor Verified",
      statusColor: "text-[#0D8A7D] bg-[#DFF7F3]/70 border-[#0D8A7D]/20",
      turnaround: "1.4 hrs",
    },
    {
      id: "COD-91204",
      service: "ICD-10 Diagnosis Coding Audit",
      discipline: "Diagnosis Specificity Check",
      status: "Coding Complete",
      statusColor: "text-[#2563EB] bg-[#EAF2FF] border-[#2563EB]/20",
      turnaround: "42 mins",
    },
    {
      id: "ROC-33019",
      service: "Resumption of Care Audit",
      discipline: "Clinical Documentation Integrity",
      status: "Review Assigned",
      statusColor: "text-[#2563EB] bg-[#EAF2FF] border-[#2563EB]/20",
      turnaround: "2.1 hrs",
    },
    {
      id: "RCM-77102",
      service: "Denial Risk Pre-Scrubbing",
      discipline: "Payer Guideline Alignment",
      status: "Scrub Clean",
      statusColor: "text-[#0D8A7D] bg-[#DFF7F3]/70 border-[#0D8A7D]/20",
      turnaround: "55 mins",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-white border border-[#D9E2EC]/80 shadow-[0_4px_20px_rgba(16,42,67,0.03)] overflow-hidden text-[#102A43]">
      {/* Executive Report Header */}
      <div className="bg-[#F8FAF9] px-4 sm:px-5 py-3 border-b border-[#D9E2EC]/70 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0D8A7D]" />
          <span className="text-xs font-semibold text-[#102A43]">
            Executive Operations Summary
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium text-[#486581] bg-white border border-[#D9E2EC]">
            <ShieldCheck className="w-3 h-3 text-[#0D8A7D]" />
            <span>Demonstration Metrics</span>
          </span>
        </div>
      </div>

      {/* 4 Executive KPI Cards */}
      <div className="p-4 sm:p-5 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          <div className="bg-white border border-[#D9E2EC]/70 p-2.5 sm:p-3 rounded-xl space-y-0.5">
            <div className="flex items-center justify-between text-[10px] text-[#627D98]">
              <span>Active Volume</span>
              <FileText className="w-3 h-3 text-[#2563EB]" />
            </div>
            <div className="text-base font-bold font-heading text-[#102A43]">1,420</div>
            <div className="text-[9px] text-[#0D8A7D] font-medium flex items-center gap-0.5">
              <TrendingUp className="w-2.5 h-2.5" />
              <span>SLA Target Met</span>
            </div>
          </div>

          <div className="bg-white border border-[#D9E2EC]/70 p-2.5 sm:p-3 rounded-xl space-y-0.5">
            <div className="flex items-center justify-between text-[10px] text-[#627D98]">
              <span>Turnaround</span>
              <Clock className="w-3 h-3 text-[#0D8A7D]" />
            </div>
            <div className="text-base font-bold font-heading text-[#102A43]">1.8 hrs</div>
            <div className="text-[9px] text-[#627D98]">Target &lt; 24h</div>
          </div>

          <div className="bg-white border border-[#D9E2EC]/70 p-2.5 sm:p-3 rounded-xl space-y-0.5">
            <div className="flex items-center justify-between text-[10px] text-[#627D98]">
              <span>QA Accuracy</span>
              <CheckCircle2 className="w-3 h-3 text-[#0D8A7D]" />
            </div>
            <div className="text-base font-bold font-heading text-[#102A43]">99.4%</div>
            <div className="text-[9px] text-[#0D8A7D] font-medium">Audited</div>
          </div>

          <div className="bg-white border border-[#D9E2EC]/70 p-2.5 sm:p-3 rounded-xl space-y-0.5">
            <div className="flex items-center justify-between text-[10px] text-[#627D98]">
              <span>Pre-Scrub</span>
              <ShieldCheck className="w-3 h-3 text-[#2563EB]" />
            </div>
            <div className="text-base font-bold font-heading text-[#102A43]">98.2%</div>
            <div className="text-[9px] text-[#0D8A7D] font-medium">Clean</div>
          </div>
        </div>

        {/* Quiet Workflow Table with Touch Horizontal Scroll */}
        <div className="overflow-x-auto border border-[#D9E2EC]/70 rounded-xl">
          <table className="w-full text-left text-xs text-[#486581] min-w-[480px]">
            <thead className="bg-[#F8FAF9] text-[#627D98] uppercase text-[9px] tracking-wider border-b border-[#D9E2EC]/70">
              <tr>
                <th className="py-2 px-3 font-semibold">Batch ID</th>
                <th className="py-2 px-3 font-semibold">Workflow Scope</th>
                <th className="py-2 px-3 font-semibold">Status</th>
                <th className="py-2 px-3 text-right font-semibold">Turnaround</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9E2EC]/50 text-[11px]">
              {sampleWorkQueue.map((item) => (
                <tr key={item.id} className="hover:bg-[#F8FAF9]/60 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-semibold text-[#102A43] whitespace-nowrap">{item.id}</td>
                  <td className="py-2.5 px-3 text-[#102A43] font-medium whitespace-nowrap">{item.service}</td>
                  <td className="py-2.5 px-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-[#627D98] whitespace-nowrap">{item.turnaround}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Status Summary Footnote */}
        <div className="pt-2 flex items-center justify-between text-[10px] text-[#627D98] flex-wrap gap-1">
          <span>Fictional demo metrics • Zero PHI</span>
          <span className="font-mono">HIPAA Safeguards Active</span>
        </div>
      </div>
    </div>
  );
}
