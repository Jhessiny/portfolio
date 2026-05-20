export interface FeaturedCaseStudy {
  index: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  stack: string[];
  status: string;
  href: string;
  accent: string;
  cta: string;
  live?: { url: string; label: string };
}

export interface OtherWorkLink {
  title: string;
  tagline: string;
  href: string;
}

export const projects: FeaturedCaseStudy[] = [
  {
    index: "01",
    title: "REVLA",
    tagline: "Conversation intelligence platform for B2C teams",
    description:
      "Fullstack SaaS dashboard that analyzes client–attendant conversations to anticipate risks and opportunities with AI. Shipped the CSV import that unlocked the company's first signed contract.",
    tags: ["Fullstack", "AI/LLM", "SaaS"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS Lambda", "Unleash"],
    status: "Active",
    href: "/case-study/revla",
    accent: "#64ffda",
    cta: "READ CASE STUDY",
    live: { url: "https://revla.ai/", label: "Visit landing" },
  },
  {
    index: "02",
    title: "VEGAJUS",
    tagline: "Legal-tech SaaS for Brazilian solo lawyers",
    description:
      "Co-founded CRM + WhatsApp automation + Meta Ads platform. I lead frontend and product; co-founder owns backend. Vibe-coded validation prototype, then rebuilt v1 deliberately on modern stack.",
    tags: ["Co-founded", "Legal-Tech", "Pre-launch"],
    stack: ["React 19", "TypeScript", "Vite", "TanStack Query", "Spring Boot 4", "PostgreSQL"],
    status: "Pre-launch",
    href: "/case-study/vegajus",
    accent: "#c792ea",
    cta: "READ CASE STUDY",
    live: { url: "https://vegajus.com.br/", label: "Visit landing" },
  },
  {
    index: "03",
    title: "COLLAMAP",
    tagline: "AI-powered research suggestion engine",
    description:
      "Main frontend engineer for 3 years on a multi-tenant research platform. Diagnosed a retention problem through engagement-data analysis, then shipped a 3-stage AI pipeline at 66% cost reduction in 4 days.",
    tags: ["AI/LLM", "Cost Optimization", "Full-Stack"],
    stack: ["React", "TypeScript", "Redux", "RTK Query", "Material UI", "Node.js", "Claude API"],
    status: "Shipped · Stable",
    href: "/case-study/collamap",
    accent: "#ffcb6b",
    cta: "READ CASE STUDY",
    live: { url: "https://fa.collamap.org/arc", label: "Open app" },
  },
];

export const otherWork: OtherWorkLink[] = [
  {
    title: "LLM-TXT-GEN",
    tagline: "AI readability crawler for any website",
    href: "/case-study/llm-txt-gen",
  },
  {
    title: "Brand Builder",
    tagline: "AI-powered design system pipeline",
    href: "/case-study/brand-builder",
  },
  {
    title: "StudyMap",
    tagline: "Visual knowledge platform for students",
    href: "/case-study/study-map",
  },
  {
    title: "SpecLint",
    tagline: "Grammarly for software specs",
    href: "mailto:jhessinymattos@gmail.com?subject=SpecLint%20Waitlist",
  },
];
