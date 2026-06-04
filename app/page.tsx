import type { Metadata } from "next";
import Link from "next/link";
import { SymbolFinder } from "@/components/SymbolFinder";
import { SiteFooter } from "@/components/SiteFooter";
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do car dashboard symbols mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Car dashboard symbols are warning lights and indicator lights that tell you about the condition of your vehicle. Red lights usually mean stop safely, amber or yellow lights mean inspect soon, and green or blue lights usually mean a feature is active."
      }
    },
    {
      "@type": "Question",
      name: "Can I keep driving with a dashboard warning light on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the symbol and color. Red warning lights such as oil pressure, brake, or coolant temperature should be treated as urgent. Amber lights often mean you can drive cautiously but should inspect the vehicle soon."
      }
    },
    {
      "@type": "Question",
      name: "What does a red dashboard light mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A red dashboard light usually means a serious warning or unsafe condition. Stop safely when possible, check the owner's manual, and avoid continuing if the warning relates to oil pressure, brakes, battery charging, or engine temperature."
      }
    },
    {
      "@type": "Question",
      name: "What does an amber or yellow dashboard light mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An amber or yellow dashboard light usually means a system needs attention soon. Examples include check engine, ABS, tyre or tire pressure, airbag, traction control, and diesel particulate filter warnings."
      }
    },
    {
      "@type": "Question",
      name: "Are dashboard symbols the same on every car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Many warning light symbols are similar across vehicles, but exact icons, colors, and meanings can vary by make, model, year, and market. Always confirm with the owner's manual for your specific vehicle."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="site-header">
        <div className="header-copy">
          <a className="brand-mark" href="/" aria-label="Car Dashboard Symbols and Meanings home">
            <img src="/icon.svg" alt="" width="40" height="40" />
            <span>Dash Light Finder</span>
          </a>
          <p className="eyebrow">Dashboard warning light finder</p>
          <h1>Car Dashboard Symbols and Meanings</h1>
          <p className="intro">Match the symbol on your instrument panel, check how urgent it is, and see what to do next.</p>
          <nav className="header-jump-links" aria-label="Page sections">
            <a href="#symbolGrid">Browse symbols</a>
            <a href="#urgent-symbols">Urgent lights</a>
            <a href="#driving-advice">Can I drive?</a>
            <a href="#system-groups">By system</a>
            <a href="#common-names">Common names</a>
            <a href="#faq">FAQ</a>
          </nav>
          <p className="updated-note">Last updated: June 3, 2026. Icons are simplified reference illustrations, not exact manufacturer symbols.</p>
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

      <section className="content-section">
        <div className="content-intro">
          <p className="eyebrow">Detailed guides</p>
          <h2>Start with the most common warning lights</h2>
          <p>These five dashboard warning lights have the clearest standalone search intent and the highest safety value. Each guide explains meaning, urgency, common causes, and what to check first.</p>
        </div>
        <div className="detailed-guide-list">
          <Link href="/symbols/check-engine-light/">Check Engine Light</Link>
          <Link href="/symbols/oil-pressure-warning-light/">Oil Pressure Warning Light</Link>
          <Link href="/symbols/battery-warning-light/">Battery Warning Light</Link>
          <Link href="/symbols/brake-warning-light/">Brake Warning Light</Link>
          <Link href="/symbols/tire-pressure-warning-light/">Tire Pressure Warning Light</Link>
        </div>
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
        <div className="symbol-summary-list">
          <p><strong>Check Engine Light:</strong> engine or emissions fault; scan diagnostic trouble codes if it stays on.</p>
          <p><strong>Oil Pressure Warning:</strong> low oil pressure risk; stop safely and check oil level.</p>
          <p><strong>Battery Warning Light:</strong> charging system fault; the alternator or battery may need attention.</p>
          <p><strong>Brake Warning Light:</strong> parking brake, low brake fluid, or brake system fault.</p>
          <p><strong>ABS Warning Light:</strong> anti-lock braking may be unavailable, though normal braking may remain.</p>
          <p><strong>Tire Pressure Warning:</strong> also called TPMS or tyre pressure light; check all tyre/tire pressures.</p>
          <p><strong>Airbag Warning Light:</strong> SRS or restraint system fault; airbag protection may be reduced.</p>
          <p><strong>Coolant Temperature Warning:</strong> engine overheating risk; stop and let the engine cool.</p>
          <p><strong>Low Fuel Warning:</strong> refuel soon to avoid running the tank dry.</p>
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
        <details><summary>What should I check first when a dashboard light comes on?</summary><p>First check the color and whether the car feels different. If the light is red, stop safely. If it is amber, read the symbol, check obvious causes such as fuel cap or tyre pressure, and arrange inspection if it stays on.</p></details>
        <details><summary>Is a flashing check engine light worse than a steady one?</summary><p>Yes. A flashing check engine light can indicate a misfire that may damage the catalytic converter. Reduce speed, avoid hard acceleration, and get the car checked as soon as possible.</p></details>
        <details><summary>Why does the same warning light have different names?</summary><p>Names vary by country and manufacturer. For example, check engine light is also called engine management light or MIL, while tyre pressure warning may be written as tire pressure warning in US English.</p></details>
        <details><summary>Can I use this guide for any car brand?</summary><p>Use it as a general dashboard symbol guide. Symbols can vary by make, model, year, and market, so your owner's manual is the final source for the exact meaning on your vehicle.</p></details>
      </section>
      <p className="disclaimer">Dashboard symbols vary by make and model. This guide explains common warning light meanings and first checks, but it is not a substitute for your owner's manual or a qualified mechanic's diagnosis.</p>
    </>
  );
}
