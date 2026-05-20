import type { APIRoute } from "astro";
import { getPortfolioData } from "../../../lib/portfolio-data";

function renderDetailValue(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item) => {
      if (typeof item === "string") return [`  - ${item}`];
      if (item && typeof item === "object") {
        const obj = item as Record<string, unknown>;
        const label = (obj.title ?? obj.name ?? obj.stage ?? obj.label ?? "") as string;
        const body = (obj.text ?? obj.body ?? obj.description ?? obj.outcome ?? obj.problem ?? obj.detail ?? "") as string;
        const value = obj.value as string | undefined;
        if (label && value && body) return [`  - **${value} ${label}** — ${body}`];
        if (label && value) return [`  - **${value} ${label}**`];
        if (label && body) return [`  - **${label}** — ${body}`];
        if (label) return [`  - ${label}`];
        if (body) return [`  - ${body}`];
        return [`  - ${JSON.stringify(obj)}`];
      }
      return [`  - ${String(item)}`];
    });
  }
  return [`  - ${String(value)}`];
}

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
    "## How I Work",
    "",
    ...d.principles.flatMap((p) => [`### ${p.title}`, "", p.body, ""]),
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
    ...d.case_studies.flatMap((cs) => {
      const detailKeys = Object.keys(cs.details).filter(
        (k) => k !== "accent" && k !== "accentRgb" && k !== "stack"
      );
      const detailBlocks = detailKeys.flatMap((key) => [
        `- **${key.charAt(0).toUpperCase()}${key.slice(1)}:**`,
        ...renderDetailValue(cs.details[key]),
      ]);
      return [
        `### ${cs.title}${cs.featured ? "" : " *(other work)*"}`,
        "",
        `> ${cs.tagline}`,
        "",
        cs.description,
        "",
        `- **Status:** ${cs.status}`,
        `- **URL:** ${cs.href}`,
        ...(cs.tags.length ? [`- **Tags:** ${cs.tags.join(", ")}`] : []),
        ...(cs.stack.length ? [`- **Stack:** ${cs.stack.join(", ")}`] : []),
        ...detailBlocks,
        "",
      ];
    }),
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
      ...(p.github ? [`- **GitHub:** ${p.github}`] : []),
      ...(p.live ? [`- **Live:** ${p.live}`] : []),
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
