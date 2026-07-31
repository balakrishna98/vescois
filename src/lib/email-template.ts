export interface InquiryPayload {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone?: string;
  organization: string;
  jobTitle: string;
  orgType: string;
  serviceInterest: string;
  monthlyVolume?: string;
  contactMethod: string;
  message: string;
  submittedAt?: string;
}

function sanitize(str: string = ""): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderInquiryEmailHtml(data: InquiryPayload): string {
  const timestamp = data.submittedAt || new Date().toISOString();
  const safeName = `${sanitize(data.firstName)} ${sanitize(data.lastName)}`;
  const safeOrg = sanitize(data.organization);
  const safeTitle = sanitize(data.jobTitle);
  const safeEmail = sanitize(data.workEmail);
  const safePhone = data.phone ? sanitize(data.phone) : "Not provided";
  const safeOrgType = sanitize(data.orgType);
  const safeService = sanitize(data.serviceInterest);
  const safeVolume = data.monthlyVolume ? sanitize(data.monthlyVolume) : "Not specified";
  const safeContactMethod = sanitize(data.contactMethod);
  const safeMessage = sanitize(data.message).replace(/\n/g, "<br/>");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Vescois Inquiry — ${safeOrg}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; color: #334155; margin: 0; padding: 20px;">
  <div style="max-w: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    
    <!-- Security Warning Banner -->
    <div style="background-color: #fef3c7; border: 1px solid #f59e0b; color: #92400e; padding: 12px 16px; border-radius: 8px; font-size: 12px; font-weight: 600; margin-bottom: 24px;">
      ⚠️ This inquiry was submitted through the public Vescois website. Do not forward sensitive information through unsecured channels.
    </div>

    <h2 style="color: #071b2f; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 6px;">New Commercial Consultation Inquiry</h2>
    <p style="color: #64748b; font-size: 12px; margin-top: 0; margin-bottom: 20px;">Received: ${timestamp}</p>

    <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #071b2f; width: 140px;">Name:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${safeName}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #071b2f;">Work Email:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #2563eb;"><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #071b2f;">Phone:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${safePhone}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #071b2f;">Organization:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155; font-weight: 600;">${safeOrg}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #071b2f;">Job Title:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${safeTitle}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #071b2f;">Org Type:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${safeOrgType}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #071b2f;">Service Interest:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155; font-weight: 600;">${safeService}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #071b2f;">Est. Monthly Volume:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${safeVolume}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #071b2f;">Preferred Contact:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${safeContactMethod}</td>
      </tr>
    </table>

    <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
      <div style="font-weight: 600; font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 8px;">Message:</div>
      <div style="font-size: 14px; color: #1e293b; leading-height: 1.5;">${safeMessage}</div>
    </div>

    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
      Vescois Operations Platform — Healthcare Intelligence. Delivered.
    </div>
  </div>
</body>
</html>
  `;
}
