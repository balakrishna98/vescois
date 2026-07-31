import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { QualityReportPreview } from "@/components/marketing/quality-report-preview";

export const metadata = {
  title: "Coding Quality Assurance & Auditing Solutions",
  description:
    "Independent coding quality audits, accuracy scorecards, and continuous education loops by Vescois.",
};

export default function CodingQualitySolutionPage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Quality Assurance"
        title="Independent Coding Quality Audits & Scorecards"
        description="Comprehensive baseline and recurring coding audits to evaluate accuracy, detect compliance risks, and provide actionable feedback to coding staff."
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Coding Quality" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Quality Framework"
          title="Sample Quality Assurance Dashboard"
        />
        <QualityReportPreview />
      </section>

      <section className="bg-[#F7FAFC] border-y border-[#D9E2EC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="Audit Components"
            title="What our quality audit framework covers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Randomized sampling across all clinical diagnosis categories",
              "Detailed line-by-line coding error classification & feedback",
              "Executive-level reporting on accuracy trends over time",
            ].map((text, i) => (
              <div key={i} className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#0F9F8F]" />
                <p className="text-sm font-semibold text-[#102A43]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Schedule a baseline coding audit
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Gain clear visibility into your organization&apos;s current coding accuracy metrics.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Request Audit Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
