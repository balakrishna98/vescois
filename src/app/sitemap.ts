import { MetadataRoute } from "next";
import { insightArticles } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vescois.com";

  const staticRoutes = [
    "",
    "/solutions",
    "/solutions/home-health",
    "/solutions/revenue-cycle",
    "/solutions/coding-quality",
    "/solutions/clinical-documentation",
    "/solutions/healthcare-analytics",
    "/services",
    "/services/medical-coding",
    "/services/oasis-review",
    "/services/medical-billing",
    "/services/denial-management",
    "/services/coding-audits",
    "/services/virtual-support",
    "/technology",
    "/security",
    "/about",
    "/careers",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const articleRoutes = insightArticles.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
