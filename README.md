# Business Architekt Website

Statische Website fuer Cloudflare Pages.

## Lokal starten

```powershell
npm run preview
```

Standardmaessig laeuft die Vorschau unter `http://127.0.0.1:4321/`.

## Deployment

Das Repository ist fuer ein branchbasiertes Deployment ueber Cloudflare Pages gedacht.

- `main` = Produktion
- Backup-Stand bleibt in separatem Branch erhalten
- fuer diese statische Version ist kein Build-Schritt erforderlich