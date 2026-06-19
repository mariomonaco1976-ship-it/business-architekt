# AVV-Hinweise für Mitarbeiterbefragungen

Arbeitsstand für §5 PflichtVorteil.

Dieses Dokument ist keine veröffentlichte Rechtseite, sondern eine interne Prüfliste für den Fall, dass im Rahmen von §5 PflichtVorteil personenbezogene Daten von Mitarbeitenden im Auftrag des Arbeitgebers verarbeitet werden.

## Zweck

Vor Durchführung einer Mitarbeiterbefragung soll mit dem Auftraggeber ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO geschlossen werden, soweit Mario Wittmer personenbezogene Daten von Mitarbeitenden im Auftrag des Arbeitgebers verarbeitet.

## Rollenlogik

- Arbeitgeber: Verantwortlicher für interne Durchführung, Information, Rechtsgrundlage, arbeitsrechtliche Einordnung und Umsetzung.
- Mario Wittmer: Auftragsverarbeiter für technische Durchführung, strukturierte Auswertung und Dokumentation nach Weisung des Auftraggebers.

## Im AVV zu regeln

- Gegenstand und Dauer der Verarbeitung
- Art und Zweck der Verarbeitung
- Kategorien betroffener Personen
- Kategorien personenbezogener Daten
- Weisungsbindung
- technische und organisatorische Maßnahmen
- Vertraulichkeit
- Unterauftragsverarbeiter und eingesetzte Systeme
- Löschung oder Rückgabe nach Abschluss
- Unterstützung bei Betroffenenrechten
- Nachweispflichten

## Konkreter Gegenstand

- technische Bereitstellung der Mitarbeiterbefragung
- Erhebung der Antworten über Typebot
- Speicherung und Auswertung in NocoDB
- aggregierte Aufbereitung der Ergebnisse
- strukturierte Dokumentation für §5 PflichtVorteil
- keine Einzelbewertung und keine personenbezogene Leistungsbeurteilung

## Betroffene Personen

- Mitarbeitende des Auftraggebers, die freiwillig oder auf Grundlage der internen Organisation des Arbeitgebers an der Befragung teilnehmen
- ggf. Ansprechpartner des Auftraggebers für Organisation, Rückfragen und Ergebnisbesprechung

## Datenkategorien

- Antworten auf Befragungsfragen zu Arbeitsbedingungen, Abläufen, Schnittstellen, Kommunikation, Belastungsfaktoren und Reibungspunkten
- technische Nutzungsdaten, soweit für Betrieb, Sicherheit und Fehleranalyse erforderlich
- keine Namensabfrage
- keine medizinischen Diagnosen
- keine therapeutischen Angaben
- keine bewusste Erhebung individueller Gesundheitsdaten

## Eingesetzte Systeme

- Typebot, selbst gehostet
- NocoDB, selbst gehostet
- n8n, selbst gehostet, soweit für Auswertung erforderlich
- Hostinger, Standort Frankfurt am Main

## Unterauftragsverarbeiter / Dienstleister

Vor Kundeneinsatz prüfen und im AVV konkret benennen:

- Hostinger als Server-/Hostingdienstleister
- ggf. Cloudflare, soweit der Zugriff über Cloudflare-Infrastruktur erfolgt
- ggf. weitere technische Dienstleister, falls im konkreten Flow eingesetzt

## Löschung / Rückgabe

- Rohdaten nur so lange speichern, wie sie für Auswertung, Dokumentation und Nachvollziehbarkeit erforderlich sind
- aggregierte Ergebnisse können Bestandteil der Kundendokumentation werden
- nicht benötigte Rohdaten spätestens 6 Monate nach Ergebnisgespräch oder Projektabschluss löschen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen
- die 6-Monate-Frist im konkreten AVV übernehmen

## Schutzlinie

Es werden keine Namen abgefragt.

Die Auswertung erfolgt aggregiert und ohne beabsichtigte Zuordnung zu einzelnen Personen, soweit dies anhand der Gruppengröße und der konkreten Antworten möglich ist.

Eine separate Auswertung einzelner Gruppen erfolgt grundsätzlich erst ab mindestens 5 Teilnehmenden.

Ziel ist nicht die Bewertung einzelner Mitarbeitender, sondern die Ableitung betrieblicher Maßnahmen.

## Vor Start prüfen

- Ist eine Mitarbeiterbefragung im konkreten Fall wirklich nötig?
- Hat der Auftraggeber Mitarbeitende ausreichend informiert?
- Gibt es einen Betriebsrat oder Beteiligungsrechte?
- Ist die AVV vor Start abgeschlossen?
- Sind Gruppen klein genug, dass besondere Vorsicht bei Auswertung nötig ist?
- Sind Freitextfragen so formuliert, dass keine unnötigen personenbezogenen Details abgefragt werden?
