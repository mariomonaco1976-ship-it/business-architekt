# WEBSITE-SPEC-CLOUDFLARE.md
# MarioWittmer.de – Final Website Specification 2026

Status: FINALER UMSETZUNGSMASTER – CLOUDFLARE-FASSUNG
Zweck: Verbindliche Grundlage für den technischen Relaunch von MarioWittmer.de
Umsetzung: bestehender Stack bevorzugt, HTML/CSS/JavaScript/SVG, Cloudflare Pages
Wichtig: Inhalte und Positionierung dürfen bei der technischen Umsetzung NICHT eigenmächtig verändert werden.

---

# 1. ZIEL DER WEBSITE

MarioWittmer.de ist keine klassische Produktwebsite und kein Leistungskatalog.

Die Website hat eine primäre Aufgabe:

> Den richtigen Unternehmer dazu bringen, sein aktuelles Thema zu schildern.

Danach erfolgt die Qualifikation.

Erst anschließend wird entschieden, welche Lösung sinnvoll ist.

Die Website verkauft deshalb nicht primär einzelne Produkte.

Sie verkauft:

- Marios Perspektive
- seine Fähigkeit, Wechselwirkungen zu erkennen
- seine Fähigkeit, wirtschaftlich sinnvolle KI-/Automatisierungsentscheidungen vorzubereiten
- seinen Ansatz: Unternehmen zuerst, Werkzeug danach

Primäres Conversion-Ziel:

> Qualifizierte Anfrage

Sekundäres Conversion-Ziel:

> Einladung in ein 30-minütiges Klärungsgespräch / Tea Time

---

# 2. POSITIONIERUNG

## Kernaussage

Mario Wittmer hilft kleinen inhabergeführten Unternehmen herauszufinden, wo KI, Automatisierung oder bessere Prozesse tatsächlich Zeit sparen, Kosten senken oder Arbeit vereinfachen.

Nicht die technische Möglichkeit entscheidet.

Der wirtschaftliche Mehrwert entscheidet.

## Differenzierung

Andere starten beim Tool.

Mario startet beim Unternehmen.

Er betrachtet nicht nur:

- Technik
- KI
- Automatisierung

sondern deren Wechselwirkungen mit:

- Menschen
- Prozessen
- Wissen
- Entscheidungen
- Daten
- Technik

## Kernprinzip

> Nicht die Software bestimmt die Lösung. Deine Anforderungen und Ziele bestimmen das Werkzeug.

---

# 3. ZIELGRUPPE

Primär:

- kleine inhabergeführte Unternehmen
- Deutschland
- Unternehmer / Geschäftsführer / Entscheider
- bereits erste Berührungspunkte mit KI vorhanden oder konkrete Neugier
- gewachsene Abläufe
- wiederkehrende Administration
- Abstimmung
- Rückfragen
- manuelle Datenübertragung
- mehrere Tools
- zunehmende Toolkosten
- Unsicherheit, wie KI sinnvoll in den Betrieb integriert werden kann

Unternehmensgröße:

- Soloselbständige mit starkem Individualitäts-/Human-System-Fit-Anteil
- kleine Unternehmen mit Mitarbeitenden
- sinnvoll bis ungefähr 50 Mitarbeitende, abhängig von Komplexität und Projekt

Die Website soll NICHT ausschließlich auf eine harte Mitarbeiterzahl eingeschränkt werden.

---

# 4. ANGEBOTSARCHITEKTUR

Öffentlich sichtbar:

## Dach

KI  
Automatisierung  
Prozessverbesserung  
Systemarchitektur  
wirtschaftliche Einordnung

Nachgelagert:

- Human System Fit
- Gefährdungsbeurteilung / PsychGB / PflichtVorteil
- individuelle Beratung
- Umsetzungsprojekte
- technische Implementierung
- externe Spezialisten
- Folgeprojekte / Retainer

Wichtig:

Human System Fit und Gefährdungsbeurteilung bleiben fachlich bestehen.

Sie sind aber KEINE gleichwertigen Haupteinstiege mehr.

Sie entstehen aus dem diagnostischen Prozess.

---

# 5. FUNNEL

## Öffentlicher Funnel

Traffic  
↓  
MarioWittmer.de  
↓  
CTA „Was ist dein Ziel?“ / „Thema schildern“  
↓  
Qualifizierungsformular  
↓  
Mario erhält die Anfrage per E-Mail an `kontakt@mariowittmer.de`  
↓  
Mario prüft Angaben  
↓  
passend?  
├── nein → kurze Rückmeldung / ggf. Alternative  
└── ja → Einladung zum 30-Minuten-Gespräch  
↓  
Klärung  
↓  
passender Folgepfad  
↓  
Angebot  
↓  
Umsetzung

Grundsatz:

- keine öffentliche offene Kalenderbuchung
- keine Datenbank als V1-Anforderung
- Anfrageinhalt soll möglichst direkt als E-Mail bei Mario/Zohomail ankommen
- Speicherung nur, wenn technisch unvermeidbar oder später ausdrücklich entschieden

---

# 6. TEA TIME

Tea Time ist KEIN frei verfügbarer öffentlicher Kalender.

Tea Time ist:

- persönliche Einladung
- qualifiziertes 30-Minuten-Gespräch
- Kampagnenformat
- hochwertiger Einstieg nach Auswahl
- optional direkter Zugangsweg über individuellen Link

Öffentlich darf Tea Time erklärt werden.

Der Buchungslink soll nicht generell offen stehen.

## Tea-Time-Kernsatz

> 30 Minuten. Eine Tasse Tee. Die richtigen Fragen.

## Tea-Time-Inhalt

Wir klären:

- welches System wirklich gebraucht wird
- welches Wissen darin stecken muss
- welche Technik oder KI sinnvoll ist
- was man sich sparen kann

---

# 7. SITEMAP

Öffentliche Hauptseiten:

1. `/`  
   Startseite

