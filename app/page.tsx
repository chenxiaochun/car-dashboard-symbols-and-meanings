import type { Metadata } from "next";
import Link from "next/link";
import { SymbolFinder } from "@/components/SymbolFinder";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildHomeFaqJsonLd,
  buildHomeHowToJsonLd,
  homeFaqs,
  homeHowToSteps,
  serpGapParagraphs
} from "@/lib/home-content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_TITLE} | ${SITE_NAME}`,
  alternates: {
    canonical: "/"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: SITE_TITLE,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en-US"
};

const faqJsonLd = buildHomeFaqJsonLd(homeFaqs);
const howToJsonLd = buildHomeHowToJsonLd();

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <header className="site-header">
        <div className="header-copy">
          <a className="brand-mark" href="/" aria-label={`${SITE_NAME} home`}>
            <img src="/icon.svg" alt="" width="40" height="40" />
            <span>{SITE_NAME}</span>
          </a>
          <p className="eyebrow">Dashboard warning light finder</p>
          <h1>{SITE_TITLE}</h1>
          <p className="intro">Match the symbol on your instrument panel, check how urgent it is, and see what to do next.</p>
          <nav className="header-jump-links" aria-label="Page sections">
            <a href="#symbolGrid">Browse symbols</a>
            <Link href="/dashboard-warning-lights-chart/">Chart</Link>
            <a href="#guides">Guides</a>
            <a href="#scenarios">Scenarios</a>
            <a href="#faq">FAQ</a>
            <Link href="/about/">About</Link>
          </nav>
          <p className="updated-note">
            Last updated: July 22, 2026. Icons are simplified reference illustrations, not exact manufacturer symbols.{" "}
            <Link href="/about/">How we review guides</Link>
          </p>
        </div>
        <div className="quick-panel" aria-label="Warning color guide">
          <div><span className="dot red"></span><strong>Red</strong><small>Stop safely</small></div>
          <div><span className="dot amber"></span><strong>Amber</strong><small>Inspect soon</small></div>
          <div><span className="dot green"></span><strong>Green</strong><small>Feature active</small></div>
          <div><span className="dot blue"></span><strong>Blue</strong><small>Lights on</small></div>
        </div>
      </header>

      <main>
        <SymbolFinder />
        <SeoContent />
      </main>
      <SiteFooter />
    </>
  );
}

