import React from "react";
import Link from "next/link";
import { ArrowRight, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
            404 — Page Not Found
          </span>
          <h1 className="text-3xl font-heading font-bold text-white">
            Resource Could Not Be Located
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            The page you are looking for has moved, been renamed, or does not exist on vescois.com.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm"
          >
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
