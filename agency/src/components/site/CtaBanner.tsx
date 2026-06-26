/* CtaBanner — dark navy section with "Get a Consultation / Call Us" 
   Exactly matches the reference site section */
export const CtaBanner = () => (
  <section
    className="relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}
  >
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-14">
        {/* Left: image floats out of section top */}
        <div className="hidden md:block absolute left-0 bottom-0 w-72 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80"
            alt="Business consultant"
            className="w-full object-cover object-top"
            style={{ height: 220, objectPosition: "center top" }}
          />
        </div>

        {/* Center: phone icon + text */}
        <div className="md:ml-72 flex items-center gap-5">
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
