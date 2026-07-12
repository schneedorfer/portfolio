import { projects } from "@/lib/content";
import { SectionLabel } from "@/components/site/section-label";

export function Work() {
  return (
    <section id="work" className="scroll-mt-[70px] border-b border-hairline">
      <div className="mx-auto max-w-[1160px] px-5 py-16 md:px-12">
        <SectionLabel>01 — selected_work</SectionLabel>
        {projects.map((project) => (
          <div
            key={project.number}
            className="grid gap-3 pb-9 not-last:border-b not-last:border-hairline2 not-first:pt-9 sm:grid-cols-[56px_1fr] sm:gap-6"
          >
            <p className="font-mono text-[15px] font-medium text-muted-foreground opacity-55">
              {project.number}
            </p>
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-[22px] font-semibold">{project.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.client}
                </span>
              </div>
              <p className="mt-2.5 max-w-[680px] text-[15px] leading-[1.6] text-fg2">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-5">
                <span className="font-mono text-[15px] font-semibold">
                  {project.metric}
                </span>
                {project.stack && (
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.stack}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
