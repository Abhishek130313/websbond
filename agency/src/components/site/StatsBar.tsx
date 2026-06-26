import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const STATS: StatItem[] = [
  { value: 100, suffix: "+", label: "Happy Clients", icon: "😊" },
  { value: 150, suffix: "+", label: "Projects Delivered", icon: "🚀" },
  { value: 5,   suffix: "+", label: "Years Experience", icon: "🏆" },
  { value: 10,  suffix: "+", label: "Countries Served", icon: "🌍" },
];

function useCountUp(target: number, duration: number = 2000, started: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

const StatCounter = ({ value, suffix, label, icon, started }: StatItem & { started: boolean }) => {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="text-center px-6 py-8 group">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="flex items-end justify-center gap-0.5 mb-1">
        <span
          className="font-jost font-bold leading-none"
          style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "#eb560c" }}
        >
          {count}
        </span>
        <span
          className="font-jost font-bold text-3xl mb-1"
          style={{ color: "#eb560c" }}
        >
          {suffix}
        </span>
      </div>
      <p className="text-white/80 text-sm font-medium font-kumbh uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
};

export const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-2"
      style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#eb560c" }} />

      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} started={started} />
          ))}
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-30" style={{ background: "#eb560c" }} />
    </section>
  );
};
