import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SymbolIcon } from "@/components/SymbolIcon";
import { SiteFooter } from "@/components/SiteFooter";
import { getGuide, getGuideSymbol, guides } from "@/lib/guides";

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
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      type: "article"
    }
  };
}

export default async function SymbolGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const symbol = getGuideSymbol(guide);
  if (!symbol) notFound();

  return (
    <>
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
