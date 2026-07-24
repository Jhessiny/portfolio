# 04 — Vegajus Case Study (new page)

## Goal

Net-new case study page for Vegajus (formerly Hades) — the co-founded legal-tech SaaS. Different shape than Revla: this is a founder play, not a client engagement. The case study sells product judgment + ownership + domain fit.

## Scope

- New file: `src/pages/case-study/vegajus.astro`
- Update `src/data/projects.ts` — add Vegajus as a featured project with `case_study_slug: "vegajus"` and a real screenshot
- Update homepage to feature Vegajus as one of the Big 3
- Source screenshot — needs the actual app UI (not a logo/wordmark)

## Tasks

### A. Build the page

- [ ] Copy the structural template from `collamap.astro`. Reuse hero, scope, problem, approach, outcome.
- [ ] Page title: `VEGAJUS — Legal-Tech SaaS for Solo Lawyers`
- [ ] Accent color: pick a color distinct from CollaMap (`#ffcb6b`) and Revla. Suggested: a deep purple or amber to evoke legal/professional rather than tech-cyan.

### B. Page content (paste-ready)

```markdown
# Vegajus — Legal-Tech SaaS for Solo Lawyers

**Role:** Co-founder · Frontend & Product Lead
**Period:** [start date] – Present
**Stack:** React 19 · TypeScript · Vite · TanStack Query · Tailwind 4 · Radix · Spring Boot 4 · PostgreSQL · Spring Modulith
**Market:** Brazil · PT-BR product
**Status:** Pre-launch · Early access landing live · [link]

## The product

CRM + WhatsApp automation + Meta Ads management for Brazilian solo lawyers and
1–10 person firms. Captures leads from Meta Ads, runs the client conversation
inside WhatsApp, and converts a chat into an open case with one click. Replaces
a stack of disconnected tools (spreadsheet + WhatsApp Business + manual data
entry) with a single workflow.

## Why this, why us

I trained as a lawyer before moving into tech. My co-founder (husband) leads the
backend. The product exists because the gap between what legal SaaS sells and
what a solo lawyer actually needs day-to-day is enormous — most tools in the
Brazilian market either over-target large firms or under-build for the small
ones. We're building for the user neither side serves.

## My scope

End-to-end product and frontend ownership: PRD, persona work, scope cuts, UX
flows, frontend architecture, and the production React/TS codebase. My
co-founder owns backend (Spring Boot, hexagonal, modular monolith). I sit
between the user's reality and the architecture decisions that make the product
real.

---

## Selected work

### Persona-anchored product design
**Problem:** Easy to build a generic CRM. Hard to build the right one for a solo
lawyer with intermediate tech skills, no admin staff, and an iPhone as primary
work device.
**Approach:** Defined a small persona set with one primary — *Sulivan*, a
composite drawn from real solo lawyers. Sulivan anchors scope decisions: would
he use this on a Tuesday between hearings? Cut features that didn't pass.
Secondary personas catch edge cases without diluting the build.
**Outcome:** PRD through v0.4. Scope discipline. No feature creep into
"enterprise" patterns the actual user doesn't need.

### WhatsApp + Meta integration (current focus)
**Problem:** Brazilian solo lawyers run their entire client intake through
WhatsApp. A CRM that lives outside WhatsApp is invisible.
**Approach:** Building end-to-end integration with the Meta Business platform —
pulling WhatsApp conversations into the dashboard with proper threading, contact
resolution, and inbound webhook handling. Architectural decision: WhatsApp
gateway is a separate concern from the core CRM, isolated as its own module.
**Status:** In progress. End-to-end conversation flow is the unlock for v1.

### One-click conversation-to-case
**Problem:** Lead capture and case management live in separate tools today.
Lawyers re-key the same information across WhatsApp, spreadsheet, and
case-management software.
**Approach:** Single action in the conversation view promotes a chat to an open
case — contact data flows through, tagging propagates, conversation history
attaches as the first case note.
**Outcome:** Signature product moment. Tested with prototype users for friction.

### From vibe-coded prototype to production v1
**Problem:** The first build was a vibe-coded prototype — shipped fast with AI
to validate the product hypothesis with real users, not to scale. Validation
done; v1 needs production foundations.
**Approach:** Greenfield rebuild on React 19 + Vite + TanStack Query + Tailwind 4
+ Radix primitives, alongside a parallel backend rewrite (Spring Boot 4,
hexagonal architecture, modular monolith). Architectural input from the consumer
side — what the frontend could rely on and what had to stay isolated.
**Outcome:** Both sides on stacks designed to outlive v1. Frontend ready for the
WhatsApp/Meta integration without legacy carry-over.

---

## What I'd highlight

- **Domain expertise → product judgment.** Law background isn't decorative. It
  shapes problem framing, scope cuts, and user-fit decisions.
- **Co-founder ownership, not a side project.** PRD through v0.4, persona set
  defined, architecture documented, early-access landing live. Built like a real
  product because it is one.
- **AI at the right scale.** Vibe-coded the validation prototype in days to test
  the hypothesis with real users. Replanned and rebuilt v1 deliberately —
  hexagonal backend, modern React stack, production foundations. AI for
  execution speed; engineering judgment for what to build and how to last.
- **Modern stack, deliberate choices.** React 19, Vite, TanStack Query, Tailwind
  4 on the frontend; Spring Modulith and hexagonal architecture on the backend.
  Every dependency justified — no churn for novelty.

[**Early access →** link] · [demo video] · [architecture write-up]
```

### C. Update `src/data/projects.ts`

- [ ] Add Vegajus as a featured project:

```ts
{
  title: "Vegajus",
  description:
    "Legal-tech SaaS for Brazilian solo lawyers — CRM + WhatsApp automation + Meta Ads. Co-founded; I lead frontend and product. React 19, TanStack Query, Spring Boot backend.",
  technologies:
    "React 19, TypeScript, Vite, TanStack Query, Tailwind 4, Radix, Spring Boot, PostgreSQL",
  img: "/assets/vegajus.png",
  githubRepo: "",
  deployLink: "[early-access landing URL]",
  type: "co-founded-saas",
  status: "pre-launch",
  case_study_slug: "vegajus",
},
```

## Acceptance criteria

- [ ] `vegajus.astro` page renders with the structural sections
- [ ] Page is responsive on mobile
- [ ] Unique screenshot at `/assets/vegajus.png` (real app UI, not logo)
- [ ] Linked from homepage Case Studies section as one of the Big 3
- [ ] Period start date is set (placeholder resolved)
- [ ] Early-access landing link is live and linked from the CTA row
- [ ] PT-BR / Brazil market is surfaced in the header (not hidden)

## Placeholders to fill

- **Period start date** — when did Vegajus (as a product, not the backend rewrite) become a real bet? Pick the meaningful "since" date.
- **Early-access landing URL** — depends on landing page being live (separate work item).
- **Demo video link** — optional; can be filled after copy ships.
- **Architecture write-up link** — points to one of the vault docs (e.g., `Projects/vegajus/architecture-modular-monolith-path.md`) or a public Notion / GitHub README.

## Open questions

- **PT-BR app, English portfolio.** Should the demo video include English voiceover/subtitles, or accept that the recruiter sees a PT-BR UI in a screenshot and we rely on the case-study prose to carry the story? Default: subtitles in EN if/when video ships.
- **Is "Vegajus" the final product name?** Or could it change again before launch? Memory says yes as of 2026-05-17.
- **Husband mentioned by role only ("co-founder leads backend") or by name?** Default: by role only — keeps the focus on the product, not the family relationship.
