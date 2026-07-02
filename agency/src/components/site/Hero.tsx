import { useState, useRef, useEffect } from "react";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Monitor } from "lucide-react";
import heroBg from "@/assets/bg_home_1782999734318.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleStartProject = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen lg:h-screen lg:max-h-[1080px] w-full flex items-center justify-center overflow-hidden pt-28 pb-16 hero-image-overlay select-none"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-25 bg-gradient-to-tr from-cyan-500/40 to-indigo-500/40 blur-[140px] pointer-events-none transition-all duration-300 ease-out hidden lg:block"
        style={{
          left: `${coords.x - 300}px`,
          top: `${coords.y - 300}px`,
          willChange: "left, top",
        }}
      />

      {/* Ambient Mesh Glows (For Mobile/Fallback & Depth) */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-10 bg-gradient-to-tr from-cyan-500 to-indigo-500 blur-[120px] pointer-events-none animate-[pulse_10s_infinite] will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full opacity-10 bg-gradient-to-bl from-purple-500 to-pink-500 blur-[100px] pointer-events-none animate-[pulse_12s_infinite] will-change-transform" />

      <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-12 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* ── Left Column: Value Proposition & Copywriting ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20 py-2 animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] shadow-lg rounded-full px-4 py-2 text-[12px] text-zinc-300 font-medium mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>⭐⭐⭐⭐⭐ Rated by 200+ Businesses Across India</span>
            </div>

            {/* Brand Personality Tagline */}
            <p className="text-cyan-400 font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 animate-[pulse_4s_infinite]">
              ✦ Built for businesses that refuse to look ordinary
            </p>

            {/* H1 Heading — balanced leading & tracking */}
            <h1
              className="font-extrabold text-white mb-6 leading-[0.98] tracking-[-0.04em] text-left drop-shadow-xl font-jost"
              style={{ fontSize: "clamp(42px, 5.8vw, 76px)", maxWidth: "650px" }}
            >
              Build Digital <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                Experiences
              </span> <br />
              That Drive Revenue.
            </h1>

            {/* Subtext */}
            <p className="text-zinc-300 text-base md:text-[17px] leading-relaxed mb-6 max-w-xl font-normal drop-shadow-md">
              We design premium digital products that help ambitious businesses grow faster, convert better, and stand out in competitive markets.
            </p>

            {/* Service Chips — Interactive */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-xl">
              {["Web Design", "Development", "Branding", "SEO", "AI Automation"].map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-300 bg-white/[0.03] border border-white/[0.06] cursor-pointer transition-all duration-200 hover:bg-white/[0.08] hover:border-cyan-500/30 hover:text-white"
                >
                  ✓ {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-4">
              <button
                onClick={handleStartProject}
                className="btn-primary py-4 px-8 text-white font-bold flex items-center justify-center gap-2 group shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-200 rounded-xl"
              >
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>

              <Link
                to="/case-studies"
                className="py-4 px-8 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.05] text-zinc-300 hover:text-white font-semibold text-center transition-all duration-200 backdrop-blur-sm"
              >
                See Live Work →
              </Link>
            </div>

            {/* Friction Ticks */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-zinc-500 font-medium mb-8">
              <span>✓ Free 30-Min Strategy Session</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Response under 24h</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ No Obligation</span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-zinc-400 pt-6 border-t border-white/5 w-full max-w-xl">
              <span className="flex items-center gap-1.5">⚡ Lightning Fast</span>
              <span className="flex items-center gap-1.5">🔒 Secure</span>
              <span className="flex items-center gap-1.5">📱 Mobile First</span>
              <span className="flex items-center gap-1.5">📈 SEO Optimized</span>
              <span className="flex items-center gap-1.5">🤖 AI Powered</span>
            </div>

          </div>

          {/* ── Right Column: Digital Growth Dashboard (Hidden on Mobile) ── */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center z-20 w-full animate-in fade-in slide-in-from-right-8 duration-800 delay-200 fill-mode-both">
            <div className="relative w-full max-w-lg transition-transform duration-300 hover:scale-[1.02] hover:-rotate-1 will-change-transform group">
              
              {/* Soft layered background glow */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/20 to-purple-600/20 opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-45" />

              {/* Dashboard Browser Mockup */}
              <div className="relative bg-[#09090b]/95 border border-white/[0.08] backdrop-blur-3xl rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden w-full transition-shadow duration-300 group-hover:shadow-cyan-500/5">
                
                {/* Browser Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-black/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                    <span className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-1 text-[10px] text-zinc-500 w-52 text-center truncate select-none">
                    websbond.com/performance-center
                  </div>
                  <div className="w-8" />
                </div>

                {/* Dashboard Vitals */}
                <div className="p-6 space-y-6">
                  
                  {/* Row 1: Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 space-y-1 hover:border-cyan-500/20 transition-all duration-200">
                      <div className="flex justify-between items-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Performance
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      </div>
                      <div className="text-3xl font-black text-white font-jost tracking-tight">99+</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                        ✓ Core Web Vitals Passed
                      </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 space-y-1 hover:border-purple-500/20 transition-all duration-200">
                      <div className="flex justify-between items-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Technical SEO
                        <Sparkles className="w-3 h-3 text-purple-400" />
                      </div>
                      <div className="text-xl font-bold text-white tracking-tight mt-1">Optimized</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                        ✓ Search Engine Ready
                      </div>
                    </div>
                  </div>

                  {/* SVG growth graph */}
                  <div className="bg-white/[0.01] border border-white/[0.04] rounded-2xl p-5 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Optimization Pipeline</h4>
                        <p className="text-[10px] text-zinc-600">Dynamic scaling validation matrix</p>
                      </div>
                      <span className="px-2.5 py-1 bg-cyan-500/5 text-cyan-400 text-[10px] rounded-full font-bold border border-cyan-500/10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        Live Tracking
                      </span>
                    </div>

                    {/* Chart visual with GPU accelerated dash path animation */}
                    <div className="h-32 w-full flex items-end relative overflow-hidden">
                      <svg className="w-full h-full text-cyan-500/80" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradient-glow-dashboard" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0,90 Q 50,70 100,50 T 200,20 T 300,10 L 300,100 L 0,100 Z"
                          fill="url(#gradient-glow-dashboard)"
                        />
                        <path
                          d="M 0,90 Q 50,70 100,50 T 200,20 T 300,10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          className="animate-flow-dash"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Latency / SSL footer */}
                  <div className="flex justify-between items-center text-[10px] text-zinc-600 border-t border-white/[0.04] pt-4">
                    <span>Server: Cloudflare Edge</span>
                    <span>Latency: 24ms Response</span>
                  </div>

                </div>

              </div>

              {/* Simulated Client Showcase Widget (Clean Generic Labeling) */}
              <div className="absolute -bottom-6 -left-6 bg-[#0f0f15]/95 border border-white/[0.12] backdrop-blur-xl rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-[bounce_6s_infinite] pointer-events-none select-none">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div className="text-left">
                  <p className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Featured Showcase</p>
                  <p className="text-xs text-white font-bold tracking-tight">E-Commerce Platform</p>
                </div>
              </div>

              {/* Floating tech stack tags */}
              <div className="absolute -top-6 -right-6 bg-[#0f0f15]/95 border border-white/[0.12] backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl flex items-center gap-2 animate-[bounce_5s_infinite] pointer-events-none select-none">
                <span className="text-[10px] font-bold text-cyan-400 font-mono">LLM</span>
                <span className="text-xs text-white font-semibold">AI Integrations</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Built With Stack partner logos (Clean Stack Vitals) */}
      <div className="absolute bottom-8 left-0 right-0 z-20 hidden lg:block">
        <div className="container mx-auto px-12">
          <div className="flex items-center gap-6 opacity-30 select-none">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black shrink-0">Technologies We Use:</span>
            <div className="flex gap-8 text-white font-bold text-xs tracking-wider">
              <span>REACT</span>
              <span>NEXT.JS</span>
              <span>TYPESCRIPT</span>
              <span>TAILWIND</span>
              <span>POSTGRESQL</span>
              <span>SUPABASE</span>
              <span>CLOUDFLARE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 select-none pointer-events-none opacity-60">
        <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-medium">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-zinc-600 flex justify-center p-1.5">
          <div className="w-1 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>

    </section>
  );
};
