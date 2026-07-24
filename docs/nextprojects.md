# Portfolio Projects Addition Plan
**Jhéssiny Mattos — 4 Projects**

---

## Overview

All 4 projects reinforce the **AI-Augmented Frontend Developer** positioning. Each has a distinct placement strategy — some as full case studies, some as project cards, one as an "in development" teaser.

---

## 1. llm-txt-gen
**"A crawler that makes any website readable by AI agents."**

### Placement
Project card + mini case study (highest priority — most immediately relevant to 2026 hiring context).

### Portfolio entry
- **One-liner:** A crawler that auto-generates `llm.txt`, `agent.md`, and `site.json` for any website — making it readable by AI agents from a single URL.
- **Type tag:** `personal-tool`
- **Status:** Completed
- **Stack:** Next.js, React, TypeScript, Tailwind CSS, Cheerio, Upstash Redis
- **Links:** GitHub + live demo

### What to write about
- **Problem:** Most websites are invisible to AI agents — no structured interface, no machine-readable map.
- **Decision:** Why BFS crawling? Why an AI readability scoring rubric (0–100) instead of binary pass/fail?
- **The meta-connection:** Your own portfolio uses `/api/me` — you dogfooded this thinking before building the tool. Say that explicitly.
- **Standout detail:** `agent.md` flags uncertain inferences with warnings instead of hallucinating structure — call this out as a deliberate product decision.

### What NOT to do
Don't lead with the tech stack. Lead with the problem.

---

## 2. Brand Builder — Design System Pipeline
**"A guided AI pipeline that turns brand inputs into a full design system."**

### Placement
Full case study (this is product-complete with a business model).

### Portfolio entry
- **One-liner:** A wizard-to-dashboard pipeline that generates palettes, typography pairings, component configs, and a ready-to-use agent prompt — Stripe-gated export.
- **Type tag:** `micro-saas`
- **Status:** Completed
- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Anthropic SDK, Stripe, Zod, next-intl
- **Links:** GitHub + live demo (Stripe in test mode)

### What to write about
- **The funnel:** Wizard → AI generation → paywall → results dashboard. Most devs build features; this is a product loop. Frame it that way.
- **The Agent Prompt feature:** You're not just generating a design system — you're generating the instructions to implement it in Claude Code or Cursor. That's the most original part.
- **Architecture decision:** How is the `DesignSystem` object structured? Why a one-time payment over a subscription? Why `localStorage` for Stripe redirect state persistence?
- **UX detail:** Live component playground with palette swapping signals product care, not just implementation.

### Key message
You designed and shipped a full product funnel, not just a feature.

---

## 3. Dev Insights — YouTube Knowledge Graph
**"A self-hosted pipeline that turns YouTube channels into a searchable knowledge graph."**

### Placement
Project card with brief write-up (strong tool, but narrower audience than the others).

### Portfolio entry
- **One-liner:** Configure once — the system polls your YouTube channels, fetches transcripts, and uses Claude to surface key points, themes, and cross-video connections into a searchable knowledge graph.
- **Type tag:** `personal-tool`
- **Status:** Completed
- **Stack:** Python 3.12, FastAPI, React 19, TypeScript, PostgreSQL, Docker Compose, Anthropic SDK
- **Links:** GitHub

### What to write about
- **Frame it as a personal tool, not a study project.** You built something you actually use.
- **The automation angle:** Configure once, runs forever. This is a product decision worth highlighting.
- **The interesting Claude usage:** Cross-video connections, not just per-video summaries. You thought about the output format, not just the API call.
- **One gap to address before listing:** Make sure the README explains *why* behind design decisions — polling vs. webhooks, local vs. cloud. That's what turns a project into a portfolio piece.

---

## 4. SpecLint — Spec Linter
**"Grammarly fixes how you write. SpecLint fixes what you meant to say."**

### Placement
"In Development" teaser card — no GitHub link, waitlist/contact CTA.

### Portfolio entry
- **One-liner:** A focused text editor that surfaces vagueness, ambiguity, and undefined terms in software specs in real time — like a senior engineer looking over your shoulder.
- **Type tag:** `in-development`
- **Status:** Early Access / Waitlist
- **Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Prisma, SQLite, Anthropic SDK, Quill
- **Links:** Contact/waitlist email only

### What to write about
- Keep it minimal — the one-liner and the Grammarly analogy are enough for now.
- Mention the **Background Knowledge field** as a differentiator: context-aware linting is meaningfully better than generic pattern matching.
- Do NOT expose the GitHub or implementation details while the product direction is still being validated.

### Why list it at all
It signals product ambition and validates the idea publicly. If hiring managers ask about it, that's a good conversation. If potential users find it, that's early market signal.

---

## Execution Order

| Priority | Project | Effort | Impact |
|----------|---------|--------|--------|
| 1 | llm-txt-gen | Low (already built, just needs write-up) | High |
| 2 | Brand Builder | Medium (case study write-up + live demo check) | High |
| 3 | SpecLint | Low (teaser card only) | Medium |
| 4 | Dev Insights | Medium (README + project card write-up) | Medium |

---

## Data schema suggestion (for your `/api/me`)

```json
{
  "title": "llm-txt-gen",
  "type": "personal-tool",
  "status": "completed",
  "one_liner": "...",
  "highlights": ["..."],
  "technologies": ["..."],
  "github": "...",
  "live": "...",
  "case_study_slug": "llm-txt-gen"
}
```

Use `"type"` to filter and render project cards vs. case studies vs. teasers separately on the frontend.