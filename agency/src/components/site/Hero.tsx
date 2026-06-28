import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://labs.google/fx/api/og-video/shared/14b3b69a-687a-4b44-8de0-25928f4e6a16"
          type="video/mp4"
        />
      </video>

      {/* Dark gradient overlay to blend video edges and make text pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />

      {/* Hero content - centered */}
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md text-xs md:text-sm text-white/95 mb-6 select-none shadow-inner">
          <span className="text-orange-400">✨</span>
          <span>Transforming Ideas Into Digital Reality</span>
        </div>

        {/* Heading */}
        <h1 className="font-jost font-black text-white mb-6 leading-tight max-w-5xl tracking-tight" style={{ fontSize: "clamp(32px, 6vw, 84px)" }}>
          We design & build
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            stunning
          </span>
          {" "}digital products.
        </h1>

        {/* Subheading */}
        <p className="text-white/60 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl font-medium">
          We are a creative digital agency that partners with startups and established brands to build impactful digital solutions.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Action Button */}
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center font-bold text-black bg-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 text-base w-full sm:w-auto shadow-lg hover:shadow-white/5"
          >
            Start a Project <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          {/* Secondary Action Button */}
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center font-bold text-white border border-white/20 bg-white/5 px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/45 hover:scale-105 text-base w-full sm:w-auto backdrop-blur-sm"
          >
            <Play className="w-4 h-4 mr-2 fill-white text-white" /> Watch Showreel
          </Link>
        </div>

      </div>
    </section>
  );
};
