const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4321);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
};

const server = http.createServer((request, response) => {
  const urlPath = decodeURIComponent(request.url.split("?")[0]);
  let filePath = path.join(root, urlPath === "/" ? "index.html" : urlPath);

  if (filePath.endsWith(path.sep)) filePath = path.join(filePath, "index.html");
  if (!path.extname(filePath)) filePath = path.join(filePath, "index.html");

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Nicht gefunden");
      return;
    }

    response.writeHead(200, {
      "content-type": types[path.extname(filePath)] || "application/octet-stream",
    });
    response.end(content);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Vorschau läuft: http://127.0.0.1:${port}/`);
});
