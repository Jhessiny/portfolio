export const metrics = [
  { value: "5", label: "Pipeline Steps", detail: "Wizard → Generate → Pay → Export → Implement" },
  { value: "6+", label: "Generated Assets", detail: "Palette, typography, components, agent prompt" },
  { value: "1", label: "Stripe Integration", detail: "One-time payment, not subscription" },
  { value: "∞", label: "Agent Prompts", detail: "Claude Code / Cursor ready instructions" },
];

export const pipeline = [
  {
    stage: "01",
    title: "Brand Wizard",
    description: "Guided input collection: brand name, industry, values, color preferences, personality traits. Structured with Zod validation.",
    filter: "Captures brand DNA",
    cost: "Free",
    color: "#64ffda",
  },
  {
    stage: "02",
    title: "AI Generation",
    description: "Anthropic SDK generates a complete DesignSystem object — palette with semantic tokens, typography scale, component configurations, spacing system.",
    filter: "Full system in ~8 seconds",
    cost: "Free",
    color: "#00b4d8",
  },
  {
    stage: "03",
    title: "Preview & Playground",
    description: "Live component playground with palette swapping. Users see their design system applied to real UI components before paying — building confidence in the output.",
    filter: "Builds purchase intent",
    cost: "Free",
    color: "#c792ea",
  },
  {
    stage: "04",
    title: "Stripe Paywall",
    description: "One-time payment (not subscription) gates the export. localStorage persists state across the Stripe redirect — no server-side session needed.",
    filter: "Conversion point",
    cost: "$",
    color: "#ffcb6b",
  },
  {
    stage: "05",
    title: "Export & Agent Prompt",
    description: "Full design system export plus a generated prompt that instructs Claude Code or Cursor to implement the system. The most original feature.",
    filter: "Implementation-ready output",
    cost: "Paid",
    color: "#ff8a65",
  },
];

export const decisions = [
  {
    title: "One-Time Payment vs Subscription",
    description: "A design system is a one-time deliverable, not an ongoing service. Subscription would create churn pressure that doesn't match the product's value delivery pattern.",
  },
  {
    title: "localStorage for Stripe State",
    description: "After Stripe redirect, the app needs to know what was purchased. localStorage persistence avoids server-side session complexity — pragmatic for a solo-built product.",
  },
  {
    title: "DesignSystem Object Structure",
    description: "A single, deeply typed object holds the entire system — palette, typography, components, spacing. This makes AI generation reliable and export straightforward.",
  },
];

export const stack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "Anthropic SDK",
  "Stripe",
  "Zod",
  "next-intl",
];

export const learnings = [
  {
    title: "Product Funnel Design",
    text: "The wizard-to-paywall-to-dashboard flow is a product pattern, not just a UI pattern. Each step builds perceived value before asking for payment.",
  },
  {
    title: "Stripe Integration Pragmatics",
    text: "Stripe's redirect flow is simple in theory, complex in practice. localStorage state persistence was the pragmatic solution over server sessions.",
  },
  {
    title: "AI Generation Reliability",
    text: "Generating a deeply typed DesignSystem object from AI requires careful prompt engineering and Zod validation. The AI is creative; the schema is strict.",
  },
  {
    title: "UX as Differentiator",
    text: "The live component playground with palette swapping isn't technically complex — but it's the feature that makes users trust the output enough to pay.",
  },
];
