import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Lock, Sparkles, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";

export const metadata = {
  title: "About Vescois — Healthcare Technology & Medical Coding",
  description:
    "Vescois is a trusted healthcare technology and medical coding company dedicated to delivering accurate, secure, and compliant coding services and long-term client partnerships.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-24 bg-white">
      <PageHero
        eyebrow="Our Story & Philosophy"
        title="Trusted healthcare technology and medical coding."
        description="Vescois is dedicated to delivering accurate, secure, and compliant coding services. We combine certified coding expertise with advanced healthcare IT solutions to help hospitals, clinics, physician groups, diagnostic centers, and healthcare organizations streamline operations, improve reimbursement, and maintain regulatory compliance."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Core Focus & Values Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#F8FAF9] border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-xs">
            <Award className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-base font-heading font-bold text-[#102A43]">Quality First</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Certified coding expertise and multi-tier auditing embedded into every daily batch.
            </p>
          </div>

          <div className="bg-[#F8FAF9] border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-xs">
            <Lock className="w-6 h-6 text-[#0D8A7D]" />
            <h3 className="text-base font-heading font-bold text-[#102A43]">Confidentiality & Security</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Least-privilege EHR credentialing and zero local PHI retention policies.
            </p>
          </div>

          <div className="bg-[#F8FAF9] border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-xs">
            <Sparkles className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-base font-heading font-bold text-[#102A43]">Healthcare Innovation</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Advanced healthcare IT solutions and workflow intelligence built for accuracy and speed.
            </p>
          </div>

          <div className="bg-[#F8FAF9] border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-xs">
            <Handshake className="w-6 h-6 text-[#0D8A7D]" />
            <h3 className="text-base font-heading font-bold text-[#102A43]">Long-Term Partnership</h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Dedicated review teams acting as an extension of your internal clinical operations.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 1: Why Vescois Exists */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase font-mono">
            01 / Serving Healthcare Provider Organizations
          </span>
          <h2 className="text-3xl font-heading font-bold text-[#102A43] tracking-tight">
            Comprehensive operational support across healthcare sectors.
          </h2>
          <p className="text-base text-[#486581] leading-relaxed">
            From home health agencies and hospice care to hospitals, clinics, physician groups, and diagnostic centers, healthcare provider organizations face growing documentation complexity and regulatory demands.
          </p>
          <p className="text-base text-[#486581] leading-relaxed">
            Vescois bridges the gap between clinical documentation rules and dependable operational execution. By combining credentialed coders, structured QA frameworks, and modern technology, we ensure your organization operates with complete documentation integrity and financial health.
          </p>
        </div>
      </section>

      {/* Narrative Section 2: Why Precision Matters */}
      <section className="bg-[#F8FAF9] border-y border-[#D9E2EC]/80 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#0D8A7D] tracking-wider uppercase font-mono">
              02 / Why Precision & Compliance Matter
            </span>
            <h2 className="text-3xl font-heading font-bold text-[#102A43] tracking-tight">
              Protecting compliance and accelerating reimbursement.
            </h2>
            <p className="text-base text-[#486581] leading-relaxed">
              Diagnosis coding specificity (ICD-10-CM/CPT/HCPCS), OASIS functional scoring, and Plan of Care consistency directly dictate clinical compliance, audit risk, and revenue performance. A single coding error creates avoidable denials, audit vulnerability, and revenue delay.
            </p>
            <p className="text-base text-[#486581] leading-relaxed">
              That is why Vescois embeds independent multi-tier quality auditing into every daily review batch. Precision is not an afterthought; it is our primary operating commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 3: Why Trust Rules Healthcare */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase font-mono">
            03 / Commitment to Trust & Security
          </span>
          <h2 className="text-3xl font-heading font-bold text-[#102A43] tracking-tight">
            Built on confidentiality, transparency, and accountability.
          </h2>
          <p className="text-base text-[#486581] leading-relaxed">
            Healthcare leaders need accountable, transparent operational partners. We function under strict least-privilege EHR credentials, HIPAA-aligned safeguards, and transparent quality scorecards with direct US client engagement oversight.
          </p>
          
          <div className="pt-4 border-l-2 border-[#0D8A7D] pl-4 text-xs text-[#486581] space-y-1">
            <div className="flex items-center gap-2 font-semibold text-[#102A43]">
              <ShieldCheck className="w-4 h-4 text-[#0D8A7D]" />
              <span>Coordinated Safeguards Commitment</span>
            </div>
            <p className="leading-relaxed">
              All delivery operations function under identical security controls, credentialed access protocols, and zero local PHI retention policies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-10 sm:p-14 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Partner with Vescois
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Discover how Vescois medical coding and healthcare IT solutions help your organization achieve precision and compliance.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
