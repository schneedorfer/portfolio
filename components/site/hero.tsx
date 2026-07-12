import { VimEditor } from "@/components/site/vim-editor";

export function Hero() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1160px] px-5 pt-20 pb-16 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-12">
          <div>
            <p className="mb-6 font-mono text-[12.5px] text-muted-foreground">
              {"// fullstack developer · react · next.js · node.js"}
            </p>
            <h1 className="text-[40px] leading-[1.02] font-semibold tracking-[-0.04em] md:text-[64px]">
              Michal Schneedorfer
            </h1>
            <p className="mt-3 text-[22px] leading-[1.2] font-medium tracking-[-0.02em] text-fg2 md:text-[28px]">
              Building production web apps end-to-end.
            </p>
            <p className="mt-7 max-w-[560px] text-[17px] leading-[1.6] text-fg2">
              5+ years shipping for enterprise and startup clients —
              architecture to delivery, solo or embedded in cross-functional
              teams. Comfortable as the sole engineer, and a mentor in larger
              ones.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border border-strong px-5 py-[18px]">
              <p className="font-mono text-[11.5px] text-muted-foreground">
                {"// availability"}
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-[13.5px] font-medium">
                <span
                  aria-hidden
                  className="size-[7px] rounded-full bg-accent-green motion-safe:animate-pulse"
                />
                Remote B2B · 4+ hrs US overlap
              </p>
            </div>
            <VimEditor />
          </div>
        </div>
      </div>
    </section>
  );
}
