import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Monitor } from "lucide-react";
import heroBg from "@/assets/bg_home_1782999734318.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  const handleStartProject = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen lg:max-h-[1080px] w-full flex items-center justify-center overflow-hidden pt-28 pb-16 hero-image-overlay"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Animated Aurora Mesh Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.15] bg-gradient-to-tr from-cyan-500 to-indigo-500 blur-[120px] pointer-events-none animate-[pulse_8s_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full opacity-[0.15] bg-gradient-to-bl from-purple-500 to-pink-500 blur-[100px] pointer-events-none animate-[pulse_10s_infinite]" />

      <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-12 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* ── Left Column: Premium Pitch ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20 py-2 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            {/* Trusted Badge — frosted glass pill */}
            <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] shadow-lg rounded-full px-4 py-2 text-[12px] text-zinc-300 font-medium mb-6 select-none backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>⭐ Trusted by 200+ Businesses</span>
            </div>

            {/* Heading — massive, modern layout, balanced tracking */}
            <h1
              className="font-extrabold text-white mb-6 leading-[1.05] tracking-[-0.04em] text-left drop-shadow-xl font-jost"
              style={{ fontSize: "clamp(44px, 5.8vw, 80px)" }}
            >
              Build Digital <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                Experiences
              </span> <br />
              That Drive Revenue.
            </h1>

            {/* Subheading / Value Prop */}
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-normal drop-shadow-md">
              Premium Websites • SEO • Branding • AI Automation. We build high-converting digital products designed to accelerate visionaries and grow revenue.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleStartProject}
                className="btn-primary py-4 px-8 text-white font-bold flex items-center justify-center gap-2 group shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 rounded-xl"
              >
                Start Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/case-studies"
                className="py-4 px-8 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-white font-semibold text-center transition-all duration-300 backdrop-blur-sm"
              >
                View Portfolio
              </Link>
            </div>

            {/* Trust Logos (Subtle monochrome client brands) */}
            <div className="pt-4 border-t border-white/5 w-full">
              <p className="text-[11px] text-zinc-500 uppercase tracking-widest font-semibold mb-3">Enterprise Stack Partners</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center opacity-40 grayscale contrast-200">
                <span className="text-white font-bold text-sm tracking-tight">GOOGLE</span>
                <span className="text-white font-bold text-sm tracking-tight">AWS</span>
                <span className="text-white font-bold text-sm tracking-tight">REACT</span>
                <span className="text-white font-bold text-sm tracking-tight">STRIPE</span>
                <span className="text-white font-bold text-sm tracking-tight">NEXT.JS</span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Premium Mockup Dashboard ── */}
          <div className="lg:col-span-5 flex items-center justify-center z-20 w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 fill-mode-both">
            <div className="relative w-full max-w-lg">
              {/* Decorative back glow for mockup */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-xl" />

              {/* Mockup Container */}
              <div className="relative bg-[#0d0d12]/90 border border-white/[0.08] backdrop-blur-3xl rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden w-full">
                
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-black/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-4 py-1 text-[10px] text-zinc-500 w-48 text-center truncate">
                    websbond.com/growth-console
                  </div>
                  <div className="w-8" />
                </div>

                {/* Dashboard Inner Content */}
                <div className="p-6 space-y-6">
                  
                  {/* Row 1: Quick Metric Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 space-y-1 hover:border-cyan-500/30 transition-colors">
                      <div className="flex justify-between items-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        SEO Score
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                      </div>
                      <div className="text-2xl font-black text-white font-jost">99/100</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                        <TrendingUp className="w-3 h-3" /> Core Web Vitals Good
                      </div>
                    </div>

                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 space-y-1 hover:border-purple-500/30 transition-colors">
                      <div className="flex justify-between items-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Conversion
                        <Monitor className="w-3 h-3 text-purple-400" />
                      </div>
                      <div className="text-2xl font-black text-white font-jost">+342%</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                        <CheckCircle2 className="w-3 h-3" /> Leads Maximized
                      </div>
                    </div>
                  </div>

                  {/* Main SVG Graph */}
                  <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-5 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Revenue Accel Pipeline</h4>
                        <p className="text-[10px] text-zinc-600">Real-time optimization matrix</p>
                      </div>
                      <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] rounded-full font-bold border border-cyan-500/20">
                        Live Tracking
                      </span>
                    </div>

                    {/* Chart Visual */}
                    <div className="h-32 w-full flex items-end">
                      <svg className="w-full h-full text-cyan-500" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradient-glow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path
                          d="M 0,90 Q 50,70 100,50 T 200,20 T 300,10 L 300,100 L 0,100 Z"
                          fill="url(#gradient-glow)"
                        />
                        {/* Line */}
                        <path
                          d="M 0,90 Q 50,70 100,50 T 200,20 T 300,10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          className="drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)]"
                        />
                        {/* Pulsing endpoint dot */}
                        <circle cx="300" cy="10" r="4" className="fill-cyan-400 animate-ping" />
                        <circle cx="300" cy="10" r="3.5" className="fill-cyan-300" />
                      </svg>
                    </div>
                  </div>

                  {/* Tiny floating status list */}
                  <div className="flex justify-between items-center text-[10px] text-zinc-500 border-t border-white/[0.04] pt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>Security: SSL Encrypted</span>
                    </div>
                    <span>Latency: 28ms</span>
                  </div>

                </div>

              </div>

              {/* Floating Widget 1 */}
              <div className="absolute -top-6 -right-6 bg-white/[0.06] border border-white/[0.12] backdrop-blur-xl rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-[bounce_4s_infinite] pointer-events-none">
                <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                  AI
                </span>
                <div className="text-left">
                  <p className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Automation</p>
                  <p className="text-[11px] text-white font-semibold">CRM Sync Complete</p>
                </div>
              </div>

              {/* Floating Widget 2 */}
              <div className="absolute -bottom-6 -left-6 bg-white/[0.06] border border-white/[0.12] backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl flex items-center gap-3 animate-[bounce_6s_infinite] pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="text-left">
                  <p className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Page Speed</p>
                  <p className="text-[11px] text-white font-bold">100/100 Score</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
