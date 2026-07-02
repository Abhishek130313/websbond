import { ArrowRight, Star, TrendingUp, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const PARTNERS = [
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 0 0 0 24c0 3.77.87 7.35 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect x="4" y="4" width="18" height="18" rx="2" fill="#F25022" />
        <rect x="26" y="4" width="18" height="18" rx="2" fill="#7FBA00" />
        <rect x="4" y="26" width="18" height="18" rx="2" fill="#00A4EF" />
        <rect x="26" y="26" width="18" height="18" rx="2" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: "Meta",
    svg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <circle cx="24" cy="24" r="22" fill="#1877F2" />
        <path fill="#fff" d="M24 8c-8.84 0-16 7.16-16 16 0 7.55 5.2 13.86 12.2 15.63v-11.06h-3.67V24h3.67v-3.19c0-3.63 2.16-5.63 5.47-5.63 1.58 0 3.24.28 3.24.28v3.57h-1.83c-1.8 0-2.36 1.12-2.36 2.26V24h4.02l-.64 4.57H27.3v11.06C42.8 45.86 48 39.55 48 32c0-8.84-7.16-16-16-16h-4-4z" />
      </svg>
    ),
  },
  {
    name: "Clutch",
    svg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <rect x="2" y="2" width="44" height="44" rx="10" fill="#FF3B30" />
        <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800" fontFamily="sans-serif">C</text>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <rect x="2" y="2" width="44" height="44" rx="10" fill="#FF7A59" />
        <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="700" fontFamily="sans-serif">H</text>
      </svg>
    ),
  },
  {
    name: "Semrush",
    svg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9">
        <rect x="2" y="2" width="44" height="44" rx="10" fill="#0F2B46" />
        <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700" fontFamily="sans-serif">SR</text>
      </svg>
    ),
  },
];

