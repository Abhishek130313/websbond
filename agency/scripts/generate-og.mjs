import sharp from "sharp";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0f1c"/>
      <stop offset="100%" stop-color="#1a1f3a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- Accent glow -->
  <circle cx="900" cy="100" r="400" fill="#f59e0b" opacity="0.08"/>
  <circle cx="200" cy="500" r="300" fill="#f59e0b" opacity="0.05"/>
  <!-- Brand mark -->
  <rect x="80" y="60" width="80" height="80" rx="20" fill="#f59e0b"/>
  <text x="120" y="112" text-anchor="middle" font-family="sans-serif" font-size="36" font-weight="bold" fill="#0a0f1c">W</text>
  <!-- Title -->
  <text x="80" y="300" font-family="sans-serif" font-size="72" font-weight="800" fill="#ffffff">Websbond</text>
  <text x="80" y="370" font-family="sans-serif" font-size="32" font-weight="400" fill="#94a3b8">Digital Solutions That Drive Real Results</text>
  <!-- Features -->
  <rect x="80" y="430" width="160" height="50" rx="25" fill="#f59e0b"/>
  <text x="160" y="462" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#0a0f1c">Websites</text>
  <rect x="260" y="430" width="160" height="50" rx="25" fill="#334155"/>
  <text x="340" y="462" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="600" fill="#ffffff">SEO</text>
  <rect x="440" y="430" width="160" height="50" rx="25" fill="#334155"/>
  <text x="520" y="462" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="600" fill="#ffffff">Marketing</text>
  <rect x="620" y="430" width="160" height="50" rx="25" fill="#334155"/>
  <text x="700" y="462" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="600" fill="#ffffff">Support</text>
  <!-- URL -->
  <text x="80" y="550" font-family="sans-serif" font-size="24" font-weight="600" fill="#f59e0b">websbond.com</text>
  <!-- Right side illustration -->
  <rect x="700" y="140" width="420" height="280" rx="20" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <rect x="730" y="170" width="360" height="40" rx="8" fill="#334155"/>
  <circle cx="750" cy="190" r="6" fill="#ef4444"/>
  <circle cx="768" cy="190" r="6" fill="#f59e0b"/>
  <circle cx="786" cy="190" r="6" fill="#22c55e"/>
  <rect x="730" y="230" width="250" height="18" rx="6" fill="#f59e0b" opacity="0.7"/>
  <rect x="730" y="265" width="360" height="12" rx="4" fill="#475569"/>
  <rect x="730" y="288" width="320" height="12" rx="4" fill="#475569"/>
  <rect x="730" y="311" width="360" height="12" rx="4" fill="#475569"/>
  <rect x="730" y="345" width="360" height="50" rx="10" fill="#334155"/>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile("public/og-image.jpg");
console.log("Generated public/og-image.jpg (1200x630)");
