import React from "react";
import Link from "next/link";
import { ArrowRight, FileCheck, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Clinical Documentation Improvement & Validation",
  description:
    "Clinical narrative review, documentation completeness, and physician query workflows by Vescois.",
};

export default function ClinicalDocSolutionPage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Solution"
        title="Clinical Documentation Integrity & Review"
        description="Ensuring clinical notes, OASIS assessments, and treatment plans accurately reflect patient acuity and meet regulatory requirements."
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Clinical Documentation" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Core Focus Areas"
          title="Enhancing documentation clarity before claim submission."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-4 shadow-sm">
            <FileCheck className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Narrative Alignment</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Verifying that physician progress notes and clinical assessments support assigned ICD-10 codes.
            </p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-4 shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-[#0F9F8F]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Query Management</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Compliant query templates to resolve ambiguous documentation prior to billing finalizing.
            </p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-4 shadow-sm">
            <FileCheck className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">ADR Risk Mitigation</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Pre-submission documentation screening to reduce medical necessity audit triggers.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Improve your clinical documentation integrity
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Partner with Vescois to strengthen clinical note quality and compliance safeguards.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
