export interface SiteConfig {
  name: string;
  domain: string;
  pronunciation: string;
  tagline: string;
  description: string;
  contactEmail: string;
  linkedinUrl?: string;
  consultationUrl: string;
  featureFlags: {
    showCareers: boolean;
    showInsights: boolean;
    showNewsletter: boolean;
    showClientLogin: boolean;
    showTestimonials: boolean;
    showCertifications: boolean;
    showOfficeLocations: boolean;
    showAIPlatform: boolean;
    showPricing: boolean;
  };
  navigation: {
    solutions: Array<{ title: string; href: string; description: string }>;
    services: Array<{ title: string; href: string; description: string }>;
    mainLinks: Array<{ title: string; href: string }>;
  };
}

export const siteConfig: SiteConfig = {
  name: "Vescois",
  domain: "vescois.com",
  pronunciation: "VES-koys",
  tagline: "Healthcare Intelligence. Delivered.",
  description:
    "Vescois helps healthcare organizations improve coding quality, revenue performance, operational efficiency, and compliance through expert teams, intelligent workflows, and modern technology.",
  contactEmail: "hello@vescois.com",
  consultationUrl: "/contact",
  featureFlags: {
    showCareers: true,
    showInsights: true,
    showNewsletter: false,
    showClientLogin: false,
    showTestimonials: false,
    showCertifications: false,
    showOfficeLocations: false,
    showAIPlatform: true,
    showPricing: false,
  },
  navigation: {
    solutions: [
      {
        title: "Home Health",
        href: "/solutions/home-health",
        description: "Specialized coding, OASIS review, and clinical documentation support for home health agencies.",
      },
      {
        title: "Revenue Cycle",
        href: "/solutions/revenue-cycle",
        description: "Connected RCM processes supporting clean claims from documentation through payment follow-up.",
      },
      {
        title: "Coding Quality",
        href: "/solutions/coding-quality",
        description: "Comprehensive baseline and recurring coding audit frameworks to elevate quality and compliance.",
      },
      {
        title: "Clinical Documentation",
        href: "/solutions/clinical-documentation",
        description: "Validation workflows ensuring clinical narrative clarity, completeness, and reimbursement alignment.",
      },
      {
        title: "Healthcare Analytics",
        href: "/solutions/healthcare-analytics",
        description: "Operational dashboards and workflow intelligence that turn data into actionable leadership decisions.",
      },
    ],
    services: [
      {
        title: "Medical Coding",
        href: "/services/medical-coding",
        description: "ICD-10-CM, CPT, and HCPCS coding support delivered by experienced, specialized coders.",
      },
      {
        title: "OASIS Review",
        href: "/services/oasis-review",
        description: "Rigorous OASIS documentation validation to safeguard quality indicators and clinical accuracy.",
      },
      {
        title: "Medical Billing",
        href: "/services/medical-billing",
        description: "End-to-end billing execution, claim submission support, and payment posting coordination.",
      },
      {
        title: "POC Review",
        href: "/services/poc-review",
        description: "Comprehensive Plan of Care (485) documentation validation ensuring clinical alignment, order consistency, and compliance.",
      },
      {
        title: "Coding Audits",
        href: "/services/coding-audits",
        description: "Independent baseline and recurring audits with detailed coder-level feedback and error reporting.",
      },
      {
        title: "Virtual Support",
        href: "/services/virtual-support",
        description: "Dedicated operational teams providing administrative and revenue support for healthcare providers.",
      },
    ],
    mainLinks: [
      { title: "Solutions", href: "/solutions" },
      { title: "Services", href: "/services" },
      { title: "Technology", href: "/technology" },
      { title: "Insights", href: "/insights" },
      { title: "About", href: "/about" },
      { title: "Careers", href: "/careers" },
    ],
  },
};
