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
    title: "Check Engine Light Meaning — Flashing vs Steady, Codes, and How Far to Drive",
    metaDescription:
      "Check engine light meaning: steady vs flashing MIL, common P-codes (P0300, P0420, P0171), how far you can drive if the car feels normal, and what to do when traction control comes on too.",
    eyebrow: "Engine warning",
    h1: "Check Engine Light Meaning",
    summary:
      "The check engine light — also called the engine management light, MIL, or malfunction indicator lamp — means the engine or emissions system stored a fault. A steady amber or yellow light is usually less urgent than a flashing one, but you should scan codes and repair soon rather than ignore it for weeks.",
    colorText: "Amber or yellow",
    canDriveText: "Usually, if steady and normal",
    urgency: "Inspect soon",
    sections: [
      {
        title: "What it means",
        body:
          "The check engine light is an amber or yellow engine-outline symbol on most dashboards. It turns on when the powertrain control module detects a problem in fuel, ignition, emissions, or related sensors. The car may still drive normally — the light is a warning that something failed a self-test or is out of range, not always an immediate breakdown. A stored OBD-II diagnostic trouble code (DTC) usually points to the system that triggered it."
      },
      {
        title: "Flashing vs steady check engine light",
        body:
          "A steady check engine light means a fault is stored. It could be minor (loose fuel cap, EVAP leak) or serious (catalyst damage, ongoing misfire history) — you cannot tell from the light alone. A flashing check engine light is more urgent on most gasoline cars: it often indicates an active misfire dumping unburned fuel into the exhaust, which can overheat the catalytic converter within minutes. Ease off the throttle, avoid hard acceleration, and get scanned the same day if the light flashes. Diesel vehicles sometimes use a flashing MIL for different faults; check your owner's manual if you drive a diesel."
      },
      {
        title: "How far can you drive with the check engine light on?",
        body:
          "There is no fixed mileage. If the light is steady and the car runs smoothly with no shaking, overheating, fuel smell, or power loss, many drivers reach a shop or parts store within a few days or roughly 50–100 miles — but repair should not wait weeks. A flashing light, repeated stalling, or any red warning (oil, temperature, brake) means stop driving as soon as safe and arrange a scan or tow. Continuing cross-country or ignoring a steady light for months can waste fuel, fail emissions tests, and turn a small sensor fault into an expensive catalytic converter replacement."
      },
      {
        title: "What to do first",
        ordered: true,
        items: [
          "Note whether the light is steady or flashing, and whether traction control or another warning appeared at the same time.",
          "Tighten the fuel cap until it clicks (if your car has one), then drive 3–10 normal trips to see if the light clears.",
          "Avoid hard acceleration, towing, and high RPM until you know the code.",
          "Read OBD-II codes — many AutoZone and O'Reilly stores in the US scan free; a basic reader costs about $20–$40.",
          "Write down every P-code and search it with your make, model, and year before replacing parts."
        ]
      },
      {
        title: "Common OBD-II codes (starting points, not a diagnosis)",
        body:
          "Codes tell you which system failed a test, not always which part to replace. These appear frequently on gasoline cars:",
        items: [
          "P0300 — random/multiple cylinder misfire (flashing MIL often relates to active misfire)",
          "P0301–P0306 — misfire on a specific cylinder (coil, plug, injector, compression on that cylinder)",
          "P0420 / P0430 — catalytic converter efficiency below threshold (often follows long-term misfire or oil consumption)",
          "P0171 / P0174 — system too lean (vacuum leak, MAF fault, fuel delivery, or unmetered air)",
          "P0442 / P0455 / P0456 — evaporative emissions leak (fuel cap, purge valve, or small hose leak)",
          "P0130–P0161 — oxygen sensor heater or circuit faults (sensor, wiring, or exhaust leak upstream)"
        ]
      },
      {
        title: "Common causes",
        items: [
          "Loose, missing, or cracked fuel cap",
          "Ignition coil, spark plug, or injector misfire",
          "Oxygen sensor or air-fuel ratio sensor fault",
          "Mass airflow (MAF) sensor dirty or failed",
          "EVAP purge valve or leak in the fuel vapor system",
          "Catalytic converter efficiency problem after long-term faults",
          "Aftermarket parts or recent battery disconnect (temporary codes until cleared)"
        ]
      },
      {
        title: "Check engine and traction control light together",
        body:
          "When the check engine light and traction control (or stability) light come on at the same time, the engine fault often disabled traction aids — not two unrelated failures. Scan engine codes first. Fixing a misfire, sensor, or emissions problem frequently clears the traction light without a separate repair. If both lights appeared right after a weak crank or battery work, also check charging voltage and ground connections before replacing stability modules."
      },
      {
        title: "When to stop driving",
        body:
          "Stop or tow if the check engine light is flashing, the car shakes or loses power, you smell raw fuel, coolant temperature rises, oil pressure warning appears, or the exhaust smells strongly of sulfur. A steady light alone rarely means pull over immediately — but it does mean scan and schedule repair, not months of delay."
      }
    ],
    faqs: [
      {
        question: "Is a flashing check engine light worse than a solid one?",
        answer:
          "Yes on most gasoline cars. Flashing usually means an active misfire that can damage the catalytic converter quickly. A solid light still needs a scan, but you typically have more time to reach a shop if the car drives normally."
      },
      {
        question: "How far can I drive with a steady check engine light?",
        answer:
          "If the car feels normal, many people drive to a scanner or shop within a few days or about 50–100 miles. There is no manufacturer-approved mileage limit — avoid highway trips, towing, and weeks of delay. Flashing, shaking, or smell of fuel means stop sooner."
      },
      {
        question: "Is a steady check engine light safe?",
        answer:
          "Often yes for a short period if driving feels normal, but the fault can waste fuel, increase emissions, and stress the catalytic converter over time. Scan codes and repair within days, not months."
      },
      {
        question: "Can a loose fuel cap cause the check engine light?",
        answer:
          "Yes. A loose or damaged cap can set EVAP leak codes (such as P0442 or P0455). Tighten the cap, then allow several drive cycles — sometimes 50–100 miles — for the light to clear on its own."
      },
      {
        question: "Why did check engine and traction control come on together?",
        answer:
          "Engine or transmission faults often disable traction and stability control until the problem is fixed. Scan the check engine codes first; resolving the powertrain fault usually clears the traction light."
      },
      {
        question: "Will the check engine light clear itself?",
        answer:
          "Sometimes, if the fault was temporary (for example a loose cap that was tightened). If the underlying problem remains, the light returns after the computer runs the same test again — usually within a few drive cycles."
      },
      {
        question: "Where can I get check engine codes read for free?",
        answer:
          "In the US, AutoZone and O'Reilly Auto Parts commonly offer free OBD-II scans in store. Write down the exact P-code; it is a starting point for diagnosis, not a parts list."
      }
    ],
    related: [
      { href: "/scenarios/flashing-check-engine/", label: "Flashing check engine light" },
      { href: "/symbols/traction-control-light/", label: "Traction Control Light" },
      { href: "/symbols/oil-pressure-warning-light/", label: "Oil Pressure Warning" },
      { href: "/scenarios/two-warning-lights/", label: "Two lights together" }
    ]
  },
  {
    pageSlug: "oil-pressure-warning-light",
    symbolSlug: "oil-pressure-warning",
    title: "Oil Pressure Light Meaning — Red Oil Can Dashboard Warning",
    metaDescription:
      "Oil pressure light meaning: a red oil-can dash light that warns engine oil pressure may be too low. Learn what the oil sign in your car means, how it differs from an oil leak indicator, and when to stop driving.",
    eyebrow: "Red engine warning",
    h1: "Oil Pressure Light Meaning",
    summary:
      "The oil pressure warning light — also called the oil pressure indicator light — is red on most vehicles and shows an oil-can or genie-lamp symbol on the dashboard. It means engine oil pressure may be too low, not simply that an oil change is due, and low pressure can damage the engine within minutes.",
    colorText: "Red",
    canDriveText: "No. Stop safely.",
    urgency: "High",
    sections: [
      {
        title: "What it means",
        body:
          "The oil pressure light — often called the oil sign in a car, the oil can dashboard light, or the oil can dash light — usually shows a red oil-can or dripping-oil icon. It warns that oil pressure may be too low to protect moving engine parts. It is not the same as a yellow low-oil-level reminder on some VW/Audi models, and it is not the same as a transmission oil pressure warning on automatic vehicles."
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
        question: "What does the oil pressure light mean?",
        answer:
          "It means engine oil pressure may be too low to lubricate moving parts safely. On most dashboards the symbol is a red oil can or dripping-oil icon. Pull over, turn off the engine, and check the oil level — do not keep driving if the light stays on."
      },
      {
        question: "What is the oil can light on the dashboard?",
        answer:
          "The oil can dashboard light — sometimes called the oil can dash light — is usually the engine oil pressure warning. It looks like a small oil can or genie lamp, often red. When it comes on while driving, stop safely and check oil level before continuing."
      },
      {
        question: "Is the oil leak sign on the dashboard the same as the oil pressure light?",
        answer:
          "Not always. A red oil-can symbol while driving is usually the oil pressure warning, which can appear because of a leak, low oil level, or a sensor fault. Some cars use a separate low-oil-level reminder (often yellow) that is not the same as red oil pressure. If you see oil under the car or the red oil-can light stays on, treat it as urgent and stop driving."
      },
      {
        question: "Is the oil gauge on the dashboard the same as the oil pressure light?",
        answer:
          "Not on most cars. An oil gauge (needle or bar showing pressure or level while driving) is a live reading; the red oil-can warning light is a separate alert that oil pressure may be too low. Some dashboards show both — a gauge you watch normally and a red oil-can symbol that means stop now. If you searched for car oil light meaning or an oil pressure gauge symbol, check whether you see a steady red icon (warning light) or a moving gauge needle; the warning light is the urgent one."
      },
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
    pageSlug: "traction-control-light",
    symbolSlug: "traction-control-light",
    title: "Traction Control Light Meaning — Car With Squiggly Lines Symbol",
    metaDescription:
      "The traction control light often shows a car with squiggly or wavy lines underneath. Learn what the TC / skid light means when it flashes vs stays on, and what to check first.",
    eyebrow: "Stability system warning",
    h1: "Traction Control Light Meaning",
    summary:
      "The traction control light — sometimes called the TC light or skid light — usually shows a car with squiggly or wavy lines under the tires. A flashing icon often means the system is actively limiting wheel spin; a steady amber light usually means traction control is off or has a fault.",
    colorText: "Amber or yellow",
    canDriveText: "Yes, with caution",
    urgency: "Inspect if steady",
    sections: [
      {
        title: "What it means",
        body:
          "Traction control (TC or TCS) reduces wheel spin when you accelerate on slippery surfaces. The dashboard symbol is often a small car outline with squiggly or wavy lines beneath it — drivers search for it as the car with squiggly lines light or slippery-road symbol. When the light flashes briefly, the system is usually working. When it stays on steady, traction control may be switched off or a fault may be stored."
      },
      {
        title: "Flashing vs steady traction control light",
        body:
          "A flashing traction control light during hard acceleration on wet, icy, or loose gravel usually means the system is cutting power to regain grip — that is normal. A steady amber light at startup that does not turn off often means TC is disabled (button pressed) or the stability system detected a fault. If the same drive also triggers the check engine light, scan engine codes first; an engine misfire or sensor fault can disable traction control on many vehicles."
      },
      {
        title: "What to do first",
        ordered: true,
        items: [
          "Check whether you pressed the TC or ESC off button — some cars show a steady light when traction control is intentionally disabled.",
          "If the light flashed only on slippery pavement, ease off the throttle; no repair is needed if it clears.",
          "If the light stays on, note whether the check engine, ABS, or battery light is also on.",
          "Scan for fault codes if the steady light returns every drive — wheel speed sensors and steering-angle sensors are common causes."
        ]
      },
      {
        title: "Common causes of a steady light",
        items: [
          "Traction or stability control switched off manually",
          "Faulty wheel speed sensor",
          "Steering angle or yaw sensor fault",
          "Engine misfire or emissions fault disabling stability aids",
          "Low battery voltage after a weak alternator or recent jump-start",
          "Blown fuse or control module communication fault"
        ]
      },
      {
        title: "Traction control vs stability control (ESC/ESP)",
        body:
          "Traction control limits drive-wheel spin during acceleration. Electronic stability control (ESC, ESP, or DSC on some brands) also helps correct skids by braking individual wheels. Many dashboards use similar car-with-lines icons; your owner's manual label may say TC, TCS, ESC, or ESP. A steady warning usually means the broader stability system needs attention, not just tire pressure or brakes alone."
      }
    ],
    faqs: [
      {
        question: "What is the car with squiggly lines on the dashboard?",
        answer:
          "It is usually the traction control or stability control warning. The wavy or squiggly lines under a car outline mean the system is active, off, or has a fault related to wheel slip. Flashing on a wet road is often normal; steady amber after startup deserves a scan or button check."
      },
      {
        question: "Why is my traction control light on?",
        answer:
          "Most often the system was turned off, or a wheel speed sensor, steering sensor, or engine fault stored a code. Check the TC/ESC button first, then scan codes if the light stays on every trip."
      },
      {
        question: "Is it safe to drive with the traction control light on?",
        answer:
          "Usually yes if the car drives normally and no red warnings are on — but grip on wet or icy roads may be reduced if TC is disabled. Avoid hard acceleration and increase following distance until the system is checked."
      },
      {
        question: "Why did traction control and check engine light come on together?",
        answer:
          "An engine or transmission fault can disable traction control while the powertrain is in limp mode. Scan the check engine codes first; fixing the underlying engine fault often clears the TC light without a separate repair."
      },
      {
        question: "Does traction control affect the ABS light?",
        answer:
          "They share wheel speed sensors on many cars. A bad sensor can trigger ABS and traction warnings together, sometimes with a battery or steering light after low voltage. See our guide on two warning lights together if multiple icons are on."
      }
    ],
    related: [
      { href: "/symbols/abs-warning-light/", label: "ABS Warning Light" },
      { href: "/symbols/check-engine-light/", label: "Check Engine Light" },
      { href: "/symbols/battery-warning-light/", label: "Battery Warning Light" },
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
