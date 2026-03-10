import type { ProjectModel } from "../types/project";

export const projectsList: ProjectModel[] = [
  {
    title: "Dev Insights",
    description:
      "A self-hosted pipeline that turns YouTube channels into a searchable knowledge graph. Configure once — the system polls channels, fetches transcripts, and uses Claude to surface key points, themes, and cross-video connections. Self-hosted, no public demo.",
    technologies:
      "Python 3.12, FastAPI, React 19, TypeScript, PostgreSQL, Docker Compose, Anthropic SDK",
    img: "/assets/dev-insights.png",
    githubRepo: "https://github.com/Jhessiny/dev-insights",
    deployLink: "",
    type: "personal-tool",
    status: "completed",
  },
  {
    title: "Storefront",
    description:
      "A modern e-commerce storefront with product browsing, cart management, and checkout flow. Built with performance and clean component architecture in mind.",
    technologies: "Next.js, TypeScript, Tailwind CSS, Zustand",
    img: "/assets/storefront.png",
    githubRepo: "https://github.com/Jhessiny/storefront",
    deployLink: "https://storefront-sigma-six.vercel.app/",
    type: "project",
    status: "completed",
  },
  {
    title: "llm-txt-gen",
    description:
      "A crawler that auto-generates llm.txt, agent.md, and site.json for any website — making it readable by AI agents from a single URL.",
    technologies: "Next.js, React, TypeScript, Tailwind CSS, Cheerio, Upstash Redis",
    img: "/assets/storefront.png",
    githubRepo: "https://github.com/Jhessiny/llm-txt-gen",
    deployLink: "https://llm-txt-generator-drab.vercel.app/",
    type: "personal-tool",
    status: "completed",
    case_study_slug: "llm-txt-gen",
  },
  {
    title: "Brand Builder",
    description:
      "A wizard-to-dashboard pipeline that generates palettes, typography pairings, component configs, and a ready-to-use agent prompt — Stripe-gated export.",
    technologies:
      "Next.js 16, React 19, TypeScript, Tailwind CSS 4, Anthropic SDK, Stripe, Zod, next-intl",
    img: "/assets/storefront.png",
    githubRepo: "https://github.com/Jhessiny/brand-builder",
    deployLink: "https://www.aiecosystem.tech/",
    type: "micro-saas",
    status: "completed",
    case_study_slug: "brand-builder",
  },
  {
    title: "SpecLint",
    description:
      "A focused text editor that surfaces vagueness, ambiguity, and undefined terms in software specs in real time — like a senior engineer looking over your shoulder.",
    technologies:
      "Next.js 15, React 19, TypeScript, Tailwind CSS 4, Anthropic SDK, Prisma, SQLite",
    img: "/assets/storefront.png",
    githubRepo: "",
    deployLink: "",
    type: "in-development",
    status: "early-access",
  },
];