2. `/vorgehen`  
   Vorgehensweise / Systemblick / Methodik

3. `/ueber-mario`  
   Person / Haltung / Arbeitsweise

4. `/kontakt`  
   Anfrage / Qualifizierung

Bestehende Spezialseiten können erhalten bleiben, aber nicht prominent navigiert werden:

- Human System Fit
- PflichtVorteil
- Gefährdungsbeurteilung
- alte Assessments
- spezielle Typebot-Seiten

---

# 8. HAUPTNAVIGATION

Desktop:

Mario Wittmer / Logo

Start  
Vorgehen  
Über Mario  
Kontakt

Primärer CTA rechts:

> Was ist dein Ziel?

Mobile:

Hamburger / kompakte Navigation

Start  
Vorgehen  
Über Mario  
Kontakt

CTA deutlich hervorgehoben:

> Was ist dein Ziel?

Kein überladenes Mega-Menü.

Keine sichtbare Produktnavigation.

---

# 9. STARTSEITE – FINALER AUFBAU

Reihenfolge:

1. Hero
2. Ausgangssituation / KI wächst in den Betrieb hinein
3. Systemblick / Wechselwirkungen
4. KI-Einsatz bei tatsächlichem Mehrwert
5. Für wen das spannend ist
6. Vorgehensweise
7. Über Mario – Kurzfassung
8. Anfrage / Qualifikation
9. Tea Time – dezenter Zusatz
10. FAQ
11. Footer

---

# 10. HERO – FINAL COPY

## H1

> Deine Welt ändert sich durch KI. Gehst du mit?

## Subheadline

> Ich helfe dir mit deinem Unternehmen herauszufinden, wo KI, Automatisierung oder bessere Prozesse tatsächlich Zeit sparen, Kosten senken oder Arbeit vereinfachen – und wo nicht.

## Primärer CTA

> Was ist dein Ziel?

CTA führt:

entweder zu `/kontakt`  
oder zu `#anfrage` auf derselben Seite.

Empfehlung:

Desktop:  
scroll-to-section / Anfrage

Mobile:  
direkt zum kompakten Formularblock

## Microcopy

> Schildere dein Thema. Du bekommst eine Einschätzung, ob sich die Zeit für ein Gespräch lohnt.

---

# 11. HERO DESIGN

Der Hero muss sofort sichtbar modern wirken.

Keine generischen KI-Motive.

Keine:

- Roboter
- Gehirne
- Leiterbahnen
- Neon
- Cyberpunk
- ChatGPT-Logo-Wand
- Tool-Logo-Wand

Stattdessen:

- große Typografie
- viel Negativraum
- subtil animierter Texteinstieg
- hochwertiges Portrait oder typografische Komposition
- maximal ein visuelles abstraktes Systemelement

## Hero Animation

Beim Laden:

H1  
→ leichte Fade-/Y-Bewegung

Subline  
→ ca. 150–250 ms später

CTA  
→ ca. 150 ms danach

Kein langes Intro.

Gesamte Animation < 800 ms.

Bei `prefers-reduced-motion`:

alles sofort sichtbar.

---

# 12. ABSCHNITT: DIE AUSGANGSSITUATION

## Headline

> KI kommt selten allein.

## Copy

KI beginnt im Unternehmen oft ganz einfach.

Man nutzt ein Werkzeug, entdeckt einen sinnvollen Anwendungsfall und merkt schnell, dass für die nächste Aufgabe etwas anderes besser passt.

Dann kommen weitere Tools, Automatisierungen, Schnittstellen oder Abos dazu.

Jedes davon kann ein konkretes Problem lösen.

Aber mit jedem neuen Baustein wächst auch das System drumherum.

Informationen müssen zusammenpassen.  
Mitarbeitende müssen damit arbeiten können.  
Daten müssen verfügbar sein.  
Abläufe müssen funktionieren.

Und irgendwann stellt sich nicht mehr nur die Frage:

> Was kann dieses Tool?

Sondern:

> Wie passt das alles sinnvoll zusammen?

## wirtschaftlicher Kernsatz

> Abo-Kosten sind sichtbar. Was euch das falsche Tool im Alltag kostet, nicht.

## Abschluss

Das ist weniger ein Technikproblem als ein Klärungsproblem.

Die entscheidende Frage ist:

> Was genau soll bei uns besser werden – und welches Werkzeug oder welche Kombination löst das am wirtschaftlichsten?

---

# 13. ABSCHNITT: SYSTEMBLICK

## Headline

> Verstehen. Entscheiden. Umsetzen.

## Copy

Bevor ich ein Werkzeug empfehle, möchte ich dein Unternehmen verstehen.

Wie ein guter Mechaniker, der sich zuerst das Auto anschaut, bevor er ein Teil bestellt.

Denn entscheidend ist selten ein einzelner Prozess, ein Tool oder ein Mitarbeiter.

Entscheidend sind die Wechselwirkungen.

## Visualisierung

INTERAKTIVES SYSTEMNETZ

Knoten:

- Menschen
- Prozesse
- Wissen
- Entscheidungen
- Daten
- Technik

## Erklärung darunter

Wenn sich ein Bereich verändert, verändert sich häufig mehr als nur dieser eine Bereich.

Neue Technik verändert Abläufe.

Neue Abläufe verändern Zuständigkeiten.

Andere Zuständigkeiten verändern Informationswege.

Fehlendes Wissen beeinflusst Entscheidungen.

Daten bestimmen, was automatisiert werden kann.

Deshalb schaue ich zuerst auf das Zusammenspiel.

Erst danach entscheiden wir, wo KI sinnvoll ist, wo klassische Automatisierung besser passt und wo bereits eine Veränderung im Prozess reicht.

## Kernsatz

> Nicht die Software bestimmt die Lösung. Deine Anforderungen und Ziele bestimmen das Werkzeug.

CTA:

> Mehr über mein Vorgehen

