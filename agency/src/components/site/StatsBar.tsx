import { useEffect, useRef, useState } from "react";
import { Users, Globe, Target, Award } from "lucide-react";

const STATS = [
  { value: 800, suffix: "+", label: "Happy Clients", icon: <Users className="w-6 h-6 text-white" /> },
  { value: 2024, suffix: "", label: "Established", icon: <Globe className="w-6 h-6 text-white" /> },
  { value: 1000, suffix: "+", label: "Projects Completed", icon: <Target className="w-6 h-6 text-white" /> },
  { value: 100, suffix: "+", label: "Awards Won", icon: <Award className="w-6 h-6 text-white" /> },
];

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

const StatItem = ({ value, suffix, label, icon, started }: typeof STATS[0] & { started: boolean }) => {
  const count = useCountUp(value, 2200, started);
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-6 border border-zinc-100 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-hover)]">
      {/* Icon circle — indigo gradient */}
      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-indigo-500 to-violet-600 shadow-[0_4px_14px_rgba(99,102,241,0.2)]">
        {icon}
      </div>
      {/* Number + label */}
      <div>
        <div className="font-bold text-3xl lg:text-4xl leading-none text-zinc-900 tracking-tight">
          {count}{suffix}
        </div>
        <div className="text-zinc-500 text-sm mt-1 font-medium">{label}</div>
      </div>
    </div>
  );
};

export const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};
