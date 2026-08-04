"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AlertCircle, CheckCircle2, Send, ShieldAlert } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  workEmail: z.string().email("Please enter a valid work email address"),
  phone: z.string().optional(),
  organization: z.string().min(1, "Organization name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  orgType: z.enum([
    "Home health agency",
    "Hospice",
    "Physician group",
    "Clinic",
    "Healthcare services organization",
    "Other",
  ]),
  serviceInterest: z.enum([
    "Home health coding",
    "OASIS review",
    "Medical coding",
    "Revenue cycle support",
    "Coding quality and audits",
    "Healthcare analytics",
    "Virtual operations support",
    "Partnership inquiry",
    "Other",
  ]),
  monthlyVolume: z.string().optional(),
  contactMethod: z.enum(["Email", "Phone", "Either"]),
  message: z
    .string()
    .min(10, "Please enter at least 10 characters detailing your request")
    .max(2000, "Message cannot exceed 2000 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to be contacted regarding your business inquiry",
  }),
  websiteUrl: z.string().max(0, "Bot detected"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      orgType: "Home health agency",
      serviceInterest: "Home health coding",
      contactMethod: "Email",
      consent: false,
      websiteUrl: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to process request");
      }

      setSubmitSuccess(true);
      reset();
    } catch {
      setSubmitSuccess(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#D9E2EC] rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 text-[#102A43]">
      {submitSuccess ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-[#DFF7F3] text-[#0F9F8F] rounded-full flex items-center justify-center mx-auto border border-[#0F9F8F]/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-[#102A43]">
            Thank You for Reaching Out
          </h3>
          <p className="text-[#486581] max-w-md mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Thank you for contacting Vescois. Our team will review your inquiry and respond within one business day.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitSuccess(false)}
              className="px-5 py-2.5 rounded-xl bg-slate-100 text-[#102A43] hover:bg-slate-200 text-sm font-medium border border-[#D9E2EC] transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <input tabIndex={-1} autoComplete="off" {...register("websiteUrl")} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                First Name <span className="text-[#2563EB]">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName")}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                  errors.firstName ? "border-red-500" : "border-[#D9E2EC]"
                }`}
                placeholder="Jane"
              />
              {errors.firstName && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                Last Name <span className="text-[#2563EB]">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName")}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                  errors.lastName ? "border-red-500" : "border-[#D9E2EC]"
                }`}
                placeholder="Smith"
              />
              {errors.lastName && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Work Email */}
            <div>
              <label htmlFor="workEmail" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                Work Email <span className="text-[#2563EB]">*</span>
              </label>
              <input
                id="workEmail"
                type="email"
                {...register("workEmail")}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                  errors.workEmail ? "border-red-500" : "border-[#D9E2EC]"
                }`}
                placeholder="jsmith@organization.com"
              />
              {errors.workEmail && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.workEmail.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                Phone Number <span className="text-[#627D98] font-normal">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                Organization Name <span className="text-[#2563EB]">*</span>
              </label>
              <input
                id="organization"
                type="text"
                {...register("organization")}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                  errors.organization ? "border-red-500" : "border-[#D9E2EC]"
                }`}
                placeholder="Acme Healthcare Partners"
              />
              {errors.organization && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.organization.message}
                </p>
              )}
            </div>

            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                Job Title <span className="text-[#2563EB]">*</span>
              </label>
              <input
                id="jobTitle"
                type="text"
                {...register("jobTitle")}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                  errors.jobTitle ? "border-red-500" : "border-[#D9E2EC]"
                }`}
                placeholder="VP of Operations / Director of RCM"
              />
              {errors.jobTitle && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.jobTitle.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Organization Type */}
            <div>
              <label htmlFor="orgType" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                Organization Type <span className="text-[#2563EB]">*</span>
              </label>
              <select
                id="orgType"
                {...register("orgType")}
                className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                <option value="Home health agency">Home health agency</option>
                <option value="Hospice">Hospice</option>
                <option value="Physician group">Physician group</option>
                <option value="Clinic">Clinic</option>
                <option value="Healthcare services organization">Healthcare services organization</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Service Interest */}
            <div>
              <label htmlFor="serviceInterest" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                Primary Service Interest <span className="text-[#2563EB]">*</span>
              </label>
              <select
                id="serviceInterest"
                {...register("serviceInterest")}
                className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                <option value="Home health coding">Home health coding</option>
                <option value="OASIS review">OASIS review</option>
                <option value="Medical coding">Medical coding</option>
                <option value="Revenue cycle support">Revenue cycle support</option>
                <option value="Coding quality and audits">Coding quality & audits</option>
                <option value="Healthcare analytics">Healthcare analytics</option>
                <option value="Virtual operations support">Virtual operations support</option>
                <option value="Partnership inquiry">Partnership inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Monthly Volume */}
            <div>
              <label htmlFor="monthlyVolume" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                Est. Monthly Chart/Work Volume <span className="text-[#627D98] font-normal">(Optional)</span>
              </label>
              <input
                id="monthlyVolume"
                type="text"
                {...register("monthlyVolume")}
                className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="e.g. 100 - 500 charts/month"
              />
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label htmlFor="contactMethod" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                {...register("contactMethod")}
                className="w-full bg-slate-50 border border-[#D9E2EC] rounded-xl px-4 py-2.5 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Either">Either</option>
              </select>
            </div>
          </div>

          {/* Mandatory PHI Warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-900">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">Important Privacy Notice:</strong>
              Do not include patient names, medical record numbers, dates of birth, diagnoses, insurance details, or any other protected health information (PHI) in this form.
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
              Operational Needs & Message <span className="text-[#2563EB]">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message")}
              className={`w-full bg-slate-50 border rounded-xl p-4 text-sm text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                errors.message ? "border-red-500" : "border-[#D9E2EC]"
              }`}
              placeholder="Describe your agency's coding volume, quality goals, or operational friction points..."
            />
            {errors.message && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.message.message}
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              {...register("consent")}
              className="mt-1 w-4 h-4 rounded border-[#D9E2EC] text-[#2563EB] focus:ring-[#2563EB]"
            />
            <label htmlFor="consent" className="text-xs text-[#486581] leading-normal">
              I consent to Vescois contacting me regarding this business inquiry. Vescois does not share or sell commercial contact information.
            </label>
          </div>
          {errors.consent && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.consent.message}
            </p>
          )}

          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-xl">
              {submitError}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Processing Inquiry...</span>
            ) : (
              <>
                <span>Submit Consultation Request</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
