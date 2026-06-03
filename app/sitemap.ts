import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";

export const dynamic = "force-static";

const baseUrl = "https://car-dashboard-symbols-and-meanings.vercel.app";
const lastModified = new Date("2026-06-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    ...guides.map((guide) => ({
      url: `${baseUrl}/symbols/${guide.pageSlug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
