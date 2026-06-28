import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[650px] max-h-[960px] lg:max-h-[1080px] w-full flex items-center justify-center overflow-hidden bg-[#030712] pt-16 pb-4"
    >
      {/* ── Background Image Container: Positioned on the right and masked to cover pre-printed text ── */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[58%] z-0 select-none pointer-events-none overflow-hidden">
        <img
          src={heroDashboard}
          alt="Websbond Tech Office Background"
          className="w-full h-full object-cover object-right z-0"
          loading="eager"
        />
        {/* Transparent transition gradients to blend the background image perfectly with solid dark slate */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 via-[#030712]/50 to-transparent z-10 pointer-events-none lg:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/95 to-[#030712] z-10 pointer-events-none lg:hidden block" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-12 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* ── Left Column: Live Mockup Text (Fits completely within screen) ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20 py-2">
            
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-[11px] text-white/90 font-bold mb-4 select-none shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span>TRUSTED BY 200+ BUSINESSES</span>
            </div>

            {/* Heading */}
            <h1
              className="font-jost font-black text-white mb-4 leading-[0.95] tracking-tight text-left uppercase"
              style={{ fontSize: "clamp(34px, 4.8vw, 72px)" }}
            >
              Engineering
              <br />
              the future
            </h1>

            {/* Description Subheading */}
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-xl font-medium">
              We build world-class digital experiences and technology that accelerate visionaries.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-7 py-3.5 rounded-full transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 text-sm md:text-base w-full sm:w-auto shadow-[0_8px_20px_rgba(99,102,241,0.3)]"
              >
                Get Started <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Company Trust Logos */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6">
              <span className="font-display font-black text-white/35 text-[13px] sm:text-sm tracking-tight hover:text-white/60 transition-colors">Spotify</span>
              <span className="font-display font-black text-white/35 text-[13px] sm:text-sm tracking-tight hover:text-white/60 transition-colors">Nike</span>
              <span className="font-display font-semibold text-white/35 text-[13px] sm:text-sm tracking-tighter hover:text-white/60 transition-colors">aws</span>
              <span className="font-display font-black text-white/35 text-[13px] sm:text-sm tracking-tight hover:text-white/60 transition-colors">stripe</span>
              <span className="font-display font-bold text-white/35 text-[13px] sm:text-sm tracking-tight hover:text-white/60 transition-colors">Adobe</span>
              <span className="font-display font-black text-white/35 text-[13px] sm:text-sm tracking-tight hover:text-white/60 transition-colors">salesforce</span>
            </div>

            {/* Bottom Stats (Rendered in live HTML to prevent cut-off issues) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-4 border-t border-white/10 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white/80 tracking-wide">TRUSTED BY</span>
                <span className="text-[9px] font-bold text-white/40 tracking-wider uppercase">GLOBAL LEADERS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white/80 tracking-wide">250+ PROJECTS</span>
                <span className="text-[9px] font-bold text-white/40 tracking-wider uppercase">DELIVERED</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white/80 tracking-wide">40+ TEAM</span>
                <span className="text-[9px] font-bold text-white/40 tracking-wider uppercase">MEMBERS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white/80 tracking-wide">15+ INDUSTRY</span>
                <span className="text-[9px] font-bold text-white/40 tracking-wider uppercase">AWARDS</span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Spacer to preserve the background image's dashboard visuals ── */}
          <div className="lg:col-span-5 h-0 lg:h-[450px] pointer-events-none select-none z-20" />

        </div>
      </div>
    </section>
  );
};
