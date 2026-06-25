import { useState } from "react";
import { ArrowRight, Sparkles, Rocket, Smile, Coins, TrendingUp, Monitor, ShoppingBag, Search, Layers, Smartphone, Laptop, LaptopIcon, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import b1 from "@/assets/blog1.webp";
import b2 from "@/assets/blog2.webp";
import b3 from "@/assets/blog3.webp";

const filters = [
  { label: "All Projects", icon: Layers },
  { label: "Web Development", icon: Monitor },
  { label: "eCommerce", icon: ShoppingBag },
  { label: "SEO Campaigns", icon: Search },
];

const projects = [
  { 
    name: "Ranga Pest Control", 
    category: "Web Development", 
    desc: "State-of-the-art React application built with TanStack Start, featuring lightning-fast server routing, schema markup, and direct WhatsApp lead triggers.", 
    results: "Pest problems solved & top local SEO ranking",
    img: b3,
    size: "large",
    previewUrl: "https://tanstack-start-app.rangapestservice.workers.dev/"
  },
  { 
    name: "TechNova SaaS", 
    category: "Web Development", 
    desc: "Next.js 14 architecture focusing on speed optimizations, clean typography, and conversions. 100% Google Lighthouse score.", 
    results: "+140% signups within 30 days",
    img: b1,
    size: "medium",
    previewUrl: "technova.com"
  },
  { 
    name: "UrbanWear Store", 
    category: "eCommerce", 
    desc: "High-end headless commerce platform with instant checkouts, stripe gateways, and mobile fluid filters.", 
    results: "3.5x sales improvement",
    img: b2,
    size: "medium",
    previewUrl: "urbanwear.in"
  },
  { 
    name: "AuraSkin Clinic", 
    category: "Web Development", 
    desc: "A premium medical-aesthetic brand identity layout. Fully customized booking flow integrated with WhatsApp API.", 
    results: "Bookings doubled in Indore",
    img: b3,
    size: "medium",
    previewUrl: "auraskin.in"
  },
  { 
    name: "RankBoost Campaign", 
    category: "SEO Campaigns", 
    desc: "Local search maps mapping and speed structural optimizations ranking multiple services on Google Position 1.", 
    results: "Ranked #1 for 18 core keywords",
    img: b1,
    size: "small",
    previewUrl: "rankboost.co"
  },
];

export const OurWorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [featuredDevice, setFeaturedDevice] = useState<"desktop" | "mobile">("desktop");

  const filteredProjects = activeFilter === "All Projects"
    ? projects
    : projects.filter(p => p.category === activeFilter || (activeFilter === "eCommerce" && p.category === "eCommerce") || (activeFilter === "SEO Campaigns" && p.category === "SEO Campaigns"));

  return (
    <Layout>
      <SEO 
        title="Websbond Portfolio | Best Website Developer Indore & Digital Agency" 
        description="Explore our portfolio of high-speed custom React websites, eCommerce store development, and top-ranking Google SEO projects built by Websbond Indore." 
        path="/our-work" 
        keywords="websbond portfolio, web developer Indore, digital marketing agency Indore, sasti website banwaye, business growth India"
      />

      {/* ── Hero Title Section ── */}
      <section className="relative overflow-hidden pt-8 pb-12 border-b border-border bg-gradient-to-br from-background via-surface-2 to-indigo-500/5 dark:to-indigo-950/20">
        
        {/* Background Mesh and Orbs */}
        <div className="absolute inset-0 grid-mesh opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none animate-aurora-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[90px] pointer-events-none animate-aurora-2" />

        {/* Floating tech background shapes representing Portfolio */}
        <div className="absolute top-12 right-16 w-8 h-8 border border-indigo-200/40 rounded-lg flex items-center justify-center animate-pulse pointer-events-none">
          <LaptopIcon className="w-4 h-4 text-indigo-400/40" />
        </div>
        <div className="absolute bottom-6 left-1/3 w-5 h-5 bg-cyan-500/5 rounded-full animate-bounce pointer-events-none" style={{ animationDuration: '5.5s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="md:col-span-7 flex flex-col gap-4 text-left items-start">
              <div className="inline-flex items-center gap-2 bg-brand-soft border border-purple-200 dark:border-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" /> Proven Case Studies
              </div>
              
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground tracking-tight">
                Work that drives <br />
                <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  real business results.
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed font-semibold">
                Hum sirf design nahi banate; hum custom React websites aur local SEO implement karte hain jo sales, leads aur search rankings drive karein. Website banwana hai? Shuru karein.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-xs"
                >
                  Start Similar Build <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://wa.me/919306623619?text=Namaste!%20Mujhe%20website%20banwani%20hai.%20Free%20consultation%20chahiye."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all text-xs shadow-sm animate-pulse-slow"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Consultation
                </a>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-1">
                {[{ label: "Direct Developer Contact", dot: "bg-emerald-500" }, { label: "Google #1 Rankings", dot: "bg-cyan-500" }, { label: "100/100 PageSpeed", dot: "bg-indigo-500" }].map((b) => (
                  <div key={b.label} className="flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1 shadow-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${b.dot} animate-pulse`} />
                    <span className="text-[10px] font-bold text-muted-foreground">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive CSS 3D Responsive Mockups */}
            <div className="md:col-span-5 flex items-center justify-center pt-4 md:pt-0">
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center [perspective:1200px] pointer-events-auto group/hero">
                
                {/* 3D Wrapper */}
                <div className="relative w-[260px] h-[200px] [transform-style:preserve-3d] [transform:rotateX(22deg)_rotateY(-15deg)] group-hover/hero:[transform:rotateX(12deg)_rotateY(2deg)] transition-all duration-700 ease-out">
                  
                  {/* Tablet/Mobile mockup float (Top Layer) */}
                  <div className="absolute top-10 right-4 w-[110px] h-[190px] bg-slate-900 border border-slate-700 dark:border-slate-800 rounded-[2rem] p-1.5 shadow-[0_15px_30px_rgba(79,70,229,0.12)] [transform:translateZ(65px)] transition-transform duration-700 ease-out group-hover/hero:[transform:translateZ(90px)] flex flex-col items-center">
                    <span className="w-10 h-2 bg-slate-950 rounded-full mb-2 shadow-inner" />
                    <div className="w-full flex-1 bg-slate-950 rounded-[1.5rem] overflow-hidden p-2 flex flex-col justify-between">
                      <div className="w-full h-1 bg-white/25 rounded" />
                      <div className="flex-1 flex flex-col justify-center gap-1.5">
                        <div className="w-3/4 h-1 bg-white/20 rounded mx-auto" />
                        <div className="w-1/2 h-1 bg-indigo-500/40 rounded mx-auto" />
                      </div>
                      <div className="w-full h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[5px] text-white">Buy Product</div>
                    </div>
                  </div>

                  {/* Browser Mockup Layer (Middle Layer) */}
                  <div className="absolute inset-0 bg-card border border-border rounded-2xl p-3 shadow-card [transform:translateZ(10px)] group-hover/hero:[transform:translateZ(15deg)] flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/5 pb-2">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[7px] text-muted-foreground font-mono">portfolio_preview</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 py-3">
                      <div className="w-2/3 h-1.5 bg-indigo-500/25 rounded" />
                      <div className="w-full h-1 bg-muted rounded animate-pulse" />
                      <div className="w-5/6 h-1 bg-muted rounded animate-pulse" />
                    </div>
                  </div>

                  {/* Base Layer */}
                  <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-2xl p-4 shadow-[0_5px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.15)] [transform:translateZ(-30px)] group-hover/hero:[transform:translateZ(-45deg)]" />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Body Content ── */}
      <div className="bg-background text-foreground py-10 transition-colors duration-300">

        {/* Featured Project Showcase with Interactive Slider */}
        <section className="container mx-auto px-4 py-4">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-12 border border-border shadow-sm grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="bg-brand-soft border border-indigo-200 dark:border-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm animate-pulse-slow">
                Featured Build
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight mt-4">
                FreshBites Grocery Platform
              </h2>
              <p className="text-muted-foreground mt-4 text-xs sm:text-sm leading-relaxed font-semibold">
                An organic food delivery web platform designed with high-speed search indexings, interactive cart flows, and custom admin dashboard panels.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 border-t border-b border-slate-200/80 dark:border-white/[0.06] py-5">
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase">Growth Result</div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-foreground mt-1">+240% Sales</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase">Load Speed</div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 mt-1 font-mono">98/100</div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Link 
                  to="/contact"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md shadow-indigo-600/10"
                >
                  Start Similar Build
                </Link>
                <button 
                  type="button"
                  onClick={() => setFeaturedDevice(featuredDevice === "desktop" ? "mobile" : "desktop")}
                  className="border border-border hover:border-slate-300 bg-card text-foreground font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-sm"
                >
                  {featuredDevice === "desktop" ? <Smartphone className="w-4 h-4" /> : <Laptop className="w-4 h-4" />}
                  Show {featuredDevice === "desktop" ? "Mobile" : "Desktop"} View
                </button>
              </div>
            </div>

            {/* Interactive Screen Device Mockup */}
            <div className="flex items-center justify-center relative w-full aspect-[4/3] bg-muted border border-border rounded-3xl overflow-hidden p-6 shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-40 pointer-events-none" />
              
              {/* Device frame container */}
              <div 
                className={`bg-slate-900 border border-slate-800 p-2 shadow-2xl transition-all duration-500 flex flex-col items-center overflow-hidden ${
                  featuredDevice === "desktop" 
                    ? "w-full aspect-[16/10] rounded-2xl" 
                    : "w-[48%] aspect-[9/18] rounded-[2.5rem]"
                }`}
              >
                {/* Browser bar for desktop */}
                {featuredDevice === "desktop" && (
                  <div className="w-full flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5 mb-1.5 text-[8px] text-muted-foreground pl-2 select-none font-mono">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                    </div>
                    <span className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 px-4 rounded-full text-[7px] w-1/3 text-center text-slate-600 dark:text-slate-400">freshbites.in</span>
                    <div className="w-8" />
                  </div>
                )}

                {/* Mobile camera notch */}
                {featuredDevice === "mobile" && (
                  <div className="w-16 h-3 bg-slate-950 rounded-full mb-3 mt-1 shadow-inner shrink-0" />
                )}

                {/* Simulated Screen Content */}
                <div className="w-full flex-1 bg-slate-950 rounded-lg overflow-y-auto p-4 select-none scrollbar-thin flex flex-col text-left">
                  <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                    <span className="text-[10px] font-bold text-white flex items-center gap-1">
                      <span className="text-emerald-400">●</span> FreshBites
                    </span>
                    <span className="w-6 h-2 bg-white/10 rounded" />
                  </div>
                  
                  <div className="text-center py-2 flex-1 flex flex-col justify-center">
                    <h4 className="text-xs font-bold text-white leading-tight">Fresh organic farm ingredients <br />delivered to your doorstep.</h4>
                    <div className="w-16 h-3 bg-emerald-500 text-slate-950 font-bold rounded-full mx-auto mt-3 text-[7px] flex items-center justify-center">Order Online</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-white/[0.02] border border-white/5 rounded p-1.5 text-center">
                      <div className="w-full aspect-square rounded bg-white/[0.04] mb-1.5" />
                      <div className="text-[8px] text-white font-bold">Avocado Pack</div>
                      <div className="text-[7px] text-emerald-400 mt-0.5">₹180</div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded p-1.5 text-center">
                      <div className="w-full aspect-square rounded bg-white/[0.04] mb-1.5" />
                      <div className="text-[8px] text-white font-bold">Bio Broccoli</div>
                      <div className="text-[7px] text-emerald-400 mt-0.5">₹90</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Strip */}
        <section className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.label)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === f.label
                    ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500 shadow-sm"
                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-slate-300 shadow-sm"
                }`}
              >
                <f.icon className="w-3.5 h-3.5" />
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* Bento Grid Projects */}
        <section className="container mx-auto px-4 pb-10">
          <div className="grid md:grid-cols-6 gap-6">
            {filteredProjects.map((p, idx) => (
              <article 
                key={idx}
                className={`glass-panel border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/20 transition-all duration-300 flex flex-col group ${
                  p.size === "large" 
                    ? "md:col-span-4" 
                    : p.size === "medium" 
                    ? "md:col-span-3" 
                    : "md:col-span-2"
                }`}
              >
                <div className="relative aspect-[16/9] w-full bg-muted overflow-hidden border-b border-slate-200/80 dark:border-white/[0.06]">
                  <img 
                    src={p.img} 
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/95 border border-white/10 text-[9px] text-indigo-300 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm">
                    {p.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-indigo-600 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 font-semibold">
                      {p.desc}
                    </p>
                  </div>

                  <div className="border-t border-slate-200/80 dark:border-white/[0.06] pt-4 mt-auto flex items-center justify-between gap-4 font-semibold text-xs text-muted-foreground">
                    <div>
                      <span className="text-[10px] text-muted-foreground font-bold uppercase block">Result Achieved</span>
                      <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">{p.results}</span>
                    </div>
                    <a
                      href={p.previewUrl.startsWith("http") ? p.previewUrl : `https://${p.previewUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-600 dark:text-indigo-400 font-bold group-hover:translate-x-1.5 transition-transform flex items-center gap-1 cursor-pointer"
                    >
                      Live Preview <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Stats strip - Replaced fake counts with trust metrics */}
        <section className="container mx-auto px-4 py-4">
          <div className="glass-panel border-border rounded-3xl shadow-sm grid grid-cols-2 md:grid-cols-4 divide-y divide-x divide-slate-200/80 dark:divide-white/[0.06] md:divide-y-0">
            {[
              { icon: Rocket, val: "100%", label: "Speed Guarantee" },
              { icon: Smile, val: "0%", label: "Upfront payment" },
              { icon: Coins, val: "Direct", label: "Developer WhatsApp" },
              { icon: TrendingUp, val: "100%", label: "Code Handoff" },
            ].map(({ icon: Icon, val, label }) => (
              <div key={label} className="p-5 sm:p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-soft text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/10 grid place-items-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-lg sm:text-xl text-foreground tracking-tight">{val}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-bold uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <CtaBanner 
        title="Ready to build your next" 
        highlight="success story?" 
        subtitle="Let's craft a bespoke platform built for performance." 
      />
    </Layout>
  );
};

export default OurWorkPage;
