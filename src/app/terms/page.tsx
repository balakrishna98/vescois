/* Template only — requires review by qualified legal counsel before production use. */
import React from "react";
import { AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Terms of Use Template",
  description: "Terms of use template for Vescois corporate website.",
};

export default function TermsPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHero
        eyebrow="Legal Template"
        title="Terms of Use"
        description="Terms governing the use of vescois.com"
        breadcrumbs={[{ label: "Terms of Use", href: "/terms" }]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-300">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Legal Notice:</strong> This document serves as a website terms of use template requiring attorney review.
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-white font-heading">1. Website Acceptance</h2>
          <p>
            By accessing {siteConfig.domain}, you agree to comply with these Terms of Use.
          </p>

          <h2 className="text-xl font-bold text-white font-heading">2. Service Disclaimer</h2>
          <p>
            Vescois does not provide direct medical treatment or clinical healthcare services. Service commitments and performance guarantees are defined exclusively in executed Master Services Agreements (MSA).
          </p>

          <h2 className="text-xl font-bold text-white font-heading">3. Intellectual Property</h2>
          <p>
            All content, wordmarks, graphics, and code on this website are the property of Vescois.
          </p>

          <h2 className="text-xl font-bold text-white font-heading">4. Contact Details</h2>
          <p>
            Inquiries regarding terms: <span className="text-white font-semibold">{siteConfig.contactEmail}</span>.
          </p>
        </div>
      </main>
    </div>
  );
}
