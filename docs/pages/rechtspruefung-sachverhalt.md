# Sachverhalt fuer externe Rechts-/Datenschutzpruefung

Interner Arbeitsstand. Zweck: gebuendelte Antworten fuer eine anwaltliche oder datenschutzrechtliche Pruefung der Website, AGB, Datenschutzerklaerung, Typebot-Flows und §5 PflichtVorteil.

## Anbieteridentitaet

- Anbieter: Mario Wittmer, Business Architekt
- Rechtsform: Einzelunternehmer, Kleinunternehmer
- Adresse und Kontakt wie im Impressum
- Zielgruppe: ausschliesslich B2B, keine Verbraucher

## Angebote

- Human-System-Fit: betriebswirtschaftliche und strukturelle Einordnung fuer Solo-Selbststaendige, Freelancer und Unternehmer.
- §5 PflichtVorteil: strukturierte Erfassung, Ordnung und Dokumentation im Zusammenhang mit Gefaehrdungsbeurteilung nach §5 ArbSchG und psychischer Gefaehrdungsbeurteilung.
- 2nd Step / Umsetzungsbegleitung: optionale Anschlussleistung nach Human-System-Fit oder §5 PflichtVorteil.
- Mitarbeiterbefragung: optionaler Bestandteil im Rahmen von §5 PflichtVorteil.

## Abgrenzung

- keine Rechtsberatung
- keine Steuerberatung
- keine medizinische Beratung
- keine Therapie
- keine psychologische Diagnostik
- keine Leistung als Fachkraft fuer Arbeitssicherheit
- keine Betriebsarztleistung
- Arbeitgeber bleibt fuer Arbeitsschutzorganisation, Gefaehrdungsbeurteilung, Massnahmenumsetzung und Wirksamkeitspruefung verantwortlich

## Tools und Dienste

Es werden nach aktuellem Stand genau die in Datenschutzerklaerung und Doku genannten Tools genutzt:

- Cloudflare Pages / DNS
- Hostinger, Standort Frankfurt am Main
- Umami, self-hosted, cookielos
- Typebot, self-hosted
- NocoDB, self-hosted
- Cal.com, self-hosted
- n8n, self-hosted
- Nextcloud, self-hosted
- Zoho Mail
- Telegram
- WhatsApp auf Kundenwunsch
- Zoom
- Stripe
- PayPal, soweit ueber Zahlungsweg angeboten
- Lexoffice
- Notion
- GitHub Copilot, OpenAI, Notion AI bzw. KI-gestuetzte Werkzeuge

AV-Vertraege sind teilweise vorhanden. Vor Go-live wird geprueft, dass fuer alle relevanten Auftragsverarbeiter die erforderlichen AV-Vertraege bzw. Datenschutzvereinbarungen vorliegen.

## Kommunikation

- Standard fuer asynchrone Begleitung: Telegram
- WhatsApp kann genutzt werden, wenn der Kunde diesen Kanal ausdruecklich waehlt
- E-Mail bleibt Alternative
- Telegram/WhatsApp koennen Kundendaten, Projektinformationen, Kommunikationsinhalte und uebermittelte Unterlagen enthalten

## Termine und Calls

- Cal.com fragt die fuer Terminvereinbarung erforderlichen Daten ab
- je nach Terminart kann ein Freitextfeld fuer Zusatzinformationen genutzt werden
- Zoom wird fuer Online-Calls genutzt
- keine Zoom-Transkripte
- Transkription oder strukturierte Zusammenfassung erfolgt, soweit erforderlich, ueber Notion
- Call-Aufzeichnungen nur mit vorheriger Einwilligung
- Mitarbeiter-Gruppencalls werden nicht aufgezeichnet

## Zahlung

- Human-System-Fit und §5 PflichtVorteil werden ueber Stripe-Zahlungslinks abgewickelt
- PayPal kann je nach Zahlungsweg beteiligt sein
- Lexoffice wird fuer Angebote, Rechnungen, Kundendatenverwaltung und Zahlungsstatus genutzt

## Website und Cookies

- Website nutzt keine einwilligungspflichtigen Cookies nach aktuellem technischen Stand
- Umami ist self-hosted und cookielos
- kein Newsletter

