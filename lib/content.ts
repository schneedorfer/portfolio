export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://michal.dev";

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
  { label: "products_shipped", value: "7+" },
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
    client: "Česká spořitelna (largest Czech bank)",
    description:
      "Interactive financial-literacy platform used in 3,700+ schools. Real-time interactive presentations over WebSockets, a custom slide-based CMS with live preview, and the public blog/newsfeed with an editorial workflow for non-technical staff.",
    metric: "18,500+ users · ~65% of Czech schools",
    stack: "Next.js / Nest.js / React / WebSockets",
  },
  {
    number: "02",
    title: "Log Management Platform",
    client: "enterprise client",
    description:
      "Core visual graph builder for log flows — routing, transformations, collection, n8n-style — plus a dynamic form engine rendering complex forms from backend JSON Schema. Drove a spec-driven, AI-assisted workflow that shipped features ~2× faster than estimated.",
    metric: "~2× faster than estimate",
    stack: "React / React Flow / TanStack / Go",
  },
  {
    number: "03",
    title: "Projector",
    client: "internal AI tool",
    description:
      "AI tool the sales team uses to speed up project estimations, feature breakdowns, client briefs, and team setup. Built the file-indexing and RAG pipeline on Gemini File Search — custom chunking and metadata tagging control what feeds the AI.",
    metric: "MCP server for Claude Code",
    stack: "Next.js / Hono / Firebase / Gemini",
  },
  {
    number: "04",
    title: "Weld Inspection Platform",
    client: "VOGT Ultrasonics",
    description:
      "Rewrite of a legacy weld-inspection product with improved UX and AI-supported inspections. Rebuilt the tablet inspection app including a real-time probe-alignment tool, plus the manager platform — graphs, tables, tablet configuration, and a visual test-plan editor.",
    metric: "AI-supported inspections",
  },
  {
    number: "05",
    title: "Tiny House Marketplace",
    client: "startup client",
    description:
      "Kickstarted a client's tiny house & land marketplace as the sole developer; the product has since grown into a multi-person team.",
    metric: "solo → multi-person team",
    stack: "Next.js / Strapi CMS",
  },
];

export const experience = [
  {
    role: "Fullstack Developer · Applifting",
    summary:
      "Fullstack across banking education, enterprise log management, internal AI tooling, and industrial inspection — kickstarted a client marketplace solo. Mentor within teams; client demos, security audits, architecture discussions, and talks at company-hosted public events.",
    dates: ["Sep 2023 — Present", "Prague, CZ"],
  },
  {
    role: "Frontend Developer · inQool",
    summary:
      "Admin systems for Charles University — document management, ID cards with a payment gateway. Data visualizations (maps, heatmaps, charts) and complex filtered tables for an energy distributor. Often the sole developer; modernized legacy React with hooks and TypeScript, early Tailwind adopter.",
    dates: ["Aug 2021 — Jan 2023", "Brno, CZ"],
  },
];

export const skillGroups = [
  {
    label: "core",
    skills: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    label: "backend & data",
    skills: [
      "Nest.js",
      "Hono",
      "tRPC",
      "GraphQL",
      "WebSockets",
      "PostgreSQL",
      "Drizzle",
    ],
  },
  {
    label: "ai",
    skills: ["RAG pipelines", "MCP servers", "Claude Code", "Gemini"],
  },
  {
    label: "testing & devops",
    skills: ["Playwright", "Vitest", "Docker", "AWS", "CI/CD"],
  },
];

export const workflow = [
  "keyboard-driven Neovim workflow",
  "parallel Claude Code agents",
  "isolated git worktrees (Worktrunk)",
  "per-worktree Tmux sessions",
  "spec-driven, AI-assisted development",
];

export const languages = [
  { name: "English", level: "Fluent (C1)" },
  { name: "Czech", level: "Native" },
];
