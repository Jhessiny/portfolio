# Portfolio

Personal frontend developer portfolio built with Astro and Tailwind CSS.

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- TypeScript
- Vanilla JS for interactivity (zero framework overhead)

## Getting Started

```bash
pnpm install
pnpm run dev       # Start dev server at localhost:4321
pnpm run build     # Build for production to ./dist
pnpm run preview   # Preview production build locally
```

## Project Structure

```
src/
  layouts/Layout.astro          # HTML shell, head, Google Fonts
  pages/index.astro             # Single page composing all sections
  components/                   # Reusable UI components
    Header.astro                # Sticky nav with scroll detection
    DefaultMenu.astro           # Desktop navigation
    MobileMenu.astro            # Full-screen mobile overlay
    Footer.astro                # Social links + nav
    Container.astro             # Max-width wrapper
    Divider.astro               # Section divider
    NavItem.astro               # Navigation link
    Card.astro                  # Card wrapper
    BaseIcon.astro              # Icon with hover color effect
  sections/                     # Page sections
    Introduction.astro          # Hero (avatar bg, pink panel, signature)
    WorkExperience.astro        # Experience grid with scroll animation
    ExperienceItem.astro        # Job card
    Projects.astro              # Carousel wrapper
    Carousel.astro              # Desktop carousel (JS)
    MobileCarousel.astro        # Mobile scroll-snap (CSS only)
    ProjectItem.astro           # Project card
    SkillsAndResume.astro       # Skills + resume section
    SkillsIcons.astro           # Tech icons
    ResumeButton.astro          # Download button with particle animation
  data/                         # Content data
    projects.ts                 # Project entries
    experiences.ts              # Work experience entries
  types/project.ts              # TypeScript interfaces
  styles/
    global.css                  # Tailwind directives + scrollbar
    resume-particles.css        # Particle animation keyframes
public/
  assets/                       # Images, resume PDF
  favicon.ico
```

## Updating Content

Edit the data files in `src/data/`:

- **Projects:** `src/data/projects.ts` - Add/edit project entries
- **Experience:** `src/data/experiences.ts` - Add/edit job entries

## Deployment

Build the site and deploy the `dist/` folder to any static hosting:

```bash
pnpm run build
```

Compatible with Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.
