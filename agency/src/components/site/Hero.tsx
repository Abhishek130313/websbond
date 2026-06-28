import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[650px] max-h-[1080px] flex items-center justify-center overflow-hidden pt-20 pb-6 bg-[#030712]"
    >
      {/* Absolute High-Definition Background Image - Clean and clear */}
      <img
        src={heroDashboard}
        alt="Websbond Tech Office Background"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-0"
        loading="eager"
      />

      {/* Solid black gradient overlay to mask out the pre-printed text on the left, letting the right side dashboard show through clearly */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:from-black/75 md:via-black/25 to-transparent pointer-events-none z-10" />

      <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-12 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* ── Left Column: Live Mockup Text ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20 py-2">
            
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[11px] text-white/90 font-bold mb-6 select-none shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span>TRUSTED BY 200+ BUSINESSES</span>
            </div>

            {/* Heading */}
            <h1
              className="font-jost font-black text-white mb-6 leading-[1.05] tracking-tight text-left uppercase"
              style={{ fontSize: "clamp(34px, 5.2vw, 76px)" }}
            >
              Engineering
              <br />
              the future
            </h1>

            {/* Description Subheading */}
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-medium">
              We build world-class digital experiences and technology that accelerate visionaries.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-8 py-4 rounded-full transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 text-base w-full sm:w-auto shadow-[0_10px_25px_rgba(99,102,241,0.35)]"
              >
                Get Started <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Company Trust Logos */}
            <div className="flex flex-wrap items-center gap-8 mt-12 pt-6 border-t border-white/10 w-full max-w-xl">
              {/* Spotify Text Logo */}
              <span className="font-display font-black text-white/40 text-lg sm:text-xl select-none tracking-tight">
                Spotify
              </span>
              {/* Nike Text Logo */}
              <span className="font-display font-black text-white/40 text-lg sm:text-xl select-none tracking-tight">
                Nike
              </span>
              {/* AWS Text Logo */}
              <span className="font-display font-semibold text-white/40 text-lg sm:text-xl select-none tracking-tighter">
                aws
              </span>
              {/* Stripe Text Logo */}
              <span className="font-display font-black text-white/40 text-lg sm:text-xl select-none tracking-tight">
                stripe
              </span>
              {/* Adobe Text Logo */}
              <span className="font-display font-bold text-white/40 text-lg sm:text-xl select-none tracking-tight">
                Adobe
              </span>
              {/* Salesforce Text Logo */}
              <span className="font-display font-black text-white/40 text-lg sm:text-xl select-none tracking-tight">
                salesforce
              </span>
            </div>

          </div>

          {/* ── Right Column: Spacer to preserve the background image's dashboard visuals ── */}
          <div className="lg:col-span-5 h-0 lg:h-[450px] pointer-events-none select-none z-20" />

        </div>
      </div>
    </section>
  );
};
