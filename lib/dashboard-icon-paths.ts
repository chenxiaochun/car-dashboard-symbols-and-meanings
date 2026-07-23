/**
 * ISO-style dashboard warning light paths (viewBox 0 0 80 80).
 * These are intentionally generic reference drawings, but the silhouettes are
 * close to common real cluster lamps instead of decorative illustrations.
 */

const STROKE = 5;

function s(stroke: string) {
  return `fill="none" stroke="${stroke}" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"`;
}

const ACCURATE_SLUGS = new Set([
  "check-engine-light",
  "oil-pressure-warning",
  "battery-warning-light",
  "brake-warning-light",
  "abs-warning-light",
  "tire-pressure-warning",
  "airbag-warning-light",
  "traction-control-light",
  "stability-control-off",
  "coolant-temperature-warning",
  "low-fuel-warning",
  "seat-belt-reminder",
  "door-open-warning",
  "hood-open-warning",
  "trunk-open-warning",
  "washer-fluid-low",
  "high-beam-light",
  "fog-light-indicator",
  "rear-fog-light",
  "turn-signal-indicator",
  "hazard-warning-lights",
  "parking-brake-light",
  "brake-fluid-low",
  "power-steering-warning",
  "engine-start-stop",
  "glow-plug-light",
  "dpf-warning-light",
  "catalytic-converter-warning",
  "transmission-warning",
  "low-transmission-fluid",
  "clutch-warning",
  "awd-warning",
  "hill-descent-control",
  "lane-departure-warning",
  "adaptive-cruise-warning",
  "forward-collision-warning",
  "blind-spot-warning",
  "parking-sensor-warning",
  "rear-camera-warning",
  "key-fob-battery-low",
  "immobilizer-warning",
  "service-due-light",
  "oil-level-low",
  "adblue-low",
  "ev-battery-low",
  "ev-system-warning",
  "charge-port-open",
  "regen-braking-limited",
  "low-beam-light",
  "cruise-control-indicator"
]);

/** Side arcs used on brake / ABS / parking brake cluster icons. */
function clusterArcs(stroke: string) {
  const c = s(stroke);
  return `<path ${c} d="M13 22a28 28 0 0 0 0 36"/><path ${c} d="M67 22a28 28 0 0 1 0 36"/>`;
}

function clusterCircle(stroke: string) {
  return `<circle cx="40" cy="40" r="21" ${s(stroke)}/>`;
}

function car(stroke: string) {
  const c = s(stroke);
  return `
    <path ${c} d="M13 46h54l-6 13H19z"/>
    <path ${c} d="M23 46l8-13h18l8 13"/>
    <circle cx="25" cy="60" r="5" ${c}/>
    <circle cx="55" cy="60" r="5" ${c}/>
  `;
}

export function hasAccurateIcon(slug: string): boolean {
  return ACCURATE_SLUGS.has(slug);
}

