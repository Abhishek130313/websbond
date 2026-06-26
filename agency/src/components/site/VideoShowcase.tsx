import { useState } from "react";
import { ArrowRight } from "lucide-react";

/* VideoShowcase — exactly like reference site:
   4 person/client cards in a row, each has a large photo with a red circular play button in center,
   clicking opens a YouTube modal.
*/
const VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    name: "Rajesh Kumar",
    role: "Business Owner, Delhi",
    thumb: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "dQw4w9WgXcQ",
    name: "Sunita Mehta",
    role: "Healthcare Clinic, Gurgaon",
    thumb: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "dQw4w9WgXcQ",
    name: "Priya Sharma",
    role: "E-Commerce Brand, NCR",
    thumb: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "dQw4w9WgXcQ",
    name: "Dr. Anil Gupta",
    role: "Medical Practice, Delhi",
    thumb: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80",
  },
];

export const VideoShowcase = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 md:py-20" style={{ background: "#f5f5f5" }}>
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span style={{ color: "#002b49" }}>→</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#eb560c" }}>
                OUR CLIENT
              </span>
            </div>
            <h2
              className="font-jost font-bold"
              style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#002b49" }}
            >
              Hear What Our{" "}
              <span style={{ color: "#eb560c" }}>Clients Say</span>
            </h2>
          </div>

          {/* 4-col video cards — person photo + red play button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VIDEOS.map((v) => (
              <button
                key={v.id + v.name}
                onClick={() => setPlaying(v.id)}
                className="group relative overflow-hidden rounded-xl text-left w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ boxShadow: "0 2px 15px rgba(0,0,0,0.08)" }}
              >
                {/* Person photo */}
                <div className="relative overflow-hidden" style={{ height: 280 }}>
                  <img
                    src={v.thumb}
                    alt={v.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />

                  {/* Red play button — centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "#FF0000" }}
                    >
                      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Load More button */}
          <div className="text-center mt-10">
            <button
              className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "#002b49" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#eb560c")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#002b49")}
            >
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* YouTube Modal */}
      {playing && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setPlaying(null)}
        >
          <div
            className="w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${playing}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              title="Client Testimonial Video"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-bold"
            onClick={() => setPlaying(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};
