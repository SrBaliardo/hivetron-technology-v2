const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const destination = path.join(root, "public/images");

async function main() {
  await fs.mkdir(destination, { recursive: true });
  for (const name of ["john", "lucas"]) {
    await sharp(path.join(root, `assets/source/${name}.png`))
      .rotate()
      .resize(320, 320, { fit: "cover", withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(destination, `${name}-320.webp`));
  }
  // Arte institucional em código, sem capturas de produtos ou conteúdo de clientes.
  const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#101110"/>
    <path d="M940 20 1160 147v254L940 528 720 401V147Z" fill="#1e2617"/>
    <path d="m940 114 138 80v160l-138 80-138-80V194Z" fill="none" stroke="#ffb900" stroke-width="20"/>
    <path d="m940 191 71 41-71 25-71-25 71-41Zm-71 47 55 50 16 71-71-42v-79Zm142 0-55 50-16 71 71-42v-79Z" fill="#ffb900"/>
    <text x="80" y="112" fill="#ffb900" font-family="Arial,sans-serif" font-size="23" letter-spacing="4">HIVETRON TECHNOLOGY</text>
    <text x="76" y="268" fill="#f4f3eb" font-family="Arial,sans-serif" font-size="68" font-weight="bold">Ideias conectadas.</text>
    <text x="76" y="355" fill="#ffb900" font-family="Arial,sans-serif" font-size="68" font-weight="bold">Software que resolve.</text>
    <path d="M80 435h570" stroke="#34372e"/>
    <text x="80" y="491" fill="#b2b5a9" font-family="Arial,sans-serif" font-size="24">ERP / WEB / DESKTOP / INTEGRAÇÕES</text>
    <text x="80" y="568" fill="#f4f3eb" font-family="Arial,sans-serif" font-size="17">Construir. Conectar. Entregar.</text>
  </svg>`;
  await sharp(Buffer.from(social))
    .png({ palette: true })
    .toFile(path.join(destination, "social-card.png"));
  for (const name of await fs.readdir(destination)) {
    const { size } = await fs.stat(path.join(destination, name));
    console.log(`${name}: ${(size / 1024).toFixed(1)} KiB`);
  }
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
