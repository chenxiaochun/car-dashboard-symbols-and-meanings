export type ShapeFilterId =
  | "all"
  | "exclamation"
  | "engine"
  | "oil"
  | "battery"
  | "brake-circle"
  | "tire-horseshoe"
  | "squiggly-car"
  | "person-safety"
  | "door-car"
  | "fuel"
  | "temperature"
  | "light-beam"
  | "arrow"
  | "triangle"
  | "steering"
  | "wrench"
  | "letters"
  | "washer";

export const shapeFilters: { id: ShapeFilterId; label: string; terms: string[] }[] = [
  { id: "all", label: "All shapes", terms: [] },
  { id: "exclamation", label: "!", terms: ["exclamation", "!", "mark inside circle", "inside circle"] },
  { id: "engine", label: "Engine outline", terms: ["engine outline", "engine block", "check engine shape"] },
  { id: "oil", label: "Oil can", terms: ["oil can", "oil drop", "drip", "genie lamp", "teapot"] },
  { id: "battery", label: "Battery", terms: ["battery", "plus minus", "+ -", "charging"] },
  { id: "brake-circle", label: "Circle (brake)", terms: ["circle brake", "brake in circle", "abs circle", "parking brake"] },
  { id: "tire-horseshoe", label: "Horseshoe", terms: ["horseshoe", "u shape", "parenthesis", "tyre shape", "tire shape"] },
  { id: "squiggly-car", label: "Squiggly car", terms: ["squiggly", "wavy lines", "slip", "skid", "car with lines"] },
  { id: "person-safety", label: "Person / airbag", terms: ["person", "airbag", "seatbelt", "belted person"] },
  { id: "door-car", label: "Car / door", terms: ["door open", "car top view", "hood", "bonnet", "trunk", "boot"] },
  { id: "fuel", label: "Fuel pump", terms: ["fuel pump", "gas pump", "petrol pump"] },
  { id: "temperature", label: "Thermometer", terms: ["thermometer", "temperature", "waves under"] },
  { id: "light-beam", label: "Headlight beam", terms: ["headlight", "beam", "dipped", "fog lamp"] },
  { id: "arrow", label: "Arrow", terms: ["arrow", "turn", "blinker", "indicator arrow"] },
  { id: "triangle", label: "Triangle", terms: ["triangle", "hazard", "warning triangle"] },
  { id: "steering", label: "Steering wheel", terms: ["steering wheel", "wheel icon"] },
  { id: "wrench", label: "Wrench", terms: ["wrench", "spanner", "tool", "service"] },
  { id: "letters", label: "Letters (ABS…)", terms: ["letters", "text", "abs", "awd", "def", "off"] },
  { id: "washer", label: "Washer spray", terms: ["washer", "windshield spray", "windscreen spray"] }
];

/** What the symbol often looks like on a real dashboard (for matching, not our illustration). */
export const symbolShapeHints: Record<string, string> = {
  "check-engine-light": "Engine block or “CHECK” / engine outline (varies by brand)",
  "oil-pressure-warning": "Red oil can or oil drop / drip",
  "battery-warning-light": "Battery box with + and −",
  "brake-warning-light": "Circle with “!” or “BRAKE”, sometimes “P” for parking brake",
  "abs-warning-light": "Circle with letters “ABS”",
  "tire-pressure-warning": "Horseshoe or flat tire with exclamation mark",
  "airbag-warning-light": "Seated person with airbag / “SRS” / “AIR BAG”",
  "traction-control-light": "Car with wavy or squiggly lines under tires",
  "stability-control-off": "Car with squiggly lines and “OFF”",
  "coolant-temperature-warning": "Thermometer in liquid or red temperature symbol",
  "low-fuel-warning": "Fuel pump icon",
  "seat-belt-reminder": "Person with seat belt (often red, flashing)",
  "door-open-warning": "Car with open door outline",
  "hood-open-warning": "Car with open hood / bonnet",
  "trunk-open-warning": "Car with open boot / trunk",
  "washer-fluid-low": "Windshield with spray lines",
  "high-beam-light": "Blue headlamp with straight lines (main beam)",
  "fog-light-indicator": "Headlamp with wavy or slanted lines",
  "rear-fog-light": "Lamp pointing left with horizontal lines",
  "turn-signal-indicator": "Green arrow left or right (flashing)",
  "hazard-warning-lights": "Red triangle with “!” inside",
  "parking-brake-light": "Circle with “P” or brake symbol",
  "brake-fluid-low": "Circle with “!” (brake system)",
  "power-steering-warning": "Steering wheel with exclamation mark",
  "engine-start-stop": "Circular arrow with “A” (auto stop)",
  "glow-plug-light": "Coil / spiral (diesel preheat)",
  "dpf-warning-light": "Exhaust box with dots or filter pattern",
  "catalytic-converter-warning": "Exhaust / catalyst symbol",
  "transmission-warning": "Gearbox or temperature in gear icon",
  "low-transmission-fluid": "Gear icon with thermometer or level waves",
  "clutch-warning": "Pedal or clutch disc in circle",
  "awd-warning": "Letters “AWD” or “4WD”",
  "hill-descent-control": "Car on slope with arrow down",
  "lane-departure-warning": "Car between lane lines",
  "adaptive-cruise-warning": "Car with radar waves ahead",
  "forward-collision-warning": "Car with car ahead or collision icon",
  "blind-spot-warning": "Car with radar to the side",
  "parking-sensor-warning": "Car with “P” and sound waves",
  "rear-camera-warning": "Camera or rectangle rear view",
  "key-fob-battery-low": "Key symbol with low battery",
  "immobilizer-warning": "Key or padlock in car",
  "service-due-light": "Wrench or spanner",
  "oil-level-low": "Oil can with level lines (not always red)",
  "adblue-low": "“DEF” / “AdBlue” text or fluid tank",
  "ev-battery-low": "HV battery outline (often amber)",
  "ev-system-warning": "Triangle with “!” or EV system text",
  "charge-port-open": "Plug or charge port door open",
  "regen-braking-limited": "Circular arrows with “RE” or regen text",
  "low-beam-light": "Green headlamp with downward lines",
  "cruise-control-indicator": "Gauge or speedometer with arrow"
};

