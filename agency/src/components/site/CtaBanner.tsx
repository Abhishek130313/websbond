/* CtaBanner — dark navy section with "Get a Consultation / Call Us"
   Uses Websbond logo instead of stock person image */
import logo3d from "@/assets/websbond-logo-3d.webp";

export const CtaBanner = () => (
  <section
    className="relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)" }}
  >
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-14">
        {/* Left: Websbond logo floats on left side */}
        <div className="hidden md:flex absolute left-8 bottom-0 top-0 items-center pointer-events-none">
          <div className="relative w-40 h-40">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
              }}
            />
            {/* Logo */}
            <div className="absolute inset-4 rounded-full overflow-hidden flex items-center justify-center"
              style={{ background: "#0a0f1c", border: "2px solid rgba(168,85,247,0.3)" }}
            >
              <img
                src={logo3d}
                alt="Websbond"
                className="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              />
            </div>
          </div>
        </div>

        {/* Center: phone icon + text */}
        <div className="md:ml-56 flex items-center gap-5">
          {/* Phone circle */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.2)" }}
          >
            <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div>
            <p className="text-white/75 text-sm font-medium mb-0.5">Get a Consultation</p>
            <p className="text-white font-jost font-bold text-2xl">Call Us +91 9306623619</p>
          </div>
        </div>

        {/* Right: CTA button */}
        <a
          href="tel:+919306623619"
          className="inline-block text-center font-bold px-8 py-3.5 rounded transition-all duration-300 hover:shadow-lg flex-shrink-0"
          style={{ background: "#fff", color: "#002b49", fontSize: 15 }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#eb560c";
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
            (e.currentTarget as HTMLAnchorElement).style.color = "#002b49";
          }}
        >
          Call Now
        </a>
      </div>
    </div>
  </section>
);
