import { useState } from "react";
import { ArrowRight, ExternalLink, Sparkles, Filter } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: "E-Commerce" | "Web App" | "Marketing" | "SEO";
  subCategory: string;
  tagline: string;
  stats: string;
  statLabel: string;
  imageUrl: string;
  colSpan: string;
  rowSpan: string;
  accent: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ranga Pest Control",
    category: "Web App",
    subCategory: "Pest Control & Sanitization",
    tagline: "Govt-licensed professional pest control platform built with TanStack Start React, featuring fast loading, custom service routing, and WhatsApp booking conversions.",
    stats: "Since 2007",
    statLabel: "Haryana's Trusted Experts",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80",
    colSpan: "lg:col-span-2 lg:row-span-2",
    rowSpan: "min-h-[420px] lg:min-h-[500px]",
    accent: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    liveUrl: "https://tanstack-start-app.rangapestservice.workers.dev/",
  },
  {
    id: 2,
    title: "Kearney Partners",
    category: "Web App",
    subCategory: "Consulting Firm",
    tagline: "Ultra-fast corporate portal showcasing consulting advisory pipelines.",
    stats: "Rank #1",
    statLabel: "Local Google SEO Search",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    colSpan: "lg:col-span-1 lg:row-span-1",
    rowSpan: "min-h-[250px]",
    accent: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
  },
  {
    id: 3,
    title: "FinFlow SaaS Portal",
    category: "Web App",
    subCategory: "SaaS Startup",
    tagline: "Real-time global currency ledger with automated pipeline audit charts.",
    stats: "100/100",
    statLabel: "PageSpeed Score Metric",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    colSpan: "lg:col-span-1 lg:row-span-1",
    rowSpan: "min-h-[250px]",
    accent: "from-cyan-500/20 to-teal-500/20 border-cyan-500/30",
  },
  {
    id: 4,
    title: "IndoSteel Mfg",
    category: "SEO",
    subCategory: "Manufacturing Co.",
    tagline: "B2B client inquiry pipeline optimized for local organic keywords.",
    stats: "+320%",
    statLabel: "Organic Traffic Growth",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    colSpan: "lg:col-span-1 lg:row-span-1",
    rowSpan: "min-h-[250px]",
    accent: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
  },
  {
    id: 5,
    title: "Taj Spice Bistro",
    category: "Marketing",
    subCategory: "Restaurant Chain",
    tagline: "SEO-oriented tables booking site with automated email triggers and direct food ordering system.",
    stats: "4.9★",
    statLabel: "Over 800+ User Reviews",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
    colSpan: "lg:col-span-2 lg:row-span-1",
    rowSpan: "min-h-[280px]",
    accent: "from-purple-500/20 to-fuchsia-500/20 border-purple-500/30",
  },
];

const categories = ["All", "Web App", "E-Commerce", "Marketing", "SEO"] as const;

export const RecentWorks = () => {
  const [filter, setFilter] = useState<typeof categories[number]>("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="container py-24 md:py-32 relative mx-auto px-4">
      {/* Background aesthetics */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Case Studies
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Our recent <span className="bg-gradient-to-r from-cyan-600 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">masterpieces.</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            We don't build standard layouts. Here are the handcrafted sites we created that deliver real ROI, top search speed, and flawless lead rates.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 self-start md:self-auto bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/[0.06] p-1.5 rounded-2xl backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:border-slate-300 dark:hover:border-white/10 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.2)] flex flex-col justify-between ${project.colSpan} ${project.rowSpan}`}
          >
            {/* Ambient inner glow */}
            <div className={`absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${project.accent}`} />

            {/* Content Details (Top) */}
            <div className="p-6 md:p-8 relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                  {project.subCategory}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 dark:group-hover:from-indigo-300 dark:group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300">
                {project.tagline}
              </p>
            </div>

            {/* Image & Stats Container (Bottom) */}
            <div className="relative overflow-hidden flex-1 flex flex-col justify-end min-h-[160px] border-t border-white/[0.04]">
              {/* Cover Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Stats & Link overlay */}
              <div className="p-6 md:p-8 flex items-end justify-between gap-6 relative z-10">
                <div className="bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-white/5 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-xl">
                  <div className="font-display font-black text-2xl text-emerald-600 dark:text-emerald-400 tracking-tight leading-none">
                    {project.stats}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider max-w-[100px] leading-tight">
                    {project.statLabel}
                  </div>
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-110 shrink-0"
                    aria-label={`Visit live website of ${project.title}`}
                  >
                    <ExternalLink className="w-5.5 h-5.5" />
                  </a>
                ) : (
                  <Link
                    to="/our-work"
                    className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-110 shrink-0"
                    aria-label={`View details of ${project.title}`}
                  >
                    <ExternalLink className="w-5.5 h-5.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to view all works */}
      <div className="text-center mt-16">
        <Link
          to="/our-work"
          className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] text-slate-800 dark:text-white font-bold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          View Case Studies Portfolio <ArrowRight className="w-4 h-4 text-purple-400" />
        </Link>
      </div>
    </section>
  );
};