export const symbolShapeTags: Record<string, ShapeFilterId[]> = {
  "check-engine-light": ["engine", "letters"],
  "oil-pressure-warning": ["oil", "exclamation"],
  "battery-warning-light": ["battery"],
  "brake-warning-light": ["brake-circle", "exclamation"],
  "abs-warning-light": ["brake-circle", "letters"],
  "tire-pressure-warning": ["tire-horseshoe", "exclamation"],
  "airbag-warning-light": ["person-safety", "letters"],
  "traction-control-light": ["squiggly-car"],
  "stability-control-off": ["squiggly-car", "letters"],
  "coolant-temperature-warning": ["temperature"],
  "low-fuel-warning": ["fuel"],
  "seat-belt-reminder": ["person-safety"],
  "door-open-warning": ["door-car"],
  "hood-open-warning": ["door-car"],
  "trunk-open-warning": ["door-car"],
  "washer-fluid-low": ["washer"],
  "high-beam-light": ["light-beam"],
  "fog-light-indicator": ["light-beam"],
  "rear-fog-light": ["light-beam"],
  "turn-signal-indicator": ["arrow"],
  "hazard-warning-lights": ["triangle", "exclamation"],
  "parking-brake-light": ["brake-circle", "letters"],
  "brake-fluid-low": ["brake-circle", "exclamation"],
  "power-steering-warning": ["steering", "exclamation"],
  "engine-start-stop": ["letters", "engine"],
  "glow-plug-light": ["engine"],
  "dpf-warning-light": ["engine", "letters"],
  "catalytic-converter-warning": ["engine"],
  "transmission-warning": ["letters"],
  "low-transmission-fluid": ["temperature", "letters"],
  "clutch-warning": ["brake-circle"],
  "awd-warning": ["letters"],
  "hill-descent-control": ["squiggly-car", "arrow"],
  "lane-departure-warning": ["squiggly-car"],
  "adaptive-cruise-warning": ["squiggly-car"],
  "forward-collision-warning": ["squiggly-car", "exclamation"],
  "blind-spot-warning": ["squiggly-car"],
  "parking-sensor-warning": ["letters", "squiggly-car"],
  "rear-camera-warning": ["letters"],
  "key-fob-battery-low": ["battery", "letters"],
  "immobilizer-warning": ["letters"],
  "service-due-light": ["wrench"],
  "oil-level-low": ["oil"],
  "adblue-low": ["letters", "fuel"],
  "ev-battery-low": ["battery"],
  "ev-system-warning": ["triangle", "battery"],
  "charge-port-open": ["battery"],
  "regen-braking-limited": ["letters", "battery"],
  "low-beam-light": ["light-beam"],
  "cruise-control-indicator": ["light-beam", "letters"]
};

export function getShapeSearchText(slug: string): string {
  const tags = symbolShapeTags[slug] ?? [];
  const hint = symbolShapeHints[slug] ?? "";
  const terms = tags.flatMap((id) => shapeFilters.find((f) => f.id === id)?.terms ?? []);
  return [hint, ...terms].join(" ").toLowerCase();
}
