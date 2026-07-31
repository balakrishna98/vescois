import React from "react";
import {
  Lock,
  Users,
  ShieldCheck,
  Building2,
} from "lucide-react";

export function SecurityGrid() {
  const safeguards = [
    {
      category: "Technical Safeguards",
      icon: Lock,
      color: "text-[#2563EB] border-[#2563EB]/20 bg-[#EAF2FF]",
      items: [
        "Encryption in transit via TLS 1.3 standards",
        "Encrypted storage mechanisms for client operational records",
        "Role-Based Access Controls (RBAC) with strict least privilege",
        "Multi-Factor Authentication (MFA) enforcement",
        "Comprehensive immutable audit logging & monitoring",
        "Controlled, secure file transfer protocols",
      ],
    },
    {
      category: "Administrative Safeguards",
      icon: Users,
      color: "text-[#0F9F8F] border-[#0F9F8F]/20 bg-[#DFF7F3]",
      items: [
        "Mandatory workforce privacy & HIPAA awareness training",
        "Strict confidentiality & non-disclosure agreements",
        "Formalized incident response & escalation procedures",
        "Vendor security risk review and vetting processes",
        "Automated access revocation upon role change/termination",
        "Continuous security policy review cycles",
      ],
    },
    {
      category: "Physical & Operational Safeguards",
      icon: Building2,
      color: "text-[#0F9F8F] border-[#0F9F8F]/20 bg-[#DFF7F3]",
      items: [
        "Access-controlled, secure operational centers",
        "Strict clean-desk and privacy screen policies",
        "Centralized endpoint monitoring and device controls",
        "Prohibition of local PHI storage on operational endpoints",
        "Physical surveillance & entry logging",
        "Secure remote work compliance guidelines",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {safeguards.map((sg, idx) => {
          const Icon = sg.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-[#D9E2EC] rounded-2xl p-6 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl border ${sg.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#102A43]">
                    {sg.category}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-[#486581]">
                  {sg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#0F9F8F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Security Disclaimer Banner */}
      <div className="bg-[#F7FAFC] border border-[#D9E2EC] rounded-xl p-5 text-xs text-[#627D98] leading-relaxed max-w-4xl mx-auto">
        <strong className="text-[#102A43] block mb-1">Important Notice:</strong>
        This overview describes Vescois&apos;s security design principles and architectural approach. Specific technical controls, security protocols, hosting infrastructure arrangements, and contractual compliance commitments are finalized through formal client due diligence and written Master Services Agreements (MSA) and Business Associate Agreements (BAA).
      </div>
    </div>
  );
}
