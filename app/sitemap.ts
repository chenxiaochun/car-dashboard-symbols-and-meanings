import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { scenarios } from "@/lib/scenarios";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const siteLastModified = new Date("2026-07-19");
const aboutLastModified = new Date("2026-07-19");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified: aboutLastModified,
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: `${SITE_URL}/disclaimer/`,
      lastModified: aboutLastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    ...guides.map((guide) => ({
      url: `${SITE_URL}/symbols/${guide.pageSlug}/`,
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...scenarios.map((scenario) => ({
      url: `${SITE_URL}/scenarios/${scenario.slug}/`,
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
