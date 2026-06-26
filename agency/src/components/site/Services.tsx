import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* Service cards exactly matching reference site:
   - Big image at top of card
   - Service name in white box at bottom
   - 4-column grid with carousel feel
*/
const SERVICES = [
  {
    title: "Social Media Marketing",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=80",
    link: "/services#smm",
    desc: "Build a massive following, create viral content, and generate leads through strategic social media campaigns on Instagram, Facebook, LinkedIn & YouTube.",
  },
  {
    title: "Search Engine Optimization",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=80",
    link: "/services#seo",
    desc: "Dominate Google search results with technical SEO, keyword research, quality backlinks, and schema markup that drives organic traffic and qualified leads.",
  },
  {
    title: "Content Marketing",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=80",
    link: "/services#content",
    desc: "Compelling blogs, landing pages, infographics, and videos crafted to rank, convert, and keep your audience engaged with your brand story.",
  },
  {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=80",
    link: "/services#web-design",
    desc: "Our website development services will enable you to create a strong online presence. The websites we build are super quick and mobile-friendly.",
  },
  {
    title: "Pay Per Click (PPC)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
    link: "/services#ppc",
    desc: "High-ROI Google & Meta ad campaigns with precise audience targeting, A/B testing, and transparent reporting to maximise your advertising spend.",
  },
  {
    title: "Social Media Optimization",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=500&auto=format&fit=crop&q=80",
    link: "/services#smm",
    desc: "Optimize your social profiles for maximum organic reach, brand authority, and consistent engagement across all major social platforms.",
  },
  {
    title: "App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=80",
    link: "/services#apps",
    desc: "Custom mobile-first web and hybrid apps for iOS & Android with seamless UX, API integrations, and scalable architecture for growth.",
  },
  {
    title: "Google My Business",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=80",
    link: "/services#gmb",
    desc: "Optimize your Google My Business profile to dominate local search results, get more calls, reviews, and foot traffic to your physical location.",
  },
];

export const Services = () => (
  <section className="py-20 md:py-24" style={{ background: "#f5f5f5" }}>
    <div className="container">
      {/* Section Header — exactly like reference */}
      <div className="text-center mb-14">
        {/* Orange arrow tagline */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span style={{ color: "#002b49" }}>→</span>
          <span
            className="text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: "#eb560c" }}
          >
            BEST SERVICE
          </span>
        </div>
        <h2
          className="font-jost font-bold mb-3"
          style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "#002b49" }}
        >
          <span style={{ color: "#eb560c" }}>Digital Solutions</span>{" "}
          for your every need
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Discover our comprehensive digital marketing services designed to grow your brand, reach the right audience, and grow online.
        </p>
      </div>

      {/* 4-column grid of image cards — reference site style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.slice(0, 4).map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* Second row — info card variant (last card on first row of reference is text-only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {SERVICES.slice(4).map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-12">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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

const ServiceCard = ({ service }: { service: typeof SERVICES[0] }) => (
  <Link
    to={service.link}
    className="group block bg-white rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    style={{ boxShadow: "0 2px 15px rgba(0,0,0,0.08)" }}
  >
    {/* Image — takes up top 2/3 of card */}
    <div className="overflow-hidden" style={{ height: 200 }}>
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    {/* Title + subtle desc */}
    <div className="p-4">
      <h3
        className="font-jost font-bold text-center transition-colors duration-300 group-hover:text-[#eb560c]"
        style={{ fontSize: 17, color: "#002b49" }}
      >
        {service.title}
      </h3>
    </div>
  </Link>
);
