import { ArrowRight, Check, Sparkles, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const PromoBanner = () => (
  <section className="container py-12 md:py-16">
    <div className="relative rounded-3xl bg-slate-950 border border-white/10 text-white overflow-hidden p-8 sm:p-10 lg:p-16 grid md:grid-cols-[1.1fr_0.9fr] items-center gap-10 shadow-2xl">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 80% 50%, hsl(263 90% 64% / 0.25) 0%, transparent 60%)",
      }} />
      <div className="absolute top-0 left-0 w-full h-full grid-mesh opacity-10 pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" /> High-Value Pilot Program
        </div>
        <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Free website development <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            for our first 3 clients.
          </span>
        </h3>
        <p className="mt-5 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
          Absolutely free custom design and website development + 1 month support. You only cover the domain and hosting setup cost (approx. ₹1,000). Zero risk, no hidden charges.
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 font-semibold px-6 py-3.5 rounded-xl transition-all"
          >
            Apply for Pilot Slot <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
          >
            Pricing Packages
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
          {["No Locked Contracts", "Direct Developer Access", "Cancel Anytime"].map((t) => (
            <div key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-purple-400" /> {t}</div>
          ))}
        </div>
      </div>

      {/* Program slots timeline widget */}
      <div className="relative z-10 bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-inner flex flex-col gap-6">
        <h4 className="font-display font-bold text-lg text-white flex items-center justify-between">
          <span>Program Slot Tracker</span>
          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full animate-pulse font-sans font-semibold">1 Spot Remaining</span>
        </h4>

        <div className="space-y-4">
          {/* Slot 1 */}
          <div className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.04] rounded-2xl p-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 grid place-items-center font-bold text-xs shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Slot 1: Filled (Hospitality)</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Hotel luxury booking platform, Kanpur</div>
            </div>
          </div>

          {/* Slot 2 */}
          <div className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.04] rounded-2xl p-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 grid place-items-center font-bold text-xs shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Slot 2: Filled (Retail/Ecom)</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Groceries e-commerce platform, Indore</div>
            </div>
          </div>

          {/* Slot 3 */}
          <div className="flex items-center gap-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4 animate-pulse">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 grid place-items-center font-bold text-xs shrink-0 animate-bounce">
              3
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-white flex items-center justify-between">
                <span>Slot 3: Available</span>
                <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded uppercase font-semibold">Active</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Slot open for your custom business website</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

