import { email, navLinks } from "@/lib/content";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-nav-rule bg-background">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-[18px] md:px-12">
        <a href="#" className="font-mono text-sm font-semibold tracking-tight">
          michal.dev
        </a>
        <div className="flex items-center gap-5 md:gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[12.5px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <a
            href={`mailto:${email}`}
            className="border border-strong px-[13px] py-[7px] font-mono text-[12.5px] font-medium"
          >
            → email
          </a>
        </div>
      </div>
    </header>
  );
}
