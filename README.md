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
