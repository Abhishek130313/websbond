import { useState, useEffect } from "react";
import { ArrowRight, Globe, Megaphone, Search, Headphones, Code2, Sparkles, Paintbrush, ShoppingCart, Cpu, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface Capability {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  glowClass: string;
  microPreview: React.ReactNode;
}

const capabilitiesList: Capability[] = [
  {
    title: "Website Development",
    description: "Premium React & Next.js architectures with clean TypeScript codebase, delivering 100/100 performance scores and premium UI aesthetics.",
    accentColor: "#3b82f6",
    glowClass: "hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.25)]",
    icon: <Code2 className="w-6 h-6" />,
    microPreview: (
      <div className="mt-4 bg-slate-950 rounded-xl p-3 border border-white/5 font-mono text-[9px] text-blue-400 select-none">
        <span className="text-purple-400">const</span> <span className="text-white">WebsbondSite</span> = () =&gt; (<br />
        &nbsp;&nbsp;&lt;<span className="text-emerald-400">HandcraftedDesign</span> <span className="text-purple-400">performance</span>=<span className="text-orange-400">"100%"</span> /&gt;<br />
        );
      </div>
    )
  },
  {
    title: "Elite SEO Optimization",
    description: "Professional semantic structural mapping, high-quality backlink pipelines, and schema indexing to dominate top search positions.",
    accentColor: "#10b981",
    glowClass: "hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.25)]",
    icon: <Search className="w-6 h-6" />,
    microPreview: (
      <div className="mt-4 bg-slate-950 rounded-xl p-3 border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[9px] text-white font-bold font-mono">yourbrand.com</span>
        </div>
        <span className="bg-emerald-500/20 text-emerald-400 text-[8px] font-bold px-2 py-0.5 rounded-full">Google Rank #1</span>
      </div>
    )
  },
  {
    title: "Digital Ads & Marketing",
    description: "High-ROI marketing strategies and target-oriented paid campaigns on Google, Facebook, Instagram, and LinkedIn to scale customer pipeline.",
    accentColor: "#8b5cf6",
    glowClass: "hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.25)]",
    icon: <Megaphone className="w-6 h-6" />,
    microPreview: (
      <div className="mt-4 bg-slate-950 rounded-xl p-3 border border-white/5 flex items-center justify-between">
        <span className="text-[9px] text-slate-400">Ad Conversions</span>
        <span className="text-emerald-400 text-[9px] font-bold font-mono">+240% Growth</span>
      </div>
    )
  },
  {
    title: "Branding & UI/UX Design",
    description: "Handcrafted style guides, vector custom assets, unique color palettes, and typographic design setups to elevate brand authority.",
    accentColor: "#ec4899",
    glowClass: "hover:shadow-[0_20px_50px_-20px_rgba(236,72,153,0.25)]",
    icon: <Paintbrush className="w-6 h-6" />,
    microPreview: (
      <div className="mt-4 flex gap-1.5 items-center">
        {["#6366F1", "#EC4899", "#14B8A6"].map((c) => (
          <div key={c} className="flex-1 h-6 rounded border border-white/10 flex items-center justify-center text-[8px] text-white font-mono font-bold" style={{ backgroundColor: c }}>
            {c}
          </div>
        ))}
      </div>
    )
  },
  {
    title: "E-Commerce Solutions",
    description: "High-performance online shops with secure payment gateway integrations, frictionless cart pipelines, and custom invoice controls.",
    accentColor: "#f59e0b",
    glowClass: "hover:shadow-[0_20px_50px_-20px_rgba(245,158,11,0.25)]",
    icon: <ShoppingCart className="w-6 h-6" />,
    microPreview: (
      <div className="mt-4 bg-slate-950 rounded-xl p-3 border border-white/5 flex items-center justify-between">
        <span className="text-[9px] text-slate-400 font-mono">Cart checkout speed:</span>
        <span className="text-emerald-400 text-[9px] font-extrabold font-mono">0.24s</span>
      </div>
    )
  },
  {
    title: "Workflow Automation",
    description: "Connect APIs, configure automated customer WhatsApp notification updates, email newsletter synchronizations, and lead CRM systems.",
    accentColor: "#06b6d4",
    glowClass: "hover:shadow-[0_20px_50px_-20px_rgba(6,182,212,0.25)]",
    icon: <Cpu className="w-6 h-6" />,
    microPreview: (
      <div className="mt-4 bg-slate-950 rounded-xl p-3 border border-white/5 flex items-center justify-between text-[9px] font-mono">
        <span className="text-slate-500">API trigger ➔ WhatsApp</span>
        <span className="text-emerald-400 font-bold">STATUS: OK</span>
      </div>
    )
  },
  {
    title: "Maintenance & Care",
    description: "Ongoing developer-level adjustments, monthly code backups, SSL renewals, domain hosting configurations, and priority server optimizations.",
    accentColor: "#10b981",
    glowClass: "hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.25)]",
    icon: <ShieldCheck className="w-6 h-6" />,
    microPreview: (
      <div className="mt-4 bg-slate-950 rounded-xl p-3 border border-white/5 flex items-center justify-between text-[9px] font-mono">
        <span className="text-slate-500">Uptime Monitor</span>
        <span className="text-emerald-400 font-bold">99.98% Online</span>
      </div>
    )
  },
  {
    title: "24/7 Human Help support",
    description: "Direct contact line to engineers and project managers on WhatsApp, Slack or call. Absolute protection against chatbot-only loops.",
    accentColor: "#f97316",
    glowClass: "hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.25)]",
    icon: <Headphones className="w-6 h-6" />,
    microPreview: (
      <div className="mt-4 bg-slate-950 rounded-xl p-3 border border-white/5 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
        <span className="text-[9px] text-white italic truncate">"Project changes successfully compiled. Checking live URL."</span>
      </div>
    )
  }
];

const CapabilityCard = ({ title, description, icon, accentColor, glowClass, microPreview }: Capability) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mouseLocal, setMouseLocal] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const tiltX = -(y - yc) / 15;
    const tiltY = (x - xc) / 15;
    
    setTilt({ x: tiltX, y: tiltY });
    setMouseLocal({ x: `${x}px`, y: `${y}px` });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)` 
          : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: isHovered ? "none" : "transform 0.4s ease, border-color 0.3s ease",
        ["--x" as any]: mouseLocal.x,
        ["--y" as any]: mouseLocal.y,
      } as React.CSSProperties}
      className={`group relative p-6 rounded-3xl bg-slate-900/60 border border-white/[0.06] backdrop-blur-md hover:border-amber-500/30 overflow-hidden z-10 transition-all duration-300 ${glowClass}`}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(150px circle at var(--x) var(--y), #F2A10415, transparent 80%)`
        }}
      />
      
      <div className="flex flex-col h-full justify-between relative z-10">
        <div>
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.02] border border-white/[0.08] group-hover:border-amber-500/20 group-hover:bg-amber-500/5 mb-6 text-slate-300 group-hover:text-amber-500 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2 font-display">{title}</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-400">{description}</p>
        </div>
        {microPreview}
      </div>
    </div>
  );
};

