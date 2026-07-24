# 01 — Homepage Changes

## Goal

Make the portfolio homepage open with the positioning that differentiates Jhéssiny — engineer-owns-the-thinking — so the case studies below land in the right frame.

## Scope

- New `HowIWork.astro` section component
- `src/sections/Introduction.astro` — hero micro-bio tightening (drop "Who am I" feel, keep 2-3 lines max)
- `src/data/experiences.ts` — split current Softo entry into CollaMap (2022–2025) + Revla (May 2025–Present)
- `src/pages/index.astro` — wire the new section between hero and featured projects

## Tasks

### A. Build the "How I Work" section

- [ ] Create `src/sections/HowIWork.astro` using the cyberpunk styling tokens (mono headings, scanline divider, `--accent` cyan)
- [ ] Section copy (final):

```
# How I Work

AI commoditized typing. It did not commoditize engineering.

## The engineer owns the thinking.
Understanding the problem. Exploring the solution space. Choosing the architecture.
Weighing performance and cost. Designing the guardrails that catch regressions
before users do. None of that gets delegated. AI accelerates the keystrokes,
not the judgment.

## Hidden decision debt is real.
Skipped judgment surfaces later as spec drift, performance regressions, and
untraceable bugs. I keep decisions explicit so the debt stays visible.

## Coherent output ≠ correct output.
LLMs are probabilistic compilers — they optimize for coherence, not correctness.
Verification is structural: tests, types, guardrails. Not vibe-based.

## Workflow is method, not ritual.
The tools change. The agents change. The pipelines get renamed.
What stays constant is who's accountable for the result.

---

The signature I sign on the work is the judgment behind it.
That's the part worth paying for.
```

- [ ] Visual treatment: mono font for the four pillar headings, terminal-style `>` glyph on the opener (optional), scanline divider between pillars.
- [ ] Wire into `index.astro` directly under hero, before Featured Projects.

### B. Tighten the hero / Introduction section

- [ ] Reduce any standalone "About me" prose to **2–3 lines max** in the hero. No standalone About section below the hero.
- [ ] Keep career-arc and current-focus signal in the hero. Move long-form bio content to the `/api/me` endpoints (already exists).

### C. Split the Softo experience entry

Edit `src/data/experiences.ts` — replace the single Softo entry with two:

```ts
{
  role: "Fullstack Engineer · fullstack on current project",
  company: "SOFTO — Revla",
  period: "May 2025 — Current",
  current: true,
  description: [
    "Fullstack engineer on Revla, a conversation intelligence SaaS for B2C teams — React/TypeScript frontend, Node.js + PostgreSQL backend.",
    "Implemented Unleash feature flag rollout end-to-end across frontend and backend; partnered with DevOps on infrastructure side.",
    "Built CSV conversation import end-to-end (upload UI → Node service → AWS Lambda pipeline → email notification) — the feature that unlocked the company's first signed contract.",
    "Designed and shipped the events + alerts system to surface AI-detected signals proactively, addressing platform retention.",
    "Joined client discovery sessions directly; used AI to bridge the analyst gap on a 4–5 dev team with no dedicated analyst.",
  ],
},
{
  role: "Frontend Engineer",
  company: "SOFTO — CollaMap",
  period: "Feb 2022 — 2025",
  current: false,
  description: [
    "Main frontend engineer on CollaMap, a multi-tenant scientific knowledge platform — team of 1 backend, 2 frontend (I led FE), 1 QA, shared DevOps — for 3 years.",
    "Diagnosed low platform retention through user engagement analysis (Microsoft Clarity), proposed an AI-driven research discovery feature, and built a full-stack POC in 4 days — a 3-stage novelty detection system at $0.17/run with 66% cost optimization. Shipped to production.",
    "Presented architecture, user flow, and cost projections directly to the client.",
    "Reduced time-to-interactive by 60% on the canvas home screen through code splitting, virtualization, memoization, and image lazy-loading (Lighthouse, before/after).",
    "Built and maintained a custom rich-text editor for research note authoring with per-tenant configuration.",
    "Onboarded the second frontend engineer; led FE technical decisions in cross-functional meetings; conducted ~5 hiring interviews.",
  ],
},
```

Earlier entries (Ame Digital, Munddi, Freelancer) stay as-is.

## Acceptance criteria

- [ ] "How I Work" section visible between hero and Featured Projects, mobile-responsive
- [ ] Hero micro-bio is 2–3 lines or shorter — no standalone About section below the hero
- [ ] Work-experience timeline shows two distinct Softo entries (Revla current, CollaMap 2022–2025)
- [ ] Lighthouse score on the home page does not regress from current baseline

## Placeholders to fill

- None — copy is final. Visual treatment is a code-level decision.

## Open questions

- Do you want a "How I Work" deep-dive page (`/how-i-work`) with the Decision Quadrant grid and expanded examples? Defer until after the main redesign ships.
