export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export interface StackGroup {
  label: string;
  color: string;
  items: TechItem[];
}

export interface Language {
  lang: string;
  level: string;
  pct: number;
}

export const stackGroups: StackGroup[] = [
  {
    label: "Frontend",
    color: "#64ffda",
    items: [
      { name: "React", icon: "Re", color: "#61dafb" },
      { name: "TypeScript", icon: "TS", color: "#3178c6" },
      { name: "Next.js", icon: "N↗", color: "#ffffff" },
      { name: "Vite", icon: "Vi", color: "#646cff" },
      { name: "Redux / Zustand", icon: "Rx", color: "#764abc" },
      { name: "TanStack Query", icon: "TQ", color: "#ef4444" },
      { name: "React Hook Form", icon: "⊟", color: "#ec5990" },
      { name: "Zod", icon: "Zd", color: "#3068b7" },
      { name: "Tailwind", icon: "TW", color: "#38bdf8" },
      { name: "shadcn/ui", icon: "UI", color: "#ffffff" },
    ],
  },
  {
    label: "Testing",
    color: "#00b4d8",
    items: [
      { name: "Jest", icon: "Jt", color: "#c21325" },
      { name: "Cypress", icon: "Cy", color: "#17202c" },
      { name: "Vitest", icon: "Vi", color: "#6e9f18" },
      { name: "Testing Library", icon: "TL", color: "#e33332" },
    ],
  },
  {
    label: "Backend & Infra",
    color: "#4a9eff",
    items: [
      { name: "Node.js", icon: "No", color: "#68a063" },
      { name: "Python", icon: "Py", color: "#3776ab" },
      { name: "FastAPI", icon: "FA", color: "#009688" },
      { name: "PostgreSQL", icon: "Pg", color: "#336791" },
      { name: "Prisma", icon: "Pr", color: "#2d3748" },
      { name: "Redis", icon: "Rd", color: "#dc382d" },
      { name: "Stripe", icon: "St", color: "#635bff" },
      { name: "Docker", icon: "🐳", color: "#0db7ed" },
      { name: "Supabase", icon: "SB", color: "#3ecf8e" },
    ],
  },
  {
    label: "AI / LLM",
    color: "#c47aff",
    items: [
      { name: "Claude API", icon: "◈", color: "#c47aff" },
      { name: "Anthropic SDK", icon: "An", color: "#d4a574" },
      { name: "Prompt Engineering", icon: "PE", color: "#f0a6ca" },
      { name: "Structured AI Output", icon: "SO", color: "#e0aaff" },
      { name: "RAG Pipelines", icon: "RG", color: "#b8c0ff" },
      { name: "Embeddings", icon: "Em", color: "#a3b18a" },
      { name: "pgvector", icon: "Pv", color: "#336791" },
      { name: "Claude Code", icon: "CC", color: "#c47aff" },
      { name: "Cursor", icon: "Cu", color: "#00e5ff" },
      { name: "V0", icon: "V0", color: "#ffffff" },
    ],
  },
];

export const languages: Language[] = [
  { lang: "Portuguese", level: "Native", pct: 100 },
  { lang: "English", level: "Fluent", pct: 92 },
  { lang: "French", level: "Advanced", pct: 75 },
];
