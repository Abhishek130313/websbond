import { ArrowRight, TrendingUp, Users, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

/* Brand partner logos (using named brand text since we can't use actual logo files) */
const BRANDS = [
  { name: "Google Partner", icon: "🔵" },
  { name: "Meta Business", icon: "🟦" },
  { name: "Shopify Partner", icon: "🟢" },
  { name: "WordPress.org", icon: "🔷" },
  { name: "AWS Partner", icon: "🟧" },
  { name: "HubSpot", icon: "🟠" },
  { name: "Semrush", icon: "🟣" },
  { name: "Ahrefs", icon: "🔴" },
  { name: "Mailchimp", icon: "🐵" },
  { name: "Canva Pro", icon: "🎨" },
];

const ACHIEVEMENTS = [
  { icon: <TrendingUp className="w-6 h-6" />, value: "300%+", label: "Average ROI Delivered" },
  { icon: <Users className="w-6 h-6" />, value: "100+", label: "Satisfied Clients" },
  { icon: <Globe className="w-6 h-6" />, value: "10+", label: "Countries Served" },
  { icon: <Award className="w-6 h-6" />, value: "5+", label: "Years of Excellence" },
];

export const GrowthConsole = () => (
  <>
    {/* ── Brand Partners / Tools Marquee ── */}
    <section className="py-16" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div className="text-center mb-10">
          <span className="section-tagline">Trusted Tools & Partners</span>
          <h2 className="section-title">
            We Work With the <span>Best Platforms</span>
          </h2>
          <div className="section-underline mx-auto" />
        </div>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(to right, #f8fafc, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(to left, #f8fafc, transparent)" }} />

          <div className="flex animate-marquee">
            {/* Double for infinite loop */}
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 mx-4 bg-white rounded-xl border border-gray-100 px-8 py-5 flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ minWidth: 140 }}
              >
                <span className="text-3xl">{brand.icon}</span>
                <span className="text-xs font-bold text-gray-600 text-center whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Achievements / Growth Stats ── */}
    <section className="py-20 md:py-24" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Achievement Stats */}
          <div>
            <span className="section-tagline">Our Achievements</span>
            <h2 className="section-title mb-2">
              Proven Growth <span>Results</span>
            </h2>
            <div className="section-underline-left mb-6" />
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              At Websbond, our success is measured by our clients' growth. From local businesses in Delhi NCR and Haryana to global enterprises, we've delivered measurable results across industries.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {ACHIEVEMENTS.map((item) => (
                <div
                  key={item.label}
                  className="border border-gray-100 rounded-2xl p-5 text-center hover:-translate-y-1 transition-all duration-300 hover:shadow-lg group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(235,86,12,0.1)", color: "#eb560c" }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="font-jost font-bold text-3xl mb-1"
                    style={{ color: "#eb560c" }}
                  >
                    {item.value}
                  </div>
                  <p className="text-gray-500 text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "#eb560c" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
              >
                Get Started Today <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Feature visual */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(0,43,73,0.12)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=80"
                alt="Digital marketing analytics dashboard"
                className="w-full object-cover"
                style={{ height: 420 }}
              />
            </div>

            {/* Floating mini cards */}
            <div
              className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 flex items-center gap-2"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
            >
              <span className="text-xl">📈</span>
              <div>
                <p className="text-xs text-gray-400 font-medium">This month</p>
                <p className="font-jost font-bold text-sm text-[#002b49]">+127% Traffic</p>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 flex items-center gap-2"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
            >
              <span className="text-xl">🎯</span>
              <div>
                <p className="text-xs text-gray-400 font-medium">Conversions</p>
                <p className="font-jost font-bold text-sm text-[#002b49]">4.8× ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
