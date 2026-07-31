import React from "react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CareersForm } from "@/components/forms/careers-form";

export const metadata = {
  title: "Careers & Talent Network",
  description:
    "Join the Vescois talent network for opportunities in home health coding, OASIS review, medical billing, and healthcare technology.",
};

export default function CareersPage() {
  const principles = [
    { title: "Clinical & Coding Rigor", desc: "We value deep expertise in ICD-10-CM, OASIS-E guidelines, and documentation accuracy." },
    { title: "Continuous Learning", desc: "We invest in regular coder feedback, regulatory update briefings, and professional growth." },
    { title: "Respect & Integrity", desc: "We foster an operational culture centered around mutual respect, transparency, and high quality." },
  ];

  return (
    <div className="space-y-16 pb-20 bg-white">
      <PageHero
        eyebrow="Talent Network"
        title="Build your career in healthcare operations and intelligence."
        description="Vescois connects certified coding professionals, OASIS reviewers, revenue cycle specialists, and software engineers."
        breadcrumbs={[{ label: "Careers", href: "/careers" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="Our Culture"
              title="Where healthcare expertise meets operational discipline."
              description="While we are not actively hiring for specific open requisitions today, we continuously review talent submissions for upcoming client engagements."
            />

            <div className="space-y-4">
              {principles.map((p, idx) => (
                <div key={idx} className="bg-white border border-[#D9E2EC] rounded-2xl p-6 space-y-2 shadow-xs">
                  <h3 className="text-base font-heading font-bold text-[#102A43]">{p.title}</h3>
                  <p className="text-xs text-[#486581] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#F7FAFC] border border-[#D9E2EC] rounded-2xl p-6 space-y-3 text-xs text-[#486581]">
              <strong className="text-[#102A43] block">Equal Opportunity Statement:</strong>
              Vescois is an equal opportunity employer. Employment decisions are based on qualifications, merit, and operational requirements.
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <CareersForm />
          </div>
        </div>
      </section>
    </div>
  );
}
