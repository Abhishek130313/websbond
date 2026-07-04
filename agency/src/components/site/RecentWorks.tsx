import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  tagline: string;
  stats: string;
  statLabel: string;
  imageUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ranga Pest Control",
    category: "Web Development",
    tagline: "Govt-licensed pest control platform with WhatsApp booking, custom service routing, and blazing-fast performance.",
    stats: "Since 2007",
    statLabel: "Haryana's Trusted Experts",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://tanstack-start-app.rangapestservice.workers.dev/",
  },
  {
    id: 2,
    title: "Kearney Partners",
    category: "SEO & Web App",
    tagline: "Ultra-fast corporate portal with local Google SEO ranking, showcasing consulting advisory services.",
    stats: "Rank #1",
    statLabel: "Local Google SEO",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "FinFlow SaaS Portal",
    category: "Web App",
    tagline: "Real-time global currency ledger with automated pipeline audit charts and 100/100 PageSpeed.",
    stats: "100/100",
    statLabel: "PageSpeed Score",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "IndoSteel Manufacturing",
    category: "SEO",
    tagline: "B2B client inquiry pipeline optimised for local organic keywords — 320% traffic growth in 4 months.",
    stats: "+320%",
    statLabel: "Organic Traffic Growth",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Taj Spice Bistro",
    category: "Marketing",
    tagline: "Restaurant website with SEO-oriented table booking, automated email triggers, and direct food ordering.",
    stats: "4.9★",
    statLabel: "Google Reviews",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "FitLife Gym Studio",
    category: "Digital Marketing",
    tagline: "Membership management app and Google Ads campaign delivering 45 new sign-ups in month one.",
    stats: "45",
    statLabel: "New Members / Month",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80",
  },
];

export const RecentWorks = () => (
  <section className="py-20 md:py-28" style={{ background: "#f8fafc" }}>
    <div className="container">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <span className="section-tagline">Case Studies</span>
          <h2 className="section-title">
            Our Recent <span>Work</span>
          </h2>
          <div className="section-underline-left mt-4" />
        </div>
        <Link
          to="/our-portfolio"
          className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap self-start sm:self-auto"
          style={{ borderColor: "#002b49", color: "#002b49" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#002b49";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#002b49";
          }}
        >
          View All Work <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: 220 }}>
              <img loading="lazy" decoding="async" 
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-center gap-2">
                  <span className="text-white text-xs font-bold bg-[#eb560c] px-2 py-1 rounded">
                    {project.stats}
                  </span>
                  <span className="text-white/80 text-xs">{project.statLabel}</span>
                </div>
              </div>
              {/* Category badge */}
              <span
                className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                style={{ background: "#002b49" }}
              >
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3
                className="font-jost font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[#eb560c]"
                style={{ color: "#16243E" }}
              >
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {project.tagline}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-jost font-bold text-lg" style={{ color: "#eb560c" }}>
                    {project.stats}
                  </span>
                  <span className="text-gray-400 text-xs">{project.statLabel}</span>
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold transition-colors"
                    style={{ color: "#002b49" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#eb560c")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#002b49")}
                  >
                    Live Site <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
