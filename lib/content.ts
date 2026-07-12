export const email = "michalschneedorfer@gmail.com";

export const socials = [
  { label: "github/schneedorfer", href: "https://github.com/schneedorfer" },
  {
    label: "linkedin/michal-schneedorfer",
    href: "https://www.linkedin.com/in/michal-schneedorfer",
  },
];

export const navLinks = [
  { label: "01_work", href: "#work" },
  { label: "02_exp", href: "#exp" },
  { label: "03_skills", href: "#skills" },
  { label: "04_about", href: "#about" },
];

export const metrics = [
  { label: "years_shipping", value: "4+" },
  { label: "english", value: "C1 fluent" },
  { label: "daily_us_overlap", value: "4+ hrs" },
  { label: "education", value: "MSc CS" },
];

export type Project = {
  number: string;
  title: string;
  client: string;
  description: string;
  metric: string;
  stack?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Skoala",
    client: "Česká spořitelna",
    description:
      "Interactive financial-literacy platform. Real-time interactive presentations over WebSockets, a custom slide-based CMS with live preview, and the public blog/newsfeed with an editorial workflow for non-technical staff.",
    metric: "18,500+ users · 3,700+ schools",
    stack: "Next.js / Nest.js / React / WebSockets",
  },
  {
    number: "02",
    title: "Log Management Platform",
    client: "enterprise",
    description:
      "Core visual graph builder for log flows — routing, transformations, collection, n8n-style — plus a dynamic form engine rendering complex forms from backend JSON Schema.",
    metric: "~2× faster than estimate",
    stack: "React / React Flow / TanStack / Go",
  },
  {
    number: "03",
    title: "Projector",
    client: "internal AI",
    description:
      "AI estimation tool for the sales team. Built the RAG pipeline on Gemini File Search with custom chunking + metadata tagging, and an MCP server exposing the app's features to clients like Claude Code.",
    metric: "RAG + MCP server",
    stack: "Next.js / Hono / Firebase / Gemini",
  },
  {
    number: "04",
    title: "VOGT Ultrasonics",
    client: "weld inspection",
    description:
      "Rewrite of a legacy weld-inspection product with improved UX and AI-supported inspections. Rebuilt the tablet inspection app including a real-time probe-alignment tool, plus the manager platform — graphs, tables, tablet configuration, and a visual test-plan editor.",
    metric: "AI-supported inspections",
  },
];

export const experience = [
  {
    role: "Fullstack Developer · Applifting",
    summary:
      "Skoala, log management, Projector, VOGT Ultrasonics. Kickstarted a client marketplace solo.",
    dates: ["Sep 2023 — Present", "Prague, CZ"],
  },
  {
    role: "Frontend Developer · inQool",
    summary:
      "Admin systems for Charles University; tools for an energy distributor. Class→hooks migration, TypeScript, early Tailwind adopter.",
    dates: ["Aug 2021 — Jan 2023", "Brno, CZ"],
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Hono",
  "tRPC",
  "GraphQL",
  "PostgreSQL",
  "Drizzle",
  "Docker",
  "AWS",
];

export const workflow = [
  "keyboard-driven Neovim workflow",
  "parallel Claude Code agents",
  "isolated git worktrees (Worktrunk)",
  "per-worktree Tmux sessions",
];

export const languages = [
  { name: "English", level: "Fluent (C1)" },
  { name: "Czech", level: "Native" },
];
