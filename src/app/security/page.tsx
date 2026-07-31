import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SecurityGrid } from "@/components/marketing/security-grid";

export const metadata = {
  title: "Security & Privacy Safeguards",
  description:
    "Review Vescois HIPAA-aligned safeguards, technical controls, administrative protocols, and zero-PHI marketing policy.",
};

export default function SecurityPage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Security & Governance"
        title="Security-conscious design for sensitive healthcare operations."
        description="Vescois implements technical, administrative, and physical safeguards designed to support data protection, least-privilege EHR access, and HIPAA alignment."
        breadcrumbs={[{ label: "Security & Privacy", href: "/security" }]}
      />

      {/* Security Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Core Principles"
          title="Security embedded into every review workflow."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Least-Privilege EHR Access</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Reviewers access client EHR systems exclusively under credentialed user accounts restricted strictly to necessary patient charts.
            </p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#DFF7F3] text-[#0F9F8F] border border-[#0F9F8F]/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Zero Local Data Retention</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Operational endpoints are configured to prohibit saving or storing Protected Health Information (PHI) on local drives.
            </p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Business Associate Alignment</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Formal Business Associate Agreements (BAA) and security addenda govern all healthcare provider operational engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Safeguards Grid */}
      <section className="bg-[#F7FAFC] border-y border-[#D9E2EC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Safeguards Framework"
            title="Technical, administrative, and physical controls."
          />
          <SecurityGrid />
        </div>
      </section>

      {/* Security Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          eyebrow="Client Due Diligence"
          title="Ready for provider security evaluation."
        />

        <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-4 shadow-sm max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-[#102A43]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0F9F8F]" />
              <span>Security Questionnaire Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0F9F8F]" />
              <span>Standardized BAA Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0F9F8F]" />
              <span>Auditable User Access Logs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0F9F8F]" />
              <span>Workforce Privacy Refresher Training</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Request security & compliance documentation
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Our compliance team is ready to assist your IT and security leads with vendor due diligence reviews.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Contact Security Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
