"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#D9E2EC] shadow-xs py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-[#D9E2EC]/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo variant="light" />

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-5">
          <Link
            href="/contact"
            className="text-sm font-medium text-[#486581] hover:text-[#102A43] transition-colors py-2 px-1"
          >
            Contact
          </Link>
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] py-2.5 px-4.5 rounded-xl transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book via Calendly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Nav Button */}
        <MobileNav />
      </div>
    </header>
  );
}
