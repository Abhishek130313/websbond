import { ArrowRight, Globe, Search, FileText, Code, Target, Share2, Smartphone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Social Media Marketing",
    icon: Globe,
    link: "/services#smm",
    desc: "Build a massive following and generate leads through strategic campaigns on Instagram, Facebook, LinkedIn & YouTube.",
  },
  {
    title: "Search Engine Optimization",
    icon: Search,
    link: "/services#seo",
    desc: "Dominate Google results with technical SEO, quality backlinks, and schema markup that drives organic traffic.",
  },
  {
    title: "Content Marketing",
    icon: FileText,
    link: "/services#content",
    desc: "Compelling blogs, landing pages, and videos crafted to rank, convert, and engage your audience.",
  },
  {
    title: "Web Development",
    icon: Code,
    link: "/services#web-design",
    desc: "Super-fast, mobile-friendly websites built on modern frameworks that create a strong online presence.",
  },
  {
    title: "Pay Per Click (PPC)",
    icon: Target,
    link: "/services#ppc",
    desc: "High-ROI Google & Meta ad campaigns with precise audience targeting and transparent reporting.",
  },
  {
    title: "Social Media Optimization",
    icon: Share2,
    link: "/services#smm",
    desc: "Optimize social profiles for maximum organic reach, brand authority, and consistent engagement.",
  },
  {
    title: "App Development",
    icon: Smartphone,
    link: "/services#apps",
    desc: "Custom mobile-first web and hybrid apps for iOS & Android with seamless UX and scalable architecture.",
  },
  {
    title: "Google My Business",
    icon: MapPin,
    link: "/services#gmb",
    desc: "Dominate local search results, get more calls, reviews, and foot traffic to your business.",
  },
];

export const Services = () => (
  <section className="py-24 md:py-28 bg-[#fafafa]">
    <div className="container">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="section-badge">✦ Our Services</span>
        <h2 className="section-heading mt-4">
          Digital solutions for{" "}
          <span className="gradient-text">every need</span>
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-base mt-4">
          Discover our comprehensive digital marketing services designed to grow your brand, reach the right audience, and scale online.
        </p>
      </div>

      {/* Icon-driven premium card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((service) => {
          const IconComp = service.icon;
          return (
            <Link
              key={service.title}
              to={service.link}
              className="group bg-white rounded-2xl p-6 border border-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] hover:border-indigo-200/50"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-5 shadow-[0_4px_14px_rgba(99,102,241,0.2)] transition-transform duration-300 group-hover:scale-110">
                <IconComp className="w-5 h-5 text-white" />
              </div>
              {/* Title */}
              <h3 className="font-semibold text-base text-zinc-900 mb-2 transition-colors group-hover:text-indigo-600">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed" style={{ marginBottom: 0 }}>
                {service.desc}
              </p>
            </Link>
          );
        })}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-14">
        <Link
          to="/services"
          className="btn-primary inline-flex"
        >
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);
