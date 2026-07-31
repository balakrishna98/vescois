import React from "react";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Virtual Healthcare Operations & Administrative Support",
  description:
    "Dedicated operational teams providing administrative, intake, and revenue cycle support for healthcare providers.",
};

export default function VirtualSupportServicePage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Service"
        title="Virtual Healthcare Operations Support"
        description="Scalable administrative and operational capacity delivered by trained healthcare support teams working under strict security protocols."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Virtual Support" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Operational Scope"
          title="Administrative & intake support for provider organizations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <Users className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Intake & Eligibility Verification</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Assisting with patient registration, benefit verification, and authorization tracking.</p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <Users className="w-6 h-6 text-[#0F9F8F]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Orders & Face-to-Face Management</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Tracking signed physician orders, F2F documentation, and plan of care approvals.</p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <Users className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Charge Entry & AR Follow-Up</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Dedicated administrative staff supporting routine account follow-up and demographic updates.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Expand your operational capacity
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Contact Vescois to discuss virtual operations team sizing and onboarding workflows.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Discuss Support Needs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
