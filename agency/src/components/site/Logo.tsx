import { Link } from "react-router-dom";
import officialLogo from "@/assets/websbond-official-2026-logo.webp";

type LogoProps = {
  light?: boolean;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
};

const heightMap: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-9 sm:h-10",
  md: "h-11 sm:h-13",
  lg: "h-15 sm:h-17",
};

export const Logo = ({ size = "md" }: LogoProps) => (
  <Link
    to="/"
    aria-label="Websbond home"
    className="inline-flex items-center group focus:outline-none select-none py-0.5"
  >
    <img
      src={officialLogo}
      alt="Websbond - Connecting Visions, Creating Realities"
      loading="eager"
      decoding="async"
      className={`${heightMap[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_1.5px_4px_rgba(20,10,50,0.15)]`}
    />
  </Link>
);




