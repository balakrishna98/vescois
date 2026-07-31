"use client";

import Script from "next/script";

/*
==================================================================
PLAUSIBLE ANALYTICS ADAPTER:
==================================================================
Disabled by default.
Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN=vescois.com in environment variables
to enable privacy-friendly, zero-cookie analytics.

Event Tracking Helper Functions:
- trackEvent('Consultation CTA Clicked')
- trackEvent('Contact Form Opened')
- trackEvent('Contact Form Submitted')
- trackEvent('Solution Page Viewed', { solution: 'Home Health' })
==================================================================
*/

export function trackEvent(eventName: string, props?: Record<string, string | number>) {
  if (typeof window !== "undefined" && (window as unknown as { plausible?: (name: string, options?: { props?: Record<string, string | number> }) => void }).plausible) {
    (window as unknown as { plausible: (name: string, options?: { props?: Record<string, string | number> }) => void }).plausible(eventName, { props });
  }
}

export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  if (!domain) {
    return null;
  }

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
