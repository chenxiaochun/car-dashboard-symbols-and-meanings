import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME}: a free reference for common car dashboard warning lights, symbol meanings, and first checks for drivers.`,
  alternates: {
    canonical: "/about/"
  },
  openGraph: {
    title: `About ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: "/about/",
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function AboutPage() {
  return (
    <>
      <header className="article-header">
        <Link className="back-link" href="/">
          Back to dashboard symbols
        </Link>
        <p className="eyebrow">About this site</p>
        <h1>About {SITE_NAME}</h1>
        <p className="article-summary">
          {SITE_TITLE} is a free, plain-English reference that helps drivers identify dashboard warning lights,
          understand urgency, and decide what to check first.
        </p>
        <p className="updated-note">Last updated: June 4, 2026.</p>
      </header>

      <main className="article-body">
        <section className="content-section">
          <h2>What we publish</h2>
          <p>
            The site covers common dashboard symbols — from check engine and oil pressure to TPMS, ABS, airbag, and
            coolant warnings. You can search by name, color, system, or what the symbol looks like on your instrument
            panel.
          </p>
          <ul>
            <li>
              <strong>Symbol finder:</strong> filter 50+ common warning lights on the{" "}
              <Link href="/">homepage</Link>
            </li>
            <li>
              <strong>Deep-dive guides:</strong> detailed pages for high-risk lights such as{" "}
              <Link href="/symbols/check-engine-light/">check engine</Link> and{" "}
              <Link href="/symbols/oil-pressure-warning-light/">oil pressure</Link>
            </li>
            <li>
              <strong>Scenario guides:</strong> practical advice for situations like{" "}
              <Link href="/scenarios/red-dashboard-lights/">red dashboard lights</Link> or{" "}
              <Link href="/scenarios/winter-tpms-light/">TPMS in cold weather</Link>
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Who it is for</h2>
          <p>
            The guide is written for everyday drivers who need a quick, understandable starting point — especially in
            English-speaking markets using US and UK terms (tire/tyre, hood/bonnet, gas/petrol).
          </p>
        </section>

        <section className="content-section split-section">
          <div>
            <h2>What we are not</h2>
            <p>
              We are not a dealership, repair shop, or manufacturer. Icons on this site are simplified reference
              drawings, not exact OEM symbols. Content is educational, not a diagnosis.
            </p>
          </div>
          <div className="check-list">
            <p>
              <strong>Not brand-specific:</strong> symbols vary by make, model, year, and market.
            </p>
            <p>
              <strong>Not emergency services:</strong> call roadside assistance or emergency services when needed.
            </p>
            <p>
              <strong>Final source:</strong> your owner&apos;s manual and a qualified mechanic.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Contact &amp; corrections</h2>
          <p>
            Questions or corrections: <a href="mailto:470427826@qq.com">470427826@qq.com</a>. Feedback helps improve the
            guide but does not create a duty to respond within a set timeframe.
          </p>
          <p>
            URL: <a href={SITE_URL}>{SITE_URL}</a>
          </p>
        </section>

        <p className="disclaimer">
          Please read our <Link href="/disclaimer/">disclaimer</Link> before relying on this site while driving or
          making repair decisions.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
