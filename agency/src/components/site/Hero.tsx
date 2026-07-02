import { ArrowRight, TrendingUp, Zap, Shield, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const handleStartProject = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden hero-premium-bg select-none">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Grid mesh overlay */}
      <div className="absolute inset-0 grid-mesh opacity-40 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 relative z-10 pt-36 lg:pt-44 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Left Column ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left hero-fu">
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5 text-[11px] text-zinc-400 font-semibold mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Delhi NCR's Premium Digital Agency
            </div>

            <h1 className="font-extrabold text-white mb-5 leading-[1.05] tracking-[-0.04em] font-jost"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}>
              We Build{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Growth
              </span>
              {" "}Machines
            </h1>

            <p className="text-zinc-400 text-base md:text-[17px] leading-relaxed mb-8 max-w-xl font-normal">
              From high-performance websites to SEO that actually ranks — we engineer digital products that drive revenue, not just likes.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleStartProject}
                className="btn-primary py-4 px-8 text-white font-bold flex items-center justify-center gap-2 group shadow-xl shadow-indigo-500/15 hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 rounded-xl text-sm"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <Link
                to="/case-studies"
                className="py-4 px-8 rounded-xl border border-white/8 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 hover:text-white font-semibold text-center transition-all duration-200 backdrop-blur-sm text-sm"
              >
                View Our Work →
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-zinc-500 w-full max-w-xl">
              {[
                { icon: Zap, label: "100/100 PageSpeed" },
                { icon: Shield, label: "SEO Guaranteed" },
                { icon: TrendingUp, label: "ROI Focused" },
                { icon: BarChart3, label: "Data Driven" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-indigo-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right Column: Clean Stats Card ── */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center hero-fu-1">
            <div className="relative w-full max-w-[400px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-[2.5rem] blur-2xl" />

              <div className="relative bg-[#09090b]/90 border border-white/[0.06] backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.04]">
                  <span className="text-xs text-zinc-500 font-medium">Performance Overview</span>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                </div>

                <div className="p-6 space-y-5">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "PageSpeed", value: "98/100", color: "text-emerald-400" },
                      { label: "SEO Score", value: "96/100", color: "text-emerald-400" },
                      { label: "Load Time", value: "0.8s", color: "text-emerald-400" },
                      { label: "Uptime", value: "99.9%", color: "text-emerald-400" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4">
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mb-1">{label}</div>
                        <div className={`text-2xl font-black font-jost tracking-tight ${color}`}>{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Traffic Growth</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">+340%</span>
                    </div>
                    <div className="h-20 w-full">
                      <svg className="w-full h-full" viewBox="0 0 280 60" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,50 Q35,45 70,35 T140,20 T210,12 T280,8 L280,60 L0,60 Z"
                          fill="url(#heroGradient)"
                        />
                        <path
                          d="M0,50 Q35,45 70,35 T140,20 T210,12 T280,8"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-zinc-600 pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live Campaigns Active
                    </span>
                    <span>Avg. CTR: 4.8%</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#0f0f15]/95 border border-white/[0.08] rounded-xl px-4 py-3 shadow-2xl flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Featured</p>
                  <p className="text-[11px] text-white font-semibold">E-Commerce Platform</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
