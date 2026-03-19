"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-3 sm:h-14 sm:px-4">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <Logo />
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-muted sm:inline font-sans">
            The Best Tools. Period.
          </span>
          <Link
            href="/about"
            className="text-[10px] text-muted hover:text-orange sm:text-xs font-sans"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
