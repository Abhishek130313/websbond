import { ReactNode, useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return "dark"; // default to dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300 relative overflow-hidden">
      {/* ── Global Background Aesthetic Enhancements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Shifting background glows/orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] max-w-[500px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] animate-aurora-1" />
        <div className="absolute top-[40%] right-[-15%] w-[40vw] h-[40vw] max-w-[650px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[150px] animate-aurora-2" />
        <div className="absolute bottom-[20%] left-[-12%] w-[35vw] h-[35vw] max-w-[550px] rounded-full bg-cyan-500/4 dark:bg-cyan-500/8 blur-[130px] animate-aurora-3" />
        
        {/* Subtle grid mesh overlays repeating vertically to fill full scrolling height */}
        <div className="absolute inset-0 grid-mesh opacity-[0.03] dark:opacity-[0.05]" />
        
        {/* Floating tech nodes / particle graphics */}
        <div className="absolute top-[25%] left-[8%] w-1.5 h-1.5 bg-indigo-500/40 rounded-full animate-ping" />
        <div className="absolute top-[65%] right-[12%] w-2 h-2 bg-purple-500/30 rounded-full animate-ping" style={{ animationDuration: "3.5s" }} />
        <div className="absolute bottom-[35%] left-[15%] w-1 h-1 bg-cyan-500/50 rounded-full animate-pulse" />
        <div className="absolute top-[80%] left-[20%] w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-pulse" style={{ animationDuration: "4.5s" }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer theme={theme} />
        <WhatsAppButton />
      </div>
    </div>
  );
};
