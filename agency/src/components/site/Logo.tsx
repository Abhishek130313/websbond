import { Link } from "react-router-dom";
import logo3d from "@/assets/websbond-logo-3d.webp";

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
    className="inline-flex items-center gap-2.5 group focus:outline-none"
  >
    <span
      className={`inline-flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 ${
        light ? "border border-zinc-200/60 bg-white shadow-sm" : "border border-white/10 bg-[#09090b]"
      }`}
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
    <span className="font-semibold tracking-tight text-lg sm:text-xl flex items-center">
      <span className={`${light ? "text-zinc-900" : "text-white"} transition-colors`}>websbond</span>
      <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">.com</span>
    </span>
  </Link>
);
