import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { scenarios } from "@/lib/scenarios";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-04");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: `${SITE_URL}/disclaimer/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    ...guides.map((guide) => ({
      url: `${SITE_URL}/symbols/${guide.pageSlug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...scenarios.map((scenario) => ({
      url: `${SITE_URL}/scenarios/${scenario.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