Link:

`/vorgehen`

---

# 14. INTERAKTIVES SYSTEMNETZ – TECHNISCHE SPEZIFIKATION

## Ziel

Das Netzwerk ist der zentrale visuelle Beweis von Marios Systemverständnis.

Es darf nicht wie ein Tech-Gimmick wirken.

## Technologie

- Inline SVG
- HTML
- CSS
- Vanilla JavaScript
- Intersection Observer

Keine externe Library.

Nicht verwenden:

- D3
- Three.js
- GSAP
- Lottie
- React nur für diese Komponente
- Canvas

## Knoten

Menschen  
Prozesse  
Wissen  
Entscheidungen  
Daten  
Technik

## Desktop

Sechs Karten / Nodes in organisch-geordnetem Layout.

Verbindungslinien als SVG.

Default:

alle sichtbar  
Linien dezent

Hover:

aktiver Node stärker  
relevante Verbindungen stärker  
verbundene Bereiche hervorgehoben  
andere leicht zurückgenommen  
Textbereich aktualisiert sich

Click:

fixiert Zustand

zweiter Click:

Reset

## Mobile

Keine Hover-Abhängigkeit.

2×3 Grid oder vertikale Darstellung.

Tap:

Node aktivieren

Kurztext erscheint darunter

zweiter Tap:

Reset

Auf sehr kleinen Screens können die vollständigen Linien reduziert werden.

Inhalt muss auch ohne Linien verständlich bleiben.

## Beispieltexte pro Knoten

### Menschen

> Technik funktioniert nur dann dauerhaft, wenn die Menschen damit arbeiten können und wissen, was sie ihnen abnimmt.

### Prozesse

> Automatisierung beschleunigt Abläufe. Deshalb sollte vorher klar sein, ob der Ablauf überhaupt gut funktioniert.

### Wissen

> KI kann nur sinnvoll unterstützen, wenn relevantes Wissen verfügbar, korrekt und auffindbar ist.

### Entscheidungen

> Nicht jede Entscheidung gehört an eine KI. Entscheidend ist, welche Regeln gelten und wo menschliches Urteil gebraucht wird.

### Daten

> Daten bestimmen, was ein System weiß, womit es arbeiten kann und wie zuverlässig das Ergebnis wird.

### Technik

> Technik ist die Ausführungsebene. Sie kommt dann ins Spiel, wenn klar ist, was sie lösen soll.

## Accessibility

- `prefers-reduced-motion`
- Keyboard-Navigation
- sichtbarer `focus-visible`
- Tap-Targets >= 44px
- semantische HTML-Fallback-Texte
- keine wichtigen Inhalte ausschließlich im SVG

---

# 15. ABSCHNITT: KI-EINSATZ

## Headline

> KI-Einsatz nur bei tatsächlichem Mehrwert.

## Intro

KI und Automatisierung sind keine Wundermittel.

Richtig eingesetzt können sie aber an vielen Stellen Zeit sparen, Kosten senken und Menschen bei ihrer Arbeit unterstützen.

## Karten

### Wiederkehrende Administration

Zuordnen, übertragen, zusammenstellen oder dokumentieren.

Wiederkehrende Abläufe lassen sich häufig vereinfachen oder automatisieren.

### Kundenanfragen

Standardfragen, Terminabsprachen, erste Informationen oder wiederkehrende Abläufe können vorbereitet oder übernommen werden.

### Vertrieb und Nachverfolgung

Follow-ups, Erinnerungen, CRM-Pflege oder Angebotsprozesse können zuverlässiger und weniger manuell werden.

### Wissen und Dokumente

Informationen müssen nicht mehr nur in Köpfen, Mails, Ordnern und einzelnen Programmen stecken.

### Übergaben und Abstimmung

Wenn mehrere Menschen an einem Vorgang arbeiten, kann Technik dafür sorgen, dass Informationen vollständig und zum richtigen Zeitpunkt verfügbar sind.

### Daten und Systeme

Informationen können zwischen bestehenden Anwendungen übertragen, aufbereitet und für weitere Entscheidungen nutzbar gemacht werden.

### Informationssuche

Wer weniger suchen muss, hat mehr Zeit für produktive Arbeit.

## Abschluss

Der Mehrwert entsteht nicht dadurch, dass KI eingesetzt wird.

Sondern dadurch, dass sie an der richtigen Stelle eingesetzt wird.

---

# 16. CARD DESIGN

Keine klassische SaaS-Feature-Wand.

Cards:

- große Überschrift
- maximal 2–3 Sätze
- viel Raum
- leichte Border
- minimaler Hover-Effekt

Hover:

- `translateY(-2px)`
- Border minimal stärker
- Hintergrund minimal ändern

Kein 3D.

Kein Glow.

---

# 17. ABSCHNITT: FÜR WEN

## Headline

> Für wen das spannend ist.

## Copy

Das ist für dich interessant, wenn du bereits Berührungspunkte mit KI hast oder hattest und noch nicht abschließend weißt, wie du sie sinnvoll in deinem Unternehmen einsetzen kannst.

Oder wenn du weißt, dass du oder deine Mitarbeitenden zu viel Zeit investieren in:

- Abstimmung
- Rückfragen
- Suchen
- Administration
- wiederkehrende Aufgaben
- manuelle Datenübertragung

Es passt außerdem, wenn du keine Lust darauf hast, jeden neuen Tool-Hype mitzumachen und laufend Geld in Experimente zu stecken, deren wirtschaftlicher Nutzen unklar bleibt.

Und wenn du vor allem eines möchtest:

> eine Entscheidung – keine Produktpräsentation.

## weniger passend

Wahrscheinlich weniger passend ist es, wenn du bereits exakt weißt, welches System du möchtest und lediglich jemanden suchst, der eine fertige technische Spezifikation umsetzt.

Oder wenn du dein bestehendes Vorgehen nicht hinterfragen möchtest und ausschließlich ein zusätzliches Tool suchst.