const AuditWidget = () => {
  const [score, setScore] = useState(42);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (score < 100) {
        setScore((prev) => Math.min(prev + 2, 100));
      }
    }, 30);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="mt-8 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] backdrop-blur-md relative overflow-hidden group hover:border-slate-300 dark:hover:border-white/[0.12] transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="flex items-center gap-5">
        {/* Animated Speed Dial */}
        <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" className="text-slate-200 dark:text-white/[0.03]" strokeWidth="3.2" />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke={score === 100 ? "#10b981" : "#F2A104"}
              strokeWidth="3.2"
              strokeDasharray={`${score} 100`}
              className="transition-all duration-500 ease-out"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-sm font-black font-mono text-slate-900 dark:text-white leading-none">{score}</span>
            <span className="text-[5px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest mt-0.5">Speed</span>
          </div>
        </div>

        {/* Info panel */}
        <div className="flex-1 space-y-1">
          <div className="text-[9px] font-bold text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            LIVE SPEED AUDIT
          </div>
          <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
            {score === 100 ? "Optimization Complete: 100% Score" : "Auditing page load parameters..."}
          </div>
          <div className="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">
            Custom React structures outperform slow template configurations by over 240% in Google Search visibility.
          </div>
        </div>
      </div>

      {/* Comparative list */}
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/[0.04] grid grid-cols-2 gap-3 text-[10px]">
        <div className="space-y-1.5 border-r border-slate-200 dark:border-white/[0.04] pr-2.5">
          <span className="text-[8px] font-black uppercase text-amber-500 dark:text-amber-400 tracking-wider block">Websbond Dev</span>
          <div className="flex items-center justify-between text-slate-800 dark:text-white font-semibold">
            <span>First Paint:</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono">0.24s</span>
          </div>
          <div className="flex items-center justify-between text-slate-800 dark:text-white font-semibold">
            <span>Core Vitals:</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono">Passed</span>
          </div>
        </div>
        <div className="space-y-1.5 pl-2.5 opacity-80">
          <span className="text-[8px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider block">Templates</span>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span>First Paint:</span>
            <span className="text-rose-600 dark:text-rose-400 font-mono">3.80s</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span>Core Vitals:</span>
            <span className="text-rose-600 dark:text-rose-400 font-mono">Failed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Services = () => (
  <section className="container py-24 md:py-32 relative mx-auto px-4">
    <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full radial-glow pointer-events-none" style={{ "--glow-color": "rgba(242, 161, 4, 0.02)" } as React.CSSProperties} />
    
    <div className="grid lg:grid-cols-[0.95fr_2fr] gap-12 lg:gap-16 items-start">
      {/* Sticky Left Column */}
      <div className="lg:sticky lg:top-28">
        <div className="inline-flex items-center gap-2 bg-amber-500/5 border border-amber-500/20 text-amber-500 dark:text-amber-300 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> Capabilities
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
          Everything you need, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">all in one place.</span>
        </h2>
        <p className="mt-6 text-sm text-slate-700 dark:text-slate-400 max-w-md leading-relaxed">
          We don't build generic templates. We write custom performance code, configure indexing engines, script automation flows, and provide instant developer support.
        </p>

        {/* Live Speed Auditor Widget */}
        <AuditWidget />

        <div className="mt-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-slate-800 dark:text-white font-bold text-sm bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 px-6 py-3 rounded-xl transition-all hover:translate-x-1"
          >
            Explore All Services <ArrowRight className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          </Link>
        </div>
      </div>

      {/* 8-Capabilities Grid Right Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilitiesList.map((capability) => (
          <CapabilityCard key={capability.title} {...capability} />
        ))}
      </div>
    </div>
  </section>
);
