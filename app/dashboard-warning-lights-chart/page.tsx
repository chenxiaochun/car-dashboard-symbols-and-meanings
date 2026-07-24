import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { SiteFooter } from "@/components/SiteFooter";
import { SymbolIcon } from "@/components/SymbolIcon";
import { colorLabels, guideLinks, symbols, type SymbolColor } from "@/lib/symbols";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const chartUrl = `${SITE_URL}/dashboard-warning-lights-chart/`;

const colorOrder: SymbolColor[] = ["red", "amber", "green", "blue"];

const colorAdvice: Record<SymbolColor, string> = {
  red: "Stop safely or treat as urgent.",
  amber: "Inspect soon and drive gently if needed.",
  green: "A feature is active or ready.",
  blue: "Usually an informational lighting indicator."
};

export const metadata: Metadata = {
  title: "Printable Dashboard Warning Lights Chart",
  description:
    "A printable dashboard warning lights chart with common red, amber, green, and blue car symbols, meanings, urgency, and first checks.",
  alternates: {
    canonical: "/dashboard-warning-lights-chart/"
  },
  openGraph: {
    title: "Printable Dashboard Warning Lights Chart",
    description:
      "Use this car dashboard warning lights chart to match common symbols by color, meaning, urgency, and first check.",
    url: "/dashboard-warning-lights-chart/",
    siteName: SITE_NAME,
    type: "article"
  }
};

const chartJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Printable Dashboard Warning Lights Chart",
  description:
    "A quick-reference chart for common car dashboard symbols, warning light colors, urgency, and first checks.",
  url: chartUrl,
  inLanguage: "en-US",
  dateModified: "2026-07-24",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL
  }
};

export default function DashboardWarningLightsChartPage() {
  const grouped = colorOrder.map((color) => ({
    color,
    items: symbols.filter((symbol) => symbol.color === color)
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(chartJsonLd) }} />
      <header className="article-header chart-header">
        <Link className="back-link" href="/">
          Back to {SITE_NAME}
        </Link>
        <p className="eyebrow">Printable reference</p>
        <h1>Dashboard Warning Lights Chart</h1>
        <p className="article-summary">
          Match common car dashboard symbols by color, urgency, and first check. This chart is designed as a quick
          reference for drivers, driving schools, safety handouts, and maintenance checklists.
        </p>
        <div className="chart-actions">
          <a href="#chart">View chart</a>
          <PrintButton>Print chart</PrintButton>
        </div>
        <p className="updated-note">Last updated: July 24, 2026.</p>
      </header>

      <main className="article-body">
        <section className="content-section">
          <div className="content-intro">
            <p className="eyebrow">Color guide</p>
            <h2>Start with the warning light color</h2>
            <p>
              Vehicle makers vary the exact icon shape, but dashboard light color is the fastest way to judge urgency.
              Use this as a first filter, then confirm the symbol in your owner&apos;s manual.
            </p>
          </div>
          <div className="chart-color-grid">
            {colorOrder.map((color) => (
              <article key={color}>
                <span className={`dot ${color}`}></span>
                <h3>{colorLabels[color]} lights</h3>
                <p>{colorAdvice[color]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="chart">
          <div className="content-intro">
            <p className="eyebrow">Full chart</p>
            <h2>Common dashboard symbols and meanings</h2>
            <p>
              The icons below are simplified reference illustrations, not manufacturer artwork. Use the color, basic
              shape, and meaning together before deciding what to do next.
            </p>
          </div>

          <div className="chart-groups">
            {grouped.map(({ color, items }) => (
              <section className="chart-group" key={color} aria-labelledby={`${color}-lights`}>
                <h3 id={`${color}-lights`}>
                  <span className={`dot ${color}`}></span>
                  {colorLabels[color]} dashboard lights
                </h3>
                <div className="chart-table" role="list">
                  {items.map((symbol) => {
                    const guideHref = guideLinks[symbol.slug];
                    const content = (
                      <>
                        <span className="chart-symbol-icon">
                          <SymbolIcon symbol={symbol} />
                        </span>
                        <span className="chart-symbol-copy">
                          <strong>{symbol.name}</strong>
                          <span>{symbol.meaning}</span>
                          <em>{symbol.canDrive}</em>
                        </span>
                      </>
                    );

                    return guideHref ? (
                      <Link className="chart-symbol-row" href={guideHref} key={symbol.slug} role="listitem">
                        {content}
                      </Link>
                    ) : (
                      <div className="chart-symbol-row" key={symbol.slug} role="listitem">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="content-section split-section">
          <div>
            <p className="eyebrow">How to use it</p>
            <h2>Print it or cite it as a quick reference</h2>
            <p>
              This page works well as a resource link from driver education pages, basic maintenance checklists, and
              roadside safety articles. For an interactive lookup, use the homepage finder.
            </p>
          </div>
          <div className="check-list">
            <p>
              <strong>Need a quick match?</strong> Use the <Link href="/">dashboard symbol finder</Link>.
            </p>
            <p>
              <strong>Need driving advice?</strong> Start with{" "}
              <Link href="/scenarios/red-dashboard-lights/">red dashboard lights</Link> or{" "}
              <Link href="/scenarios/two-warning-lights/">two warning lights together</Link>.
            </p>
            <p>
              <strong>Need repair direction?</strong> Open a detailed guide, then confirm with the owner&apos;s manual
              or a qualified mechanic.
            </p>
          </div>
        </section>

        <p className="disclaimer">
          This chart is educational. Symbols vary by make, model, year, and market. Do not ignore red warning lights or
          warnings that appear with abnormal noises, smoke, overheating, poor braking, or loss of power.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
