import type { APIRoute } from "astro";
import { getPortfolioData } from "../../lib/portfolio-data";
import type { PortfolioData } from "../../lib/portfolio-data";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

const VALID_FILTERS = [
  "skills",
  "projects",
  "experience",
  "references",
  "contact",
  "case_studies",
  "languages",
] as const;

type FilterKey = (typeof VALID_FILTERS)[number];

export const GET: APIRoute = ({ url }) => {
  const data = getPortfolioData();
  const filter = url.searchParams.get("filter");

  const envelope: Record<string, unknown> = {
    _agent_instructions: {
      purpose: "Machine-readable portfolio for AI agents",
      how_to_hire: "Email via the contact field below",
      available_filters: [...VALID_FILTERS],
    },
    _schema_version: "1.0",
    last_updated: new Date().toISOString().split("T")[0],
  };

  if (filter) {
    const keys = filter.split(",").map((k) => k.trim()) as FilterKey[];
    const filtered: Partial<PortfolioData> = {};

    for (const key of keys) {
      if (VALID_FILTERS.includes(key) && key in data) {
        (filtered as Record<string, unknown>)[key] =
          data[key as keyof PortfolioData];
      }
    }

    return new Response(JSON.stringify({ ...envelope, ...filtered }, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }

  return new Response(JSON.stringify({ ...envelope, ...data }, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
};

export const OPTIONS: APIRoute = () => {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
};
