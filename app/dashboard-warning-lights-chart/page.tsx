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
  title: "Dashboard Warning Lights Chart With Pictures — Visual Symbol Guide",
  description:
    "Car dashboard symbols and meanings with pictures — printable visual chart by color (red/amber/green/blue), urgency, and first checks.",
  alternates: {
    canonical: "/dashboard-warning-lights-chart/"
  },
  openGraph: {
    title: "Dashboard Warning Lights Chart With Pictures — Visual Symbol Guide",
    description:
      "Printable car dashboard symbols and meanings with pictures — match the icon, note the color, then decide what to do first.",
    url: "/dashboard-warning-lights-chart/",
    siteName: SITE_NAME,
    type: "article"
  }
};

const chartJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dashboard Warning Lights Chart With Pictures — Visual Symbol Guide",
  description:
    "Car dashboard symbols and meanings with pictures: a printable visual identification chart by color, meaning, and urgency.",
  url: chartUrl,
  inLanguage: "en-US",
  dateModified: "2026-10-26",
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
        <p className="eyebrow">Printable visual guide</p>
        <h1>Dashboard Warning Lights Chart With Pictures</h1>
        <p className="article-summary">
          Car dashboard symbols and meanings with pictures — a printable visual chart of common warning lights by
          color (red / amber / green / blue), urgency, and first checks. Built for drivers, driving schools, and
          quick roadside lookup.
        </p>
        <div className="chart-actions">
          <a href="#chart">View chart</a>
          <PrintButton>Print chart</PrintButton>
        </div>
        <p className="updated-note">Last updated: October 26, 2026.</p>
      </header>

      <main className="article-body">
        <section className="content-section">
          <div className="content-intro">
            <p className="eyebrow">How to use this guide</p>
            <h2>Need a visual reference guide for dashboard warning lights?</h2>
            <p>
              If you searched for a visual identification guide or a chart of common car dashboard warning symbols
              with pictures, start here: match the icon shape and color in the chart below, note the urgency, then
              open the linked guide for causes and what to do first. Color is the fastest filter — red first, then
              amber.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="content-intro">
            <p className="eyebrow">With pictures</p>
            <h2>Car dashboard symbols and meanings with pictures</h2>
            <p>
              Most drivers do not need a full repair manual first — they need to match what they see on the cluster.
              Each row in the chart shows a simplified picture of the light, the plain-English meaning, and whether
              you can usually keep driving. Treat the pictures as shape + color clues, then confirm in your
              owner&apos;s manual for your make and year.
            </p>
          </div>
          <div className="check-list">
            <p>
              <strong>1. Match the picture:</strong> oil can, fuel pump, horseshoe, engine outline, battery, or red
              circle with !.
            </p>
            <p>
              <strong>2. Note the color:</strong> red = urgent; amber = inspect soon; green/blue = usually a feature
              that is on.
            </p>
            <p>
              <strong>3. Use Print chart:</strong> keep a one-page copy in the glovebox for roadside checks when you
              have no signal.
            </p>
          </div>
        </section>

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

        <section className="content-section">
          <div className="content-intro">
            <p className="eyebrow">Quick match</p>
            <h2>Oil light, fuel pump, and horseshoe — which is which?</h2>
            <p>
              Many drivers search for &quot;symbols dashboard oil light on car&quot; or similar chart-style queries when
              they need a visual match, not a long repair article. Use this short guide with the chart above.
            </p>
          </div>
          <div className="check-list">
            <p>
              <strong>Oil pressure (usually red oil can):</strong> Looks like a small oil can or genie lamp. If it
              comes on while driving, stop safely and check oil level — this is not the fuel light. Full guide:{" "}
              <Link href="/symbols/oil-pressure-warning-light/">oil pressure warning light</Link>.
            </p>
            <p>
              <strong>Low fuel (amber fuel pump):</strong> Gas-station pump icon, often with a tiny arrow for the
              filler side. Refuel soon; do not confuse it with the oil can. Full guide:{" "}
              <Link href="/symbols/low-fuel-warning-light/">low fuel warning light</Link>.
            </p>
            <p>
              <strong>Tire pressure / TPMS (amber horseshoe):</strong> U-shape or horseshoe with an exclamation mark —
              tires, not brakes. Full guide:{" "}
              <Link href="/symbols/tire-pressure-warning-light/">tire pressure warning light</Link>.
            </p>
            <p>
              <strong>Brake system (red circle with !):</strong> Full circle with an exclamation mark, or the word
              BRAKE — not the horseshoe. Full guide:{" "}
              <Link href="/symbols/brake-warning-light/">brake warning light</Link>.
            </p>
          </div>
        </section>

        <section className="content-section split-section">
          <div>
            <p className="eyebrow">Printable chart</p>
            <h2>Print a dashboard warning lights chart (one page)</h2>
            <p>
              Use the <strong>Print chart</strong> button at the top for a clean, printer-friendly layout — handy for
              driving schools, glovebox checklists, and roadside safety handouts. For interactive lookup on your
              phone, use the homepage finder instead.
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
