# Mario Wittmer – Petrol Editorial

Lokal starten: `npm run preview` oder `start-preview.cmd`. URL: http://127.0.0.1:4336/

Nur `public/` enthält Website-Dateien. Kein Build, keine externen Laufzeit-Abhängigkeiten. `reference/` hält die unveränderten freigegebenen Quellen für Textvergleiche; nicht veröffentlichen. Die Vorschau ist mit noindex versehen. Bestehender Cloudflare-Workflow: Repository business-architekt, npm run build, dist/. Nur Preview-Branch; main bleibt unver?ndert.

Fraunces aus dem offiziellen Google-Fonts-Repository (ofl/fraunces), Inter aus dem bestehenden Projekt. Lizenzen unter public/assets/fonts. Porträtquelle: Variante 13_24_48-2.

Produktionsvorbereitung: `npm run build:production` erzeugt nur lokal `dist-production/`. Cloudflare baut auf `main` indexierbar, auf Preview-Branches mit noindex. Details und offene Punkte: RELEASE-CHECK.md. Keine Produktivschaltung ohne ausdrueckliche Freigabe.
