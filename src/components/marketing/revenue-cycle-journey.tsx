import React from "react";
import {
  UserCheck,
  FileSpreadsheet,
  Code,
  ShieldAlert,
  CreditCard,
  RefreshCw,
} from "lucide-react";

export function RevenueCycleJourney() {
  const RCMSteps = [
    {
      title: "1. Access & Verification",
      desc: "Upfront insurance verification & patient access support to minimize eligibility rejections.",
      icon: UserCheck,
    },
    {
      title: "2. Documentation Review",
      desc: "Clinical documentation validation ensuring charge capture completeness.",
      icon: FileSpreadsheet,
    },
    {
      title: "3. Coding & OASIS",
      desc: "Accurate ICD-10 & OASIS review preventing downstream billing errors.",
      icon: Code,
    },
    {
      title: "4. Scrubbing & Submission",
      desc: "Payer-specific claim edits applied prior to electronic clearinghouse transmission.",
      icon: ShieldAlert,
    },
    {
      title: "5. Payment Posting",
      desc: "Reconciliation of ERAs/EOBs with payment matching and contractual adjustment checks.",
      icon: CreditCard,
    },
    {
      title: "6. Denial Follow-Up",
      desc: "Root-cause denial analysis, rapid appeal submission, and continuous trend feedback.",
      icon: RefreshCw,
    },
  ];

  return (
    <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-bold text-[#102A43]">
          Connected Healthcare Revenue-Cycle Flow
        </h3>
        <p className="text-sm text-[#486581] mt-1">
          Actual operational scope depends on agency configuration, system access, and contractual agreements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {RCMSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-[#F7FAFC] border border-[#D9E2EC] rounded-xl p-5 hover:border-[#2563EB] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#102A43]">
                  {step.title}
                </h4>
              </div>
              <p className="text-xs text-[#486581] leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
