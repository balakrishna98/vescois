"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function DesktopNav() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<"solutions" | "services" | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
      {/* Solutions Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown("solutions")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors ${
            pathname.startsWith("/solutions")
              ? "text-[#2563EB] font-semibold"
              : "text-[#486581] hover:text-[#102A43]"
          }`}
          aria-expanded={activeDropdown === "solutions"}
          onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
        >
          <span>Solutions</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              activeDropdown === "solutions" ? "rotate-180 text-[#2563EB]" : "text-[#627D98]"
            }`}
          />
        </button>

        {activeDropdown === "solutions" && (
          <div className="absolute top-full left-0 w-[420px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="bg-white border border-[#D9E2EC] rounded-2xl p-3 shadow-xl shadow-slate-200/50 ring-1 ring-black/5">
              <div className="px-3 py-2 text-[10px] font-bold tracking-wider text-[#627D98] uppercase border-b border-slate-100 mb-2 flex items-center justify-between">
                <span>Enterprise Operational Solutions</span>
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              </div>
              <div className="space-y-1">
                {siteConfig.navigation.solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className={`block p-2.5 rounded-xl transition-all ${
                      pathname === item.href
                        ? "bg-[#EAF2FF] border border-[#2563EB]/20 text-[#102A43]"
                        : "hover:bg-slate-50 border border-transparent text-[#486581]"
                    }`}
                  >
                    <div className="text-xs font-semibold text-[#102A43] flex items-center justify-between">
                      {item.title}
                    </div>
                    <p className="text-[11px] text-[#627D98] mt-0.5 line-clamp-2 leading-normal">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Services Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown("services")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors ${
            pathname.startsWith("/services")
              ? "text-[#2563EB] font-semibold"
              : "text-[#486581] hover:text-[#102A43]"
          }`}
          aria-expanded={activeDropdown === "services"}
          onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
        >
          <span>Services</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              activeDropdown === "services" ? "rotate-180 text-[#2563EB]" : "text-[#627D98]"
            }`}
          />
        </button>

        {activeDropdown === "services" && (
          <div className="absolute top-full left-0 w-[450px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="bg-white border border-[#D9E2EC] rounded-2xl p-3 shadow-xl shadow-slate-200/50 ring-1 ring-black/5">
              <div className="px-3 py-2 text-[10px] font-bold tracking-wider text-[#627D98] uppercase border-b border-slate-100 mb-2 flex items-center justify-between">
                <span>Specialized Operations & Review</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#0F9F8F]" />
              </div>
              <div className="grid grid-cols-1 gap-1">
                {siteConfig.navigation.services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className={`block p-2.5 rounded-xl transition-all ${
                      pathname === item.href
                        ? "bg-[#EAF2FF] border border-[#2563EB]/20 text-[#102A43]"
                        : "hover:bg-slate-50 border border-transparent text-[#486581]"
                    }`}
                  >
                    <div className="text-xs font-semibold text-[#102A43]">
                      {item.title}
                    </div>
                    <p className="text-[11px] text-[#627D98] mt-0.5 line-clamp-1 leading-normal">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Single Links */}
      <Link
        href="/technology"
        className={`text-sm font-medium transition-colors ${
          pathname === "/technology" ? "text-[#2563EB] font-semibold" : "text-[#486581] hover:text-[#102A43]"
        }`}
      >
        Technology
      </Link>

      <Link
        href="/insights"
        className={`text-sm font-medium transition-colors ${
          pathname.startsWith("/insights") ? "text-[#2563EB] font-semibold" : "text-[#486581] hover:text-[#102A43]"
        }`}
      >
        Insights
      </Link>

      <Link
        href="/about"
        className={`text-sm font-medium transition-colors ${
          pathname === "/about" ? "text-[#2563EB] font-semibold" : "text-[#486581] hover:text-[#102A43]"
        }`}
      >
        About
      </Link>

      {siteConfig.featureFlags.showCareers && (
        <Link
          href="/careers"
          className={`text-sm font-medium transition-colors ${
            pathname === "/careers" ? "text-[#2563EB] font-semibold" : "text-[#486581] hover:text-[#102A43]"
          }`}
        >
          Careers
        </Link>
      )}
    </nav>
  );
}