---

# 18. ABSCHNITT: VORGEHENSWEISE

## Headline

> So starten wir.

### Schritt 1

## Worum geht's bei dir?

Beschreib mir kurz, worum es bei euch geht, wie die Situation aktuell aussieht und welches Ziel du erreichen möchtest.

### Schritt 2

## Bin ich deine Lösung?

Ich schaue mir deine Angaben an und melde mich zurück – mit einer Einschätzung, ob ich dich unterstützen könnte und wie ein nächster sinnvoller Schritt aussieht.

### Schritt 3

## In 30 Minuten klären wir deine Situation.

Wir schauen gemeinsam auf dein Ziel, deine aktuelle Situation und die wirtschaftliche Bedeutung.

Danach soll klar sein, ob und wie KI, Automatisierung oder Prozessverbesserung bei dir sinnvoll sind.

### Schritt 4

## Du entscheidest, wie es weitergeht.

Danach weißt du, was für dich und dein Unternehmen sinnvoll ist und was dich nur unnötig Zeit oder Geld kostet.

Falls du anschließend meine Unterstützung bei der Umsetzung möchtest, klären wir gemeinsam den benötigten Umfang.

---

# 19. ÜBER-MARIO-KURZBLOCK

## Headline

> Ich arbeite mit KI. Ich arbeite mit Unternehmen. Ich arbeite mit Menschen.

## Copy

Ich mag keine Verschwendung.

Keine verschwendete Zeit.  
Kein unnötig ausgegebenes Geld.  
Keine Prozesse, die komplizierter sind, als sie sein müssten.

Genau deshalb interessiert mich KI.

Nicht als Selbstzweck, sondern als Werkzeug.

Ich schaue auf die Wechselwirkungen zwischen Mensch, Betrieb und Technik.

Denn eine technisch perfekte Lösung hilft wenig, wenn sie im Alltag zusätzliche Arbeit erzeugt.

Ein guter Prozess hilft wenig, wenn Informationen fehlen.

Und die beste Automatisierung bringt nichts, wenn die Menschen, die damit arbeiten sollen, sie nicht sinnvoll einsetzen können.

Meine Rolle ist die eines Analysten und Architekten.

Ich mache sichtbar, was zusammenhängt, ordne Möglichkeiten und übersetze zwischen unternehmerischer Realität und technischer Umsetzung.

Wenn spezielles technisches oder fachliches Wissen notwendig ist, arbeite ich mit passenden Spezialisten zusammen.

## Kernsatz

> Das Ziel ist nicht möglichst viel KI. Das Ziel ist eine Lösung, die für dein Unternehmen funktioniert.

CTA:

> Mehr über Mario

Link:

`/ueber-mario`

---

# 20. ANFRAGEBLOCK

ID:

`#anfrage`

## Headline

> Worum geht's bei dir?

## Copy

Nicht jedes Unternehmen passt zu mir und ich passe nicht zu jedem Unternehmen.

Bevor du deine Zeit investierst, möchte ich sicherstellen, dass du unser Gespräch mit einem Mehrwert für dich verlässt.

Schreib mir kurz:

- worum es geht
- wie es aktuell ist
- wie es aussehen soll
- welchen zeitlichen Rahmen du dir für die Umsetzung vorstellst

Ich schaue mir deine Angaben an und melde mich zurück.

## Button

> Thema schildern

## Microcopy

> Kostenfrei und unverbindlich. Deine Angaben dienen zunächst nur der Einordnung deines Themas.

---

# 21. QUALIFIZIERUNGSFORMULAR

Ziel:

- maximal 6–8 Fragen
- Daten sollen möglichst direkt per E-Mail an `kontakt@mariowittmer.de` gehen
- V1 benötigt keine Datenbank
- keine offene Kalenderbuchung nach Absenden

## Frage 1

Worum geht es bei dir?

Freitext.

## Frage 2

Wie sieht die Situation aktuell aus?

Freitext.

## Frage 3

Wie soll es idealerweise aussehen?

Freitext.

## Frage 4

Was kostet dich die aktuelle Situation?

Optionale Hilfestellung:

- Zeit
- Geld
- Umsatz
- Qualität
- Stress / Belastung
- schwer einzuschätzen

## Frage 5

Was habt ihr bisher ausprobiert?

Freitext / optional.

## Frage 6

In welchem Zeitraum möchtest du das Thema gelöst haben?

Auswahl:

- so schnell wie sinnvoll
- innerhalb 1–3 Monate
- innerhalb 3–6 Monate
- noch offen

## Frage 7

Wie groß ist dein Unternehmen?

- Solo
- 2–5
- 6–10
- 11–20
- 21–50
- >50

## Frage 8

Kontaktdaten

- Name
- Unternehmen
- E-Mail
- optional Telefon
- DSGVO-Einwilligung

---

# 22. FORMULAR-LOGIK

Nach Absenden:

Keine automatische offene Kalenderbuchung.

Erfolgsmeldung exakt:

> Danke für deine Anfrage. Ich melde mich in Kürze.

E-Mail-Ziel:

> `kontakt@mariowittmer.de`

Formularziel:

Alle über das öffentliche Kontakt-/Qualifizierungsformular übermittelten Angaben werden ausschließlich per E-Mail an `kontakt@mariowittmer.de` zugestellt. Eine persistente Speicherung in einer Datenbank ist nicht vorgesehen. Die technische Versandlösung ist austauschbar; bevorzugt wird die einfachste zuverlässige Cloudflare-kompatible API-Lösung.

V1-Grundsatz:

- keine Datenbank erforderlich
- Mario benötigt den Inhalt der Anfrage per E-Mail
- Formularversand-Anbieter ist zweitrangig, solange zuverlässig, datenschutzvertretbar und mit Cloudflare Pages kompatibel
- möglichst Nutzung bestehender E-Mail-Infrastruktur / Zoho-Kontext berücksichtigen

