import type { DashboardSymbol } from "@/lib/symbols";

type Props = {
  symbol: DashboardSymbol;
  large?: boolean;
};

function shape(symbol: DashboardSymbol, stroke: string, color: string) {
  const common = `fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"`;
  const shapes: Record<string, string> = {
    "check-engine-light": `<path ${common} d="M16 35h8l5-8h19l5 8h8v22H16z"/><path ${common} d="M32 27v-8h14"/><path ${common} d="M61 42h8"/>`,
    "oil-pressure-warning": `<path ${common} d="M18 45h34l12 9"/><path ${common} d="M25 38l11-12h17l7 12"/><path ${common} d="M52 56c5 1 8 4 11 8"/><circle cx="66" cy="66" r="4" fill="${color}"/>`,
    "battery-warning-light": `<rect x="14" y="26" width="52" height="34" rx="3" ${common}/><path ${common} d="M66 37h6v12h-6M27 43h12M33 37v12M48 43h12"/>`,
    "brake-warning-light": `<circle cx="40" cy="40" r="22" ${common}/><path ${common} d="M40 24v21"/><circle cx="40" cy="57" r="3.5" fill="${color}"/><path ${common} d="M13 25c-6 11-6 20 0 30M67 25c6 11 6 20 0 30"/>`,
    "abs-warning-light": `<circle cx="40" cy="40" r="22" ${common}/><path ${common} d="M13 25c-6 11-6 20 0 30M67 25c6 11 6 20 0 30"/><text x="40" y="48" text-anchor="middle" font-size="20" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">ABS</text>`,
    "tire-pressure-warning": `<path ${common} d="M20 23c-5 17-4 31 4 44h12M60 23c5 17 4 31-4 44H44"/><path ${common} d="M40 24v23"/><circle cx="40" cy="60" r="3.5" fill="${color}"/>`,
    "airbag-warning-light": `<circle cx="26" cy="20" r="7" ${common}/><path ${common} d="M22 31c8 5 14 15 18 31"/><path ${common} d="M16 64h28M18 39l-7 25"/><circle cx="58" cy="43" r="14" ${common}/><path ${common} d="M46 54c-8 6-17 9-28 10"/>`,
    "traction-control-light": `<path ${common} d="M16 35h41l8 13H12z"/><path ${common} d="M24 35l7-10h21l6 10"/><circle cx="25" cy="51" r="5" ${common}/><circle cx="53" cy="51" r="5" ${common}/><path ${common} d="M14 69c9-9 18 8 28-1s19 7 29-2"/>`,
    "stability-control-off": `<path ${common} d="M14 34h42l9 14H12z"/><path ${common} d="M18 69c9-9 18 7 28-1s18 7 28-1"/><text x="40" y="27" text-anchor="middle" font-size="17" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">OFF</text>`,
    "coolant-temperature-warning": `<path ${common} d="M39 13a8 8 0 0 1 16 0v27a17 17 0 1 1-16 0z"/><path ${common} d="M47 20v30"/><path ${common} d="M10 64c7-6 13 6 20 0s13 6 20 0s13 6 20 0"/>`,
    "low-fuel-warning": `<path ${common} d="M21 14h31v54H21z"/><path ${common} d="M28 22h17v12H28z"/><path ${common} d="M52 27h9l8 10v24a6 6 0 0 1-12 0V39"/><path ${common} d="M61 27v10h8"/>`,
    "seat-belt-reminder": `<circle cx="40" cy="15" r="8" ${common}/><path ${common} d="M22 40c8-9 28-9 36 0"/><path ${common} d="M29 38L17 66M51 38l12 28M19 51h42"/>`,
    "door-open-warning": `<path ${common} d="M15 35h46v25H15z"/><path ${common} d="M23 35l8-12h22l8 12"/><path ${common} d="M15 35L6 22M61 35l11-13"/><circle cx="27" cy="61" r="5" ${common}/><circle cx="52" cy="61" r="5" ${common}/>`,
    "hood-open-warning": `<path ${common} d="M12 45h55l6 16H7z"/><path ${common} d="M23 45l9-15h31l7 15"/><path ${common} d="M32 30L19 13h34"/><circle cx="27" cy="62" r="5" ${common}/><circle cx="57" cy="62" r="5" ${common}/>`,
    "trunk-open-warning": `<path ${common} d="M10 45h56l7 16H6z"/><path ${common} d="M22 45l9-15h28l8 15"/><path ${common} d="M59 30l12-15h-13"/><circle cx="27" cy="62" r="5" ${common}/><circle cx="57" cy="62" r="5" ${common}/>`,
    "washer-fluid-low": `<path ${common} d="M15 25h48l-8 28H24z"/><path ${common} d="M14 64c7-6 13 6 20 0s13 6 20 0s13 6 20 0"/><path ${common} d="M38 21c-5-8-2-14 6-18M51 24c3-8 9-13 18-14"/>`,
    "high-beam-light": `<path ${common} d="M38 20c15 0 25 8 25 20S53 60 38 60z"/><path ${common} d="M32 20v40M8 20h18M6 33h20M6 47h20M8 60h18"/>`,
    "fog-light-indicator": `<path ${common} d="M38 20c15 0 25 8 25 20S53 60 38 60z"/><path ${common} d="M32 20v40M8 25l18 5M6 40l20 5M8 55l18 5M10 69h56"/>`,
    "rear-fog-light": `<path ${common} d="M42 20c-15 0-25 8-25 20s10 20 25 20z"/><path ${common} d="M48 20v40M55 25l18 5M55 40l20 5M55 55l18 5M10 69h56"/>`,
    "turn-signal-indicator": `<path ${common} d="M9 40h43"/><path ${common} d="M42 21l22 19l-22 19"/><path ${common} d="M69 21v38"/>`,
    "hazard-warning-lights": `<path ${common} d="M40 11l31 55H9z"/><path ${common} d="M40 30v18"/><circle cx="40" cy="58" r="3.5" fill="${color}"/>`,
    "parking-brake-light": `<circle cx="40" cy="40" r="22" ${common}/><path ${common} d="M31 56V24h12a10 10 0 0 1 0 20H31"/><path ${common} d="M13 25c-6 11-6 20 0 30M67 25c6 11 6 20 0 30"/>`,
    "brake-fluid-low": `<circle cx="40" cy="35" r="20" ${common}/><path ${common} d="M40 20v18"/><circle cx="40" cy="50" r="3.5" fill="${color}"/><path ${common} d="M16 65c7-6 13 6 20 0s13 6 20 0"/>`,
    "power-steering-warning": `<circle cx="37" cy="34" r="23" ${common}/><circle cx="37" cy="34" r="6" ${common}/><path ${common} d="M15 38h44M37 57v13M66 17v23"/><circle cx="66" cy="53" r="3.5" fill="${color}"/>`,
    "engine-start-stop": `<path ${common} d="M21 51a23 23 0 1 0 3-27"/><path ${common} d="M21 17v16h16"/><text x="43" y="48" text-anchor="middle" font-size="21" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">A</text>`,
    "glow-plug-light": `<path ${common} d="M11 38c8-22 21-22 29 0s21 22 29 0"/><path ${common} d="M11 53h58"/>`,
    "dpf-warning-light": `<rect x="18" y="24" width="44" height="32" rx="5" ${common}/><path ${common} d="M24 18v44M34 18v44M46 18v44M56 18v44M11 40h7M62 40h7"/>`,
    "catalytic-converter-warning": `<path ${common} d="M16 48h24l14-18h10"/><path ${common} d="M16 59h37M63 21c9 8 9 25 0 33"/><path ${common} d="M65 35h8"/>`,
    "transmission-warning": `<circle cx="23" cy="24" r="7" ${common}/><circle cx="40" cy="24" r="7" ${common}/><circle cx="57" cy="24" r="7" ${common}/><circle cx="40" cy="58" r="7" ${common}/><path ${common} d="M23 31v14h34V31M40 31v20"/><path ${common} d="M64 48v14"/><circle cx="64" cy="72" r="3" fill="${color}"/>`,
    "low-transmission-fluid": `<circle cx="28" cy="27" r="8" ${common}/><circle cx="52" cy="27" r="8" ${common}/><path ${common} d="M28 35v16h24V35M13 65c7-6 13 6 20 0s13 6 20 0"/>`,
    "clutch-warning": `<circle cx="40" cy="40" r="24" ${common}/><path ${common} d="M48 24c-18-2-28 11-19 27c4 8 15 9 23 2"/><path ${common} d="M64 19v20"/><circle cx="64" cy="52" r="3.5" fill="${color}"/>`,
    "awd-warning": `<circle cx="18" cy="24" r="6" ${common}/><circle cx="62" cy="24" r="6" ${common}/><circle cx="18" cy="58" r="6" ${common}/><circle cx="62" cy="58" r="6" ${common}/><path ${common} d="M18 30v22M62 30v22M24 24h32M24 58h32M40 24v34"/><text x="40" y="47" text-anchor="middle" font-size="15" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">4WD</text>`,
    "hill-descent-control": `<path ${common} d="M12 62l56-36"/><path ${common} d="M22 38h25l7 10H18z"/><circle cx="25" cy="50" r="5" ${common}/><circle cx="47" cy="50" r="5" ${common}/><path ${common} d="M61 13v21M52 25l9 9l9-9"/>`,
    "lane-departure-warning": `<path ${common} d="M22 68l7-54M58 68l-7-54"/><path ${common} d="M40 22v14M40 46v14"/><path ${common} d="M11 42h15M54 42h15"/>`,
    "adaptive-cruise-warning": `<path ${common} d="M17 51h39l8 11H13z"/><path ${common} d="M24 51l7-12h19l7 12"/><path ${common} d="M14 24c10-10 22-10 32 0M9 14c16-15 35-15 51 0"/>`,
    "forward-collision-warning": `<path ${common} d="M12 49h29l7 10H10z"/><path ${common} d="M18 49l6-10h18l6 10"/><path ${common} d="M59 21v23"/><circle cx="59" cy="57" r="3.5" fill="${color}"/><path ${common} d="M48 40h22"/>`,
    "blind-spot-warning": `<path ${common} d="M12 45h30l8 12H10z"/><path ${common} d="M21 45l7-11h20l7 11"/><path ${common} d="M56 28c9 2 14 8 15 17M56 17c16 3 25 14 27 30"/>`,
    "parking-sensor-warning": `<path ${common} d="M14 49h30l8 11H12z"/><path ${common} d="M55 31c6 5 6 13 0 18M65 23c11 11 11 25 0 36"/><circle cx="21" cy="61" r="4" ${common}/><circle cx="43" cy="61" r="4" ${common}/>`,
    "rear-camera-warning": `<rect x="17" y="25" width="39" height="28" rx="5" ${common}/><circle cx="36" cy="39" r="8" ${common}/><path ${common} d="M56 33l13-8v28l-13-8M69 60h.1"/>`,
    "key-fob-battery-low": `<path ${common} d="M20 30a14 14 0 1 1 11 14"/><path ${common} d="M31 44v18M31 54h14M45 54v8"/><rect x="52" y="22" width="17" height="29" rx="3" ${common}/><path ${common} d="M56 42h9"/>`,
    "immobilizer-warning": `<path ${common} d="M19 39a16 16 0 1 1 14 16"/><path ${common} d="M33 55v15M33 63h14M47 63v7"/><path ${common} d="M58 18v20"/><circle cx="58" cy="51" r="3.5" fill="${color}"/>`,
    "service-due-light": `<path ${common} d="M20 17l16 16M32 45L14 63M44 33l19 19"/><path ${common} d="M49 16l15 15M55 10l15 15"/>`,
    "oil-level-low": `<path ${common} d="M18 44h34l12 9"/><path ${common} d="M25 37l11-12h17l7 12"/><path ${common} d="M13 66h54M25 62h30"/>`,
    "adblue-low": `<path ${common} d="M21 14h38v52H21z"/><path ${common} d="M29 24h22M29 36h22"/><text x="40" y="57" text-anchor="middle" font-size="17" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">DEF</text>`,
    "ev-battery-low": `<rect x="16" y="27" width="48" height="28" rx="3" ${common}/><path ${common} d="M64 36h7v10h-7M28 41h24"/><path ${common} d="M42 12L31 36h13l-6 18l13-25H39z"/>`,
    "ev-system-warning": `<path ${common} d="M40 10L22 42h15l-5 28l26-38H43z"/><path ${common} d="M66 18v22"/><circle cx="66" cy="53" r="3.5" fill="${color}"/>`,
    "charge-port-open": `<path ${common} d="M27 20h22a12 12 0 0 1 0 24H27z"/><path ${common} d="M27 44v20"/><path ${common} d="M55 31h16M64 22v18"/><path ${common} d="M16 54h20"/>`,
    "regen-braking-limited": `<path ${common} d="M22 48a22 22 0 1 0 3-27"/><path ${common} d="M22 14v15h15"/><text x="43" y="51" text-anchor="middle" font-size="18" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">RE</text>`,
    "low-beam-light": `<path ${common} d="M39 20c14 0 24 8 24 20S53 60 39 60z"/><path ${common} d="M33 20v40M8 26l20 5M6 40l22 5M8 54l20 5"/>`,
    "cruise-control-indicator": `<path ${common} d="M17 55a28 28 0 1 1 46 0"/><path ${common} d="M40 40l18-13"/><circle cx="40" cy="40" r="5" ${common}/>`
  };

  return shapes[symbol.slug] ?? `<circle cx="40" cy="40" r="25" ${common}/><path ${common} d="M40 21v23"/><circle cx="40" cy="57" r="3.5" fill="${color}"/>`;
}

export function SymbolIcon({ symbol, large = false }: Props) {
  const color = `var(--${symbol.color})`;

  return (
    <svg
      className={large ? "detail-svg" : "card-svg"}
      viewBox="0 0 80 80"
      role="img"
      aria-label={symbol.name}
      dangerouslySetInnerHTML={{ __html: shape(symbol, color, color) }}
    />
  );
}
