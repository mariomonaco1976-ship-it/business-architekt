# Business Architekt – Statische Website

Diese Website ist als **Astro Static Site** mit **TailwindCSS** aufgebaut.

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

Der statische Output liegt danach im Ordner `dist/`.

## Seitenstruktur

- `/` Startseite
- `/warum` Warum Business Architekt
- `/so-funktioniert-es` Ablauf
- `/sparring` Sparring
- `/faq` FAQ

## Deployment (Cloudflare)

Die Website wird automatisch auf Cloudflare deployt, sobald ein Commit auf den `main`-Branch gepusht wird. Dafür wird der GitHub Actions Workflow `.github/workflows/deploy.yml` verwendet.

### Einmalige Einrichtung der GitHub Secrets

Damit das automatische Deployment funktioniert, müssen folgende Secrets im GitHub Repository hinterlegt werden:

1. **`CLOUDFLARE_API_TOKEN`** – Ein Cloudflare API-Token mit der Berechtigung *Workers Scripts: Edit*.
   - Erstellen unter: [https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Vorlage: *Edit Cloudflare Workers*
2. **`CLOUDFLARE_ACCOUNT_ID`** – Die Account-ID des Cloudflare-Kontos.
   - Zu finden im Cloudflare Dashboard unter *Übersicht* (rechte Seite).

Secrets im GitHub Repository hinzufügen:  
*Settings → Secrets and variables → Actions → New repository secret*

### Lokales Deployment

```bash
npm run deploy
```

## Ordnerstruktur

```text
src/
  components/
    Footer.astro
    Header.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    warum.astro
    so-funktioniert-es.astro
    sparring.astro
    faq.astro
  styles/
    global.css
```
