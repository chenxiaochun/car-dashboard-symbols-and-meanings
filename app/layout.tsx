import type { Metadata } from "next";
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
      <body>
        {children}
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-PCCZ38ZV1P"} />
      </body>
    </html>
  );
}
