import { metrics } from "@/lib/content";

export function Metrics() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-px bg-hairline min-[900px]:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-background px-6 py-7 md:px-10">
            <p className="font-mono text-[11px] text-muted-foreground">
              {metric.label}
            </p>
            <p className="mt-1 text-[32px] font-semibold tracking-[-0.02em]">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
