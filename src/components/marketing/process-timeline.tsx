import React from "react";
import {
  FileCheck,
  Stethoscope,
  Code2,
  ShieldCheck,
  Send,
  BarChart3,
} from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Documentation Received",
      desc: "Secure intake of clinical notes, Oasis assessments, and face-to-face documentation.",
      icon: FileCheck,
      color: "text-[#2563EB] border-[#2563EB]/20 bg-[#EAF2FF]",
    },
    {
      num: "02",
      title: "Clinical Review",
      desc: "Validation of clinical consistency, completeness, and documentation accuracy.",
      icon: Stethoscope,
      color: "text-[#0F9F8F] border-[#0F9F8F]/20 bg-[#DFF7F3]",
    },
    {
      num: "03",
      title: "Coding",
      desc: "Specialized ICD-10-CM diagnosis assignment adhering to official coding guidelines.",
      icon: Code2,
      color: "text-[#2563EB] border-[#2563EB]/20 bg-[#EAF2FF]",
    },
    {
      num: "04",
      title: "Quality Review",
      desc: "Secondary quality assurance auditing and error-prevention checkpoints.",
      icon: ShieldCheck,
      color: "text-[#0F9F8F] border-[#0F9F8F]/20 bg-[#DFF7F3]",
    },
    {
      num: "05",
      title: "Client Delivery",
      desc: "Timely transmission of completed coding, recommendations, and OASIS validations.",
      icon: Send,
      color: "text-[#2563EB] border-[#2563EB]/20 bg-[#EAF2FF]",
    },
    {
      num: "06",
      title: "Reporting",
      desc: "Productivity, turnaround, and quality trend analytics delivered for agency leaders.",
      icon: BarChart3,
      color: "text-[#0F9F8F] border-[#0F9F8F]/20 bg-[#DFF7F3]",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="bg-white border border-[#D9E2EC] rounded-2xl p-6 relative group hover:border-[#2563EB] transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-[#627D98] uppercase tracking-widest">
                  Step {step.num}
                </span>
                <div className={`p-2.5 rounded-xl border ${step.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-heading font-bold text-[#102A43] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#486581] leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center text-xs text-[#627D98] italic pt-2">
        Note: Vescois workflow processes operate on encrypted, access-controlled infrastructure without storing public patient records.
      </div>
    </div>
  );
}