Optionale automatische E-Mail an Nutzer:

- nicht zwingend für V1
- nur umsetzen, wenn technisch einfach und rechtlich sauber
- keine Newsletter-Einwilligung erzwingen
- keine Marketing-Automation ohne separate Zustimmung

---

# 23. TEA-TIME-BLOCK

Der Block soll visuell kleiner sein als die Haupt-CTA-Sektion.

## Copy

Manche Gespräche beginnen nicht über ein Formular.

Manchmal sehe ich ein Unternehmen, bekomme eine Empfehlung oder komme aus einem anderen Zusammenhang zu dem Eindruck:

> Eine andere Perspektive könnte hier gerade einen echten Mehrwert bringen.

Dafür gibt es die Tea Time.

## Highlight

> 30 Minuten. Eine Tasse Tee. Die richtigen Fragen.

## Erklärung

Die Tea Time ist eine persönliche Einladung.

Wir schauen gemeinsam darauf:

- welches System wirklich gebraucht wird
- welches Wissen darin stecken muss
- welche Technik oder KI sinnvoll ist
- was man sich sparen kann

## Invite CTA

Nur wenn Nutzer über Invite-Link kommt:

> Tea Time starten

Normale Besucher:

kein direkter Buchungslink.

---

# 24. FAQ

## Muss ich schon wissen, was ich automatisieren möchte?

Nein.

Es reicht, wenn du weißt, was sich verändern soll.

Ob dafür KI, Automatisierung, ein anderer Prozess oder eine Kombination daraus sinnvoll ist, klären wir anschließend.

---

## Entwickelst du die Technik selbst?

Das hängt vom Projekt ab.

Analyse, Sollkonzept, Architektur und wirtschaftliche Einordnung liegen bei mir.

Technische Bestandteile setze ich je nach Umfang selbst um oder hole passende Spezialisten dazu.

Entscheidend ist, dass die Lösung zu deinem Unternehmen passt.

---

## Ist das nur für KI-Projekte?

Nein.

KI ist ein Werkzeug.

Wenn eine klassische Automatisierung, ein besserer Prozess oder eine organisatorische Veränderung sinnvoller ist, gehört genau das zur Lösung.

---

## Für welche Unternehmensgröße ist das sinnvoll?

Typischerweise für kleine inhabergeführte Unternehmen.

Das reicht von Soloselbständigen, bei denen Individualität und persönliche Arbeitsweise eine große Rolle spielen, bis zu kleineren Unternehmen mit etwa 50 Mitarbeitenden, die Zeit oder Kosten reduzieren und gleichzeitig wachsen wollen.

---

## Was passiert nach meiner Anfrage?

Ich schaue mir deine Situation zunächst an.

Wenn ich einen sinnvollen Ansatz sehe, klären wir sie in einem 30-minütigen Gespräch genauer.

Danach entscheidest du, ob und wie es weitergeht.

---

## Was kostet eine Zusammenarbeit?

Das hängt davon ab, was tatsächlich gebraucht wird.

Ein Analyse- oder Entscheidungsprozess hat einen anderen Umfang als die Konzeption und Umsetzung eines vollständigen Systems.

Bevor Kosten entstehen, ist klar:

- was gemacht wird
- welchen Umfang es hat
- was es kostet

---

# 25. SEITE /VORGEHEN

Diese Seite darf tiefer gehen.

Sie erklärt Marios Systemblick.

## Hero

H1:

> Erst verstehen. Dann entscheiden.

Subline:

> KI ist nur ein Teil eines Unternehmenssystems. Deshalb schaue ich zuerst darauf, wie Menschen, Prozesse, Wissen, Entscheidungen, Daten und Technik zusammenspielen.

## Inhalte

1. Ziel verstehen
2. aktuelle Situation erfassen
3. Wechselwirkungen erkennen
4. Engpass bestimmen
5. wirtschaftlichen Nutzen einordnen
6. Lösung entwickeln
7. technische Umsetzung auswählen
8. testen
9. verbessern

Wichtig:

Nicht als starre 9-Schritte-Methode verkaufen.

Eher als Denkrahmen.

## Tiefere Systemlogik

Menschen  
Prozesse  
Wissen  
Entscheidungen  
Daten  
Technik

Mit Beispielen.

## mögliche Folgepfade

Nicht als Produktkarten.

Sondern:

Je nach Situation kann das Ergebnis sein:

- Prozessänderung
- klassische Automatisierung
- KI-Unterstützung
- Wissenssystem
- Human System Fit
- organisatorische Veränderung
- Gefährdungsbeurteilung
- technische Umsetzung
- externe Spezialisten

---

# 26. SEITE /UEBER-MARIO

Die bestehende Über-mich-Logik grundsätzlich erhalten.

Neue KI-Positionierung ergänzen.

## Leitgedanken

- Ich mag keine Verschwendung
- richtige Entscheidungen
- Systemblick
- Mensch
- Betrieb
- Technik
- KI als Werkzeug
- keine Technik um der Technik willen
- wirtschaftlicher Nutzen
- persönliche Verantwortung

## Einstieg

> Ich arbeite mit KI. Ich arbeite mit Unternehmen. Ich arbeite mit Menschen.

Dann bestehende gute Über-mich-Inhalte soweit möglich übernehmen.

Keine künstliche Heldenreise.

Keine langen Lebenslaufblöcke.

Keine generische Beraterbiografie.

---

# 27. HUMAN SYSTEM FIT

Nicht löschen.

Nicht in Hauptnavigation.

Direkte URL darf bleiben.

Verwendung:

- direkter Link
- bestehende Kunden
- spezifische Kampagnen
- Folgepfad nach Erstgespräch

Positionierung intern:

Human System Fit wird relevant, wenn sichtbar wird, dass das Thema stärker mit:

