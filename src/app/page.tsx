import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { CodingQueueMockup } from "@/components/marketing/coding-queue-mockup";
import { insightArticles } from "@/data/insights";

export default function HomePage() {
  const trustPillars = [
    {
      title: "Accountability",
      desc: "Defined turnaround SLA commitments, guaranteed quality standards, and clear operational ownership.",
    },
    {
      title: "Transparency",
      desc: "Complete auditability across chart reviews, error category scorecards, and coder feedback loops.",
    },
    {
      title: "Structured Workflows",
      desc: "Standardized review protocols designed to eliminate documentation variation and reduce billing friction.",
    },
    {
      title: "Operational Maturity",
      desc: "Experienced operational leadership backed by dedicated US client engagement directors.",
    },
    {
      title: "Quality Oversight",
      desc: "Multi-tier auditing embedded into daily queues with continuous coder education cycles.",
    },
    {
      title: "Dedicated Partnership",
      desc: "Specialized review teams acting as a seamless, responsive extension of your internal clinical operations.",
    },
  ];

  const processSteps = [
    { num: "01", title: "Discovery", desc: "We evaluate your current chart volume, coding variation, and SLA targets." },
    { num: "02", title: "Workflow Assessment", desc: "We map your EHR protocols, payer guidelines, and documentation rules." },
    { num: "03", title: "Secure Onboarding", desc: "Credentialed access setup under least-privilege permissions and HIPAA controls." },
    { num: "04", title: "Operational Delivery", desc: "Dedicated coders and OASIS reviewers assigned to your agency's account." },
    { num: "05", title: "Quality Review", desc: "Multi-tier audit checkpoints and feedback loops embedded into daily queues." },
    { num: "06", title: "Continuous Improvement", desc: "Executive reporting on accuracy trends, SLAs, and denial risks." },
  ];

  const outcomeSolutions = [
    {
      title: "Improve Home Health Coding & OASIS Consistency",
      desc: "Comprehensive Start-of-Care, Recertification, and Resumption-of-Care documentation reviews ensuring diagnosis specificity, OASIS-E consistency, and PDGM reimbursement alignment.",
      href: "/solutions/home-health",
      featured: true,
    },
    {
      title: "Strengthen Coding Quality & Audit Safeguards",
      desc: "Independent baseline and recurring quality scorecards to detect compliance risks and provide actionable coder feedback.",
      href: "/solutions/coding-quality",
      featured: false,
    },
    {
      title: "Support Healthier Revenue Cycles & Clean Claims",
      desc: "Pre-submission scrubbing and clinical documentation alignment to prevent avoidable payer denials and accelerate cash flow.",
      href: "/solutions/revenue-cycle",
      featured: false,
    },
    {
      title: "Gain Operational Visibility & SLA Intelligence",
      desc: "Executive dashboards and workflow analytics providing real-time visibility into turnaround times, error trends, and volume throughput.",
      href: "/solutions/healthcare-analytics",
      featured: false,
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-16 sm:pb-24 bg-white">
      {/* ==========================================
          CHAPTER 1: HERO SECTION
         ========================================== */}
      <section className="relative bg-white pt-10 pb-16 lg:pt-20 lg:pb-28 overflow-hidden border-b border-[#D9E2EC]/70 subtle-teal-wash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20 mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Healthcare Operations & Intelligence</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#102A43] leading-[1.15] sm:leading-[1.12] max-w-3xl mx-auto">
              Healthcare operations delivered with{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#0D8A7D] bg-clip-text text-transparent">
                precision, visibility, and accountability.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-[#486581] leading-relaxed max-w-[600px] mx-auto font-normal">
              Vescois provides healthcare provider organizations with disciplined operational workflows, specialized review teams, and clear reporting to ensure greater documentation consistency, reliable SLA delivery, and complete operational control.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm sm:text-base shadow-xs transition-all focus:ring-2 focus:ring-[#2563EB]"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#102A43] border border-[#D9E2EC] font-semibold text-sm sm:text-base transition-all shadow-xs"
              >
                <span>Learn How We Work</span>
              </Link>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#627D98] flex-wrap">
              <ShieldCheck className="w-4 h-4 text-[#0D8A7D] shrink-0" />
              <span>Security-conscious workflows built for home health agencies, hospice, and provider groups.</span>
            </div>
          </div>

          {/* Hero Executive Operations Summary */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <CodingQueueMockup />
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 2: TRUST NARRATIVE
         ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column Narrative */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20">
              Operational Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-[#102A43] tracking-tight leading-tight">
              Why healthcare organizations choose Vescois.
            </h2>
            <p className="text-sm sm:text-base text-[#486581] leading-relaxed max-w-[540px]">
              Healthcare provider executives do not need distant software vendors; they need predictable execution, disciplined review processes, and accountable partners who take ownership of quality outcomes.
            </p>
            <div className="pt-3 border-t border-[#D9E2EC]/70">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] group"
              >
                <span>Read our full operating philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {trustPillars.map((p, idx) => (
              <div key={idx} className="space-y-1.5 border-l-2 border-[#D9E2EC] pl-4 hover:border-[#2563EB] transition-colors">
                <h3 className="text-base font-heading font-bold text-[#102A43]">
                  {p.title}
                </h3>
                <p className="text-xs text-[#486581] leading-relaxed max-w-[280px]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 3: OUTCOME-BASED SOLUTIONS ARCHITECTURE
         ========================================== */}
      <section className="bg-[#F8FAF9] border-y border-[#D9E2EC]/80 py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#DFF7F3] text-[#0D8A7D] border border-[#0D8A7D]/20">
              Business Outcomes
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-[#102A43] tracking-tight">
              Operational solutions designed for measurable results.
            </h2>
            <p className="text-sm sm:text-base text-[#486581] leading-relaxed max-w-[600px]">
              Every Vescois solution is structured to solve a specific healthcare operational problem—from coding consistency to revenue integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Featured Home Health Outcome Card */}
            <div className="lg:col-span-7 bg-white border border-[#D9E2EC] rounded-3xl p-6 sm:p-10 space-y-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase font-mono">
                  Featured Operational Focus
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#102A43]">
                  {outcomeSolutions[0].title}
                </h3>
                <p className="text-sm text-[#486581] leading-relaxed max-w-xl">
                  {outcomeSolutions[0].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D8A7D] shrink-0" />
                    <span>ICD-10-CM Coding</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D8A7D] shrink-0" />
                    <span>OASIS-E Consistency</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D8A7D] shrink-0" />
                    <span>Plan of Care (485)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D8A7D] shrink-0" />
                    <span>Pre-ADR Safeguards</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100">
                <Link
                  href={outcomeSolutions[0].href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  <span>Explore Home Health Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Additional Outcome Solutions */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              {outcomeSolutions.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-white border border-[#D9E2EC] rounded-2xl p-5 hover:border-[#2563EB] transition-all shadow-xs group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-heading font-bold text-[#102A43] group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 text-[#627D98] group-hover:text-[#2563EB] transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-[#486581] mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 4: 1-SENTENCE VISUAL PROCESS TIMELINE
         ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20">
            Structured Execution
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-[#102A43] tracking-tight">
            How we partner with your healthcare team.
          </h2>
          <p className="text-sm sm:text-base text-[#486581] leading-relaxed max-w-[600px]">
            A transparent 6-stage delivery model built for rapid onboarding, zero operational disruption, and continuous quality reporting.
          </p>
        </div>

        {/* Minimal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step) => (
            <div key={step.num} className="space-y-2.5 border-t-2 border-[#D9E2EC] pt-4 relative">
              <span className="font-mono text-xs font-bold text-[#2563EB]">
                {step.num}
              </span>
              <h3 className="text-lg font-heading font-bold text-[#102A43]">
                {step.title}
              </h3>
              <p className="text-xs text-[#486581] leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          CHAPTER 5: PUBLICATION-STYLE INSIGHTS
         ========================================== */}
      <section className="bg-[#F8FAF9] border-y border-[#D9E2EC]/80 py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase font-mono">
                Executive Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#102A43] tracking-tight">
                Vescois Publications & Research
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Featured Article Left */}
            {insightArticles[0] && (
              <div className="lg:col-span-7 bg-white border border-[#D9E2EC] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#627D98]">
                    <span className="px-3 py-1 rounded-full bg-[#EAF2FF] text-[#2563EB] font-semibold">
                      {insightArticles[0].category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{insightArticles[0].readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#102A43] leading-snug hover:text-[#2563EB] transition-colors">
                    <Link href={`/insights/${insightArticles[0].slug}`}>
                      {insightArticles[0].title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#486581] leading-relaxed">
                    {insightArticles[0].excerpt}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-[#627D98]">
                  <span>{insightArticles[0].author} • {insightArticles[0].publishedAt}</span>
                  <Link
                    href={`/insights/${insightArticles[0].slug}`}
                    className="font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Secondary Articles Right Stack */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              {insightArticles.slice(1, 3).map((art) => (
                <div
                  key={art.slug}
                  className="bg-white border border-[#D9E2EC] rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs hover:border-[#2563EB] transition-all"
                >
                  <div className="flex items-center justify-between text-xs text-[#627D98]">
                    <span className="text-[#2563EB] font-semibold">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-heading font-bold text-[#102A43] leading-snug hover:text-[#2563EB] transition-colors">
                    <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                  </h4>
                  <p className="text-xs text-[#486581] line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                  <div className="pt-1 text-[11px] text-[#627D98]">
                    <span>{art.publishedAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CHAPTER 6: EXECUTIVE CONSULTATION CTA
         ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden text-white">
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Build a more visible, accountable operation.
            </h2>
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-[600px] mx-auto">
              Discuss your agency&apos;s chart volume, quality targets, or workflow bottlenecks with the Vescois operational leadership team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg transition-all"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm sm:text-base transition-all"
            >
              <span>Learn How We Work</span>
            </Link>
          </div>

          <div className="pt-3 text-[11px] sm:text-xs text-slate-400">
            No Protected Health Information (PHI) should be submitted through marketing forms.
          </div>
        </div>
      </section>
    </div>
  );
}
