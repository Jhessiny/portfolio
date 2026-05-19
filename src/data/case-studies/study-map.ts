export const metrics = [
  { value: "4", label: "Architecture Layers", detail: "Clean Architecture adapted for frontend" },
  { value: "6wk", label: "MVP Timeline", detail: "Phased delivery across 4 milestones" },
  { value: "React 19", label: "Framework", detail: "Latest React with concurrent features" },
  { value: "100%", label: "TypeScript", detail: "End-to-end type safety" },
];

export const layers = [
  {
    name: "Domain",
    description: "Business entities and repository interfaces. Framework-agnostic core that defines what a Concept, Resource, and Question look like.",
    color: "#64ffda",
  },
  {
    name: "Application",
    description: "Use cases and business logic. Operations like creating a concept, attaching a resource, or voting on a question live here.",
    color: "#4dd8b4",
  },
  {
    name: "Infrastructure",
    description: "Supabase implementations and factories. Concrete adapters that fulfill repository interfaces against the real database.",
    color: "#00b4d8",
  },
  {
    name: "Presentation",
    description: "React components, pages, and hooks. The UI layer that consumes use cases and renders the interactive canvas experience.",
    color: "#a78bfa",
  },
];

export const phases = [
  {
    phase: "Phase 1",
    title: "Core Platform",
    weeks: "Weeks 1-3",
    items: ["Visual knowledge map with zoom navigation", "Concept CRUD operations", "User authentication & profiles", "Routing & navigation"],
  },
  {
    phase: "Phase 2",
    title: "Content Layer",
    weeks: "Weeks 4-5",
    items: ["Learning objectives per concept", "Resource attachments (files, links)", "PDF preview & video embeds", "Rich text editing"],
  },
  {
    phase: "Phase 3",
    title: "Community",
    weeks: "Weeks 6-7",
    items: ["Question board functionality", "Community voting system", "Question filtering & sorting"],
  },
  {
    phase: "Phase 4",
    title: "Discovery",
    weeks: "Week 8",
    items: ["Global search", "Mobile responsive design", "Performance optimization"],
  },
];

export const stack = [
  { name: "React 19", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "Vite", category: "tooling" },
  { name: "React Flow", category: "canvas" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "shadcn/ui", category: "components" },
  { name: "TanStack Query", category: "data" },
  { name: "Supabase", category: "backend" },
  { name: "React Router v6", category: "routing" },
  { name: "Vercel", category: "deploy" },
];

export const decisions = [
  {
    title: "Vite over Next.js",
    text: "Authentication-gated app means no SEO benefit from SSR. Vite's instant HMR enables faster iteration on the interactive canvas experience.",
  },
  {
    title: "React Flow for Canvas",
    text: "Out-of-the-box zoom/pan, performant with large node counts, and a React-native API — superior to a custom D3.js implementation for this use case.",
  },
  {
    title: "Supabase as Backend",
    text: "Consolidates auth, PostgreSQL, real-time, and file storage in one platform — eliminating weeks of backend work to prioritize product differentiation.",
  },
  {
    title: "Clean Architecture",
    text: "Decouples business logic from framework code. Supabase could be swapped for Firebase without touching a single use case or component.",
  },
];
