import sharp from "sharp";
import { join } from "path";

const ASSETS = "src/assets";

async function run() {
  const images = [
    { name: "avatar1.jpg", out: "avatar1.webp", width: 80, height: 80 },
    { name: "avatar2.jpg", out: "avatar2.webp", width: 80, height: 80 },
    { name: "avatar3.jpg", out: "avatar3.webp", width: 80, height: 80 },
    { name: "blog1.jpg", out: "blog1.webp", width: 800 },
    { name: "blog2.jpg", out: "blog2.webp", width: 800 },
    { name: "blog3.jpg", out: "blog3.webp", width: 800 },
    { name: "websbond-logo-3d.png", out: "websbond-logo-3d.webp", width: 128 }
  ];

  for (const img of images) {
    const inputPath = join(ASSETS, img.name);
    const outputPath = join(ASSETS, img.out);
    
    let pipeline = sharp(inputPath);
    if (img.width && img.height) {
      pipeline = pipeline.resize(img.width, img.height);
    } else if (img.width) {
      pipeline = pipeline.resize(img.width);
    }
    
    await pipeline.webp({ quality: 80 }).toFile(outputPath);
    console.log(`Optimized ${img.name} -> ${img.out}`);
  }
}

run().catch(console.error);
