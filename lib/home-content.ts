export type HomeFaq = { question: string; answer: string };

/** SERP gap content: each paragraph leads with the conclusion, then verifiable detail. */
export const serpGapParagraphs = [
  {
    id: "multi-light-priority",
    title: "Multiple warning lights at once",
    body:
      "When two or more dashboard lights appear together, check red oil, brake, and coolant warnings before any amber code scan. A single low-voltage event can trigger 2–4 lights at once — battery + electric power steering + ABS is a common cluster on many 2010+ vehicles, and NHTSA crash data consistently ranks brake and steering failures among the most safety-critical vehicle faults."
  },
  {
    id: "flash-vs-steady",
    title: "Flashing vs steady vs startup blink",
    body:
      "A flashing check engine light is more urgent than a steady one and should not be driven under heavy load until scanned. Many OEM manuals treat a flashing MIL as an active misfire that can overheat the catalytic converter; separately, a TPMS icon that flashes for 60–90 seconds at startup then stays solid often signals a sensor or system fault, not just low tire pressure."
  },
  {
    id: "free-diagnosis",
    title: "Free or low-cost next step",
    body:
      "You can often read check-engine codes for free at AutoZone and O'Reilly Auto Parts stores in the US without buying parts. A basic OBD-II reader costs about $20–$40 and reads standardized P-codes — P0420 (catalyst efficiency), P0171 (system too lean), and P0300 (random/multiple misfire) are among the most common stored codes on gasoline cars."
  },
  {
    id: "scenario-triggers",
    title: "Why the light appeared today",
    body:
      "Seasonal and maintenance events trigger many false alarms that top SERP guides skip. Tire pressure drops roughly 1 PSI for every 10°F (about 5.5 kPa per 5.5°C) of temperature fall, so a TPMS light after the first cold night is common without a puncture; a loose fuel cap can set a check-engine code that clears after 3–10 drive cycles (often 50–100 miles / 80–160 km)."
  },
  {
    id: "shape-identification",
    title: "Identify by shape before brand",
    body:
      "Match color plus icon shape before guessing the manufacturer — a horseshoe or flat tire with an exclamation mark is TPMS on most cars, a red oil-can symbol means oil pressure (not the yellow low-oil-level indicator on some VW/Audi models), and a circle with an exclamation mark inside parentheses is the brake system warning on many European and US vehicles."
  }
] as const;

export const homeFaqs: HomeFaq[] = [
  {
    question: "How do I identify which dashboard symbol is lit if I don't know the name?",
    answer:
      "Start with color, then shape: red oil can = oil pressure, horseshoe/exclamation = TPMS, engine block outline = check engine, thermometer in waves = coolant temperature, battery outline = charging system, circle with exclamation in parentheses = brake system. Use the Symbol Finder on this page to filter by color and system, then open the matching guide."
  },
  {
    question: "The warning light is on but my car drives normally — how far can I safely drive?",
    answer:
      "Do not continue with red oil pressure, red brake, or red coolant temperature warnings. For a steady amber check engine light with no shaking or smell, many drivers reach a shop within 50–100 miles, but repair should not wait weeks. A flashing check engine light, soft brake pedal, or multiple red lights mean stop or tow rather than guessing a mileage limit."
  },
  {
    question: "Where can I get check engine codes read for free, and what do they mean?",
    answer:
      "In the US, AutoZone and O'Reilly Auto Parts commonly offer free OBD-II code reads. Write down the P-code (for example P0301 = cylinder 1 misfire, P0420 = catalyst efficiency, P0171 = lean fuel mixture). Codes point to a system and circuit — they are a starting point, not a final diagnosis without testing."
  },
  {
    question: "I checked oil, tire pressure, and the fuel cap but the light is still on — why?",
    answer:
      "The fault may be sensor-related, not a visible leak or flat tire. TPMS sensors have batteries that last roughly 5–10 years; a check-engine light can stay on until the computer completes several drive cycles after a fuel-cap fix; ABS or airbag lights often need a scan and reset after battery disconnect or brake work. If basics look fine and the light persists, scan codes or see a mechanic."
  },
  {
    question: "Two dashboard lights are on together — one problem or two?",
    answer:
      "Often one root cause: low voltage can light battery + power steering + ABS together; an engine fault can trigger check engine + traction control; low brake fluid can trigger both brake and ABS warnings. Treat the most severe color first (red before amber), then scan codes before replacing parts for each light separately."
  },
  {
    question: "What do car dashboard symbols mean?",
    answer:
      "Car dashboard symbols are warning lights and indicator lights that tell you about the condition of your vehicle. Red lights usually mean stop safely, amber or yellow lights mean inspect soon, and green or blue lights usually mean a feature is active."
  },
  {
    question: "Can I keep driving with a dashboard warning light on?",
    answer:
      "It depends on the symbol and color. Red warning lights such as oil pressure, brake, or coolant temperature should be treated as urgent. Amber lights often mean you can drive cautiously but should inspect the vehicle soon."
  },
  {
    question: "What does a red dashboard light mean?",
    answer:
      "A red dashboard light usually means a serious warning or unsafe condition. Stop safely when possible, check the owner's manual, and avoid continuing if the warning relates to oil pressure, brakes, battery charging, or engine temperature."
  },
  {
    question: "What does an amber or yellow dashboard light mean?",
    answer:
      "An amber or yellow dashboard light usually means a system needs attention soon. Examples include check engine, ABS, tyre or tire pressure, airbag, traction control, and diesel particulate filter warnings."
  },
  {
    question: "Are dashboard symbols the same on every car?",
    answer:
      "No. Many warning light symbols are similar across vehicles, but exact icons, colors, and meanings can vary by make, model, year, and market. Always confirm with the owner's manual for your specific vehicle."
  }
];

export const homeHowToSteps = [
  "Note the light color (red, amber, green, or blue) and whether it is steady, flashing, or blinks only at startup.",
  "Match the icon shape using the Symbol Finder — horseshoe for TPMS, oil can for oil pressure, engine outline for check engine.",
  "For a steady check engine or amber warning with no red lights, visit AutoZone or O'Reilly in the US for a free OBD-II code read, or use a $20–$40 reader at home.",
  "Write down every P-code shown (for example P0300, P0420, P0171) and search the code with your make, model, and year.",
  "If any red oil, brake, coolant, or battery warning appears, or the car shakes, overheats, or the brake pedal feels soft, stop driving and arrange inspection or towing instead of continuing."
] as const;

export function buildHomeFaqJsonLd(faqs: HomeFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildHomeHowToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to identify a dashboard warning light and read codes for free",
    description:
      "A practical first-response path when a dashboard warning appears: identify the symbol, read OBD-II codes at no cost where available, and decide whether to keep driving.",
    step: homeHowToSteps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text
    }))
  };
}
