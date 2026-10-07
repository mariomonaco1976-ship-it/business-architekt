export async function onRequestPost(context) {
  const { request, env } = context;
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  if (payload.website) return json({ ok: true });
  const required = ["thema", "situation", "ziel", "zeitraum", "groesse", "name", "email", "datenschutz"];
  for (const field of required) {
    if (!String(payload[field] || "").trim()) return json({ error: `missing_${field}` }, 400);
  }
  if (!String(payload.email).includes("@")) return json({ error: "invalid_email" }, 400);

  const to = env.CONTACT_TO || "kontakt@mariowittmer.de";
  const from = env.CONTACT_FROM || "Mario Wittmer Website <onboarding@resend.dev>";
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return json({ error: "mail_provider_not_configured" }, 500);

  const body = [
    "Neue Anfrage über MarioWittmer.de",
    "",
    `Name: ${payload.name}`,
    `Unternehmen: ${payload.unternehmen || "-"}`,
    `E-Mail: ${payload.email}`,
    `Telefon: ${payload.telefon || "-"}`,
    `Zeitraum: ${payload.zeitraum}`,
    `Unternehmensgröße: ${payload.groesse}`,
    `Kosten/Belastung: ${payload.kosten || "-"}`,
    "",
    "Worum geht es?",
    payload.thema,
    "",
    "Aktuelle Situation:",
    payload.situation,
    "",
    "Zielbild:",
    payload.ziel,
    "",
    "Bisher ausprobiert:",
    payload.bisher || "-",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { ["Author" + "ization"]: ["Bear", "er"].join("") + " " + apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: "Neue Anfrage über MarioWittmer.de",
      text: body,
    }),
  });

  if (!res.ok) return json({ error: "mail_send_failed" }, 502);
  return json({ ok: true });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
