import { onRequestPost } from "./api/contact";

interface Env {
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL: string;
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method not allowed." }), {
          status: 405,
          headers: { "Content-Type": "application/json; charset=utf-8", Allow: "POST" },
        });
      }

      return onRequestPost({ request, env });
    }

    return env.ASSETS.fetch(request);
  },
};
