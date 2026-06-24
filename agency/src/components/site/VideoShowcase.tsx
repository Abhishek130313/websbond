import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCw, Volume2, Shield, Sparkles, Tv, HelpCircle, Maximize2 } from "lucide-react";

interface VideoTab {
  id: string;
  title: string;
  duration: string;
  category: string;
  poster: string;
  description: string;
  overlayStats: { label: string; val: string }[];
}

const videoTabs: VideoTab[] = [
  {
    id: "speed",
    title: "0.2s React Core Load Speed",
    duration: "0:12",
    category: "Web Engineering",
    poster: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80",
    description: "Watch our Next.js + React engine compilation achieving a perfect 100/100 Lighthouse speed index score.",
    overlayStats: [
      { label: "FCP Speed", val: "0.2s" },
      { label: "Lighthouse Score", val: "100" },
      { label: "Core Web Vitals", val: "Passed ✓" }
    ]
  },
  {
    id: "ads",
    title: "ROI-Focused Paid Ads Funnel",
    duration: "0:15",
    category: "PPC Campaigns",
    poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
    description: "Explore our Meta Pixel & Google conversion dashboard tracking +280% lead volume scaling.",
    overlayStats: [
      { label: "CTR Average", val: "5.4%" },
      { label: "Cost-Per-Lead", val: "-35%" },
      { label: "Revenue Scale", val: "3.2x ROI" }
    ]
  },
  {
    id: "seo",
    title: "Organic SEO Rank Expansion",
    duration: "0:18",
    category: "Search Strategy",
    poster: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&auto=format&fit=crop&q=80",
    description: "A walkthrough of our technical crawling optimization ranking keywords to Page 1 Position 1.",
    overlayStats: [
      { label: "Rank Trajectory", val: "Position 1" },
      { label: "Organic Reach", val: "+420%" },
      { label: "Keyword Indexing", val: "Deploys in 2w" }
    ]
  }
];

