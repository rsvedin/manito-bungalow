// Build-time image pipeline: assets/images → public/images as responsive WebP.
// Runs as `prebuild`. Skips files whose outputs are already newer than the source.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const LISTING_SRC = 'assets/images/listing';
const HERO_SRC = 'assets/images/hero-front-of-house.jpg';
const OUT = 'public/images';

const LISTING_WIDTHS = [480, 800, 1200];
const HERO_WIDTHS = [960, 1600, 2560];

async function emit(src, baseName, widths, outDir) {
  const stat = fs.statSync(src);
  let wrote = 0;
  for (const w of widths) {
    const dest = path.join(outDir, `${baseName}-${w}.webp`);
    if (fs.existsSync(dest) && fs.statSync(dest).mtimeMs > stat.mtimeMs) continue;
    await sharp(src)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(dest);
    wrote++;
  }
  return wrote;
}

fs.mkdirSync(path.join(OUT, 'listing'), { recursive: true });

let total = 0;
for (const f of fs.readdirSync(LISTING_SRC).filter(f => f.endsWith('.jpg'))) {
  total += await emit(
    path.join(LISTING_SRC, f),
    path.basename(f, '.jpg'),
    LISTING_WIDTHS,
    path.join(OUT, 'listing'),
  );
}
total += await emit(HERO_SRC, 'hero-front-of-house', HERO_WIDTHS, OUT);

console.log(`build-images: ${total} file(s) written`);
