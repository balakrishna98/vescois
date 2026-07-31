import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Specialized OASIS Review Services",
  description:
    "Rigorous OASIS-E documentation validation, clinical consistency checks, and quality scoring by Vescois.",
};

export default function OasisReviewServicePage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Service"
        title="OASIS-E Documentation Review"
        description="Comprehensive review of OASIS items to ensure clinical narrative consistency, accurate functional scoring, and regulatory compliance."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "OASIS Review" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Review Highlights"
          title="Protecting clinical quality and documentation integrity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "OASIS item-by-item validation against clinician physical notes",
            "M1021/M1023 diagnosis alignment verification",
            "Functional M1800-series item consistency checks",
            "Wound care assessment & documentation review",
            "Pre-transmission query generation for clinician clarification",
            "Turnaround SLA commitment with zero PHI risk",
          ].map((text, i) => (
            <div key={i} className="bg-white border border-[#D9E2EC] rounded-2xl p-5 space-y-2 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-[#0F9F8F]" />
              <p className="text-xs font-semibold text-[#102A43] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Strengthen your OASIS documentation
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Discover how Vescois OASIS reviewers help home health agencies maintain accuracy and compliance.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Schedule OASIS Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
