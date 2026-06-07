import { symbols } from "@/lib/symbols";

export type SymbolGuide = {
  pageSlug: string;
  symbolSlug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  summary: string;
  colorText: string;
  canDriveText: string;
  urgency: string;
  sections: Array<{ title: string; body?: string; items?: string[]; ordered?: boolean }>;
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ href: string; label: string }>;
};

export const guides: SymbolGuide[] = [
  {
    pageSlug: "check-engine-light",
    symbolSlug: "check-engine-light",
    title: "Check Engine Light Meaning: Can You Drive and What to Do",
    metaDescription: "Learn what the check engine light means, whether you can keep driving, common causes, what to check first, and when a flashing engine light is urgent.",
    eyebrow: "Engine warning",
    h1: "Check Engine Light Meaning",
    summary: "The check engine light means the engine or emissions control system has detected a fault. A steady light is usually less urgent than a flashing light, but it should not be ignored.",
    colorText: "Amber or yellow",
    canDriveText: "Usually, if steady",
    urgency: "Inspect soon",
    sections: [
      { title: "What it means", body: "The check engine light, also called the engine management light, MIL, or malfunction indicator lamp, is triggered when the car's computer sees a problem in the engine, fuel, ignition, or emissions system. The car may still feel normal, but a stored fault code can explain what the system detected." },
      { title: "What to do first", ordered: true, items: ["Check whether the light is steady or flashing.", "Tighten the fuel cap if your car has one, then see whether the light clears after a few trips.", "Avoid hard acceleration, towing, or high-speed driving until the cause is known.", "Scan for diagnostic trouble codes if the light stays on."] },
      { title: "Common causes", items: ["Loose or faulty fuel cap", "Oxygen sensor or emissions sensor fault", "Ignition misfire, coil, or spark plug problem", "Mass airflow sensor fault", "Catalytic converter efficiency problem"] },
      { title: "When to stop driving", body: "If the check engine light is flashing, reduce speed and avoid heavy throttle. A flashing light can mean an active misfire that may damage the catalytic converter. Stop sooner if the car shakes, loses power, overheats, smells like fuel, or shows another red warning light." }
    ],
    faqs: [
      { question: "Is a steady check engine light safe?", answer: "Often yes for a short period if the car drives normally, but the vehicle should still be scanned and repaired soon." },
      { question: "Can a loose fuel cap cause it?", answer: "Yes. A loose or damaged fuel cap can trigger an evaporative emissions fault on many petrol/gasoline vehicles." }
    ],
    related: [
      { href: "/symbols/oil-pressure-warning-light/", label: "Oil Pressure Warning" },
      { href: "/symbols/battery-warning-light/", label: "Battery Warning Light" },
      { href: "/symbols/tire-pressure-warning-light/", label: "Tire Pressure Warning" }
    ]
  },
  {
    pageSlug: "oil-pressure-warning-light",
    symbolSlug: "oil-pressure-warning",
    title: "Red Oil Pressure Light Meaning — What the Oil Sign in Your Car Means",
    metaDescription:
      "The oil pressure light is red on most cars and shows an oil-can symbol. Learn what the oil sign in your car means, how it differs from transmission oil pressure warnings, and when to stop driving.",
    eyebrow: "Red engine warning",
    h1: "Oil Pressure Warning Light Meaning",
    summary:
      "The oil pressure warning light is red on most vehicles and shows an oil-can or genie-lamp symbol. It means engine oil pressure may be too low — not simply that an oil change is due — and it is one of the most urgent dashboard warnings because low pressure can damage the engine within minutes.",
    colorText: "Red",
    canDriveText: "No. Stop safely.",
    urgency: "High",
    sections: [
      {
        title: "What it means",
        body:
          "The oil pressure light — often called the oil sign in a car — usually shows a red oil-can or dripping-oil icon. It warns that oil pressure may be too low to protect moving engine parts. It is not the same as a yellow low-oil-level reminder on some VW/Audi models, and it is not the same as a transmission oil pressure warning on automatic vehicles."
      },
      {
        title: "What color is the oil pressure light?",
        body:
          "On most cars sold in the US and UK, the engine oil pressure warning is red because low oil pressure is a stop-now fault. A few manufacturers use amber or yellow for a low oil level reminder — that is a different warning from red oil pressure. If your dashboard shows a red oil-can symbol while driving, treat it as urgent regardless of brand."
      },
      {
        title: "Engine oil pressure vs transmission oil pressure",
        body:
          "Engine oil pressure and transmission oil pressure are separate systems with different symbols. The engine warning is usually a red oil can and relates to lubrication inside the engine. A transmission oil pressure warning — more common on automatic trucks and some SUVs — may show a gear icon, the word AT, OIL, or a thermometer combined with a gear, and it means the automatic gearbox has low line pressure. If you searched for a transmission oil pressure symbol, confirm whether the icon includes a gear or transmission label; a plain oil can almost always means engine oil pressure."
      },
      { title: "What to do first", ordered: true, items: ["Pull over safely and turn off the engine.", "Wait a few minutes, then check the oil level if your vehicle has a dipstick.", "Look for obvious oil leaks under the car.", "Do not keep driving if the light remains on after topping up with the correct oil."] },
      { title: "Common causes", items: ["Low engine oil level", "Oil leak or severe oil consumption", "Faulty oil pressure sensor", "Blocked oil pickup or filter", "Oil pump or internal engine problem"] },
      { title: "When it is most serious", body: "Stop immediately if the oil light appears with engine knocking, ticking, burning smell, smoke, or loss of power. Continuing to drive can turn a small leak or low oil level into major engine damage." }
    ],
    faqs: [
      {
        question: "What color is the oil pressure light?",
        answer:
          "Red on most cars. Red means stop safely and check the engine — low oil pressure can cause damage within minutes. Amber or yellow oil-can icons on some vehicles mean low oil level, not low pressure; check your owner's manual if the color is not red."
      },
      {
        question: "What is the oil sign in a car?",
        answer:
          "The oil sign is usually a red oil-can or genie-lamp icon on the dashboard. It is the engine oil pressure warning light. When it comes on while driving, pull over, turn off the engine, and check the oil level before continuing."
      },
      {
        question: "Is the transmission oil pressure symbol the same as the engine oil light?",
        answer:
          "No. Engine oil pressure uses an oil-can symbol and protects the engine. Transmission oil pressure warnings — mainly on automatics — often include a gear, AT, or OIL label and relate to gearbox hydraulic pressure. A plain red oil can almost always means engine oil pressure, not transmission."
      },
      { question: "Is oil pressure the same as oil level?", answer: "No. Low oil level can cause low pressure, but a pressure warning can also come from pump, sensor, or internal engine problems." },
      { question: "Can I drive to a workshop?", answer: "Not if the red oil pressure warning stays on. Arrange help or towing rather than driving with low oil pressure." }
    ],
    related: [
      { href: "/symbols/check-engine-light/", label: "Check Engine Light" },
      { href: "/symbols/battery-warning-light/", label: "Battery Warning Light" }
    ]
  },
  {
    pageSlug: "battery-warning-light",
    symbolSlug: "battery-warning-light",
    title: "Battery Warning Light Meaning: Charging System Warning",
    metaDescription: "Learn what the battery warning light means, common charging system causes, whether you can keep driving, and what to do first.",
    eyebrow: "Electrical warning",
    h1: "Battery Warning Light Meaning",
    summary: "The battery warning light usually means the charging system is not keeping the battery powered. The car may run for a short time, then lose electrical power.",
    colorText: "Red",
    canDriveText: "Short distance only",
    urgency: "High",
    sections: [
      { title: "What it means", body: "Despite the name, the battery light often points to the alternator, belt, wiring, or charging circuit rather than the battery alone. If the system is not charging, headlights, power steering, engine electronics, and other systems may lose power." },
      { title: "What to do first", ordered: true, items: ["Turn off nonessential electrical loads such as heated seats and rear defroster.", "Avoid stopping the engine unless you are in a safe place, because it may not restart.", "Check whether the drive belt is broken or slipping if it is safe to inspect.", "Have the battery and alternator tested soon."] },
      { title: "Common causes", items: ["Failing alternator", "Loose, broken, or slipping belt", "Weak battery or poor battery connection", "Corroded terminals or wiring fault", "Charging system fuse or control fault"] },
      { title: "When to stop driving", body: "Stop safely if the battery light appears with overheating, heavy steering, dim lights, warning messages, or loss of electrical systems. These signs can mean the car may stop running soon." }
    ],
    faqs: [
      { question: "Does the battery light mean I need a new battery?", answer: "Not always. The alternator and charging system should be tested before replacing parts." },
      { question: "Why did power steering get heavy too?", answer: "Some cars use electric power steering, which can be affected by low voltage. A belt failure can also affect multiple systems." }
    ],
    related: [
      { href: "/symbols/check-engine-light/", label: "Check Engine Light" },
      { href: "/symbols/brake-warning-light/", label: "Brake Warning Light" }
    ]
  },
  {
    pageSlug: "brake-warning-light",
    symbolSlug: "brake-warning-light",
    title: "Brake Warning Light Meaning: Is It Safe to Drive?",
    metaDescription: "Learn what the brake warning light means, how it differs from ABS and parking brake lights, common causes, and when to stop driving.",
    eyebrow: "Brake system warning",
    h1: "Brake Warning Light Meaning",
    summary: "The brake warning light can mean the parking brake is on, brake fluid is low, or the brake system needs attention. Because brakes are safety-critical, treat this warning carefully.",
    colorText: "Red",
    canDriveText: "Only after checks",
    urgency: "High",
    sections: [
      { title: "What it means", body: "A red brake light may show an exclamation mark, the word BRAKE, or a circle in brackets. It can be simple, such as the parking brake being applied, or serious, such as low brake fluid or a hydraulic brake fault." },
      { title: "What to do first", ordered: true, items: ["Check that the parking brake or handbrake is fully released.", "Check brake fluid level if it is safe and you know where the reservoir is.", "Do not drive if the brake pedal feels soft, sinks, or braking distance feels longer.", "Get the brake system inspected if the light stays on."] },
      { title: "Common causes", items: ["Parking brake engaged", "Low brake fluid", "Brake fluid leak", "Worn brake pads on some vehicles", "Brake switch, sensor, or hydraulic system fault"] },
      { title: "Brake light vs ABS light", body: "An ABS light often means anti-lock braking may be unavailable, while normal braking may still work. A red brake warning is more urgent because it can involve the main braking system. If both ABS and brake warning lights are on, inspect the car before continuing." }
    ],
    faqs: [
      { question: "Can low brake fluid be dangerous?", answer: "Yes. Low brake fluid can indicate worn pads or a leak. If the pedal feels abnormal, do not continue driving." },
      { question: "Can I drive if it was just the parking brake?", answer: "If the light goes out after releasing the parking brake and braking feels normal, driving may be fine. If it stays on, inspect the system." }
    ],
    related: [
      { href: "/symbols/battery-warning-light/", label: "Battery Warning Light" },
      { href: "/symbols/tire-pressure-warning-light/", label: "Tire Pressure Warning" }
    ]
  },
  {
    pageSlug: "tire-pressure-warning-light",
    symbolSlug: "tire-pressure-warning",
    title: "Tire Pressure Warning Light Meaning: TPMS and Tyre Pressure",
    metaDescription: "Learn what the tire pressure warning light means, how TPMS works, whether you can drive, what to check first, and why the light may stay on.",
    eyebrow: "Tyre and tire warning",
    h1: "Tire Pressure Warning Light Meaning",
    summary: "The tire pressure warning light, also called TPMS or tyre pressure warning, means one or more tyres/tires may be underinflated or the pressure monitoring system needs attention.",
    colorText: "Amber or yellow",
    canDriveText: "Slowly, if not flat",
    urgency: "Check soon",
    sections: [
      { title: "What it means", body: "The tyre pressure symbol often looks like a horseshoe or flat tire shape with an exclamation mark. It means the tyre pressure monitoring system has detected low pressure or a sensor issue. Low pressure can reduce grip, increase wear, and cause overheating." },
      { title: "What to do first", ordered: true, items: ["Slow down and avoid sharp steering if the car pulls or feels unstable.", "Check all tyre/tire pressures, including the spare if your vehicle monitors it.", "Inflate to the pressure shown on the door placard or owner's manual, not the number printed on the tyre sidewall.", "Reset the TPMS only after correcting the pressure if your vehicle requires a reset."] },
      { title: "Common causes", items: ["One or more tyres/tires are underinflated", "Puncture, nail, or slow leak", "Cold weather pressure drop", "Recent tyre rotation or replacement", "Faulty TPMS sensor or weak sensor battery"] },
      { title: "When to stop driving", body: "Stop as soon as safe if the tyre looks flat, the car pulls strongly, steering vibrates, or you hear flapping or thumping. Driving on a flat tyre can damage the wheel and make the car harder to control." }
    ],
    faqs: [
      { question: "Why did the TPMS light come on after cold weather?", answer: "Tyre pressure drops as temperature falls. Inflate to the recommended pressure when the tyres are cold." },
      { question: "Why is the light still on after inflating?", answer: "Some cars need a TPMS reset or a short drive. If it stays on, a sensor or leak may need inspection." }
    ],
    related: [
      { href: "/symbols/brake-warning-light/", label: "Brake Warning Light" },
      { href: "/symbols/check-engine-light/", label: "Check Engine Light" }
    ]
  },
  {
    pageSlug: "abs-warning-light",
    symbolSlug: "abs-warning-light",
    title: "ABS Warning Light Meaning: Can You Still Brake?",
    metaDescription:
      "Learn what the ABS warning light means, how it differs from the brake warning light, whether you can keep driving, and what to check first.",
    eyebrow: "Brake system warning",
    h1: "ABS Warning Light Meaning",
    summary:
      "The ABS warning light means the anti-lock braking system may not work. Normal braking often remains, but emergency stops on slippery roads may be less controlled.",
    colorText: "Amber or yellow",
    canDriveText: "Yes, with caution",
    urgency: "Inspect soon",
    sections: [
      {
        title: "What it means",
        body: "ABS helps prevent wheel lock-up during hard braking. When the ABS light is on, the system may be disabled, but your regular brakes usually still work. The symbol often shows the letters ABS inside a circle."
      },
      {
        title: "What to do first",
        ordered: true,
        items: [
          "Check whether the red brake warning light is also on — that is more urgent.",
          "Test braking gently in a safe place if you are unsure how the pedal feels.",
          "Avoid hard emergency stops if you can; increase following distance.",
          "Have the ABS system scanned for fault codes."
        ]
      },
      {
        title: "Common causes",
        items: [
          "Faulty wheel speed sensor",
          "ABS module or wiring fault",
          "Low brake fluid on some vehicles",
          "Blown fuse or control unit issue",
          "Recent battery disconnect or voltage problem"
        ]
      },
      {
        title: "ABS vs brake warning light",
        body: "ABS alone usually means anti-lock assist may be unavailable. A red brake warning can mean low fluid, parking brake, or a hydraulic fault. If both lights are on, inspect the brake system before continuing."
      }
    ],
    faqs: [
      {
        question: "Can I drive without ABS?",
        answer: "Often yes if normal braking feels fine, but stopping distances on wet or icy roads may increase. Drive cautiously and repair the system soon."
      },
      {
        question: "Will ABS turn off after I restart the car?",
        answer: "Sometimes a temporary fault clears, but if the light returns, the system should be diagnosed."
      }
    ],
    related: [
      { href: "/symbols/brake-warning-light/", label: "Brake Warning Light" },
      { href: "/symbols/tire-pressure-warning-light/", label: "Tire Pressure Warning" },
      { href: "/scenarios/two-warning-lights/", label: "Two lights together" }
    ]
  },
  {
    pageSlug: "coolant-temperature-warning-light",
    symbolSlug: "coolant-temperature-warning",
    title: "Coolant Temperature Warning Light: Overheating Guide",
    metaDescription:
      "Learn what the coolant temperature warning light means, whether you can keep driving, what to check first, and how to avoid engine damage from overheating.",
    eyebrow: "Red engine warning",
    h1: "Coolant Temperature Warning Light Meaning",
    summary:
      "The coolant temperature warning light means the engine may be overheating. Stop safely, let the engine cool, and check coolant level only when it is safe to do so.",
    colorText: "Red",
    canDriveText: "No. Stop safely.",
    urgency: "High",
    sections: [
      {
        title: "What it means",
        body: "This warning usually shows a thermometer in liquid or a red temperature symbol. It means the engine coolant temperature is higher than normal, which can lead to serious engine damage if ignored."
      },
      {
        title: "What to do first",
        ordered: true,
        items: [
          "Pull over safely and turn off the engine.",
          "Wait at least 15–30 minutes before opening the coolant cap — hot coolant can spray and burn.",
          "Check for steam, sweet smell, or visible leaks under the car.",
          "Check coolant level only when the system is cool, if you know how to do so safely."
        ]
      },
      {
        title: "Common causes",
        items: [
          "Low coolant level or leak",
          "Faulty thermostat",
          "Cooling fan not running",
          "Blocked radiator or airflow issue",
          "Water pump failure"
        ]
      },
      {
        title: "When it is most serious",
        body: "Stop immediately if you see steam from under the hood/bonnet, smell coolant, hear boiling, or lose power. Driving an overheating engine can warp the cylinder head or cause costly damage."
      }
    ],
    faqs: [
      {
        question: "Can I add water if coolant is low?",
        answer: "Only when the engine is cool and you use the correct coolant mix recommended in your manual. Plain water is a temporary emergency measure on some vehicles, not a long-term fix."
      },
      {
        question: "Why did the light come on in traffic?",
        answer: "Low airflow at idle, a weak fan, low coolant, or a stuck thermostat can trigger overheating in stop-and-go driving."
      }
    ],
    related: [
      { href: "/symbols/oil-pressure-warning-light/", label: "Oil Pressure Warning" },
      { href: "/symbols/check-engine-light/", label: "Check Engine Light" },
      { href: "/scenarios/red-dashboard-lights/", label: "Red dashboard lights guide" }
    ]
  },
  {
    pageSlug: "airbag-warning-light",
    symbolSlug: "airbag-warning-light",
    title: "Airbag Warning Light Meaning: SRS and Safety System Fault",
    metaDescription:
      "Learn what the airbag or SRS warning light means, whether you can drive, common causes, and why restraint system faults should be inspected soon.",
    eyebrow: "Safety warning",
    h1: "Airbag Warning Light Meaning",
    summary:
      "The airbag warning light means the supplemental restraint system may not deploy correctly in a crash. The car may still drive, but passenger protection could be reduced.",
    colorText: "Amber or yellow",
    canDriveText: "Usually yes",
    urgency: "Inspect soon",
    sections: [
      {
        title: "What it means",
        body: "The airbag or SRS light indicates a fault in the airbag, seatbelt pretensioner, crash sensor, or control module. The symbol may show a seated person with an airbag or the words AIR BAG / SRS."
      },
      {
        title: "What to do first",
        ordered: true,
        items: [
          "Check whether the light stays on after startup — it should normally go out briefly during self-check.",
          "Make sure nothing is blocking the seat or seatbelt buckle.",
          "Avoid placing heavy items on passenger seats that can confuse seat sensors.",
          "Book a diagnostic check for the restraint system."
        ]
      },
      {
        title: "Common causes",
        items: [
          "Seat occupancy sensor fault",
          "Loose wiring under seats after seat movement",
          "Clock spring or steering wheel module issue",
          "Previous accident repair or disconnected connector",
          "Control module fault"
        ]
      },
      {
        title: "Why you should not ignore it",
        body: "Unlike an engine maintenance light, an airbag fault affects crash protection. The vehicle may still be drivable, but airbags or pretensioners may not work as designed until the fault is repaired."
      }
    ],
    faqs: [
      {
        question: "Is it safe to drive with the airbag light on?",
        answer: "The car may drive normally, but crash protection may be reduced. Have the SRS system inspected as soon as practical."
      },
      {
        question: "Can a weak car battery cause the airbag light?",
        answer: "Low voltage during startup can sometimes trigger warning lights temporarily. If the SRS light stays on, the system still needs diagnosis."
      }
    ],
    related: [
      { href: "/symbols/battery-warning-light/", label: "Battery Warning Light" },
      { href: "/symbols/brake-warning-light/", label: "Brake Warning Light" },
      { href: "/scenarios/red-dashboard-lights/", label: "Red dashboard lights guide" }
    ]
  },
  {
    pageSlug: "low-fuel-warning-light",
    symbolSlug: "low-fuel-warning",
    title: "Low Fuel Warning Light Meaning: How Far Can You Drive?",
    metaDescription:
      "Learn what the low fuel warning light means, how much range may be left, whether it is safe to keep driving, and what to do before the tank runs dry.",
    eyebrow: "Fuel warning",
    h1: "Low Fuel Warning Light Meaning",
    summary:
      "The low fuel warning light means the fuel level is low. Refuel soon — running a tank dry can leave you stranded and, on some vehicles, make restarting harder after refueling.",
    colorText: "Amber or yellow",
    canDriveText: "Yes, refuel soon",
    urgency: "Low to medium",
    sections: [
      {
        title: "What it means",
        body: "The low fuel symbol usually looks like a fuel pump. It appears before the tank is completely empty, giving you time to reach a station. Remaining range varies widely by vehicle and driving style."
      },
      {
        title: "What to do first",
        ordered: true,
        items: [
          "Note the estimated range if your dashboard shows it.",
          "Refuel at the next safe opportunity — do not rely on the last few miles.",
          "On diesel vehicles, running very low can increase the risk of drawing air or sediment into the fuel system.",
          "Reset your trip computer after refueling if you track fuel use."
        ]
      },
      {
        title: "Common causes",
        items: [
          "Fuel level genuinely low",
          "Faulty fuel level sender",
          "Instrument cluster glitch",
          "Recent steep hill or sharp turn affecting sender reading"
        ]
      },
      {
        title: "How far can you go?",
        body: "Some cars have 30–50 miles of reserve after the light appears, but this is not guaranteed. Highway driving, cold weather, and heavy loads use more fuel. Treat the light as a prompt to refuel, not a precise countdown."
      }
    ],
    faqs: [
      {
        question: "Is it bad to run the tank to empty?",
        answer: "It can leave you stranded and may pull debris or air into the fuel system on some vehicles. Refuel before the tank is empty when possible."
      },
      {
        question: "Why does the fuel light flicker on hills?",
        answer: "Fuel slosh can briefly trigger the sender. If the light stays on level ground, the tank is likely genuinely low."
      }
    ],
    related: [
      { href: "/symbols/check-engine-light/", label: "Check Engine Light" },
      { href: "/symbols/tire-pressure-warning-light/", label: "Tire Pressure Warning" },
      { href: "/scenarios/red-dashboard-lights/", label: "Red dashboard lights guide" }
    ]
  }
];

export function getGuide(pageSlug: string) {
  return guides.find((guide) => guide.pageSlug === pageSlug);
}

export function getGuideSymbol(guide: SymbolGuide) {
  return symbols.find((symbol) => symbol.slug === guide.symbolSlug);
}
