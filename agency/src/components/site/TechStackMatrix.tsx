import { useState } from "react";
import {
  Layers,
  Code2,
  Monitor,
  ShoppingCart,
  Smartphone,
  Cloud,
  ShieldCheck,
  Target,
  ArrowRight,
  PenTool,
  Mail,
  TrendingUp,
  MousePointerClick,
  Search,
  ThumbsUp,
  Globe,
  Zap,
  Server,
  FileCode,
  Sparkles,
  Palette,
  Network,
  Layout,
  Workflow,
  Cpu,
  Database,
  Boxes,
  ShoppingBag,
  Store,
  LayoutGrid,
  Gauge,
  Activity,
  CheckSquare,
  MonitorCheck,
  LucideIcon,
} from "lucide-react";

interface CapabilityItem {
  name: string;
  icon: LucideIcon;
  badgeBg: string;
  iconColor: string;
}

interface TabConfig {
  id: string;
  label: string;
  sidebarIcon: LucideIcon;
  sidebarBadgeBg: string;
  sidebarIconColor: string;
  headerIcon: LucideIcon;
  seoTitle: string;
  seoDesc: string;
  seoBadge: string;
  items: CapabilityItem[];
}

const TABS: TabConfig[] = [
  {
    id: "fullstack",
    label: "Full Stack & Frameworks",
    sidebarIcon: Code2,
    sidebarBadgeBg: "bg-purple-100",
    sidebarIconColor: "text-purple-600",
    headerIcon: Code2,
    seoTitle: "Next.js & React Full-Stack Architecture for Sub-Second Indexing",
    seoDesc: "Ultra-fast server-side rendering (SSR/SSG), automated XML sitemaps, structured JSON-LD schema markup, and Google Core Web Vitals optimization.",
    seoBadge: "Next.js & React SEO",
    items: [
      { name: "React.js", icon: Code2, badgeBg: "bg-cyan-100/90", iconColor: "text-cyan-600" },
      { name: "Next.js", icon: Zap, badgeBg: "bg-slate-100/90", iconColor: "text-slate-900" },
      { name: "Node.js", icon: Server, badgeBg: "bg-emerald-100/90", iconColor: "text-emerald-600" },
      { name: "TypeScript", icon: FileCode, badgeBg: "bg-blue-100/90", iconColor: "text-blue-600" },
      { name: "Vite", icon: Sparkles, badgeBg: "bg-purple-100/90", iconColor: "text-purple-600" },
      { name: "Tailwind CSS", icon: Palette, badgeBg: "bg-teal-100/90", iconColor: "text-teal-600" },
      { name: "GraphQL", icon: Network, badgeBg: "bg-pink-100/90", iconColor: "text-pink-600" },
    ],
  },
  {
    id: "frontend",
    label: "Backend & Frontend",
    sidebarIcon: Monitor,
    sidebarBadgeBg: "bg-blue-100",
    sidebarIconColor: "text-blue-600",
    headerIcon: Monitor,
    seoTitle: "High-Throughput Node.js, Express & Microservices API Infrastructure",
    seoDesc: "Low-latency RESTful APIs and PostgreSQL/MongoDB database optimization designed for sub-100ms server response times (TTFB) and high concurrency.",
    seoBadge: "Low-Latency Backend",
    items: [
      { name: "HTML5 & CSS3", icon: Layout, badgeBg: "bg-orange-100/90", iconColor: "text-orange-600" },
      { name: "JavaScript ES6+", icon: Code2, badgeBg: "bg-amber-100/90", iconColor: "text-amber-600" },
      { name: "RESTful APIs", icon: Workflow, badgeBg: "bg-indigo-100/90", iconColor: "text-indigo-600" },
      { name: "Express.js", icon: Cpu, badgeBg: "bg-slate-100/90", iconColor: "text-slate-800" },
      { name: "PostgreSQL", icon: Database, badgeBg: "bg-blue-100/90", iconColor: "text-blue-600" },
      { name: "MongoDB", icon: Database, badgeBg: "bg-emerald-100/90", iconColor: "text-emerald-600" },
      { name: "Microservices", icon: Boxes, badgeBg: "bg-violet-100/90", iconColor: "text-violet-600" },
    ],
  },
  {
    id: "cms",
    label: "eCommerce & CMS",
    sidebarIcon: ShoppingCart,
    sidebarBadgeBg: "bg-emerald-100",
    sidebarIconColor: "text-emerald-600",
    headerIcon: ShoppingCart,
    seoTitle: "Custom Shopify, Headless CMS & High-Converting eCommerce Platforms",
    seoDesc: "Headless WordPress, Shopify Custom & Webflow architectures engineered to maximize organic product rankings, mobile checkout speed, and CRO.",
    seoBadge: "eCommerce SEO & CRO",
    items: [
      { name: "Shopify Custom", icon: ShoppingBag, badgeBg: "bg-emerald-100/90", iconColor: "text-emerald-600" },
      { name: "WooCommerce", icon: Store, badgeBg: "bg-purple-100/90", iconColor: "text-purple-600" },
      { name: "WordPress Headless", icon: Globe, badgeBg: "bg-sky-100/90", iconColor: "text-sky-600" },
      { name: "Magento", icon: Boxes, badgeBg: "bg-orange-100/90", iconColor: "text-orange-600" },
      { name: "Webflow", icon: LayoutGrid, badgeBg: "bg-blue-100/90", iconColor: "text-blue-600" },
      { name: "Headless CMS", icon: Database, badgeBg: "bg-rose-100/90", iconColor: "text-rose-600" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    sidebarIcon: Smartphone,
    sidebarBadgeBg: "bg-pink-100",
    sidebarIconColor: "text-pink-600",
    headerIcon: Smartphone,
    seoTitle: "Cross-Platform React Native, Flutter & Native iOS/Android Apps",
    seoDesc: "High-ranking App Store & Google Play mobile applications built with App Store Optimization (ASO), offline PWA caching, and 60fps UI performance.",
    seoBadge: "ASO & App Ranking",
    items: [
      { name: "React Native", icon: Smartphone, badgeBg: "bg-cyan-100/90", iconColor: "text-cyan-600" },
      { name: "Flutter", icon: Layers, badgeBg: "bg-sky-100/90", iconColor: "text-sky-600" },
      { name: "iOS Swift", icon: Smartphone, badgeBg: "bg-rose-100/90", iconColor: "text-rose-600" },
      { name: "Android Kotlin", icon: Smartphone, badgeBg: "bg-emerald-100/90", iconColor: "text-emerald-600" },
      { name: "PWA Apps", icon: Globe, badgeBg: "bg-violet-100/90", iconColor: "text-violet-600" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    sidebarIcon: Cloud,
    sidebarBadgeBg: "bg-indigo-100",
    sidebarIconColor: "text-indigo-600",
    headerIcon: Cloud,
    seoTitle: "99.99% Uptime AWS Cloud Infrastructure, Docker & Global Edge CDN",
    seoDesc: "Automated CI/CD deployment pipelines, Cloudflare Enterprise CDN, and zero-downtime cloud hosting for instant global page loading.",
    seoBadge: "99.99% Uptime Cloud",
    items: [
      { name: "Docker", icon: Boxes, badgeBg: "bg-blue-100/90", iconColor: "text-blue-600" },
      { name: "AWS Cloud", icon: Cloud, badgeBg: "bg-amber-100/90", iconColor: "text-amber-600" },
      { name: "Vercel Enterprise", icon: Zap, badgeBg: "bg-slate-100/90", iconColor: "text-slate-900" },
      { name: "Cloudflare CDN", icon: ShieldCheck, badgeBg: "bg-orange-100/90", iconColor: "text-orange-600" },
      { name: "CI/CD Pipelines", icon: Workflow, badgeBg: "bg-indigo-100/90", iconColor: "text-indigo-600" },
    ],
  },
  {
    id: "qa",
    label: "QA & Testing",
    sidebarIcon: ShieldCheck,
    sidebarBadgeBg: "bg-amber-100",
    sidebarIconColor: "text-amber-600",
    headerIcon: ShieldCheck,
    seoTitle: "Google 100/100 Lighthouse Speed & Core Web Vitals Assurance",
    seoDesc: "Automated Jest testing, cross-browser QA validation, and page speed optimization guaranteeing zero Cumulative Layout Shift (CLS) and 100/100 scores.",
    seoBadge: "Lighthouse 100/100",
    items: [
      { name: "Lighthouse 100/100", icon: Gauge, badgeBg: "bg-amber-100/90", iconColor: "text-amber-600" },
      { name: "Core Web Vitals", icon: Activity, badgeBg: "bg-emerald-100/90", iconColor: "text-emerald-600" },
      { name: "Jest Unit Testing", icon: CheckSquare, badgeBg: "bg-rose-100/90", iconColor: "text-rose-600" },
      { name: "Cross-Browser QA", icon: MonitorCheck, badgeBg: "bg-blue-100/90", iconColor: "text-blue-600" },
    ],
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    sidebarIcon: Target,
    sidebarBadgeBg: "bg-violet-100",
    sidebarIconColor: "text-violet-600",
    headerIcon: Target,
    seoTitle: "Data-Driven Local SEO, Targeted PPC & AI Search (AEO/GEO) Strategy",
    seoDesc: "Rank #1 on Google for high-intent keywords across Delhi NCR & Global markets with AI Overview (SearchGPT/Perplexity) optimization and ROI-focused marketing.",
    seoBadge: "Rank #1 on Google",
    items: [
      { name: "Content Writing", icon: PenTool, badgeBg: "bg-purple-100/90", iconColor: "text-purple-600" },
      { name: "Email Marketing", icon: Mail, badgeBg: "bg-sky-100/90", iconColor: "text-sky-600" },
      { name: "Performance Marketing", icon: TrendingUp, badgeBg: "bg-emerald-100/90", iconColor: "text-emerald-600" },
      { name: "PPC", icon: MousePointerClick, badgeBg: "bg-amber-100/90", iconColor: "text-amber-600" },
      { name: "SEO", icon: Search, badgeBg: "bg-rose-100/90", iconColor: "text-rose-600" },
      { name: "Social Media", icon: ThumbsUp, badgeBg: "bg-indigo-100/90", iconColor: "text-indigo-600" },
      { name: "AEO / GEO Services", icon: Globe, badgeBg: "bg-violet-100/90", iconColor: "text-violet-600" },
    ],
  },
];

export const TechStackMatrix = () => {
  const [activeTabId, setActiveTabId] = useState("marketing");

  const currentTab = TABS.find((t) => t.id === activeTabId) || TABS[0];
  const CurrentHeaderIcon = currentTab.headerIcon;

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 text-slate-900 select-none border-b border-slate-200/80 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/tech-stack-circuit-bg.png')`
      }}
    >
      {/* Crystal-clear overlay so 3D purple cubes and circuit graphics shine through with max vibrancy */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">

        {/* Section Header - 100% Identical to Image 1 */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-normal sm:font-medium text-[#1E1B4D] tracking-tight leading-snug font-sans mb-0.5">
            Proven Expertise Across
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-normal sm:font-medium tracking-tight leading-snug font-sans bg-gradient-to-r from-[#3533B5] via-[#5C50DD] to-[#A03CE3] bg-clip-text text-transparent">
            Industries, Platforms & Innovative Technologies
          </h3>

          {/* Exact Flourish Underline SVG from Image 1 */}
          <div className="flex justify-center my-2.5" aria-hidden="true">
            <svg className="w-14 h-2.5" viewBox="0 0 60 10" fill="none">
              <path
                d="M2 5 H46 C49 5 52 2 54 4 C56 6 53 8 50 6"
                stroke="url(#accent-line-grad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="accent-line-grad" x1="0" y1="0" x2="60" y2="0">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto mt-3">
            Backed by experienced engineers, Websbond is committed to delivering scalable, robust, and advanced digital platforms tailored for specific business needs.
          </p>
        </div>

        {/* Tabbed Matrix Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-[1536px] mx-auto">
          
          {/* Left Vertical Sidebar Card */}
          <div className="lg:col-span-5 bg-white p-4 sm:p-5 rounded-3xl border border-purple-100/80 shadow-lg shadow-purple-500/5 flex flex-col justify-between">
            <div>
              {/* Header Box Badge */}
              <div className="bg-gradient-to-br from-[#2D2A6E] via-[#241F55] to-[#1E1B4B] p-4 rounded-2xl text-white flex items-center gap-3.5 shadow-md mb-3.5">
                <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-indigo-200" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-purple-200/90 uppercase block leading-none mb-1">
                    Our Core
                  </span>
                  <h4 className="text-base font-bold text-white leading-tight">
                    Technology Services
                  </h4>
                </div>
              </div>

              {/* Sidebar Tabs List (Mobile 2-Column Responsive Grid, Desktop Vertical List) */}
              <div className="grid grid-cols-2 lg:flex lg:flex-col gap-1.5">
                {TABS.map((tab) => {
                  const isActive = activeTabId === tab.id;
                  const IconComp = tab.sidebarIcon;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      onMouseEnter={() => setActiveTabId(tab.id)}
                      className={`w-full text-left px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-purple-50/90 text-purple-950 font-bold border border-purple-200/90 shadow-xs ring-1 ring-purple-400/20"
                          : "text-slate-700 hover:bg-purple-50/60 hover:text-purple-900 border border-transparent hover:border-purple-100 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${tab.sidebarBadgeBg}`}
                        >
                          <IconComp className={`w-4 h-4 ${tab.sidebarIconColor}`} />
                        </div>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                          {tab.label}
                        </span>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActive
                            ? "text-purple-600 translate-x-0.5"
                            : "text-slate-300 group-hover:text-purple-600 group-hover:translate-x-1.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Category Capability Panel */}
          <div className="lg:col-span-7 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-6 sm:p-8 rounded-3xl border border-purple-100/80 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            
            {/* Decorative Dot Grid */}
            <div className="absolute top-6 right-6 grid grid-cols-4 gap-1.5 opacity-30 pointer-events-none" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              ))}
            </div>

            <div>
              {/* Header inside Right Card */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-600 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-purple-500/20 shrink-0">
                  <CurrentHeaderIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block leading-none mb-1">
                    Our Expertise In
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                    {currentTab.label}{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                      Stack & Capabilities
                    </span>
                  </h3>
                </div>
              </div>

              {/* Items Grid with Mouse Hover & Interactive Micro-Animations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {currentTab.items.map((item, idx) => {
                  const ItemIcon = item.icon;
                  const is7thItem = currentTab.items.length === 7 && idx === 6;

                  return (
                    <div
                      key={item.name}
                      className={`bg-white rounded-2xl p-3.5 border border-slate-100 shadow-xs hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300/80 hover:-translate-y-1.5 active:scale-98 transition-all duration-300 ease-out flex items-center gap-3 group cursor-pointer relative overflow-hidden ${
                        is7thItem ? "md:col-start-2" : ""
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-md ${item.badgeBg}`}
                      >
                        <ItemIcon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-purple-700 transition-colors duration-200">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Clean Service-Specific Dynamic SEO & Value Assurance Banner (Fills empty space) */}
            <div className="mt-6 pt-4 border-t border-purple-100/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-purple-100/60 shadow-2xs transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/80">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {currentTab.seoTitle}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-normal">
                    {currentTab.seoDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {currentTab.seoBadge}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

