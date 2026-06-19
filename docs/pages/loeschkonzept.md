# Loesch- und Aufbewahrungskonzept

Interner Arbeitsstand fuer Website, Bots, Human-System-Fit, §5 PflichtVorteil und 2nd Step.

Dieses Dokument beschreibt die praktische Loeschlogik. Es ersetzt keine rechtliche Pruefung, hilft aber dabei, Datenschutzversprechen aus der Datenschutzerklaerung operativ einzuhalten.

## Grundsatz

Personenbezogene Daten werden nur so lange gespeichert, wie sie fuer den jeweiligen Zweck erforderlich sind.

Sobald der Zweck entfaellt, werden Daten geloescht, anonymisiert oder nur noch aufbewahrt, wenn gesetzliche Aufbewahrungspflichten bestehen.

## Datenarten und Fristen

| Datenart | Beispiele | Regelfrist | Hinweis |
| --- | --- | --- | --- |
| Website-Logfiles | IP-Adresse, User-Agent, Zugriffsdaten | so kurz wie technisch sinnvoll | Frist beim Hoster/Cloudflare pruefen |
| Umami-Analytics | Seitenaufrufe, Referrer, technische Nutzungsdaten | fortlaufend aggregiert | keine Cookies, keine individuelle Nutzerprofile |
| Bot-/Checkdaten ohne Vertrag | Typebot-Eingaben, NocoDB-Leadstatus | spaetestens 12 Monate | frueher loeschen, wenn klar kein Anschluss entsteht |
| Kundendaten mit Vertrag | Kontaktdaten, Projektdaten, Check-Ergebnisse | 12 Monate nach Projektabschluss, soweit nicht aufbewahrungspflichtig | Dokumentation und Nachvollziehbarkeit beruecksichtigen |
| Rechnungs- und Buchhaltungsdaten | Rechnungen, Zahlungen, Leistungsdaten | gesetzliche Aufbewahrungsfristen | nicht frei loeschbar |
| Mitarbeiterbefragung Rohdaten | einzelne Antworten ohne Namensabfrage | spaetestens 6 Monate nach Ergebnisgespraech oder Projektabschluss | sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen |
| Mitarbeiterbefragung aggregiert | zusammengefasste Ergebnisse, Maßnahmenlogik | Bestandteil der Kundendokumentation | keine Einzelbewertung |
| Call-Aufzeichnungen | Zoom-Aufnahmen | nach Zusammenfassung/Todo-Sicherung loeschen | nur mit Einwilligung |
| Kundenunterlagen | bereitgestellte Dokumente, Arbeitsergebnisse | 12 Monate nach Abschluss, soweit nicht anders vereinbart | bei Bedarf Rueckgabe/Loeschung abstimmen |
| E-Mail-Kommunikation | Anfragen, Abstimmungen, Vertragskommunikation | 12 Monate nach Abschluss, soweit nicht aufbewahrungspflichtig | wichtige Vertragskommunikation ggf. laenger |
| Interne Notizen | Projektstatus, Bearbeitungsnotizen | 12 Monate nach Abschluss | nicht erforderliche Details vermeiden |

## Mitarbeiterbefragung

Fuer Mitarbeiterbefragungen gilt zusaetzlich:

- keine Namensabfrage
- keine bewusste Erhebung medizinischer Diagnosen
- keine Einzelbewertung
- getrennte Gruppenauswertung grundsaetzlich erst ab mindestens 5 Teilnehmenden
- Freitextantworten vor Weitergabe auf moegliche Identifizierbarkeit pruefen
- Rohdaten spaetestens 6 Monate nach Ergebnisgespraech oder Projektabschluss loeschen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen
- aggregierte Ergebnisse koennen Bestandteil der §5-Dokumentation werden

## Praktischer Ablauf

1. Bei Projektstart festlegen, welche Systeme genutzt werden.
2. Bei Mitarbeiterbefragung AVV abschliessen, falls Auftragsverarbeitung vorliegt.
3. Nach Projektabschluss pruefen, welche Daten noch benoetigt werden.
4. Rohdaten, temporaere Dateien und Call-Aufzeichnungen entfernen, sobald sie nicht mehr erforderlich sind.
5. Nach 12 Monaten offene Lead- und Projektlisten bereinigen, soweit keine Aufbewahrungspflichten entgegenstehen.
6. Loeschung kurz intern dokumentieren, wenn es um Kunden- oder Befragungsdaten geht.

## Noch final zu pruefen

- tatsaechliche Logfile-Fristen bei Hostinger und Cloudflare
- ob Kundendokumentationen nach Projektabschluss automatisch archiviert oder aktiv geloescht werden
- ob ein standardisierter Loeschvermerk pro Kunde gefuehrt wird
