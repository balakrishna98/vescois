import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessTimeline } from "@/components/marketing/process-timeline";

export const metadata = {
  title: "Home Health Coding & OASIS Review Solutions",
  description:
    "Specialized home health coding, OASIS-E documentation review, and clinical quality assurance workflows by Vescois.",
};

export default function HomeHealthSolutionPage() {
  const challenges = [
    { title: "Frequent OASIS-E Guidance Changes", desc: "Keeping coding and clinical documentation teams aligned with evolving CMS guidelines." },
    { title: "Turnaround SLA Pressure", desc: "Managing chart review backlogs without sacrificing coding accuracy or compliance checks." },
    { title: "Revenue & ADR Risks", desc: "Documentation inconsistencies leading to additional documentation requests and avoidable denials." },
  ];

  const capabilities = [
    "ICD-10-CM Home Health Diagnosis Assignment",
    "OASIS-E Document Consistency Auditing",
    "Start of Care (SOC) Review Workflows",
    "Recertification & Resumption of Care (ROC) Review",
    "Plan of Care (485) Alignment Verification",
    "Coder Feedback & Quality Trend Reporting",
  ];

  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Solution"
        title="Home Health Coding & OASIS Documentation Intelligence"
        description="Comprehensive coding, OASIS-E validation, and quality auditing designed for home health agencies facing volume demands and compliance mandates."
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Home Health" },
        ]}
      />

      {/* Challenges Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Operational Realities"
          title="Navigating the operational friction points of home health."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((c, i) => (
            <div key={i} className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 w-fit">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#102A43]">{c.title}</h3>
              <p className="text-xs text-[#486581] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-[#F7FAFC] border-y border-[#D9E2EC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="End-to-End Workflow"
            title="The Vescois Home Health Review Process"
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* Capabilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Scope & Capabilities"
          title="Comprehensive support for home health clinical teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-white border border-[#D9E2EC] rounded-2xl p-6 flex items-start gap-3 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-[#0F9F8F] shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-[#102A43]">{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Elevate your home health agency operations
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Schedule a consultation with our home health operations team to discuss your coding and OASIS review requirements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Schedule Home Health Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
