"use client";

import Link from "next/link";

export function NavLogo() {
  return (
    <Link
      href="/"
      className="font-mono text-sm font-semibold tracking-tight"
      onClick={(e) => {
        e.preventDefault();
        // scrollTo's default behavior follows the CSS scroll-behavior,
        // so this stays smooth and respects prefers-reduced-motion
        window.scrollTo({ top: 0 });
        history.replaceState(null, "", "/");
      }}
    >
      michal.dev
    </Link>
  );
}
