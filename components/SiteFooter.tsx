import Link from "next/link";
import { SITE_NAME, SITE_TITLE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{SITE_NAME}</strong>
        <p>Common car dashboard symbols, warning light meanings, urgency levels, and first checks for drivers.</p>
      </div>
      <nav aria-label="Footer links">
        <a href="/#symbolGrid">Symbols</a>
        <a href="/#guides">Guides</a>
        <a href="/#scenarios">Scenarios</a>
        <a href="/#faq">FAQ</a>
        <Link href="/about/">About</Link>
        <Link href="/disclaimer/">Disclaimer</Link>
      </nav>
      <p className="footer-note">
        Always confirm dashboard warnings with your owner&apos;s manual.{" "}
        <Link href="/about/">How we review guides</Link>
        {" · "}
        Feedback: <a href="mailto:470427826@qq.com">470427826@qq.com</a>. © 2026 {SITE_TITLE}.
      </p>
    </footer>
  );
}
