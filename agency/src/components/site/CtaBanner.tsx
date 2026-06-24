import { ArrowRight, Check, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

type Trust = { label: string; sub?: string };

export const CtaBanner = ({
  title,
  highlight,
  subtitle,
  trustItems = [
    { label: "No Contract", sub: "Work on your terms" },
    { label: "No Hidden Charges", sub: "Transparent pricing" },
    { label: "Cancel Anytime", sub: "Complete flexibility" },
  ],
  ctaLabel = "Free Consultation",
  ctaTo = "/contact",
}: {
  title: string;
  highlight?: string;
  subtitle?: string;
  trustItems?: Trust[];
  ctaLabel?: string;
  ctaTo?: string;
}) => (
  <section className="container py-6 lg:py-8">
    <div className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50 to-indigo-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950/20 border border-slate-200/80 dark:border-white/[0.06] text-slate-800 dark:text-slate-200 shadow-md shadow-indigo-600/5 overflow-hidden px-6 md:px-10 py-7 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 transition-all hover:shadow-lg">
      <div className="absolute -top-16 -left-8 w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      
      {/* Title & Icon */}
      <div className="flex items-center gap-4 flex-1 min-w-0 w-full lg:w-auto">
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100/55 dark:border-indigo-500/20 grid place-items-center shrink-0">
          <Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h3 className="font-display font-extrabold text-lg sm:text-xl lg:text-2xl text-slate-900 dark:text-white leading-snug tracking-tight">
            {title} {highlight && <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{highlight}</span>}
          </h3>
          {subtitle && <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed font-medium">{subtitle}</p>}
        </div>
      </div>
      
      {/* Trust Items */}
      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
        {trustItems.map((t) => (
          <div key={t.label} className="flex items-center gap-2 text-left">
            <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" strokeWidth={3} />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">{t.label}</div>
              {t.sub && <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">{t.sub}</div>}
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <Link 
        to={ctaTo} 
        className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/10 text-sm whitespace-nowrap w-full lg:w-auto justify-center"
      >
        {ctaLabel} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

