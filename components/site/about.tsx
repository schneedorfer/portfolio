import { languages } from "@/lib/content";
import { SectionLabel } from "@/components/site/section-label";

export function About() {
  return (
    <section id="about" className="scroll-mt-[70px] border-b border-hairline">
      <div className="mx-auto max-w-[1160px] px-5 py-16 md:px-12">
        <SectionLabel>05 / about</SectionLabel>
        <div className="grid gap-8 md:grid-cols-[1fr_340px] md:gap-12">
          <p className="max-w-[640px] text-base leading-[1.7] text-fg2">
            MSc in Software Engineering from Masaryk University. During my
            bachelor&apos;s there I finished in the top 9% of students and
            earned a merit scholarship. Outside client work I like trying new
            tools, frameworks and ways of working.
          </p>
          <div className="border border-chip-border p-5">
            <p className="mb-2.5 font-mono text-[11.5px] text-muted-foreground">
              {"// languages"}
            </p>
            <p className="text-sm leading-[1.7]">
              {languages.map((language) => (
                <span key={language.name} className="block">
                  <strong>{language.name}</strong>{" "}
                  <span className="text-muted-foreground">·</span>{" "}
                  {language.level}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
