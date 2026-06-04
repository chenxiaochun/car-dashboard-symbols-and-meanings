import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "../styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://car-dashboard-symbols-and-meanings.vercel.app"),
  title: {
    default: "Car Dashboard Symbols and Meanings | Warning Light Finder",
    template: "%s | Car Dashboard Symbols and Meanings"
  },
  description: "Find car dashboard symbols and meanings by color, system, or warning name. Learn what red, amber, green, and blue dashboard lights mean, whether you can keep driving, and what to check first.",
  openGraph: {
    title: "Car Dashboard Symbols and Meanings",
    description: "Search common dashboard warning lights by symbol, color, and system. Check urgency, driving safety, and first steps.",
    url: "/",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body id="top">
        {children}
        <a className="back-to-top" href="#top" aria-label="Back to top">
          <span aria-hidden="true">↑</span>
        </a>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-PCCZ38ZV1P"} />
      </body>
    </html>
  );
}
