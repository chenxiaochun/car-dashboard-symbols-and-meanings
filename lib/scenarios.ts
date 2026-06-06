export type ScenarioGuide = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  summary: string;
  howToName?: string;
  sections: Array<{ title: string; body?: string; items?: string[]; ordered?: boolean }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedGuides: Array<{ href: string; label: string }>;
  relatedScenarios: Array<{ href: string; label: string }>;
};

export const scenarios: ScenarioGuide[] = [
  {
    slug: "red-dashboard-lights",
    title: "Red Dashboard Warning Lights: What to Do First",
    metaDescription:
      "A practical guide for red dashboard warning lights: when to stop safely, what to check first, and which symbols are most urgent.",
    eyebrow: "Driving scenario",
    h1: "What to do when a red dashboard light comes on",
    summary:
      "Red dashboard lights usually mean a serious warning. The exact symbol matters, but your first job is to decide whether it is safe to keep driving.",
    howToName: "What to do when a red dashboard warning light comes on",
    sections: [
      {
        title: "Step 1: Pull over when you can",
        body: "If a red warning appears while driving, reduce speed and find a safe place to stop. Red commonly relates to oil pressure, brakes, battery charging, coolant temperature, or another safety-critical system."
      },
      {
        title: "Step 2: Match the symbol",
        ordered: true,
        items: [
          "Oil can / oil pressure → stop the engine and check oil level.",
          "Thermometer / temperature → let the engine cool; do not open a hot coolant cap.",
          "Battery → reduce electrical load; the car may stop running.",
          "Brake or exclamation in circle → check parking brake and brake fluid.",
          "Unsure → treat it as urgent and check the owner's manual."
        ]
      },
      {
        title: "Step 3: Decide whether to continue",
        body: "Do not keep driving if braking feels wrong, the engine is knocking, steam is visible, or multiple red warnings are on. When in doubt, towing is safer than guessing."
      },
      {
        title: "Most urgent red warnings",
        items: [
          "Oil pressure warning",
          "Coolant temperature warning",
          "Brake system warning with soft pedal",
          "Battery/charging failure with dim electrics",
          "Any red light plus smoke, burning smell, or sudden power loss"
        ]
      }
    ],
    faqs: [
      {
        question: "The red light is on but my car still drives normally — can I keep going?",
        answer:
          "Only if you have confirmed it is not oil pressure, coolant temperature, or a brake fault, and the pedal, temperature gauge, and oil level look normal. When the symbol is unclear, stop within the next safe opportunity — continuing with a true oil or brake fault can cause damage or loss of braking within minutes, not miles."
      },
      {
        question: "How far can I drive with a red dashboard light?",
        answer:
          "There is no safe universal mileage for red warnings. Oil pressure and coolant faults can destroy an engine in under 5 miles; a charging-system fault may leave you stranded after 10–30 minutes of driving. Tow or stop unless a qualified source confirms the light is a false alarm."
      },
      {
        question: "Two red lights are on — which do I check first?",
        answer:
          "Brake and oil pressure outrank everything else. Check pedal feel and parking brake first, then oil level with the engine off. Coolant temperature and battery/charging warnings come next. Scan codes only after red safety systems are ruled out."
      }
    ],
    relatedGuides: [
      { href: "/symbols/oil-pressure-warning-light/", label: "Oil Pressure Warning" },
      { href: "/symbols/coolant-temperature-warning-light/", label: "Coolant Temperature Warning" },
      { href: "/symbols/brake-warning-light/", label: "Brake Warning Light" },
      { href: "/symbols/battery-warning-light/", label: "Battery Warning Light" }
    ],
    relatedScenarios: [
      { href: "/scenarios/two-warning-lights/", label: "Two warning lights together" },
      { href: "/scenarios/flashing-check-engine/", label: "Flashing check engine light" }
    ]
  },
  {
    slug: "two-warning-lights",
    title: "Two Dashboard Warning Lights at Once: What It Can Mean",
    metaDescription:
      "Common dashboard warning light combinations, what they may point to, and how urgently to inspect your vehicle.",
    eyebrow: "Driving scenario",
    h1: "When two dashboard warning lights appear together",
    summary:
      "Multiple warning lights often share a root cause — low voltage, brake system fault, or engine problem. Use the combination to decide how urgently to inspect the car.",
    howToName: "How to prioritize when two dashboard warning lights are on",
    sections: [
      {
        title: "Priority order when multiple lights are on",
        body:
          "Always address red oil, brake, and coolant warnings before scanning amber codes. Low system voltage alone can trigger 2–4 lights at once — battery + electric power steering + ABS is a common trio on many 2010+ cars, and treating each amber light as a separate repair often wastes money when one charging fault is the root cause."
      },
      {
        title: "Check engine + traction control",
        body: "An engine fault can disable traction or stability control. Scan engine codes first before chasing the traction light alone."
      },
      {
        title: "ABS + brake warning",
        body: "More serious than ABS alone. Check brake fluid level and pedal feel. Stop if braking feels weak or the pedal goes soft."
      },
      {
        title: "Battery + power steering",
        body: "Low system voltage can affect electric power steering. Inspect the alternator, drive belt, and battery connections urgently."
      },
      {
        title: "Oil pressure + engine noise",
        body: "Stop the engine immediately. Driving with low oil pressure and engine noise can cause severe damage."
      },
      {
        title: "Coolant temperature + steam",
        body: "Pull over and shut off the engine. Let it cool before opening the coolant system."
      },
      {
        title: "Tyre pressure + steering pull",
        body: "One tyre may be very low or damaged. Slow down and inspect all tyre pressures as soon as safe."
      },
      {
        title: "What to do first",
        ordered: true,
        items: [
          "Note which lights are red vs amber.",
          "Check whether the car feels, sounds, or smells unusual.",
          "Address any red brake, oil, or temperature warnings before continuing.",
          "Scan for fault codes if you have access to OBD-II diagnostics."
        ]
      }
    ],
    faqs: [
      {
        question: "Two dashboard lights are on together — is that one problem or two?",
        answer:
          "Often one root cause: low voltage can light battery + power steering + ABS together; an engine fault can trigger check engine + traction control; low brake fluid can trigger both brake and ABS warnings. Start with the highest-severity color, then look for shared systems before replacing parts for each light separately."
      },
      {
        question: "Which combination is most urgent?",
        answer:
          "Oil pressure + any other red light, brake + ABS together with a soft pedal, or coolant temperature + steam. These combinations should be treated as stop-now events, not drive-to-the-shop situations."
      },
      {
        question: "I checked basics but both lights are still on — why?",
        answer:
          "Shared wiring, low voltage after a battery disconnect, or one stored fault disabling another system are common. An OBD-II scan plus a charging-system test often explains paired amber lights better than visual checks alone."
      }
    ],
    relatedGuides: [
      { href: "/symbols/abs-warning-light/", label: "ABS Warning Light" },
      { href: "/symbols/check-engine-light/", label: "Check Engine Light" },
      { href: "/symbols/tire-pressure-warning-light/", label: "Tire Pressure Warning" }
    ],
    relatedScenarios: [
      { href: "/scenarios/red-dashboard-lights/", label: "Red dashboard lights" },
      { href: "/scenarios/winter-tpms-light/", label: "TPMS light in cold weather" }
    ]
  },
  {
    slug: "winter-tpms-light",
    title: "TPMS Light in Cold Weather: Why It Comes On and What to Do",
    metaDescription:
      "Why tire pressure warning lights often appear in winter, how cold weather affects TPMS, and what to check before you drive.",
    eyebrow: "Seasonal scenario",
    h1: "Why your TPMS light comes on in cold weather",
    summary:
      "Tyre and tire pressure drops as temperature falls. A TPMS light after a cold night is common, but you should still verify pressures before driving.",
    howToName: "How to clear a TPMS light after cold weather",
    sections: [
      {
        title: "Why cold weather triggers TPMS",
        body: "Air contracts when temperatures drop. A pressure that was acceptable yesterday may fall below the TPMS threshold overnight, especially after the first cold snap of the season."
      },
      {
        title: "What to do first",
        ordered: true,
        items: [
          "Check all four tyre/tire pressures when tyres are cold.",
          "Inflate to the door jamb placard value, not the maximum molded on the sidewall.",
          "Look for a nail, screw, or visibly flat tyre.",
          "Drive a short distance — some systems need a reset or a few minutes of driving to clear."
        ]
      },
      {
        title: "When it is more than cold weather",
        items: [
          "Pressure drops again within days → possible slow leak",
          "Car pulls to one side → tyre may be very low or damaged",
          "Light flashes at startup on some vehicles → sensor battery or system fault",
          "Recent tyre change without relearn → TPMS may need calibration"
        ]
      },
      {
        title: "Winter driving tip",
        body: "Underinflated tyres reduce grip on wet or icy roads and wear faster. Checking pressures monthly in winter is a simple safety habit."
      }
    ],
    faqs: [
      {
        question: "Why did my TPMS light come on after a cold morning?",
        answer:
          "Air pressure drops about 1 PSI for every 10°F (5.5 kPa per 5.5°C) of temperature fall. Overnight cold commonly pushes one or more tires below the TPMS threshold even without a puncture — inflate to the door-jamb placard value when tires are cold."
      },
      {
        question: "I inflated the tires but the TPMS light is still on — why?",
        answer:
          "Some systems need a few minutes of driving or a manual relearn after inflation. If pressure is correct on all four tires and the light returns within days, suspect a slow leak or a sensor battery (typical life 5–10 years). A flashing TPMS icon at startup for 60–90 seconds often means a system or sensor fault, not just low pressure."
      },
      {
        question: "Can I drive with the TPMS light on in winter?",
        answer:
          "If you confirmed all tires meet the placard pressure and none looks damaged, short cautious driving is usually acceptable. Do not ignore a pulling steering wheel, visible flat, or repeated pressure loss — that suggests a leak, not cold weather alone."
      }
    ],
    relatedGuides: [
      { href: "/symbols/tire-pressure-warning-light/", label: "Tire Pressure Warning Light" },
      { href: "/symbols/abs-warning-light/", label: "ABS Warning Light" }
    ],
    relatedScenarios: [
      { href: "/scenarios/two-warning-lights/", label: "Two warning lights together" },
      { href: "/scenarios/red-dashboard-lights/", label: "Red dashboard lights" }
    ]
  },
  {
    slug: "flashing-check-engine",
    title: "Flashing Check Engine Light: Is It Safe to Drive?",
    metaDescription:
      "What a flashing check engine light usually means, how it differs from a steady light, and what to do before you keep driving.",
    eyebrow: "Driving scenario",
    h1: "Flashing check engine light — what to do",
    summary:
      "A flashing check engine light is more urgent than a steady one. It often indicates an active engine misfire that can damage the catalytic converter.",
    howToName: "What to do when the check engine light is flashing",
    sections: [
      {
        title: "Flashing vs steady",
        body: "A steady check engine light means a fault was stored and the car should be inspected soon. A flashing light means the fault may be active right now, often a misfire under load."
      },
      {
        title: "What to do first",
        ordered: true,
        items: [
          "Reduce speed and avoid hard acceleration.",
          "Do not tow heavy loads if you can avoid it.",
          "Check for shaking, loss of power, or fuel smell.",
          "Scan for diagnostic trouble codes as soon as possible."
        ]
      },
      {
        title: "When to stop driving",
        body: "Stop safely if the car shakes badly, overheats, loses power, or shows another red warning. Continuing to drive with a severe misfire can overheat the catalytic converter."
      },
      {
        title: "Common causes of flashing",
        items: [
          "Ignition coil or spark plug failure",
          "Fuel injector problem",
          "Vacuum leak affecting one cylinder",
          "Low fuel quality or contaminated fuel"
        ]
      }
    ],
    faqs: [
      {
        question: "How far can I drive with a flashing check engine light?",
        answer:
          "Drive only as far as needed to reach a safe place or repair shop — avoid highway speeds and heavy acceleration. A flashing MIL often means an active misfire; continuing for 20–50 miles under load can overheat and ruin a catalytic converter that costs $800–$2,500+ to replace on many cars."
      },
      {
        question: "Where can I get codes read for free?",
        answer:
          "In the US, AutoZone and O'Reilly Auto Parts commonly offer free OBD-II reads. Ask for the exact P-code — P0300 series codes point to misfire, which matches many flashing check-engine events."
      },
      {
        question: "The light flashed then went steady — is it safe now?",
        answer:
          "Safer than a continuously flashing light, but not ignored. The fault is still stored; scan codes and repair soon. If the light begins flashing again under acceleration, treat it as an active misfire and limit driving."
      }
    ],
    relatedGuides: [
      { href: "/symbols/check-engine-light/", label: "Check Engine Light Guide" },
      { href: "/symbols/coolant-temperature-warning-light/", label: "Coolant Temperature Warning" }
    ],
    relatedScenarios: [
      { href: "/scenarios/two-warning-lights/", label: "Two warning lights together" },
      { href: "/scenarios/red-dashboard-lights/", label: "Red dashboard lights" }
    ]
  }
];

export function getScenario(slug: string) {
  return scenarios.find((scenario) => scenario.slug === slug);
}
