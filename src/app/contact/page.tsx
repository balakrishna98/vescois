import React from "react";
import { Mail, ShieldCheck, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Schedule a Consultation — Vescois",
  description:
    "Schedule an operational consultation with Vescois healthcare operations, coding quality, and revenue cycle leaders.",
};

export default function ContactPage() {
  const consultationProcess = [
    { step: "1", title: "We review your inquiry", desc: "A US client engagement director evaluates your submitted operational details within 24 hours." },
    { step: "2", title: "We schedule an introductory discussion", desc: "A 30-minute introductory call to review your current chart volumes, SLAs, and software environment." },
    { step: "3", title: "We evaluate workflow & audit requirements", desc: "Our team assesses your agency's diagnosis coding, OASIS review, or billing workflow friction points." },
    { step: "4", title: "We confirm operational fit & security controls", desc: "We review EHR credentialing, least-privilege permissions, and HIPAA-aligned security protocols." },
    { step: "5", title: "You receive a clear proposal & onboarding timeline", desc: "Together we determine if Vescois operational support is the right fit for your healthcare organization." },
  ];

  return (
    <div className="space-y-20 pb-24 bg-white">
      <PageHero
        eyebrow="Introductory Consultation"
        title="Let’s understand your workflow."
        description="Share the operational challenge you are working through, and our healthcare operations leaders will reach out to discuss your needs."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Reassuring Consultation Expectations Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold text-[#102A43]">
                What to expect after you reach out
              </h2>
              <p className="text-sm text-[#486581] leading-relaxed">
                We believe in transparent, low-pressure conversations. Here is our step-by-step consultation process:
              </p>
            </div>

            {/* Consultation Process Steps */}
            <div className="bg-[#F8FAF9] border border-[#D9E2EC] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Consultation Roadmap</span>
              </div>
              
              <div className="space-y-4 pt-1">
                {consultationProcess.map((s) => (
                  <div key={s.step} className="flex items-start gap-3 text-xs">
                    <div className="w-5 h-5 rounded-full bg-[#EAF2FF] text-[#2563EB] font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <div>
                      <strong className="block text-[#102A43]">{s.title}</strong>
                      <span className="text-[#486581] leading-normal">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Commercial Channel */}
            <div className="bg-white border border-[#D9E2EC] rounded-2xl p-5 flex items-start gap-4 shadow-xs">
              <div className="p-2.5 rounded-xl bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#627D98] font-semibold block uppercase">
                  Direct Commercial Email
                </span>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-medium text-[#102A43] hover:text-[#2563EB] transition-colors text-base"
                >
                  {siteConfig.contactEmail}
                </a>
                <span className="text-xs text-[#627D98] block mt-1">
                  Monitored by healthcare operations directors
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#D9E2EC] rounded-2xl p-5 text-xs text-[#627D98] leading-relaxed shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-[#102A43] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#0D8A7D]" />
                <span>Zero PHI Policy</span>
              </div>
              Vescois website forms are intended solely for commercial business inquiries. Do not submit Protected Health Information (PHI), patient records, or medical numbers.
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
