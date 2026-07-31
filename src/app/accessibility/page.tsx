/* Template only — requires review by qualified legal counsel before production use. */
import React from "react";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Accessibility Statement",
  description: "Vescois commitment to WCAG 2.2 AA web accessibility.",
};

export default function AccessibilityPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHero
        eyebrow="Inclusion & Standards"
        title="Accessibility Statement"
        description="Our commitment to WCAG 2.2 AA digital accessibility standards."
        breadcrumbs={[{ label: "Accessibility", href: "/accessibility" }]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-white font-heading">Our Accessibility Commitment</h2>
          <p>
            Vescois is dedicated to ensuring digital accessibility for people of all abilities. We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
          </p>

          <h2 className="text-xl font-bold text-white font-heading">Implemented Standards</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Semantic HTML5 landmark structures (nav, main, header, footer)</li>
            <li>High-contrast text styling exceeding WCAG 4.5:1 ratio requirements</li>
            <li>Keyboard navigation support and visible focus rings</li>
            <li>Skip to main content accessibility links</li>
            <li>ARIA attributes on interactive dropdowns and mobile navigation drawers</li>
            <li>Screen reader friendly form validation and error messaging</li>
            <li>Support for prefers-reduced-motion CSS Media Queries</li>
          </ul>

          <h2 className="text-xl font-bold text-white font-heading">Feedback & Contact</h2>
          <p>
            If you encounter accessibility barriers on vescois.com, please notify us at:{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-cyan-400 font-semibold underline">
              {siteConfig.contactEmail}
            </a>.
          </p>
        </div>
      </main>
    </div>
  );
}
