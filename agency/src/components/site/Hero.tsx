import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  const TAGS = ["Web Design", "SEO & Ranking", "Branding", "AI Integration", "Webflow"];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#fafbfc] pt-24 pb-16"
    >
      {/* Light modern background details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/45 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column: Live Styled Text ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f0f2f5]/90 border border-gray-200/50 rounded-full px-4.5 py-1.5 text-xs text-[#0a0b13] font-bold mb-6 select-none shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>TRUSTED BY 200+ BUSINESSES</span>
            </div>

            {/* Heading */}
            <h1
              className="font-jost font-black text-[#0c0d16] mb-6 leading-[1.08] tracking-tight text-left"
              style={{ fontSize: "clamp(34px, 4.8vw, 68px)" }}
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
                className="inline-flex items-center justify-center font-bold text-[#0c0d16] border border-gray-300/80 bg-white/70 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-50 hover:scale-105 text-base w-full sm:w-auto"
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

          {/* ── Right Column: Masked Mockup Graphic ── */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Visual Glass Card Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:h-[520px] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-gray-200/60 bg-white/10 backdrop-blur-sm select-none">
              
              {/* Cropped Mockup Image: displaying only the floating 3D dashboard components */}
              <img
                src={heroDashboard}
                alt="Websbond Marketing Insights Platform"
                className="absolute right-0 top-0 h-full w-[170%] max-w-none object-cover object-right select-none pointer-events-none"
              />
              
            </div>
            
            {/* Ambient colorful glow decorations matching the mockup graphics */}
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
