# RELAUNCH_URL_DECISIONS.md
# MarioWittmer.de – URL-Inventar und Relaunch-Entscheidungen

Status: Arbeitsstand für Relaunch-Branch `relaunch-2026-cloudflare`
Quelle: Live-Crawl `https://mariowittmer.de/` + lokales Deploy-Repo `business-architekt-deploy`
Zweck: Vor dem Relaunch festlegen, welche bestehenden URLs behalten, aus der Navigation entfernt, weitergeleitet oder entfernt werden.

---

## 1. Grundsatz

Keine bestehende öffentliche URL wird ohne Entscheidung gelöscht.

Spezialseiten wie Human System Fit und PflichtVorteil bleiben erreichbar, werden aber nicht mehr als gleichwertige Haupteinstiege in der neuen öffentlichen Navigation geführt.

Die neue Hauptarchitektur lautet:

- `/`
- `/vorgehen/`
- `/ueber-mario/`
- `/kontakt/`

---

## 2. Aktuell live gefundene öffentliche URLs

| URL | Status live | Aktuelle Rolle | Relaunch-Entscheidung | Begründung / Aktion |
|---|---:|---|---|---|
| `/` | 200 | Startseite mit altem Reibungs-/Solo-Team-Funnel und Routing-Typebot | KEEP / REBUILD | Wird neue Hauptstartseite gemäß Spec. Alter öffentlicher Solo-vs-Team-Routingbot entfällt aus Startseiten-Funnel. |
| `/human-system-fit/` | 200 | Spezialseite / Produktpfad HSF mit Typebot | KEEP / HIDE FROM NAV | Nicht löschen. Bleibt für Direktlinks, bestehende Kunden, Kampagnen und Folgepfade. Nicht in Hauptnavigation. Typebot nur mit erklärtem Seitenkontext. |
| `/pflichtvorteil/` | 200 | Spezialseite / PflichtVorteil / PsychGB mit Typebot | KEEP / HIDE FROM NAV | Nicht löschen. Bleibt für Direktlinks, Google, Kampagnen und Fachbedarf. Nicht in Hauptnavigation. Kein primärer KI-Verkaufshook auf Startseite. |
| `/warum-ich/` | 200 | bisherige Über-mich-Seite | REDIRECT nach `/ueber-mario/` nach Neubau | Neue Spec nennt `/ueber-mario/`. Inhaltlich gute Bestandteile übernehmen, danach 301 von alter URL auf neue URL. |
| `/faq/` | 200 | eigene FAQ-Seite | KEEP zunächst / ggf. HIDE FROM NAV | FAQ wird auf Startseite integriert. Bestehende URL sollte vorerst erhalten bleiben, um Links nicht zu brechen. Später entscheiden: eigenständige FAQ behalten oder 301 auf `/#faq`. |
| `/realisation/` | 200 | 2nd-Step-Folgeseite | KEEP zunächst / HIDE FROM NAV | Aus Hauptnavigation entfernen. Kann als nachgelagerter Kontext/Folgepfad erhalten bleiben. Später prüfen, ob Inhalt in `/vorgehen/` oder Folgekommunikation aufgeht. |
| `/impressum/` | 200 | Rechtliches | KEEP | Rechtlich erforderlich. Inhalt vor Relaunch nur mit Freigabe/Rechtsprüfung ändern. |
| `/datenschutz/` | 200 | Rechtliches | KEEP / UPDATE NACH FORMULARTECHNIK | Muss bleiben. Nach Entscheidung Formularversand/API Anbieter Datenschutzabschnitt aktualisieren. |
| `/agb/` | 200 | Rechtliches | KEEP / PRÜFEN | Vorerst behalten. Prüfen, ob AGB für neue Angebotslogik öffentlich weiter sinnvoll/relevant sind. Keine ungeprüfte Löschung. |

---

## 3. Neue URLs laut Spec

| URL | Status aktuell | Relaunch-Entscheidung | Aktion |
|---|---|---|---|
| `/vorgehen/` | fehlt | CREATE | Neue Methodik-/Systemblick-Seite bauen. |
| `/ueber-mario/` | fehlt | CREATE | Neue Über-Mario-Seite bauen. Gute Inhalte aus `/warum-ich/` übernehmen, KI-Positionierung ergänzen. |
| `/kontakt/` | fehlt | CREATE | Neue Kontakt-/Qualifizierungsseite mit Formular. Formularziel: ausschließlich E-Mail an `kontakt@mariowittmer.de`, keine Datenbank. |

---

## 4. Alte/abweichende URLs aus Projektständen

