# Design-Brief

## Referenz

Die neue Website orientiert sich an der lokalen Referenzseite vom 2026-06-07.

## Look and Feel

Modern, hell, ruhig, klar, hochwertig. Die Website soll wie ein Entscheidungsraum wirken: reduziert genug fuer Vertrauen, lebendig genug fuer Orientierung.

## Layout-System

- Seitenbreite ca. 1180 px
- grosszuegige Section-Abstaende
- Bento-Karten fuer Inhalte mit klaren Kanten
- keine verschachtelten Karten
- starke Headline-Bloecke, danach konkrete Beweise
- Produktpfade nebeneinander auf Desktop, gestapelt auf Mobile

## Komponenten

- Sticky Header
- Brand/Logo links, Navigation rechts
- Mobile Navigation als Dropdown/Drawer
- Hero mit grosser H1 und visueller Systemgrafik
- Bento-Karten
- Formel-/Metrik-Boxen
- Prozesskarten
- Preis-/Paketkarten
- FAQ-Details
- CTA-Panel
- Typebot-Embed
- Floating CTA

## Interaktionsprinzip

Interaktion dient der Entscheidung:

- Bot fragt, statt zu ueberfordern
- Rechner machen Kosten sichtbar
- Akkordeons reduzieren Laenge
- Sticky CTA hilft beim Wiedereinstieg
- Microinteractions bestaetigen, ohne abzulenken

## Farbprinzip

- tiefes Blau fuer Marke, Vertrauen und Struktur
- klares CTA-Blau fuer Handlung
- helle, fast weisse Flaechen fuer Ruhe
- warmes Gold nur als kleiner Akzent

## Farbpaletten zur Entscheidung

Ziel: Eine Palette waehlen, die zu Positionierung, Klarheit und Seriositaet passt und sofort als System nutzbar ist.

### Palette A - Vertrauensraum (empfohlen)

- Primar (Marke): `#133B67`
- Primar dunkel (Header/Footer): `#0E2742`
- CTA-Blau: `#1E63A8`
- Hintergrund: `#F3F7FB`
- Flaeche/Karten: `#FFFFFF`
- Text primaer: `#1C2B3A`
- Text sekundaer: `#4C6078`
- Akzent warm (sparsam): `#B9935A`
- Signal (Warnung/Hinweis): `#E56E6B`

Eindruck: ruhig, tragfaehig, hochwertig, klar entscheidungsorientiert.

Status: ausgewaehlt fuer die Website.

### Palette B - Klarer Kontrast

- Primar (Marke): `#0F3559`
- Primar dunkel: `#0A233B`
- CTA-Blau: `#177BC1`
- Hintergrund: `#F5F8FC`
- Flaeche/Karten: `#FFFFFF`
- Text primaer: `#192734`
- Text sekundaer: `#5A6D82`
- Akzent kupfer: `#C07A4A`
- Signal (Warnung/Hinweis): `#D85C58`

Eindruck: etwas technischer und kontrastreicher, weiterhin serioes.

### Palette C - Warm-professionell

- Primar (Marke): `#1A3F5F`
- Primar dunkel: `#10283D`
- CTA-Blau: `#2A6FB0`
- Hintergrund: `#F8F5F0`
- Flaeche/Karten: `#FFFFFF`
- Text primaer: `#22303E`
- Text sekundaer: `#5F6E7E`
- Akzent gold: `#B28A53`
- Signal (Warnung/Hinweis): `#C9645D`

Eindruck: etwas waermer, beratungsnah, weniger "tech".

## Einsatzregeln fuer alle Paletten

- Verteilung: 70% helle Flaechen, 20% Blau-Toene, 10% Akzent/Signalfarbe.
- CTA immer in CTA-Blau, nie in Gold/Kupfer.
- Gold/Kupfer nur fuer kurze Highlights (Icons, Trennmarken, Mikrodetails).
- Warn-/Hinweisfarbe nur funktional (nicht als Flaechenfarbe fuer Sections).

