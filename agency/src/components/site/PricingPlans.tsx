import { Check, Sparkles, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  badge?: string;
  accentClass: string;
  buttonClass: string;
}

const plans: PricingTier[] = [
  {
    name: "Starter Package",
    price: "₹7,999",
    period: "one-time",
    description: "Ideal for local service profiles, personal portfolios, and single-service landing pages looking to establish a professional web presence.",
    features: [
      "1 Custom Handcrafted React Page",
      "100/100 Google PageSpeed Core",
      "Basic SEO Setup & Google Indexing",
      "WhatsApp Direct Chat Integration",
      "Free Domain & Hosting Setup Config",
      "3 Months Human Support & Uptime Checks",
    ],
    popular: false,
    ctaText: "Get Starter Plan",
    accentClass: "border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.015] hover:border-slate-300 dark:hover:border-white/10",
    buttonClass: "bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-800 dark:text-white",
  },
  {
    name: "Growth Package",
    price: "₹14,999",
    period: "one-time",
    description: "Our most popular package. Designed for growing startups, local agencies, and businesses looking to generate recurring online inquiries.",
    features: [
      "Up to 5 Pages (React / Vite Build)",
      "Advanced Local SEO Indy & Regional Keywords",
      "Interactive High-Conversion Lead Forms",
      "Google Business Profile Sync & Maps Setup",
      "Auto CRM Integration & Email Alerts",
      "6 Months Support + Free Layout Adjustments",
    ],
    popular: true,
    ctaText: "Get Growth Plan",
    badge: "Most Popular Choice",
    accentClass: "border-amber-500 bg-amber-950/20 shadow-[0_20px_50px_-20px_rgba(242,161,4,0.25)]",
    buttonClass: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-[0_0_20px_rgba(242,161,4,0.3)]",
  },
  {
    name: "Premium Package",
    price: "₹29,999",
    period: "one-time",
    description: "The ultimate package for full e-commerce operations, custom web platforms, and complex business portals seeking high conversion.",
    features: [
      "Custom Multi-Vendor Store or Web Portal",
      "Complete Cart & Secure Payment Gateway Setup",
      "Dynamic 3D SVG Graphics & Custom Animations",
      "Automated WhatsApp Triggers & SMS API Sync",
      "Full PPC Ads Pixels & Analytics Tracking",
      "12 Months VIP Priority Developer Call Support",
    ],
    popular: false,
    ctaText: "Get Premium Plan",
    accentClass: "border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.015] hover:border-slate-300 dark:hover:border-white/10",
    buttonClass: "bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-800 dark:text-white",
  },
];

export const PricingPlans = () => {
  return (
    <section className="container py-24 md:py-32 relative mx-auto px-4">
      {/* Glow aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[300px] rounded-full bg-gradient-to-r from-amber-500/5 to-orange-500/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-300 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Pricing Options
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
          Clear, honest pricing. <br />
          <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 dark:from-amber-400 dark:via-yellow-400 dark:to-amber-500 bg-clip-text text-transparent">
            No hidden developer fees.
          </span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          All packages include absolute ownership, source code handoff, and direct developer support. Select a plan to start your project.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {plans.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 backdrop-blur-md ${tier.accentClass}`}
          >
            {/* Popular Badge */}
            {tier.popular && tier.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                {tier.badge}
              </div>
            )}

            <div>
              {/* Tier Name & Description */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed min-h-[50px]">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-slate-200/60 dark:border-white/[0.06]">
                <span className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">{tier.price}</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">/ {tier.period}</span>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500">Includes features:</h4>
                <ul className="space-y-3.5">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className={`w-full py-4 rounded-2xl text-xs font-bold uppercase tracking-widest text-center transition-all duration-300 ${tier.buttonClass}`}
            >
              {tier.ctaText}
            </Link>
          </div>
        ))}
      </div>

      {/* Support text below pricing */}
      <div className="text-center mt-12 text-xs text-slate-500 flex items-center justify-center gap-1.5">
        <HelpCircle className="w-4 h-4 text-slate-600" />
        <span>Have custom enterprise requirements? Contact us at <a href="mailto:websbond@websbond.com" className="text-slate-400 hover:text-white transition-colors">websbond@websbond.com</a> or Call/WhatsApp +91 9306623619.</span>
      </div>
    </section>
  );
};
