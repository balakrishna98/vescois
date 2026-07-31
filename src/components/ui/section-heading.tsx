import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          dark
            ? "bg-blue-500/15 text-cyan-300 border border-blue-400/30"
            : "bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20"
        }`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          dark ? "text-white" : "text-[#102A43]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-[#486581]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