## CSS-Token-Vorlage

```css
:root {
	--color-brand: #133B67;
	--color-brand-dark: #0E2742;
	--color-cta: #1E63A8;
	--color-bg: #F3F7FB;
	--color-surface: #FFFFFF;
	--color-text: #1C2B3A;
	--color-text-muted: #4C6078;
	--color-accent: #B9935A;
	--color-signal: #E56E6B;
}
```

## Finale Festlegung

- Website nutzt Palette A als verbindliches Farbsystem.
- Die Signal-/Hinweisfarbe fuer die Website bleibt `#E56E6B`.
- Das Logo darf fuer Korallrot einen eigenen, in Canva gesetzten Farbwert behalten.
- Damit sind Website-Farbsystem und Logo-Farbnuance bewusst getrennt, aber kompatibel.

## Hero Asset Setup (Desktop + Mobile)

Verbindliche Dateien:

- Desktop: `brand/herobild.jpg` (1920 x 1280)
- Mobile: `brand/herobild_mobile.jpg` (1152 x 768)

Empfohlener Breakpoint fuer Auslieferung:

- Mobile bis 1023 px Viewportbreite: mobile Hero-Datei
- Ab 1024 px: Desktop Hero-Datei

HTML-Snippet (responsive Auslieferung mit picture):

```html
<picture class="hero-media">
	<source media="(max-width: 1023px)" srcset="/brand/herobild_mobile.jpg" />
	<img
		src="/brand/herobild.jpg"
		alt="Illustration: Unternehmerin zieht einen Wagen mit Alltagslasten bergauf"
		width="1920"
		height="1280"
		loading="eager"
		decoding="async"
		fetchpriority="high"
	/>
</picture>
```

CSS-Snippet (stabiler Bildausschnitt im Hero):

```css
.hero-media {
	display: block;
	width: 100%;
	max-width: 960px;
}

.hero-media img {
	width: 100%;
	height: auto;
	display: block;
	object-fit: cover;
	object-position: center;
}
```

Hinweise zur Integration:

- Fuer Above-the-fold-Hero kein Lazy-Loading nutzen.
- `width` und `height` am `img` beibehalten, um Layout-Shift zu vermeiden.
- Die Bilddateien in den Build-Asset-Ordner kopieren und Pfade ggf. ans Framework anpassen.

## UX-Regeln

- Startseite erklaert das Warum und routet.
- Conversion findet auf den Produktseiten statt.
- Rechtliche Pflicht wird ernst, aber nicht panisch kommuniziert.
- Zahlenbeispiele muessen einfach nachrechenbar sein.
- Mobile muss zuerst wie eine klare Entscheidungsstrecke funktionieren.

## Umgesetzte UI-Entscheidungen (Stand 2026-06-18)

### Startseiten-Hero

- Der Hero wird als Hintergrundflaeche im Hero-Container ausgespielt (nicht als separates Bild-Element im Content-Grid).
- Der Kontrast wird ueber einen separaten Farbverlauf als Overlay gesichert.
- Verwendete Assets:
	- Desktop: `assets/brand/herobild.jpg`
	- Mobile: `assets/brand/herobild_mobile.jpg`
- Wichtiger Implementierungsstand: Das Bild wird nicht mehr per CSS gespiegelt. Die Bildausrichtung kommt direkt aus dem finalen Asset.

### Abschnitt "Der Denkfehler"

- Die inhaltliche Kernaussage steht in einer einzelnen hervorgehobenen Karte.
- Kartentitel: "Betriebswirtschaftliche Rechnung".
- Reihenfolge in der Karte:
	1. Formel
	2. Fliesstext
	3. CTA
- Formel-Regel:
	- Desktop: in einer Zeile
	- Mobile: darf umbrechen
- CTA-Layout:
	- Desktop: rechts neben dem Fliesstext
	- Mobile: unter dem Fliesstext
