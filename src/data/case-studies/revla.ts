export const features = [
  {
    stage: "01",
    title: "Events & Alerts — built for platform usage",
    problem:
      "Customers logged in, ran one audit, didn't come back. Retention plateau, not an acquisition problem.",
    approach:
      "Designed and shipped end-to-end — backend event capture, persistence schema, frontend surfaces that turn AI-detected signals into proactive notifications. Operators stopped having to check the platform; the platform started telling them what to look at.",
    outcome: "Active retention lever in production.",
    accent,
  },
  {
    stage: "02",
    title: "Feature flag rollout with Unleash",
    problem:
      "Releases were all-or-nothing. Bad ship = full rollback. Slow iteration on risky features.",
    approach:
      "Implemented Unleash end-to-end across frontend and backend, partnering with DevOps on the infrastructure side. Designed the flag taxonomy (release vs experiment vs ops) so flags didn't become permanent technical debt.",
    outcome: "Safer launches, per-customer feature gating, gradual rollout for high-risk features.",
    accent: "#64ffda",
  },
  {
    stage: "03",
    title: "CSV conversation import — unlocking the first contract",
    problem:
      "Customer onboarding was manual — historical conversations had to be hand-uploaded and triaged before any audit could start. Without an automated path, the first contract wouldn't close.",
    approach:
      "Built the import end-to-end — upload UI, Node service to validate and queue the work, AWS Lambda pipeline (parse → AI analysis → store), email notification on completion.",
    outcome: "Enabled the company's first signed contract. Onboarding moved from manual triage to a self-serve flow.",
    accent: "#ffcb6b",
  },
  {
    stage: "04",
    title: "Filling the analyst gap with AI",
    problem:
      "No dedicated analyst on the team. Recurring gap between what stakeholders described and what they actually needed.",
    approach:
      "Joined client discovery sessions directly. Used AI to compress problem framing — synthesizing meeting notes into solution options, surfacing edge cases, and pressure-testing assumptions before build. Built v0 POCs for same-week visual alignment, presented tradeoffs before committing.",
    outcome: "Faster spec convergence, fewer mid-build pivots, no analyst hire needed at the current stage.",
    accent: "#c792ea",
  },
];

export const stack = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "Node.js", category: "runtime" },
  { name: "PostgreSQL", category: "database" },
  { name: "Unleash", category: "infra" },
  { name: "AWS Lambda", category: "serverless" },
  { name: "v0", category: "tooling" },
];

export const highlights = [
  {
    title: "Feature ownership end-to-end",
    text: "Client meeting → POC → schema + API → UI → production. One person, one loop, no handoff seams.",
  },
  {
    title: "AI as analyst leverage",
    text: "The team has no analyst — I close that gap by using AI for problem framing and discovery, not just for implementation.",
  },
  {
    title: "Built for the business, not the ticket",
    text: "CSV import unlocked the first signed contract. Events/alerts were designed to move retention. Outcomes, not output.",
  },
];

export const live = { url: "https://revla.ai/", label: "Visit landing" };
