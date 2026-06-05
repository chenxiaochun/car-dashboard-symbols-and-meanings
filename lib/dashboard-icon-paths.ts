/**
 * ISO-style dashboard warning light paths (viewBox 0 0 80 80).
 * Used for the highest-traffic symbols where visual accuracy matters most.
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
  "tire-pressure-warning",
  "abs-warning-light",
  "coolant-temperature-warning",
  "airbag-warning-light",
  "low-fuel-warning",
  "parking-brake-light"
]);

/** Side arcs used on brake / ABS / parking brake cluster icons */
function clusterArcs(stroke: string) {
  const c = s(stroke);
  return `<path ${c} d="M13 22a28 28 0 0 0 0 36"/><path ${c} d="M67 22a28 28 0 0 1 0 36"/>`;
}

function clusterCircle(stroke: string) {
  return `<circle cx="40" cy="40" r="21" ${s(stroke)}/>`;
}

export function hasAccurateIcon(slug: string): boolean {
  return ACCURATE_SLUGS.has(slug);
}

export function getAccurateIconPaths(slug: string, stroke: string, color: string): string | null {
  const c = s(stroke);

  const icons: Record<string, string> = {
    "check-engine-light": `
      <path ${c} d="M10 52V38"/>
      <path ${c} d="M10 44h11"/>
      <path ${c} d="M21 44V31c0-5 4-8 9-8h12c4 0 7-3 7-7V14h28"/>
      <path ${c} d="M57 14v7c0 4 3 7 7 7h8c5 0 9 4 9 9v13h-7c-4 0-7 3-7 7v11H52L40 68H24L14 59h7V44"/>
      <path ${c} d="M69 52h11v18H69"/>
      <path ${c} d="M32 24v-6h16"/>
      <path ${c} d="M29 42h22"/>
    `,

    "oil-pressure-warning": `
      <path ${c} d="M14 46h34l12 11H20z"/>
      <path ${c} d="M24 39h22"/>
      <path ${c} d="M46 45l12-13h11"/>
      <path ${c} d="M28 39l5-10h14l5 10"/>
      <path ${c} d="M63 55c5 5 6 11 0 16c-6-5-5-11 0-16z"/>
    `,

    "battery-warning-light": `
      <rect x="14" y="28" width="52" height="32" ${c}/>
      <path ${c} d="M24 28v-8h12v8"/>
      <path ${c} d="M48 28v-8h12v8"/>
      <path ${c} d="M26 44h14"/>
      <path ${c} d="M33 37v14"/>
      <path ${c} d="M50 44h14"/>
      <path ${c} d="M57 37v14"/>
    `,

    "brake-warning-light": `
      ${clusterArcs(stroke)}
      ${clusterCircle(stroke)}
      <path ${c} d="M40 26v18"/>
      <circle cx="40" cy="56" r="3.5" fill="${color}"/>
    `,

    "tire-pressure-warning": `
      <path ${c} d="M22 20c-6 14-5 28 4 42"/>
      <path ${c} d="M58 20c6 14 5 28-4 42"/>
      <path ${c} d="M26 62h28"/>
      <path ${c} d="M28 18c8-4 16-4 24 0"/>
      <path ${c} d="M40 26v22"/>
      <path ${c} d="M32 62v-4"/>
      <path ${c} d="M40 64v-6"/>
      <path ${c} d="M48 62v-4"/>
      <circle cx="40" cy="54" r="3.5" fill="${color}"/>
    `,

    "abs-warning-light": `
      ${clusterArcs(stroke)}
      ${clusterCircle(stroke)}
      <text x="40" y="48" text-anchor="middle" font-size="20" font-weight="900" font-family="system-ui, sans-serif" fill="${color}">ABS</text>
    `,

    "coolant-temperature-warning": `
      <path ${c} d="M36 12a8 8 0 0 1 16 0v28a18 18 0 1 1-16 0z"/>
      <path ${c} d="M44 18v34"/>
      <path ${c} d="M8 58c6-5 12 5 18 0s12 5 18 0s12 5 18 0"/>
      <path ${c} d="M8 66c6-5 12 5 18 0s12 5 18 0s12 5 18 0"/>
    `,

    "airbag-warning-light": `
      <circle cx="24" cy="18" r="8" ${c}/>
      <path ${c} d="M20 32c6 5 11 12 14 24"/>
      <path ${c} d="M14 58h32"/>
      <path ${c} d="M16 38l-8 20"/>
      <path ${c} d="M30 36l-10 9"/>
      <circle cx="58" cy="40" r="14" ${c}/>
      <path ${c} d="M46 54c-8 6-18 9-30 9"/>
    `,

    "low-fuel-warning": `
      <path ${c} d="M20 14h30v54H20z"/>
      <path ${c} d="M26 22h18v12H26z"/>
      <path ${c} d="M50 26h10l9 10v24a6 6 0 0 1-12 0V40"/>
      <path ${c} d="M59 26v10h9"/>
    `,

    "parking-brake-light": `
      ${clusterArcs(stroke)}
      ${clusterCircle(stroke)}
      <path ${c} d="M30 56V24h14a11 11 0 0 1 0 22H30"/>
    `
  };

  return icons[slug] ?? null;
}
