export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Dashboard Warning Light Finder</strong>
        <p>Common car dashboard symbols, warning light meanings, urgency levels, and first checks for drivers.</p>
      </div>
      <nav aria-label="Footer links">
        <a href="/#symbolGrid">Symbols</a>
        <a href="/#searchInput">Search</a>
        <a href="/#faq">FAQ</a>
        <a href="/#scenarios">Scenarios</a>
        <a href="/about/">About</a>
        <a href="/disclaimer/">Disclaimer</a>
      </nav>
      <p className="footer-note">
        Always confirm dashboard warnings with your owner&apos;s manual. Feedback: <a href="mailto:470427826@qq.com">470427826@qq.com</a>. © 2026 Car Dashboard Symbols and Meanings.
      </p>
    </footer>
  );
}
