import { experiences } from "../data/experiences";
import { projectsList } from "../data/projects";
import { references } from "../data/references";

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
    github: string;
    live: string;
  }[];
  case_studies: {
    title: string;
    slug: string;
    status: string;
    date: string;
    stack: string[];
    highlights: string[];
  }[];
  references: { name: string; title: string; linkedin: string }[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    website: string;
    resume: string;
  };
}

export function getPortfolioData(): PortfolioData {
  return {
    name: "Jhéssiny Mattos",
    title: "AI-Augmented Frontend Developer",
    headline:
      "Frontend-focused product engineer building fast, scalable, AI-enabled interfaces.",
    location: "São José dos Campos, SP, Brazil",
    timezone: "UTC-3 (US & EU friendly)",
    years_of_experience: 5,
    availability: "Open to contracts",
    about: [
      "I'm a frontend-focused product engineer who enjoys owning features from idea to production. I work at the intersection of user experience, system design, and business impact — translating product requirements into scalable, high-performance interfaces.",
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
    skills: {
      frontend: [
        "React",
        "TypeScript",
        "Next.js",
        "Redux / Zustand",
        "React Hook Form",
        "Tailwind",
      ],
      testing: ["Jest", "Cypress", "Vitest", "Testing Library"],
      backend_and_infra: ["Node.js", "PostgreSQL", "Docker", "Supabase"],
      ai_llm: ["Claude API", "V0", "Replit"],
    },
    languages: [
      { language: "Portuguese", level: "Native", proficiency_pct: 100 },
      { language: "English", level: "Fluent", proficiency_pct: 92 },
      { language: "French", level: "Advanced", proficiency_pct: 75 },
    ],
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
      github: p.githubRepo,
      live: p.deployLink,
    })),
    case_studies: [
      {
        title: "CollaMap — AI-Powered Research Suggestion Engine",
        slug: "collamap",
        status: "Completed / POC Approved for Production",
        date: "2024",
        stack: [
          "Node.js",
          "TypeScript",
          "PostgreSQL",
          "Claude API",
          "React",
          "Tailwind CSS",
          "PubMed API",
        ],
        highlights: [
          "66% cost reduction ($0.17 vs $0.50 per run)",
          "Delivered in <4 days (ahead of 5-6 day estimate)",
          "67% fewer API calls via 3-stage filtering",
          "85% novelty accuracy",
        ],
      },
      {
        title: "StudyMap — Visual Knowledge Platform",
        slug: "study-map",
        status: "In Development",
        date: "2024 — Present",
        stack: [
          "React 19",
          "TypeScript",
          "Vite",
          "React Flow",
          "Tailwind CSS",
          "shadcn/ui",
          "TanStack Query",
          "Supabase",
          "React Router v6",
          "Vercel",
        ],
        highlights: [
          "Clean Architecture with 4 layers",
          "6-week MVP timeline (4 phases)",
          "React 19 with concurrent features",
          "100% TypeScript",
        ],
      },
      {
        title: "Ethereum Explorer",
        slug: "ethereum-explorer",
        status: "Completed",
        date: "2024",
        stack: ["TypeScript", "React", "Ethers.js"],
        highlights: ["Web3 data product", "Blockchain data visualization"],
      },
    ],
    references: references.map((r) => ({
      name: r.name,
      title: r.title,
      linkedin: r.linkedin,
    })),
    contact: {
      email: "contact@josm.dev",
      linkedin: "https://www.linkedin.com/in/jhessiny-mattos/",
      github: "https://github.com/Jhessiny",
      website: "https://josm.dev",
      resume: "/assets/RESUME - JHÉSSINY MATTOS.pdf",
    },
  };
}
