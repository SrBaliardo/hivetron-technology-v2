const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "../out");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function resolveFile(url) {
  const pathname = decodeURIComponent(
    new URL(url, "http://localhost").pathname,
  );
  const requested = path.resolve(root, `.${pathname}`);
  if (requested !== root && !requested.startsWith(root + path.sep)) return null;
  return [
    requested,
    `${requested}.html`,
    path.join(requested, "index.html"),
  ].find(
    (candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile(),
  );
}

function createServer() {
  return http.createServer((req, res) => {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405, { Allow: "GET, HEAD" });
      res.end();
      return;
    }
    let file;
    try {
      file = resolveFile(req.url);
    } catch {
      res.writeHead(400);
      res.end();
      return;
    }
    if (!file) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      const fallback = path.join(root, "404.html");
      if (req.method === "HEAD" || !fs.existsSync(fallback)) res.end();
      else fs.createReadStream(fallback).pipe(res);
      return;
    }
    res.writeHead(200, {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
      "Content-Length": fs.statSync(file).size,
      "Cache-Control": file.includes(
        `${path.sep}_next${path.sep}static${path.sep}`,
      )
        ? "public, max-age=31536000, immutable"
        : "no-cache",
      "X-Content-Type-Options": "nosniff",
    });
    if (req.method === "HEAD") res.end();
    else fs.createReadStream(file).pipe(res);
  });
}

if (require.main === module) {
  if (!fs.existsSync(path.join(root, "index.html"))) {
    console.error("Execute npm run build antes de iniciar a prévia estática.");
    process.exitCode = 1;
  } else {
    createServer().listen(port, "127.0.0.1", () =>
      console.log(`Prévia estática: http://127.0.0.1:${port}`),
    );
  }
}
module.exports = { createServer };
