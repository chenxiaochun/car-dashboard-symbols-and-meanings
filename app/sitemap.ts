import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const baseUrl = SITE_URL;
const lastModified = new Date("2026-06-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    ...guides.map((guide) => ({
      url: `${SITE_URL}/symbols/${guide.pageSlug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
