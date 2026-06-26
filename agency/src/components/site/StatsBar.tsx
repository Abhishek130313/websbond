import { Zap, MessageSquare, ShieldCheck, GitBranch, Sparkles, FileText } from "lucide-react";

interface StatItem {
  icon: any;
  value: string;
  label: string;
  color: string;
  sparkline?: React.ReactNode;
}

const stats: StatItem[] = [
  { 
    icon: Zap, 
    value: "100%", 
    label: "Speed Guarantee", 
    color: "text-rose-500 bg-rose-500/10 dark:text-rose-400 dark:bg-rose-500/10",
    sparkline: (
      <svg className="w-12 h-6 text-rose-500 dark:text-rose-400" viewBox="0 0 100 30" fill="none">
        <path d="M0 25C15 23 30 18 45 15C60 12 75 5 100 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    icon: MessageSquare, 
    value: "Direct", 
    label: "Developer Chat", 
    color: "text-emerald-500 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/10",
    sparkline: (
      <svg className="w-12 h-6 text-emerald-500 dark:text-emerald-400" viewBox="0 0 100 30" fill="none">
        <path d="M0 10C20 8 40 8 60 5C80 2 90 4 100 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    icon: ShieldCheck, 
    value: "0%", 
    label: "Upfront payment", 
    color: "text-blue-500 bg-blue-500/10 dark:text-blue-400 dark:bg-blue-500/10",
    sparkline: (
      <svg className="w-12 h-6 text-blue-500 dark:text-blue-400" viewBox="0 0 100 30" fill="none">
        <path d="M0 28C20 28 40 25 60 18C80 12 90 5 100 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    icon: GitBranch, 
    value: "100%", 
    label: "Code Ownership", 
    color: "text-amber-500 bg-amber-500/10 dark:text-amber-400 dark:bg-amber-500/10",
    sparkline: (
      <svg className="w-12 h-6 text-amber-500 dark:text-amber-400" viewBox="0 0 100 30" fill="none">
        <path d="M0 15C10 15 20 5 30 25C40 25 50 5 60 25C70 25 80 5 90 25C95 25 100 15 100 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    icon: Sparkles, 
    value: "Bespoke", 
    label: "Hand-Crafted Code", 
    color: "text-cyan-500 bg-cyan-500/10 dark:text-cyan-400 dark:bg-cyan-500/10",
    sparkline: (
      <svg className="w-12 h-6 text-cyan-500 dark:text-cyan-400" viewBox="0 0 100 30" fill="none">
        <path d="M0 5C15 8 30 15 45 18C60 22 75 25 100 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    icon: FileText, 
    value: "Free", 
    label: "Technical Audit", 
    color: "text-orange-500 bg-orange-500/10 dark:text-orange-400 dark:bg-orange-500/10",
    sparkline: (
      <svg className="w-12 h-6 text-orange-500 dark:text-orange-400" viewBox="0 0 100 30" fill="none">
        <path d="M0 20 L25 10 L50 22 L75 5 L100 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
];

export const StatsBar = () => (
  <section className="container py-12 relative overflow-hidden mx-auto px-4">
    {/* Ambient background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[120px] rounded-full blur-[80px] pointer-events-none opacity-40 dark:opacity-50 bg-gradient-to-r from-amber-500/10 via-amber-600/15 to-orange-500/10" />
    
    <div className="glass-panel border-slate-200/80 dark:border-white/[0.06] rounded-3xl overflow-hidden relative z-10 shadow-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y divide-x divide-slate-200/80 dark:divide-white/[0.06] border-collapse">
        {stats.map(({ icon: Icon, value, label, color, sparkline }, index) => (
          <div 
            key={label}
            className={`p-6 flex flex-col justify-between gap-4 transition-all duration-300 hover:bg-slate-500/[0.03] dark:hover:bg-white/[0.02] group ${
              index % 2 === 0 ? "border-l-0" : ""
            } ${index < 2 ? "border-t-0" : ""} md:${index < 3 ? "border-t-0" : ""} lg:border-t-0 lg:border-l`}
          >
            <div className="flex items-center gap-3.5">
              <div className={`w-10 h-10 rounded-xl grid place-items-center shrink-0 ${color} transition-all duration-300 group-hover:scale-110`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-xl lg:text-2xl text-foreground tracking-tight">{value}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[10px] lg:text-xs text-muted-foreground mt-0.5 font-semibold leading-tight">{label}</div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-200/60 dark:border-white/[0.04] pt-2.5 opacity-65 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[9px] text-muted-foreground font-mono">LIVE TRACKING</span>
              {sparkline}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
