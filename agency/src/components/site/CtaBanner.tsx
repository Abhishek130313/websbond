/* CtaBanner — dark premium CTA section */

export const CtaBanner = () => (
  <section
    className="relative overflow-hidden"
    style={{ background: "#09090b" }}
  >
    {/* Background glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-30 pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />

    <div className="container relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-16">
        {/* Center: phone icon + text */}
        <div className="flex items-center gap-5">
          {/* Frosted glass phone circle */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-md bg-white/[0.06] border border-white/[0.08]"
          >
            <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div>
            <p className="text-zinc-400 text-sm font-normal mb-0.5">Get a Consultation</p>
            <p className="text-white font-semibold text-2xl tracking-tight" style={{ marginBottom: 0 }}>
              Call Us +91 9306623619
            </p>
          </div>
        </div>

        {/* Right: CTA button */}
        <a
          href="tel:+919306623619"
          className="btn-primary shrink-0 text-center"
        >
          Call Now
        </a>
      </div>
    </div>
  </section>
);
