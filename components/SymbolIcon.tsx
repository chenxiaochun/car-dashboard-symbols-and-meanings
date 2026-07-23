import type { DashboardSymbol } from "@/lib/symbols";

type Props = {
  symbol: DashboardSymbol;
  large?: boolean;
};

export function SymbolIcon({ symbol, large = false }: Props) {
  return (
    <img
      className={`generated-symbol-image ${large ? "detail-svg" : "card-svg"}`}
      src={`/generated/symbols/${symbol.slug}.png`}
      alt={symbol.name}
      width={large ? 192 : 116}
      height={large ? 192 : 116}
    />
  );
}
