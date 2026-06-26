import { ArrowRight, Globe, Search, Megaphone, Code2, Paintbrush, ShoppingCart, BarChart2, Mail, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Website Design & Development",
    desc: "Premium React & Next.js websites with blazing-fast performance scores, custom UI/UX, and mobile-first responsive design tailored to your brand.",
    link: "/services#web-design",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    desc: "Rank higher on Google with technical SEO, keyword strategy, quality backlinks, and schema markup to drive organic traffic and qualified leads.",
    link: "/services#seo",
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Google Ads / PPC",
    desc: "High-ROI Google & Meta ad campaigns with precise audience targeting, A/B testing, and transparent reporting to maximise your ad spend.",
    link: "/services#ppc",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Social Media Marketing",
    desc: "Build a loyal community on Instagram, Facebook, LinkedIn & YouTube through consistent branding, engaging content, and growth strategies.",
    link: "/services#smm",
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Branding & UI/UX Design",
    desc: "Stand out with handcrafted logos, style guides, unique colour palettes, and premium design assets that elevate your brand authority.",
    link: "/services#branding",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce Solutions",
    desc: "Launch powerful online stores with secure payment integration, frictionless cart experience, and inventory management built for scale.",
    link: "/services#ecommerce",
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Analytics & Reporting",
    desc: "Data-driven insights with Google Analytics 4, Search Console, and custom dashboards to track performance and guide smart decisions.",
    link: "/services#analytics",
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Content Marketing",
    desc: "Compelling blogs, landing pages, and email campaigns crafted to rank, convert, and keep your audience engaged with your brand.",
    link: "/services#content",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "App Development",
    desc: "Custom mobile-first web apps and hybrid mobile apps for iOS & Android with seamless UX, API integrations, and scalable architecture.",
    link: "/services#apps",
  },
];

export const Services = () => (
  <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
    <div className="container">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="section-tagline">What We Offer</span>
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>
        <div className="section-underline mx-auto" />
        <p className="text-gray-500 max-w-2xl mx-auto mt-5 text-base leading-relaxed">
          From high-performance websites to data-driven marketing campaigns — we deliver end-to-end digital solutions that grow your business in Delhi NCR, Haryana, and across the globe.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <Link
            key={service.title}
            to={service.link}
            className="group block bg-white border border-gray-100 rounded-2xl p-7 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(235,86,12,0.12)] hover:border-[rgba(235,86,12,0.3)]"
            style={{ borderTop: "3px solid transparent", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = "#eb560c")}
            onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = "transparent")}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
              style={{ background: "rgba(0,43,73,0.07)", color: "#002b49" }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3
              className="font-jost font-bold text-xl mb-3 transition-colors duration-300 group-hover:text-[#eb560c]"
              style={{ color: "#16243E" }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {service.desc}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-sm font-bold transition-colors duration-300"
              style={{ color: "#eb560c" }}>
              Learn More <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          style={{ background: "#002b49" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#eb560c")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#002b49")}
        >
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);
