# Vescois Corporate Website

**Domain**: `vescois.com`  
**Pronunciation**: VES-koys  
**Primary Tagline**: Healthcare Intelligence. Delivered.  

---

## 1. Project Overview

Vescois is a premium healthcare operations and technology company serving US healthcare organizations, including home health agencies, hospice providers, physician groups, and healthcare leaders. 

This repository contains the complete Next.js corporate website, designed with an enterprise aesthetic comparable to top healthcare and technology leaders (Optum, Veeva, Stripe, Vercel). It emphasizes security-conscious workflows, HIPAA-aligned safeguards, transparent quality frameworks, and measurable operational outcomes.

---

## 2. Technology Stack & Security Features

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS, Vanilla CSS Design System Tokens
- **Icons**: Lucide React Icons
- **Form Validation**: React Hook Form + Zod
- **Form Delivery**: Resend API Adapter (`src/app/api/contact/route.ts`)
- **Themeing**: Next Themes (Enterprise Dark & Light Mode Support)
- **Security Headers**: HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, COOP configured in `next.config.ts`.
- **Privacy Analytics**: Optional Plausible Analytics adapter (`src/components/analytics.tsx`).

---

## 3. Environment Variables (`.env.example`)

To enable production form submission notifications, configure the following in your environment:

```env
# Site Base URL
NEXT_PUBLIC_SITE_URL=https://vescois.com

# Resend API Key for Email Delivery
RESEND_API_KEY=re_123456789...

# Form Notification Recipients
CONTACT_FROM_EMAIL=inquiries@vescois.com
CONTACT_TO_EMAIL=hello@vescois.com

# Privacy Analytics (Optional, Disabled by Default)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=vescois.com
```

---

## 4. Connecting `vescois.com` to Vercel

If you see `ERR_NAME_NOT_RESOLVED` in your browser, it indicates that `vescois.com` has not yet been registered, or DNS records have not been pointed to hosting.

### 10-Step Domain Connection Guide:

1. **Deploy to Vercel**: Import your repository into Vercel and initiate a build.
2. **Open Settings**: Navigate to **Project Settings** -> **Domains**.
3. **Add Primary Domain**: Add `vescois.com`.
4. **Add Subdomain**: Add `www.vescois.com`.
5. **Configure Apex DNS**: In your domain registrar (GoDaddy, Namecheap, Cloudflare), set an `A` record for `@` pointing to Vercel's IP address (`76.76.21.21`).
6. **Configure CNAME**: Set a `CNAME` record for `www` pointing to `cname.vercel-dns.com`.
7. **Set Primary**: Set `https://vescois.com` as the primary canonical domain in Vercel.
8. **Configure Redirect**: Configure `https://www.vescois.com` to redirect permanently (301) to `https://vescois.com`.
9. **Wait for Propagation**: Allow 5–15 minutes for global DNS propagation.
10. **Confirm SSL & Test**: Vercel will automatically issue Let's Encrypt SSL certificates. Test `https://vescois.com` to verify.

---

## 5. Pre-Launch Legal Review Checklist

> [!IMPORTANT]
> The following templates require formal review and approval by qualified legal counsel prior to commercial launch:

- [ ] **Privacy Policy** (`src/app/privacy/page.tsx`): Confirm website data collection practices, contact form retention policies, and user rights language.
- [ ] **Terms of Use** (`src/app/terms/page.tsx`): Confirm service disclaimers and intellectual property provisions.
- [ ] **Accessibility Statement** (`src/app/accessibility/page.tsx`): Confirm WCAG 2.2 AA compliance standards and contact feedback loops.
- [ ] **Healthcare Compliance Language**: Verify HIPAA-aligned safeguard phrasing, zero-PHI warnings, and Business Associate Agreement (BAA) requirements for client engagements.
- [ ] **Vendor Agreements**: Confirm third-party email provider (Resend) and hosting data processing addenda.

---

## 6. Comprehensive Launch Checklist

### Business Readiness
- [ ] Domain `vescois.com` registered and active.
- [ ] DNS records pointed to Vercel.
- [ ] Business email (`hello@vescois.com`) active and monitored.
- [ ] Corporate entity registration and physical address finalized for MSA documentation.

### Technical Readiness
- [x] Strict TypeScript compilation (`npm run typecheck` passed with 0 errors).
- [x] ESLint validation (`npm run lint` passed with 0 errors/warnings).
- [x] Production build (`npm run build` compiled 29 static & dynamic routes).
- [x] Production security headers active in `next.config.ts`.
- [x] Dynamic `sitemap.xml` and `robots.txt` referencing `https://vescois.com`.
- [x] Favicons (`favicon.svg`) and OpenGraph social previews (`/og-vescois.png`) configured.
- [x] Form submission API with Resend fallback and zero PHI warnings active.

### Content Integrity
- [x] Every page reviewed for clear, professional, non-generic healthcare copy.
- [x] Zero fake facts, fake client logos, or fake certifications presented.
- [x] Zero Protected Health Information (PHI) anywhere in sample queues or data preview components.
- [x] Consistent company name (`Vescois`) and tagline (*Healthcare Intelligence. Delivered.*).
