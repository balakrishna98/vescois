import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Shield, Cpu, Activity, Workflow } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Technology Platform & AI Roadmap",
  description:
    "Explore Vescois intelligent workflow technology, quality checkpoints, analytics dashboards, and responsible AI roadmap.",
};

export default function TechnologyPage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Workflow Intelligence"
        title="Intelligent technology built to support healthcare expertise."
        description="Vescois technology orchestrates complex operational queues, surfaces quality insights, and streamlines reviews while keeping qualified healthcare professionals accountable."
        breadcrumbs={[{ label: "Technology", href: "/technology" }]}
      />

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Platform Capabilities"
          title="Designed for clarity, auditability, and speed."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="p-3 rounded-xl bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20 w-fit">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-[#102A43]">Workflow Queue Management</h3>
            <p className="text-sm text-[#486581] leading-relaxed">
              Automated routing of clinical documentation based on specialty, coder certifications, turnaround SLA targets, and client-specific priority rules.
            </p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="p-3 rounded-xl bg-[#DFF7F3] text-[#0F9F8F] border border-[#0F9F8F]/20 w-fit">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-[#102A43]">Quality & Audit Checkpoints</h3>
            <p className="text-sm text-[#486581] leading-relaxed">
              Built-in baseline audit tools, error categorization frameworks, and automated sampling mechanisms that ensure quality metrics are transparent.
            </p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="p-3 rounded-xl bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20 w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-[#102A43]">Executive Operations Dashboards</h3>
            <p className="text-sm text-[#486581] leading-relaxed">
              Real-time operational reporting providing healthcare leadership with clear visibility into chart turnaround, error trends, and coder productivity.
            </p>
          </div>
        </div>
      </section>

      {/* AI Approach Section */}
      <section className="bg-[#F7FAFC] border-y border-[#D9E2EC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Responsible AI Strategy"
            title="AI-assisted workflows under qualified human oversight."
            description="Vescois approaches artificial intelligence as an operational accelerator, not an unsupervised decision-maker. AI assists with document parsing, code suggestions, and anomaly detection."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F9F8F] uppercase tracking-wider">
                <Bot className="w-4 h-4" />
                <span>Current & Near-Term AI Assistance</span>
              </div>
              <ul className="space-y-3 text-sm text-[#486581]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F9F8F] mt-2 shrink-0" />
                  <span>Clinical narrative extraction & key diagnosis suggestion drafting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F9F8F] mt-2 shrink-0" />
                  <span>OASIS item mismatch detection prior to final human validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F9F8F] mt-2 shrink-0" />
                  <span>Payer guideline compliance pre-scrubbing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Human-in-the-Loop Governance</span>
              </div>
              <ul className="space-y-3 text-sm text-[#486581]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                  <span>Every diagnosis code & OASIS validation requires qualified human sign-off</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                  <span>Zero autonomous billing submissions without auditor verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                  <span>Strict AI bias monitoring and continuous model validation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            See our technology platform in action
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Schedule a technology walk-through to see how Vescois workflow orchestration elevates coding accuracy and turnaround visibility.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Schedule Technology Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
