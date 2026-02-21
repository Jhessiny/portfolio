<div align="center">

# JOSM — Developer Portfolio

A cyberpunk-inspired developer portfolio with glitch effects, interactive animations, and a dark neon aesthetic. Built with Astro for zero-JS overhead and lightning-fast performance.

**[Live Site](#)** · **[Download Resume](public/assets/RESUME%20-%20JHÉSSINY%20MATTOS.pdf)**

</div>

---

## Preview

<div align="center">

| Hero | Projects |
|------|----------|
| Split-panel hero with avatar overlay and animated text reveal | CRT monitor frame with RGB glitch carousel |

| Case Studies | Skills |
|--------------|--------|
| Hover-activated scanline cards with corner brackets | Categorized tech pills with animated language bars |

</div>

## Tech Stack

| Layer | Tech |
|-------|------|
| **Framework** | [Astro 5](https://astro.build/) — static site generation, zero client JS by default |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) — utility-first with custom theme |
| **Language** | TypeScript + Vanilla JS for interactions |
| **Fonts** | Bebas Neue · Roboto · IBM Plex Mono |
| **Tooling** | pnpm · ESLint · Prettier |

## Features

- **Glitch & Neon Aesthetic** — RGB channel splits, horizontal slice animations, scanline overlays, and a `#64ffda` cyan accent throughout
- **Interactive Hero** — expandable avatar overlay, scramble/decrypt text animation, status tag scanning sequence
- **CRT Monitor Carousel** — project showcase inside a desktop monitor frame with OS chrome, glitch transitions, and swipe support
- **Animated Timeline** — work experience with glowing dots, connecting lines, and hover-triggered animations
- **Case Study Cards** — hover-activated scanlines and corner bracket reveals with accent color indicators
- **Skills Section** — color-coded tech pills by category (Frontend, Testing, Backend, AI/LLM) with animated language proficiency bars
- **Fully Responsive** — mobile-first design with touch-optimized interactions and a full-screen mobile menu

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server at localhost:4321
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint & format
pnpm lint
pnpm format
```

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro              # HTML shell, meta tags, fonts
├── pages/
│   ├── index.astro               # Main portfolio (all sections)
│   └── case-study/               # Individual case study pages
│       ├── collamap.astro
│       └── study-map.astro
├── components/                   # Reusable UI
│   ├── Header.astro              # Sticky nav with scroll detection
│   ├── DefaultMenu.astro         # Desktop navigation
│   ├── MobileMenu.astro          # Full-screen mobile overlay
│   ├── Footer.astro              # Social links + JOSM watermark
│   ├── Container.astro           # Max-width wrapper
│   ├── Divider.astro             # Section divider
│   ├── NavItem.astro             # Navigation link
│   ├── Card.astro                # Card wrapper
│   └── BaseIcon.astro            # Icon with hover color effect
├── sections/                     # Page sections
│   ├── Introduction.astro        # Hero with avatar + animated text
│   ├── CaseStudies.astro         # Featured project cards
│   ├── WorkExperience.astro      # Timeline layout
│   ├── ExperienceItem.astro      # Individual job entry
│   ├── Projects.astro            # Monitor-frame carousel wrapper
│   ├── Carousel.astro            # Desktop carousel (JS)
│   ├── MobileCarousel.astro      # Mobile scroll-snap (CSS)
│   ├── ProjectItem.astro         # Project card
│   └── SkillsAndResume.astro     # Tech pills + language bars
├── data/                         # Content (edit these to update)
│   ├── projects.ts               # Project entries
│   └── experiences.ts            # Work experience entries
├── types/
│   └── project.ts                # TypeScript interfaces
└── styles/
    ├── global.css                # Tailwind directives + scrollbar
    └── resume-particles.css      # Particle animation keyframes

public/
├── assets/                       # Images, resume PDF, signature
└── favicon.svg
```

## Updating Content

Edit the data files in `src/data/` — no need to touch component code:

- **Projects** — `src/data/projects.ts`
- **Work Experience** — `src/data/experiences.ts`

## Deployment

Build and deploy the `dist/` folder to any static host:

```bash
pnpm build
```

Works with Vercel, Netlify, GitHub Pages, Cloudflare Pages, and any static file server.

---

<div align="center">
  <sub>Built with Astro + Tailwind CSS</sub>
</div>
