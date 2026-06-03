const symbols = [
  ["check-engine-light", "Check Engine Light", "Engine", "amber", "Engine or emissions fault detected.", "Usually yes, but inspect soon.", "Scan for diagnostic trouble codes and avoid hard acceleration.", ["engine management light", "MIL", "malfunction indicator lamp"]],
  ["oil-pressure-warning", "Oil Pressure Warning", "Engine", "red", "Oil pressure may be too low.", "No. Stop safely.", "Turn off the engine and check oil level before driving again.", ["red oil can", "oil light"]],
  ["battery-warning-light", "Battery Warning Light", "Electrical", "red", "Charging system is not keeping the battery powered.", "Short distance only if necessary.", "Switch off nonessential electrics and get the alternator/battery checked.", ["charging light", "battery symbol"]],
  ["brake-warning-light", "Brake Warning Light", "Brake", "red", "Parking brake may be on or brake system has a fault.", "Only after confirming braking feels normal.", "Check parking brake and brake fluid. Stop if pedal feels soft.", ["brake light", "red brake symbol"]],
  ["abs-warning-light", "ABS Warning Light", "Brake", "amber", "Anti-lock braking system may not work.", "Yes, with caution.", "Normal braking may remain, but ABS needs diagnosis.", ["anti lock brake"]],
  ["tire-pressure-warning", "Tire Pressure Warning", "Tires", "amber", "One or more tyres/tires may be underinflated.", "Usually yes, slowly.", "Check pressure and inflate to the placard value.", ["tyre pressure", "TPMS", "horseshoe exclamation"]],
  ["airbag-warning-light", "Airbag Warning Light", "Safety", "amber", "Airbag or seatbelt pretensioner system has a fault.", "Yes, but safety protection may be reduced.", "Have the restraint system inspected soon.", ["SRS light", "air bag"]],
  ["traction-control-light", "Traction Control Light", "Stability", "amber", "Traction control is active or has a fault.", "Yes, with caution.", "If flashing, reduce throttle. If steady, inspect the system.", ["car with squiggly lines", "slippery road"]],
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
  ["power-steering-warning", "Power Steering Warning", "Steering", "amber", "Power steering assistance may be reduced.", "Yes, carefully.", "Steering may feel heavy. Inspect fluid or electric steering system.", ["steering wheel exclamation"]],
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
].map(([slug, name, system, color, meaning, canDrive, action, aliases]) => ({
  slug, name, system, color, meaning, canDrive, action, aliases
}));

const colorLabels = {
  all: "All colors",
  red: "Red",
  amber: "Amber",
  green: "Green",
  blue: "Blue"
};

let state = {
  color: "all",
  system: "all",
  query: "",
  selected: null
};

const grid = document.querySelector("#symbolGrid");
const resultCount = document.querySelector("#resultCount");
const detailPanel = document.querySelector("#detailPanel");
const searchInput = document.querySelector("#searchInput");

function iconSvg(symbol, large = false) {
  const color = `var(--${symbol.color})`;
  const key = symbol.slug;
  const stroke = color;
  const common = `fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"`;
  const sizeClass = large ? "detail-svg" : "card-svg";

  const shapes = {
    "check-engine-light": `<path ${common} d="M16 35h8l5-8h19l5 8h8v22H16z"/><path ${common} d="M32 27v-8h14"/><path ${common} d="M61 42h8"/>`,
    "oil-pressure-warning": `<path ${common} d="M18 45h34l12 9"/><path ${common} d="M25 38l11-12h17l7 12"/><path ${common} d="M52 56c5 1 8 4 11 8"/><circle cx="66" cy="66" r="4" fill="${color}"/>`,
    "battery-warning-light": `<rect x="14" y="26" width="52" height="34" rx="3" ${common}/><path ${common} d="M66 37h6v12h-6M27 43h12M33 37v12M48 43h12"/>`,
    "tire-pressure-warning": `<path ${common} d="M20 23c-5 17-4 31 4 44h12M60 23c5 17 4 31-4 44H44"/><path ${common} d="M40 24v23"/><circle cx="40" cy="60" r="3.5" fill="${color}"/>`
  };

  const fallback = `<circle cx="40" cy="40" r="25" ${common}/><path ${common} d="M40 21v23"/><circle cx="40" cy="57" r="3.5" fill="${color}"/>`;
  const body = shapes[key] || symbolShape(symbol, common, color);
  return `<svg class="${sizeClass}" viewBox="0 0 80 80" role="img" aria-label="${symbol.name}">${body || fallback}</svg>`;
}

