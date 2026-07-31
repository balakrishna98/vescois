import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/layout/breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryCtaText = "Book a Consultation",
  primaryCtaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  children,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#F7FAFC] text-[#102A43] pt-8 pb-16 lg:pb-20 border-b border-[#D9E2EC] overflow-hidden">
      {/* Soft background subtle wash */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F9F8F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-6 max-w-4xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20 mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-[#102A43]">
            {title}
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-[#486581] leading-relaxed font-normal max-w-3xl">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {primaryCtaText && (
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base shadow-sm transition-all focus:ring-2 focus:ring-[#2563EB]"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#102A43] border border-[#D9E2EC] font-semibold text-base transition-all shadow-sm"
              >
                <span>{secondaryCtaText}</span>
              </Link>
            )}
          </div>
        </div>

        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
