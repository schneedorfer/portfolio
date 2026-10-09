import { featuredProject, personalProjects, projects } from "@/lib/content";
import { SectionLabel } from "@/components/site/section-label";
import { Button } from "@/components/ui/button";

export function Work() {
  return (
    <section id="work" className="scroll-mt-[70px] border-b border-hairline">
      <div className="mx-auto max-w-[1160px] px-5 py-16 md:px-12">
        <SectionLabel>01 / selected_work</SectionLabel>
        <FeaturedProject />
        <p className="mt-14 font-mono text-[11.5px] text-muted-foreground">
          {"// client_work"}
        </p>
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
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="pt-9">
          <p className="mb-4 font-mono text-[11.5px] text-muted-foreground">
            {"// personal_projects"}
          </p>
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-6">
            {personalProjects.map((project) => (
              <div key={project.title}>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-[17px] font-semibold">{project.title}</h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    github ↗
                  </a>
                </div>
                <p className="mt-2 max-w-[480px] text-[14px] leading-[1.6] text-fg2">
                  {project.description}
                </p>
                <p className="mt-2.5 font-mono text-xs text-muted-foreground">
                  {project.stack}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  const project = featuredProject;
  return (
    <article className="border border-strong bg-chip-bg p-6 md:p-9">
      <p className="flex items-center gap-2 font-mono text-[11.5px] text-muted-foreground">
        <span
          aria-hidden
          className="size-[7px] rounded-full bg-accent-green motion-safe:animate-pulse"
        />
        {project.tagline}
      </p>
      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
        <div>
          <h3 className="flex items-center gap-3.5 text-[32px] leading-none font-semibold tracking-[-0.03em] md:text-[40px]">
            <CreavuIcon className="size-9 shrink-0 md:size-11" />
            {project.title}
          </h3>
          <p className="mt-4 max-w-[620px] text-[16px] leading-[1.6] text-fg2">
            {project.description}
          </p>
          <p className="mt-5 font-mono text-[15px] font-semibold">
            {project.metric}
          </p>
        </div>
        <ul className="grid content-start gap-2.5 font-mono text-[13px] leading-[1.6] text-fg2">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span aria-hidden className="text-accent-green">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-hairline2 pt-5">
        {project.links.map((link) => (
          <Button
            key={link.href}
            nativeButton={false}
            render={
              <a href={link.href} target="_blank" rel="noopener noreferrer" />
            }
          >
            {link.label}
          </Button>
        ))}
        <span className="font-mono text-xs text-muted-foreground">
          {project.stack}
        </span>
      </div>
    </article>
  );
}

// creavu's app icon (brand blue tile + mark), from creavu/branding/creavu-icon.png
function CreavuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className={className}>
      <rect width="64" height="64" fill="#1e56ea" />
      <path
        d="M38 8H20A12 12 0 0 0 8 20V44A12 12 0 0 0 20 56H44A12 12 0 0 0 56 44V26"
        stroke="#fff"
        strokeWidth="11"
        transform="translate(16 16) scale(0.5)"
      />
    </svg>
  );
}
