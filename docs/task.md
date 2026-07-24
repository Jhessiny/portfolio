I have an existing Astro portfolio site. Do not touch any existing
pages, components, or styles. Only add new files.

## YOUR ONLY JOB
Read all existing content from my current pages and components and
extract the real data — name, bio, skills, projects, experience,
contact info, anything you find. Then build agent-friendly routes
on top of it.

## STATUS: ✅ COMPLETED (last synced 2026-03-09)

## Current Portfolio Data
- **Name:** Jhéssiny Mattos
- **Title:** AI-Augmented Frontend Developer
- **Email:** contact@josm.dev
- **Website:** https://josm.dev
- **LinkedIn:** https://www.linkedin.com/in/jhessiny-mattos/
- **GitHub:** https://github.com/Jhessiny
- **Location:** São José dos Campos, SP, Brazil (UTC-3)
- **Experience:** 5 years
- **Availability:** Open to contracts

## Files Created
1. `src/lib/portfolio-data.ts` — Central typed data object
2. `src/pages/api/me.ts` — JSON endpoint with CORS + ?filter= support
3. `src/pages/api/me/markdown.ts` — Markdown endpoint for LLM context
4. `public/llms.txt` — Agent discovery file
5. `src/middleware.ts` — Content negotiation (Accept header → redirect)

## STEP 1 — Extract & centralize
Create src/lib/portfolio-data.ts
Pull all content from existing files into this single typed object.
Do not change how the existing UI consumes its data.

## STEP 2 — JSON endpoint
Create src/pages/api/me.ts

Astro API route, output: 'server' or hybrid mode.
Return:
{
  "_agent_instructions": {
    "purpose": "Machine-readable portfolio for AI agents",
    "how_to_hire": "Email via the contact field below",
    "available_filters": ["skills", "projects", "experience"]
  },
  "_schema_version": "1.0",
  "last_updated": "<today's ISO date>",
  ...all portfolio content
}

Support ?filter= query param for subsets.
Add CORS headers so agents can fetch cross-origin.
Use Astro.url.searchParams to read query params.

## STEP 3 — Markdown endpoint
Create src/pages/api/me/markdown.ts

Return Content-Type: text/markdown
Same data formatted as clean markdown for LLM context windows.
Clear headers, concise bullets, no fluff.

## STEP 4 — llms.txt
Create public/llms.txt

Who I am, what I do, availability, how to contact,
links to /api/me and /api/me/markdown,
what agents should NOT do (don't scrape, use the API).

## STEP 5 — Middleware
Create src/middleware.ts

Use Astro's defineMiddleware. If a request hits / with
Accept: application/json → redirect to /api/me
If Accept: text/markdown → redirect to /api/me/markdown
Do not affect normal browser traffic.

## RULES
- Touch zero existing files
- Check astro.config.mjs for output mode — if 'static', remind me
  that API routes require output: 'server' or 'hybrid' and show
  me the one-line config change needed
- Use the real content you find, no placeholders
- TypeScript strict mode
- Tell me which files you created when done