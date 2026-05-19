export interface Principle {
  title: string;
  body: string;
}

export const pillars: Principle[] = [
  {
    title: "The engineer owns the thinking.",
    body: "Understanding the problem. Exploring the solution space. Choosing the architecture. Weighing performance and cost. Designing the guardrails that catch regressions before users do. None of that gets delegated. AI accelerates the keystrokes, not the judgment.",
  },
  {
    title: "Hidden decision debt is real.",
    body: "Skipped judgment surfaces later as spec drift, performance regressions, and untraceable bugs. I keep decisions explicit so the debt stays visible.",
  },
  {
    title: "Coherent output ≠ correct output.",
    body: "LLMs are probabilistic compilers — they optimize for coherence, not correctness. Verification is structural: tests, types, guardrails. Not vibe-based.",
  },
  {
    title: "Workflow is method, not ritual.",
    body: "The tools change. The agents change. The pipelines get renamed. What stays constant is who's accountable for the result.",
  },
];
