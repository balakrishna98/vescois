import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { insightArticles } from "@/data/insights";

export const metadata = {
  title: "Insights & Resources",
  description:
    "Educational guides and operational insights on home health coding, OASIS accuracy, revenue cycle workflows, and quality audits.",
};

export default function InsightsPage() {
  return (
    <div className="space-y-16 pb-20 bg-white">
      <PageHero
        eyebrow="Educational Resources"
        title="Operational insights for healthcare leaders and coding teams."
        description="Read in-depth guides, analysis, and workflow recommendations written by Vescois healthcare operations experts."
        breadcrumbs={[{ label: "Insights", href: "/insights" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightArticles.map((art) => (
            <article
              key={art.slug}
              className="bg-white border border-[#D9E2EC] rounded-2xl p-6 flex flex-col justify-between hover:border-[#2563EB] transition-all shadow-sm hover:shadow-md group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#627D98]">
                  <span className="px-3 py-1 rounded-full bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20 font-semibold">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl font-heading font-bold text-[#102A43] leading-snug group-hover:text-[#2563EB] transition-colors">
                  <Link href={`/insights/${art.slug}`}>
                    {art.title}
                  </Link>
                </h2>

                <p className="text-xs text-[#486581] leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-[#627D98]">
                <span>{art.publishedAt}</span>
                <Link
                  href={`/insights/${art.slug}`}
                  className="font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
