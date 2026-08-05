import { NextResponse } from "next/server";
import { z } from "zod";
import { renderInquiryEmailHtml, renderVisitorAutoReplyHtml, InquiryPayload } from "@/lib/email-template";

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

    // Environment variable binding for both Node.js runtime and Cloudflare Worker global environment
    const resendApiKey =
      process.env.RESEND_API_KEY ||
      (globalThis as unknown as { RESEND_API_KEY?: string }).RESEND_API_KEY ||
      "";
    
    // Verified domain sender address
    const fromEmail = "Vescois <inquiries@vescois.com>";
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@vescois.com";

    // Development mode sanitized log
    if (process.env.NODE_ENV !== "production") {
      console.log("[Vescois Contact Inquiry Received]:", {
        organization: payload.organization,
        orgType: payload.orgType,
        serviceInterest: payload.serviceInterest,
        sender: fromEmail,
        recipient: toEmail,
        visitorEmail: payload.workEmail,
        timestamp: payload.submittedAt,
        resendConfigured: Boolean(resendApiKey),
      });
    }

    // Production Resend Email Dispatch
    if (resendApiKey) {
      try {
        const adminSubject = `New Vescois inquiry — ${payload.organization}`;
        const adminHtml = renderInquiryEmailHtml(payload);
        const visitorHtml = renderVisitorAutoReplyHtml(payload);

        // 1. Send inquiry notification containing all form data to info@vescois.com
        const adminRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            reply_to: payload.workEmail,
            subject: adminSubject,
            html: adminHtml,
          }),
        });

        if (!adminRes.ok) {
          const adminErrData = await adminRes.json();
          console.error("[Resend Lead Notification Error]:", adminErrData);
        }

        // 2. Send Thank You auto-reply to visitor's email
        const visitorRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [payload.workEmail],
            subject: "Thank you for contacting Vescois",
            html: visitorHtml,
          }),
        });

        if (!visitorRes.ok) {
          const visitorErrData = await visitorRes.json();
          console.error("[Resend Visitor Thank You Note Error]:", visitorErrData);
        }
      } catch (emailErr) {
        console.error("[Resend Dispatch Exception]:", emailErr);
      }
    }

    // Return clean user confirmation status
    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Vescois. Our team will review your inquiry and respond within one business day.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid form payload or validation error" },
      { status: 400 }
    );
  }
}
