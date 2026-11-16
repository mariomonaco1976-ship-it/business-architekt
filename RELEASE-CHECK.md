# Preview preparation – 16. November 2026

Scope: existing Cloudflare Pages project, preview only. No production or DNS changes authorized.

`npm run build` runs internal-link/legal-body and calculator checks, then copies only public/ into dist/. No deletion is performed. Reference documents and scripts are not deployed.

Public content and design unchanged. Booking endpoint: https://cal.eu/business-architekt/tea-time . Mail link: hi@mariowittmer.de. Legal page main bodies remain exactly as in the prior site.

Open before production approval:
- Confirm current company address, Kleinunternehmer status and contact details.
- Privacy text still names Zoho, Cal.eu, Stripe, Zoom and optional Notion/transcription; actual service use and retention promises require owner confirmation.
- AGB cover B2B, 30 minutes/79 EUR, payment and cancellation. No independent legal approval claimed.
- Preview currently contains noindex in HTML, headers and robots.txt. Production indexing must be explicitly prepared before production deployment; do not promote this artifact unchanged for an indexable production site.
- Historical URL redirects from the old project are not present in the new project; decide/reinstate them before production to preserve old inbound links.
- Browser rendering/interaction QA remains limited by unavailable browser access. Calculator tests use a simulated DOM.

Cloudflare configuration and preview URL will be recorded after authenticated inspection. Production approval must refer to the resulting preview and exact commit.

## Verified workflow

Cloudflare project business-architekt; GitHub mariomonaco1976-ship-it/business-architekt; production branch main; build npm run build; output dist/. All non-production branches eligible for preview. No dashboard settings changed.

Production rollback reference: 2cd00e03-557b-4629-bb46-d6dd6ad77b6f, commit bdbe633, deploy status success.

Booking link HTTP 200, redirects from cal.eu to https://cal.com/business-architekt/tea-time?orgRedirection=true . No booking/payment submitted.

Local npm run build passed on 2026-11-16. Source content and design were not changed during release preparation.
