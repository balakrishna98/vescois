import React from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Denial Management & Root-Cause Analysis",
  description:
    "Root-cause denial analysis, systematic follow-up workflows, and appeal prevention by Vescois.",
};

export default function DenialManagementServicePage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Service"
        title="Denial Management & Appeal Workflows"
        description="Systematic analysis, follow-up, and appeal preparation to recover lost reimbursement and prevent recurring denial triggers."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Denial Management" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Denial Prevention"
          title="Turning payer denials into operational improvements."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <RefreshCw className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Root-Cause Categorization</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Sorting rejections by clinical documentation, coding, authorization, or eligibility root causes.</p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <RefreshCw className="w-6 h-6 text-[#0F9F8F]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Appeal Preparation</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Compiling medical necessity records, clinical notes, and coding justifications for formal appeals.</p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <RefreshCw className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Prevention Feedback Loops</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Providing recurring trend reports to clinical intake and coding teams to prevent repeat denials.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Reduce avoidable payer denials
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Let Vescois analyze your top denial codes and establish structured appeal workflows.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Schedule Denial Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
