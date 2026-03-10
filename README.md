# Business Architekt – Website

Diese Website ist als **statische Astro-Site** mit **TailwindCSS** aufgebaut und wird über **Cloudflare Workers** bereitgestellt.

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

Der Output liegt danach im Ordner `dist/`.

## Deployment

```bash
npm run deploy
```

Stellt die Seite über Cloudflare Workers (Wrangler) bereit. Konfiguration: `wrangler.jsonc`.

## Seitenstruktur

- `/` Startseite
- `/so-funktioniert-es` Business-System-Fit (Ablauf)
- `/warum` Business Architekt (Über mich)
- `/sparring` Sparring
- `/faq` FAQ
- `/impressum` Impressum
- `/datenschutz` Datenschutzerklärung
- `/agb` Allgemeine Geschäftsbedingungen

## Deployment (Cloudflare)

Die Website wird automatisch auf Cloudflare deployt, sobald ein Commit auf den `main`-Branch gepusht wird. Dafür wird der GitHub Actions Workflow `.github/workflows/deploy.yml` verwendet.

### Einmalige Einrichtung – Schritt-für-Schritt

Es werden zwei Werte benötigt: ein **Cloudflare API-Token** und die **Cloudflare Account-ID**. Beide werden als GitHub Secrets hinterlegt.

---

#### Schritt 1 – Cloudflare API-Token erstellen

Du befindest dich bereits auf der Seite **„Token erstellen"** im Cloudflare Dashboard.

1. **Name des Tokens:** `Cloudflare Workers bearbeiten` *(bereits eingetragen)*

2. Scrolle nach unten zum Abschnitt **„Berechtigungen"**.

3. Klicke auf **„+ Berechtigung hinzufügen"** und wähle:
   - Spalte 1 (Kategorie): **Konto**
   - Spalte 2 (Ressource): **Workers Scripts**
   - Spalte 3 (Aktion): **Bearbeiten**

4. Klicke erneut auf **„+ Berechtigung hinzufügen"** und wähle:
   - Spalte 1 (Kategorie): **Konto**
   - Spalte 2 (Ressource): **Workers KV Speicher**
   - Spalte 3 (Aktion): **Bearbeiten**

5. Scrolle nach unten zu **„Kontoressourcen"** und wähle:
   - **Einschließen → Alle Konten** *(oder dein spezifisches Konto)*

6. Klicke auf den blauen Button **„Zusammenfassung anzeigen"**.

7. Prüfe die Zusammenfassung, dann klicke auf **„Token erstellen"**.

8. Die nächste Seite zeigt dir den Token-Wert – **er wird nur einmal angezeigt!**  
   → Kopiere den Token-Wert jetzt in die Zwischenablage (z. B. `abc123xyz...`).

---

#### Schritt 2 – Cloudflare Account-ID herausfinden

1. Öffne in einem neuen Tab: [https://dash.cloudflare.com](https://dash.cloudflare.com)

2. Klicke links in der Seitenleiste auf **„Workers & Pages"**.

3. Auf der rechten Seite (oder unten im Bereich „Kontodetails") siehst du die **Account-ID** – eine lange Zeichenkette wie `a1b2c3d4e5f6...`.

4. Kopiere diese Account-ID.

---

#### Schritt 3 – Beide Werte als GitHub Secrets hinterlegen

1. Öffne dein GitHub Repository: [https://github.com/mariomonaco1976-ship-it/business-architekt](https://github.com/mariomonaco1976-ship-it/business-architekt)

2. Klicke oben auf den Tab **„Settings"** (Zahnrad-Icon).

3. Klicke in der linken Seitenleiste auf **„Secrets and variables"** → dann auf **„Actions"**.

4. Klicke auf den grünen Button **„New repository secret"**.

5. **Erstes Secret – API-Token:**
   - **Name:** `CLOUDFLARE_API_TOKEN`
   - **Secret:** *(hier den kopierten Token-Wert aus Schritt 1 einfügen)*
   - Klicke auf **„Add secret"**.

6. Klicke erneut auf **„New repository secret"**.

7. **Zweites Secret – Account-ID:**
   - **Name:** `CLOUDFLARE_ACCOUNT_ID`
   - **Secret:** *(hier die kopierte Account-ID aus Schritt 2 einfügen)*
   - Klicke auf **„Add secret"**.

---

#### Schritt 4 – Deployment testen

Ab sofort wird bei jedem `git push` auf den `main`-Branch automatisch gebaut und deployt.

Zum Testen: mache eine kleine Änderung, committe und pushe sie:

```bash
git add .
git commit -m "Test: automatisches Deployment"
git push
```

Den Status des Deployments kannst du auf GitHub unter dem Tab **„Actions"** verfolgen.

---

### Lokales Deployment

```bash
npm run deploy
```

## Ordnerstruktur

```text
src/
  components/
    Header.astro
    Footer.astro
  layouts/
    PremiumSubpageLayout.astro
    BaseLayout.astro
  pages/
    index.astro
    so-funktioniert-es.astro
    warum.astro
    sparring.astro
    faq.astro
    impressum.astro
    datenschutz.astro
    agb.astro
  styles/
    global.css
public/
  ba_logo_header.svg
  ba_logo_baum.svg
  ba_logo-schriftzug.svg
  ba_portrait.svg
```
