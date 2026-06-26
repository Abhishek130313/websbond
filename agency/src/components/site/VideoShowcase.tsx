import { useState } from "react";
import { Play } from "lucide-react";

interface ShortCard {
  id: string;
  title: string;
  ytId: string;
  poster: string;
  category: string;
}

const SHORTS: ShortCard[] = [
  {
    id: "web",
    title: "Website Design Process",
    ytId: "dQw4w9WgXcQ",
    poster: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80",
    category: "Web Development",
  },
  {
    id: "seo",
    title: "SEO Strategy Breakdown",
    ytId: "dQw4w9WgXcQ",
    poster: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&auto=format&fit=crop&q=80",
    category: "SEO & Growth",
  },
  {
    id: "ads",
    title: "Google Ads ROI Case Study",
    ytId: "dQw4w9WgXcQ",
    poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80",
    category: "PPC Campaigns",
  },
  {
    id: "social",
    title: "Social Media Growth Tips",
    ytId: "dQw4w9WgXcQ",
    poster: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&auto=format&fit=crop&q=80",
    category: "Social Media",
  },
];

const ShortCard = ({ card }: { card: ShortCard }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden group transition-all duration-400 hover:-translate-y-2 cursor-pointer"
      style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 20px 40px rgba(235,86,12,0.15)";
        el.style.borderColor = "rgba(235,86,12,0.35)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 10px 25px rgba(0,0,0,0.04)";
        el.style.borderColor = "rgb(241,245,249)";
      }}
    >
      {/* Video / Poster */}
      <div className="relative" style={{ height: 240, background: "#000" }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${card.ytId}?autoplay=1`}
            className="absolute inset-0 w-full h-full border-none"
            allow="autoplay; encrypted-media"
            title={card.title}
          />
        ) : (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setPlaying(true)}
          >
            <img
              src={card.poster}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Play button */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white group-hover:scale-110"
              style={{ background: "rgba(255,0,0,0.9)" }}
            >
              <Play className="w-5 h-5 text-white fill-white ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-4">
        <span
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: "#eb560c" }}
        >
          {card.category}
        </span>
        <h4
          className="font-jost font-bold text-base mt-1 leading-tight"
          style={{ color: "#16243E" }}
        >
          {card.title}
        </h4>
      </div>
    </div>
  );
};

export const VideoShowcase = () => (
  <section
    className="py-20 md:py-28"
    style={{ background: "#f8fafc" }}
  >
    <div className="container">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="section-tagline">See Us In Action</span>
        <h2 className="section-title">
          Our Work <span>Videos</span>
        </h2>
        <div className="section-underline mx-auto" />
        <p className="text-gray-500 max-w-xl mx-auto mt-5 text-base leading-relaxed">
          Watch real insights, case studies, and behind-the-scenes looks at how we deliver exceptional results for our clients.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SHORTS.map((card) => (
          <ShortCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  </section>
);
