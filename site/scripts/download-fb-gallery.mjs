/**
 * Baixa JPGs públicos da página Meta de origem conhecida (CDN assinado).
 *
 * Como o fbcdn usa URLs efêmeras, atualize `fb-gallery-urls.json` quando
 * o download falhar (novos links no HTML público ou Meta Business Suite).
 *
 * Uso: node scripts/download-fb-gallery.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/media/sentinela/facebook/images");
const URLS_JSON = join(__dirname, "fb-gallery-urls.json");

async function download(url, dest) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/131.0.0.0 Safari/537.36",
      Referer: "https://www.facebook.com/Bettercontroledepragas",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function main() {
  const list = JSON.parse(readFileSync(URLS_JSON, "utf8"));
  mkdirSync(OUT_DIR, { recursive: true });
  for (const row of list) {
    const dest = join(OUT_DIR, row.file);
    const bytes = await download(row.url, dest);
    console.log(`${row.file} OK (${bytes}b)`);
  }
  writeFileSync(
    join(OUT_DIR, "poster-hero.jpg"),
    readFileSync(join(OUT_DIR, "01-capa-sentinel.jpg")),
  );
  console.log("poster-hero.jpg OK (cópia da capa)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
