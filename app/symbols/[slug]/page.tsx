import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SymbolIcon } from "@/components/SymbolIcon";
import { SiteFooter } from "@/components/SiteFooter";
import { buildArticleJsonLd, buildHowToJsonLd } from "@/lib/guide-schema";
import { getGuide, getGuideSymbol, guides } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.pageSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: `/symbols/${guide.pageSlug}/`
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `/symbols/${guide.pageSlug}/`,
      siteName: SITE_NAME,
      type: "article"
    },
    twitter: {
      card: "summary",
      title: guide.title,
      description: guide.metaDescription
    }
  };
}

export default async function SymbolGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const symbol = getGuideSymbol(guide);
  if (!symbol) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Dashboard Symbols",
        item: `${SITE_URL}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: symbol.name,
        item: `${SITE_URL}/symbols/${guide.pageSlug}/`
      }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  const articleJsonLd = buildArticleJsonLd(guide, symbol.name);
  const howToJsonLd = buildHowToJsonLd(guide);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {howToJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="article-header">
        <Link className="back-link" href="/">Back to dashboard symbols</Link>
        <div className="article-hero">
          <div className="article-icon">
            <SymbolIcon symbol={symbol} large />
          </div>
          <div>
            <p className="eyebrow">{guide.eyebrow}</p>
            <h1>{guide.h1}</h1>
            <p className="article-summary">{guide.summary}</p>
          </div>
        </div>
        <div className="article-grid">
          <div className="article-card"><span>Color</span><strong>{guide.colorText}</strong></div>
          <div className="article-card"><span>Can you drive?</span><strong>{guide.canDriveText}</strong></div>
          <div className="article-card"><span>Urgency</span><strong>{guide.urgency}</strong></div>
        </div>
      </header>

      <main className="article-body">
        {guide.sections.map((section) => (
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
          <h2>{symbol.name} FAQ</h2>
          {guide.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

        <section className="content-section">
          <h2>Related symbols</h2>
          <div className="related-links">
            {guide.related.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="/">All dashboard symbols</Link>
          </div>
        </section>
        <p className="disclaimer">Dashboard symbols vary by make and model. Always confirm the exact meaning in your owner&apos;s manual.</p>
      </main>
      <SiteFooter />
    </>
  );
}
