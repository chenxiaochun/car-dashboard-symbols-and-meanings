"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PrintButton({ children }: Props) {
  return (
    <button type="button" onClick={() => window.print()}>
      {children}
    </button>
  );
}
