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
public/
  (hier Logo und Bilder ablegen, z. B. logo.svg, hero.jpg)
```

---

## ⚠️ Untersuchungsbericht: Verlust der Original-Texte, Visuals und Logo

### Was ist passiert?

Die eigenen Texte, das Logo und das Visual wurden **nie in Git eingecheckt (committed)** und sind daher aus der Versionsverwaltung nicht wiederherstellbar. Im folgenden ist der genaue Ablauf dokumentiert:

| Datum | Commit / PR | Was passierte |
|---|---|---|
| 24. Feb. 2026 | PR #1 (Codex) – `5494879` | KI (Codex) erstellte die Astro-Website mit **Platzhaltertexten** (`Platzhaltertext: …`) in allen Seiten. Kein Logo, kein Visual. |
| 24. Feb. 2026 | PR #2 (Codex) – `220fb75` | Kleine Fix-Commits (Navigation). Inhalte unverändert – weiterhin Platzhalter. |
| 24. Feb. – 27. Feb. 2026 | **lokal in VS Code** | Der Nutzer bearbeitete die Dateien lokal und schrieb echte Inhalte (Texte, Logo, Visual) – diese wurden **nie mit `git add` / `git commit` gesichert** und nie zu GitHub gepusht. |
| 27. Feb. 2026 | PR #3 (Copilot) – `0adc2bd` | Copilot wurde aufgefordert, die lokalen VS-Code-Inhalte einzupflegen. Da Copilot **keinen Zugriff auf lokale Dateien** hat (nur auf den Git-Stand), generierte es **eigene KI-Texte** als Ersatz für die Platzhalter. Logo und Visual wurden nicht hinzugefügt. |
| 27. Feb. 2026 | Merge PR #3 – `2732b99` | Die KI-generierten Texte wurden in `main` gemerged. |

### Warum konnten die Originaltexte nicht wiederhergestellt werden?

Der letzte `git commit` vor der Bearbeitung in VS Code enthielt **ausschließlich Platzhaltertexte**. Die echten Inhalte existierten nur im lokalen Arbeitsverzeichnis und wurden nie gespeichert/eingecheckt. Git kann nur Inhalte sichern, die explizit mit `git add` und `git commit` erfasst wurden.

### Empfehlung

1. **Originaltexte**: Prüfe, ob die Dateien noch lokal auf deinem Rechner vorhanden sind (z. B. in VS Code unter `Datei > Zuletzt geöffnete Dateien` oder im lokalen Git-Ordner des Projekts). Ggf. auch Papierkorb oder Backup (Time Machine, iCloud, OneDrive) prüfen.
2. **Logo**: Lege dein Logo-Bild als `public/logo.svg` (oder `.png`) ab. In `src/components/Header.astro` ist ein Kommentar hinterlegt, der zeigt, wie du das Logo einbindest.
3. **Visual / Hero-Bild**: Lege dein Bild als `public/hero.jpg` (oder `.png`, `.webp`) ab und binde es in `src/pages/index.astro` ein – dort ist ebenfalls ein Kommentar als Anleitung eingefügt.
4. **Texte eintragen**: Alle Seiten enthalten nun wieder `Platzhaltertext:` als Markierung. Ersetze diese durch deine eigenen Texte.
5. **Zukünftig**: Nach jeder lokalen Bearbeitung `git add . && git commit -m "..." && git push` ausführen, damit Inhalte in Git gesichert sind.

