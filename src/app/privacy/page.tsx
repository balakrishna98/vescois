/* Template only — requires review by qualified legal counsel before production use. */
import React from "react";
import { AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Privacy Policy Template",
  description: "Website privacy policy template for Vescois.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHero
        eyebrow="Legal Template"
        title="Privacy Policy"
        description="Information handling practices for vescois.com"
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy" }]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Attorney Review Notice */}
        <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-300">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Legal Notice:</strong> This document serves as a website privacy policy template. It must be reviewed and customized by qualified legal counsel prior to formal corporate launch.
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-white font-heading">1. Introduction</h2>
          <p>
            Vescois (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the corporate website located at {siteConfig.domain}. This Privacy Policy describes how we collect, use, and handle commercial business contact information submitted through our website.
          </p>

          <h2 className="text-xl font-bold text-white font-heading">2. Information We Collect</h2>
          <p>
            We collect commercial information voluntarily provided when you fill out contact or consultation forms on our site, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>First and last name</li>
            <li>Work email address</li>
            <li>Telephone number</li>
            <li>Organization name and job title</li>
            <li>Organization type and service interest details</li>
            <li>General message contents</li>
          </ul>

          <h2 className="text-xl font-bold text-white font-heading">3. Prohibition of Protected Health Information (PHI)</h2>
          <p>
            This public marketing website is intended exclusively for commercial business-to-business communications. You must not submit patient names, medical record numbers, dates of birth, clinical diagnoses, or any other Protected Health Information (PHI) through any web forms on this site.
          </p>

          <h2 className="text-xl font-bold text-white font-heading">4. Use of Information</h2>
          <p>
            We use collected business contact details solely to evaluate commercial inquiries, respond to consultation requests, communicate regarding potential services, and improve our website functionality.
          </p>

          <h2 className="text-xl font-bold text-white font-heading">5. Cookies and Technical Placeholders</h2>
          <p>
            Our website uses essential technical cookies necessary for website operation and security navigation. We do not run invasive third-party tracking or advertising cookies by default.
          </p>

          <h2 className="text-xl font-bold text-white font-heading">6. Data Retention & Security</h2>
          <p>
            We implement administrative and technical safeguards designed to protect commercial inquiries against unauthorized access. However, no internet transmission is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-white font-heading">7. Contact Information</h2>
          <p>
            For questions regarding this privacy policy template, contact us at: <span className="text-white font-semibold">{siteConfig.contactEmail}</span>.
          </p>
        </div>
      </main>
    </div>
  );
}
