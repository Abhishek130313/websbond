import { useState, useEffect } from "react";
import { ArrowRight, Play, Check, Globe, Search, Megaphone, Palette, Headphones, Share2, Star, ChevronDown, Sparkles, X, Database, Cpu, Shield, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import a1 from "@/assets/avatar1.webp";
import a2 from "@/assets/avatar2.webp";
import a3 from "@/assets/avatar3.webp";

const faqs = [
  ["How much time does it take to build a website?", "Typically, custom handcrafted websites are deployed within 2-4 weeks, depending on the number of pages and custom features chosen."],
  ["When do we see SEO search ranking results?", "Speed mapping and structural indexing optimizations are activated within 2 weeks. Competitive organic search traffic results usually peak within 3-6 months with regular updates."],
  ["Do you provide domain and hosting packages?", "Yes. We handle domain configuration, hosting server setup, corporate email inbox setup, and SSL certificate installation so that it is completely ready when handed over to you. No hassle for you."],
  ["Is the code support lifetime?", "We include 3 to 12 months of free support in our standard packages. Once that ends, you can choose a flexible, low-cost monthly support retainer or on-demand updates."],
  ["Are there any hidden costs or surprise charges?", "No. Our agreement and quotation feature a transparent, complete breakdown. Any extra features, pages, or extensions will always be discussed with you beforehand."],
  ["How is the project payment structured?", "We standardly follow a milestone structure: 50% advance setup retainer, and 50% post-delivery signoff. Other flexible options can be discussed during booking."],
  ["Can you redesign our existing business website?", "Yes. We specialize in importing content, retaining search indexing links so your old Google rank doesn't break, and re-writing the frontend to be modern and ultra-fast."],
  ["How do we request ongoing updates?", "You get direct WhatsApp access to our senior developer pipeline. Zero tickets or automated bots. Just send your update requirements, and we deploy them instantly."]
];

const partnerLogos = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "WordPress", logo: "/logos/wordpress.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Cloudflare", logo: "/logos/cloudflare.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
];

