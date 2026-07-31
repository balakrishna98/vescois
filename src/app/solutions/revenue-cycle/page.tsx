import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevenueCycleJourney } from "@/components/marketing/revenue-cycle-journey";

export const metadata = {
  title: "Connected Revenue Cycle Operations",
  description:
    "End-to-end revenue cycle operational workflows, pre-submission scrubbing, and denial prevention by Vescois.",
};

export default function RevenueCycleSolutionPage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Solution"
        title="Revenue Cycle Intelligence & Operational Support"
        description="Connecting clinical documentation accuracy with payer-specific billing rules to reduce denials, accelerate reimbursement, and improve cash flow."
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Revenue Cycle" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="RCM Architecture"
          title="The Connected Revenue-Cycle Journey"
        />
        <RevenueCycleJourney />
      </section>

      <section className="bg-[#F7FAFC] border-y border-[#D9E2EC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="Target Outcomes"
            title="Measurable improvements in revenue operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Lower initial claim denial rates through upfront documentation validation",
              "Faster claim submission turnarounds post-discharge",
              "Transparent denial root-cause reporting for clinical staff education",
            ].map((text, i) => (
              <div key={i} className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#0F9F8F]" />
                <p className="text-sm font-semibold text-[#102A43]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Discuss your revenue cycle priorities
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Let our team analyze your current denial rates and workflow bottlenecks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Schedule RCM Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
