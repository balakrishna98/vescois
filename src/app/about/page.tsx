import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";

export const metadata = {
  title: "About Vescois — Our Story & Philosophy",
  description:
    "Learn why Vescois exists, our operating story, and our commitment to precision, transparency, and trust in healthcare operations.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-24 bg-white">
      <PageHero
        eyebrow="Our Story & Philosophy"
        title="Built on the belief that healthcare operations require discipline, precision, and trust."
        description="Vescois was founded to help healthcare provider organizations bridge the gap between complex clinical documentation rules and dependable operational execution."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Narrative Section 1: Why Vescois Exists */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase font-mono">
            01 / Why Vescois Exists
          </span>
          <h2 className="text-3xl font-heading font-bold text-[#102A43] tracking-tight">
            Healthcare operations are too important to rely on informal workflows.
          </h2>
          <p className="text-base text-[#486581] leading-relaxed">
            Across home health agencies, hospice providers, and medical groups, dedicated clinicians spend millions of hours delivering patient care. Yet downstream operations—diagnosis coding, OASIS consistency, billing accuracy, and quality audits—often suffer from fragmented queues, varying reviewer standards, and unpredictable turnaround times.
          </p>
          <p className="text-base text-[#486581] leading-relaxed">
            Vescois was created to solve this operational friction. We combine specialized healthcare reviewers, structured quality frameworks, and intelligent workflow technology to give provider leaders complete confidence in their coding and documentation integrity.
          </p>
        </div>
      </section>

      {/* Narrative Section 2: Why Precision Matters */}
      <section className="bg-[#F8FAF9] border-y border-[#D9E2EC]/80 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#0D8A7D] tracking-wider uppercase font-mono">
              02 / Why Precision Matters
            </span>
            <h2 className="text-3xl font-heading font-bold text-[#102A43] tracking-tight">
              A single documentation error ripples through the entire organization.
            </h2>
            <p className="text-base text-[#486581] leading-relaxed">
              In modern healthcare reimbursement frameworks like PDGM, ICD-10 diagnosis specificity and OASIS functional scoring directly dictate clinical compliance, audit risk, and revenue integrity. A missed comorbidity or inconsistent functional score isn&apos;t just a clerical mistake—it creates avoidable claim denials, audit exposure, and operational delay.
            </p>
            <p className="text-base text-[#486581] leading-relaxed">
              That is why Vescois embeds multi-tier quality auditing into every daily review batch. Precision is not an afterthought; it is our core operating principle.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 3: Why Trust Rules Healthcare */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase font-mono">
            03 / Why Trust Matters
          </span>
          <h2 className="text-3xl font-heading font-bold text-[#102A43] tracking-tight">
            Trust is earned through transparency, security, and long-term partnership.
          </h2>
          <p className="text-base text-[#486581] leading-relaxed">
            Healthcare executives do not need distant software vendors; they need accountable operational partners. We operate under strict least-privilege EHR credentials, HIPAA-aligned safeguards, and transparent quality scorecards. Our client engagement leaders are centered in the United States, providing direct oversight and responsiveness.
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
            Discover how Vescois operational support helps your healthcare organization achieve precision and scalability.
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
