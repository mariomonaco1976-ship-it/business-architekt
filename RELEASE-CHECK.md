# Finalisierung / Freigabestand 16. November 2026

## Umfang
- Praxisbeispiel und hypothetisches Rechenbeispiel vor den Rechner verschoben, Texte unveraendert.
- Erfahrungskennzahlen +11.000 / +700 einschliesslich data-count, +25 bleibt.
- Markenclaim Menschlich. Wirksam. Mehr Wert. auf allen vier Seiten.
- Impressum: bestaetigte Telefonnummer 089 2000 4954 und direkt verlinkte Kontaktadresse.
- Datenschutz: bestaetigte NocoDB-Nutzung, manuell ueberwachte Loeschregeln, Rohtranskripte nach kontrollierter Gespraechsnotiz loeschen; Notion derzeit ohne Kundendaten; keine aktive Umami-Analyse. Sonstige Abschnitte erhalten, AGB unveraendert.
- Canonicals, Open Graph und Sitemap ergaenzt; vorhandene Beschreibungen weiterverwendet.
- 18 Altpfade mit/ohne Slash auf aktuelle Abschnitte weitergeleitet. Wichtige alte Startseitenanker start/systemblick/mario bleiben erreichbar.
- Farben, Schriften, Layout-CSS, Animations-JS und Bilder unveraendert.

## Build und Tests
- npm run build: Preview in dist/, noindex in HTML/Header/robots.
- npm run build:production: lokal indexierbares Artefakt in dist-production/.
- Bestehender Cloudflare-Build npm run build erkennt CF_PAGES_BRANCH=main und erzeugt dann indexierbares dist/. Andere Branches bleiben noindex. Keine Dashboard-Aenderung notwendig.
- npm run test: interne Links/Anker/srcset, vier Seiten, Kennzahlen/Reihenfolge, Impressum/Datenschutzinvarianten, AGB-Referenzgleichheit, Redirectziele, SEO sowie statische Responsive-/A11y-Merkmale.
- Rechner: alle vier Eingabefelder einzeln, Ausgangsbeispiel, Null/leer/negativ, Dezimalwerte und grosse plausible Werte; Zaehlanimationen mit neuen Werten und reduced-motion in simuliertem DOM.
- node tests/artifacts.cjs: getrennte Indexierung und keine internen Dateien in den Artefakten.
- JavaScript-Syntax und Diff-Whitespace pruefen; CTA-Kontrast weiss/Petrol 7,47:1. Assets zusammen rund 1,69 MB, davon werden responsive Portraetvarianten alternativ geladen.
- Browserhost nicht verfuegbar: keine visuelle Desktop-/Tablet-/Mobilfreigabe, keine echte Browserkonsolen-/Screenreader-/Lighthouse-Pruefung behauptet. CSS/JS unveraendert zum bisherigen Preview; Abschnittsreihenfolge und Zahlen sind die beauftragten sichtbaren Aenderungen.

## Offene rechtliche und betriebliche Punkte
- NocoDB-Hosting-Anbieter, Betriebsort und etwaige weitere Empfaenger sowie eingesetzter Transkriptionsdienst noch nicht benannt. Keine AVV-, Drittland- oder Sicherheitsdetails erfunden.
- Konkrete Dienstleister-/AVV-/Drittlandangaben und Vollstaendigkeit der bisherigen Datenschutzerklaerung rechtlich pruefen. Die bestehende allgemeine Aussage zu Drittlandverarbeitung ist kein Nachweis tatsaechlicher Vereinbarungen.
- Manuelle Fristen (Notizen zwoelf Monate nach Abschluss pruefen, Buchungsdaten nach Leistung pruefen, gesetzliche Aufbewahrung) beruhen auf Betreiberangaben, nicht auf Systemaudit. Keine automatisierte Loeschung behauptet.
- Website/AGB: 30 Minuten, 79 EUR, B2B, Stripe, Kleinunternehmer, 24-Stunden-Stornoregel; keine zusaetzliche Umsatzsteuer. Cal.com-Dashboard-Regeln fuer Zahlung/Storno mangels Browserzugriff nicht verifiziert. Keine Buchung oder Zahlung ausgeloest.

## Deployment und Rueckfall
Bestehendes Projekt business-architekt, GitHub mariomonaco1976-ship-it/business-architekt, Produktion main, Build npm run build, Ausgabe dist/. Preview auf preview/petrol-editorial-2026-11-16. Nur Preview pushen; vor jedem main-Update ausdrueckliche Freigabe einholen. DNS unveraendert.
Bisherige Produktion: 2cd00e03-557b-4629-bb46-d6dd6ad77b6f / Commit bdbe633. Vor Freigabe API-Status und Erreichbarkeit als Rueckfall kontrollieren. Fuer Produktion nach Freigabe main neu bauen, nicht das noindex-Preview-Artefakt unveraendert promoten.

## Pruefgrundlagen
- Betreiberauftrag vom 16. November 2026 (Finalisierung).
- https://www.gesetze-im-internet.de/ddg/__5.html
- https://eur-lex.europa.eu/eli/reg/2016/679/oj (Datenschutz: keine umfassende Rechtsfreigabe)
- https://developers.cloudflare.com/pages/configuration/build-configuration/ (CF_PAGES_BRANCH)
- https://developers.cloudflare.com/pages/configuration/redirects/