function SeoContent() {
  return (
    <>
      <section className="content-section">
        <div className="content-intro">
          <p className="eyebrow">How to read warning lights</p>
          <h2>Dashboard light colors usually tell you how urgent the problem is</h2>
          <p>Most dashboard warning symbols use color to show urgency. The exact meaning can vary by vehicle, but color is a useful first clue when you need to decide whether to stop, drive carefully, or simply note that a feature is switched on.</p>
        </div>
        <div className="guide-grid">
          <article><span className="dot red"></span><h3>Red dashboard lights</h3><p>Red usually means a serious warning. Oil pressure, brake, battery charging, and coolant temperature warnings should be treated as urgent.</p></article>
          <article><span className="dot amber"></span><h3>Amber or yellow dashboard lights</h3><p>Amber means the vehicle needs attention soon. Common examples include check engine, ABS, tyre pressure, airbag, and traction control warnings.</p></article>
          <article><span className="dot green"></span><h3>Green dashboard lights</h3><p>Green usually means a system is active, such as turn signals, low beam headlights, cruise control, or hill descent control.</p></article>
          <article><span className="dot blue"></span><h3>Blue dashboard lights</h3><p>Blue is most often used for high beam headlights. It is normally informational, but you should dip the beams for oncoming traffic.</p></article>
        </div>
      </section>

      <section className="content-section" id="guides">
        <div className="content-intro">
          <p className="eyebrow">Detailed guides</p>
          <h2>Start with the most common warning lights</h2>
          <p>These dashboard warning lights have the clearest search intent and the highest safety value. Each guide explains meaning, urgency, common causes, and what to check first.</p>
        </div>
        <div className="detailed-guide-list">
          <Link href="/symbols/check-engine-light/">Check Engine Light</Link>
          <Link href="/symbols/oil-pressure-warning-light/">Oil Pressure Warning Light</Link>
          <Link href="/symbols/battery-warning-light/">Battery Warning Light</Link>
          <Link href="/symbols/brake-warning-light/">Brake Warning Light</Link>
          <Link href="/symbols/tire-pressure-warning-light/">Tire Pressure Warning Light</Link>
          <Link href="/symbols/abs-warning-light/">ABS Warning Light</Link>
          <Link href="/symbols/traction-control-light/">Traction Control Light</Link>
          <Link href="/symbols/coolant-temperature-warning-light/">Coolant Temperature Warning</Link>
          <Link href="/symbols/airbag-warning-light/">Airbag Warning Light</Link>
          <Link href="/symbols/low-fuel-warning-light/">Low Fuel Warning Light</Link>
        </div>
      </section>

      <section className="content-section" id="scenarios">
        <div className="content-intro">
          <p className="eyebrow">By situation</p>
          <h2>What to do in common driving scenarios</h2>
          <p>Sometimes the question is not just one symbol, but a situation — a red light at night, two warnings together, or TPMS after a cold morning. These scenario guides help you decide your next step.</p>
        </div>
        <div className="detailed-guide-list">
          <Link href="/scenarios/red-dashboard-lights/">Red dashboard light came on</Link>
          <Link href="/scenarios/lights-on-at-startup/">Multiple lights at startup</Link>
          <Link href="/scenarios/two-warning-lights/">Two warning lights together</Link>
          <Link href="/scenarios/winter-tpms-light/">TPMS light in cold weather</Link>
          <Link href="/scenarios/flashing-check-engine/">Flashing check engine light</Link>
        </div>
      </section>

      <section className="content-section" id="serp-gaps">
        <div className="content-intro">
          <p className="eyebrow">What most guides skip</p>
          <h2>Dashboard warning light topics beyond basic symbol lists</h2>
          <p>Top search results explain individual lights well, but often miss combinations, flashing patterns, free diagnosis, and seasonal triggers. Each paragraph below states the takeaway first, then the detail you can verify.</p>
        </div>
        <div className="guide-grid">
          {serpGapParagraphs.map((paragraph) => (
            <article key={paragraph.id}>
              <h3>{paragraph.title}</h3>
              <p>{paragraph.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="diagnostic-steps">
        <div className="content-intro">
          <p className="eyebrow">Step-by-step</p>
          <h2>Free or low-cost first response when a warning light appears</h2>
          <p>Use this order before paying for parts or guessing how far you can drive. It matches the HowTo structured data on this page for search engines and AI answers.</p>
        </div>
        <ol className="how-to-steps">
          {homeHowToSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="content-section split-section" id="urgent-symbols">
        <div><p className="eyebrow">Most urgent symbols</p><h2>Stop safely for these warning lights</h2><p>Some symbols can indicate damage or unsafe driving conditions. If a red oil pressure light, brake warning, coolant temperature light, or battery charging light appears while driving, pull over when safe and check the vehicle before continuing.</p></div>
        <div className="check-list">
          <p><strong>Oil pressure:</strong> stop the engine and check oil level. Do not keep driving if the warning remains.</p>
          <p><strong>Brake warning:</strong> check the parking brake and brake fluid. Stop if the pedal feels soft or braking feels abnormal.</p>
          <p><strong>Coolant temperature:</strong> let the engine cool before opening the coolant system or continuing.</p>
          <p><strong>Battery warning:</strong> reduce electrical load and get the charging system checked before the car loses power.</p>
        </div>
      </section>

      <section className="content-section" id="driving-advice">
        <div className="content-intro"><p className="eyebrow">Can I keep driving?</p><h2>Use the warning light to decide your next move</h2><p>A dashboard light does not always mean the car must stop immediately. The safest decision depends on the symbol, the color, whether the light is flashing, and whether the car feels, sounds, or smells unusual.</p></div>
        <div className="drive-grid">
          <article className="drive-card urgent"><strong>Stop safely</strong><p>Red oil pressure, red brake warning, coolant temperature, heavy smoke, burning smell, or loss of braking.</p></article>
          <article className="drive-card caution"><strong>Drive carefully</strong><p>ABS, traction control, airbag, power steering, or steady check engine light when the car still drives normally.</p></article>
          <article className="drive-card soon"><strong>Check soon</strong><p>Tyre/tire pressure, washer fluid, service due, key battery, DPF, AdBlue/DEF, or other amber maintenance warnings.</p></article>
          <article className="drive-card info"><strong>Information only</strong><p>Green or blue indicators such as turn signal, low beam, high beam, fog light, cruise control, or hill descent control.</p></article>
        </div>
      </section>

      <section className="content-section" id="system-groups">
        <div className="content-intro"><p className="eyebrow">Warning light combinations</p><h2>When two dashboard lights appear together</h2><p>Multiple lights can point to a shared system fault. These combinations are common starting points, not a diagnosis, but they help you decide how urgently to inspect the car.</p></div>
        <div className="combo-list">
          <article><h3>Check engine + traction control</h3><p>The engine fault may cause traction or stability control to be limited. Scan for engine codes first.</p></article>
          <article><h3>ABS + brake warning</h3><p>This can be more serious than ABS alone. Check brake fluid and stop if braking feels weak or the pedal feels soft.</p></article>
          <article><h3>Battery + power steering</h3><p>Low system voltage can affect electric steering. The alternator, belt, or battery may need urgent attention.</p></article>
          <article><h3>Oil pressure + engine noise</h3><p>Stop the engine. Continuing to drive with low oil pressure and engine noise can cause severe engine damage.</p></article>
          <article><h3>Coolant temperature + steam or sweet smell</h3><p>Pull over safely and let the engine cool. Do not open a hot coolant cap.</p></article>
          <article><h3>Tyre pressure + steering pull</h3><p>One tyre may be very low or damaged. Slow down, avoid sharp steering, and inspect the tyres as soon as safe.</p></article>
        </div>
      </section>

      <section className="content-section">
        <div className="content-intro"><p className="eyebrow">Common dashboard symbols</p><h2>Popular warning lights covered in this guide</h2><p>These are the dashboard symbols drivers most often need to identify quickly. Use the finder above to filter by color or vehicle system, then open a symbol for the first checks and driving advice.</p></div>
        <p className="inline-resource-link">
          Need a quick handout? Open the{" "}
          <Link href="/dashboard-warning-lights-chart/">printable dashboard warning lights chart</Link>.
        </p>
        <div className="symbol-summary-list">
          <p><strong>Check Engine Light:</strong> engine or emissions fault; scan diagnostic trouble codes if it stays on.</p>
          <p><strong>Oil Pressure Warning:</strong> low oil pressure risk; stop safely and check oil level.</p>
          <p><strong>Battery Warning Light:</strong> charging system fault; the alternator or battery may need attention.</p>
          <p><strong>Brake Warning Light:</strong> parking brake, low brake fluid, or brake system fault.</p>
          <p><strong>ABS Warning Light:</strong> <Link href="/symbols/abs-warning-light/">anti-lock braking may be unavailable</Link>, though normal braking may remain.</p>
          <p><strong>Tire Pressure Warning:</strong> also called <Link href="/symbols/tire-pressure-warning-light/">TPMS or tyre pressure light</Link>; check all tyre/tire pressures.</p>
          <p><strong>Airbag Warning Light:</strong> <Link href="/symbols/airbag-warning-light/">SRS or restraint system fault</Link>; airbag protection may be reduced.</p>
          <p><strong>Coolant Temperature Warning:</strong> <Link href="/symbols/coolant-temperature-warning-light/">engine overheating risk</Link>; stop and let the engine cool.</p>
          <p><strong>Low Fuel Warning:</strong> <Link href="/symbols/low-fuel-warning-light/">refuel soon</Link> to avoid running the tank dry.</p>
          <p><strong>Seat Belt Reminder:</strong> a seat belt is not fastened or a seat sensor detects weight.</p>
          <p><strong>Door, Hood, or Trunk Open:</strong> close the door, bonnet/hood, boot/trunk before driving.</p>
          <p><strong>Washer Fluid Low:</strong> refill windscreen or windshield washer fluid.</p>
          <p><strong>High Beam, Low Beam, Fog Light, and Turn Signal Indicators:</strong> lighting indicators usually show a feature is active.</p>
          <p><strong>Power Steering Warning:</strong> steering assistance may be reduced; drive carefully and inspect the system.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-intro"><p className="eyebrow">By car system</p><h2>Dashboard symbols grouped by vehicle system</h2><p>If you know which part of the car the warning might relate to, use these system groups to narrow it down. Engine, brake, tyre, battery, light, safety, diesel, and EV warnings often have different urgency levels.</p></div>
        <div className="system-guide">
          <article><h3>Engine, oil, and temperature</h3><p>Check engine, oil pressure, low oil level, coolant temperature, start-stop, and engine management lights.</p></article>
          <article><h3>Brakes and ABS</h3><p>Brake warning, parking brake, low brake fluid, ABS, and brake system faults need careful attention.</p></article>
          <article><h3>Tyres, steering, and stability</h3><p>Tyre pressure, traction control, stability control, power steering, and car with squiggly lines symbols.</p></article>
          <article><h3>Battery and electrical</h3><p>Battery warning, charging system, alternator, key fob battery, immobilizer, and low voltage related lights.</p></article>
          <article><h3>Lights and visibility</h3><p>High beam, low beam, fog lights, turn signals, hazard lights, washer fluid, and windscreen/windshield warnings.</p></article>
          <article><h3>Safety and driver assist</h3><p>Airbag, seat belt, lane departure, blind spot monitoring, adaptive cruise, collision warning, and parking sensors.</p></article>
          <article><h3>Diesel and emissions</h3><p>Glow plug, DPF, AdBlue/DEF, catalytic converter, emissions system, and water in fuel warnings.</p></article>
          <article><h3>EV and hybrid</h3><p>EV battery low, hybrid system warning, charge port open, regenerative braking limited, and electric drive faults.</p></article>
        </div>
      </section>

      <section className="content-section split-section" id="common-names">
        <div><p className="eyebrow">Search terms people use</p><h2>Common names for the same dashboard symbols</h2><p>Drivers often search by description because they do not know the official name of the symbol. This guide includes common US and UK wording such as tire and tyre, hood and bonnet, trunk and boot, windshield and windscreen, gas and petrol.</p></div>
        <div className="term-cloud" aria-label="Common dashboard warning light searches">
          <span>red oil can light</span><span>yellow engine light</span><span>car with squiggly lines</span><span>horseshoe exclamation mark</span><span>battery symbol on dashboard</span><span>engine management light</span><span>tyre pressure warning</span><span>bonnet open light</span><span>boot open warning</span><span>blue headlight symbol</span>
        </div>
      </section>

      <section className="content-section split-section">
        <div>
          <p className="eyebrow">Editorial note</p>
          <h2>How this guide should be used</h2>
          <p>This site is a general reference for common car dashboard symbols and warning light meanings. It is designed to help drivers identify a symbol quickly, understand urgency, and decide what to check first.</p>
        </div>
        <div className="check-list">
          <p><strong>Not brand-specific:</strong> symbols, colors, and wording can vary by make, model, year, and market.</p>
          <p><strong>Illustrations:</strong> the icons are simplified reference drawings, not copied OEM symbols.</p>
          <p><strong>Safety:</strong> red warnings and unusual vehicle behavior should be treated conservatively.</p>
          <p><strong>Final source:</strong> your vehicle owner's manual and a qualified mechanic are the best sources for exact diagnosis.</p>
        </div>
      </section>

      <section className="content-section faq-section" id="faq">
        <p className="eyebrow">Quick answers</p>
        <h2>Car dashboard symbols FAQ</h2>
        {homeFaqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
      <p className="disclaimer">Dashboard symbols vary by make and model. This guide explains common warning light meanings and first checks, but it is not a substitute for your owner's manual or a qualified mechanic's diagnosis.</p>
    </>
  );
}
