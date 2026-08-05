import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
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

    const resendApiKey =
      process.env.RESEND_API_KEY ||
      (globalThis as unknown as { RESEND_API_KEY?: string }).RESEND_API_KEY ||
      "";

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

    // Production Resend Email Dispatch using official Resend SDK
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const adminSubject = `New Vescois inquiry — ${payload.organization}`;
        const adminHtml = renderInquiryEmailHtml(payload);
        const visitorHtml = renderVisitorAutoReplyHtml(payload);

        // 1. Send inquiry notification containing all form data to info@vescois.com
        const adminResult = await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          replyTo: payload.workEmail,
          subject: adminSubject,
          html: adminHtml,
        });

        if (adminResult.error) {
          console.error("[Resend Lead Notification Error]:", adminResult.error);
        }

        // 2. Send Thank You auto-reply to visitor's email
        const visitorResult = await resend.emails.send({
          from: fromEmail,
          to: [payload.workEmail],
          subject: "Thank you for contacting Vescois",
          html: visitorHtml,
        });

        if (visitorResult.error) {
          console.error("[Resend Visitor Thank You Note Error]:", visitorResult.error);
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
  } catch (err) {
    console.error("[Contact API Catch Error]:", err);
    return NextResponse.json(
      { error: "Invalid form payload or validation error" },
      { status: 400 }
    );
  }
}