- Rolle
- Arbeitsweise
- Entscheidungsmustern
- Überlastung
- Individualität
- Mensch-System-Passung

zusammenhängt.

---

# 28. GEFÄHRDUNGSBEURTEILUNG / PSYCHGB

Nicht löschen.

Nicht in Hauptnavigation.

Eigene bestehende URLs können bestehen bleiben.

Verwendung:

- direkter Fachbedarf
- bestehende Leads
- Google
- gezielte Kampagnen
- Folgepfad aus Beratung

Wenn sich:

- Aufgaben
- Zuständigkeiten
- Arbeitsbedingungen
- Abläufe
- Belastungen

durch technische oder organisatorische Veränderungen verändern, kann das Thema im Beratungsprozess relevant werden.

Nicht als primärer KI-Verkaufshook auf der Startseite verwenden.

---

# 29. DESIGNRICHTUNG

Ziel:

Premium Consulting  
+  
moderne Technologie  
+  
menschlich  
+  
ruhig

Nicht:

AI-SaaS-Klon

## Designprinzipien

- große Typografie
- klare Hierarchie
- viel Weißraum
- wenige starke Elemente
- hochwertige Borders
- gezielte Akzentfarbe
- sauberes Grid
- kein visuelles Chaos

---

# 30. BESTEHENDE CI

Bestehende Farben können grundsätzlich weiterverwendet werden, wenn sie im aktuellen Code vorhanden sind.

Bekannte Markenfarben:

```text
#100746
#FF5757
#97832C
```

Fonts bisher:

Crimson Pro  
Inter

Empfehlung:

Crimson Pro für große emotionale / charaktervolle Headlines nur wenn typografisch hochwertig umgesetzt.

Inter für:

- Navigation
- Body
- UI
- Formulare

Kein zusätzlicher Font ohne zwingenden Grund.

Hinweis aus IST-Aufnahme:

Aktuelle Live-CSS nutzt außerdem eine blau/goldene Palette. Vor finalem Designsystem bewusst entscheiden, ob die bestehende Live-Palette, die bekannte CI-Palette oder eine reduzierte Kombination verwendet wird.

---

# 31. TYPOGRAFIE

Desktop:

H1:  
`clamp(3rem, 7vw, 7rem)`

H2:  
`clamp(2rem, 4vw, 4.5rem)`

H3:  
`1.5–2rem`

Body:  
`1.05–1.2rem`

Line Height:  
`1.5–1.7`

Textbreite:

max. ca. 65–75 Zeichen pro Zeile.

Mobile:

H1 muss mindestens 2.6rem sinnvoll skalieren.

Keine winzigen Texte.

---

# 32. SPACING

Section Padding Desktop:

96–160px vertikal

Mobile:

64–96px

Cards:

24–40px Padding

Kein gequetschtes Layout.

---

# 33. BUTTONS

Primärer Button:

klar  
groß  
ruhig

Keine übertriebenen Animationen.

Hover:

- leichte Translation
- Background-/Border-Wechsel
- 150–200 ms

Kein:

- Bounce
- Glow
- extreme Scale

---

# 34. MICROINTERACTIONS

Erlaubt:

## Hero Reveal

subtil.

## Scroll Reveal

Intersection Observer.

Elemente:

opacity 0 → 1  
translateY ca. 16px → 0

Dauer:

250–450ms

Nur einmal.

## Cards

dezenter Hover.

## Systemnetz

interaktiv.

Nicht verwenden:

- Cursor Trails
- Partikel
- permanente Bewegung
- 3D Parallax
- Scroll-Jacking
- horizontale Zwangs-Scrollstories
- Autoplay-Videos ohne Nutzen

---

# 35. MOBILE FIRST

Die Website muss vollständig mobil gedacht werden.

Besonders prüfen:

- Hero passt ohne Scroll-Chaos
- Navigation
- Systemnetz
- Formulare
- Tap-Ziele
- Karten
- FAQ
- Tea Time
- Footer

Keine Desktop-Komponente darf auf Mobile nur verkleinert werden.

Wenn nötig:

Desktop-Interaktion vereinfachen.

---

# 36. ACCESSIBILITY

Ziel:

WCAG 2.2 AA soweit realistisch.

Pflicht:

- semantisches HTML
- echte Buttons
- echte Links
- Label für Formulare
- Tastaturbedienung
- Fokus sichtbar
- ausreichende Kontraste
- Alt-Texte
- reduced motion
- keine wichtige Information nur über Farbe
- Skip-Link
- `lang="de"`

---

# 37. SEO

Technisches SEO verbindlich.

## Startseite

Title Vorschlag:

> KI & Automatisierung für kleine Unternehmen | Mario Wittmer

Meta Description:

> Mario Wittmer hilft kleinen Unternehmen herauszufinden, wo KI, Automatisierung und bessere Prozesse tatsächlich Zeit sparen, Kosten senken und Arbeit vereinfachen.

H1:

> Deine Welt ändert sich durch KI. Gehst du mit?

Nur eine H1 pro Seite.

## Vorgehen

Title:

> KI sinnvoll einsetzen: Erst verstehen, dann entscheiden | Mario Wittmer

## Über Mario

Title:

> Mario Wittmer | KI, Unternehmen und Menschen

## Kontakt

Title:

> Thema schildern | Mario Wittmer

---

# 38. STRUCTURED DATA

Prüfen / implementieren:

- Person
- ProfessionalService
- WebSite
- FAQPage nur wenn FAQ-Markup den aktuellen Google-Richtlinien entspricht

Keine erfundenen Bewertungen.

Keine Fake Reviews.

---

# 39. OPEN GRAPH

Pro Seite:

- `og:title`
- `og:description`
- `og:image`
- canonical URL

Social Preview professionell gestalten.

Keine generischen KI-Bilder.

---

# 40. PERFORMANCE

Ziel:

Lighthouse möglichst 90+ in:

- Performance
- Accessibility
- Best Practices
- SEO

