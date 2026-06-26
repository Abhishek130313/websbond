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
  const [activeTab, setActiveTab] = useState<"dev" | "seo" | "ads" | "support">("dev");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEO 
        title="Enterprise Web Services | Custom React & Global SEO | Websbond" 
        description="Premium custom website development, search engine optimization, and PPC campaign management for global growth. Scale your business with Websbond." 
        path="/services" 
        keywords="websbond services, website developer Delhi NCR, local SEO Gurgaon, PPC ads agency Haryana, custom website development, business growth"
      />

      {/* ── Services Hero Section ── */}
      <section className="relative overflow-hidden pt-16 pb-16" style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}>

        {/* Animated Background Mesh & Floating Particles */}
        <div className="absolute inset-0 grid-mesh opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none animate-aurora-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none animate-aurora-2" />

        {/* Floating tech background shapes */}
        <div className="absolute top-10 right-12 w-6 h-6 border border-amber-500/20 rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-cyan-500/10 rounded-full animate-bounce pointer-events-none" style={{ animationDuration: '4.5s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left gap-5">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-[10px] sm:text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#eb560c] animate-pulse" />
                Digital Solutions That Drive Real Growth
              </div>

              <h1 className="font-jost font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight">
                Premium Digital Services.<br />
                <span style={{ color: "#eb560c" }}>
                  Real, Measurable Growth.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-white/75 max-w-xl leading-relaxed font-semibold">
                We avoid template layouts. We build premium, custom React and Next.js systems engineered to dominate search rankings and optimize conversions.
              </p>

              {/* STATS GRID - Replaced with trust parameters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1 w-full max-w-2xl">
                {[
                  { value: "100%", label: "Speed Guarantee", icon: "⚡", color: "from-rose-500/5 to-rose-500/10 dark:from-rose-500/10 dark:to-rose-500/20 border-rose-200 dark:border-rose-500/20" },
                  { value: "Direct", label: "Developer Chat", icon: "💬", color: "from-emerald-500/5 to-emerald-500/10 dark:from-emerald-500/10 dark:to-emerald-500/20 border-emerald-200 dark:border-emerald-500/20" },
                  { value: "0%", label: "Upfront payment", icon: "🛡️", color: "from-blue-500/5 to-blue-500/10 dark:from-blue-500/10 dark:to-blue-500/20 border-blue-200 dark:border-blue-500/20" },
                  { value: "100%", label: "Code Handoff", icon: "📦", color: "from-amber-500/5 to-amber-500/10 dark:from-amber-500/10 dark:to-amber-500/20 border-amber-200 dark:border-amber-500/20" },
                ].map((s, i) => (
                  <div key={i} className={`relative overflow-hidden bg-gradient-to-br ${s.color} border rounded-2xl p-3 flex flex-col gap-0.5 group hover:scale-105 transition-transform duration-300 shadow-sm`}>
                    <div className="absolute -top-1 -right-1 text-lg opacity-35 group-hover:opacity-60 transition-opacity">{s.icon}</div>
                    <span className="font-display font-black text-lg text-foreground tracking-tight leading-none">{s.value}</span>
                    <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-3 mt-1 justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-lg shadow-md transition-all text-sm text-white"
                  style={{ background: "#eb560c" }}
                >
                  Get Started Free <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://wa.me/919306623619?text=Namaste!%20I%20am%20interested%20in%20a%20free%20website%20consultation%20with%20Websbond."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Consultant
                </a>
               {/* AVATAR + RATING */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10 mt-1 justify-start w-full">
                <div className="flex -space-x-3">
                  <img src={a1} alt="Client" width={32} height={32} className="w-8 h-8 rounded-full ring-2 ring-[#002b49] object-cover" />
                  <img src={a2} alt="Client" width={32} height={32} className="w-8 h-8 rounded-full ring-2 ring-[#002b49] object-cover" />
                  <img src={a3} alt="Client" width={32} height={32} className="w-8 h-8 rounded-full ring-2 ring-[#002b49] object-cover" />
                  <div className="w-8 h-8 rounded-full ring-2 ring-[#002b49] flex items-center justify-center text-[9px] font-bold text-white" style={{ background: "#eb560c" }}>100%</div>
                </div>
                <div>
                  <div className="flex gap-0.5" style={{ color: "#f59e0b" }}>
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-[10px] text-white/70 font-semibold">Delhi NCR &amp; Haryana engineering team working directly with you</p>
                </div>
              </div>
              </div>
            </div>

            {/* Right Column: 3D Dashboard Mockup */}
            <div className="relative flex items-center justify-center pt-8 lg:pt-0">
              <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center [perspective:1200px] pointer-events-auto group/hero">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-amber-600/5 to-cyan-500/5 rounded-3xl blur-2xl scale-110" />
                <div className="relative w-[280px] h-[220px] [transform-style:preserve-3d] [transform:rotateX(22deg)_rotateY(-16deg)] group-hover/hero:[transform:rotateX(12deg)_rotateY(-2deg)] transition-all duration-700 ease-out">
                  <div className="absolute inset-0 bg-card border border-border rounded-2xl p-4 shadow-card backdrop-blur-md [transform:translateZ(55px)] transition-transform duration-700 ease-out group-hover/hero:[transform:translateZ(75px)] flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/5 pb-2 text-foreground">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[8px] text-amber-500 dark:text-amber-400 font-bold font-mono">analytics_core</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-2 flex-1 items-center">
                      <div className="bg-muted/50 border border-border rounded-lg p-1.5 text-center">
                        <div className="text-[7px] text-muted-foreground font-bold uppercase">Conversions</div>
                        <div className="text-xs font-black text-amber-500 dark:text-amber-400 font-mono mt-0.5">+128%</div>
                      </div>
                      <div className="bg-muted/50 border border-border rounded-lg p-1.5 text-center">
                        <div className="text-[7px] text-muted-foreground font-bold uppercase">Page Speed</div>
                        <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">100/100</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.15)] [transform:translateZ(10px)] group-hover/hero:[transform:translateZ(15px)] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[8px] text-amber-500 dark:text-amber-300 font-mono">
                      <span>Server Engine</span>
                      <Cpu className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                    </div>
                    <div className="w-full h-1 bg-amber-100 dark:bg-amber-500/20 rounded-full" />
                  </div>
                  <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-amber-500/20 rounded-2xl p-4 shadow-[0_5px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.2)] [transform:translateZ(-30px)] group-hover/hero:[transform:translateZ(-45px)] flex flex-col justify-between">
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
        <section className="container mx-auto px-4 py-16 border-b border-slate-200/85 dark:border-white/[0.06]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/5 border border-amber-500/20 text-amber-500 dark:text-amber-400 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Capabilities Catalog
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
            Our Core <span className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">Digital Services.</span>
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
            <div key={idx} className="glass-panel border-border rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/20 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/5 text-amber-500 dark:text-amber-400 border border-amber-500/20 dark:border-amber-500/10 grid place-items-center mb-4 shrink-0 group-hover:scale-105 transition-transform"><item.icon className="w-5 h-5" /></div>
                <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-amber-500 transition-colors">{item.title}</h3>
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

      {/* Elite Engagement Models Section */}
      <section className="container mx-auto px-4 py-16 relative border-b border-slate-200/85 dark:border-white/[0.06]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 dark:border-amber-500/20 text-amber-500 dark:text-amber-400 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Collaboration Methods
          </div>
          <h2 className="font-display font-extrabold text-3xl text-foreground tracking-tight">
            Elite <span className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">Engagement Models.</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            We align with your operational needs to deliver design velocity and clean software builds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Dedicated Tech Squads",
              desc: "Ideal for fast-growth startups needing immediate development velocity and continuous product iteration.",
              highlights: ["Full-time React/Next.js Engineers", "Direct developer Slack/WhatsApp syncs", "Agile sprints & weekly deployments", "Flexible scaling options"],
              accent: "border-slate-200 dark:border-slate-800 bg-card hover:border-slate-350"
            },
            {
              title: "Fixed-Scope Projects",
              desc: "Best for launching clean marketing portfolios, interactive eCommerce systems, or enterprise web platforms.",
              highlights: ["Detailed architectural roadmap", "100% code handoff guarantee", "Strict delivery milestones", "Complete post-launch warranty"],
              accent: "border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 relative shadow-md shadow-amber-500/5",
              featured: true
            },
            {
              title: "Growth & SEO Retainers",
              desc: "Designed for businesses seeking recurring organic traffic rankings and continuous digital conversion optimization.",
              highlights: ["Weekly local/global SEO syncs", "Meta & Google ad campaign audits", "Speed & security core checkups", "Priority developer support hours"],
              accent: "border-slate-200 dark:border-slate-800 bg-card hover:border-slate-350"
            }
          ].map((model, idx) => (
            <div key={idx} className={`rounded-3xl p-6 border flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ${model.accent}`}>
              {model.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[9px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full font-sans">
                  Recommended Model
                </span>
              )}
              <div>
                <h3 className="font-display font-extrabold text-base text-foreground mb-3">{model.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-semibold pb-5 border-b border-border">{model.desc}</p>
                <ul className="space-y-3 mb-6">
                  {model.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                className={`w-full py-3 rounded-xl text-center font-bold text-xs uppercase tracking-wider transition-all block ${
                  model.featured
                    ? "bg-amber-500 hover:bg-amber-600 text-slate-950"
                    : "bg-muted hover:bg-surface-2 text-foreground border border-border"
                }`}
              >
                Initiate Discussion
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 6-Stage Delivery Blueprint Section */}
      <section className="container mx-auto px-4 py-16 relative border-b border-slate-200/85 dark:border-white/[0.06]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/5 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-300 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Operations Blueprint
          </div>
          <h2 className="font-display font-extrabold text-3xl text-foreground tracking-tight">
            Our 6-Stage <span className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">Delivery Engine.</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm font-semibold">
            How we take your digital project from initial brief to verified global deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { num: "01", stage: "Discovery & Strategy", desc: "Competitor layout audit, keyword difficulty mapping, and tech stack spec blueprint compile." },
            { num: "02", stage: "Figma UI Prototyping", desc: "Wireframe creation and custom design layouts tailored to elite global aesthetics." },
            { num: "03", stage: "High-Performance Coding", desc: "Handcrafted React and Next.js engineering with clean components and zero builder bloat." },
            { num: "04", stage: "Organic SEO Mapping", desc: "Google Search schema integration, local maps sync, and site indexing linkage configuration." },
            { num: "05", stage: "Rigorous QA & Audit", desc: "100/100 PageSpeed target audits, cross-device responsiveness verification, and secure API tests." },
            { num: "06", stage: "VIP Handoff & Support", desc: "Server transfer configuration, complete code files handoff, and direct developer WhatsApp monitoring." }
          ].map((step, idx) => (
            <div key={idx} className="glass-panel border-border rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/20 transition-all flex flex-col justify-between">
              <div>
                <div className="font-display font-black text-3xl text-amber-500/20 mb-3">{step.num}</div>
                <h3 className="font-display font-bold text-sm sm:text-base text-foreground mb-2">{step.stage}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-semibold">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Service Command Center Visualizer */}
        <section className="container mx-auto px-4 py-10 relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/5 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-300 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Pipeline Sandbox
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              How we <span className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">build & deploy.</span>
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
                    ? "bg-amber-500 dark:bg-amber-500 text-slate-950 shadow-sm font-bold" 
                    : "text-muted-foreground hover:text-foreground font-medium"
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
                      &lt;<span className="text-emerald-400">button</span> className=<span className="text-orange-400">"bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-xl shadow-glow py-3 px-6 transform hover:scale-105 active:scale-95 transition-all"</span>&gt;<br />
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
                      <span className="text-amber-500 font-mono text-[10px]">Rank Scan</span>
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
                      <div className="bg-amber-500 text-slate-950 rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[70%] text-left font-semibold">
                        "Hi Websbond, home screen banner change karna hai context update. Image swap code change available?"
                        <div className="text-[9px] text-slate-950/60 mt-1 text-right font-medium">10:42 AM</div>
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
              How we do it <span className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">differently.</span>
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
                  <span>Transparent proposal scope, full hosting ownership, and zero lock-in contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">FA<span className="text-amber-500 dark:text-amber-400">Qs</span></h2>
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
