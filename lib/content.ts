export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://michal.dev";

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
  { label: "years_shipping", value: "5+" },
  { label: "english", value: "C1 fluent" },
  { label: "products_shipped", value: "9+" },
  { label: "education", value: "MSc CS" },
];

export const featuredProject = {
  title: "creavu",
  tagline: "my own product · live in production",
  description:
    "A platform where creators sell posts, files and video from a single page, as one-off purchases or monthly memberships. Buyers pay with just an email, no account needed. I built it on my own, from product spec to production.",
  highlights: [
    "Payments and creator payouts with Stripe Connect",
    "Paid video that only buyers can play, via signed streams",
    "Guest checkout: the purchase creates the account",
    "Czech and English, prices in CZK, EUR or USD",
  ],
  metric: "built and run solo · live with real payments",
  stack: "Next.js / Hono / Drizzle / Postgres / Stripe Connect / Better Auth / Turborepo",
  links: [{ label: "creavu.co ↗", href: "https://creavu.co" }],
};

export type Project = {
  number: string;
  title: string;
  client: string;
  description: string;
  metric: string;
  stack?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Skoala",
    client: "Česká spořitelna (largest Czech bank)",
    description:
      "A financial literacy platform used in 3,700+ Czech schools. I built live interactive presentations over WebSockets, a slide-based CMS with live preview, and the public blog with a publishing workflow for non-technical editors.",
    metric: "18,500+ users · ~65% of Czech schools",
    stack: "Next.js / Nest.js / React / Payload / WebSockets",
    links: [
      { label: "skoala.cz ↗", href: "https://skoala.cz/" },
      { label: "blog ↗", href: "https://skoala.cz/blog" },
    ],
  },
  {
    number: "02",
    title: "Log Management Platform",
    client: "enterprise client",
    description:
      "An enterprise tool for collecting, routing and transforming logs. I built the visual editor for log flows (similar to n8n) and a form engine that renders complex forms from backend JSON Schema. I also introduced a spec-driven, AI-assisted workflow that shipped features about 2× faster than estimated.",
    metric: "~2× faster than estimate",
    stack: "React / React Flow / TanStack / Go",
  },
  {
    number: "03",
    title: "Projector",
    client: "internal AI tool",
    description:
      "An internal AI tool that helps the sales team estimate projects, break down features and write client briefs. I built the file indexing and RAG pipeline on Gemini File Search, with custom chunking and metadata to control what the AI sees, plus an MCP server so Claude Code can use the app.",
    metric: "MCP server for Claude Code",
    stack: "Next.js / Hono / Firebase / Gemini",
  },
  {
    number: "04",
    title: "Weld Inspection Platform",
    client: "VOGT Ultrasonics",
    description:
      "A rewrite of a legacy weld inspection product, with better UX and AI-assisted inspections. I rebuilt the tablet app, including a real-time probe alignment tool, and the manager platform for reviewing results, configuring tablets and designing test plans visually.",
    metric: "AI-supported inspections",
    stack: "React / TanStack / Canvas",
    links: [
      {
        label: "vsm-technologies.com ↗",
        href: "https://vsm-technologies.com/en/home-en/",
      },
    ],
  },
  {
    number: "05",
    title: "Tiny House Marketplace",
    client: "startup client",
    description:
      "I started a client's marketplace for tiny houses and land as the only developer. The product has since grown and now has a full team behind it.",
    metric: "solo → multi-person team",
    stack: "Next.js / Strapi CMS",
  },
];

export type PersonalProject = {
  title: string;
  description: string;
  stack: string;
  href: string;
};

export const personalProjects: PersonalProject[] = [
  {
    title: "WASM Ludo",
    description:
      "A real-time multiplayer ludo game written fully in Rust. Yew frontend compiled to WebAssembly, Actix backend, WebSockets in between.",
    stack: "Rust / Yew / Actix / WebAssembly",
    href: "https://github.com/schneedorfer/wasm-ludo",
  },
  {
    title: "Overload",
    description:
      "A mobile app for tracking workouts. Build training templates, follow them, and see your history and stats.",
    stack: "React Native / Expo / tRPC / Node.js",
    href: "https://github.com/schneedorfer/overload",
  },
];

export const experience = [
  {
    role: "Fullstack Developer · Applifting",
    summary:
      "Fullstack work for banking education, enterprise log management, internal AI tools and industrial inspection. Started a client marketplace on my own. I mentor teammates, run client demos, take part in security audits and architecture decisions, and give talks at public company events.",
    dates: ["Sep 2023 → Present", "Prague, CZ"],
  },
  {
    role: "Frontend Developer · inQool",
    summary:
      "Admin systems for Charles University, including document management and student ID cards with online payments. Maps, heatmaps, charts and filterable tables for an energy distributor. Often the only developer on a project. Moved legacy React apps to hooks and TypeScript and adopted Tailwind early.",
    dates: ["Aug 2021 → Jan 2023", "Brno, CZ"],
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
    label: "ai workflow",
    skills: [
      "Claude Code",
      "Parallel agents",
      "Git worktrees (Worktrunk)",
      "Tmux",
      "MCP servers",
      "Spec-driven dev",
    ],
  },
  {
    label: "testing & devops",
    skills: ["Playwright", "Vitest", "Docker", "AWS", "CI/CD"],
  },
];

export const dotfiles = {
  label: "schneedorfer/.dotfiles",
  href: "https://github.com/schneedorfer/.dotfiles",
};

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

export const vimEditor = {
  filename: "offer.json",
  entries: [
    { key: "name", value: "michal" },
    { key: "role", value: "fullstack_dev" },
  ],
  edit: { key: "team", tease: "???", value: "your_company" },
  savedMessage: '"offer.json" written',
} as const;
