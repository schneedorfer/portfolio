# Website Wireframe (v1 mockup — historical)

> **Status: superseded.** This documents the original Claude Design mockup the site was built from:
> **https://claude.ai/design/p/5dd39402-a826-4e24-b96e-999a7b6bb8cb?file=Portfolio.dc.html**
> (readable via the DesignSync tool: `get_file` with projectId `5dd39402-a826-4e24-b96e-999a7b6bb8cb`, path `Portfolio.dc.html`)
>
> The implementation has since evolved past it (e.g. brighter dark-mode hairlines, a 5th work row, CV link in the nav, OG/SEO metadata). **The code is now the source of truth** — tokens in `app/globals.css`, components in `components/site/`. Where this document disagrees with the code, the code wins.

Content facts come from `docs/cv.md` — never invent copy.

## Design language

- **Aesthetic:** editorial/engineering. Sharp corners (no border radius), 1px hairline rules separating full-width sections, generous padding (48px horizontal, 64–80px vertical per section).
- **Fonts:** Geist (sans, headings + body), Geist Mono (all metadata: nav links, section labels, dates, tech tags, chips, the "how I work" block).
- **Mono conventions:** section labels are numbered `01 — selected_work` style; comment-style prefixes like `// availability`, `// languages`; snake_case labels (`years_shipping`, `daily_us_overlap`).
- **Theme:** dark by default, light available via a toggle in the nav (☾/☀).
- **Accent:** green, used only for the availability dot and ✓ marks — light: `#16a34a`, dark: `oklch(72% .17 155)`.
- **Color tokens (map to CSS vars in `app/globals.css`):**

  | token | light | dark |
  |---|---|---|
  | bg | `#ffffff` | `#09090b` |
  | fg | `#09090b` | `#fafafa` |
  | fg2 (body text) | `#3f3f46` | `#d4d4d8` |
  | muted | `#71717a` | `#a1a1aa` |
  | hairline | `#e9e9eb` | `#1c1c1f` |
  | hairline2 (inner rules) | `#f0f0f1` | `#18181b` |
  | strong border | `#18181b` | `#fafafa` |
  | chip bg / border | `#ffffff` / `#e4e4e7` | `#131316` / `#27272a` |
  | button bg / fg | `#18181b` / `#ffffff` | `#fafafa` / `#09090b` |

## Page structure (single page, top to bottom)

```
┌──────────────────────────────────────────────────────────────┐
│ NAV (sticky, strong bottom rule)                             │
│ michal.dev        01_work 02_exp 03_skills 04_about ☾ [→email]│
├──────────────────────────────────────────────────────────────┤
│ HERO                                                         │
│ // fullstack developer · react · next.js · node.js           │
│ H1 (64px): "Michal Schneedorfer builds production            │
│             web apps end-to-end."                            │
│ ┌ 2 cols (1fr / 340px, bottom-aligned) ──────────────────┐   │
│ │ intro paragraph (4+ yrs,        │ ┌ availability box ┐ │   │
│ │ solo or embedded, mentor)       │ │ // availability  │ │   │
│ │                                 │ │ ● Remote B2B ·   │ │   │
│ │                                 │ │ 4+ hrs US overlap│ │   │
│ └─────────────────────────────────┴──────────────────────┘   │
├──────────────────────────────────────────────────────────────┤
│ METRICS STRIP — 4 equal cells, hairline-divided              │
│ years_shipping │ english   │ daily_us_overlap │ education    │
│ 4+             │ C1 fluent │ 4+ hrs           │ MSc CS       │
├──────────────────────────────────────────────────────────────┤
│ 01 — selected_work   (#work)                                 │
│ Numbered list rows (56px number gutter / content), hairline  │
│ between rows. Each row:                                      │
│   01  Skoala  · Česká spořitelna        (title + client)     │
│       1-paragraph description (max-width ~680px)             │
│       18,500+ users · 3,700+ schools    Next.js / Nest.js /… │
│   02  Log Management Platform · enterprise                   │
│       … ~2× faster than estimate        React / React Flow /…│
│   03  Projector · internal AI                                │
│       … RAG + MCP server                Next.js / Hono /…    │
├──────────────────────────────────────────────────────────────┤
│ 02 — experience   (#exp)                                     │
│ Rows: ▸ gutter │ (role · company + 1-line summary │ dates &  │
│ location right-aligned in mono)                              │
│   Fullstack Developer · Applifting      Sep 2023 — Present   │
│   Frontend Developer · inQool           Aug 2021 — Jan 2023  │
├──────────────────────────────────────────────────────────────┤
│ 03 — skills (#skills)          │ 04 — how_i_work             │
│ (50/50 split, hairline rule)   │ terminal-style mono block:  │
│ mono chips: TypeScript (strong │ $ nvim + tmux + claude-code │
│ border), React, Next.js,       │ ✓ keyboard-driven Neovim    │
│ Node.js, Nest.js, Hono, tRPC,  │ ✓ parallel Claude Code      │
│ GraphQL, PostgreSQL, Drizzle,  │   agents                    │
│ Docker, AWS                    │ ✓ isolated git worktrees    │
│                                │ ✓ per-worktree Tmux sessions│
├──────────────────────────────────────────────────────────────┤
│ 05 — about   (#about)                                        │
│ 2 cols (1fr / 340px):                                        │
│ paragraph (end-to-end ownership,│ ┌ // languages ─────────┐  │
│ MSc top 9%, merit scholarship,  │ │ English — Fluent (C1) │  │
│ exploring modern tools)         │ │ Czech — Native        │  │
│                                 │ └───────────────────────┘  │
├──────────────────────────────────────────────────────────────┤
│ 06 — contact                                                 │
│ H2 (44px): "Available for remote roles & B2B contracts."     │
│ [michalschneedorfer@gmail.com]  github/schneedorfer          │
│  (solid button, mono)           linkedin/michal-schneedorfer │
└──────────────────────────────────────────────────────────────┘
```

## Interaction

- Sticky nav; anchor links scroll to sections (`scroll-margin-top: 70px` on targets).
- Theme toggle switches light/dark; persist choice and avoid flash-of-wrong-theme on load.
- Availability dot in the hero may pulse subtly; otherwise motion is minimal (fade-up on scroll at most, respect `prefers-reduced-motion`).

## Responsive (mockup is 1160px desktop; mobile is ours to define)

- Nav: collapse the numbered links behind a menu (or hide all but `→ email` + theme toggle) below ~768px; keep it one row.
- Hero: H1 scales down (~40px); the 2-col grid stacks — availability box below the paragraph, full width.
- Metrics strip: 4 cols → 2×2 grid below ~900px, 1 col optional at very narrow widths.
- Work/experience rows: number gutter shrinks or moves inline above the title; date column stacks under the summary, left-aligned.
- Skills/how-I-work split: stacks to one column.
- Horizontal padding: 48px → 20–24px on mobile.

## Additions beyond the mockup (agreed direction, still CV-sourced)

- Link `public/cv.pdf` (e.g. a "download CV" link in nav or contact) — the mockup omits it.
- GitHub/LinkedIn in the contact section should be real links, not plain text.
- The mockup shows 3 of 5 CV projects ("selected"); VOGT Ultrasonics and the tiny-house marketplace may be added as additional rows if the section needs more weight.
