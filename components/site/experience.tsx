import { experience } from "@/lib/content";
import { SectionLabel } from "@/components/site/section-label";

export function Experience() {
  return (
    <section id="exp" className="scroll-mt-[70px] border-b border-hairline">
      <div className="mx-auto max-w-[1160px] px-5 py-16 md:px-12">
        <SectionLabel>02 / experience</SectionLabel>
        {experience.map((job) => (
          <div
            key={job.role}
            className="grid gap-3 pb-7 not-last:border-b not-last:border-hairline2 not-first:pt-7 sm:grid-cols-[56px_1fr] sm:gap-6"
          >
            <p
              aria-hidden
              className="hidden font-mono font-medium text-muted-foreground opacity-55 sm:block"
            >
              ▸
            </p>
            <div className="grid gap-2 md:grid-cols-[1fr_200px] md:gap-6">
              <div>
                <h3 className="text-base font-semibold">{job.role}</h3>
                <p className="mt-[5px] text-sm leading-[1.55] text-fg2">
                  {job.summary}
                </p>
              </div>
              <p className="font-mono text-xs leading-[1.7] text-muted-foreground md:text-right">
                {job.dates[0]}
                <br />
                {job.dates[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
