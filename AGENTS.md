# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Purpose

Personal portfolio for Michal Schneedorfer (fullstack developer). Its goal: land a remote job — preferably with a US company at $125k+/year. Every design and copy decision should serve that: polished, professional, and geared toward recruiters/hiring managers skimming quickly.

# Content

`docs/cv.md` is the source of truth for all portfolio content (extracted from `public/cv.pdf`). Don't invent facts — pull from it. Omit the old portfolio URL it references.

# Design

- **The implemented code is the visual source of truth** — tokens in `app/globals.css`, components in `components/site/`. The site has evolved past the original mockup; don't "fix" the code back toward it.
- The Claude Design mockup was the v1 starting point, kept for historical reference only: https://claude.ai/design/p/5dd39402-a826-4e24-b96e-999a7b6bb8cb?file=Portfolio.dc.html (readable via DesignSync `get_file`, projectId `5dd39402-a826-4e24-b96e-999a7b6bb8cb`, path `Portfolio.dc.html`).
- `docs/wireframe.md` documents that v1 mockup — still useful for layout intent, but where it disagrees with the code, the code wins.

# Conventions

- Use shadcn/ui components where possible (Base UI primitives, not Radix). Add missing ones with `pnpm dlx shadcn add <name>`.
- Tailwind CSS v4 (CSS-based config in `app/globals.css`), theme tokens already set up.
- Package manager: pnpm.
