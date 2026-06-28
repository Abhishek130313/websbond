import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  const TAGS = ["Web Design", "SEO & Ranking", "Branding", "AI Integration", "Webflow"];

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[650px] max-h-[1080px] flex items-center justify-center overflow-hidden pt-20 pb-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroDashboard})` }}
    >
      {/* Raw background image without any blur or foggy overlays to keep it completely clean and clear */}
      <div className="absolute inset-0 bg-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* ── Left Column: Live Mockup Text (Fits completely within screen) ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 py-2">
            
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f0f2f5]/90 border border-gray-200/50 rounded-full px-4 py-1.5 text-[11px] text-[#0a0b13] font-bold mb-4 select-none shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>TRUSTED BY 200+ BUSINESSES</span>
            </div>

            {/* Heading */}
            <h1
              className="font-jost font-black text-[#0c0d16] mb-4 leading-[1.1] tracking-tight text-left"
              style={{ fontSize: "clamp(30px, 3.8vw, 54px)" }}
            >
              Grow Your Business
              <br />
              With Powerful{" "}
              <span className="relative inline-block px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200/60 text-[#2563eb]">
                Website Design
              </span>
              <br />
              & Digital Solutions{" "}
              <span className="text-[#0ea5e9] font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">
                SEO
              </span>
            </h1>

            {/* Description Subheading */}
            <p className="text-[#475569] text-sm md:text-base leading-relaxed mb-6 max-w-xl font-medium">
              We help ambitious brands scale, captivate audiences, and dominate search results with data-driven strategies and premium creative design.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 px-7 py-3.5 rounded-full transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 text-sm md:text-base w-full sm:w-auto shadow-[0_8px_18px_rgba(37,99,235,0.3)]"
              >
                Get Free Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                to="/our-portfolio"
                className="inline-flex items-center justify-center font-bold text-[#0c0d16] border border-gray-300/80 bg-white/70 backdrop-blur-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-gray-50/90 hover:scale-105 text-sm md:text-base w-full sm:w-auto"
              >
                View Our Portfolio
              </Link>
            </div>

            {/* Dynamic Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100/90 text-slate-600 text-[11px] font-semibold px-3.5 py-1.5 rounded-full border border-gray-200/50 select-none backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Company Trust Logos */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-4 border-t border-gray-200/50 w-full max-w-xl">
              {/* Google Text Logo */}
              <span className="font-display font-black text-slate-400 text-base sm:text-lg select-none tracking-tight">
                Google
              </span>
              {/* Meta Text Logo */}
              <span className="font-display font-black text-slate-400 text-base sm:text-lg select-none tracking-tight">
                Meta
              </span>
              {/* AWS Text Logo */}
              <span className="font-display font-semibold text-slate-400 text-base sm:text-lg select-none tracking-tighter">
                aws
              </span>
              {/* Stripe Text Logo */}
              <span className="font-display font-black text-slate-400 text-base sm:text-lg select-none tracking-tight">
                stripe
              </span>
            </div>

          </div>

          {/* ── Right Column: Spacer to preserve the background image's dashboard visuals ── */}
          <div className="lg:col-span-5 h-0 lg:h-[450px] pointer-events-none select-none" />

        </div>
      </div>
    </section>
  );
};
