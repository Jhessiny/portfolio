export const features = [
  {
    stage: "01",
    title: "Persona-anchored product design",
    problem:
      "Easy to build a generic CRM. Hard to build the right one for a solo lawyer with intermediate tech skills, no admin staff, and an iPhone as primary work device.",
    approach:
      "Defined a small persona set with one primary — Sulivan, a composite drawn from real solo lawyers. Sulivan anchors scope decisions: would he use this on a Tuesday between hearings? Cut features that didn't pass. Secondary personas catch edge cases without diluting the build.",
    outcome:
      "PRD through v0.4. Scope discipline. No feature creep into 'enterprise' patterns the actual user doesn't need.",
    accent,
  },
  {
    stage: "02",
    title: "WhatsApp + Meta integration (current focus)",
    problem:
      "Brazilian solo lawyers run their entire client intake through WhatsApp. A CRM that lives outside WhatsApp is invisible.",
    approach:
      "Building end-to-end integration with the Meta Business platform — pulling WhatsApp conversations into the dashboard with proper threading, contact resolution, and inbound webhook handling. Architectural decision: WhatsApp gateway is a separate concern from the core CRM, isolated as its own module.",
    outcome:
      "In progress. End-to-end conversation flow is the unlock for v1.",
    accent: "#64ffda",
  },
  {
    stage: "03",
    title: "One-click conversation-to-case",
    problem:
      "Lead capture and case management live in separate tools today. Lawyers re-key the same information across WhatsApp, spreadsheet, and case-management software.",
    approach:
      "Single action in the conversation view promotes a chat to an open case — contact data flows through, tagging propagates, conversation history attaches as the first case note.",
    outcome:
      "Signature product moment. Tested with prototype users for friction.",
    accent: "#ffcb6b",
  },
  {
    stage: "04",
    title: "From vibe-coded prototype to production v1",
    problem:
      "The first build was a vibe-coded prototype — shipped fast with AI to validate the product hypothesis with real users, not to scale. Validation done; v1 needs production foundations.",
    approach:
      "Greenfield rebuild on React 19 + Vite + TanStack Query + Tailwind 4 + Radix primitives, alongside a parallel backend rewrite (Spring Boot 4, hexagonal architecture, modular monolith). Architectural input from the consumer side — what the frontend could rely on and what had to stay isolated.",
    outcome:
      "Both sides on stacks designed to outlive v1. Frontend ready for the WhatsApp/Meta integration without legacy carry-over.",
    accent: "#ff5fa2",
  },
];

export const stack = [
  { name: "React 19", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "Vite", category: "build" },
  { name: "TanStack Query", category: "frontend" },
  { name: "Tailwind 4", category: "frontend" },
  { name: "Radix UI", category: "frontend" },
  { name: "Spring Boot 4", category: "backend" },
  { name: "Java 25", category: "language" },
  { name: "Spring Modulith", category: "backend" },
  { name: "PostgreSQL 16", category: "database" },
  { name: "Flyway", category: "database" },
  { name: "Testcontainers", category: "testing" },
];

export const highlights = [
  {
    title: "Domain expertise → product judgment",
    text: "Law background isn't decorative. It shapes problem framing, scope cuts, and user-fit decisions that generic-CRM thinking doesn't reach.",
  },
  {
    title: "Co-founder ownership",
    text: "PRD through v0.4, persona set defined, architecture documented, early-access landing live. Built like a real product because it is one.",
  },
  {
    title: "AI at the right scale",
    text: "Vibe-coded the validation prototype in days to test the hypothesis with real users. Replanned and rebuilt v1 deliberately — hexagonal backend, modern React stack, production foundations. AI for execution speed; engineering judgment for what to build and how to last.",
  },
  {
    title: "Modern stack, deliberate choices",
    text: "React 19, Vite, TanStack Query on the frontend; Spring Modulith and hexagonal architecture on the backend. Every dependency justified — no churn for novelty.",
  },
];
