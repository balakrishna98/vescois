"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#EEF7FF] border-b border-[#D9E2EC] text-[#204969] text-xs py-2.5 px-4 text-center font-medium relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span>Built for healthcare organizations that need accuracy, visibility, and scalable operational support.</span>
        <Link
          href="/solutions"
          className="inline-flex items-center gap-1 text-[#2563EB] hover:text-[#1D4ED8] transition-colors underline-offset-4 hover:underline font-semibold ml-1"
        >
          <span>Explore our approach</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
