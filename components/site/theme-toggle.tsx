"use client";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <Button
      variant="chip"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => {
        const isDark = document.documentElement.classList.toggle("dark");
        try {
          localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch {}
      }}
    >
      <span aria-hidden className="dark:hidden">
        ☾
      </span>
      <span aria-hidden className="hidden dark:inline">
        ☀
      </span>
    </Button>
  );
}
