import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, Check, Sparkles, Code2, Search, Megaphone, Cpu, Zap, Headphones, Star, TrendingUp, Shield, MessageCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import a1 from "@/assets/avatar1.webp";
import a2 from "@/assets/avatar2.webp";
import a3 from "@/assets/avatar3.webp";

interface FloatingCardProps {
  title: string;
  icon: React.ReactNode;
  glowColor: string;
  positionClass: string;
}

const FloatingCard = ({ title, icon, glowColor, positionClass }: FloatingCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tX = -((y - rect.height / 2) / 6);
    const tY = (x - rect.width / 2) / 6;
    setTilt({ x: tX, y: tY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
      style={{
        transform: isHovered
          ? `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.08)`
          : `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: isHovered ? "none" : "transform 0.4s ease",
      } as React.CSSProperties}
      className={`absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/95 border border-slate-200 dark:border-white/[0.1] backdrop-blur-xl hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] z-20 select-none ${positionClass} ${glowColor}`}
    >
      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] flex items-center justify-center">{icon}</div>
      <span className="text-xs font-bold text-slate-800 dark:text-white tracking-wide">{title}</span>
    </div>
  );
};

export const Hero = ({ title, subtitle, ctaLabel, ctaHref }: { title?: string; subtitle?: string; ctaLabel?: string; ctaHref?: string; }) => {
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [liveConversions, setLiveConversions] = useState(3840);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveConversions((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSpotlightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const partnerLogos = [
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Meta", logo: "/logos/meta.svg" },
    { name: "Shopify", logo: "/logos/shopify.svg" },
    { name: "WordPress", logo: "/logos/wordpress.svg" },
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Cloudflare", logo: "/logos/cloudflare.svg" },
    { name: "Stripe", logo: "/logos/stripe.svg" },
    { name: "HubSpot", logo: "/logos/hubspot.svg" },
  ];

  const trustBadges = [
    { label: "100% Code Handoff", dot: "bg-emerald-400" },
    { label: "Direct Developer Chat", dot: "bg-cyan-400" },
    { label: "PageSpeed Guarantee", dot: "bg-indigo-400" },
    { label: "0% Upfront Prototype", dot: "bg-purple-400" },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleContainerMouseMove}
      className="relative overflow-hidden pt-6 pb-12 md:pt-8 md:pb-20 bg-background text-foreground transition-colors duration-300"
    >


      {/* Background layers */}
      <div className="noise-overlay pointer-events-none opacity-20 dark:opacity-35" />
      <div className="absolute inset-0 grid-mesh opacity-30 dark:opacity-20 pointer-events-none" />

      {/* Aurora orbs */}
      <div className="absolute -top-48 left-1/4 w-[550px] h-[550px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[130px] pointer-events-none animate-aurora-1" />
      <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] rounded-full bg-purple-500/5 dark:bg-purple-500/8 blur-[150px] pointer-events-none animate-aurora-2" />
      <div className="absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-cyan-500/4 dark:bg-cyan-500/6 blur-[110px] pointer-events-none animate-aurora-3" />

      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: `radial-gradient(700px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(99,102,241,0.06), transparent 70%)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-10 items-center">

          {/* ═══ LEFT COLUMN (Text Left Aligned) ═══ */}
          <div className="flex flex-col gap-6 text-left items-start">
            
            {/* Badge */}
            <div className="hero-fu inline-flex items-center gap-2 bg-indigo-500/10 border border-purple-500/20 text-indigo-600 dark:text-white font-semibold text-[10px] sm:text-xs uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.05)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400 animate-spin-slow" />
              Elite Digital Solutions — Engineered For Global Growth
            </div>

            {/* H1 */}
            <div className="hero-fu-1">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.04em] text-slate-900 dark:text-white">
                {title ? title : "We Build Websites"}{" "}
                {subtitle ? (
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent glow-txt block">
                    {subtitle}
                  </span>
                ) : (
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent glow-txt block">
                    That Grow Businesses.
                  </span>
                )}
              </h1>
            </div>

            {/* Subtext */}
            <p className="hero-fu-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Delhi NCR & Haryana's premier digital engineering agency — crafting custom React and Next.js platforms, 100/100 PageSpeed optimization, organic search engine systems, and direct senior developer contact. Ready to build?
            </p>

            {/* Stars + social proof */}
            <div className="hero-fu-2 flex items-center gap-3 flex-wrap">
              <div className="flex gap-0.5 text-amber-500 bg-amber-500/5 border border-amber-500/10 rounded-full px-3 py-1.5 items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs font-bold text-slate-800 dark:text-white ml-2">5.0/5</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-bold tracking-wider uppercase">Transparent Engineering Guarantee</span>
            </div>

            {/* Trust badge pills */}
            <div className="hero-fu-3 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${b.dot} animate-pulse shrink-0`} />
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">{b.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-fu-4 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.2)] dark:shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_45px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919306623619?text=Namaste!%20I%20am%20interested%20in%20a%20free%20website%20consultation%20with%20Websbond."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-300 text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-3 bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.1] hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-200/50 dark:hover:bg-white/[0.06] text-slate-700 dark:text-white font-bold px-6 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md text-sm"
              >
                <span className="w-7 h-7 rounded-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 grid place-items-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-indigo-600 dark:text-white" />
                </span>
                See Our Work
              </Link>
            </div>

            {/* Guarantees row */}
            <div className="hero-fu-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 dark:border-white/[0.06] pt-5 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
              {["100% Code Ownership", "Direct WhatsApp Line", "Lighthouse 100/100", "NCR Engineering Team"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-emerald-500 dark:text-emerald-400" strokeWidth={3.5} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Client avatars */}
            <div className="hero-fu-5 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src={a1} alt="Happy client" width={36} height={36} decoding="async" fetchPriority="low" className="w-9 h-9 rounded-full ring-2 ring-slate-100 dark:ring-slate-950 object-cover" />
                <img src={a2} alt="Happy client" width={36} height={36} decoding="async" fetchPriority="low" className="w-9 h-9 rounded-full ring-2 ring-slate-100 dark:ring-slate-950 object-cover" />
                <img src={a3} alt="Happy client" width={36} height={36} decoding="async" fetchPriority="low" className="w-9 h-9 rounded-full ring-2 ring-slate-100 dark:ring-slate-950 object-cover" />
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 ring-2 ring-slate-100 dark:ring-slate-950 flex items-center justify-center text-[10px] font-bold text-white">100%</div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 text-left max-w-[200px]">
                <strong className="text-slate-900 dark:text-white font-bold">Delhi NCR & Haryana expert developers</strong> working directly with your business.
              </div>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN (Interactive Quote Form) ═══ */}
          <div className="relative flex items-center justify-center pt-8 lg:pt-0 hero-fu-6" id="onboarding-form">
            <div className="relative w-full max-w-[440px] z-20">
              {/* Decorative glows */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-amber-500 to-indigo-600 opacity-20 blur-lg" />
              
              {/* Form Card */}
              <div className="relative w-full glass-panel border-border dark:border-white/[0.08] rounded-[2rem] p-6 sm:p-8 shadow-card backdrop-blur-xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    <Sparkles className="w-3 h-3 animate-pulse" /> Free Consultation
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
                    Request A Quote
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                    Speak directly with lead developers & designers.
                  </p>
                </div>

                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
                    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
                    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
                    const service = (form.elements.namedItem("service") as HTMLSelectElement)?.value;
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

                    if (!name || !email || !phone || !service) {
                      toast({ title: "Fields required", description: "Please fill in all mandatory fields.", variant: "destructive" });
                      return;
                    }

                    setIsSubmitting(true);
                    try {
                      const response = await fetch(getApiUrl("/api/contact"), {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name,
                          email,
                          phone,
                          subject: `Quote Request: ${service}`,
                          message: message || `Interested in ${service} details.`
                        }),
                      });

                      if (!response.ok) throw new Error("API failed");
                      toast({ title: "Request Received!", description: "Our lead developers will reach out shortly via WhatsApp." });
                      form.reset();
                    } catch {
                      toast({ 
                        title: "Submission failed", 
                        description: "Could not submit quote. Please contact +91 9306623619 directly on WhatsApp.", 
                        variant: "destructive" 
                      });
                    }
                    setIsSubmitting(false);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="e.g. Amit Kumar"
                      className="w-full bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-amber-500 dark:focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="e.g. 9306623619"
                        className="w-full bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-amber-500 dark:focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="e.g. amit@company.com"
                        className="w-full bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-amber-500 dark:focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">Select Service *</label>
                    <select 
                      name="service" 
                      required 
                      className="w-full bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:border-amber-500 dark:focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans animate-fade-in"
                    >
                      <option value="" disabled className="text-slate-400">Choose a solution...</option>
                      <option value="Website Development" className="bg-background text-foreground">Website Development</option>
                      <option value="SEO Maps Optimization" className="bg-background text-foreground">Local SEO & Google Maps</option>
                      <option value="Paid Ads Lead Gen" className="bg-background text-foreground">Paid Google/Meta Ad Funnels</option>
                      <option value="Healthcare Marketing" className="bg-background text-foreground">Healthcare & Doctor Marketing</option>
                      <option value="Complete Growth Unification" className="bg-background text-foreground">Complete Digital Marketing Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">Project Brief / Message</label>
                    <textarea 
                      name="message" 
                      rows={2} 
                      placeholder="e.g. Tell us about your goals, timing, or link to your current website..."
                      className="w-full bg-slate-100/50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-amber-500 dark:focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold uppercase tracking-widest text-xs py-3.5 rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <MessageCircle className="w-3.5 h-3.5" />}
                    {isSubmitting ? "Submitting Request..." : "Send Message!"}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* ── Partner Logos Bar ── */}
        <div className="mt-14 border-t border-slate-200 dark:border-white/[0.06] pt-8">
          <p className="text-center text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-500 font-mono mb-7">
            Ecosystem integrations & trusted partner channels
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-35 dark:opacity-30 hover:opacity-70 transition-opacity duration-500">
            {partnerLogos.map((p) => (
              <div key={p.name}>
                <img src={p.logo} alt={p.name} width={80} height={20} className="h-4 sm:h-5 opacity-70 dark:invert dark:filter dark:brightness-200 pointer-events-none select-none max-w-[80px] object-contain" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
