import { languages } from "@/lib/content";
import { SectionLabel } from "@/components/site/section-label";

export function About() {
  return (
    <section id="about" className="scroll-mt-[70px] border-b border-hairline">
      <div className="mx-auto max-w-[1160px] px-5 py-16 md:px-12">
        <SectionLabel>05 — about</SectionLabel>
        <div className="grid gap-8 md:grid-cols-[1fr_340px] md:gap-12">
          <p className="max-w-[640px] text-base leading-[1.7] text-fg2">
            I own features end-to-end and I&apos;m comfortable as the sole
            engineer on a product or as a mentor within a larger team. MSc in
            Software Engineering from Masaryk University — top 9% of my cohort,
            merit scholarship for outstanding students of the Faculty of
            Informatics. Always exploring modern tools, frameworks, and
            developer workflows.
          </p>
          <div className="border border-chip-border p-5">
            <p className="mb-2.5 font-mono text-[11.5px] text-muted-foreground">
              {"// languages"}
            </p>
            <p className="text-sm leading-[1.7]">
              {languages.map((language) => (
                <span key={language.name} className="block">
                  <strong>{language.name}</strong> — {language.level}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
