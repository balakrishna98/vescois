import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

interface LogoProps {
  className?: string;
  symbolOnly?: boolean;
  variant?: "light" | "dark" | "auto";
}

export function VescoisSymbol({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vescois-v-primary" x1="2" y1="4" x2="22" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#0B2A3F" />
        </linearGradient>
        <linearGradient id="vescois-v-accent" x1="14" y1="4" x2="34" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F9F8F" />
          <stop offset="0.6" stopColor="#2563EB" />
          <stop offset="1" stopColor="#0F9F8F" />
        </linearGradient>
      </defs>
      {/* Primary forward angle stroke */}
      <path
        d="M4 6L16 30C16.8 31.6 19.2 31.6 20 30L32 6"
        stroke="url(#vescois-v-accent)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Parallel precision node connecting structure */}
      <path
        d="M10 6L18 22L26 6"
        stroke="url(#vescois-v-primary)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.9"
      />
      {/* Precision focal point indicator */}
      <circle cx="18" cy="22" r="2.5" fill="#0F9F8F" />
    </svg>
  );
}

export function Logo({ className = "", symbolOnly = false, variant = "auto" }: LogoProps) {
  const textColorClass =
    variant === "light"
      ? "text-[#102A43]"
      : variant === "dark"
      ? "text-white"
      : "text-[#102A43] dark:text-white";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg p-1 transition-opacity hover:opacity-95 ${className}`}
      aria-label={`${siteConfig.name} - ${siteConfig.tagline}`}
    >
      <VescoisSymbol className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
      {!symbolOnly && (
        <div className="flex flex-col">
          <span className={`font-heading font-bold text-xl tracking-tight leading-none ${textColorClass}`}>
            {siteConfig.name}
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-[#627D98] uppercase mt-0.5">
            Healthcare Intelligence
          </span>
        </div>
      )}
    </Link>
  );
}