const CERT_GRID = [
  {
    name: "Google Partner",
    icon: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 48 48" className="w-7 h-7">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
          <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 0 0 0 24c0 3.77.87 7.35 2.56 10.78l7.97-6.19z" />
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        </svg>
        <span className="bg-[#4285F4]/10 text-[#4285F4] text-[10px] font-bold px-2 py-0.5 rounded-full">Partner</span>
      </div>
    ),
    desc: "Google Ads certified partner delivering high-ROI campaigns.",
  },
  {
    name: "Microsoft Certified",
    icon: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 48 48" className="w-6 h-6">
          <rect x="4" y="4" width="18" height="18" rx="2" fill="#F25022" />
          <rect x="26" y="4" width="18" height="18" rx="2" fill="#7FBA00" />
          <rect x="4" y="26" width="18" height="18" rx="2" fill="#00A4EF" />
          <rect x="26" y="26" width="18" height="18" rx="2" fill="#FFB900" />
        </svg>
        <span className="bg-[#00A4EF]/10 text-[#00A4EF] text-[10px] font-bold px-2 py-0.5 rounded-full">Partner</span>
      </div>
    ),
    desc: "Microsoft Certified Partner — Azure & enterprise solutions.",
  },
  {
    name: "Clutch Top Agency",
    icon: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 48 48" className="w-6 h-6">
          <rect x="2" y="2" width="44" height="44" rx="10" fill="#FF3B30" />
          <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800" fontFamily="sans-serif">C</text>
        </svg>
        <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full">Top Rated</span>
      </div>
    ),
    desc: "Top-rated digital agency on Clutch with 4.9+ average reviews.",
  },
  {
    name: "Meta Business Partner",
    icon: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 48 48" className="w-6 h-6">
          <circle cx="24" cy="24" r="22" fill="#1877F2" />
          <path fill="#fff" d="M24 8c-8.84 0-16 7.16-16 16 0 7.55 5.2 13.86 12.2 15.63v-11.06h-3.67V24h3.67v-3.19c0-3.63 2.16-5.63 5.47-5.63 1.58 0 3.24.28 3.24.28v3.57h-1.83c-1.8 0-2.36 1.12-2.36 2.26V24h4.02l-.64 4.57H27.3v11.06C42.8 45.86 48 39.55 48 32c0-8.84-7.16-16-16-16h-4-4z" />
        </svg>
        <span className="bg-[#1877F2]/10 text-[#1877F2] text-[10px] font-bold px-2 py-0.5 rounded-full">Partner</span>
      </div>
    ),
    desc: "Meta Business Partner — expert social media advertising.",
  },
];

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRun.current) return;
    hasRun.current = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Process = () => (
  <>
    {/* ── Trusted Certifications ── */}
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-mesh" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/3 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-badge">✦ Trusted Certifications</span>
          <h2 className="section-heading mt-4">
            Trusted by{" "}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-zinc-500 mt-3 text-sm max-w-xl mx-auto">
            Certified and recognized by the world's most prominent technology platforms and marketplaces.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {CERT_GRID.map((cert, i) => (
            <div
              key={cert.name}
              className="group relative bg-white rounded-2xl border border-zinc-100 p-6 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(99,102,241,0.15)] hover:border-indigo-200/50"
              style={{
                transform: "perspective(800px) rotateX(0deg)",
                transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "perspective(800px) rotateX(3deg) translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) translateY(0px)";
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-3">{cert.icon}</div>
                <h3 className="text-sm font-bold text-zinc-800 mb-1">{cert.name}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{cert.desc}</p>
              </div>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex gap-10 animate-marquee" style={{ width: "max-content" }}>
              {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center gap-3 bg-white rounded-xl border border-zinc-100 px-5 py-3 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:border-zinc-200"
                >
                  {partner.svg}
                  <span className="text-sm font-semibold text-zinc-600 whitespace-nowrap">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Empowering Businesses — Premium Dark Section ── */}
    <section className="py-24 md:py-28 relative overflow-hidden" style={{ backgroundColor: "#030305" }}>
      <div className="absolute inset-0 hero-premium-bg" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none animate-glow" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <span className="section-badge !bg-white/[0.06] !border-white/[0.08] !text-indigo-300">
              ✦ Empowering Businesses
            </span>

            <h2 className="section-heading !text-white">
              Elevating Visibility.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Driving Growth.
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg">
              As the best <strong className="text-white">digital marketing agency in Delhi NCR & Haryana</strong>,
              Websbond transforms your online presence. We engineer high-performance search engine rankings,
              design custom mobile-first layouts, and launch conversion-focused campaigns to deliver measurable
              business returns.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/about-us"
                className="btn-primary inline-flex shadow-xl shadow-indigo-500/15 hover:shadow-indigo-500/25"
              >
                Explore More <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl px-6 py-3 transition-all duration-300"
              >
                View Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: 3D Stats Cards */}
          <div className="grid grid-cols-2 gap-4 perspective-[1000px]">
            {[
              { icon: TrendingUp, label: "Projects Delivered", value: 200, suffix: "+", color: "from-indigo-500 to-purple-600", delay: "0s" },
              { icon: Star, label: "Client Satisfaction", value: 99, suffix: "%", color: "from-amber-500 to-orange-600", delay: "0.15s" },
              { icon: Users, label: "Team Members", value: 25, suffix: "+", color: "from-emerald-500 to-teal-600", delay: "0.3s" },
              { icon: Shield, label: "Years Experience", value: 5, suffix: "+", color: "from-cyan-500 to-blue-600", delay: "0.45s" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12]"
                style={{
                  transform: "perspective(1000px) rotateY(0deg) translateZ(0px)",
                  transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1), background 0.4s ease, border-color 0.4s ease",
                  animation: `fade-up 0.8s ease ${stat.delay} both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateY(-4deg) translateZ(20px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) translateZ(0px)";
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500`} />
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-all duration-500" />

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg mb-3`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-zinc-500 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);
