import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-2 text-xs text-muted">
              The Best Tools. Period. Curated for tradespeople who demand quality.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Categories
            </h4>
            <div className="space-y-1">
              {["Power Tools", "Hand Tools", "Heavy Equipment", "Automotive", "Woodworking"].map((cat) => (
                <Link
                  key={cat}
                  href="/"
                  className="block text-sm text-muted hover:text-orange"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              More
            </h4>
            <div className="space-y-1">
              {["Welding & Fab", "Electrical", "Plumbing & HVAC", "Safety & PPE", "Cool & Unusual"].map((cat) => (
                <Link
                  key={cat}
                  href="/"
                  className="block text-sm text-muted hover:text-orange"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Legal
            </h4>
            <div className="space-y-1">
              <Link href="/about" className="block text-sm text-muted hover:text-orange">About</Link>
              <Link href="/privacy" className="block text-sm text-muted hover:text-orange">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-muted hover:text-orange">Terms of Service</Link>
              <Link href="/disclaimer" className="block text-sm text-muted hover:text-orange">Disclaimer</Link>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-[8px] tracking-[0.3em] text-border/60 select-none uppercase font-bold">
          the best tools. period.
        </p>
        <div className="mt-4 border-t border-border pt-6 text-center text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} ToolExecutive.com. All product names, logos, and
            brands are property of their respective owners.
          </p>
          <p className="mt-1">
            As an Amazon Associate, we earn from qualifying purchases. See our{" "}
            <Link href="/disclaimer" className="text-orange hover:underline">disclaimer</Link> for details.
          </p>
        </div>
      </div>
    </footer>
  );
}
