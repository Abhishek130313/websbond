import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  const TAGS = ["Web Design", "SEO & Ranking", "Branding", "AI Integration", "Webflow"];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#fbfcfd] pt-24 pb-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroDashboard})` }}
    >
      {/* Translucent overlay to blend light office details and make left-aligned text perfectly readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 md:from-white/70 md:via-white/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* ── Left Column: Live Mockup Text ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f0f2f5]/90 border border-gray-200/50 rounded-full px-4.5 py-1.5 text-xs text-[#0a0b13] font-bold mb-6 select-none shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>TRUSTED BY 200+ BUSINESSES</span>
            </div>

            {/* Heading */}
            <h1
              className="font-jost font-black text-[#0c0d16] mb-6 leading-[1.08] tracking-tight text-left"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
            >
              Grow Your Business
              <br />
              With Powerful{" "}
              <span className="relative inline-block px-4 py-1.5 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-[#2563eb]">
                Website Design
              </span>
              <br />
              & Digital Solutions{" "}
              <span className="text-[#0ea5e9] font-extrabold tracking-wide drop-shadow-[0_0_12px_rgba(14,165,233,0.35)]">
                SEO
              </span>
            </h1>

            {/* Description Subheading */}
            <p className="text-[#475569] text-base md:text-lg leading-relaxed mb-8 max-w-xl font-medium">
              We help ambitious brands scale, captivate audiences, and dominate search results with data-driven strategies and premium creative design.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 px-8 py-4 rounded-full transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 text-base w-full sm:w-auto shadow-[0_10px_22px_rgba(37,99,235,0.35)]"
              >
                Get Free Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                to="/our-portfolio"
                className="inline-flex items-center justify-center font-bold text-[#0c0d16] border border-gray-300/80 bg-white/70 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-50/90 hover:scale-105 text-base w-full sm:w-auto"
              >
                View Our Portfolio
              </Link>
            </div>

            {/* Dynamic Tags */}
            <div className="flex flex-wrap gap-2.5 mt-10">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100/90 text-slate-600 text-xs font-semibold px-4 py-2 rounded-full border border-gray-200/50 select-none backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Company Trust Logos */}
            <div className="flex flex-wrap items-center gap-8 mt-12 pt-6 border-t border-gray-200/50 w-full max-w-xl">
              {/* Google Text Logo */}
              <span className="font-display font-black text-slate-400 text-lg sm:text-xl select-none tracking-tight">
                Google
              </span>
              {/* Meta Text Logo */}
              <span className="font-display font-black text-slate-400 text-lg sm:text-xl select-none tracking-tight">
                Meta
              </span>
              {/* AWS Text Logo */}
              <span className="font-display font-semibold text-slate-400 text-lg sm:text-xl select-none tracking-tighter">
                aws
              </span>
              {/* Stripe Text Logo */}
              <span className="font-display font-black text-slate-400 text-lg sm:text-xl select-none tracking-tight">
                stripe
              </span>
            </div>

          </div>

          {/* ── Right Column: Spacer to preserve the background image's dashboard visuals ── */}
          <div className="lg:col-span-5 h-0 lg:h-[500px] pointer-events-none select-none" />

        </div>
      </div>
    </section>
  );
};
