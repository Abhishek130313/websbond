import { Link } from "react-router-dom";
import logo3d from "@/assets/websbond-logo-3d.png";

type LogoProps = {
  light?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeMap: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-8 w-8 sm:h-9 sm:w-9",
  md: "h-9 w-9 sm:h-10 sm:w-10",
  lg: "h-12 w-12 sm:h-14 sm:w-14",
};

export const Logo = ({ light = false, size = "md" }: LogoProps) => (
  <Link
    to="/"
    aria-label="Websbond home"
    className="inline-flex items-center gap-3 group focus:outline-none"
  >
    <span
      className={`inline-flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] ${
        light ? "border border-white/10" : "border border-white/5 shadow-sm"
      }`}
      style={{ background: "#0a0f1c" }}
    >
      <img
        src={logo3d}
        alt="Websbond logo"
        width={128}
        height={128}
        loading="eager"
        decoding="async"
        className={`${sizeMap[size]} object-contain p-1`}
      />
    </span>
    <span className="font-display font-bold tracking-tight text-lg sm:text-xl md:text-2xl flex items-center">
      <span className={`${light ? "text-slate-900 group-hover:text-slate-800" : "text-white group-hover:text-white/90"} transition-colors`}>websbond</span>
      <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">.com</span>
    </span>
  </Link>
);

