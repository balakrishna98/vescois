import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Plan of Care (POC) Review Services",
  description:
    "Comprehensive Plan of Care (Form 485) documentation validation, physician order alignment, and clinical consistency checks by Vescois.",
};

export default function PocReviewServicePage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Service"
        title="Plan of Care (POC / 485) Review"
        description="Rigorous validation of Plan of Care (Form 485) documentation ensuring diagnosis alignment, measurable goal consistency, physician order accuracy, and regulatory compliance."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "POC Review" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="POC Review Scope"
          title="Thorough clinical & order validation before submission."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-xs">
            <FileCheck className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Diagnosis & OASIS Alignment</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Verifying that primary and secondary diagnosis codes match OASIS-E M1021/M1023 items and supporting clinical narratives.
            </p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-xs">
            <FileCheck className="w-6 h-6 text-[#0D8A7D]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Frequency & Order Consistency</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Validating visit frequencies, discipline orders, and medical necessity statements against care plans and physician orders.
            </p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-xs">
            <FileCheck className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Measurable Goals & Interventions</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Checking that rehabilitation and nursing goals contain specific, measurable, time-framed criteria required for reimbursement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] border-y border-[#D9E2EC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="Key Benefits"
            title="Why home health agencies partner with Vescois for POC reviews."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Eliminates Plan of Care (485) order discrepancies before physician signature",
              "Reduces additional documentation request (ADR) audit vulnerabilities",
              "Ensures complete alignment between OASIS-E data, coding, and care plans",
              "Delivered under strict turnaround SLAs (< 24 to 48 hours)",
              "Structured feedback provided to clinical managers to reduce repeat errors",
              "Scalable review capacity to support agency census growth",
            ].map((text, i) => (
              <div key={i} className="bg-white border border-[#D9E2EC] rounded-2xl p-5 space-y-2 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#0D8A7D]" />
                <p className="text-xs font-semibold text-[#102A43] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Schedule a Plan of Care (POC) Review consultation
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Contact Vescois to learn how our POC review reviewers fit into your agency&apos;s workflow.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