## Typebot-Flows

### Routing-Bot

- Zweck: Routing / Einstiegsklaerung
- erhebt u. a. Solo/Team, Thema, Erwartung, Zeithorizont, Kontaktweg, Name, Unternehmen, E-Mail oder Telefonnummer
- enthaelt Freitextfelder
- uebergibt Daten an NocoDB
- verlinkt je nach Antwort auf Human-System-Fit oder §5 PflichtVorteil

### Human-System-Fit

- Zweck: strukturierter Fragenprozess / Entscheidungs- und Business-Einordnung
- erhebt umfangreiche Angaben zu Entscheidungsklarheit, Kompetenzen, Angebot, Werten, Zeit/Energie, Systemen, Zielgruppe, Vertrieb, Umsatz, Kosten, Engpaessen, Website/Social Media und Kontakt
- enthaelt zahlreiche Freitextfelder, Ratings, Auswahlfelder und einige Zahlenfelder
- enthaelt NocoDB-Uebergabe
- enthaelt Stripe-Weiterleitung

### §5 PflichtVorteil Check

- Zweck: Einordnung des §5-/Dokumentationsstands und Weiterleitung zu Kompakt/Komplett oder individuellem Gespraech
- erhebt u. a. Branche, Arbeitsschwerpunkt, Mitarbeiterzahl, Behoerdenpost, GB/PsychGB-Status, Mitarbeitereinbindung, Massnahmen, Wirksamkeitspruefung, Reibungspunkte, Unternehmen, Name, Telefon, E-Mail
- enthaelt Freitextfelder
- enthaelt OpenAI-Block vor der Erhebung von Kontaktdaten wie Name, E-Mail und Telefonnummer
- nach aktueller Prozesslogik werden im OpenAI-Block keine Kontaktdaten verarbeitet; moeglich sind jedoch vorherige betriebliche Angaben und Freitextantworten aus dem Check
- enthaelt NocoDB-Uebergaben
- enthaelt Stripe-Weiterleitungen fuer §5 PflichtVorteil Kompakt und Komplett
- enthaelt Cal.com-Weiterleitung fuer Strategiegespraech

## Mitarbeiterbefragung

- Auftraggeber: Arbeitgeber
- Mario Wittmer verarbeitet, soweit einschlaegig, als Auftragsverarbeiter
- keine Namensabfrage
- aggregierte Auswertung
- getrennte Gruppen grundsaetzlich erst ab mindestens 5 Teilnehmenden
- keine Einzelbewertung
- keine medizinische Diagnostik
- keine Leistungsbewertung einzelner Mitarbeitender
- Rohdaten spaetestens 6 Monate nach Ergebnisgespraech oder Projektabschluss loeschen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen
- aggregierte Ergebnisse koennen Bestandteil der Kundendokumentation bleiben

## KI-Nutzung

- Personenbezogene Kunden-, Interessenten- oder Mitarbeiterdaten werden grundsaetzlich nicht in externe KI-Systeme eingegeben
- Ausnahme: wenn eine vereinbarte Funktion wie Transkription oder Zusammenfassung erforderlich ist und entsprechend offengelegt bzw. vereinbart wurde
- n8n KI-Nodes nur mit anonymisierten Daten
- im §5 PflichtVorteil Check existiert ein OpenAI-Block vor der Kontaktdatenerhebung; vor Go-live pruefen, ob ausschliesslich nicht personenbezogene Betriebs-/Statusdaten und keine sensiblen Freitexte uebergeben werden

## Noch durch Mario final zu pruefen

- AV-Vertraege / Datenschutzvereinbarungen fuer alle relevanten Dienste
- tatsaechliche Logfile-Fristen bei Hostinger und Cloudflare
- technische Bestaetigung, dass keine einwilligungspflichtigen Cookies/Drittinhalte geladen werden
- ob der OpenAI-Block im §5 Typebot aktiv Daten verarbeitet und ob die Uebergabe auf nicht personenbezogene Betriebs-/Statusdaten begrenzt ist
- ob eine DSFA fuer Mitarbeiterbefragungen erforderlich ist
- ob TOMs und ein Verzeichnis von Verarbeitungstaetigkeiten vorhanden sind oder erstellt werden sollen
