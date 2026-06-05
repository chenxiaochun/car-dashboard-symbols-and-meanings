import type { SymbolGuide } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const DATE_MODIFIED = "2026-06-04";

export function buildArticleJsonLd(guide: SymbolGuide, symbolName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.metaDescription,
    name: symbolName,
    url: `${SITE_URL}/symbols/${guide.pageSlug}/`,
    inLanguage: "en-US",
    dateModified: DATE_MODIFIED,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL
    },
    mainEntityOfPage: `${SITE_URL}/symbols/${guide.pageSlug}/`
  };
}

export function buildHowToJsonLd(guide: SymbolGuide) {
  const stepsSection = guide.sections.find((section) => section.title === "What to do first" && section.ordered);
  if (!stepsSection?.items?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `What to do when the ${guide.h1.replace(/ Meaning$/, "").toLowerCase()} comes on`,
    description: guide.summary,
    step: stepsSection.items.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text
    }))
  };
}
