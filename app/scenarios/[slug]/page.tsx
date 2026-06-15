import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { buildScenarioFaqJsonLd, buildScenarioHowToJsonLd } from "@/lib/scenario-schema";
import { getScenario, scenarios } from "@/lib/scenarios";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return scenarios.map((scenario) => ({ slug: scenario.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getScenario(slug);
  if (!scenario) return {};
  return {
    title: scenario.title,
    description: scenario.metaDescription,
    alternates: {
      canonical: `/scenarios/${scenario.slug}/`
    },
    openGraph: {
      title: scenario.title,
      description: scenario.metaDescription,
      url: `/scenarios/${scenario.slug}/`,
      siteName: SITE_NAME,
      type: "article"
    }
  };
}

export default async function ScenarioPage({ params }: PageProps) {
  const { slug } = await params;
  const scenario = getScenario(slug);
  if (!scenario) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Dashboard Symbols", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: scenario.h1, item: `${SITE_URL}/scenarios/${scenario.slug}/` }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: scenario.h1,
    description: scenario.metaDescription,
    url: `${SITE_URL}/scenarios/${scenario.slug}/`,
    inLanguage: "en-US",
    dateModified: "2026-06-14",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL }
  };

  const faqJsonLd = buildScenarioFaqJsonLd(scenario);
  const howToJsonLd = buildScenarioHowToJsonLd(scenario);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      {howToJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      )}
      <header className="article-header">
        <Link className="back-link" href="/">
          Back to dashboard symbols
        </Link>
        <p className="eyebrow">{scenario.eyebrow}</p>
        <h1>{scenario.h1}</h1>
        <p className="article-summary">{scenario.summary}</p>
      </header>

      <main className="article-body">
        {scenario.sections.map((section) => (
          <section className="content-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body && <p>{section.body}</p>}
            {section.items && section.ordered ? (
              <ol>{section.items.map((item) => <li key={item}>{item}</li>)}</ol>
            ) : null}
            {section.items && !section.ordered ? (
              <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
            ) : null}
          </section>
        ))}

        <section className="content-section faq-section">
          <h2>FAQ</h2>
          {scenario.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

        <section className="content-section">
          <h2>Related symbol guides</h2>
          <div className="related-links">
            {scenario.relatedGuides.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>More scenarios</h2>
          <div className="related-links">
            {scenario.relatedScenarios.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/">All dashboard symbols</Link>
          </div>
        </section>

        <p className="disclaimer">
          This scenario guide is general information only. Confirm warnings with your owner&apos;s manual.{" "}
          <Link href="/disclaimer/">Read full disclaimer</Link>.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
