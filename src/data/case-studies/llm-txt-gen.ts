export const decisions = [
  {
    stage: "01",
    title: "BFS Crawling Strategy",
    description: "Breadth-first crawling ensures the most important pages (homepage, main navigation targets) are discovered first. Depth limits prevent runaway crawls while still capturing site structure.",
    color: "#64ffda",
  },
  {
    stage: "02",
    title: "AI Readability Scoring (0-100)",
    description: "Instead of a binary pass/fail, a 0-100 rubric gives actionable feedback. Sites know exactly where they stand and what to improve — headings, semantic HTML, structured data, content density.",
    color: "#00b4d8",
  },
  {
    stage: "03",
    title: "Uncertain Inference Flagging",
    description: "agent.md flags uncertain inferences with explicit warnings instead of hallucinating structure. This is a deliberate product decision — transparency over false confidence.",
    color: accent,
  },
];

export const stack = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Cheerio" },
  { name: "Upstash Redis" },
];

export const learnings = [
  {
    title: "Output Format > API Calls",
    text: "The interesting engineering isn't the crawl — it's deciding what the output should look like. llm.txt, agent.md, and site.json serve different consumers with different needs.",
  },
  {
    title: "Scoring Beats Classification",
    text: "A 0-100 readability score is more useful than a binary label. It creates a gradient that sites can optimize against, not just a checkbox.",
  },
  {
    title: "Transparency as Product",
    text: "Flagging uncertain inferences in agent.md was the hardest product decision — it means admitting the tool doesn't know everything. But it builds trust.",
  },
];
