import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME}: how we research dashboard warning lights, review content for accuracy, and update guides for everyday drivers.`,
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
          Back to {SITE_NAME}
        </Link>
        <p className="eyebrow">About this site</p>
        <h1>About {SITE_NAME}</h1>
        <p className="article-summary">
          {SITE_TITLE} is a free, plain-English reference that helps drivers identify dashboard warning lights,
          understand urgency, and decide what to check first — with clear limits on what we can and cannot tell you.
        </p>
        <p className="updated-note">Last updated: July 19, 2026.</p>
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
              <Link href="/symbols/check-engine-light/">check engine</Link>,{" "}
              <Link href="/symbols/oil-pressure-warning-light/">oil pressure</Link>, and{" "}
              <Link href="/symbols/traction-control-light/">traction control</Link>
            </li>
            <li>
              <strong>Scenario guides:</strong> practical advice for situations like{" "}
              <Link href="/scenarios/red-dashboard-lights/">red dashboard lights</Link> or{" "}
              <Link href="/scenarios/winter-tpms-light/">TPMS in cold weather</Link>
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Who maintains this site</h2>
          <p>
            {SITE_NAME} is an independent editorial project. It is not affiliated with any automaker, dealership chain,
            parts retailer, or repair network. Guides are written for everyday drivers who need a calm first read when a
            light appears — not as a substitute for shop diagnostics.
          </p>
          <p>
            We do not sell repairs, parts, or sponsored “recommended shops” on these pages. When we mention free code
            reads or common tools, it is because drivers ask those questions often, not because of a commercial
            partnership.
          </p>
        </section>

        <section className="content-section">
          <h2>How we research and review content</h2>
          <p>
            Each guide is built to answer three practical questions: what the light usually means, how urgent it is, and
            what to check before you guess a part. Before publishing or expanding a page, we cross-check:
          </p>
          <ul>
            <li>
              Common instrument-cluster patterns and wording across US and UK English (tire/tyre, hood/bonnet,
              gas/petrol, VSC/ESC/ESP naming).
            </li>
            <li>
              Widely documented system behavior — for example flashing vs steady check-engine lights, TPMS cold-weather
              pressure drop, shared wheel-speed sensors between ABS and traction control, and charging-system voltage
              ranges on many gasoline cars.
            </li>
            <li>
              Real driver questions from search and forums (shape-based searches like “squiggly lines,” multi-light
              clusters, and “can I keep driving?”).
            </li>
            <li>
              Safety-first wording: red oil, brake, and coolant warnings stay conservative; amber lights explain when
              short-distance driving may still be reasonable.
            </li>
          </ul>
          <p>
            Icons are simplified reference drawings so you can match color and shape quickly. They are not copied OEM
            artwork and may not match your exact cluster. When brand-specific names matter (for example Toyota/Lexus
            VSC or GM “Service Traction Control”), we call that out in the guide.
          </p>
        </section>

        <section className="content-section">
          <h2>Editorial standards</h2>
          <div className="check-list">
            <p>
              <strong>Lead with the decision:</strong> stop, drive carefully, or check soon — before long background
              text.
            </p>
            <p>
              <strong>Separate facts from possibilities:</strong> codes and symptoms point to systems, not automatic
              part replacements.
            </p>
            <p>
              <strong>Prefer reversible first steps:</strong> fuel cap, tire pressure, Off-button checks, and free scans
              before expensive guesses.
            </p>
            <p>
              <strong>Stay within scope:</strong> we explain common warning lights; we do not publish torque specs,
              wiring diagrams, or model-year repair procedures.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>How often we update</h2>
          <p>
            Guides are updated when we expand coverage for a high-intent warning light, clarify wording that confuses
            drivers, or correct an error reported by readers. High-traffic pages such as traction control, check engine,
            battery, oil pressure, and TPMS are reviewed more often than informational indicators (for example high
            beam or turn signal).
          </p>
          <p>
            Each page shows a “Last updated” note where practical. The homepage date reflects the most recent site-wide
            content pass. Search engines also receive an updated sitemap when core guides change.
          </p>
        </section>

        <section className="content-section">
          <h2>Who it is for</h2>
          <p>
            The guide is written for everyday drivers who need a quick, understandable starting point — especially in
            English-speaking markets using US and UK terms. If you are a technician looking for OEM procedures or wiring
            pinouts, this is not the right reference; use factory service information instead.
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
            Found a mismatch, unclear wording, or a missing symbol drivers search for often? Email{" "}
            <a href="mailto:470427826@qq.com">470427826@qq.com</a> with the page URL, your vehicle make/model/year if
            relevant, and what looked wrong. Feedback helps improve the guide but does not create a duty to respond or
            update within a set timeframe.
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
