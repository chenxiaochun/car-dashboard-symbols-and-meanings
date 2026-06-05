import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important limitations for Warning Light Finder: general reference only, not manufacturer-specific advice, and not a substitute for your owner's manual or professional diagnosis.",
  alternates: {
    canonical: "/disclaimer/"
  },
  openGraph: {
    title: "Disclaimer",
    description:
      "Read how to use this dashboard warning light guide safely and what this site does not guarantee.",
    url: "/disclaimer/",
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function DisclaimerPage() {
  return (
    <>
      <header className="article-header">
        <Link className="back-link" href="/">
          Back to dashboard symbols
        </Link>
        <p className="eyebrow">Legal &amp; safety notice</p>
        <h1>Disclaimer</h1>
        <p className="article-summary">
          {SITE_TITLE} ({SITE_NAME}) is a general reference for common dashboard warning lights. Please read this page
          before using the symbol finder, guides, or driving advice on this site.
        </p>
        <p className="updated-note">Last updated: June 4, 2026.</p>
      </header>

      <main className="article-body">
        <section className="content-section">
          <h2>General information only</h2>
          <p>
            Content on {SITE_URL} is provided for general educational purposes. It explains common dashboard symbols,
            typical urgency levels, and first checks that many drivers use when a warning light appears. It is not
            tailored to your specific vehicle, market, trim level, or driving conditions.
          </p>
        </section>

        <section className="content-section">
          <h2>Not a substitute for your owner&apos;s manual</h2>
          <p>
            Dashboard symbols, colors, wording, and required actions can differ by make, model, year, engine type, and
            country. Your vehicle owner&apos;s manual, digital handbook, or manufacturer support channel is the primary
            source for the exact meaning of a warning on your car.
          </p>
          <p>
            If anything on this site conflicts with your manual, warning label, instrument cluster message, or dealer
            guidance, follow the manufacturer instructions.
          </p>
        </section>

        <section className="content-section">
          <h2>Illustrations are reference drawings</h2>
          <p>
            Icons shown in the symbol finder and guides are simplified reference illustrations. They are not copied OEM
            symbols and may not match the shape, color, animation, or text shown on your dashboard. Use color, shape
            descriptions, and search terms as a starting point—not as proof that you have identified the correct
            warning.
          </p>
        </section>

        <section className="content-section">
          <h2>Not professional mechanical or legal advice</h2>
          <p>
            This site does not provide mechanical diagnosis, repair instructions, legal advice, insurance advice, or
            emergency services. Nothing here creates a technician–customer, advisor–client, or other professional
            relationship.
          </p>
          <p>
            For diagnosis, repair, towing, or safety-critical decisions—especially with red warnings, unusual noises,
            smoke, loss of braking, steering problems, or overheating—contact a qualified mechanic, roadside assistance,
            or emergency services as appropriate.
          </p>
        </section>

        <section className="content-section split-section">
          <div>
            <h2>Your driving decisions are your responsibility</h2>
            <p>
              Only you can judge road conditions, traffic, weather, vehicle behavior, and personal safety. A statement that
              you may be able to drive cautiously does not mean it is safe for you to continue in every situation.
            </p>
          </div>
          <div className="check-list">
            <p>
              <strong>Stop safely</strong> when a red warning appears, the vehicle feels unsafe, or you are unsure what
              the light means.
            </p>
            <p>
              <strong>Do not ignore flashing warnings</strong> or multiple warnings that appear together without further
              checks.
            </p>
            <p>
              <strong>Do not rely on this site</strong> while operating a vehicle. Pull over before reading detailed
              guidance if necessary.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Accuracy and updates</h2>
          <p>
            We aim to keep information accurate and useful, but dashboard technology changes and manufacturer designs
            vary. Content may be incomplete, outdated, or contain errors. We do not guarantee that any symbol match,
            explanation, or suggested first check is complete, current, or correct for your vehicle.
          </p>
        </section>

        <section className="content-section">
          <h2>No warranties</h2>
          <p>
            The site and its content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of
            any kind, whether express or implied, including fitness for a particular purpose, accuracy, or
            non-infringement, to the fullest extent permitted by applicable law.
          </p>
        </section>

        <section className="content-section">
          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE_NAME} and its contributors are not liable for any direct,
            indirect, incidental, consequential, or special damages arising from your use of—or reliance on—this site,
            including vehicle damage, injury, loss of use, towing costs, repair costs, fines, or business interruption,
            even if advised of the possibility of such damages.
          </p>
        </section>

        <section className="content-section">
          <h2>External links and third-party services</h2>
          <p>
            This site may reference or link to third-party resources. We do not control and are not responsible for
            their content, availability, or policies. Use them at your own discretion.
          </p>
        </section>

        <section className="content-section">
          <h2>Contact</h2>
          <p>
            Questions or corrections:{" "}
            <a href="mailto:470427826@qq.com">470427826@qq.com</a>. Feedback helps improve the guide but does not
            create a duty to respond or update content within a particular timeframe.
          </p>
        </section>

        <p className="disclaimer">
          By using {SITE_NAME}, you acknowledge that you have read and understood this disclaimer.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
