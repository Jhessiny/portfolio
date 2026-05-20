export const metrics = [
  { value: "66%", label: "Cost Reduction", detail: "$0.17 vs $0.50 per run" },
  { value: "<4", label: "Days to Deliver", detail: "Ahead of 5-6 day estimate" },
  { value: "67%", label: "Fewer API Calls", detail: "3-stage filtering pipeline" },
  { value: "85%", label: "Novelty Accuracy", detail: "Manual evaluation on first 5 runs" },
];

export const pipeline = [
  {
    stage: "01",
    title: "Batched Superficial Analysis",
    description: "Process all papers against shallow tree levels (0-1). Keyword-based matching with batch processing for efficiency.",
    filter: "Filters out 60-70% of papers",
    cost: "$0.00",
    color: "#64ffda",
  },
  {
    stage: "02",
    title: "Granular Deep-Level Analysis",
    description: "Papers matching deep branches (levels 2-4). One-by-one semantic analysis with higher precision for nuanced topics.",
    filter: "Processes remaining 30-40%",
    cost: "$0.02",
    color: "#00b4d8",
  },
  {
    stage: "03",
    title: "AI Novelty Evaluation",
    description: "Claude AI analyzes truly novel papers. Generates structured concept suggestions with tree placement recommendations.",
    filter: "3-5 actionable suggestions",
    cost: "$0.15",
    color: accent,
  },
];

export const timeline = [
  {
    day: "Day 1",
    title: "Foundation",
    items: ["Database schema & migrations", "Keyword generation service", "Materialized view for branch keywords"],
  },
  {
    day: "Day 2",
    title: "External Integration",
    items: ["PubMed API integration", "XML parsing & data normalization", "Rate limiting implementation"],
  },
  {
    day: "Day 3",
    title: "Core Intelligence",
    items: ["3-stage novelty detection", "Claude AI integration", "Suggestion generation with tree placement"],
  },
  {
    day: "Day 4",
    title: "UI & Presentation",
    items: ["React frontend pages", "API endpoints", "End-to-end testing & video demo"],
  },
];

export const stack = [
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

export const learnings = [
  {
    title: "Hierarchical Optimization",
    text: "Shallow vs. deep tree levels need different analysis strategies. This insight alone unlocked major cost savings.",
  },
  {
    title: "Pre-computation Wins",
    text: "Storing keywords in materialized views made Stage 1 filtering nearly instant at $0 cost.",
  },
  {
    title: "Progressive Refinement",
    text: "The funnel from 30 papers to 5 suggestions felt natural: broad filter first, precision second.",
  },
  {
    title: "Cost is Architecture",
    text: "AI cost isn't a tuning problem solved by prompt tweaks — it's solved by deciding which model handles which shape of work. The 3-stage pipeline isn't optimization on top of the architecture. It is the architecture.",
  },
];

export const live = { url: "https://fa.collamap.org/arc", label: "Open app" };
