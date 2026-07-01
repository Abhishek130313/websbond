import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const PracticeBanner = () => {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24 text-white"
      style={{ background: "#09090b" }}
    >
      {/* Subtle gradient glow */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[80%] opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, rgba(99,102,241,0.15) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      {/* Subtle grid mesh */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div 
              className="relative rounded-2xl overflow-hidden border border-white/[0.06] max-w-sm w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              style={{ height: 350 }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
                alt="Digital Marketing Strategy Consultation"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="section-badge" style={{ color: "#a78bfa", background: "rgba(139,92,246,0.1)", borderColor: "rgba(139,92,246,0.2)" }}>
              ✦ Enhance Your Reach
            </span>

            <h2
              className="font-bold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(26px, 3.8vw, 42px)" }}
            >
              Enhance your business's digital reach with{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                targeted marketing strategies
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Boost your brand's online presence, capture high-quality organic search queries, and drive ready-to-buy customers to your web assets. Websbond designs tailored campaign systems optimized for search positioning, content traction, and ROI performance.
            </p>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="btn-primary inline-flex"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
