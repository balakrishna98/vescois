"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const emptySubscribe = () => () => {};

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<"solutions" | "services" | null>(null);

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveSection(null);
  };

  const mobileDrawerContent = (
    <div className="fixed inset-0 top-[65px] z-[100] bg-white backdrop-blur-2xl flex flex-col justify-between p-6 border-t border-[#D9E2EC] h-[calc(100vh-65px)] overflow-y-auto animate-in fade-in duration-200">
      <div className="space-y-4">
        <div className="space-y-2">
          {/* Solutions Accordion */}
          <div>
            <button
              onClick={() => setActiveSection(activeSection === "solutions" ? null : "solutions")}
              className="w-full flex items-center justify-between py-3 min-h-[44px] text-base font-heading font-semibold text-[#102A43] border-b border-slate-200/80"
            >
              <span>Solutions</span>
              <ChevronRight
                className={`w-5 h-5 text-[#2563EB] transition-transform duration-200 ${
                  activeSection === "solutions" ? "rotate-90" : ""
                }`}
              />
            </button>
            {activeSection === "solutions" && (
              <div className="pl-3 py-2 space-y-2.5 border-l-2 border-[#2563EB] my-2">
                {siteConfig.navigation.solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block py-1.5 text-sm font-medium text-[#486581] hover:text-[#102A43] active:text-[#2563EB]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setActiveSection(activeSection === "services" ? null : "services")}
              className="w-full flex items-center justify-between py-3 min-h-[44px] text-base font-heading font-semibold text-[#102A43] border-b border-slate-200/80"
            >
              <span>Services</span>
              <ChevronRight
                className={`w-5 h-5 text-[#2563EB] transition-transform duration-200 ${
                  activeSection === "services" ? "rotate-90" : ""
                }`}
              />
            </button>
            {activeSection === "services" && (
              <div className="pl-3 py-2 space-y-2.5 border-l-2 border-[#0D8A7D] my-2">
                {siteConfig.navigation.services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block py-1.5 text-sm font-medium text-[#486581] hover:text-[#102A43] active:text-[#2563EB]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Single Links */}
          <Link
            href="/technology"
            onClick={handleLinkClick}
            className="block py-3 min-h-[44px] flex items-center text-base font-heading font-semibold text-[#102A43] border-b border-slate-200/80"
          >
            Technology
          </Link>
          <Link
            href="/insights"
            onClick={handleLinkClick}
            className="block py-3 min-h-[44px] flex items-center text-base font-heading font-semibold text-[#102A43] border-b border-slate-200/80"
          >
            Insights
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="block py-3 min-h-[44px] flex items-center text-base font-heading font-semibold text-[#102A43] border-b border-slate-200/80"
          >
            About
          </Link>
          {siteConfig.featureFlags.showCareers && (
            <Link
              href="/careers"
              onClick={handleLinkClick}
              className="block py-3 min-h-[44px] flex items-center text-base font-heading font-semibold text-[#102A43] border-b border-slate-200/80"
            >
              Careers
            </Link>
          )}
          <Link
            href="/security"
            onClick={handleLinkClick}
            className="block py-3 min-h-[44px] flex items-center text-base font-heading font-semibold text-[#102A43] border-b border-slate-200/80"
          >
            Security & Privacy
          </Link>
        </div>
      </div>

      <div className="pt-5 space-y-3 border-t border-slate-200 mt-4 mb-2">
        <Link
          href="/contact"
          onClick={handleLinkClick}
          className="w-full flex items-center justify-center gap-2 py-3.5 min-h-[48px] px-5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-xs transition-all"
        >
          <span>Schedule Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#486581] hover:text-[#102A43] rounded-xl border border-[#D9E2EC] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6 text-[#102A43]" /> : <Menu className="w-6 h-6 text-[#102A43]" />}
      </button>

      {isOpen && isClient && createPortal(mobileDrawerContent, document.body)}
    </div>
  );
}
