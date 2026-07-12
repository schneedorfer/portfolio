import { ImageResponse } from "next/og";

export const alt = "Michal Schneedorfer — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#fafafa",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#a1a1aa",
          }}
        >
          <div style={{ fontWeight: 600, color: "#fafafa" }}>michal.dev</div>
          <div>{"// fullstack developer · react · next.js · node.js"}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 58,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
          }}
        >
          <div>Michal Schneedorfer builds</div>
          <div>production web apps end-to-end.</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: 32,
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 9999,
                background: "#4ade80",
              }}
            />
            <div style={{ fontWeight: 500 }}>
              Remote B2B · 4+ hrs US overlap
            </div>
          </div>
          <div style={{ color: "#a1a1aa" }}>
            4+ years · C1 english · MSc CS
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
