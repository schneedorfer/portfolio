import { email, socials } from "@/lib/content";
import { SectionLabel } from "@/components/site/section-label";

export function Contact() {
  return (
    <section>
      <div className="mx-auto max-w-[1160px] px-5 py-[72px] md:px-12">
        <SectionLabel>06 — contact</SectionLabel>
        <h2 className="max-w-[760px] text-[32px] font-semibold tracking-[-0.03em] md:text-[44px]">
          Available for remote roles &amp; B2B contracts.
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3.5">
          <a
            href={`mailto:${email}`}
            className="bg-primary px-[22px] py-[13px] font-mono text-sm font-medium text-primary-foreground"
          >
            {email}
          </a>
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            className="font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            download_cv ↓
          </a>
        </div>
      </div>
    </section>
  );
}
