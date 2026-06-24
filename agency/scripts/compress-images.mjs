import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname } from "path";

const ASSETS = "src/assets";
const files = readdirSync(ASSETS);
let totalSaved = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const inputPath = join(ASSETS, file);
  const before = statSync(inputPath).size;
  const isPNG = ext === ".png";

  let pipeline = sharp(inputPath);
  if (isPNG) {
    const isLogo = file === "websbond-logo-3d.png";
    if (isLogo) {
      pipeline = pipeline.resize(256, 256).png({ quality: 65, compressionLevel: 9, palette: true });
    } else {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
    }
  } else {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
  }
  await pipeline.toFile(inputPath + ".tmp");

  const after = statSync(inputPath + ".tmp").size;
  const saved = before - after;
  const pct = ((saved / before) * 100).toFixed(1);
  totalSaved += saved;

  // Rename tmp -> original
  const { renameSync, unlinkSync } = await import("fs");
  unlinkSync(inputPath);
  renameSync(inputPath + ".tmp", inputPath);

  console.log(`  ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB  (-${pct}%)  ${file}`);
}

console.log(`\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
