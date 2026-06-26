import { useEffect, useRef, useState } from "react";
import { Users, Globe, Target, Award } from "lucide-react";

const STATS = [
  { value: 100, suffix: "+", label: "Happy Clients", icon: <Users className="w-6 h-6 text-white" />, orange: true },
  { value: 2019, suffix: "", label: "Established", icon: <Globe className="w-6 h-6 text-white" />, orange: false },
  { value: 150, suffix: "+", label: "Complete Projects", icon: <Target className="w-6 h-6 text-white" />, orange: true },
  { value: 20, suffix: "+", label: "Winning Awards", icon: <Award className="w-6 h-6 text-white" />, orange: false },
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

const StatItem = ({ value, suffix, label, icon, orange, started }: typeof STATS[0] & { started: boolean }) => {
  const count = useCountUp(value, 2200, started);
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl px-6 py-5" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.07)" }}>
      {/* Circular icon */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: orange ? "#eb560c" : "#002b49" }}
      >
        {icon}
      </div>
      {/* Number + label */}
      <div>
        <div
          className="font-jost font-bold text-4xl leading-none"
          style={{ color: "#002b49" }}
        >
          {count}{suffix}
        </div>
        <div className="text-gray-500 text-sm mt-1">{label}</div>
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
    <section ref={ref} className="py-14" style={{ background: "#eef0f5" }}>
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
