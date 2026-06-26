import { ArrowRight, Check, Target, Search, TrendingUp, Palette, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const WHY_US = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Result-Driven Strategies",
    desc: "Every campaign we run is backed by data and measured against real business KPIs — not vanity metrics.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "SEO & Technical Expertise",
    desc: "Our certified SEO specialists and developers work together to ensure your site ranks and converts.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Transparent Reporting",
    desc: "You get full visibility with monthly reports, live dashboards, and direct access to your account manager.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Premium Design Quality",
    desc: "We craft pixel-perfect, brand-consistent designs that make lasting first impressions and build trust.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Fast Turnaround",
    desc: "Agile delivery model with dedicated teams ensures your projects are completed on time, every time.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Dedicated Support",
    desc: "24/7 human support via WhatsApp, email and phone — because your business never sleeps and neither do we.",
  },
];

const STEPS = [
  { n: "01", title: "Discovery & Strategy", desc: "We understand your goals, competitors, and target market to craft a winning strategy." },
  { n: "02", title: "Design & Development", desc: "Our team builds a stunning, fast, and SEO-ready website aligned with your brand." },
  { n: "03", title: "Launch & Promote", desc: "We deploy campaigns across Google, Meta, and organic channels to drive traffic." },
  { n: "04", title: "Measure & Scale", desc: "Continuous optimization based on real data to compound your results month over month." },
];

export const Process = () => (
  <>
    {/* ── Why Choose Us Section ── */}
    <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Image / Visual */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(0,43,73,0.15)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&auto=format&fit=crop&q=80"
                alt="Digital marketing team at work"
                className="w-full object-cover"
                style={{ height: 460 }}
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 flex items-center gap-4"
                style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#eb560c" }}
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-jost font-bold text-[#002b49] text-lg leading-none">300%+ ROI</p>
                  <p className="text-gray-500 text-sm mt-0.5">Average client growth in 6 months</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10"
              style={{ background: "rgba(235,86,12,0.12)" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full -z-10"
              style={{ background: "rgba(0,43,73,0.08)" }}
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <span className="section-tagline">Why Choose Websbond</span>
            <h2 className="section-title mb-2">
              We Deliver <span>Results</span>, Not Just Promises
            </h2>
            <div className="section-underline-left mb-6" />
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              With Websbond, you get a dedicated partner committed to your business growth — combining cutting-edge technology, creative excellence, and performance marketing to maximise your ROI.
            </p>

            {/* Why Us Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {WHY_US.map((item) => (
                <div key={item.title} className="flex gap-3 group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(235,86,12,0.1)", color: "#eb560c" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-jost font-bold text-sm text-[#16243E] mb-0.5">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "#eb560c" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* ── Our Process Steps ── */}
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-tagline" style={{ color: "#ff9f67" }}>How It Works</span>
          <h2 className="section-title" style={{ color: "#ffffff" }}>
            Our Proven <span style={{ color: "#eb560c" }}>4-Step Process</span>
          </h2>
          <div className="section-underline mx-auto" />
          <p className="text-white/60 max-w-xl mx-auto mt-5 text-base leading-relaxed">
            A systematic approach that takes your business from strategy to success — with full transparency at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative text-center group">
              {/* Connector line (not last) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-0 h-0.5 opacity-30"
                  style={{ background: "#eb560c" }}
                />
              )}
              {/* Step number circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-jost font-bold text-2xl transition-all duration-300 group-hover:scale-110 relative z-10"
                style={{ background: "#eb560c", color: "#fff", boxShadow: "0 10px 30px rgba(235,86,12,0.4)" }}
              >
                {step.n}
              </div>
              <h3 className="font-jost font-bold text-lg text-white mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#eb560c] hover:bg-[#d14b0a] text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </>
);
