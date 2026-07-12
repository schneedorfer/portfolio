import { skills, workflow } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/site/section-label";

export function Skills() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto grid max-w-[1160px] md:grid-cols-2">
        <div
          id="skills"
          className="scroll-mt-[70px] px-5 pt-16 pb-10 md:border-r md:border-hairline md:px-12 md:pb-16"
        >
          <SectionLabel>03 — skills</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className={cn(
                  "border border-chip-border bg-chip-bg px-2.5 py-[5px] font-mono text-[12.5px] font-medium",
                  skill === "TypeScript" && "border-strong",
                )}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t border-hairline px-5 pt-10 pb-16 md:border-t-0 md:px-12 md:pt-16">
          <SectionLabel>04 — how_i_work</SectionLabel>
          <div className="font-mono text-[13px] leading-[1.9] text-fg2">
            <p>
              <span className="text-muted-foreground">$</span> nvim + tmux +
              claude-code
            </p>
            {workflow.map((item) => (
              <p key={item}>
                <span className="text-accent-green">✓</span> {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
