const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const badgesDir = path.join(__dirname, 'public/badges');

const files = [
  { name: 'badge_webdesign', src: 'badge_webdesign.jpg', out: 'badge_webdesign.png' },
  { name: 'badge_aipowered', src: 'badge_aipowered.jpg', out: 'badge_aipowered.png' },
  { name: 'badge_fullservice', src: 'badge_fullservice.jpg', out: 'badge_fullservice.png' },
  { name: 'badge_speed100', src: 'badge_speed100.jpg', out: 'badge_speed100.png' },
  { name: 'badge_topseo', src: 'badge_topseo.jpg', out: 'badge_topseo.png' }
];

async function processBadge(file) {
  const srcPath = path.join(badgesDir, file.src);
  const outPath = path.join(badgesDir, file.out);

  if (!fs.existsSync(srcPath)) {
    console.error('Source not found:', srcPath);
    return;
  }

  const { data, info } = await sharp(srcPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // We want to detect background near corners or edges
  // Sample background color from top-left, top-right, bottom-left, bottom-right corners
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
    [Math.floor(width / 2), 0],
    [Math.floor(width / 2), height - 1]
  ];

  let bgR = 0, bgG = 0, bgB = 0;
  for (const [cx, cy] of corners) {
    const idx = (cy * width + cx) * channels;
    bgR += data[idx];
    bgG += data[idx + 1];
    bgB += data[idx + 2];
  }
  bgR /= corners.length;
  bgG /= corners.length;
  bgB /= corners.length;

  console.log(`Processing ${file.name}, detected background RGB: (${bgR.toFixed(1)}, ${bgG.toFixed(1)}, ${bgB.toFixed(1)})`);

  // Flood fill / distance-based transparency masking
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Distance to background color
    const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

    // Also check overall lightness for pure white / near-white backgrounds
    const maxVal = Math.max(r, g, b);
    const minVal = Math.min(r, g, b);
    const isVeryLight = minVal > 240 && maxVal > 248;

    if (dist < 15 || isVeryLight) {
      data[i + 3] = 0; // Fully transparent
    } else if (dist < 35) {
      // Smooth alpha transition to eliminate white halo
      const alpha = Math.round(((dist - 15) / 20) * 255);
      data[i + 3] = Math.min(data[i + 3], alpha);
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
  .png({ compressionLevel: 9, quality: 100 })
  .toFile(outPath);

  console.log(`Saved transparent badge to ${outPath}`);
}

async function run() {
  for (const f of files) {
    await processBadge(f);
  }
  console.log('All transparent badges created successfully!');
}

run().catch(console.error);
