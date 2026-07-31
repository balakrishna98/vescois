import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Healthcare Operational Solutions",
  description:
    "Explore Vescois solutions for home health, revenue cycle, coding quality, clinical documentation, and healthcare analytics.",
};

export default function SolutionsIndexPage() {
  return (
    <div className="space-y-16 pb-20 bg-white">
      <PageHero
        eyebrow="Operational Solutions"
        title="Integrated solutions designed for modern healthcare provider organizations."
        description="Vescois helps home health agencies, hospice providers, physician groups, and healthcare service companies improve coding accuracy, speed up turnaround, and increase operational transparency."
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.navigation.solutions.map((item) => (
            <div
              key={item.href}
              className="bg-white border border-[#D9E2EC] rounded-2xl p-8 space-y-6 flex flex-col justify-between shadow-sm hover:border-[#2563EB] transition-all hover:shadow-md group text-[#102A43]"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-heading font-bold text-[#102A43] group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-[#486581] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-[#0F9F8F] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Structured Workflows
                </span>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] group-hover:translate-x-1 duration-200"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
