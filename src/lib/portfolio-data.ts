import { experiences } from "../data/experiences";
import { projectsList } from "../data/projects";
import { references } from "../data/references";
import { pillars } from "../data/principles";
import { stackGroups, languages } from "../data/skills";
import {
  projects as homeProjects,
  otherWork as homeOtherWork,
} from "../data/case-studies-home";

import * as revlaData from "../data/case-studies/revla";
import * as vegajusData from "../data/case-studies/vegajus";
import * as collamapData from "../data/case-studies/collamap";
import * as studyMapData from "../data/case-studies/study-map";
import * as brandBuilderData from "../data/case-studies/brand-builder";
import * as llmTxtGenData from "../data/case-studies/llm-txt-gen";

const SKILL_LABEL_TO_KEY: Record<string, "frontend" | "testing" | "backend_and_infra" | "ai_llm"> = {
  Frontend: "frontend",
  Testing: "testing",
  "Backend & Infra": "backend_and_infra",
  "AI / LLM": "ai_llm",
};

const CASE_STUDY_DETAILS: Record<string, Record<string, unknown>> = {
  revla: { ...revlaData },
  vegajus: { ...vegajusData },
  collamap: { ...collamapData },
  "study-map": { ...studyMapData },
  "brand-builder": { ...brandBuilderData },
  "llm-txt-gen": { ...llmTxtGenData },
};

function slugFromHref(href: string): string | null {
  const m = href.match(/^\/case-study\/([\w-]+)$/);
  return m ? m[1] : null;
}

export interface CaseStudy {
  title: string;
  slug: string;
  status: string;
  tagline: string;
  description: string;
  href: string;
  tags: string[];
  stack: string[];
  accent: string;
  featured: boolean;
  details: Record<string, unknown>;
}

export interface PortfolioData {
  name: string;
  title: string;
  headline: string;
  location: string;
  timezone: string;
  years_of_experience: number;
  availability: string;
  about: string[];
  values: string[];
  principles: { title: string; body: string }[];
  skills: {
    frontend: string[];
    testing: string[];
    backend_and_infra: string[];
    ai_llm: string[];
  };
  languages: { language: string; level: string; proficiency_pct: number }[];
  experience: {
    role: string;
    company: string;
    period: string;
    current: boolean;
    description: string | string[];
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string;
    github?: string;
    live?: string;
    type?: string;
    status?: string;
  }[];
  case_studies: CaseStudy[];
  references: { name: string; title: string; linkedin: string }[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    website: string;
    resume: string;
  };
}

function buildSkillsByCategory(): PortfolioData["skills"] {
  const out: PortfolioData["skills"] = {
    frontend: [],
    testing: [],
    backend_and_infra: [],
    ai_llm: [],
  };
  for (const group of stackGroups) {
    const key = SKILL_LABEL_TO_KEY[group.label];
    if (!key) continue;
    out[key] = group.items.map((i) => i.name);
  }
  return out;
}

function buildCaseStudies(): CaseStudy[] {
  const featured: CaseStudy[] = homeProjects.map((p) => {
    const slug = slugFromHref(p.href) ?? "";
    return {
      title: p.title,
      slug,
      status: p.status,
      tagline: p.tagline,
      description: p.description,
      href: p.href,
      tags: p.tags,
      stack: p.stack,
      accent: p.accent,
      featured: true,
      details: CASE_STUDY_DETAILS[slug] ?? {},
    };
  });

  const otherCaseStudies: CaseStudy[] = homeOtherWork
    .map((o) => {
      const slug = slugFromHref(o.href);
      if (!slug) return null;
      const details = CASE_STUDY_DETAILS[slug] ?? {};
      const detailedStack = (details.stack as Array<string | { name: string }> | undefined) ?? [];
      return {
        title: o.title,
        slug,
        status: "Shipped",
        tagline: o.tagline,
        description: o.tagline,
        href: o.href,
        tags: [],
        stack: detailedStack
          .map((s) => (typeof s === "string" ? s : s.name))
          .filter((n): n is string => Boolean(n)),
        accent: "#64ffda",
        featured: false,
        details,
      } satisfies CaseStudy;
    })
    .filter((x): x is CaseStudy => x !== null);

  return [...featured, ...otherCaseStudies];
}

export function getPortfolioData(): PortfolioData {
  return {
    name: "Jhéssiny Mattos",
    title: "AI Engineer",
    headline:
      "AI engineer shipping LLM-powered features, agent pipelines, and the interfaces that put them to work.",
    location: "São José dos Campos, SP, Brazil",
    timezone: "UTC-3 (US & EU friendly)",
    years_of_experience: new Date().getFullYear() - 2020,
    availability: "Open to contracts — async & international friendly",
    about: [
      "I'm an AI engineer who owns features from idea to production. I work at the intersection of LLM systems, product UX, and engineering judgment — turning loose requirements into shipped, measurable software.",
      "Over the years, I've worked on long-lived products as well as early-stage initiatives, building and refactoring complex frontends, improving performance, and collaborating closely with product and design teams. I care about clean architecture, predictable state management, and maintainable systems that can evolve with the business.",
      "I use AI as a development accelerator and as a product capability — integrating LLM-based features where they create real user value, not just novelty. My focus is pragmatic: ship fast, iterate safely, and measure impact.",
      "I'm particularly interested in small, product-driven teams where engineers have ownership, influence roadmap decisions, and are trusted to execute autonomously.",
    ],
    values: [
      "OWNERSHIP",
      "SYSTEMS THINKING",
      "AI-NATIVE",
      "CROSS-FUNCTIONAL",
      "REMOTE-FIRST",
    ],
    principles: pillars.map((p) => ({ title: p.title, body: p.body })),
    skills: buildSkillsByCategory(),
    languages: languages.map((l) => ({
      language: l.lang,
      level: l.level,
      proficiency_pct: l.pct,
    })),
    experience: experiences.map((exp) => ({
      role: exp.role,
      company: exp.company,
      period: exp.period,
      current: exp.current,
      description: exp.description,
    })),
    projects: projectsList.map((p) => ({
      title: p.title,
      description: p.description,
      technologies: p.technologies,
      github: p.githubRepo || undefined,
      live: p.deployLink || undefined,
      type: p.type,
      status: p.status,
    })),
    case_studies: buildCaseStudies(),
    references: references.map((r) => ({
      name: r.name,
      title: r.title,
      linkedin: r.linkedin,
    })),
    contact: {
      email: "jhessinymattos@gmail.com",
      linkedin: "https://www.linkedin.com/in/jhessiny-mattos/",
      github: "https://github.com/Jhessiny",
      website: "https://portfolio-nu-seven-lv4odav0is.vercel.app",
      resume: "/assets/RESUME - JHÉSSINY MATTOS.pdf",
    },
  };
}
