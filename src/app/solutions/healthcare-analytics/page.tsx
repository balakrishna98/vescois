import React from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Activity, PieChart, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Healthcare Operations Analytics & Reporting",
  description:
    "Turn coding accuracy, SLA turnaround, and workflow data into executive reporting intelligence.",
};

export default function HealthcareAnalyticsSolutionPage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <PageHero
        eyebrow="Workflow Intelligence"
        title="Healthcare Operational Analytics & Reporting"
        description="Turning everyday chart reviews, coding logs, and billing queues into actionable operational scorecards for healthcare executive leaders."
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Healthcare Analytics" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Key Analytics Views"
          title="Executive scorecards tailored for healthcare leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <BarChart3 className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-base font-heading font-bold text-[#102A43]">SLA Turnaround Tracking</h3>
            <p className="text-xs text-[#486581]">Real-time visibility into elapsed times across all review stages.</p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <Activity className="w-6 h-6 text-[#0F9F8F]" />
            <h3 className="text-base font-heading font-bold text-[#102A43]">Accuracy Scorecards</h3>
            <p className="text-xs text-[#486581]">Coder-level and department-level accuracy trend breakdowns.</p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <PieChart className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-base font-heading font-bold text-[#102A43]">Denial Root Cause</h3>
            <p className="text-xs text-[#486581]">Categorized analysis of payer rejections to drive staff education.</p>
          </div>

          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-3 shadow-sm">
            <TrendingUp className="w-6 h-6 text-[#0F9F8F]" />
            <h3 className="text-base font-heading font-bold text-[#102A43]">Volume Forecasting</h3>
            <p className="text-xs text-[#486581]">Census expansion and work volume throughput trends.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A3F] border border-[#0B2A3F] rounded-3xl p-8 lg:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-white">
            Unlock your operational data
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            See how Vescois analytics dashboards help leaders make confident operational decisions.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-md"
            >
              <span>Request Analytics Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
