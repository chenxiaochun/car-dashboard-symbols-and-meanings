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
    title: "Oil Pressure Warning Light Meaning: Stop or Keep Driving?",
    metaDescription: "Learn what the red oil pressure warning light means, why it is urgent, what to check first, common causes, and when to stop driving.",
    eyebrow: "Red engine warning",
    h1: "Oil Pressure Warning Light Meaning",
    summary: "The oil pressure warning light means engine oil pressure may be too low. This is one of the most urgent dashboard warnings because low oil pressure can damage the engine quickly.",
    colorText: "Red",
    canDriveText: "No. Stop safely.",
    urgency: "High",
    sections: [
      { title: "What it means", body: "The oil pressure light usually shows an oil can symbol. It does not simply mean an oil change is due. It warns that oil pressure may be too low to protect moving engine parts." },
      { title: "What to do first", ordered: true, items: ["Pull over safely and turn off the engine.", "Wait a few minutes, then check the oil level if your vehicle has a dipstick.", "Look for obvious oil leaks under the car.", "Do not keep driving if the light remains on after topping up with the correct oil."] },
      { title: "Common causes", items: ["Low engine oil level", "Oil leak or severe oil consumption", "Faulty oil pressure sensor", "Blocked oil pickup or filter", "Oil pump or internal engine problem"] },
      { title: "When it is most serious", body: "Stop immediately if the oil light appears with engine knocking, ticking, burning smell, smoke, or loss of power. Continuing to drive can turn a small leak or low oil level into major engine damage." }
    ],
    faqs: [
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
  }
];

export function getGuide(pageSlug: string) {
  return guides.find((guide) => guide.pageSlug === pageSlug);
}

export function getGuideSymbol(guide: SymbolGuide) {
  return symbols.find((symbol) => symbol.slug === guide.symbolSlug);
}
