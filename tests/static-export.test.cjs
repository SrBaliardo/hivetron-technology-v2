const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { once } = require("node:events");
const { createServer } = require("../scripts/serve.cjs");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "out");
const html = fs.readFileSync(path.join(out, "index.html"), "utf8");
const tags = [...html.matchAll(/<(?:\w[\w:-]*)(?:\s[^>]*?)?>/g)].map(
  ([tag]) => tag,
);
const attribute = (tag, name) =>
  tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

test("export contém landmarks, um título principal e destinos únicos de navegação", () => {
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  for (const tag of ["main", "header", "footer", "nav"])
    assert.match(html, new RegExp(`<${tag}\\b`));
  const ids = tags.map((tag) => attribute(tag, "id")).filter(Boolean);
  assert.equal(new Set(ids).size, ids.length, "IDs duplicados");
  for (const id of [
    "top",
    "main",
    "about-section",
    "services-section",
    "devs-section",
    "techs-section",
    "projects-section",
    "contact-section",
  ])
    assert.ok(ids.includes(id), id);
  for (const tag of tags.filter((tag) => tag.startsWith("<a "))) {
    const href = attribute(tag, "href");
    assert.ok(href, `Link sem destino: ${tag}`);
    if (href.startsWith("#"))
      assert.ok(ids.includes(href.slice(1)), `Âncora quebrada: ${href}`);
    if (attribute(tag, "target") === "_blank")
      assert.match(attribute(tag, "rel") || "", /noopener/);
  }
});

test("produtos próprios têm conteúdo real, sem cliente, placeholder ou telas de produto", () => {
  assert.match(html, /Hivetron ERP/);
  assert.match(html, /MedalHive/);
  assert.match(html, /simulados/);
  assert.doesNotMatch(
    html,
    /Heimd4ll|permedal|Project [45]|Select a Project|ex_erp|ex_vending|ex_agennda/i,
  );
  for (const tag of tags.filter((tag) => tag.startsWith("<img "))) {
    assert.ok(attribute(tag, "alt"), "Imagem informativa sem alt");
    assert.ok(
      attribute(tag, "width") && attribute(tag, "height"),
      "Imagem sem dimensões",
    );
    assert.match(attribute(tag, "src"), /^\/images\/(john|lucas)-320\.webp$/);
  }
});

test("recursos locais existem e a página não depende de CDN de fontes ou ícones", () => {
  for (const tag of tags) {
    for (const attr of ["src", "href"]) {
      const url = attribute(tag, attr);
      if (url?.startsWith("/") && !url.startsWith("//")) {
        assert.ok(
          fs.existsSync(path.join(out, url.split("?")[0])),
          `Recurso ausente: ${url}`,
        );
      }
    }
  }
  assert.doesNotMatch(html, /fonts\.googleapis|fonts\.gstatic|cdn\.jsdelivr/);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /aria-controls="primary-navigation"/);
  assert.match(html, /aria-expanded="false"/);
  for (const name of ["manrope-latin.woff2", "space-grotesk-latin.woff2"]) {
    const data = fs.readFileSync(path.join(out, "fonts", name));
    assert.equal(data.subarray(0, 4).toString(), "wOF2");
  }
  assert.ok(!fs.existsSync(path.join(out, ".backups")));
  for (const legacy of ["ex_erp.png", "slide1.png", "facesection-bg-2.png"])
    assert.ok(!fs.existsSync(path.join(out, legacy)));
});

test("exportação não conserva imagens antigas ou cópias de segurança", () => {
  const allowedImages = new Set([
    "bannerMedalHive.jpg", // Arquivo do usuário, não usado na interface.
    "images/john-320.webp",
    "images/lucas-320.webp",
    "images/social-card.png",
  ]);
  const pending = [out];
  while (pending.length) {
    const directory = pending.pop();
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        pending.push(file);
        continue;
      }
      const relative = path.relative(out, file).replaceAll(path.sep, "/");
      assert.ok(!/\.(?:zip|sqlite|env)$/i.test(file), relative);
      if (/\.(?:png|jpe?g|gif|webp|avif)$/i.test(file)) {
        assert.ok(
          allowedImages.has(relative),
          `Imagem não prevista: ${relative}`,
        );
      }
    }
  }
});

test("metadados, sitemap e imagem de compartilhamento são coerentes", () => {
  assert.match(html, /name="description"/);
  const canonical = attribute(
    tags.find((tag) => attribute(tag, "rel") === "canonical"),
    "href",
  );
  assert.ok(canonical?.startsWith("https://"));
  assert.ok(
    fs
      .readFileSync(path.join(out, "sitemap.xml"), "utf8")
      .includes(`<loc>${canonical}</loc>`),
  );
  assert.ok(
    fs
      .readFileSync(path.join(out, "robots.txt"), "utf8")
      .includes(`${canonical}sitemap.xml`),
  );
  const social = attribute(
    tags.find((tag) => attribute(tag, "property") === "og:image"),
    "content",
  );
  assert.ok(fs.existsSync(path.join(out, new URL(social).pathname)));
});

test("prévia serve a exportação, retorna 404 real e não expõe arquivos fora de out", async (context) => {
  const server = createServer();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  context.after(
    () =>
      new Promise((resolve) => {
        server.closeAllConnections();
        server.close(resolve);
      }),
  );
  const base = `http://127.0.0.1:${server.address().port}`;
  assert.equal((await fetch(base)).status, 200);
  assert.equal(
    (
      await fetch(`${base}/fonts/manrope-latin.woff2`, { method: "HEAD" })
    ).headers.get("content-type"),
    "font/woff2",
  );
  for (const route of [
    "/nao-existe",
    "/.backups/",
    "/package.json",
    "/%2e%2e%5cpackage.json",
  ])
    assert.equal((await fetch(`${base}${route}`)).status, 404);
  assert.equal((await fetch(base, { method: "POST" })).status, 405);
});
