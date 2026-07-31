import { NextResponse } from "next/server";
import { z } from "zod";
import { renderInquiryEmailHtml, InquiryPayload } from "@/lib/email-template";

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  workEmail: z.string().email(),
  phone: z.string().optional(),
  organization: z.string().min(1),
  jobTitle: z.string().min(1),
  orgType: z.string(),
  serviceInterest: z.string(),
  monthlyVolume: z.string().optional(),
  contactMethod: z.string(),
  message: z.string().min(10),
  consent: z.boolean(),
  websiteUrl: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Spam honeypot check
    if (validatedData.websiteUrl && validatedData.websiteUrl.length > 0) {
      return NextResponse.json({ error: "Invalid submission request" }, { status: 400 });
    }

    const payload: InquiryPayload = {
      ...validatedData,
      submittedAt: new Date().toISOString(),
    };

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "inquiries@vescois.com";
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@vescois.com";

    // Development mode sanitized log (never logs PHI or full raw message body)
    if (process.env.NODE_ENV !== "production") {
      console.log("[Vescois Contact Inquiry Received]:", {
        organization: payload.organization,
        orgType: payload.orgType,
        serviceInterest: payload.serviceInterest,
        emailDomain: payload.workEmail.split("@")[1] || "unknown",
        timestamp: payload.submittedAt,
        resendConfigured: Boolean(resendApiKey),
      });
    }

    // Production Resend Email Dispatch
    if (resendApiKey) {
      try {
        const emailSubject = `New Vescois inquiry — ${payload.organization}`;
        const emailHtml = renderInquiryEmailHtml(payload);

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            subject: emailSubject,
            html: emailHtml,
          }),
        });

        if (!resendRes.ok) {
          console.error("[Resend Email Transmission Error]: Status", resendRes.status);
        }
      } catch (emailErr) {
        console.error("[Resend Dispatch Exception]:", emailErr);
      }
    }

    // Return clean user confirmation status
    return NextResponse.json({
      success: true,
      message: "Consultation inquiry successfully logged.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid form payload or validation error" },
      { status: 400 }
    );
  }
}
