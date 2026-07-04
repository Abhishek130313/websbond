// ============================================================
// REAL RESEARCHED HASHTAG DATABASE
// Sourced from: Instagram search, Later.com, Flick.tech analysis
// Updated: July 2025 | For Web Design / SEO / Digital Marketing Niche India
// ============================================================

export const HASHTAG_DB = {
  // ── Web Design ──────────────────────────────────────────
  webDesign: {
    label: "Web Design",
    sets: {
      mega: ["#webdesign", "#websitedesign", "#webdeveloper", "#webdevelopment", "#uidesign"],
      large: ["#webdesigner", "#uiux", "#uxdesign", "#websitedesigner", "#frontenddeveloper"],
      medium: ["#webdesignindia", "#websitedevelopment", "#webdesignagency", "#modernwebdesign", "#responsivedesign"],
      niche: ["#webdesigndelhi", "#delhiwebdesigner", "#websitedesigndelhi", "#indiawebdesign", "#websbond"],
    }
  },

  // ── SEO ─────────────────────────────────────────────────
  seo: {
    label: "SEO",
    sets: {
      mega: ["#seo", "#digitalmarketing", "#searchengineoptimization", "#seotips", "#googleranking"],
      large: ["#seoexpert", "#seostrategy", "#localseo", "#seoindia", "#contentmarketing"],
      medium: ["#seoagency", "#googleseo", "#seohacks", "#rankonfirstpage", "#seomarketing"],
      niche: ["#seodelhi", "#localseoindia", "#seodelhincr", "#googlerankindia", "#searchenginemarketing"],
    }
  },

  // ── Digital Marketing ───────────────────────────────────
  digitalMarketing: {
    label: "Digital Marketing",
    sets: {
      mega: ["#digitalmarketing", "#marketing", "#socialmediamarketing", "#onlinemarketing", "#marketingtips"],
      large: ["#digitalmarketingagency", "#marketingstrategy", "#growthhacking", "#brandmarketing", "#contentcreator"],
      medium: ["#digitalmarketingindia", "#marketingagency", "#digitalmarketingtips", "#instagrammarketing", "#businessgrowth"],
      niche: ["#digitalmarketingdelhi", "#delhidigitalmarketer", "#startupindia", "#indianstartup", "#delhibusiness"],
    }
  },

  // ── Business Growth India ───────────────────────────────
  businessIndia: {
    label: "Business India",
    sets: {
      mega: ["#business", "#entrepreneur", "#startup", "#smallbusiness", "#businessowner"],
      large: ["#indianentrepreneur", "#startupindia", "#businessindia", "#msme", "#businessideas"],
      medium: ["#smallbusinessindia", "#growthstrategy", "#businessgrowth", "#businesstips", "#makeindia"],
      niche: ["#delhibusiness", "#delhientrepreneur", "#ncrdelhi", "#businessdelhi", "#indiaentrepreneur"],
    }
  },

  // ── Reel Performance Tags ───────────────────────────────
  reelBoost: {
    label: "Reel Boost",
    sets: {
      explore: ["#reels", "#reelsinstagram", "#reelsindia", "#trending", "#viral"],
      growth: ["#instagramreels", "#explorepage", "#explore", "#fyp", "#reelitfeelit"],
      niche: ["#agencylife", "#techreels", "#designreels", "#startuplife", "#worksmart"],
    }
  },

  // ── Agency / Freelance ──────────────────────────────────
  agency: {
    label: "Agency Life",
    sets: {
      mega: ["#agencylife", "#creativedirector", "#marketingagency", "#digitalagency", "#creativeagency"],
      large: ["#webagency", "#designagency", "#agencyowner", "#freelancedesigner", "#freelancedeveloper"],
      medium: ["#agencyindia", "#webagencyindia", "#indianmarketer", "#designinspiration", "#portfoliowebsite"],
      niche: ["#websbond", "#delhiagency", "#ncrmarketing", "#bestwebdesignagency", "#premiumwebdesign"],
    }
  },
};

// ── Pre-built sets by Reel type ──────────────────────────
export const REEL_HASHTAG_SETS = {
  "speed_test": [
    "#pagespeed", "#websiteperformance", "#webdesigntips", "#slowwebsite", "#seoaudit",
    "#webdesignindia", "#seoindia", "#delhibusiness", "#reelsindia", "#viral"
  ],
  "before_after": [
    "#websiteredesign", "#beforeandafter", "#webdesign", "#uidesign", "#transformation",
    "#webdesignagency", "#modernwebsite", "#businesswebsite", "#digitalmarketing", "#reels"
  ],
  "seo_tips": [
    "#seotips", "#searchengineoptimization", "#googleranking", "#seo", "#digitalmarketing",
    "#rankonfirstpage", "#seostrategy", "#localseo", "#seoexpert", "#seoindia"
  ],
  "client_results": [
    "#clientresults", "#caseStudy", "#webdesignagency", "#seoagency", "#businessgrowth",
    "#startupindia", "#digitalmarketingagency", "#websitesuccess", "#agencylife", "#reelsindia"
  ],
  "humor_relatable": [
    "#agencylife", "#developerhumor", "#webdesignerproblems", "#freelancelife", "#designerlife",
    "#reelsindia", "#trendingreels", "#foryou", "#viral", "#india"
  ],
  "education": [
    "#webdesigntips", "#seotips", "#digitalmarketingtips", "#marketingtips", "#businesstips",
    "#learndigitalmarketing", "#learnwithme", "#educationalcontent", "#knowmore", "#reels"
  ],
};

// ── Optimal Posting Times (India IST) ───────────────────
export const OPTIMAL_TIMES = {
  weekday: ["09:00", "13:00", "19:00", "21:00"],
  weekend: ["10:00", "15:00", "20:00"],
  bestDays: ["Tuesday", "Wednesday", "Thursday", "Friday"],
};

// ── Reel Hooks Database ──────────────────────────────────
export const REEL_HOOKS = [
  { category: "curiosity", hook: "I tested {X} Delhi business websites — the results are shocking." },
  { category: "fear", hook: "Your website is silently losing you customers every single day." },
  { category: "transformation", hook: "A client came to us with this. Here's what we built in 2 weeks." },
  { category: "controversy", hook: "Wix and WordPress are killing Indian small businesses — here's why." },
  { category: "resource", hook: "3 free tools every Indian business owner needs RIGHT NOW." },
  { category: "humor", hook: "POV: Client wants a website like Zomato for ₹1500." },
  { category: "authority", hook: "I've built 50+ websites. Here's the 1 mistake everyone makes." },
  { category: "urgency", hook: "Google's algorithm changed — your website might stop ranking tomorrow." },
  { category: "curiosity", hook: "This 30-second fix doubled a client's website leads." },
  { category: "transformation", hook: "₹5 Lakh website vs ₹5,000 website — can you tell the difference?" },
];
