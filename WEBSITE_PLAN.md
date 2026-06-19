# Website-Plan: mariowittmer.de

Stand: 2026-06-15

## Zielbild

mariowittmer.de wird eine moderne, klare und interaktive Website für Mario Wittmer. Die Website erklärt Reibung als betriebswirtschaftliches Problem, führt Besucher schnell in den passenden Pfad und macht die beiden Angebote eindeutig buchbar bzw. anfragbar.

Die Seite wird nicht als klassischer Onepager geplant, sondern als mehrseitige Website:

- Startseite
- Human System Fit
- PflichtVorteil
- Über mich / Warum ich
- FAQ
- Realisation / zweiter Schritt
- Rechtliches: Impressum, Datenschutz, AGB
- intern: Mitarbeiterbefragung, nicht in der Hauptnavigation

## Aktuelle Quellen

- Lokale Designreferenz: `C:\Users\Mario\Documents\Codex\2026-06-07\files-mentioned-by-the-user-443a71e9\outputs\index.html`
- Notion: `mariowittmer.de - Website-Struktur & Texte`
- Notion: `Positionierung Mario Wittmer - Masterdokument`
- Notion: `Startseite (v2.0)`
- Notion: `Solo-Selbständig - Human System Fit (v2.0)`
- Notion: `Team-Betrieb - PflichtVorteil (v2.0)`
- Notion: `FAQ (v2.0)`

## Strategischer Kern

Claim:

> Reibung raus. Wachstum drauf.

Roter Faden:

> Reibung sichtbar machen, bevor Entscheidungen teuer werden.

Kernargument:

> Jeder Euro in Wachstum, der in ein zeitraubendes Fundament fließt, verpufft. Erst Basis. Dann Wachstum.

Ton:

- direkte Du-Ansprache
- empathisch, klar, konsequenzorientiert
- kurze Sätze, Alltagssprache, wenig Jargon
- positiv formulieren: zeigen, was ist und was es bringt
- Zahlen und Beispiele als Beweis, nicht als Drohkulisse

## Zielgruppen und Pfade

### Solo / Freelancer

Problem: Reibung liegt in der Person als System: Rolle, Energie, Angebot, Tools, Entscheidungslogik.

Angebot: Human System Fit.

Ziel der Website: Besucher erkennt, dass viel Arbeit bei zu wenig Ergebnis kein Leistungsproblem sein muss, sondern ein Passungsproblem. Der Bot bzw. die Produktseite führt in den Start.

### Team-Betrieb / KMU

Problem: Reibung liegt in Struktur, Prozessen, Kommunikation und rechtlicher Pflicht.

Angebot: PflichtVorteil.

Ziel der Website: Der Besucher versteht, dass die gesetzliche Pflicht nach §5 ArbSchG gleichzeitig ein betriebswirtschaftlicher Hebel sein kann. Der PflichtVorteil Check ist der Haupt-CTA.

## Informationsarchitektur

### Hauptnavigation

- Start
- Human System Fit
- PflichtVorteil
- Warum ich
- FAQ
- 2nd Step

Footer:

- Kontakt
- Impressum
- Datenschutz
- AGB

Nicht in der Hauptnavigation:

- Mitarbeiterbefragung

## Bot-Strategie

Startseite:

- Embedded Bot im Abschnitt "Klarheit starten"
- eine Frage: "Arbeitest du alleine oder als Team?"
- Solo führt zu Human System Fit
- Team führt zu PflichtVorteil
- keine lange Qualifikation auf der Startseite
- URL: https://bot.mariowittmer.de/routing-bot-zvfeydx
- Trustblock "Warum Mario" steht auf der Startseite oberhalb des Bots

Human System Fit:

- fertiger HSF-Bot
- Stripe und Cal.com
- einbetten, nicht neu bauen
- URL: https://bot.mariowittmer.de/human-system-fit

PflichtVorteil:

- Qualifikations-Bot als eigentlicher Check
- Fragen zu Betrieb, GB-Status, PsychGB, Reibungsquellen
- Ergebnis mit Empfehlung
- Kontaktdaten vor Stripe, damit Abbrecher als warme Leads erhalten bleiben
- URL: https://bot.mariowittmer.de/5-pflicht-vorteil-check-zu7kbqf

Warum ich:

- Floating-CTA
- Rückleitung in "Klarheit starten" oder passende Einstiegswege

## Design-DNA aus der Referenz

Grundrichtung:

- hell, ruhig, hochwertig
- klare Flächen statt dekorativer Effekte
- Bento-Layout für Erklärung, Beweise und Produktwege
- großzügige Abstände
- starke typografische Hierarchie
- Interaktion als Orientierung, nicht als Spielerei

Farben:

- Hintergrund: sehr helles Blau-Grau
- Flächen: Weiß
- Marke: tiefes Blau
- CTA: kräftiges Blau
- Akzent: warmes Gold/Braun nur sparsam
- Linien: helles Blau-Grau

Typografie:

- Headings: Manrope oder vergleichbar
- Fliesstext/UI: Inter oder vergleichbar
- grosse, klare H1s
- kompakte Eyebrows in Versalien

UI-Muster:

- Sticky Header mit Blur
- Bento-Karten
- hervorgehobene Produkt-/Preis-Karten
- FAQ-Akkordeons
- CTA-Panels
- eingebettete Typebots
- Floating CTA
- mobile Drawer-Navigation

## Interaktive Bausteine

Priorität 1:

- Routing-Bot auf der Startseite
- FAQ-Akkordeon
- Sticky Navigation
- Floating CTA
- responsive Bento-Karten

Priorität 2:

- Entscheidungskosten-Rechner auf der Startseite
- Reibungskosten-Rechner für KMU
- kleiner Solo-Fokuskosten-Rechner
- Produktvergleich Kompakt vs. Komplett
- "Ohne / Mit" Toggle auf Produktseiten

Priorität 3:

- scrollbasierte Abschnitts-Highlights
- Fortschrittsanzeige im Prozess
- dezente Microinteractions auf Karten und CTAs

## Framework-Entscheidung

Noch offen. Entscheidung erst nach Content- und Komponentenplanung.

Aktuelle Tendenz:

- Astro als Basis für schnelle, contentstarke Website
- interaktive Inseln für Rechner, FAQ, Navigation und Bot-Embeds
- später optional CMS-/Notion-Anbindung prüfen

Warum Astro naheliegt:

- sehr gute Performance
- ideal für mehrseitige Content-Websites
- interaktive Komponenten nur dort, wo sie nötig sind
- einfache statische Auslieferung

## Offene Entscheidungen

- Preislogik PflichtVorteil: Fixpreise 990 EUR / 1.350 EUR.
- Soll die Startseite den harten Einstieg "fahrlässig" behalten oder etwas weicher werden?
- Bleibt "Realisation" als eigene Hauptseite oder wird sie zunächst als Unterseite/Abschnitt geführt?
- Welche Bildassets sind final: Logo, Portrait, Hero-Systemvisualisierung?
- Welche finalen Typebot-IDs und URLs werden eingebunden?
- Wie umfangreich werden rechtliche Seiten ausformuliert und wer prüft sie final?

## Nächste Arbeitsschritte

1. Seitenbriefings prüfen und offene Punkte klären.
2. Startseite finalisieren, weil sie Ton, Routing und Designsystem setzt.
3. Produktseiten inhaltlich scharfziehen.
4. UX-Komponentenliste finalisieren.
5. Framework entscheiden.
6. Projekt technisch initialisieren.
7. Erste klickbare Version bauen.
8. Bots, Rechtliches und mobile QA prüfen.
