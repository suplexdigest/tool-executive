"use client";

import { useState } from "react";
import Link from "next/link";

export default function AffiliateDisclosure() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="border-b border-orange/20 bg-orange/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
        <p className="text-[10px] text-muted sm:text-xs">
          <span className="font-semibold text-orange">Affiliate Disclosure:</span>{" "}
          We earn commissions from qualifying purchases through our links at no extra cost to you.{" "}
          <Link href="/disclaimer" className="text-orange underline hover:text-orange-light">
            Learn more
          </Link>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 text-muted hover:text-foreground"
          aria-label="Dismiss"
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
