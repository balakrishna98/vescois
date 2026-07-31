import React from "react";
import Link from "next/link";
import { ArrowRight, CreditCard } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Medical Billing & Claim Submission Support",
  description:
    "End-to-end medical billing execution, claim scrubbing, payment posting, and clearinghouse submission by Vescois.",
};

export default function MedicalBillingServicePage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Service"
        title="Medical Billing Operations"
        description="Reliable billing execution, claim submission support, clearinghouse error resolution, and ERA payment posting coordination."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Medical Billing" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Billing Scope"
          title="Connected billing execution for healthcare providers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <CreditCard className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Claim Scrubbing & Submission</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Applying payer-specific rules prior to electronic submission to maximize clean claim ratios.</p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <CreditCard className="w-6 h-6 text-[#0F9F8F]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Payment Posting & Reconciliation</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Timely posting of ERAs, EOBs, and patient payments with contractual adjustments verification.</p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <CreditCard className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Clearinghouse Error Resolution</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Rapid correction and re-transmission of front-end clearinghouse rejections.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Optimize your billing operations
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Contact Vescois to learn how our billing support fits into your existing software infrastructure.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Contact Billing Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
