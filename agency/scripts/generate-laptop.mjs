import sharp from "sharp";

const svg = `
<svg width="1024" height="768" viewBox="0 0 1024 768" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fef3c7"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
  </defs>
  <rect width="1024" height="768" fill="url(#bg)" rx="40"/>
  <!-- Laptop screen bezel -->
  <rect x="102" y="30" width="820" height="580" rx="20" fill="#1e293b"/>
  <!-- Screen -->
  <rect x="132" y="60" width="760" height="520" rx="8" fill="#0f172a"/>
  <!-- Browser bar -->
  <rect x="132" y="60" width="760" height="40" rx="8" fill="#1e293b"/>
  <rect x="132" y="92" width="760" height="8" fill="#1e293b"/>
  <!-- Dots -->
  <circle cx="155" cy="80" r="6" fill="#ef4444"/>
  <circle cx="175" cy="80" r="6" fill="#f59e0b"/>
  <circle cx="195" cy="80" r="6" fill="#22c55e"/>
  <!-- Content blocks -->
  <rect x="165" y="120" width="200" height="28" rx="6" fill="#f59e0b" opacity="0.8"/>
  <rect x="165" y="165" width="500" height="14" rx="4" fill="#475569"/>
  <rect x="165" y="190" width="450" height="14" rx="4" fill="#475569"/>
  <rect x="165" y="215" width="520" height="14" rx="4" fill="#475569"/>
  <rect x="165" y="250" width="250" height="14" rx="4" fill="#475569"/>
  <!-- Cards -->
  <rect x="165" y="290" width="694" height="220" rx="12" fill="#334155"/>
  <rect x="200" y="330" width="160" height="140" rx="10" fill="#f59e0b" opacity="0.25"/>
  <circle cx="280" cy="370" r="30" fill="#f59e0b" opacity="0.4"/>
  <rect x="390" y="330" width="160" height="140" rx="10" fill="#f59e0b" opacity="0.25"/>
  <rect x="580" y="330" width="160" height="140" rx="10" fill="#f59e0b" opacity="0.25"/>
  <!-- Laptop base -->
  <rect x="105" y="590" width="814" height="20" rx="10" fill="#cbd5e1"/>
  <path d="M512 610 L420 640 Q400 650 400 660 L624 660 Q624 650 604 640 L512 610Z" fill="#94a3b8"/>
  <text x="512" y="656" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748b">WEBSBOND</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile("src/assets/laptop.png");
console.log("Generated src/assets/laptop.png (1024x768)");
