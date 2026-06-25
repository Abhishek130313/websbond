import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, Check, Sparkles, Code2, Search, Megaphone, Cpu, Zap, Headphones, Star, TrendingUp, Shield, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import a1 from "@/assets/avatar1.webp";
import a2 from "@/assets/avatar2.webp";
import a3 from "@/assets/avatar3.webp";

interface FloatingCardProps {
  title: string;
  icon: React.ReactNode;
  glowColor: string;
  positionClass: string;
}

const FloatingCard = ({ title, icon, glowColor, positionClass }: FloatingCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tX = -((y - rect.height / 2) / 6);
    const tY = (x - rect.width / 2) / 6;
    setTilt({ x: tX, y: tY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
      style={{
        transform: isHovered
          ? `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.08)`
          : `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: isHovered ? "none" : "transform 0.4s ease",
      } as React.CSSProperties}
      className={`absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/95 border border-slate-200 dark:border-white/[0.1] backdrop-blur-xl hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] z-20 select-none ${positionClass} ${glowColor}`}
    >
      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] flex items-center justify-center">{icon}</div>
      <span className="text-xs font-bold text-slate-800 dark:text-white tracking-wide">{title}</span>
    </div>
  );
};

export const Hero = ({ title, subtitle, ctaLabel, ctaHref }: { title?: string; subtitle?: string; ctaLabel?: string; ctaHref?: string; }) => {
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [liveConversions, setLiveConversions] = useState(3840);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveConversions((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSpotlightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

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

  const trustBadges = [
    { label: "100% Code Handoff", dot: "bg-emerald-400" },
    { label: "Direct Developer Chat", dot: "bg-cyan-400" },
    { label: "PageSpeed Guarantee", dot: "bg-indigo-400" },
    { label: "0% Upfront Prototype", dot: "bg-purple-400" },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleContainerMouseMove}
      className="relative overflow-hidden pt-6 pb-12 md:pt-8 md:pb-20 bg-background text-foreground transition-colors duration-300"
    >
      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-a {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-14px); }
        }
        @keyframes float-b {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes particle-rise {
          0%   { transform: translateY(0);    opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateY(-110px); opacity: 0; }
        }
        @keyframes glow-pulse {
          0%,100% { text-shadow: 0 0 8px rgba(99,102,241,0.15); }
          50%      { text-shadow: 0 0 28px rgba(99,102,241,0.4); }
        }
        @keyframes grid-warp {
          0%   { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
        @keyframes ring-pulse {
          0%   { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .hero-fu   { animation: hero-fade-up 0.8s ease both; }
        .hero-fu-1 { animation: hero-fade-up 0.8s ease 0.1s both; }
        .hero-fu-2 { animation: hero-fade-up 0.8s ease 0.22s both; }
        .hero-fu-3 { animation: hero-fade-up 0.8s ease 0.34s both; }
        .hero-fu-4 { animation: hero-fade-up 0.8s ease 0.46s both; }
        .hero-fu-5 { animation: hero-fade-up 0.8s ease 0.58s both; }
        .float-a   { animation: float-a 6s ease-in-out infinite; }
        .float-b   { animation: float-b 8s ease-in-out infinite; }
        .glow-txt  { animation: glow-pulse 3s ease-in-out infinite; }
        .grid-anim { animation: grid-warp 3s linear infinite; }
        .ring-pulse-anim { animation: ring-pulse 2.5s ease-out infinite; }
      `}</style>

      {/* Background layers */}
      <div className="noise-overlay pointer-events-none opacity-20 dark:opacity-35" />
      <div className="absolute inset-0 grid-mesh opacity-30 dark:opacity-20 pointer-events-none" />

      {/* Aurora orbs */}
      <div className="absolute -top-48 left-1/4 w-[550px] h-[550px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[130px] pointer-events-none animate-aurora-1" />
      <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] rounded-full bg-purple-500/5 dark:bg-purple-500/8 blur-[150px] pointer-events-none animate-aurora-2" />
      <div className="absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-cyan-500/4 dark:bg-cyan-500/6 blur-[110px] pointer-events-none animate-aurora-3" />

      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: `radial-gradient(700px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(99,102,241,0.06), transparent 70%)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-10 items-center">

          {/* ═══ LEFT COLUMN (Text Left Aligned) ═══ */}
          <div className="flex flex-col gap-6 text-left items-start">
            
            {/* Badge */}
            <div className="hero-fu inline-flex items-center gap-2 bg-indigo-500/10 border border-purple-500/20 text-indigo-600 dark:text-white font-semibold text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.05)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 animate-spin-slow" />
              Website Banwaye — Digital Solutions That Build Lasting Trust
            </div>

            {/* H1 */}
            <div className="hero-fu-1">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.04em] text-slate-900 dark:text-white">
                {title ? title : "We Build Websites"}{" "}
                {subtitle ? (
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent glow-txt block">
                    {subtitle}
                  </span>
                ) : (
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent glow-txt block">
                    That Grow Businesses.
                  </span>
                )}
              </h1>
            </div>

            {/* Subtext */}
            <p className="hero-fu-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Indore ka best digital agency — handcrafted React sites, 100/100 PageSpeed, local Google SEO, aur direct WhatsApp developer support. Website banwana hai? We're ready.
            </p>

            {/* Stars + social proof */}
            <div className="hero-fu-2 flex items-center gap-3 flex-wrap">
              <div className="flex gap-0.5 text-amber-500 bg-amber-500/5 border border-amber-500/10 rounded-full px-3 py-1.5 items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs font-bold text-slate-800 dark:text-white ml-2">5.0/5</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-bold tracking-wider uppercase">Transparent Engineering Guarantee</span>
            </div>

            {/* Trust badge pills */}
            <div className="hero-fu-3 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${b.dot} animate-pulse shrink-0`} />
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">{b.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-fu-4 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.2)] dark:shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_45px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919306623619?text=Namaste!%20Mujhe%20website%20banwani%20hai.%20Free%20consultation%20chahiye."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-300 text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-3 bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.1] hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-200/50 dark:hover:bg-white/[0.06] text-slate-700 dark:text-white font-bold px-6 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md text-sm"
              >
                <span className="w-7 h-7 rounded-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 grid place-items-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-indigo-600 dark:text-white" />
                </span>
                See Our Work
              </Link>
            </div>

            {/* Guarantees row */}
            <div className="hero-fu-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 dark:border-white/[0.06] pt-5 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
              {["100% Code Ownership", "Direct WhatsApp Line", "Lighthouse 100/100", "Indore Engineering Team"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-emerald-500 dark:text-emerald-400" strokeWidth={3.5} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Client avatars */}
            <div className="hero-fu-5 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src={a1} alt="Client" className="w-9 h-9 rounded-full ring-2 ring-slate-100 dark:ring-slate-950 object-cover" />
                <img src={a2} alt="Client" className="w-9 h-9 rounded-full ring-2 ring-slate-100 dark:ring-slate-950 object-cover" />
                <img src={a3} alt="Client" className="w-9 h-9 rounded-full ring-2 ring-slate-100 dark:ring-slate-950 object-cover" />
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 ring-2 ring-slate-100 dark:ring-slate-950 flex items-center justify-center text-[10px] font-bold text-white">100%</div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 text-left max-w-[200px]">
                <strong className="text-slate-900 dark:text-white font-bold">Indore-based expert developers</strong> working directly with your business.
              </div>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN (3D Browser Mockup) ═══ */}
          <div className="relative flex items-center justify-center pt-8 lg:pt-0 hero-fu-6">
            <div className="relative w-full max-w-[450px]">
              
              {/* Floating cards */}
              <FloatingCard title="Website Dev"    icon={<Code2       className="w-4 h-4 text-cyan-500 dark:text-cyan-400"    />} glowColor="hover:shadow-cyan-500/10"    positionClass="-top-5 -left-12" />
              <FloatingCard title="SEO Ranking"    icon={<Search      className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />} glowColor="hover:shadow-emerald-500/10" positionClass="top-16 -right-12" />
              <FloatingCard title="Paid Ads"       icon={<Megaphone   className="w-4 h-4 text-purple-500 dark:text-purple-400"  />} glowColor="hover:shadow-purple-500/10"  positionClass="top-1/2 -left-16" />
              <FloatingCard title="Automations"    icon={<Cpu         className="w-4 h-4 text-cyan-500 dark:text-cyan-400"    />} glowColor="hover:shadow-cyan-500/10"    positionClass="bottom-24 -right-12" />
              <FloatingCard title="Direct Chat"    icon={<Headphones  className="w-4 h-4 text-pink-500 dark:text-pink-400"    />} glowColor="hover:shadow-pink-500/10"    positionClass="-bottom-5 -left-4" />
              <FloatingCard title="Business Growth" icon={<TrendingUp className="w-4 h-4 text-amber-500 dark:text-amber-400"  />} glowColor="hover:shadow-amber-500/10"   positionClass="bottom-4 right-12" />

              {/* Browser Mockup */}
              <div className="w-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-white/[0.1] rounded-3xl p-3 shadow-[0_30px_80px_rgba(0,0,0,0.06)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl float-a">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/[0.07] pb-2.5 mb-3">
                  <div className="flex gap-1.5 pl-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-white/[0.06] rounded-full text-[9px] text-slate-600 dark:text-slate-400 font-mono px-4 py-0.5 w-1/2 text-center truncate">
                    websbond.com/dashboard
                  </div>
                  <div className="w-8" />
                </div>

                {/* Console window */}
                <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-4 relative flex flex-col gap-4 border border-slate-100 dark:border-0 overflow-hidden">
                  {/* Grid warp */}
                  <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_bottom,transparent_20%,rgba(99,102,241,0.2)_80%),repeating-linear-gradient(90deg,rgba(99,102,241,0.3)_0px,rgba(99,102,241,0.3)_20px,transparent_20px,transparent_40px)] [transform:perspective(120px)_rotateX(60deg)] [transform-origin:top_center] grid-anim pointer-events-none" />

                  {/* Top metric widgets */}
                  <div className="relative z-10 grid grid-cols-3 gap-3">
                    <div className="bg-white dark:bg-slate-900/90 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-xl p-2.5 text-center shadow-sm">
                      <span className="text-[7px] text-slate-500 block uppercase font-black">Lighthouse</span>
                      <span className="text-base font-black text-emerald-600 dark:text-emerald-400 font-mono block mt-0.5">100/100</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900/90 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-xl p-2.5 text-center shadow-sm">
                      <span className="text-[7px] text-slate-500 block uppercase font-black">FCP Speed</span>
                      <span className="text-base font-black text-cyan-600 dark:text-cyan-400 font-mono block mt-0.5">0.24s</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900/90 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-xl p-2.5 text-center shadow-sm">
                      <span className="text-[7px] text-slate-500 block uppercase font-black">SEO Rank</span>
                      <span className="text-base font-black text-purple-600 dark:text-purple-400 font-mono block mt-0.5">Google #1</span>
                    </div>
                  </div>

                  {/* Central 3D cosmos */}
                  <div className="relative z-10 flex items-center justify-center h-40 pointer-events-none select-none">
                    <div className="relative w-44 h-44 flex items-center justify-center">
                      <div className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shadow-[0_0_35px_rgba(99,102,241,0.5)] dark:shadow-[0_0_35px_rgba(99,102,241,0.7)] animate-pulse flex items-center justify-center border border-white/20">
                        <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
                      </div>
                      <svg className="absolute w-40 h-40 animate-spin-slow" style={{ transform: "perspective(600px) rotateX(65deg) rotateY(15deg)" }} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke="#22d3ee" strokeWidth="1.2" fill="none" strokeDasharray="8 12" opacity="0.7" />
                        <circle cx="50" cy="5" r="3" fill="#22d3ee" className="animate-pulse" />
                      </svg>
                      <svg className="absolute w-32 h-32 animate-spin-reverse" style={{ transform: "perspective(600px) rotateX(45deg) rotateY(-20deg)" }} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke="#a855f7" strokeWidth="1.8" fill="none" strokeDasharray="20 8 4 8" opacity="0.6" />
                        <circle cx="95" cy="50" r="2.5" fill="#a855f7" />
                      </svg>
                      <svg className="absolute w-24 h-24 animate-spin-slow" style={{ transform: "perspective(600px) rotateX(75deg) rotateY(30deg)" }} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke="#fb923c" strokeWidth="1.2" fill="none" strokeDasharray="3 6" opacity="0.8" />
                        <circle cx="50" cy="95" r="2.5" fill="#fb923c" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom performance card */}
                  <div className="relative z-10 bg-white dark:bg-slate-900/90 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-xl p-3.5 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                      <div className="flex flex-col">
                        <span className="text-[7px] text-slate-500 uppercase font-black tracking-wider">Speed Performance</span>
                        <span className="text-sm font-black text-slate-800 dark:text-white font-mono mt-0.5 leading-none">
                          99/100 Index
                        </span>
                      </div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <Zap className="w-3 h-3 fill-current animate-pulse" /> Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Partner Logos Bar ── */}
        <div className="mt-14 border-t border-slate-200 dark:border-white/[0.06] pt-8">
          <p className="text-center text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-500 font-mono mb-7">
            Ecosystem integrations & trusted partner channels
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-35 dark:opacity-30 hover:opacity-70 transition-opacity duration-500">
            {partnerLogos.map((p) => (
              <div key={p.name}>
                <img src={p.logo} alt={p.name} className="h-4 sm:h-5 opacity-70 dark:invert dark:filter dark:brightness-200 pointer-events-none select-none max-w-[80px] object-contain" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
