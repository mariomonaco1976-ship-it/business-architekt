import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "dist");

const ignored = new Set([
  ".git",
  "dist",
  "node_modules",
  "tmp",
]);

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}

fs.mkdirSync(outDir, { recursive: true });

for (const entry of fs.readdirSync(root)) {
  if (ignored.has(entry)) continue;

  const sourcePath = path.join(root, entry);
  const targetPath = path.join(outDir, entry);

  fs.cpSync(sourcePath, targetPath, { recursive: true });
}

console.log("Static build complete: dist/");