import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Specialized Healthcare Services",
  description:
    "Specialized medical coding, OASIS review, medical billing, denial management, coding audits, and virtual support services.",
};

export default function ServicesIndexPage() {
  return (
    <div className="space-y-16 pb-20 bg-white">
      <PageHero
        eyebrow="Specialized Services"
        title="Targeted operational support for healthcare clinical & revenue teams."
        description="Vescois delivers specialized services staffed by qualified healthcare coders, OASIS reviewers, billing specialists, and quality auditors."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.navigation.services.map((item) => (
            <div
              key={item.href}
              className="bg-white border border-[#D9E2EC] rounded-2xl p-6 flex flex-col justify-between hover:border-[#2563EB] transition-all shadow-sm hover:shadow-md group text-[#102A43]"
            >
              <div className="space-y-3">
                <h2 className="text-xl font-heading font-bold text-[#102A43] group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-[#486581] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between">
                <span className="text-xs text-[#0F9F8F] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  SLA Support
                </span>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
