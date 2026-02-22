import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ request, url }, next) => {
  if (request.method === "GET" && url.pathname === "/") {
    const accept = request.headers.get("accept") ?? "";

    if (
      accept.includes("application/json") &&
      !accept.includes("text/html")
    ) {
      return new Response(null, {
        status: 303,
        headers: { Location: "/api/me" },
      });
    }

    if (
      accept.includes("text/markdown") &&
      !accept.includes("text/html")
    ) {
      return new Response(null, {
        status: 303,
        headers: { Location: "/api/me/markdown" },
      });
    }
  }

  return next();
});
