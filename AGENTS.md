# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Purpose

Personal portfolio for Michal Schneedorfer (fullstack developer). Its goal: land a remote job — preferably with a US company at $125k+/year. Every design and copy decision should serve that: polished, professional, and geared toward recruiters/hiring managers skimming quickly.

# Content

`docs/cv.md` is the source of truth for all portfolio content (extracted from `public/cv.pdf`). Don't invent facts — pull from it. Omit the old portfolio URL it references.

# Design

- Visual source of truth is the Claude Design mockup: https://claude.ai/design/p/5dd39402-a826-4e24-b96e-999a7b6bb8cb?file=Portfolio.dc.html (read it with the DesignSync tool: `get_file`, projectId `5dd39402-a826-4e24-b96e-999a7b6bb8cb`, path `Portfolio.dc.html`).
- `docs/wireframe.md` documents the mockup's structure, tokens, and responsive rules — consult it before building or changing UI.

# Conventions

- Use shadcn/ui components where possible (Base UI primitives, not Radix). Add missing ones with `pnpm dlx shadcn add <name>`.
- Tailwind CSS v4 (CSS-based config in `app/globals.css`), theme tokens already set up.
- Package manager: pnpm.
