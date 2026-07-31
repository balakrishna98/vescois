import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from "lucide-react";
import { insightArticles } from "@/data/insights";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const article = insightArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = insightArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Vescois",
      logo: "https://vescois.com/favicon.svg",
    },
    datePublished: article.publishedAt,
  };

  return (
    <article className="pb-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <section className="bg-[#F7FAFC] border-b border-[#D9E2EC] pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/insights" },
              { label: article.title },
            ]}
          />

          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20 text-xs font-semibold uppercase tracking-wider">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#102A43] tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#627D98] pt-2 border-t border-[#D9E2EC]/60">
              <span className="flex items-center gap-1.5 font-medium text-[#102A43]">
                <User className="w-3.5 h-3.5 text-[#2563EB]" />
                {article.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
        <div className="prose prose-slate max-w-none text-[#486581] text-base leading-relaxed space-y-6">
          <p className="text-lg font-medium text-[#102A43] leading-relaxed border-l-4 border-[#2563EB] pl-4 py-1">
            {article.excerpt}
          </p>

          <div
            className="space-y-6 [&_h2]:text-2xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-[#102A43] [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-heading [&_h3]:font-bold [&_h3]:text-[#102A43] [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-[#486581] [&_strong]:text-[#102A43]"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Back Link & CTA */}
        <div className="pt-8 border-t border-[#D9E2EC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold shadow-sm"
          >
            <span>Discuss with Vescois Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