function symbolShape(symbol, common, color) {
  if (symbol.system === "Brake") return `<circle cx="40" cy="40" r="23" ${common}/><path ${common} d="M40 23v20"/><circle cx="40" cy="56" r="3.5" fill="${color}"/><path ${common} d="M13 25c-6 11-6 20 0 30M67 25c6 11 6 20 0 30"/>`;
  if (symbol.system === "Lights") return `<path ${common} d="M18 28h20c10 0 18 8 18 18H18z"/><path ${common} d="M58 30h12M58 42h12M58 54h12"/>`;
  if (symbol.system === "Safety") return `<circle cx="40" cy="21" r="8" ${common}/><path ${common} d="M25 62c4-20 26-20 30 0M23 38c10 7 24 7 34 0"/>`;
  if (symbol.system === "Stability") return `<path ${common} d="M18 29h35l10 13-8 12H22z"/><path ${common} d="M20 66c8-8 17 8 26 0s17 8 28 0"/>`;
  if (symbol.system === "Driver Assist") return `<path ${common} d="M22 56V30l18-10 18 10v26"/><path ${common} d="M30 58h10M50 58h10M18 42h10M52 42h10"/>`;
  if (symbol.system === "EV") return `<path ${common} d="M28 15h24l-8 20h14L34 67l6-24H24z"/>`;
  if (symbol.system === "Exhaust") return `<path ${common} d="M16 47h34l12-14"/><path ${common} d="M20 56h32M60 26c8 7 8 18 0 25"/>`;
  if (symbol.system === "Drivetrain") return `<circle cx="24" cy="40" r="10" ${common}/><circle cx="56" cy="40" r="10" ${common}/><path ${common} d="M34 40h12M40 28v24"/>`;
  if (symbol.system === "Body") return `<path ${common} d="M18 52V30l18-12h26v34z"/><path ${common} d="M37 19v33"/>`;
  if (symbol.system === "Visibility") return `<path ${common} d="M18 49h28l16-19"/><path ${common} d="M18 60h24M54 47l10 10"/>`;
  if (symbol.system === "Security") return `<path ${common} d="M22 38a17 17 0 1 1 15 17"/><path ${common} d="M37 55v12M37 61h11M48 61v6"/>`;
  if (symbol.system === "Maintenance") return `<path ${common} d="M24 18l14 14M34 42l22 22M20 62l22-22"/><path ${common} d="M48 18l14 14"/>`;
  if (symbol.system === "Steering") return `<circle cx="40" cy="35" r="24" ${common}/><path ${common} d="M20 40h40M40 35v25"/><circle cx="40" cy="62" r="3.5" fill="${color}"/>`;
  if (symbol.system === "Fuel") return `<path ${common} d="M24 18h24v50H24z"/><path ${common} d="M48 28h9l6 8v28"/><path ${common} d="M29 28h14"/>`;
  if (symbol.system === "Electrical") return `<path ${common} d="M45 12 22 44h18l-5 24 24-35H42z"/>`;
  return "";
}

function renderFilters() {
  const systems = ["all", ...new Set(symbols.map((item) => item.system).sort())];
  document.querySelector("#colorFilters").innerHTML = Object.keys(colorLabels).map((color) => filterButton("color", color, colorLabels[color])).join("");
  document.querySelector("#systemFilters").innerHTML = systems.map((system) => filterButton("system", system, system === "all" ? "All systems" : system)).join("");
}

function filterButton(type, value, label) {
  const pressed = state[type] === value ? "true" : "false";
  return `<button class="chip" type="button" data-filter-type="${type}" data-filter-value="${value}" aria-pressed="${pressed}">${label}</button>`;
}

function filteredSymbols() {
  const query = state.query.trim().toLowerCase();
  return symbols.filter((symbol) => {
    const matchesColor = state.color === "all" || symbol.color === state.color;
    const matchesSystem = state.system === "all" || symbol.system === state.system;
    const haystack = [symbol.name, symbol.system, symbol.color, symbol.meaning, symbol.canDrive, symbol.action, ...symbol.aliases].join(" ").toLowerCase();
    return matchesColor && matchesSystem && (!query || haystack.includes(query));
  });
}

function renderGrid() {
  const items = filteredSymbols();
  resultCount.textContent = `${items.length} symbols`;
  grid.innerHTML = items.map((symbol) => `
    <button class="symbol-card" type="button" data-slug="${symbol.slug}">
      <span class="symbol-icon">${iconSvg(symbol)}</span>
      <span>
        <strong class="symbol-name">${symbol.name}</strong>
        <span class="symbol-meaning">${symbol.meaning}</span>
        <span class="meta-row">
          <span class="pill">${symbol.color}</span>
          <span class="pill">${symbol.system}</span>
        </span>
      </span>
    </button>
  `).join("");
}

function renderDetail(symbol) {
  detailPanel.innerHTML = `
    <div class="detail-layout">
      <div class="detail-icon">${iconSvg(symbol, true)}</div>
      <div>
        <h2>${symbol.name}</h2>
        <p>${symbol.meaning}</p>
        <div class="detail-facts">
          <div class="fact"><span>Color</span><strong>${colorLabels[symbol.color]}</strong></div>
          <div class="fact"><span>System</span><strong>${symbol.system}</strong></div>
          <div class="fact"><span>Can you drive?</span><strong>${symbol.canDrive}</strong></div>
        </div>
        <h3>What to do first</h3>
        <p>${symbol.action}</p>
        <h3>Also searched as</h3>
        <p>${symbol.aliases.join(", ")}</p>
      </div>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter-type]");
  if (filter) {
    state[filter.dataset.filterType] = filter.dataset.filterValue;
    renderFilters();
    renderGrid();
    return;
  }

  const card = event.target.closest("[data-slug]");
  if (card) {
    const symbol = symbols.find((item) => item.slug === card.dataset.slug);
    state.selected = symbol.slug;
    renderDetail(symbol);
    detailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderGrid();
});

renderFilters();
renderGrid();
