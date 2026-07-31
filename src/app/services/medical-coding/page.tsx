import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Specialized Medical Coding Services",
  description:
    "ICD-10-CM, CPT, and HCPCS medical coding services delivered by certified coders with strict SLA controls.",
};

export default function MedicalCodingServicePage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Service"
        title="Medical Coding Services"
        description="High-precision ICD-10-CM diagnosis and procedure coding delivered by experienced coders under multi-tiered quality assurance protocols."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Medical Coding" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Coding Specialties"
          title="Specialized coding coverage across healthcare settings."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Home Health Coding</h3>
            <p className="text-xs text-[#486581] leading-relaxed">ICD-10-CM diagnosis assignment aligned with PDGM and OASIS clinical documentation.</p>
          </div>
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Hospice Coding</h3>
            <p className="text-xs text-[#486581] leading-relaxed">Terminal diagnosis and related condition coding complying with hospice election guidelines.</p>
          </div>
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <h3 className="text-lg font-heading font-bold text-[#102A43]">Physician & Clinic Coding</h3>
            <p className="text-xs text-[#486581] leading-relaxed">E/M, CPT, and HCPCS coding for outpatient clinics and medical provider groups.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFC] border-y border-[#D9E2EC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="Service Highlights"
            title="Why healthcare providers partner with Vescois for coding."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Credentialed coders with specialized home health & clinical experience",
              "Defined turnaround SLA options (< 24 to 48 hours)",
              "Multi-tier quality assurance auditing on every batch",
              "Direct EHR access operating under least-privilege permissions",
              "Transparent error reporting & quarterly quality reviews",
              "Scalable capacity during seasonal census fluctuations",
            ].map((text, i) => (
              <div key={i} className="bg-white border border-[#D9E2EC] rounded-2xl p-5 space-y-2 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#0F9F8F]" />
                <p className="text-xs font-semibold text-[#102A43] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Need medical coding support?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Contact Vescois to discuss your monthly chart volume and turnaround requirements.
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
