import { Zap, Target, BarChart3, ShieldCheck, Code2, Sparkles } from "lucide-react";

export const WhyWeDiffer = () => {
  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden select-none border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="cyber-badge mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>The Websbond Edge</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans mb-4 text-slate-900">
            Why Delhi NCR’s Top Brands{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            We don't use generic templates or low-impact tactics. We engineer high-speed digital assets and conversion systems.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Item 1: 100/100 Google PageSpeed (Col 7) */}
          <div className="md:col-span-7 bento-card p-8 bg-gradient-to-br from-indigo-50/40 via-white to-slate-50 border-slate-200 flex flex-col justify-between relative overflow-hidden group shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-indigo-600 font-bold">
                  Engineering Standard
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 font-sans">
                100/100 Google PageSpeed Guarantee
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-lg">
                Slow sites kill sales. Every website we build is engineered on modern React/Vite architecture with sub-second core web vitals, pre-rendered markup, and automated image optimization.
              </p>
            </div>

            {/* Simulated Lighthouse Bar */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs grid grid-cols-4 gap-3 text-center">
              {[
                { label: "Performance", score: "100" },
                { label: "Accessibility", score: "100" },
                { label: "Best Practices", score: "100" },
                { label: "SEO Score", score: "100" },
              ].map((metric) => (
                <div key={metric.label} className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full border-2 border-emerald-600 flex items-center justify-center text-emerald-700 font-extrabold text-sm font-mono mb-1 shadow-xs">
                    {metric.score}
                  </div>
                  <span className="text-[10px] text-slate-600 font-bold">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Item 2: AI-Powered Search Intent (Col 5) */}
          <div className="md:col-span-5 bento-card p-8 bg-gradient-to-br from-blue-50/40 via-white to-slate-50 border-slate-200 flex flex-col justify-between group shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-indigo-600 font-bold">
                  Semantic SEO
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 font-sans">
                Intent-Driven Rank #1 SEO
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We target high-intent transactional search terms rather than useless vanity traffic, driving actual buyers straight into your sales pipeline.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">Keyword Indexation Rate</span>
                <span className="text-indigo-600 font-mono font-bold">98.2% Top 3</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 h-full w-[94%]" />
              </div>
            </div>
          </div>

          {/* Bento Item 3: 100% Attribution & GA4 Telemetry (Col 5) */}
          <div className="md:col-span-5 bento-card p-8 bg-gradient-to-br from-cyan-50/30 via-white to-slate-50 border-slate-200 flex flex-col justify-between group shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-indigo-600 font-bold">
                  100% Transparency
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 font-sans">
                Real-Time GA4 Lead Telemetry
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                No dark social blindspots. Track every click, WhatsApp lead initiation, form fill, and ad conversion through direct live dashboards.
              </p>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full Conversion Tracking Built-In</span>
            </div>
          </div>

          {/* Bento Item 4: Senior Engineering Pods (Col 7) */}
          <div className="md:col-span-7 bento-card p-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 border-slate-200 flex flex-col justify-between group shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-indigo-600 font-bold">
                  Dedicated Pods
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 font-sans">
                Direct Access to Senior Engineers
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-lg">
                Say goodbye to account managers who pass messages around. Work directly with certified growth strategists and full-stack React engineers assigned to your brand.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200 text-center">
              <div>
                <div className="text-xl font-black text-slate-900 font-mono">24/7</div>
                <div className="text-[11px] text-slate-500 font-medium">Dedicated Support</div>
              </div>
              <div>
                <div className="text-xl font-black text-indigo-600 font-mono">&lt; 15m</div>
                <div className="text-[11px] text-slate-500 font-medium">Avg Response Time</div>
              </div>
              <div>
                <div className="text-xl font-black text-slate-900 font-mono">100%</div>
                <div className="text-[11px] text-slate-500 font-medium">In-House Pods</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
