import { useState, useEffect } from "react";
import { ArrowRight, Code, Search, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tag: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Build Website",
    description: "Premium, ultra-fast React website designed for maximum user engagement and trust.",
    tag: "High Conversion",
    color: "bg-amber-500 text-slate-950 font-bold",
    icon: <Code className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "Rank on Google",
    description: "Advanced keyword mapping and technical SEO alignment to dominate search rankings.",
    tag: "SEO Dominance",
    color: "bg-amber-500 text-slate-950 font-bold",
    icon: <Search className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Get More Leads",
    description: "Optimized landing pages and precise pixel tracking to capture high-intent inquiries.",
    tag: "Lead Gen",
    color: "bg-amber-500 text-slate-950 font-bold",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    number: "04",
    title: "Increase Sales",
    description: "Connect payment gateways, WhatsApp automation, and smooth checkout pipelines.",
    tag: "ROI Focus",
    color: "bg-amber-500 text-slate-950 font-bold",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    number: "05",
    title: "Scale Business",
    description: "Ongoing optimizations, automated campaigns, and 24/7 priority support.",
    tag: "Automation",
    color: "bg-amber-500 text-slate-950 font-bold",
    icon: <Zap className="w-5 h-5" />,
  },
];

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-slate-50 dark:bg-slate-950/40 py-24 md:py-32 border-y border-slate-200/80 dark:border-white/[0.06] relative overflow-hidden">
      {/* Light background grids/mesh for premium feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(242,161,4,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,161,4,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 dark:border-amber-500/10 text-amber-500 dark:text-amber-300 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Growth Path
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            How We Grow Your Business <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Step-by-Step.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We don't just deliver a file and vanish. We provide a complete pipeline connecting site development to automated marketing and scalable sales operations.
          </p>
        </div>

        {/* Process Flow container */}
        <div className="relative">
          {/* SVG Connector Line - Hidden on Mobile */}
          <div className="hidden lg:block absolute top-[30px] left-[10%] right-[10%] h-[3px] bg-slate-200 dark:bg-slate-800 z-0">
            {/* Animated filling progress indicator */}
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-1000 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Grid Layout of Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div 
                  key={step.number}
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Circle Node */}
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 relative ${
                      isActive 
                        ? `${step.color} border-amber-500/30 scale-110 shadow-lg shadow-amber-500/20` 
                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 group-hover:border-slate-300 dark:group-hover:border-slate-700"
                    }`}
                  >
                    {step.icon}
                    {/* Ring animation */}
                    {isActive && (
                      <span className="absolute inset-[-8px] border-2 border-amber-500/20 rounded-full animate-ping" />
                    )}
                  </div>

                  {/* Step Label / Badge */}
                  <span className={`mt-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-all ${
                    isActive 
                      ? "bg-amber-500/10 text-amber-500" 
                      : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400"
                  }`}>
                    {step.tag}
                  </span>

                  {/* Title & Description */}
                  <div className="text-center mt-3 max-w-[240px] px-2">
                    <h3 className={`font-display font-bold text-lg transition-colors ${
                      isActive ? "text-amber-500" : "text-slate-800 dark:text-slate-200"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Flow Arrow (only visible on mobile/tablet between stacked steps) */}
                  {idx < steps.length - 1 && (
                    <div className="md:hidden mt-6 mb-2 text-slate-300 animate-bounce flex justify-center">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action connecting to planner */}
        <div className="text-center mt-16">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Ready to scale your business?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/25"
          >
            Start Your Growth Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