export const VideoShowcase = () => {
  const [activeTab, setActiveTab] = useState<string>("speed");
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const progressIntervalRef = useRef<number | null>(null);

  const activeVideo = videoTabs.find((v) => v.id === activeTab) || videoTabs[0];

  // Video progress loop simulator
  useEffect(() => {
    if (isPlaying) {
      progressIntervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });
      }, 120);
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying]);

  const handleTimelineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  const handleTabSelect = (tabId: string) => {
    setActiveTab(tabId);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section className="container py-20 relative overflow-hidden">
      {/* Background glow atmospheric layout */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-40 bg-purple-500/10" />
      
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-600 dark:text-white font-semibold text-[11px] uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
          <Tv className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Cinematic Walkthroughs
        </div>
        <h2 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
          Inspect our systems <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">in HD quality.</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Select a system walkthrough below, play the mock video demo, and scrub the progress bar to check technical benchmarks.
        </p>
      </div>

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 max-w-6xl mx-auto items-stretch relative z-10">
        
        {/* Left Side: Dynamic Selectors */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 bg-white/70 dark:bg-slate-900/40 border border-slate-200 dark:border-white/[0.06] flex flex-col justify-between gap-6 backdrop-blur-md">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-1">Select Walkthrough Demo</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Watch direct recordings of our client deployment pipelines.</p>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-center">
            {videoTabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id)}
                  className={`w-full p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                    isSelected 
                      ? "bg-purple-500/10 border-purple-500 text-purple-700 dark:text-white shadow-[0_0_20px_rgba(168,85,247,0.15)]" 
                      : "bg-slate-50/50 dark:bg-white/[0.015] border-slate-200 dark:border-white/[0.05] text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/15 hover:bg-slate-100 dark:hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-purple-600 dark:text-purple-400">{tab.category}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{tab.duration} demo</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-2">{tab.title}</div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">{tab.description}</p>
                </button>
              );
            })}
          </div>

          <div className="border-t border-slate-200/80 dark:border-white/[0.06] pt-5 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>Recorded from live sandbox builds.</span>
          </div>
        </div>

        {/* Right Side: Mock Video Player Container */}
        <div className="glass-panel rounded-3xl bg-slate-950/70 border border-white/[0.06] shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col justify-between relative z-10 group/player">
          
          {/* Main Viewport */}
          <div className="w-full flex-1 aspect-video relative overflow-hidden bg-slate-900">
            {/* Poster / Background Image */}
            <img 
              src={activeVideo.poster} 
              alt={activeVideo.title} 
              className={`w-full h-full object-cover opacity-30 transition-transform duration-1000 ${isPlaying ? "scale-105" : "scale-100"}`} 
            />
            
            {/* Cinematic Scanlines & Overlay Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/20 via-transparent to-white/[0.02] pointer-events-none" />

            {/* Glowing Stats Badges Inside Viewport */}
            <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2.5 z-20">
              {activeVideo.overlayStats.map((stat, i) => (
                <div key={i} className="bg-slate-950/90 border border-white/[0.08] backdrop-blur-md rounded-lg px-3 py-1.5 flex flex-col shadow-2xl">
                  <span className="text-[8px] text-slate-400 uppercase tracking-wide">{stat.label}</span>
                  <span className="text-xs font-extrabold text-white mt-0.5">{stat.val}</span>
                </div>
              ))}
            </div>

            {/* 3D Animations overlay based on play state */}
            {isPlaying && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-950/30 backdrop-blur-[0.5px] z-10 pointer-events-none">
                <div className="flex items-center gap-1.5 text-xs text-purple-400 font-bold bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full animate-pulse shadow-glow">
                  <Sparkles className="w-3.5 h-3.5" /> Deployed pipeline running...
                </div>
                
                {/* Animate floating abstract elements in HD player to look like a live video */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-slate-900/60 border border-white/[0.05] rounded-xl p-3 flex flex-col gap-2 shadow-2xl overflow-hidden font-mono text-[9px] text-cyan-400">
                  <div className="animate-pulse text-slate-500">// STREAMING TECHNICAL AUDIT GRAPH</div>
                  <div className="flex items-end gap-1 flex-1">
                    {[30, 45, 60, 35, 70, 80, 50, 95, 85, 100, 60, 40, 75, 90, 85, 65, 80, 100].map((h, i) => {
                      const isActive = progress >= (i * (100 / 18));
                      return (
                        <div 
                          key={i} 
                          className={`flex-1 rounded-t transition-all duration-300 ${
                            isActive ? "bg-gradient-to-t from-cyan-400 to-indigo-500 opacity-90" : "bg-slate-800 opacity-30"
                          }`}
                          style={{ height: `${h * (isPlaying ? 0.75 : 0.4)}%` }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Play/Pause Large Center Trigger */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-white/5 border border-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/30 shadow-2xl active:scale-95"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
              </button>
            </div>

          </div>

          {/* Player controls */}
          <div className="bg-slate-900 border-t border-white/[0.06] p-4 flex flex-col gap-3.5 relative z-20">
            
            {/* Scrubber Timeline Bar */}
            <div className="flex items-center gap-3">
              <span className="text-[9px] text-slate-400 font-mono select-none">
                0:{progress < 10 ? `0${Math.floor(progress * 0.18)}` : Math.floor(progress * 0.18)}
              </span>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress} 
                onChange={handleTimelineChange}
                className="flex-1 accent-purple-500 h-1 bg-slate-800 rounded-full cursor-pointer hover:h-1.5 transition-all" 
              />
              <span className="text-[9px] text-slate-400 font-mono select-none">{activeVideo.duration}</span>
            </div>

            {/* Media controllers */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-slate-400 hover:text-white transition"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setProgress(0)}
                  className="text-slate-400 hover:text-white transition"
                  aria-label="Restart"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
                
                {/* Volume slider */}
                <div className="flex items-center gap-2 ml-2">
                  <Volume2 className="w-4 h-4 text-slate-400" />
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume} 
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    className="w-16 accent-slate-400 h-1 bg-slate-800 rounded-full" 
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-black uppercase px-2 py-0.5 rounded font-mono select-none">
                  1080p HD
                </span>
                <button className="text-slate-400 hover:text-white transition">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
