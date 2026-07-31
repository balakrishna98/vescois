"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#F8FAF9] border-t border-[#D9E2EC] text-[#486581] text-sm pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Footer Links & Brand Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="light" />
            <p className="text-[#102A43] font-semibold text-base">
              {siteConfig.tagline}
            </p>
            <p className="text-[#486581] text-sm leading-relaxed max-w-sm font-normal">
              {siteConfig.description}
            </p>
            
            <div className="pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#486581] bg-white border border-[#D9E2EC] rounded-xl p-4 max-w-xs shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0D8A7D] shrink-0" />
                <span>Security-conscious operational workflows & HIPAA-aligned safeguards.</span>
              </div>
            </div>

            {siteConfig.linkedinUrl && (
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-[#D9E2EC] flex items-center justify-center text-[#486581] hover:text-[#102A43] hover:border-[#2563EB] transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  aria-label="Vescois on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h3 className="text-[#102A43] font-heading font-semibold text-xs tracking-wider uppercase">
              Solutions
            </h3>
            <ul className="space-y-3 text-xs">
              {siteConfig.navigation.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#102A43] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-[#102A43] font-heading font-semibold text-xs tracking-wider uppercase">
              Services
            </h3>
            <ul className="space-y-3 text-xs">
              {siteConfig.navigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#102A43] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="space-y-4">
            <h3 className="text-[#102A43] font-heading font-semibold text-xs tracking-wider uppercase">
              Company & Governance
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#102A43] transition-colors">
                  About Vescois
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-[#102A43] transition-colors">
                  Technology Platform
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-[#102A43] transition-colors">
                  Security & Privacy
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#102A43] transition-colors">
                  Insights & Guidance
                </Link>
              </li>
              {siteConfig.featureFlags.showCareers && (
                <li>
                  <Link href="/careers" className="hover:text-[#102A43] transition-colors">
                    Careers
                  </Link>
                </li>
              )}
              <li>
                <Link href="/contact" className="hover:text-[#102A43] transition-colors">
                  Contact Consultation
                </Link>
              </li>
              <li className="pt-2 border-t border-[#D9E2EC]/70">
                <Link href="/privacy" className="hover:text-[#102A43] transition-colors text-[11px]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#102A43] transition-colors text-[11px]">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-[#102A43] transition-colors text-[11px]">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section Optional */}
        {siteConfig.featureFlags.showNewsletter && (
          <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <h4 className="text-[#102A43] font-heading font-semibold text-base">
                Stay updated on healthcare operations & coding quality
              </h4>
              <p className="text-[#627D98] text-xs mt-1">
                Receive curated publications, workflow insights, and regulatory documentation updates.
              </p>
            </div>
            {submitted ? (
              <div className="flex items-center gap-2 text-[#0D8A7D] text-sm font-medium">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you for subscribing to Vescois updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-50 border border-[#D9E2EC] rounded-xl px-4 py-2 text-sm text-[#102A43] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] w-full md:w-64"
                />
                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-1 transition-all shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        )}

        {/* Disclaimers & Copyright */}
        <div className="pt-8 border-t border-[#D9E2EC]/80 space-y-4">
          <p className="text-xs text-[#627D98] leading-relaxed max-w-4xl">
            <strong>Legal Disclaimer:</strong> Vescois does not provide direct patient care or clinical medical treatment. Service availability, specific workflow capabilities, security requirements, and contractual compliance obligations are defined through client-specific master service agreements and security addenda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#627D98] gap-4 pt-2">
            <p>© {new Date().getFullYear()} Vescois. All rights reserved.</p>
            <p className="font-semibold text-[#102A43]">Healthcare Intelligence. Delivered.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