| URL / Muster | Herkunft | Entscheidung | Aktion |
|---|---|---|---|
| `/ueber-mich/` | älterer Astro-Stand | REDIRECT nach `/ueber-mario/` | 301 aufnehmen, da alte Entwürfe/Links existieren könnten. |
| `/#routing` | aktueller Startseiten-Routingbot | REMOVE/REPLACE | Neuer Startseiten-Funnel nutzt `#anfrage` bzw. `/kontakt/`. Alte interne Links ersetzen. |
| `/pflichtvorteil/#check` | aktuelle PflichtVorteil-Typebot-Section | KEEP innerhalb Spezialseite | Spezialseiten dürfen Typebots nutzen, wenn Zweck klar erklärt ist. |
| `/human-system-fit/#start` | aktuelle HSF-Typebot-Section | KEEP innerhalb Spezialseite | Spezialseiten dürfen Typebots nutzen, wenn Zweck klar erklärt ist. |
| `/realisation/` aus Hauptnav | aktueller Hauptnav-Eintrag | HIDE FROM NAV | Seite vorerst erreichbar lassen, aber nicht öffentlich prominent führen. |

---

## 5. Navigation neu

Neue Hauptnavigation Desktop/Mobile:

- Start → `/`
- Vorgehen → `/vorgehen/`
- Über Mario → `/ueber-mario/`
- Kontakt → `/kontakt/`

Primärer CTA:

- Was ist dein Ziel? → bevorzugt `/#anfrage` oder `/kontakt/` je nach finaler Startseitenstruktur

Aus Hauptnavigation entfernen:

- Human System Fit
- §5 PflichtVorteil
- Warum ich
- FAQ
- 2nd Step / Realisation

---

## 6. Typebot-Entscheidungen

Bestehende Typebots bleiben als nachgelagerte oder spezialisierte Prozesswerkzeuge erhalten.

Sie werden nicht in die neue Hauptnavigation oder den öffentlichen Startseiten-Funnel eingebunden.

Ein Typebot wird nur dort verwendet, wo die jeweilige Seite oder der vorherige Gesprächskontext seinen Zweck eindeutig erklärt.

Aktuelle bekannte Typebot-URLs:

- `https://bot.mariowittmer.de/routing-bot-zvfeydx`
- `https://bot.mariowittmer.de/human-system-fit`
- `https://bot.mariowittmer.de/5-pflicht-vorteil-check-zu7kbqf`

Entscheidung:

- Startseiten-Routingbot entfällt als öffentlicher Startseiten-Funnel.
- HSF-Typebot bleibt auf HSF-Spezialseite, wenn Kontext eindeutig erklärt ist.
- PflichtVorteil-Typebot bleibt auf PflichtVorteil-Spezialseite, wenn Kontext eindeutig erklärt ist.
- Routingbot kann intern/kampagnenspezifisch erhalten bleiben, aber nicht prominent auf neuer Startseite.

---

## 7. Externe Links / Kontakt

Gefunden:

- `mailto:hi@mariowittmer.de` auf aktueller Startseite und `/warum-ich/`
- `kontakt@mariowittmer.de` in Impressum/Datenschutz und neuer Spec
- `https://www.gesetze-im-internet.de/` auf PflichtVorteil

Relaunch-Entscheidung:

- öffentliche Kontaktadresse konsolidieren auf `kontakt@mariowittmer.de`
- bestehende `hi@`-Links ersetzen oder bewusst nur intern/persönlich nutzen
- Formularziel ausschließlich `kontakt@mariowittmer.de`

---

## 8. Redirect-Entwurf für spätere `_redirects`

Noch nicht aktivieren, solange Zielseiten nicht gebaut sind.

```text
/warum-ich/   /ueber-mario/   301
/ueber-mich/  /ueber-mario/   301
```

Optional später entscheiden:

```text
/faq/          /#faq           301
/realisation/  /vorgehen/      301
```

Aktuelle Empfehlung: `/faq/` und `/realisation/` zunächst behalten und nur aus der Hauptnavigation entfernen.

---

## 9. Build-Auswirkung

Diese Datei ist intern und darf nicht deployed werden.

Das Build-Script arbeitet mit Public-Allowlist. Diese Datei ist nicht Teil der Allowlist und landet nicht in `dist/`.

Wenn neue öffentliche Seiten gebaut werden, muss `build-static.mjs` später um folgende Public Entries ergänzt werden:

- `vorgehen`
- `ueber-mario`
- `kontakt`
- ggf. `_redirects`
- ggf. `_headers`
- ggf. `functions`

---

## 10. Nächster Schritt

Schritt 3: Neue Seitenstruktur und Basislayout bauen:

1. Hauptnavigation auf neue Architektur umstellen.
2. `/` gemäß Spec neu aufbauen.
3. `/vorgehen/`, `/ueber-mario/`, `/kontakt/` erstellen.
4. Spezialseiten erreichbar lassen, aber aus Hauptnavigation entfernen.
5. Danach Redirects aktivieren und Linkprüfung durchführen.
