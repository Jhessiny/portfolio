# 03 — Revla Case Study (new page)

## Goal

Net-new case study page for Revla (formerly WeClever) — the current fullstack project at Softo. This is the most directly relevant case study for the job search: a real AI product, real users, real outcomes, currently shipping.

## Scope

- New file: `src/pages/case-study/revla.astro`
- Update `src/data/projects.ts` — add Revla as a featured project with `case_study_slug: "revla"` and a real screenshot
- Update homepage / case-studies section to feature Revla as one of the Big 3
- Source screenshot — needs a clean dashboard shot, no PII

## Tasks

### A. Build the page

- [ ] Copy the structural template from `src/pages/case-study/collamap.astro` (the strongest existing case study). Reuse the section components (hero, scope, metrics, problem, approach, outcome).
- [ ] Page title: `REVLA — Conversation Intelligence Platform`
- [ ] Accent color: pick a color distinct from CollaMap's `#ffcb6b`. Suggested: cyan `#64ffda` or magenta `#ff5fa2`.

### B. Page content (paste-ready)

```markdown
# Revla (formerly WeClever) — Conversation Intelligence Platform

**Role:** Fullstack Engineer (via Softo)
**Period:** May 2025 – Present
**Stack:** React · TypeScript · Node.js · PostgreSQL · Unleash · AWS Lambda · [add the rest]
**Market:** Brazil
**Status:** Active · early-stage SaaS · first contract signed

## The product

SaaS dashboard for B2C teams. Analyzes client–attendant conversations to
anticipate risks (churn signals, complaints) and opportunities (upsell intent,
satisfaction) with AI. Turns reactive support audits into proactive operational
signal.

## My scope

End-to-end feature ownership across the stack — React/TypeScript on the
frontend, Node.js + PostgreSQL on the backend. Startup pace: 4–5 developers
shipping features in parallel, no dedicated analyst — I joined client discovery
sessions directly and used AI to bridge the analyst gap. Close collaboration
with DevOps on feature-flag infrastructure and Lambda integrations.

---

## Selected work

### Events & Alerts — built for platform usage, not just feature parity
**Problem:** Customers logged in, ran one audit, didn't come back. Retention
plateau, not an acquisition problem.
**Approach:** Designed and shipped end-to-end — backend event capture,
persistence schema, frontend surfaces that turn AI-detected signals into
proactive notifications. Operators stopped having to *check* the platform; the
platform started telling them what to look at.
**Outcome:** [placeholder — DAU/MAU change, alert open rate, retention uplift].

### Feature flag rollout with Unleash
**Problem:** Releases were all-or-nothing. Bad ship = full rollback. Slow
iteration on risky features.
**Approach:** Implemented Unleash end-to-end across frontend and backend,
partnering with DevOps on the infrastructure side. Designed the flag taxonomy
(release vs experiment vs ops) so flags didn't become permanent technical debt.
**Outcome:** Safer launches, per-customer feature gating, gradual rollout for
high-risk features.

### CSV conversation import — unlocking the first contract
**Problem:** Customer onboarding was manual — historical conversations had to be
hand-uploaded and triaged before any audit could start. Without an automated
path, the first contract wouldn't close.
**Approach:** Built the import end-to-end — upload UI, Node service to validate
and queue the work, AWS Lambda pipeline (parse → AI analysis → store), email
notification on completion.
**Outcome:** **Enabled the company's first signed contract.** Onboarding moved
from manual triage to a self-serve flow.

### Filling the analyst gap with AI-assisted discovery
**Problem:** No dedicated analyst on the team. Recurring gap between what
stakeholders described and what they actually needed.
**Approach:** Joined client discovery sessions directly. Used AI to compress
problem framing — synthesizing meeting notes into solution options, surfacing
edge cases, and pressure-testing assumptions before build. Built v0 POCs for
same-week visual alignment, presented tradeoffs and cost implications before
committing.
**Outcome:** Faster spec convergence, fewer mid-build pivots, no analyst hire
needed at the current stage.

---

## What I'd highlight

- **Feature ownership end-to-end.** Client meeting → POC → schema + API → UI →
  production. One person, one loop, no handoff seams.
- **AI as analyst leverage, not just code leverage.** The team has no analyst —
  I close that gap by using AI for problem framing and discovery, not just for
  implementation.
- **Built for the business, not the ticket.** CSV import unlocked the first
  signed contract. Events/alerts were designed to move retention. Outcomes, not
  output.
```

### C. Update `src/data/projects.ts`

- [ ] Add Revla as the first featured project (or wherever the lead position is in the redesigned grid):

```ts
{
  title: "Revla",
  description:
    "Conversation intelligence dashboard for B2C teams — analyzes client–attendant chats to anticipate risks and opportunities with AI. Fullstack: React/TS, Node, Postgres, Unleash, AWS Lambda.",
  technologies:
    "React, TypeScript, Node.js, PostgreSQL, Unleash, AWS Lambda",
  img: "/assets/revla.png",
  githubRepo: "",
  deployLink: "",
  type: "fullstack-saas",
  status: "active",
  case_study_slug: "revla",
},
```

## Acceptance criteria

- [ ] `revla.astro` page renders with the structural sections (hero, scope, selected work, highlights)
- [ ] Page is responsive on mobile
- [ ] Unique screenshot at `/assets/revla.png` (not a placeholder reuse)
- [ ] Linked from the homepage Case Studies section as one of the Big 3
- [ ] All three metric placeholders filled in (Events/Alerts, Unleash, CSV import)
- [ ] Stack list completed (current `[add the rest]` placeholder resolved)

## Placeholders to fill

- **Stack** — complete the list: state mgmt, testing, ORM, build tooling, anything else used day-to-day
- **Three metrics:**
  - Events/Alerts — DAU/MAU change, alert open rate, retention uplift (any of these)
  - CSV import — onboarding time before/after (e.g., "3 days → 20 min")
  - Unleash — number of features behind flags, any prod-incident-avoided story
- **Screenshot** — clean dashboard shot, no PII, no client conversation data

## Open questions

- Does Revla as a named client/product have any contractual constraint on public mention from Softo's side? Confirm before publishing.
- Should the homepage card link to the case study OR to a live demo? Currently no public demo — link to case study.
