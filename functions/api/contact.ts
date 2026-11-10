interface Env {
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL: string;
}

interface ContactMessage {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
}

const json = (body: Record<string, string>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
    return json({ error: "Email service is not configured." }, 503);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Expected JSON." }, 415);
  }

  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > 8_000) return json({ error: "Message is too large." }, 413);

  let data: ContactMessage;
  try {
    data = await request.json() as ContactMessage;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Silently accept bot submissions that fill the visually hidden field.
  if (typeof data.company === "string" && data.company.trim()) return json({ ok: "true" });

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (!name || name.length > 120 || !email || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || message.length > 5000) {
    return json({ error: "Please provide a valid name, email, and message." }, 400);
  }

  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: ["aviv@assayag.dev"],
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!result.ok) return json({ error: "Email provider rejected the message." }, 502);
  return json({ ok: "true" });
};
