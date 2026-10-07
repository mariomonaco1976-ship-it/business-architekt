import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "dist");

// Sicherheitsprinzip: Der Build veröffentlicht nur explizit erlaubte öffentliche Artefakte.
// Interne Specs, Planungsdokumente, README, lokale Skripte und sonstige Arbeitsdateien
// dürfen nicht versehentlich in Cloudflare Pages landen.
const publicEntries = [
  "index.html",
  "assets",
  "impressum",
  "datenschutz",
  "agb",
  "robots.txt",
  "sitemap.xml",
  "_redirects",
  "_headers",
];

if (fs.existsSync(outDir)) {
  // Windows kann den dist-Ordner selbst kurz sperren, wenn eine lokale Preview oder der Browser
  // gerade daraus liest. Deshalb löschen wir den Inhalt, aber nicht den Ordner selbst.
  for (const entry of fs.readdirSync(outDir)) {
    fs.rmSync(path.join(outDir, entry), { recursive: true, force: true });
  }
} else {
  fs.mkdirSync(outDir, { recursive: true });
}

for (const entry of publicEntries) {
  const sourcePath = path.join(root, entry);
  if (!fs.existsSync(sourcePath)) continue;

  const targetPath = path.join(outDir, entry);
  fs.cpSync(sourcePath, targetPath, { recursive: true });
}

console.log("Static build complete: dist/");
console.log(`Published entries: ${publicEntries.filter((entry) => fs.existsSync(path.join(root, entry))).join(", ")}`);
