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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vLogoLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>

        <linearGradient id="vLogoRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="60%" stopColor="#00C853" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        <linearGradient id="vLogoFullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B2FE" />
          <stop offset="45%" stopColor="#0066FF" />
          <stop offset="75%" stopColor="#00C853" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>

      {/* Double Line Gradient V Mark */}
      <g>
        {/* Left parallel outer stroke */}
        <path
          d="M 22 18 L 50 82 L 57 82 L 30 18 Z"
          fill="url(#vLogoLeftGrad)"
        />
        {/* Inner V core stroke */}
        <path
          d="M 33 18 L 50 68 L 67 18 L 75 18 L 50 78 L 25 18 Z"
          fill="url(#vLogoFullGrad)"
        />
        {/* Right parallel outer stroke */}
        <path
          d="M 70 18 L 50 82 L 57 82 L 78 18 Z"
          fill="url(#vLogoRightGrad)"
        />
      </g>
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
      <VescoisSymbol className="w-8.5 h-8.5 transition-transform duration-300 group-hover:scale-105" />
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
