const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "out");
const html = fs.readFileSync(path.join(out, "index.html"), "utf8");
const scriptUrls = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map(
  ([, url]) => url,
);
const totals = { javascript: 0, gzip: 0, images: 0, fonts: 0 };
for (const url of new Set(scriptUrls)) {
  const data = fs.readFileSync(path.join(out, url));
  totals.javascript += data.length;
  totals.gzip += zlib.gzipSync(data).length;
}
for (const name of ["john-320.webp", "lucas-320.webp"])
  totals.images += fs.statSync(path.join(out, "images", name)).size;
for (const name of ["manrope-latin.woff2", "space-grotesk-latin.woff2"])
  totals.fonts += fs.statSync(path.join(out, "fonts", name)).size;
console.log(JSON.stringify(totals, null, 2));
console.log(
  "Tamanhos locais; gzip calculado para comparação. Não mede transferência real, cache ou Core Web Vitals.",
);
