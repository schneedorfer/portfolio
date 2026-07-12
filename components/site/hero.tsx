export function Hero() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1160px] px-5 pt-20 pb-16 md:px-12">
        <p className="mb-6 font-mono text-[12.5px] text-muted-foreground">
          {"// fullstack developer · react · next.js · node.js"}
        </p>
        <h1 className="max-w-[900px] text-[40px] leading-[1.02] font-semibold tracking-[-0.04em] md:text-[64px]">
          Michal Schneedorfer builds production web apps end-to-end.
        </h1>
        <div className="mt-7 grid gap-8 md:grid-cols-[1fr_340px] md:items-end md:gap-12">
          <p className="max-w-[560px] text-[17px] leading-[1.6] text-fg2">
            4+ years shipping for enterprise and startup clients — architecture
            to delivery, solo or embedded in cross-functional teams.
            Comfortable as the sole engineer, and a mentor in larger ones.
          </p>
          <div className="border border-strong px-5 py-[18px]">
            <p className="font-mono text-[11.5px] text-muted-foreground">
              {"// availability"}
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-[13.5px] font-medium">
              <span className="size-[7px] rounded-full bg-accent-green motion-safe:animate-pulse" />
              Remote B2B · 4+ hrs US overlap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