export function getAccurateIconPaths(slug: string, stroke: string, color: string): string | null {
  const c = s(stroke);

  const icons: Record<string, string> = {
    "check-engine-light": `
      <path ${c} d="M8 52V38"/>
      <path ${c} d="M8 44h12"/>
      <path ${c} d="M20 44V31c0-5 4-8 9-8h12c4 0 7-3 7-7V14h28"/>
      <path ${c} d="M56 14v7c0 4 3 7 7 7h8c5 0 9 4 9 9v13h-7c-4 0-7 3-7 7v11H52L40 68H24L14 59h6V44"/>
      <path ${c} d="M68 52h12v18H68"/>
      <path ${c} d="M32 24v-6h16"/>
      <path ${c} d="M29 42h22"/>
    `,

    "oil-pressure-warning": `
      <path ${c} d="M13 47h35l12 10H19z"/>
      <path ${c} d="M23 40h23"/>
      <path ${c} d="M46 46l12-13h11"/>
      <path ${c} d="M28 40l5-10h14l5 10"/>
      <path ${c} d="M63 56c5 5 6 11 0 16c-6-5-5-11 0-16z"/>
    `,

    "battery-warning-light": `
      <rect x="13" y="28" width="53" height="32" ${c}/>
      <path ${c} d="M23 28v-8h12v8"/>
      <path ${c} d="M48 28v-8h12v8"/>
      <path ${c} d="M26 44h14"/>
      <path ${c} d="M33 37v14"/>
      <path ${c} d="M50 44h14"/>
    `,

    "brake-warning-light": `
      ${clusterArcs(stroke)}
      ${clusterCircle(stroke)}
      <path ${c} d="M40 26v18"/>
      <circle cx="40" cy="56" r="3.5" fill="${color}"/>
    `,

    "abs-warning-light": `
      ${clusterArcs(stroke)}
      ${clusterCircle(stroke)}
      <text x="40" y="48" text-anchor="middle" font-size="20" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">ABS</text>
    `,

    "tire-pressure-warning": `
      <path ${c} d="M22 20c-6 14-5 29 4 42"/>
      <path ${c} d="M58 20c6 14 5 29-4 42"/>
      <path ${c} d="M26 62h28"/>
      <path ${c} d="M28 18c8-4 16-4 24 0"/>
      <path ${c} d="M40 27v21"/>
      <path ${c} d="M32 62v-4"/>
      <path ${c} d="M40 64v-6"/>
      <path ${c} d="M48 62v-4"/>
      <circle cx="40" cy="54" r="3.5" fill="${color}"/>
    `,

    "airbag-warning-light": `
      <circle cx="23" cy="17" r="8" ${c}/>
      <path ${c} d="M19 31c7 6 12 14 15 25"/>
      <path ${c} d="M13 60h32"/>
      <path ${c} d="M16 39l-8 21"/>
      <path ${c} d="M31 37l-11 10"/>
      <path ${c} d="M48 30a16 16 0 1 1-1 24"/>
      <path ${c} d="M47 54c-8 6-18 9-31 9"/>
    `,

    "traction-control-light": `
      ${car(stroke)}
      <path ${c} d="M12 70c6-7 13-7 20 0"/>
      <path ${c} d="M39 70c6-7 13-7 20 0"/>
      <path ${c} d="M22 26c5-5 12-5 17 0"/>
      <path ${c} d="M42 26c5-5 12-5 17 0"/>
    `,

    "stability-control-off": `
      ${car(stroke)}
      <path ${c} d="M12 70c6-7 13-7 20 0"/>
      <path ${c} d="M39 70c6-7 13-7 20 0"/>
      <text x="40" y="25" text-anchor="middle" font-size="15" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">OFF</text>
    `,

    "coolant-temperature-warning": `
      <path ${c} d="M34 12a8 8 0 0 1 16 0v28a18 18 0 1 1-16 0z"/>
      <path ${c} d="M42 18v34"/>
      <path ${c} d="M52 20h10M52 30h7M52 40h10"/>
      <path ${c} d="M8 58c6-5 12 5 18 0s12 5 18 0s12 5 18 0"/>
      <path ${c} d="M8 66c6-5 12 5 18 0s12 5 18 0s12 5 18 0"/>
    `,

    "low-fuel-warning": `
      <path ${c} d="M20 14h30v54H20z"/>
      <path ${c} d="M26 22h18v12H26z"/>
      <path ${c} d="M50 26h10l9 10v24a6 6 0 0 1-12 0V40"/>
      <path ${c} d="M59 26v10h9"/>
    `,

    "seat-belt-reminder": `
      <circle cx="40" cy="14" r="8" ${c}/>
      <path ${c} d="M32 28c6 4 11 4 16 0"/>
      <path ${c} d="M28 62h24"/>
      <path ${c} d="M32 34l-12 28"/>
      <path ${c} d="M48 34l12 28"/>
      <path ${c} d="M18 26l44 44"/>
      <path ${c} d="M62 26L18 70"/>
    `,

    "door-open-warning": `
      <path ${c} d="M15 50h43l7 11H12z"/>
      <path ${c} d="M23 50l8-13h21l8 13"/>
      <path ${c} d="M23 49L9 29h16l13 20"/>
      <path ${c} d="M58 49l12-18"/>
      <circle cx="25" cy="62" r="5" ${c}/>
      <circle cx="55" cy="62" r="5" ${c}/>
    `,

    "hood-open-warning": `
      <path ${c} d="M12 49h55l6 13H7z"/>
      <path ${c} d="M23 49l9-15h31l7 15"/>
      <path ${c} d="M32 34L18 16h32"/>
      <path ${c} d="M22 22l20 12"/>
      <circle cx="26" cy="63" r="5" ${c}/>
      <circle cx="58" cy="63" r="5" ${c}/>
    `,

    "trunk-open-warning": `
      <path ${c} d="M10 49h56l7 13H6z"/>
      <path ${c} d="M22 49l9-15h28l8 15"/>
      <path ${c} d="M58 34l13-17H56"/>
      <path ${c} d="M61 22l-11 12"/>
      <circle cx="27" cy="63" r="5" ${c}/>
      <circle cx="57" cy="63" r="5" ${c}/>
    `,

    "washer-fluid-low": `
      <path ${c} d="M14 30h52l-9 26H23z"/>
      <path ${c} d="M21 56h37"/>
      <path ${c} d="M26 45l18 11"/>
      <path ${c} d="M24 21c7-7 14-7 21 0"/>
      <path ${c} d="M35 17l-4-9"/>
      <path ${c} d="M47 17l6-9"/>
      <path ${c} d="M57 23l9-5"/>
    `,

    "high-beam-light": `
      <path ${c} d="M42 20c15 0 24 8 24 20s-9 20-24 20z"/>
      <path ${c} d="M34 20v40"/>
      <path ${c} d="M8 22h18M8 34h18M8 46h18M8 58h18"/>
    `,

    "fog-light-indicator": `
      <path ${c} d="M42 20c15 0 24 8 24 20s-9 20-24 20z"/>
      <path ${c} d="M34 20v40"/>
      <path ${c} d="M10 25l18 5M8 38l20 5M10 51l18 5"/>
      <path ${c} d="M9 66h58"/>
    `,

    "rear-fog-light": `
      <path ${c} d="M38 20c-15 0-24 8-24 20s9 20 24 20z"/>
      <path ${c} d="M46 20v40"/>
      <path ${c} d="M54 25l18 5M54 40l20 5M54 55l18 5"/>
      <path ${c} d="M11 66h58"/>
    `,

    "turn-signal-indicator": `
      <path fill="${color}" d="M8 40 31 20v12h18v16H31v12z"/>
      <path fill="${color}" d="M72 40 49 20v12H31v16h18v12z"/>
    `,

    "hazard-warning-lights": `
      <path ${c} d="M40 10l31 56H9z"/>
      <path ${c} d="M40 30v18"/>
      <circle cx="40" cy="59" r="4" fill="${color}"/>
    `,

    "parking-brake-light": `
      ${clusterArcs(stroke)}
      ${clusterCircle(stroke)}
      <path ${c} d="M30 56V24h14a11 11 0 0 1 0 22H30"/>
    `,

    "brake-fluid-low": `
      ${clusterArcs(stroke)}
      ${clusterCircle(stroke)}
      <path ${c} d="M40 24v18"/>
      <circle cx="40" cy="53" r="3.5" fill="${color}"/>
      <path ${c} d="M17 68c6-5 12 5 18 0s12 5 18 0s12 5 18 0"/>
    `,

    "power-steering-warning": `
      <circle cx="35" cy="36" r="23" ${c}/>
      <circle cx="35" cy="36" r="6" ${c}/>
      <path ${c} d="M13 38h44"/>
      <path ${c} d="M35 59v11"/>
      <path ${c} d="M21 53l14-17l14 17"/>
      <path ${c} d="M66 16v26"/>
      <circle cx="66" cy="56" r="3.5" fill="${color}"/>
    `,

    "engine-start-stop": `
      <path ${c} d="M20 52a24 24 0 1 0 4-29"/>
      <path ${c} d="M21 15v17h17"/>
      <text x="43" y="49" text-anchor="middle" font-size="22" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">A</text>
    `,

    "glow-plug-light": `
      <path ${c} d="M10 40h9c6 0 6-18 17-18s10 36 22 36s10-18 17-18"/>
      <path ${c} d="M10 56h60"/>
    `,

    "dpf-warning-light": `
      <rect x="18" y="24" width="44" height="32" rx="5" ${c}/>
      <path ${c} d="M10 40h8M62 40h8"/>
      <circle cx="29" cy="33" r="2.4" fill="${color}"/>
      <circle cx="40" cy="33" r="2.4" fill="${color}"/>
      <circle cx="51" cy="33" r="2.4" fill="${color}"/>
      <circle cx="29" cy="47" r="2.4" fill="${color}"/>
      <circle cx="40" cy="47" r="2.4" fill="${color}"/>
      <circle cx="51" cy="47" r="2.4" fill="${color}"/>
    `,

    "catalytic-converter-warning": `
      <path ${c} d="M10 47h17l9-12h19l9 12h6"/>
      <path ${c} d="M27 47l9 12h19l9-12"/>
      <path ${c} d="M10 59h18M64 59h6"/>
      <path ${c} d="M43 29c5-5 5-10 0-15"/>
      <path ${c} d="M55 29c5-5 5-10 0-15"/>
    `,

    "transmission-warning": `
      <circle cx="40" cy="40" r="27" ${c}/>
      <circle cx="40" cy="40" r="11" ${c}/>
      <path ${c} d="M40 13v11M40 56v11M13 40h11M56 40h11"/>
      <path ${c} d="M59 18v22"/>
      <circle cx="59" cy="53" r="3.5" fill="${color}"/>
    `,

    "low-transmission-fluid": `
      <circle cx="40" cy="31" r="20" ${c}/>
      <path ${c} d="M40 11v8M40 43v8M20 31h8M52 31h8"/>
      <path ${c} d="M17 65c6-5 12 5 18 0s12 5 18 0s12 5 18 0"/>
    `,

    "clutch-warning": `
      <circle cx="38" cy="40" r="25" ${c}/>
      <path ${c} d="M51 25c-17-4-29 6-28 21c1 12 12 19 27 11"/>
      <path ${c} d="M65 17v24"/>
      <circle cx="65" cy="55" r="3.5" fill="${color}"/>
    `,

    "awd-warning": `
      <ellipse cx="40" cy="40" rx="31" ry="20" ${c}/>
      <text x="40" y="49" text-anchor="middle" font-size="24" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">AWD</text>
    `,

    "hill-descent-control": `
      <path ${c} d="M12 62l56-36"/>
      <path ${c} d="M22 42h28l7 10H17z"/>
      <circle cx="26" cy="54" r="5" ${c}/>
      <circle cx="49" cy="54" r="5" ${c}/>
      <path ${c} d="M62 12v25"/>
      <path ${c} d="M53 28l9 9l9-9"/>
    `,

    "lane-departure-warning": `
      <path ${c} d="M20 68l8-52"/>
      <path ${c} d="M60 68l-8-52"/>
      <path ${c} d="M31 42h18l7 11H24z"/>
      <circle cx="31" cy="55" r="3.5" fill="${color}"/>
      <circle cx="49" cy="55" r="3.5" fill="${color}"/>
      <path ${c} d="M8 44h14M58 44h14"/>
    `,

    "adaptive-cruise-warning": `
      <path ${c} d="M20 52h40l7 11H15z"/>
      <path ${c} d="M28 52l7-12h18l7 12"/>
      <path ${c} d="M14 27c8-8 18-11 29-9"/>
      <path ${c} d="M8 17c13-13 30-17 48-10"/>
      <circle cx="62" cy="28" r="3" fill="${color}"/>
    `,

    "forward-collision-warning": `
      <path ${c} d="M13 50h36l7 11H9z"/>
      <path ${c} d="M22 50l7-12h18l7 12"/>
      <path ${c} d="M57 35h12"/>
      <path ${c} d="M63 29v12"/>
      <path ${c} d="M15 70h50"/>
      <path ${c} d="M10 62l10-9M70 62l-10-9"/>
    `,

    "blind-spot-warning": `
      <path ${c} d="M11 48h31l7 11H8z"/>
      <path ${c} d="M20 48l7-12h20l7 12"/>
      <path ${c} d="M57 31c8 3 13 9 14 17"/>
      <path ${c} d="M57 18c16 4 25 15 28 31"/>
    `,

    "parking-sensor-warning": `
      <path ${c} d="M13 51h30l8 10H11z"/>
      <circle cx="23" cy="62" r="4" ${c}/>
      <circle cx="43" cy="62" r="4" ${c}/>
      <path ${c} d="M55 32c6 5 6 13 0 18"/>
      <path ${c} d="M65 24c11 11 11 25 0 36"/>
      <text x="23" y="33" text-anchor="middle" font-size="18" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">P</text>
    `,

    "rear-camera-warning": `
      <rect x="16" y="26" width="40" height="28" rx="5" ${c}/>
      <circle cx="36" cy="40" r="8" ${c}/>
      <path ${c} d="M56 34l13-8v28l-13-8"/>
      <path ${c} d="M69 61v.1"/>
    `,

    "key-fob-battery-low": `
      <path ${c} d="M20 33a14 14 0 1 1 12 14"/>
      <path ${c} d="M32 47v18M32 56h14M46 56v9"/>
      <rect x="53" y="24" width="17" height="29" rx="3" ${c}/>
      <path ${c} d="M57 44h9"/>
    `,

    "immobilizer-warning": `
      <path ${c} d="M19 40a16 16 0 1 1 14 16"/>
      <path ${c} d="M33 56v15M33 64h14M47 64v7"/>
      <path ${c} d="M58 18v22"/>
      <circle cx="58" cy="53" r="3.5" fill="${color}"/>
    `,

    "service-due-light": `
      <path ${c} d="M22 16l15 15"/>
      <path ${c} d="M35 43L16 62"/>
      <path ${c} d="M46 32l18 18"/>
      <path ${c} d="M51 16l14 14"/>
      <path ${c} d="M57 10l13 13"/>
    `,

    "oil-level-low": `
      <path ${c} d="M14 47h34l12 10H20z"/>
      <path ${c} d="M23 40h23"/>
      <path ${c} d="M46 46l12-13h11"/>
      <path ${c} d="M28 40l5-10h14l5 10"/>
      <path ${c} d="M15 68h50"/>
      <path ${c} d="M29 62h22"/>
    `,

    "adblue-low": `
      <path ${c} d="M21 14h38v52H21z"/>
      <path ${c} d="M29 24h22M29 36h22"/>
      <text x="40" y="57" text-anchor="middle" font-size="17" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">DEF</text>
    `,

    "ev-battery-low": `
      <rect x="14" y="29" width="51" height="27" rx="3" ${c}/>
      <path ${c} d="M65 37h7v11h-7"/>
      <path ${c} d="M27 43h25"/>
      <path ${c} d="M42 12L31 37h13l-6 19l14-27H39z"/>
    `,

    "ev-system-warning": `
      <path ${c} d="M40 10L17 66h46z"/>
      <path ${c} d="M43 25l-11 18h10l-5 14l13-22H40z"/>
      <path ${c} d="M60 24v20"/>
      <circle cx="60" cy="55" r="3.5" fill="${color}"/>
    `,

    "charge-port-open": `
      <path ${c} d="M25 22h23a12 12 0 0 1 0 24H25z"/>
      <path ${c} d="M25 46v20"/>
      <path ${c} d="M56 33h16"/>
      <path ${c} d="M64 24v18"/>
      <path ${c} d="M16 56h20"/>
    `,

    "regen-braking-limited": `
      <path ${c} d="M22 51a22 22 0 1 0 4-28"/>
      <path ${c} d="M22 16v15h15"/>
      <text x="43" y="51" text-anchor="middle" font-size="18" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">RE</text>
    `,

    "low-beam-light": `
      <path ${c} d="M42 20c15 0 24 8 24 20s-9 20-24 20z"/>
      <path ${c} d="M34 20v40"/>
      <path ${c} d="M8 29l20 5M8 42l20 5M8 55l20 5"/>
    `,

    "cruise-control-indicator": `
      <path ${c} d="M17 56a29 29 0 1 1 46 0"/>
      <path ${c} d="M40 40l18-13"/>
      <circle cx="40" cy="40" r="5" ${c}/>
      <path ${c} d="M22 58h36"/>
    `
  };

  return icons[slug] ?? null;
}
