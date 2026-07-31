"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Upload, Send } from "lucide-react";

const careersSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(1, "Location is required"),
  areaOfInterest: z.string().min(1, "Please select an area of interest"),
  linkedin: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  message: z.string().min(10, "Please include a short message"),
});

type CareersFormData = z.infer<typeof careersSchema>;

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
    defaultValues: {
      areaOfInterest: "Home Health Coding",
    },
  });

  const onSubmit = async () => {
    setSubmitted(true);
    reset();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 text-[#102A43]">
      <div className="mb-6 border-b border-slate-200 pb-4">
        <h3 className="text-xl font-heading font-bold text-[#102A43]">
          Submit General Talent Interest
        </h3>
        <p className="text-xs text-[#627D98] mt-1">
          No open roles are currently published. Submit your background for future healthcare operations and technology opportunities.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8 space-y-3">
          <CheckCircle2 className="w-10 h-10 text-[#0F9F8F] mx-auto" />
          <h4 className="text-lg font-bold text-[#102A43]">Profile Interest Received</h4>
          <p className="text-xs text-[#486581] max-w-sm mx-auto">
            Thank you for introducing yourself. We store candidate profiles in our talent pool for future openings.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-[#2563EB] underline pt-2"
          >
            Submit another profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold uppercase text-[#102A43] mb-1">
              Full Name *
            </label>
            <input
              type="text"
              {...register("fullName")}
              className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-3.5 py-2 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-600 text-[11px] mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold uppercase text-[#102A43] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-3.5 py-2 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="name@domain.com"
              />
              {errors.email && (
                <p className="text-red-600 text-[11px] mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold uppercase text-[#102A43] mb-1">
                Current Location *
              </label>
              <input
                type="text"
                {...register("location")}
                className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-3.5 py-2 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="City, State / Country"
              />
              {errors.location && (
                <p className="text-red-600 text-[11px] mt-1">{errors.location.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold uppercase text-[#102A43] mb-1">
                Area of Interest *
              </label>
              <select
                {...register("areaOfInterest")}
                className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-3.5 py-2 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                <option value="Home Health Coding">Home Health Coding</option>
                <option value="OASIS Review Specialist">OASIS Review Specialist</option>
                <option value="Revenue Cycle Operations">Revenue Cycle Operations</option>
                <option value="Coding Quality Auditor">Coding Quality Auditor</option>
                <option value="Healthcare Software Engineer">Healthcare Software Engineer</option>
                <option value="Clinical Documentation Specialist">Clinical Documentation Specialist</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold uppercase text-[#102A43] mb-1">
                LinkedIn Profile URL <span className="font-normal text-[#627D98]">(Optional)</span>
              </label>
              <input
                type="url"
                {...register("linkedin")}
                className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-3.5 py-2 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold uppercase text-[#102A43] mb-1">
              Resume Attachment <span className="font-normal text-[#627D98]">(PDF, DOCX)</span>
            </label>
            <div className="border border-dashed border-[#D9E2EC] bg-slate-50 rounded-xl p-4 text-center cursor-pointer hover:border-[#2563EB] transition-colors relative">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <Upload className="w-5 h-5 text-[#627D98] mx-auto mb-1" />
              <span className="text-xs text-[#102A43] font-medium block">
                {resumeName ? resumeName : "Click to select or drag resume file"}
              </span>
              <span className="text-[10px] text-[#627D98] block mt-0.5">
                Up to 10MB limit
              </span>
            </div>
          </div>

          <div>
            <label className="block font-semibold uppercase text-[#102A43] mb-1">
              Short Professional Introduction *
            </label>
            <textarea
              rows={3}
              {...register("message")}
              className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl p-3 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              placeholder="Briefly describe your healthcare coding experience, certifications, or operational background..."
            />
            {errors.message && (
              <p className="text-red-600 text-[11px] mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="text-[10px] text-[#627D98] pt-1 italic">
            Disclaimer: Submitting candidate information does not constitute a legal offer or promise of employment.
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Submit Talent Interest</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
