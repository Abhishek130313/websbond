import { Phone, ArrowRight } from "lucide-react";

export const CtaBanner = () => (
  <section className="relative overflow-hidden py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white select-none">
    {/* Soft background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: phone icon + call headline */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0 backdrop-blur-md shadow-md">
            <Phone className="w-7 h-7" />
          </div>
          <div>
            <p className="text-purple-200 text-xs font-bold uppercase tracking-wider mb-1">Have Questions? Talk to Our Lead Engineer</p>
            <p className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight">
              Call Direct: +91 9306623619
            </p>
          </div>
        </div>

        {/* Right: CTA button */}
        <a
          href="tel:+919306623619"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-purple-950 font-extrabold text-sm hover:bg-slate-100 transition-all shadow-xl shadow-black/20 shrink-0"
        >
          <span>Call Us Now</span>
          <ArrowRight className="w-4 h-4 text-purple-950" />
        </a>
      </div>
    </div>
  </section>
);
