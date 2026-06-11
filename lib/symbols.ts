export type SymbolColor = "red" | "amber" | "green" | "blue";

export type DashboardSymbol = {
  slug: string;
  name: string;
  system: string;
  color: SymbolColor;
  meaning: string;
  canDrive: string;
  action: string;
  aliases: string[];
};

const rows: Array<[string, string, string, SymbolColor, string, string, string, string[]]> = [
  ["check-engine-light", "Check Engine Light", "Engine", "amber", "Engine or emissions fault detected.", "Usually yes, but inspect soon.", "Scan for diagnostic trouble codes and avoid hard acceleration.", ["engine management light", "MIL", "malfunction indicator lamp", "yellow engine", "engine outline", "flashing check engine light", "solid check engine light", "check engine light meaning", "how far drive check engine light", "P0300", "P0420"]],
  ["oil-pressure-warning", "Oil Pressure Warning", "Engine", "red", "Oil pressure may be too low.", "No. Stop safely.", "Turn off the engine and check oil level before driving again.", ["red oil can", "oil light", "oil drip", "genie lamp", "red teapot", "oil sign in car", "oil pressure light", "oil pressure warning light", "oil pressure indicator light", "oil pressure light meaning", "oil can dashboard light", "oil can dash light", "oil leak sign on dashboard", "oil pressure gauge symbol", "oil gauge on dashboard", "car oil light meaning", "symbols dashboard oil light on car", "engine oil pressure warning light"]],
  ["battery-warning-light", "Battery Warning Light", "Electrical", "red", "Charging system is not keeping the battery powered.", "Short distance only if necessary.", "Switch off nonessential electrics and get the alternator/battery checked.", ["charging light", "battery symbol", "plus minus", "red battery"]],
  ["brake-warning-light", "Brake Warning Light", "Brake", "red", "Parking brake may be on or brake system has a fault.", "Only after confirming braking feels normal.", "Check parking brake and brake fluid. Stop if pedal feels soft.", ["brake light", "red brake symbol", "circle exclamation brake", "brake in circle"]],
  ["abs-warning-light", "ABS Warning Light", "Brake", "amber", "Anti-lock braking system may not work.", "Yes, with caution.", "Normal braking may remain, but ABS needs diagnosis.", ["anti lock brake", "abs in circle"]],
  ["tire-pressure-warning", "Tire Pressure Warning", "Tires", "amber", "One or more tyres/tires may be underinflated.", "Usually yes, slowly.", "Check pressure and inflate to the placard value.", ["tyre pressure", "TPMS", "horseshoe exclamation", "u shape exclamation", "flat tire symbol"]],
  ["airbag-warning-light", "Airbag Warning Light", "Safety", "amber", "Airbag or seatbelt pretensioner system has a fault.", "Yes, but safety protection may be reduced.", "Have the restraint system inspected soon.", ["SRS light", "air bag"]],
  ["traction-control-light", "Traction Control Light", "Stability", "amber", "Traction control is active or has a fault.", "Yes, with caution.", "If flashing, reduce throttle. If steady, inspect the system.", ["car with squiggly lines", "squiggly lines under car", "traction control light", "TC light", "TCS light", "skid light", "slippery road", "wavy lines under car", "stability control light", "ESC light"]],
  ["stability-control-off", "Stability Control Off", "Stability", "amber", "Electronic stability control has been switched off.", "Yes, with extra caution.", "Turn the system back on unless stuck in mud, snow, or sand.", ["ESC off", "ESP off"]],
  ["coolant-temperature-warning", "Coolant Temperature Warning", "Engine", "red", "Engine coolant temperature is too high.", "No. Stop safely.", "Let the engine cool and check coolant level when safe.", ["temperature light", "overheating"]],
  ["low-fuel-warning", "Low Fuel Warning", "Fuel", "amber", "Fuel level is low.", "Yes.", "Refuel soon to avoid running the tank dry.", ["petrol light", "gas light"]],
  ["seat-belt-reminder", "Seat Belt Reminder", "Safety", "red", "A seat belt is not fastened.", "Fasten before driving.", "Buckle occupied seats and check objects on seats.", ["seatbelt light"]],
  ["door-open-warning", "Door Open Warning", "Body", "red", "A door is not fully closed.", "No, close it first.", "Stop and latch all doors securely.", ["car door light"]],
  ["hood-open-warning", "Hood / Bonnet Open", "Body", "red", "The hood or bonnet is not fully latched.", "No.", "Stop and latch it before driving.", ["bonnet open", "hood open"]],
  ["trunk-open-warning", "Boot / Trunk Open", "Body", "amber", "The boot or trunk is open.", "Only at low speed if unavoidable.", "Close it securely before driving.", ["boot open", "trunk light"]],
  ["washer-fluid-low", "Washer Fluid Low", "Visibility", "amber", "Windscreen/windshield washer fluid is low.", "Yes.", "Refill washer fluid.", ["windshield washer", "windscreen washer"]],
  ["high-beam-light", "High Beam Indicator", "Lights", "blue", "High beam headlights are on.", "Yes.", "Dip the beams for oncoming traffic.", ["main beam", "blue headlight"]],
  ["fog-light-indicator", "Fog Light Indicator", "Lights", "green", "Fog lights are switched on.", "Yes.", "Use only in poor visibility where legal.", ["front fog light"]],
  ["rear-fog-light", "Rear Fog Light", "Lights", "amber", "Rear fog light is switched on.", "Yes.", "Switch off when visibility improves.", ["rear fog lamp"]],
  ["turn-signal-indicator", "Turn Signal Indicator", "Lights", "green", "Indicator/turn signal is active.", "Yes.", "If flashing fast, check for a failed bulb.", ["indicator", "blinker"]],
  ["hazard-warning-lights", "Hazard Warning Lights", "Lights", "red", "Hazard lights are on.", "Yes, when warning others.", "Use for breakdowns or stationary hazards.", ["emergency flashers"]],
  ["parking-brake-light", "Parking Brake Light", "Brake", "red", "Parking brake is applied.", "No, release it first.", "Release the handbrake/parking brake and confirm light turns off.", ["handbrake light"]],
  ["brake-fluid-low", "Low Brake Fluid", "Brake", "red", "Brake fluid level may be low.", "No if braking feels abnormal.", "Check brake fluid and inspect for leaks.", ["brake reservoir"]],
  ["power-steering-warning", "Power Steering Warning", "Steering", "amber", "Power steering assistance may be reduced.", "Yes, carefully.", "Steering may feel heavy. Inspect fluid or electric steering system.", ["steering wheel exclamation", "wheel with exclamation"]],
  ["engine-start-stop", "Start-Stop System Warning", "Engine", "amber", "Automatic start-stop system is unavailable or faulty.", "Yes.", "Check battery condition and start-stop settings.", ["auto stop", "start stop"]],
  ["glow-plug-light", "Glow Plug Light", "Engine", "amber", "Diesel glow plugs are heating or have a fault.", "Wait before starting.", "If it stays on, inspect diesel preheat system.", ["diesel coil light"]],
  ["dpf-warning-light", "Diesel Particulate Filter", "Exhaust", "amber", "Diesel particulate filter may need regeneration.", "Yes, but address soon.", "Drive as manual recommends or get the DPF checked.", ["DPF light", "particulate filter"]],
  ["catalytic-converter-warning", "Catalytic Converter Warning", "Exhaust", "amber", "Exhaust after-treatment may be overheating or faulty.", "Avoid high load.", "Inspect engine misfire and exhaust system soon.", ["catalyst light"]],
  ["transmission-warning", "Transmission Warning", "Drivetrain", "amber", "Automatic gearbox/transmission fault detected.", "Drive gently if it shifts normally.", "Check transmission fluid and scan for codes.", ["gearbox light"]],
  ["low-transmission-fluid", "Low Transmission Fluid", "Drivetrain", "amber", "Transmission fluid level or temperature may be abnormal.", "Avoid long driving.", "Check fluid level where applicable and service the gearbox.", ["AT fluid"]],
  ["clutch-warning", "Clutch Warning", "Drivetrain", "amber", "Clutch system may be overheating or faulty.", "Pause if smell or slipping occurs.", "Let it cool and inspect clutch operation.", ["manual clutch light"]],
  ["awd-warning", "AWD / 4WD Warning", "Drivetrain", "amber", "All-wheel-drive or four-wheel-drive system fault.", "Yes on normal roads.", "Avoid rough terrain and inspect the drivetrain.", ["4x4 light", "four wheel drive"]],
  ["hill-descent-control", "Hill Descent Control", "Stability", "green", "Hill descent control is active.", "Yes.", "Use for controlled downhill driving.", ["downhill assist"]],
  ["lane-departure-warning", "Lane Departure Warning", "Driver Assist", "amber", "Lane warning system is unavailable or detecting lane drift.", "Yes.", "Check camera area and road markings.", ["lane assist"]],
  ["adaptive-cruise-warning", "Adaptive Cruise Warning", "Driver Assist", "amber", "Adaptive cruise control is unavailable or has a fault.", "Yes.", "Clean radar/camera sensors and inspect if persistent.", ["ACC warning"]],
  ["forward-collision-warning", "Forward Collision Warning", "Driver Assist", "red", "Possible collision ahead or system fault.", "Reduce speed immediately.", "Brake if needed and check sensors if warning remains.", ["AEB light", "collision alert"]],
  ["blind-spot-warning", "Blind Spot Warning", "Driver Assist", "amber", "Blind spot monitor is active or unavailable.", "Yes.", "Check mirrors manually and clean sensors.", ["BSM light"]],
  ["parking-sensor-warning", "Parking Sensor Warning", "Driver Assist", "amber", "Parking sensors may be blocked or faulty.", "Yes.", "Clean sensors and use mirrors/camera.", ["PDC light"]],
  ["rear-camera-warning", "Rear Camera Warning", "Driver Assist", "amber", "Reverse camera system may be unavailable.", "Yes.", "Use mirrors and inspect camera wiring or lens.", ["backup camera"]],
  ["key-fob-battery-low", "Key Fob Battery Low", "Security", "amber", "Remote key battery is weak.", "Yes.", "Replace the key fob battery soon.", ["smart key battery"]],
  ["immobilizer-warning", "Immobilizer Warning", "Security", "amber", "The vehicle may not recognize the key.", "Maybe not restart.", "Try another key or replace fob battery.", ["security light", "key symbol"]],
  ["service-due-light", "Service Due Light", "Maintenance", "amber", "Scheduled maintenance is due.", "Yes.", "Check service interval and reset after maintenance.", ["spanner light", "wrench light"]],
  ["oil-level-low", "Low Oil Level", "Maintenance", "amber", "Engine oil level may be low.", "Short distance only after checking.", "Check dipstick or oil level display and top up if needed.", ["oil level light"]],
  ["adblue-low", "AdBlue / DEF Low", "Exhaust", "amber", "Diesel exhaust fluid is low.", "Yes, but refill soon.", "Refill AdBlue/DEF before the no-start limit.", ["DEF light", "urea light"]],
  ["ev-battery-low", "EV Battery Low", "EV", "amber", "High-voltage battery charge is low.", "Yes.", "Plan charging soon.", ["electric car battery"]],
  ["ev-system-warning", "EV System Warning", "EV", "red", "Electric drive system fault detected.", "Stop if power is reduced.", "Pull over safely and contact service.", ["electric vehicle warning"]],
  ["charge-port-open", "Charge Port Open", "EV", "amber", "EV charge door or port is open.", "Close before driving.", "Close the charge port and check latch.", ["charging door"]],
  ["regen-braking-limited", "Regenerative Braking Limited", "EV", "amber", "Regenerative braking may be reduced.", "Yes.", "Use friction brakes and check battery temperature/charge.", ["regen light"]],
  ["low-beam-light", "Low Beam Indicator", "Lights", "green", "Low beam headlights are on.", "Yes.", "Normal night or low-visibility lighting.", ["dipped beam"]],
  ["cruise-control-indicator", "Cruise Control Indicator", "Driver Assist", "green", "Cruise control is active or ready.", "Yes.", "Use only when road conditions are suitable.", ["speed control"]]
];

export const symbols: DashboardSymbol[] = rows.map(([slug, name, system, color, meaning, canDrive, action, aliases]) => ({
  slug,
  name,
  system,
  color,
  meaning,
  canDrive,
  action,
  aliases
}));

export const colorLabels: Record<"all" | SymbolColor, string> = {
  all: "All colors",
  red: "Red",
  amber: "Amber",
  green: "Green",
  blue: "Blue"
};

export const guideLinks: Record<string, string> = {
  "check-engine-light": "/symbols/check-engine-light/",
  "oil-pressure-warning": "/symbols/oil-pressure-warning-light/",
  "battery-warning-light": "/symbols/battery-warning-light/",
  "brake-warning-light": "/symbols/brake-warning-light/",
  "tire-pressure-warning": "/symbols/tire-pressure-warning-light/",
  "abs-warning-light": "/symbols/abs-warning-light/",
  "traction-control-light": "/symbols/traction-control-light/",
  "coolant-temperature-warning": "/symbols/coolant-temperature-warning-light/",
  "airbag-warning-light": "/symbols/airbag-warning-light/",
  "low-fuel-warning": "/symbols/low-fuel-warning-light/"
};
