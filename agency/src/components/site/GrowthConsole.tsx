import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Cpu, ArrowUpRight, TrendingUp, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface CampaignData {
  name: string;
  industry: string;
  leftStats: { value: string; label: string }[];
  kpis: {
    visitors: string;
    leads: string;
    conversion: string;
  };
  chartPath: string;
  pieSectors: { label: string; percentage: number; color: string; offset: number }[];
  logs: string[];
}

const campaigns: Record<string, CampaignData> = {
  zara: {
    name: "Zara Luxe Fashion",
    industry: "E-Commerce Retailer",
    leftStats: [
      { value: "+240%", label: "Conversion Rate increase" },
      { value: "0.24s", label: "Lighthouse FCP Speed load" },
      { value: "124", label: "Monthly online orders" }
    ],
    kpis: {
      visitors: "42.8K",
      leads: "2,490",
      conversion: "5.8%"
    },
    chartPath: "M 0 60 Q 20 40 40 55 T 80 20 T 120 45 T 160 10 T 200 5",
    pieSectors: [
      { label: "Google Organic", percentage: 55, color: "#10b981", offset: 0 },
      { label: "Meta Paid Ads", percentage: 30, color: "#6366f1", offset: 55 },
      { label: "Direct Referral", percentage: 15, color: "#f59e0b", offset: 85 }
    ],
    logs: [
      "User session added leather boot item to cart...",
      "API payload dispatched to Payment Gateway server...",
      "Conversion Pixel tracked success event successfully...",
      "Indore fulfillment system updated stock parameters!"
    ]
  },
  kearney: {
    name: "Kearney Partners",
    industry: "Corporate Consulting",
    leftStats: [
      { value: "Rank #1", label: "Google Search Position" },
      { value: "99/100", label: "Mobile Performance Rating" },
      { value: "480+", label: "Qualified leads collected" }
    ],
    kpis: {
      visitors: "14.2K",
      leads: "1,240",
      conversion: "8.7%"
    },
    chartPath: "M 0 50 Q 20 52 40 30 T 80 35 T 120 15 T 160 8 T 200 2",
    pieSectors: [
      { label: "Google Organic", percentage: 70, color: "#10b981", offset: 0 },
      { label: "Direct Traffic", percentage: 20, color: "#6366f1", offset: 70 },
      { label: "LinkedIn Ads", percentage: 10, color: "#f59e0b", offset: 90 }
    ],
    logs: [
      "Visitor downloaded advisory capability blueprint PDF...",
      "Google Search Console scanned core Web Vitals - OK...",
      "Lead synchronization with Hubspot CRM - Successful...",
      "WhatsApp direct api redirected client consultation request!"
    ]
  },
  taj: {
    name: "Taj Spice Bistro",
    industry: "Restaurant Chain",
    leftStats: [
      { value: "+400%", label: "Table booking rate increase" },
      { value: "100%", label: "Desktop Lighthouse score" },
      { value: "840+", label: "Inbound orders dispatched" }
    ],
    kpis: {
      visitors: "28.4K",
      leads: "3,180",
      conversion: "11.2%"
    },
    chartPath: "M 0 65 Q 20 60 40 40 T 80 48 T 120 18 T 160 12 T 200 4",
    pieSectors: [
      { label: "Google Maps Local", percentage: 60, color: "#10b981", offset: 0 },
      { label: "Instagram SEO", percentage: 25, color: "#6366f1", offset: 60 },
      { label: "Email Campaign", percentage: 15, color: "#f59e0b", offset: 85 }
    ],
    logs: [
      "Table reservation request for 4 guests received...",
      "Booking confirmation dispatch trigger executed...",
      "Local Map SEO rankings updated for indore bistro terms...",
      "Daily revenue report generated and emailed to admin dashboard!"
    ]
  }
};

