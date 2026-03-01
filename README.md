# Business Architekt – Website

Diese Website ist als **statische Astro-Site** mit **TailwindCSS** aufgebaut und wird über **Cloudflare Workers** bereitgestellt.

## Voraussetzungen

- Node.js 20+
- npm 10+

## Projekt starten

```bash
npm install
npm run dev
```

Die Seite läuft anschließend standardmäßig unter `http://localhost:4321`.

## Build erzeugen

```bash
npm run build
```

Der Output liegt danach im Ordner `dist/`.

## Deployment

```bash
npm run deploy
```

Stellt die Seite über Cloudflare Workers (Wrangler) bereit. Konfiguration: `wrangler.jsonc`.

## Seitenstruktur

- `/` Startseite
- `/so-funktioniert-es` Business-System-Fit (Ablauf)
- `/warum` Business Architekt (Über mich)
- `/sparring` Sparring
- `/faq` FAQ
- `/impressum` Impressum
- `/datenschutz` Datenschutzerklärung
- `/agb` Allgemeine Geschäftsbedingungen

## Ordnerstruktur

```text
src/
  components/
    Header.astro
    Footer.astro
  layouts/
    PremiumSubpageLayout.astro
    BaseLayout.astro
  pages/
    index.astro
    so-funktioniert-es.astro
    warum.astro
    sparring.astro
    faq.astro
    impressum.astro
    datenschutz.astro
    agb.astro
  styles/
    global.css
public/
  ba_logo_header.svg
  ba_logo_baum.svg
  ba_logo-schriftzug.svg
  ba_portrait.svg
```
