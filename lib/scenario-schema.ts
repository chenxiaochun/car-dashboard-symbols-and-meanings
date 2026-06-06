import type { ScenarioGuide } from "@/lib/scenarios";
import { SITE_URL } from "@/lib/site";

export function buildScenarioFaqJsonLd(scenario: ScenarioGuide) {
  if (!scenario.faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: scenario.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildScenarioHowToJsonLd(scenario: ScenarioGuide) {
  const stepsSection = scenario.sections.find(
    (section) => section.ordered && section.items?.length && /what to do first|step \d/i.test(section.title)
  );
  if (!stepsSection?.items?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: scenario.howToName ?? scenario.h1,
    description: scenario.summary,
    url: `${SITE_URL}/scenarios/${scenario.slug}/`,
    step: stepsSection.items.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text
    }))
  };
}
