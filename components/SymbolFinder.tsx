"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { colorLabels, guideLinks, symbols, type DashboardSymbol, type SymbolColor } from "@/lib/symbols";
import { SymbolIcon } from "@/components/SymbolIcon";

type FilterColor = "all" | SymbolColor;

export function SymbolFinder() {
  const [color, setColor] = useState<FilterColor>("all");
  const [system, setSystem] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<DashboardSymbol | null>(null);

  const systems = useMemo(() => ["all", ...Array.from(new Set(symbols.map((item) => item.system))).sort()], []);
  const items = useMemo(() => {
    const search = query.trim().toLowerCase();
    return symbols.filter((symbol) => {
      const matchesColor = color === "all" || symbol.color === color;
      const matchesSystem = system === "all" || symbol.system === system;
      const haystack = [
        symbol.name,
        symbol.system,
        symbol.color,
        symbol.meaning,
        symbol.canDrive,
        symbol.action,
        ...symbol.aliases
      ].join(" ").toLowerCase();
      return matchesColor && matchesSystem && (!search || haystack.includes(search));
    });
  }, [color, query, system]);

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

  return (
    <>
      <section className="finder" aria-label="Dashboard symbol search">
        <div className="search-row">
          <label className="search-box">
            <span>Search symbol</span>
            <span className="search-control">
              <input
                id="searchInput"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try: oil, tyre, exclamation, engine, squiggly lines"
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
      </section>

      <section className="symbol-grid" id="symbolGrid" aria-label="Dashboard symbols">
        {items.map((symbol) => (
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
              <span className="symbol-meaning">{symbol.meaning}</span>
              <span className="meta-row">
                <span className="pill">{symbol.color}</span>
                <span className="pill">{symbol.system}</span>
              </span>
            </span>
          </button>
        ))}
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
            </div>
            <div>
              <h2 id="detailTitle">{selected.name}</h2>
              <p>{selected.meaning}</p>
              <div className="detail-facts">
                <div className="fact"><span>Color</span><strong>{colorLabels[selected.color]}</strong></div>
                <div className="fact"><span>System</span><strong>{selected.system}</strong></div>
                <div className="fact"><span>Can you drive?</span><strong>{selected.canDrive}</strong></div>
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