export const GrowthConsole = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<keyof typeof campaigns>("zara");
  const activeData = campaigns[selectedCampaign];

  return (
    <section className="container py-24 md:py-32 relative mx-auto px-4">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[400px] rounded-full blur-[130px] pointer-events-none opacity-45 bg-gradient-to-tr from-cyan-500/10 via-purple-500/15 to-orange-500/10" />

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center max-w-6xl mx-auto relative z-10">
        
        {/* Left Side: Copy and Controls */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-indigo-700 dark:text-white font-semibold text-[11px] uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Cpu className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 animate-pulse" /> Live Growth Engine
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              Real-time results, <br />
              <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">
                backed by hard data.
              </span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              We design digital systems built for conversion. Select one of our active client projects below to inspect live analytics indicators, conversion channels, and data flow logs.
            </p>
          </div>

          {/* Bulleted Metric list */}
          <div className="space-y-3 border-t border-b border-slate-200/60 dark:border-white/[0.06] py-6">
            {activeData.leftStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" strokeWidth={3.5} />
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">
                  {stat.value} <span className="text-slate-500 dark:text-slate-400 font-normal">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Triggers */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500">Choose Project Console:</span>
            <div className="grid grid-cols-3 gap-2.5">
              {(Object.keys(campaigns) as Array<keyof typeof campaigns>).map((key) => {
                const isSelected = selectedCampaign === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCampaign(key)}
                    className={`py-3 px-2 text-center rounded-xl border text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-all ${
                      isSelected
                        ? "bg-indigo-500/15 border-indigo-500 text-indigo-700 dark:text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                        : "bg-slate-100 dark:bg-white/[0.015] border-slate-200 dark:border-white/[0.05] text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/15 hover:bg-slate-200/50 dark:hover:bg-white/[0.03]"
                    }`}
                  >
                    {campaigns[key].name.split(" ")[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA Link */}
          <div>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            >
              View Case Studies Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Side: Interactive Analytical Dashboard */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 bg-slate-950/70 border border-white/[0.06] flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          {/* Dashboard Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[10px] font-bold text-slate-400 font-mono">
                KPI MONITOR // {activeData.name.toUpperCase()}
              </span>
            </div>
            <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase font-mono">
              System: Active
            </span>
          </div>

          {/* Top Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-3.5 text-center">
              <span className="text-[9px] text-slate-400 uppercase block font-bold">Total Visitors</span>
              <span className="text-lg md:text-xl font-display font-black text-white font-mono block mt-1">
                {activeData.kpis.visitors}
              </span>
            </div>
            <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-3.5 text-center">
              <span className="text-[9px] text-slate-400 uppercase block font-bold">Total Leads</span>
              <span className="text-lg md:text-xl font-display font-black text-white font-mono block mt-1">
                {activeData.kpis.leads}
              </span>
            </div>
            <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-3.5 text-center">
              <span className="text-[9px] text-slate-400 uppercase block font-bold">Conv. Rate</span>
              <span className="text-lg md:text-xl font-display font-black text-emerald-400 font-mono block mt-1">
                {activeData.kpis.conversion}
              </span>
            </div>
          </div>

          {/* Animated SVG Traffic growth Line Chart */}
          <div className="bg-slate-900/40 border border-white/[0.04] rounded-xl p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Weekly Traffic Growth</span>
              <span>Lighthouse Verified</span>
            </div>
            <div className="relative h-28 w-full">
              <svg className="w-full h-full" viewBox="0 0 200 70" preserveAspectRatio="none">
                {/* Grid guidelines */}
                <line x1="0" y1="15" x2="200" y2="15" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="35" x2="200" y2="35" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="55" x2="200" y2="55" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                {/* Animated Chart path */}
                <path 
                  d={activeData.chartPath} 
                  fill="none" 
                  stroke="url(#chart-line-gradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  className="animate-chart-dash"
                />
                
                {/* Gradients definitions */}
                <defs>
                  <linearGradient id="chart-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between items-center text-[8px] text-slate-400 font-mono mt-2">
              <span>MON</span>
              <span>WED</span>
              <span>FRI</span>
              <span>SUN (TODAY)</span>
            </div>
          </div>

          {/* Bottom Row: Traffic source Pie Chart & Live Console logs */}
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-4">
            {/* Pie Chart SVG Panel */}
            <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-4 flex flex-col justify-between items-center text-center">
              <span className="text-[9px] text-slate-400 uppercase font-bold block mb-2">Traffic Channels</span>
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Sector segments drawn as circle stroke-dasharrays */}
                  {activeData.pieSectors.map((sec, i) => (
                    <circle
                      key={i}
                      cx="18"
                      cy="18"
                      r="15.915"
                      fill="none"
                      stroke={sec.color}
                      strokeWidth="3.2"
                      strokeDasharray={`${sec.percentage} ${100 - sec.percentage}`}
                      strokeDashoffset={100 - sec.offset}
                      className="transition-all duration-700"
                    />
                  ))}
                </svg>
                {/* Center hole to create donut chart */}
                <div className="absolute w-12 h-12 rounded-full bg-slate-950 flex flex-col justify-center items-center">
                  <span className="text-[10px] font-black text-white font-mono">{activeData.pieSectors[0].percentage}%</span>
                  <span className="text-[6px] text-slate-400 font-bold uppercase tracking-wider">Top Src</span>
                </div>
              </div>
              <div className="space-y-1 mt-2.5 w-full text-left">
                {activeData.pieSectors.map((sec, i) => (
                  <div key={i} className="flex items-center justify-between text-[8px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sec.color }} />
                      <span className="text-slate-400 font-bold">{sec.label}</span>
                    </div>
                    <span className="text-white font-mono font-bold">{sec.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Terminal logs */}
            <div className="bg-slate-950 border border-white/[0.05] rounded-xl p-4 flex flex-col justify-between min-h-[140px] font-mono text-[9px] text-indigo-400">
              <div className="space-y-1.5 select-none">
                <div className="text-slate-400">// INTEGRATION EVENT PIPELINE</div>
                {activeData.logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-1.5 leading-relaxed">
                    <span className="text-slate-500 shrink-0">[{14 + i}:12]</span>
                    <span className={i === activeData.logs.length - 1 ? "text-emerald-400 font-bold" : "text-slate-300"}>
                      {i === activeData.logs.length - 1 ? "✓ " : "• "} {log}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-[8px] text-slate-500 flex justify-between border-t border-white/[0.04] pt-2 mt-2">
                <span>TERMINAL: OK</span>
                <span>STREAM ACTIVE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
