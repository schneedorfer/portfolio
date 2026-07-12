"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

import { vimEditor } from "@/lib/content";
import { cn } from "@/lib/utils";

type Frame = {
  value: string;
  cursor: number;
  mode: "NORMAL" | "INSERT";
  keys: string;
  cmd: string;
  dirty: boolean;
  blink: boolean;
  ms: number;
};

// Fixed jitter table — typing rhythm must be deterministic so server and
// client render identical frames (no Math.random()).
const JITTER = [20, -10, 35, 0, -15, 25, 5, -20, 30, -5];

function buildFrames(): Frame[] {
  const { edit, savedMessage } = vimEditor;
  const frames: Frame[] = [
    {
      value: edit.value,
      cursor: edit.value.length - 1,
      mode: "NORMAL",
      keys: "",
      cmd: "",
      dirty: false,
      blink: true,
      ms: 4500,
    },
  ];
  const push = (partial: Partial<Frame>) => {
    frames.push({
      ...frames[frames.length - 1],
      keys: "",
      cmd: "",
      blink: false,
      ...partial,
    });
  };
  const type = (text: string, baseMs: number) => {
    for (let k = 1; k <= text.length; k++) {
      push({
        value: text.slice(0, k),
        cursor: k,
        ms: baseMs + JITTER[k % JITTER.length],
      });
    }
  };
  const changeInsideQuotes = () => {
    push({ keys: "c", ms: 160 });
    push({ keys: "ci", ms: 160 });
    push({ keys: 'ci"', ms: 240 });
    push({ value: "", cursor: 0, mode: "INSERT", dirty: true, ms: 420 });
  };

  changeInsideQuotes();
  type(edit.tease, 90);
  push({ mode: "NORMAL", cursor: edit.tease.length - 1, keys: "Esc", ms: 350 });
  push({ blink: true, ms: 900 });
  changeInsideQuotes();
  type(edit.value, 80);
  push({ ms: 300 });
  push({ mode: "NORMAL", cursor: edit.value.length - 1, keys: "Esc", ms: 400 });
  push({ cmd: ":", ms: 180 });
  push({ cmd: ":w", ms: 320 });
  push({ cmd: savedMessage, dirty: false, ms: 1400 });
  return frames;
}

const FRAMES = buildFrames();

function Punct({ children }: { children: React.ReactNode }) {
  return <span className="text-muted-foreground">{children}</span>;
}

function LineNumber({ n }: { n: number }) {
  return (
    <span className="mr-3 inline-block w-[2ch] text-right text-muted-foreground/60">
      {n}
    </span>
  );
}

function EditLine({ frame, n }: { frame: Frame; n: number }) {
  const chars = (frame.value + '"').split("");
  return (
    <div>
      <LineNumber n={n} />
      <Punct>{'  "'}</Punct>
      <span className="text-fg2">{vimEditor.edit.key}</span>
      <Punct>{'": "'}</Punct>
      {chars.map((ch, i) => {
        // transition-none opts out of the global theme-fade transition —
        // a vim cursor jumps, it doesn't trail
        const color =
          i === chars.length - 1 ? "text-muted-foreground" : "text-accent-green";
        if (i === frame.cursor && frame.blink) {
          // blink the inverted block as an overlay so the character
          // underneath stays visible while the cursor is "off"
          return (
            <span key={i} className={cn("relative transition-none", color)}>
              {ch}
              <span className="absolute inset-0 flex items-center justify-center bg-foreground leading-none text-background transition-none motion-safe:animate-caret-blink">
                {ch}
              </span>
            </span>
          );
        }
        return (
          <span
            key={i}
            className={cn(
              "transition-none",
              color,
              i === frame.cursor && "bg-foreground text-background",
            )}
          >
            {ch}
          </span>
        );
      })}
    </div>
  );
}

export function VimEditor() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const reducedMotion = useReducedMotion();
  const playing = inView && !reducedMotion;
  const [frameIndex, setFrameIndex] = useState(0);

  if (!playing && frameIndex !== 0) {
    setFrameIndex(0);
  }

  useEffect(() => {
    if (!playing) {
      return;
    }
    const timeout = setTimeout(
      () => setFrameIndex((i) => (i + 1) % FRAMES.length),
      FRAMES[frameIndex].ms,
    );
    return () => clearTimeout(timeout);
  }, [playing, frameIndex]);

  const frame = FRAMES[frameIndex];
  const statusText =
    frame.cmd || (frame.mode === "INSERT" ? "-- INSERT --" : "NORMAL");
  const statusClass = frame.cmd
    ? "text-fg2"
    : frame.mode === "INSERT"
      ? "text-accent-green"
      : "text-muted-foreground";

  return (
    <div
      ref={ref}
      aria-hidden
      className="overflow-hidden border border-strong font-mono select-none"
    >
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2 text-[11.5px] text-muted-foreground">
        <span>{`// nvim · ${vimEditor.filename}`}</span>
        <span className={cn("text-fg2", !frame.dirty && "invisible")}>
          [+]
        </span>
      </div>
      <div className="px-4 py-3 text-[12.5px] leading-[1.8] whitespace-pre">
        <div>
          <LineNumber n={1} />
          <Punct>{"{"}</Punct>
        </div>
        {vimEditor.entries.map((entry, i) => (
          <div key={entry.key}>
            <LineNumber n={i + 2} />
            <Punct>{'  "'}</Punct>
            <span className="text-fg2">{entry.key}</span>
            <Punct>{'": "'}</Punct>
            <span>{entry.value}</span>
            <Punct>{'",'}</Punct>
          </div>
        ))}
        <EditLine frame={frame} n={vimEditor.entries.length + 2} />
        <div>
          <LineNumber n={vimEditor.entries.length + 3} />
          <Punct>{"}"}</Punct>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-hairline px-4 py-1.5 text-[11px]">
        <span className="grid">
          <AnimatePresence initial={false}>
            <motion.span
              key={statusText}
              className={cn(
                "col-start-1 row-start-1 whitespace-pre",
                statusClass,
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              {statusText}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="text-muted-foreground">{frame.keys}</span>
      </div>
    </div>
  );
}