Core Web Vitals:

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

Keine unnötigen Libraries.

Keine unnötigen Webfonts.

Fonts:

preload nur wenn sinnvoll.

Images:

- WebP / AVIF
- responsive sizes
- lazy loading unterhalb Fold

Hero-Bild falls vorhanden priorisieren.

---

# 41. JAVASCRIPT

Grundsatz:

so wenig wie möglich.

Vanilla JS bevorzugen.

JS nur für:

- Systemnetz
- Mobile Navigation
- Scroll Reveal
- Formularlogik
- notwendige Interaktionen

Kein Framework hinzufügen, nur weil es modern wirkt.

Wenn bestehendes Framework bereits vorhanden ist:

bestehende Architektur respektieren.

---

# 42. CLOUDFLARE

Bestehendes Cloudflare-Pages-Deployment beibehalten.

Keine neue Hosting-Plattform ohne konkreten Grund.

Vor Änderungen prüfen:

- Cloudflare Pages Projekt
- Build Command
- Publish Directory
- Environment Variables
- Redirect-Datei / `_redirects` / Cloudflare Redirect Rules
- Pages Functions
- bestehende Deploy Hooks
- Domain / DNS
- robots.txt
- sitemap.xml
- E-Mail-Versand für Anfrageformular

## Formularversand unter Cloudflare

Bevorzugte V1:

Website-Formular  
↓  
Cloudflare Pages Function oder vergleichbar schlanker Endpoint  
↓  
E-Mail an `kontakt@mariowittmer.de`  
↓  
keine Datenbank

Mögliche Mailwege prüfen:

- Zoho-kompatibler Versandweg
- Resend oder vergleichbarer E-Mail-API-Dienst
- anderer datenschutzvertretbarer Formular-/Mail-Dienst
- Mailto nur als Fallback, nicht als bevorzugte professionelle Lösung

Wichtig:

- keine API-Keys oder Secrets im Frontend
- Secrets nur als Cloudflare Environment Variables
- keine produktiven Secrets ohne ausdrückliche Freigabe eintragen
- Datenschutztext an tatsächlichen Formularversand-Anbieter anpassen

---

# 43. REDIRECTS / ALTSEITEN

Vor Löschen alter Seiten:

Liste aller bestehenden URLs erstellen.

Für jede URL entscheiden:

- KEEP
- HIDE FROM NAV
- REDIRECT
- REMOVE

Grundsatz:

Wenn alte Seite bereits Google-Traffic oder Links haben könnte:

nicht einfach löschen.

301 auf sinnvollste Zielseite.

Beispiele:

alte HSF-Seite:

KEEP / HIDE FROM NAV

PflichtVorteil:

KEEP / HIDE FROM NAV

alte Routing-Seiten:

REDIRECT oder entfernen, wenn ohne externen Traffic.

Aus IST-Aufnahme besonders prüfen:

- `/warum-ich/` → eventuell 301 auf `/ueber-mario/`
- `/ueber-mich/` aus alten Astro-Ständen → eventuell 301 auf `/ueber-mario/`
- `/faq/` → KEEP oder Integration in Startseite plus Redirect/Keep entscheiden
- `/realisation/` → KEEP/HIDE oder Redirect entscheiden
- Trailing-Slash-Verhalten konsistent halten
- `www` ↔ non-www prüfen

---

# 44. TYPEBOTS

Bestehende Typebots bleiben als nachgelagerte oder spezialisierte Prozesswerkzeuge erhalten.

Sie werden nicht in die neue Hauptnavigation oder den öffentlichen Startseiten-Funnel eingebunden.

Ein Typebot wird nur dort verwendet, wo die jeweilige Seite oder der vorherige Gesprächskontext seinen Zweck eindeutig erklärt.

Verwendung zukünftig:

- nach Qualifizierung
- direkte Kampagnenlinks
- interne Diagnostik
- bestehende Produkte
- individuelle Folgepfade
- spezialisierte Prozesswerkzeuge mit klar erklärtem Zweck

Der bisherige Startseiten-Routingbot „Solo oder Team?“ entfällt als öffentlicher Startseiten-Funnel.

Bestehende bekannte URLs:

- `https://bot.mariowittmer.de/routing-bot-zvfeydx`
- `https://bot.mariowittmer.de/human-system-fit`
- `https://bot.mariowittmer.de/5-pflicht-vorteil-check-zu7kbqf`

---

# 45. ANALYTICS

Falls Analytics vorhanden:

bestehende Lösung prüfen.

Keine unnötige neue Tracking-Plattform.

Mindestens Events:

- `hero_cta_click`
- `form_start`
- `form_submit`
- `tea_time_invite_click`
- `vorgehen_click`

DSGVO berücksichtigen.

Hinweis aus IST-Aufnahme:

Aktuell wurde kein klassisches Tracking wie Google Analytics, GTM, Plausible, Umami, Meta Pixel oder Hotjar sichtbar gefunden. Cloudflare kann server-/dashboardseitige Analytics bereitstellen; tatsächliche Nutzung prüfen.

---

# 46. FORMULAR-DATENSCHUTZ

Nur notwendige Daten erheben.

Kein Newsletter-Abo automatisch.

Privacy Link direkt am Formular.

Spam-Schutz möglichst datenschutzfreundlich.

Keine unnötigen Captchas.

Empfehlung V1:

- Honeypot-Feld
- einfache Plausibilitäts-/Zeitprüfung
- keine harten Captchas am Anfang
- Datenschutztext nach tatsächlichem Mail-/Formularanbieter aktualisieren

---

# 47. FOOTER

Kompakt.

Mario Wittmer

Navigation:

- Start
- Vorgehen
- Über Mario
- Kontakt

Recht:

- Impressum
- Datenschutz
- AGB falls relevant

Optional:

- LinkedIn

Keine riesige Footer-Navigation.

Kontaktadresse konsolidieren:

