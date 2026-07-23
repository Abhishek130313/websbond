import { useState } from "react";
import { Calculator, TrendingUp, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const RoiCalculator = () => {
  const [monthlyBudget, setMonthlyBudget] = useState<number>(50000);
  const [selectedDomain, setSelectedDomain] = useState<string>("seo_web");

  // Calculations based on benchmark averages
  const domainMultiplier = selectedDomain === "seo_web" ? 4.5 : selectedDomain === "ppc" ? 3.8 : 6.2;
  const estimatedRevenue = Math.round(monthlyBudget * domainMultiplier);
  const estimatedLeads = Math.round((monthlyBudget / 1000) * (selectedDomain === "full" ? 8.5 : 5.2));
  const estimatedTraffic = Math.round((monthlyBudget / 10) * 1.8);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#F8F9FE] text-slate-900 select-none border-t border-slate-200">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="cyber-badge mb-4">
            <Calculator className="w-3.5 h-3.5 text-purple-600" />
            <span>Interactive Revenue Estimator</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 font-jost text-slate-900">
            Calculate Your Business{" "}
            <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Growth Potential
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            See how data-backed digital marketing and conversion engineering can multiply your return on investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-6 bento-card p-8 flex flex-col justify-between border-slate-200 shadow-lg shadow-purple-900/5">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-0">Select Service Strategy</h3>
                  <p className="text-xs text-slate-500 mb-0">Choose your primary focus area</p>
                </div>
              </div>

              {/* Strategy Selector Tabs */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { id: "seo_web", label: "SEO & Website", icon: TrendingUp },
                  { id: "ppc", label: "Google / Meta Ads", icon: Zap },
                  { id: "full", label: "Full Suite 10X", icon: Sparkles },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = selectedDomain === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedDomain(item.id)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm font-bold transition-all duration-200 flex flex-col items-center gap-2 ${
                        active
                          ? "bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-600/20"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? "text-white" : "text-slate-500"}`} />
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Budget Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-slate-700">
                    Monthly Marketing Budget
                  </label>
                  <span className="text-xl font-extrabold text-purple-700 font-mono">
                    {formatCurrency(monthlyBudget)}
                  </span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={500000}
                  step={5000}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono font-medium">
                  <span>₹25,000</span>
                  <span>₹2,50,000</span>
                  <span>₹5,00,000</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center gap-3 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Estimates based on Websbond historical campaign benchmark data across clients in Delhi NCR.</span>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bento-card p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 text-white border-purple-800 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-purple-950/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs uppercase font-mono tracking-widest text-purple-200 font-bold">
                  Estimated Monthly Impact
                </span>
                <span className="bg-white/15 text-white border border-white/20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  ⚡ ~{domainMultiplier}x Target Multiplier
                </span>
              </div>

              {/* Main Revenue Projection */}
              <div className="mb-8">
                <div className="text-xs text-purple-200 font-medium mb-1">Projected Monthly Revenue Potential</div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                  {formatCurrency(estimatedRevenue)}
                </div>
                <div className="text-xs text-emerald-300 font-bold mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Estimated Net Gain: {formatCurrency(estimatedRevenue - monthlyBudget)}
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <div className="text-xs text-purple-200 mb-1">High-Intent Leads / Month</div>
                  <div className="text-2xl font-bold text-white font-mono">{estimatedLeads}+</div>
                  <div className="text-[11px] text-purple-300 mt-0.5">Verified Inquiries</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <div className="text-xs text-purple-200 mb-1">Target Traffic / Month</div>
                  <div className="text-2xl font-bold text-white font-mono">{estimatedTraffic.toLocaleString()}+</div>
                  <div className="text-[11px] text-purple-300 mt-0.5">Qualified Visitors</div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-purple-200 font-medium">Ready to claim your strategy roadmap?</div>
                <div className="text-sm font-bold text-white">100% Free Audit & Growth Plan</div>
              </div>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-purple-900 font-extrabold text-sm transition-all shadow-lg hover:bg-slate-100"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-purple-900" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