export const ServicesPage = () => {
  const [pages, setPages] = useState(5);
  const [seoLevel, setSeoLevel] = useState<"basic" | "standard" | "pro">("standard");
  const [support, setSupport] = useState(3);
  const [activeTab, setActiveTab] = useState<"dev" | "seo" | "ads" | "support">("dev");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculatePrice = () => {
    let base = 5000;
    base += pages * 600;
    if (seoLevel === "standard") base += 4000;
    if (seoLevel === "pro") base += 9000;
    base += (support - 3) * 1200;
    return base;
  };

  const calculateDays = () => {
    let days = 10;
    days += Math.floor(pages * 1.5);
    if (seoLevel === "pro") days += 5;
    return days;
  };

  return (
    <Layout>
      <SEO 
        title="Web Services | Professional Website Design & Google SEO Indore" 
        description="Premium website development (website designer Indore), organic search engine optimization, and PPC campaigns. Choose a package starting at ₹7,999." 
        path="/services" 
        keywords="websbond services, website builder Indore, local SEO Indore, PPC ads agency Indore, sasti website banwaye, business growth India"
      />

      {/* ── Services Hero Section ── */}
      <section className="relative overflow-hidden pt-8 pb-12 border-b border-border bg-gradient-to-br from-background via-surface-2 to-indigo-500/5 dark:to-indigo-950/20">

        {/* Animated Background Mesh & Floating Particles */}
        <div className="absolute inset-0 grid-mesh opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none animate-aurora-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[90px] pointer-events-none animate-aurora-2" />

        {/* Floating tech background shapes */}
        <div className="absolute top-10 right-12 w-6 h-6 border border-indigo-200/40 rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-cyan-500/10 rounded-full animate-bounce pointer-events-none" style={{ animationDuration: '4.5s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left gap-5">
              <div className="inline-flex items-center gap-2 border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50/60 dark:bg-indigo-950/20 backdrop-blur-md text-indigo-600 dark:text-indigo-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                Digital Solutions That Drive Real Growth
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground tracking-tight">
                Handcrafted Code.<br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Measurable Growth.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed font-semibold">
                Hum slow templates reject karte hain. Hum lightning-fast websites banate hain jo Google rankings aur customers drive karein. Website banwana hai? Shuru karein.
              </p>

              {/* STATS GRID - Replaced with trust parameters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1 w-full max-w-2xl">
                {[
                  { value: "100%", label: "Speed Guarantee", icon: "⚡", color: "from-rose-500/5 to-rose-500/10 dark:from-rose-500/10 dark:to-rose-500/20 border-rose-200 dark:border-rose-500/20" },
                  { value: "Direct", label: "Developer Chat", icon: "💬", color: "from-emerald-500/5 to-emerald-500/10 dark:from-emerald-500/10 dark:to-emerald-500/20 border-emerald-200 dark:border-emerald-500/20" },
                  { value: "0%", label: "Upfront payment", icon: "🛡️", color: "from-blue-500/5 to-blue-500/10 dark:from-blue-500/10 dark:to-blue-500/20 border-blue-200 dark:border-blue-500/20" },
                  { value: "100%", label: "Code Handoff", icon: "📦", color: "from-purple-500/5 to-purple-500/10 dark:from-purple-500/10 dark:to-purple-500/20 border-purple-200 dark:border-purple-500/20" },
                ].map((s, i) => (
                  <div key={i} className={`relative overflow-hidden bg-gradient-to-br ${s.color} border rounded-2xl p-3 flex flex-col gap-0.5 group hover:scale-105 transition-transform duration-300 shadow-sm`}>
                    <div className="absolute -top-1 -right-1 text-lg opacity-35 group-hover:opacity-60 transition-opacity">{s.icon}</div>
                    <span className="font-display font-black text-lg text-foreground tracking-tight leading-none">{s.value}</span>
                    <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* TRUST BADGES */}
              <div className="flex flex-wrap gap-2 mt-1 justify-start">
                {[
                  { label: "Google #1 Rankings", dot: "bg-emerald-500" },
                  { label: "100/100 PageSpeed", dot: "bg-cyan-500" },
                  { label: "Zero Hidden Fees", dot: "bg-indigo-500" },
                  { label: "Code Ownership", dot: "bg-purple-500" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-1.5 bg-card border border-border rounded-full px-2.5 py-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${b.dot} animate-pulse shrink-0`} />
                    <span className="text-[10px] font-semibold text-muted-foreground">{b.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-3 mt-1 justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-xs"
                >
                  Get Started Free <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://wa.me/919306623619?text=Namaste!%20Mujhe%20website%20banwani%20hai.%20Free%20consultation%20chahiye."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Consultant
                </a>
                <a
                  href="#services-list"
                  className="inline-flex items-center gap-2 bg-card border border-border hover:bg-surface-2 text-foreground font-bold px-6 py-3.5 rounded-xl transition-all text-xs shadow-sm"
                >
                  <Play className="w-2.5 h-2.5 fill-current text-foreground" /> Explore Services
                </a>
              </div>

              {/* AVATAR + RATING */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80 dark:border-white/[0.06] mt-1 justify-start w-full">
                <div className="flex -space-x-3">
                  <img src={a1} alt="Client" width={32} height={32} className="w-8 h-8 rounded-full ring-2 ring-slate-150 dark:ring-slate-950 object-cover" />
                  <img src={a2} alt="Client" width={32} height={32} className="w-8 h-8 rounded-full ring-2 ring-slate-150 dark:ring-slate-950 object-cover" />
                  <img src={a3} alt="Client" width={32} height={32} className="w-8 h-8 rounded-full ring-2 ring-slate-150 dark:ring-slate-950 object-cover" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 ring-2 ring-slate-150 dark:ring-slate-950 flex items-center justify-center text-[9px] font-bold text-white">100%</div>
                </div>
                <div>
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-[10px] text-muted-foreground font-semibold">Indore-based engineering team working directly with you</p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Dashboard Mockup */}
            <div className="relative flex items-center justify-center pt-8 lg:pt-0">
              <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center [perspective:1200px] pointer-events-auto group/hero">
                {/* Glowing halo behind card */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl blur-2xl scale-110" />

                {/* 3D Wrapper */}
                <div className="relative w-[280px] h-[220px] [transform-style:preserve-3d] [transform:rotateX(22deg)_rotateY(-16deg)] group-hover/hero:[transform:rotateX(12deg)_rotateY(-2deg)] transition-all duration-700 ease-out">
                  {/* Top Layer: UI Dashboard metrics */}
                  <div className="absolute inset-0 bg-card border border-border rounded-2xl p-4 shadow-card backdrop-blur-md [transform:translateZ(55px)] transition-transform duration-700 ease-out group-hover/hero:[transform:translateZ(75px)] flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/5 pb-2 text-foreground">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[8px] text-indigo-600 dark:text-indigo-400 font-bold font-mono">analytics_core</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 py-2 flex-1 items-center">
                      <div className="bg-muted/50 border border-border rounded-lg p-1.5 text-center">
                        <div className="text-[7px] text-muted-foreground font-bold uppercase">Conversions</div>
                        <div className="text-xs font-black text-indigo-600 dark:text-indigo-400 font-mono mt-0.5">+128%</div>
                      </div>
                      <div className="bg-muted/50 border border-border rounded-lg p-1.5 text-center">
                        <div className="text-[7px] text-muted-foreground font-bold uppercase">Page Speed</div>
                        <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">100/100</div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-2 text-[7px] text-muted-foreground flex justify-between font-mono">
                      <span>Google Index Status</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Pos 1</span>
                    </div>
                  </div>

                  {/* Middle Layer: Server */}
                  <div className="absolute inset-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.15)] [transform:translateZ(10px)] group-hover/hero:[transform:translateZ(15px)] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[8px] text-indigo-600 dark:text-indigo-300 font-mono">
                      <span>Server Engine</span>
                      <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
                    </div>
                    <div className="w-full h-1 bg-indigo-100 dark:bg-indigo-500/20 rounded-full" />
                  </div>

                  {/* Base Layer */}
                  <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-indigo-500/20 rounded-2xl p-4 shadow-[0_5px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.2)] [transform:translateZ(-30px)] group-hover/hero:[transform:translateZ(-45px)] flex flex-col justify-between">
                    <span className="text-[7px] text-muted-foreground font-mono">Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* PARTNER LOGOS BAR */}
          <div className="mt-12 border-t border-slate-200/80 dark:border-white/[0.06] pt-6">
            <p className="text-center text-[9px] font-extrabold uppercase tracking-widest text-muted-foreground font-mono mb-4">
              Ecosystem Integrations &amp; Trusted Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-55 hover:opacity-85 transition-opacity duration-300">
              {partnerLogos.map((p) => (
                <div key={p.name} className="flex items-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    width={80}
                    height={20}
                    className="h-4 sm:h-5 pointer-events-none select-none max-w-[80px] object-contain transition-all duration-300 filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 dark:invert dark:filter dark:brightness-200"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Main Page Body ── */}
      <div id="services-list" className="bg-background text-foreground py-10 transition-colors duration-300">

        {/* Capabilities Catalog Grid Section */}
        <section className="container mx-auto px-4 py-6 border-b border-slate-200/85 dark:border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-soft border border-indigo-200 dark:border-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Capabilities Catalog
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Our Core <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">Digital Services.</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-xs sm:text-sm font-medium">
              Professional engineering and digital marketing systems crafted for high growth and conversions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Globe, title: "Website Development", desc: "Super-fast React & Next.js custom sites with fluid page loads, clean design structures, and responsive controls.", points: ["Custom Design Layouts", "Pixel Perfect Frontend", "100% Core Web Vitals", "Direct Code Handoff"] },
              { icon: Search, title: "SEO Optimization", desc: "Elite keyword mappings, structural index speed audits, and content frameworks targeting Google Position 1 rankings.", points: ["Keyword Discovery Map", "Technical Speed Audit", "Schema Meta Integration", "Rank Trajectory Scans"] },
              { icon: Megaphone, title: "Digital Marketing & Ads", desc: "Advanced campaign management on Google & Meta Ads tailored to drive qualified leads and actual conversions.", points: ["Meta Pixel Tracking Setup", "High-ROI Funnels", "A/B Creative Audits", "Conversions Analytics"] },
              { icon: Palette, title: "Brand Identity", desc: "Meticulous design assets including high-fidelity logos, premium corporate palettes, typography styling guides.", points: ["Custom Logo Vector", "Corporate Color Palettes", "Typography Standards", "Identity Brand Guidelines"] },
              { icon: Headphones, title: "24/7 Retainer Support", desc: "Zero robotic AI loops. Real senior developers answering queries instantly on WhatsApp, emails, or direct calls.", points: ["WhatsApp Developer Chat", "Zero Ticket Queue", "Security Core Audits", "Staging Deploy Syncs"] },
              { icon: Share2, title: "Social Media Management", desc: "Complete handle management, creative visual templates, post calendars, and regular growth analytics reports.", points: ["Visual Creative Templates", "Editorial Calendar Planners", "Handle Growth Audits", "Performance Reporting"] }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel border-border rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-indigo-300/50 dark:hover:border-indigo-500/20 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-soft text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/10 grid place-items-center mb-4 shrink-0 group-hover:scale-105 transition-transform"><item.icon className="w-5 h-5" /></div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5 font-semibold">{item.desc}</p>
                </div>
                <ul className="space-y-2 border-t border-slate-200/80 dark:border-white/[0.06] pt-4 text-xs text-muted-foreground font-medium">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500 shrink-0" /> {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Calculator Section */}
        <section className="container mx-auto px-4 py-10 relative">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
            
            {/* Controls Panel */}
            <div className="glass-panel border-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-sm text-foreground">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-foreground mb-1">1. Customize Project Specs</h3>
                <p className="text-xs text-muted-foreground mb-6 font-medium">Adjust specs to customize your site build in real-time.</p>
                
                <div className="space-y-6">
                  {/* Pages Slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                      <span className="text-foreground">Number of Custom Pages</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold bg-brand-soft border border-indigo-200 dark:border-indigo-500/10 px-3 py-1 rounded-full">{pages} Pages</span>
                    </div>
                    <input 
                      type="range" 
                      min={1} 
                      max={25} 
                      value={pages} 
                      onChange={(e) => setPages(parseInt(e.target.value))}
                      className="w-full accent-indigo-600 h-2 bg-muted border border-border rounded-full cursor-pointer" 
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground font-medium">
                      <span>1 Page (Landing page)</span>
                      <span>25 Pages (Custom catalog)</span>
                    </div>
                  </div>

                  {/* SEO Level Option */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-foreground font-bold block">SEO Strategy Intensity</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { key: "basic", label: "Basic indexing", desc: "Sitemap submission only" },
                        { key: "standard", label: "Elite Core", desc: "Speed metrics & meta audits" },
                        { key: "pro", label: "Aggressive", desc: "Keyword mappings & backlinks" },
                      ].map((opt) => (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => setSeoLevel(opt.key as any)}
                          className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                            seoLevel === opt.key 
                              ? "bg-indigo-500/5 dark:bg-indigo-500/10 border-indigo-500 text-foreground shadow-sm" 
                              : "bg-card border-border text-muted-foreground hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          <span className="text-xs font-bold text-foreground mb-1 capitalize">{opt.label}</span>
                          <span className="text-[9px] text-muted-foreground leading-tight font-semibold">{opt.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Support Slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                      <span className="text-foreground">Included Support Period</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold bg-brand-soft border border-indigo-200 dark:border-indigo-500/10 px-3 py-1 rounded-full">{support} Months</span>
                    </div>
                    <input 
                      type="range" 
                      min={3} 
                      max={12} 
                      step={3}
                      value={support} 
                      onChange={(e) => setSupport(parseInt(e.target.value))}
                      className="w-full accent-indigo-600 h-2 bg-muted border border-border rounded-full cursor-pointer" 
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground font-medium">
                      <span>3 Months (Core handoff)</span>
                      <span>12 Months (Active retainer)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200/80 dark:border-white/[0.06] pt-4 flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-normal font-semibold">
                  Websbond rates are fixed. Estimates are directly compiled with transparent criteria. No negotiation overhead.
                </p>
              </div>
            </div>

            {/* Pricing Invoice Dashboard Card (High contrast dark card stays dark for premium visual) */}
            <div className="bg-slate-950 border border-white/[0.06] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white pb-3 border-b border-white/[0.06] mb-5 flex items-center justify-between">
                  <span>Summary Invoice</span>
                  <span className="text-xs text-indigo-400 uppercase tracking-widest font-mono">Draft</span>
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-400">
                  <li className="flex justify-between items-center">
                    <span>Custom React Build ({pages} Pages)</span>
                    <span className="text-white font-bold font-mono">₹{5000 + (pages * 600)}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>SEO Mapping Strategy ({seoLevel === "basic" ? "Basic" : seoLevel === "standard" ? "Elite" : "Aggressive"})</span>
                    <span className="text-white font-bold font-mono">
                      ₹{seoLevel === "basic" ? 0 : seoLevel === "standard" ? 4000 : 9000}
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>24/7 Support retainer ({support} Months)</span>
                    <span className="text-white font-bold font-mono">₹{(support - 3) * 1200}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Domain & Hosting Configuration</span>
                    <span className="text-emerald-400 font-bold font-mono">Free</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/[0.06] pt-5 mt-6">
                <div className="flex justify-between items-end mb-5">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Estimated Project Budget</div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-0.5 font-mono">
                      ₹{calculatePrice().toLocaleString("en-IN")}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 uppercase">Turnaround</div>
                    <div className="font-bold text-indigo-400 mt-0.5 text-xs sm:text-sm">~{calculateDays()} Days</div>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  state={{ customProject: { pages, seoLevel, support, price: calculatePrice() } }}
                  className="w-full bg-white hover:bg-slate-100 text-slate-950 font-bold py-3.5 rounded-xl text-center inline-block transition-all shadow-md text-xs sm:text-sm"
                >
                  Proceed with this Plan <ArrowRight className="w-4 h-4 ml-1.5 inline" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pricing Packages Cards Section */}
        <section className="container mx-auto px-4 py-10 relative border-t border-b border-slate-200/85 dark:border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-pink-500/5 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 text-pink-600 dark:text-pink-400 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Pricing Plans
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Simple Pricing, <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent">No Surprises.</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-xs sm:text-sm font-medium">
              Choose a plan that fits your business scale, or use the cost calculator above to formulate a custom plan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {[
              { 
                name: "Starter Plan", 
                price: "₹7,999", 
                period: "/mo",
                desc: "Perfect for single page launches, local business listings, or simple corporate profiles.",
                features: ["5 Page React Website", "Fully Responsive Layout", "Core SEO Schema Setup", "3 Months Code Support", "Domain & Server Linkage"],
                color: "border-slate-200 dark:border-slate-800 bg-white dark:bg-card"
              },
              { 
                name: "Growth Plan", 
                price: "₹14,999", 
                period: "/mo",
                desc: "Designed for scaling businesses requiring active search rankings and regular social management.",
                features: ["Unlimited Pages Website", "Advanced SEO Optimization", "Social Media Management", "6 Months retain support", "Premium Content Auditing", "WhatsApp Support Retainer"],
                color: "border-indigo-500 dark:border-indigo-500/50 bg-indigo-500/5 dark:bg-indigo-500/10 shadow-sm relative",
                popular: true
              },
              { 
                name: "Premium Plan", 
                price: "₹29,999", 
                period: "/mo",
                desc: "A complete online system integrating dev, high-ROI marketing campaigns, and design retainers.",
                features: ["Everything in Growth Plan", "Paid Google & Meta Campaign", "Brand Identity Logo Pack", "12 Months retain support", "Full Analytics Dashboard", "Priority Developer Priority"],
                color: "border-slate-200 dark:border-slate-800 bg-white dark:bg-card"
              }
            ].map((plan, idx) => (
              <div key={idx} className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative ${plan.color}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500 text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}
                
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-1.5">{plan.name}</h3>
                  <div className="flex items-baseline gap-0.5 mb-3.5">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-foreground font-mono">{plan.price}</span>
                    <span className="text-xs text-muted-foreground font-medium">{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5 border-b border-slate-200/80 dark:border-white/[0.06] pb-5 font-semibold">{plan.desc}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground font-medium">
                        <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/contact"
                  className={`w-full py-3 rounded-xl text-center font-bold text-xs transition-all block shadow-sm ${
                    plan.popular 
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                      : "bg-card hover:bg-surface-2 text-foreground border border-border"
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground font-semibold uppercase tracking-wider font-mono">
            Need custom configurations? Reach us direct at <span className="text-foreground font-bold font-sans">+91 9306623619</span> or email <span className="text-indigo-600 dark:text-indigo-400 font-bold font-sans">service@websbond.com</span>
          </div>
        </section>

        {/* Service Command Center Visualizer */}
        <section className="container mx-auto px-4 py-10 relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-500/5 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Pipeline Sandbox
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              How we <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">build & deploy.</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-xs sm:text-sm font-medium">
              Click tabs below to inspect how our delivery engine handles different areas of your digital project.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="max-w-xl mx-auto flex items-center bg-muted border border-border rounded-full p-1 gap-1 mb-6">
            {[
              { key: "dev", label: "Web Dev" },
              { key: "seo", label: "SEO Mapping" },
              { key: "ads", label: "Marketing Ads" },
              { key: "support", label: "Retainer Support" },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 text-center py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === tab.key 
                    ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Console Showcase Bezel (Stays dark for code contrast) */}
          <div className="max-w-3xl mx-auto bg-slate-950 border border-white/[0.06] rounded-3xl p-5 shadow-xl relative">
            <div className="absolute top-4 right-4 flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>

            <div className="pt-2 min-h-[220px]">
              {activeTab === "dev" && (
                <div className="font-mono text-xs text-blue-400 space-y-2 select-none leading-relaxed">
                  <div className="text-slate-500">// Building custom component layout: Button.tsx</div>
                  <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-orange-400">"react"</span>;</div>
                  <div><span className="text-purple-400">export const</span> <span className="text-white">NeonButton</span> = {"({ children }) => {"}</div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> (
                    <div className="pl-4">
                      &lt;<span className="text-emerald-400">button</span> className=<span className="text-orange-400">"bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl shadow-glow py-3 px-6 transform hover:scale-105 active:scale-95 transition-all"</span>&gt;<br />
                      &nbsp;&nbsp;&#123;children&#125;<br />
                      &nbsp;&nbsp;&lt;/<span className="text-emerald-400">button</span>&gt;
                    </div>
                    );
                  </div>
                  <div>&#125;</div>
                  <div className="text-emerald-600 dark:text-emerald-400 mt-4 text-[10px] font-sans font-bold flex items-center gap-2">
                    <Check className="w-4 h-4" /> Component compiles successfully in 14ms (100% Core Web Vitals score)
                  </div>
                </div>
              )}

              {activeTab === "seo" && (
                <div className="font-mono text-xs text-slate-500 space-y-4">
                  <div className="text-slate-500">// SEO indexing crawler mapping simulation</div>
                  <div className="bg-slate-900 border border-white/5 rounded-xl p-4 flex flex-col gap-3 font-sans">
                    <div className="flex justify-between items-center text-xs text-white">
                      <span className="font-bold">Google search query: "Best luxury hotel in Kanpur"</span>
                      <span className="text-purple-400 font-mono text-[10px]">Rank Scan</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-slate-500 dark:text-slate-400 line-through opacity-50">
                        <span>15. kanpurstay.com</span>
                        <span>Page 2</span>
                      </div>
                      <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg animate-pulse">
                        <span>1. websbondclienthotel.com (Handcrafted SEO Core)</span>
                        <span>Page 1 / Pos 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-405 font-sans font-bold">
                    ✓ Structural schema mappings, tags, and indexing rules deployed successfully.
                  </div>
                </div>
              )}

              {activeTab === "ads" && (
                <div className="font-mono text-xs text-slate-500 space-y-4">
                  <div className="text-slate-500">// Conversion tracking metrics dashboard</div>
                  <div className="grid grid-cols-3 gap-3 font-sans">
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-center">
                      <div className="text-xs text-slate-400 uppercase">CTR (Click-Thru)</div>
                      <div className="font-display font-bold text-xl text-white mt-1">4.82%</div>
                      <div className="text-[9px] text-emerald-400 mt-1 font-bold">+1.2% Industry Avg</div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-center">
                      <div className="text-xs text-slate-400 uppercase">Cost per Lead</div>
                      <div className="font-display font-bold text-xl text-white mt-1">₹42.50</div>
                      <div className="text-[9px] text-emerald-400 mt-1 font-bold">-32% Cost Reduction</div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-center">
                      <div className="text-xs text-slate-400 uppercase">Pixel Accuracy</div>
                      <div className="font-display font-bold text-xl text-white mt-1">99.8%</div>
                      <div className="text-[9px] text-emerald-400 mt-1 font-bold">Meta-API Connected</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "support" && (
                <div className="font-sans text-xs space-y-4">
                  <div className="text-slate-500 dark:text-slate-400 font-mono">// WhatsApp Support Portal simulator (Zero Bots)</div>
                  <div className="space-y-2.5">
                    <div className="flex gap-2.5 items-end justify-end">
                      <div className="bg-purple-600 text-white rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[70%] text-left">
                        "Hi Websbond, home screen banner change karna hai context update. Image swap code change available?"
                        <div className="text-[9px] text-white/50 mt-1 text-right">10:42 AM</div>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-end">
                      <div className="w-6 h-6 rounded-full bg-slate-800 grid place-items-center text-[10px] font-bold text-white shrink-0">W</div>
                      <div className="bg-white/[0.03] border border-white/10 text-white rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[70%] text-left">
                        "Ji, codes swap is updated in staging branch. Check it here: staging.clientwebsite.com. Build verified."
                        <div className="text-[9px] text-slate-500 mt-1">10:44 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Comparison: Websbond vs Templates */}
        <section className="container mx-auto px-4 py-10 relative border-t border-slate-200/85 dark:border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              How we do it <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">differently.</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm font-semibold mt-2">Compare our handcrafted engineering standard with template agencies.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Cheap Templates */}
            <div className="glass-panel border-rose-200 dark:border-rose-500/20 bg-rose-500/[0.01] dark:bg-rose-500/[0.02] rounded-3xl p-6 relative shadow-sm">
              <div className="absolute top-5 right-5 text-rose-500/20"><X className="w-6 h-6" /></div>
              <h3 className="font-display font-bold text-lg text-rose-600 mb-4">Cheap Templates / Builders</h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-muted-foreground font-semibold">
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-rose-500/5 dark:bg-rose-500/15 text-rose-500 border border-rose-200/40 flex items-center justify-center shrink-0">✕</span>
                  <span>Bloated WordPress/Wix templates with slow loading speeds (~30% Core metrics)</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-rose-500/5 dark:bg-rose-500/15 text-rose-500 border border-rose-200/40 flex items-center justify-center shrink-0">✕</span>
                  <span>Copied generic templates that look identical to 1,000 other sites</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-rose-500/5 dark:bg-rose-500/15 text-rose-500 border border-rose-200/40 flex items-center justify-center shrink-0">✕</span>
                  <span>Chatbots that loop endlessly with zero direct access to engineers</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-rose-500/5 dark:bg-rose-500/15 text-rose-500 border border-rose-200/40 flex items-center justify-center shrink-0">✕</span>
                  <span>Hidden fees, locked server agreements, or platform restrictions</span>
                </li>
              </ul>
            </div>

            {/* Handcrafted Quality */}
            <div className="glass-panel border-emerald-200 dark:border-emerald-500/20 bg-emerald-500/[0.01] dark:bg-emerald-500/[0.02] rounded-3xl p-6 relative shadow-md">
              <div className="absolute top-5 right-5 text-emerald-500/20"><Check className="w-6 h-6" /></div>
              <h3 className="font-display font-bold text-lg text-emerald-600 mb-4">Websbond Handcrafted</h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-muted-foreground font-semibold">
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/5 dark:bg-emerald-500/15 text-emerald-600 border border-emerald-200/40 flex items-center justify-center shrink-0">✓</span>
                  <span>Custom-coded React or Next.js architectures yielding 100% PageSpeed marks</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/5 dark:bg-emerald-500/15 text-emerald-600 border border-emerald-200/40 flex items-center justify-center shrink-0">✓</span>
                  <span>Bespoke custom layouts uniquely designed for your brand's story</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/5 dark:bg-emerald-500/15 text-emerald-600 border border-emerald-200/40 flex items-center justify-center shrink-0">✓</span>
                  <span>Direct developer communication on WhatsApp with zero bots</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/5 dark:bg-emerald-500/15 text-emerald-600 border border-emerald-200/40 flex items-center justify-center shrink-0">✓</span>
                  <span>Transparent fixed pricing, full hosting ownership, and zero lock-in contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">FA<span className="text-indigo-600 dark:text-indigo-400">Qs</span></h2>
            <p className="mt-2 text-muted-foreground text-xs sm:text-sm font-medium">Frequently asked developer questions, explained simply.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(([q, a], idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="glass-panel border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-foreground hover:bg-slate-500/[0.02] dark:hover:bg-white/[0.02]"
                  >
                    <span className="text-xs sm:text-base">{q}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-40 opacity-100 border-t border-slate-200/80 dark:border-white/[0.06] bg-slate-500/[0.02] dark:bg-white/[0.01]" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="p-4 sm:p-5 text-xs sm:text-sm text-muted-foreground leading-relaxed font-semibold">{a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      <CtaBanner 
        title="Ready to grow your" 
        highlight="business?" 
        subtitle="Let's build a customized system that drives results." 
        ctaLabel="Free Consultation" 
      />
    </Layout>
  );
};

export default ServicesPage;
