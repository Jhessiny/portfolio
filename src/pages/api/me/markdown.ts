import type { APIRoute } from "astro";
import { getPortfolioData } from "../../../lib/portfolio-data";

export const GET: APIRoute = () => {
  const d = getPortfolioData();

  const lines: string[] = [
    `# ${d.name}`,
    "",
    `**${d.title}**`,
    "",
    `> ${d.headline}`,
    "",
    "---",
    "",
    "## At a Glance",
    "",
    `- **Location:** ${d.location}`,
    `- **Timezone:** ${d.timezone}`,
    `- **Experience:** ${d.years_of_experience} years`,
    `- **Availability:** ${d.availability}`,
    "",
    "---",
    "",
    "## About",
    "",
    ...d.about.map((p) => `${p}\n`),
    `**Values:** ${d.values.join(" · ")}`,
    "",
    "---",
    "",
    "## Skills",
    "",
    `- **Frontend:** ${d.skills.frontend.join(", ")}`,
    `- **Testing:** ${d.skills.testing.join(", ")}`,
    `- **Backend & Infra:** ${d.skills.backend_and_infra.join(", ")}`,
    `- **AI / LLM:** ${d.skills.ai_llm.join(", ")}`,
    "",
    "### Languages",
    "",
    ...d.languages.map(
      (l) => `- ${l.language} — ${l.level} (${l.proficiency_pct}%)`
    ),
    "",
    "---",
    "",
    "## Experience",
    "",
    ...d.experience.flatMap((exp) => {
      const desc = Array.isArray(exp.description)
        ? exp.description.map((d) => `  - ${d}`)
        : [`  - ${exp.description}`];
      return [
        `### ${exp.role} @ ${exp.company} (${exp.period})${exp.current ? " ← current" : ""}`,
        "",
        ...desc,
        "",
      ];
    }),
    "---",
    "",
    "## Case Studies",
    "",
    ...d.case_studies.flatMap((cs) => [
      `### ${cs.title}`,
      "",
      `- **Status:** ${cs.status}`,
      `- **Date:** ${cs.date}`,
      `- **Stack:** ${cs.stack.join(", ")}`,
      `- **Highlights:**`,
      ...cs.highlights.map((h) => `  - ${h}`),
      "",
    ]),
    "---",
    "",
    "## Projects",
    "",
    ...d.projects.flatMap((p) => [
      `### ${p.title}`,
      "",
      `${p.description}`,
      "",
      `- **Tech:** ${p.technologies}`,
      `- **GitHub:** ${p.github}`,
      `- **Live:** ${p.live}`,
      "",
    ]),
    "---",
    "",
    "## References",
    "",
    ...d.references.map(
      (r) => `- **${r.name}** — ${r.title} ([LinkedIn](${r.linkedin}))`
    ),
    "",
    "---",
    "",
    "## Contact",
    "",
    `- **Email:** ${d.contact.email}`,
    `- **LinkedIn:** ${d.contact.linkedin}`,
    `- **GitHub:** ${d.contact.github}`,
    `- **Website:** ${d.contact.website}`,
    `- **Resume:** ${d.contact.resume}`,
  ];

  return new Response(lines.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
