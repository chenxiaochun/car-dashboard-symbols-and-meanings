"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { colorLabels, guideLinks, symbols, type DashboardSymbol, type SymbolColor } from "@/lib/symbols";
import {
  getShapeSearchText,
  shapeFilters,
  symbolShapeHints,
  symbolShapeTags,
  type ShapeFilterId
} from "@/lib/symbol-shapes";
import { SymbolIcon } from "@/components/SymbolIcon";

type FilterColor = "all" | SymbolColor;

function symbolHaystack(symbol: DashboardSymbol): string {
  return [
    symbol.name,
    symbol.system,
    symbol.color,
    symbol.meaning,
    symbol.canDrive,
    symbol.action,
    ...symbol.aliases,
    getShapeSearchText(symbol.slug)
  ]
    .join(" ")
    .toLowerCase();
}

function matchesShape(slug: string, shape: ShapeFilterId): boolean {
  if (shape === "all") return true;
  return symbolShapeTags[slug]?.includes(shape) ?? false;
}

export function SymbolFinder() {
  const [color, setColor] = useState<FilterColor>("all");
  const [system, setSystem] = useState("all");
  const [shape, setShape] = useState<ShapeFilterId>("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<DashboardSymbol | null>(null);

  const systems = useMemo(() => ["all", ...Array.from(new Set(symbols.map((item) => item.system))).sort()], []);
  const items = useMemo(() => {
    const search = query.trim().toLowerCase();
    return symbols.filter((symbol) => {
      const matchesColor = color === "all" || symbol.color === color;
      const matchesSystem = system === "all" || symbol.system === system;
      const matchesShapeFilter = matchesShape(symbol.slug, shape);
      const haystack = symbolHaystack(symbol);
      return matchesColor && matchesSystem && matchesShapeFilter && (!search || haystack.includes(search));
    });
  }, [color, query, shape, system]);

  useEffect(() => {
    document.body.classList.toggle("has-modal", selected !== null);
    return () => document.body.classList.remove("has-modal");
  }, [selected]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectedShapeHint = selected ? symbolShapeHints[selected.slug] : undefined;
  const activeFilters = [
    color !== "all" ? colorLabels[color] : null,
    shape !== "all" ? shapeFilters.find((item) => item.id === shape)?.label : null,
    system !== "all" ? system : null
  ].filter(Boolean);

  return (
    <>
      <section className="finder" aria-label="Dashboard symbol search">
        <div className="search-row">
          <label className="search-box">
            <span>Search by name or what it looks like</span>
            <span className="search-control">
              <input
                id="searchInput"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try: horseshoe, squiggly lines, oil can, exclamation, ABS, engine"
              />
              <button
                className="clear-search"
                type="button"
                aria-label="Clear search"
                hidden={query.length === 0}
                onClick={() => setQuery("")}
              >
                ×
              </button>
            </span>
          </label>
          <div className="result-count">{items.length} symbols</div>
        </div>

        <details className="filter-drawer">
          <summary>
            <span>Filters</span>
            <span className="filter-summary">{activeFilters.length > 0 ? activeFilters.join(" / ") : "All symbols"}</span>
          </summary>
          <div className="filters" aria-label="Filters">
            <div>
              <p>Color</p>
              <div className="chip-group">
                {(Object.keys(colorLabels) as FilterColor[]).map((item) => (
                  <button
                    className="chip"
                    type="button"
                    key={item}
                    aria-pressed={color === item}
                    onClick={() => setColor(item)}
                  >
                    {colorLabels[item]}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p>Shape on your dash</p>
              <div className="chip-group">
                {shapeFilters.map((item) => (
                  <button
                    className="chip"
                    type="button"
                    key={item.id}
                    aria-pressed={shape === item.id}
                    onClick={() => setShape(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p>System</p>
              <div className="chip-group">
                {systems.map((item) => (
                  <button
                    className="chip"
                    type="button"
                    key={item}
                    aria-pressed={system === item}
                    onClick={() => setSystem(item)}
                  >
                    {item === "all" ? "All systems" : item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </details>
      </section>

      <section className="symbol-grid" id="symbolGrid" aria-label="Dashboard symbols">
        {items.length === 0 ? (
          <p className="empty-results">
            No symbols match. Try another shape filter, a color, or search words like &quot;horseshoe&quot; or
            &quot;squiggly&quot;.
          </p>
        ) : (
          items.map((symbol) => {
            const shapeHint = symbolShapeHints[symbol.slug];
            return (
              <button
                className={`symbol-card${selected?.slug === symbol.slug ? " is-selected" : ""}`}
                type="button"
                key={symbol.slug}
                aria-pressed={selected?.slug === symbol.slug}
                onClick={() => setSelected(symbol)}
              >
                <span className="symbol-icon">
                  <SymbolIcon symbol={symbol} />
                </span>
                <span>
                  <strong className="symbol-name">{symbol.name}</strong>
                  {shapeHint && <span className="symbol-shape-hint">Often looks like: {shapeHint}</span>}
                  <span className="symbol-meaning">{symbol.meaning}</span>
                  <span className="meta-row">
                    <span className="pill">{symbol.color}</span>
                    <span className="pill">{symbol.system}</span>
                  </span>
                </span>
              </button>
            );
          })
        )}
      </section>

      {selected && (
        <section
          className="detail-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="detailTitle"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div className="detail-layout">
            <button className="detail-close" type="button" aria-label="Close details" onClick={() => setSelected(null)}>
              ×
            </button>
            <div className="detail-icon">
              <SymbolIcon symbol={selected} large />
              <p className="detail-icon-caption">Reference illustration only</p>
            </div>
            <div>
              <h2 id="detailTitle">{selected.name}</h2>
              <p className="detail-disclaimer">
                Your dashboard symbol may look different by make, model, and year. Use color and shape first; our icon
                is a general guide only.
              </p>
              {selectedShapeHint && (
                <>
                  <h3>What it often looks like on the dash</h3>
                  <p>{selectedShapeHint}</p>
                </>
              )}
              <p>{selected.meaning}</p>
              <div className="detail-facts">
                <div className="fact">
                  <span>Color</span>
                  <strong>{colorLabels[selected.color]}</strong>
                </div>
                <div className="fact">
                  <span>System</span>
                  <strong>{selected.system}</strong>
                </div>
                <div className="fact">
                  <span>Can you drive?</span>
                  <strong>{selected.canDrive}</strong>
                </div>
              </div>
              <h3>What to do first</h3>
              <p>{selected.action}</p>
              <h3>Also searched as</h3>
              <p>{selected.aliases.join(", ")}</p>
              {guideLinks[selected.slug] && (
                <Link className="full-guide-link" href={guideLinks[selected.slug]}>
                  Read full guide
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
