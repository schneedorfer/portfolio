import { email, navLinks } from "@/lib/content";
import { NavLogo } from "@/components/site/nav-logo";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-nav-rule bg-background">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-[18px] md:px-12">
        <NavLogo />
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
          <a
            href="/cv.pdf"
            target="_blank"
            className="font-mono text-[12.5px] text-muted-foreground transition-colors hover:text-foreground"
          >
            ↓ cv
          </a>
          <ThemeToggle />
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href={`mailto:${email}`} />}
          >
            → email
          </Button>
        </div>
      </div>
    </header>
  );
}