> `kontakt@mariowittmer.de`

---

# 48. NICHT UMSETZEN

Nicht verwenden:

- AI-Neon
- Roboterbilder
- Gehirngrafiken
- 3D-Partikel
- Tool-Logo-Walls
- animierte ChatGPT-/Claude-/Gemini-Logos
- große Frameworks nur für Animation
- Scroll-Jacking
- Autoplay-Sound
- Video-Hintergründe ohne echten Nutzen
- Fake Testimonials
- erfundene Zahlen
- generische SaaS-Preistabellen
- öffentliche kostenlose Kalenderbuchung für alle

---

# 49. TEXTREGELN

Texte NICHT eigenmächtig umformulieren.

Insbesondere verbindlich:

> Deine Welt ändert sich durch KI. Gehst du mit?

> Nicht die Software bestimmt die Lösung. Deine Anforderungen und Ziele bestimmen das Werkzeug.

> Abo-Kosten sind sichtbar. Was euch das falsche Tool im Alltag kostet, nicht.

> Was genau soll bei uns besser werden – und welches Werkzeug oder welche Kombination löst das am wirtschaftlichsten?

> eine Entscheidung – keine Produktpräsentation.

> Ich arbeite mit KI. Ich arbeite mit Unternehmen. Ich arbeite mit Menschen.

> Danke für deine Anfrage. Ich melde mich in Kürze.

Abweichungen nur bei:

- Tippfehler
- Grammatik
- zwingende mobile Kürzung nach Freigabe

---

# 50. TESTING VOR DEPLOY

Desktop testen:

- Chrome
- Edge
- Firefox

Mobile testen:

- Chrome Android
- Safari iPhone

Breakpoints mindestens:

- 375px
- 430px
- 768px
- 1024px
- 1440px

Prüfen:

- Navigation
- Links
- Systemnetz
- Hover
- Tap
- Keyboard
- Formular
- Bestätigung
- Reduced Motion
- Dark/Light falls relevant
- Bilder
- CLS
- Form Error States

---

# 51. CONTENT QA

Vor Deploy prüfen:

- alte Positionierung entfernt?
- HSF nicht mehr Hauptentry?
- PflichtVorteil nicht mehr Hauptentry?
- kein Solo-vs-Team-Routing?
- Hero exakt?
- nur ein dominanter CTA?
- Tea Time nicht offen buchbar?
- KI nicht als Selbstzweck dargestellt?
- wirtschaftlicher Mehrwert klar?
- Texte nicht künstlich aufgebläht?
- keine Dopplungen?
- Kontaktadresse konsistent `kontakt@mariowittmer.de`?

---

# 52. TECHNICAL QA

Prüfen:

- keine Console Errors
- keine 404 intern
- saubere 301 Redirects
- Sitemap
- robots.txt
- canonical
- structured data
- metadata
- OG
- responsive images
- Lazy Loading
- Lighthouse
- Accessibility
- Form Submit
- Formular-E-Mail kommt bei `kontakt@mariowittmer.de` an
- keine API-Keys/Secrets im Frontend

---

# 53. DEPLOY-STRATEGIE

1. Bestehendes Repo sichern
2. neue Branch erstellen
3. bestehende Website analysieren
4. Änderungen implementieren
5. lokale / Preview Tests
6. Cloudflare Preview Deploy
7. visuelle QA
8. Mobile QA
9. SEO / Redirect QA
10. Formularversand mit echter Testanfrage prüfen
11. Production Deploy

Kein Direktumbau in Production ohne Preview.

---

# 54. CODEX-INSTRUKTION

Codex soll:

1. zuerst das bestehende Projekt vollständig analysieren
2. Framework / Buildsystem nicht unnötig ändern
3. wiederverwendbare bestehende Komponenten erhalten
4. Website gemäß dieser Spec refactoren
5. alte unnötige öffentliche Einstiege entfernen
6. bestehende Spezialseiten erhalten, wenn kein Redirect definiert ist
7. Systemnetz implementieren
8. Mobile-first prüfen
9. SEO-Metadaten ergänzen
10. Accessibility umsetzen
11. Performance prüfen
12. Formularversand an `kontakt@mariowittmer.de` implementieren oder klar blockierende Voraussetzung markieren
13. Tests durchführen
14. Cloudflare Preview Deploy vorbereiten

## Strikte Regel

> Keine Änderungen an Positionierung oder Copy aus eigener Initiative.

Wenn technisch eine Änderung nötig erscheint:

zuerst markieren, nicht eigenmächtig textlich verändern.

---

# 55. DEFINITION OF DONE

Die Website gilt erst als fertig, wenn:

- Positionierung innerhalb weniger Sekunden verständlich ist
- Hero sitzt
- Website sichtbar modern wirkt
- Mobile mindestens genauso gut funktioniert wie Desktop
- Systemnetz funktioniert
- Anfrageformular funktioniert
- Anfrage per E-Mail an `kontakt@mariowittmer.de` ankommt
- Erfolgsmeldung exakt erscheint: „Danke für deine Anfrage. Ich melde mich in Kürze."
- Tea Time geschützt bleibt
- HSF und Gefährdungsbeurteilung weiter nutzbar sind
- öffentliche Architektur schlank ist
- keine konkurrierenden Funnels sichtbar sind
- SEO sauber umgesetzt ist
- Lighthouse-Werte solide sind
- keine Console Errors bestehen
- keine unnötigen Dependencies hinzugefügt wurden
- Cloudflare Preview geprüft wurde
- Production deploybereit ist

---

# 56. ZENTRALE LEITREGEL

Die Website soll nicht zeigen:

> Was kann Mario alles?

Sie soll beantworten:

> Was bringt mir Mario bei meinem aktuellen Thema?

und danach:

> Wie komme ich mit meinem Thema zu ihm?

Die technische und visuelle Umsetzung dient genau diesem Ziel.

---

END OF SPEC
