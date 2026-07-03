import { useState } from "react";

/* VideoShowcase — person cards with frosted glass play button */
// Placeholder video IDs — replace with actual client testimonial YouTube video IDs
const VIDEOS = [
  {
    id: "placeholder",
    name: "Rajesh Kumar",
    role: "Business Owner, Delhi",
    thumb: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "placeholder",
    name: "Sunita Mehta",
    role: "Healthcare Clinic, Gurgaon",
    thumb: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "placeholder",
    name: "Priya Sharma",
    role: "E-Commerce Brand, NCR",
    thumb: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "placeholder",
    name: "Dr. Anil Gupta",
    role: "Medical Practice, Delhi",
    thumb: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80",
  },
];

export const VideoShowcase = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="section-badge">✦ Client Stories</span>
            <h2 className="section-heading mt-4">
              Hear what our{" "}
              <span className="gradient-text">clients say</span>
            </h2>
          </div>

          {/* 4-col video cards — frosted glass play button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VIDEOS.map((v) => {
              const isPlaceholder = v.id === "placeholder";
              return (
              <button
                key={v.id + v.name}
                onClick={() => !isPlaceholder && setPlaying(v.id)}
                className="group relative overflow-hidden rounded-2xl text-left w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] border border-zinc-100"
                style={{ cursor: isPlaceholder ? "default" : "pointer" }}
              >
                {/* Person photo */}
                <div className="relative overflow-hidden" style={{ height: 300 }}>
                  <img
loading="lazy" decoding="async"                     src={v.thumb}
                    alt={v.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />

                  {isPlaceholder ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span className="text-white text-xs font-semibold uppercase tracking-wider bg-black/50 px-3 py-1.5 rounded-full">
                        Video Coming Soon
                      </span>
                    </div>
                  ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 backdrop-blur-md bg-white/20 border border-white/30"
                    >
                      <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  )}

                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-semibold text-sm" style={{ marginBottom: 0 }}>{v.name}</p>
                    <p className="text-white/60 text-xs" style={{ marginBottom: 0 }}>{v.role}</p>
                  </div>
                </div>
              </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {playing && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setPlaying(null)}
        >
          <div
            className="w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {playing === "placeholder" ? (
              <div className="text-center text-white p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <p className="text-lg font-semibold">Real client video coming soon</p>
                <p className="text-sm text-white/60 mt-2">We are recording authentic testimonial videos with our clients.</p>
              </div>
            ) : (
            <iframe
              src={`https://www.youtube.com/embed/${playing}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              title="Client Testimonial Video"
            />
            )}
          </div>
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl font-light transition-colors"
            onClick={() => setPlaying(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};
