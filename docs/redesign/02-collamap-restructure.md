# 02 — CollaMap Restructure

## Goal

Reframe the existing CollaMap page from "I built CollaMap in 4 days" (implicit) to "I was main FE on this 3-year project; the AI POC was one initiative I diagnosed and led." Preserve the strong visual architecture (pipeline viz, cost compare, funnel). Honesty + ownership without dropping the differentiated story.

## Scope

`src/pages/case-study/collamap.astro` — single-file edit, seven discrete changes.

## Tasks

### A. Hero rewrite

- [ ] Replace the `cs-hero__summary` paragraph with:

```
Multi-tenant research platform. I led the frontend for 3 years and diagnosed a
retention problem through engagement-data analysis — then shipped the response:
a 3-stage AI pipeline that discovers novel research topics at 66% cost reduction
over naive approaches. Built in 4 days, ran in production.
```

- [ ] Change the date pill (`cs-hero__date`) from `2024` to `2022 – 2025` (or `POC: 2024 · Role: 2022 – 2025` if there's horizontal room).

### B. New "My scope" section between hero and metrics strip

- [ ] Add a new `<section class="cs-section">` block with the label `[Role]` (or similar) and the following content:

```
Main frontend engineer on a small team — 1 backend, 2 frontend (I led FE),
1 QA, shared DevOps. Over 3 years I shipped an interactive canvas, a custom
rich-text editor, auth and multi-tenant scoping at the FE layer, and the AI
initiative this case study focuses on. Owned FE technical decisions, onboarded
the second frontend engineer, conducted ~5 hiring interviews.

Primary stack: React · TypeScript · Redux · RTK Query · Material UI · React
Hook Form. The POC below used Tailwind for build velocity over 4 days.
```

The Tailwind note prevents "why does the tech stack pill list disagree with the section header?" — and signals deliberate tool choice.

### C. New "Other featured work" section after Cost Analysis, before Tech Stack

- [ ] Add a new section with the label `[Other Work]`:

```
### Interactive canvas — TTI reduced 60%
The platform home was an interactive canvas — the heaviest screen in the app
and the first thing every user saw. Code splitting, virtualization,
memoization, and image lazy-loading brought time-to-interactive down 60% on
Lighthouse, measured before and after rollout.

### Custom rich-text editor
Built and maintained a custom RTE for research note authoring — handling
structured content, embedded references, and per-tenant configuration. Avoided
dropping in a third-party editor whose data model didn't fit the platform's
domain.
```

Visual treatment: same two-column or stacked block style as the rest of the page. No need for full Problem/Approach/Outcome structure — these are supporting context.

### D. New "Team & ownership" section before Learnings

- [ ] Add a new section with the label `[Team]`:

```
- Led frontend technical decisions in joint meetings with backend, QA, and DevOps.
- Onboarded the second frontend engineer through their first features.
- Conducted ~5 hiring interviews for frontend candidates.
- Owned PR review on the frontend codebase — patterns, testing, performance.
```

### E. Update the `stack` array

- [ ] Replace the `stack` array (line 64-72) with:

```ts
const stack = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "Redux", category: "frontend" },
  { name: "RTK Query", category: "frontend" },
  { name: "Material UI", category: "frontend" },
  { name: "React Hook Form", category: "frontend" },
  { name: "Node.js", category: "runtime" },
  { name: "PostgreSQL", category: "database" },
  { name: "Claude API", category: "ai" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "PubMed API", category: "integration" },
];
```

### F. Swap one learning for the principle-level one

- [ ] Replace **"POC Scope Discipline"** in the `learnings` array (line 88-91) with:

```ts
{
  title: "Cost is Architecture",
  text: "AI cost isn't a tuning problem solved by prompt tweaks — it's solved by deciding which model handles which shape of work. The 3-stage pipeline isn't optimization on top of the architecture. It is the architecture.",
},
```

This is the bullet that connects CollaMap to the "How I Work" section.

### G. Outcome section rewrite

- [ ] Change the outcome heading from `"Approved for production deployment"` to `"Shipped, running, validated"` (line 384-386).

- [ ] Replace the four `cs-outcome__point` blocks (line 388-403) with:

```html
<div class="cs-outcome__point">
  <span class="cs-outcome__check">&#x2713;</span>
  <span>Shipped to production · pipeline ran live</span>
</div>
<div class="cs-outcome__point">
  <span class="cs-outcome__check">&#x2713;</span>
  <span>Cost model validated at projected $0.17/run</span>
</div>
<div class="cs-outcome__point">
  <span class="cs-outcome__check">&#x2713;</span>
  <span>Pattern reusable for future AI features</span>
</div>
<div class="cs-outcome__point">
  <span class="cs-outcome__check">&#x2713;</span>
  <span>Reassigned to next priority project — CollaMap stable</span>
</div>
```

## Acceptance criteria

- [ ] Hero summary names the 3-year role and the diagnosis
- [ ] "My scope" section establishes team composition (1 BE + 2 FE + 1 QA + shared DevOps) and stack honesty (Tailwind for POC only)
- [ ] Two new featured-work blocks (Canvas TTI, Custom RTE) appear before Tech Stack
- [ ] Leadership block (4 bullets) appears before Learnings
- [ ] Stack pill list shows the full main-app stack
- [ ] "Cost is Architecture" learning replaces "POC Scope Discipline"
- [ ] Outcome section drops the soft adjectives ("impressed", "appreciated") in favor of concrete action verbs
- [ ] CollaMap pause is silent — no commentary on why dev stopped

## Placeholders to fill

- None — all copy is final.

## Open questions

- The CollaMap pause: confirm we want **zero** commentary, not even a neutral "project paused; team reassigned." Current plan: silent.
- Date format on the hero pill: `2022 – 2025` vs `POC: 2024 · Role: 2022 – 2025`. Pick based on horizontal space in design.
