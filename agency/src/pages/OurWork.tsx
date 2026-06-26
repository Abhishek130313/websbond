import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Monitor, Search, Layers, Briefcase, Plus, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const filters = [
  { label: "All Portfolio", category: "All", icon: Layers },
  { label: "Web Design", category: "Web Design", icon: Monitor },
  { label: "SEO & Marketing", category: "SEO & Digital Marketing", icon: Search }
];

const projects = [
  { 
    name: "Golden Masala", 
    category: "Web Design", 
    subcategory: "Manufacturing Company", 
    desc: "A premium business website designed to rank locally and showcase a full catalog of Indian spices.", 
    results: "Page 1 search rankings & 250% leads growth",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format&fit=crop&q=80"
  },
  { 
    name: "Dr. Archit Pandit", 
    category: "Web Design", 
    subcategory: "Healthcare Doctor", 
    desc: "Trust-centric oncologist portfolio with appointment request sync and patient review streams.", 
    results: "3x patient booking enquiries",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
  },
  { 
    name: "Dr. Neha Khandelwal", 
    category: "Web Design", 
    subcategory: "Healthcare Doctor", 
    desc: "High-end aesthetic clinic website with photo galleries, reviews and WhatsApp chat features.", 
    results: "Dominates local search queries",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80"
  },
  { 
    name: "Gladwin Electrolink Industries", 
    category: "SEO & Digital Marketing", 
    subcategory: "Industrial Manufacturing", 
    desc: "B2B SEO mapping and search ranking visibility keywords optimization for electrical items.", 
    results: "+220% search queries increment",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=80"
  },
  { 
    name: "Suraaj Farms", 
    category: "SEO & Digital Marketing", 
    subcategory: "Agri-Business", 
    desc: "Local listing map optimizations and organic SEO campaigns to capture bulk orders.", 
    results: "Rank #1 for local farms query",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&auto=format&fit=crop&q=80"
  },
  { 
    name: "H.O.P.E Oncology Clinic", 
    category: "SEO & Digital Marketing", 
    subcategory: "Healthcare Campaign", 
    desc: "Paid search PPC and social media marketing funnel targeting oncology patient consultations.", 
    results: "Cost-per-Lead reduced by 40%",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=80"
  },
  { 
    name: "PDI Expert", 
    category: "Web Design", 
    subcategory: "Business Service", 
    desc: "Custom corporate service portal with quick audits request flow and speed score optimizations.", 
    results: "Lighthouse core speed score 99/100",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80"
  },
  { 
    name: "Oncology Forum", 
    category: "Web Design", 
    subcategory: "Doctor Association", 
    desc: "Academic registry portal featuring directories, scientific updates and meeting journals.", 
    results: "Seamless mobile dashboard UI",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=80"
  },
  { 
    name: "Singh Builders", 
    category: "Web Design", 
    subcategory: "Real Estate Business", 
    desc: "Construction project grid showcase, layout diagrams and lead capturing integrations.", 
    results: "3.2x monthly property queries",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&auto=format&fit=crop&q=80"
  }
];

export const OurWorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <Layout>
      <SEO 
        title="Our Portfolio | Web Design & SEO Projects | Websbond" 
        description="Browse our portfolio of custom React website designs, ecommerce builds, and result-oriented search engine optimization campaigns built by Websbond." 
        path="/our-portfolio" 
        keywords="websbond portfolio, web design delhi, digital marketing Gurgaon, google ads case studies"
      />

      {/* ── Page Hero Header ── */}
      <section className="relative overflow-hidden py-16 md:py-20 text-white" style={{ background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            → PROVEN CASE STUDIES
          </div>
          <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight mb-4">
            Our Portfolio
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Browse our creative showcase of custom web development and digital marketing campaigns that have helped businesses grow online.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs & Projects Grid ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto">
            {filters.map((f) => {
              const Icon = f.icon;
              const isSelected = activeFilter === f.category;
              return (
                <button
                  key={f.category}
                  type="button"
                  onClick={() => setActiveFilter(f.category)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                    isSelected 
                      ? "bg-[#eb560c] text-white border-[#eb560c]" 
                      : "bg-[#f8fafc] text-[#002b49] border-gray-100 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Grid of Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image top */}
                <div className="relative overflow-hidden h-52 bg-slate-100 shrink-0">
                  <img 
                    src={project.img} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#002b49] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {project.subcategory}
                  </span>
                </div>

                {/* Content bottom */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-jost font-bold text-lg text-[#002b49] group-hover:text-[#eb560c] transition-colors mb-1.5">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                      {project.desc}
                    </p>
                  </div>
                  <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-3.5 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#eb560c] shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Metrics Delivered</h4>
                      <p className="font-jost font-bold text-[#002b49] text-xs mt-0.5">{project.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Direct Pitch Section ── */}
      <section className="py-20" style={{ background: "#f5f5f5" }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-[#eb560c] font-semibold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            <Briefcase className="w-3.5 h-3.5" /> Start Your Build
          </div>
          <h2 className="font-jost font-black text-2xl sm:text-4xl text-[#002b49] mb-4">
            Need a similar setup built for your business?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-semibold">
            We provide direct developer coordination and custom high-speed code logic mapping to ensure your brand dominates local search keywords and converts enquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us" className="btn-orange font-bold text-sm">Initiate Similar Project</Link>
            <a 
              href="https://wa.me/919306623619?text=Namaste!%20I%20have%20seen%20your%20portfolio%20and%20want%2520to%2520build%2520a%2520website." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default OurWorkPage;
