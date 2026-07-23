import React from "react";
import { Link } from "react-router-dom";

export const HexagonBadges = () => {
  const serviceBadges = [
    {
      src: "/badges/badge_webdesign.png",
      alt: "WebsBond Custom Web & E-Commerce Development Service",
      title: "Web & E-Commerce Development",
      link: "/website-design-service-in-delhi"
    },
    {
      src: "/badges/badge_aipowered.png",
      alt: "WebsBond Smart AI & Workflow Automation Solutions",
      title: "AI & Automation Solutions",
      link: "/digital-marketing-services"
    },
    {
      src: "/badges/badge_fullservice.png",
      alt: "WebsBond High ROI Performance PPC & Google Ads Services",
      title: "Performance PPC & Google Ads",
      link: "/google-ads-services"
    },
    {
      src: "/badges/badge_speed100.png",
      alt: "WebsBond Rank #1 SEO & Organic Search Dominance",
      title: "SEO & Organic Search Dominance",
      link: "/seo-service-in-delhi"
    },
    {
      src: "/badges/badge_topseo.png",
      alt: "WebsBond 360° Digital Marketing & Brand Strategy Services",
      title: "360° Digital Marketing & Branding",
      link: "/digital-marketing-agency"
    }
  ];

  return (
    <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 md:gap-6 my-6 sm:my-8 w-full max-w-5xl mx-auto px-2 select-none overflow-x-auto no-scrollbar">
      {serviceBadges.map((badge, idx) => (
        <Link
          key={idx}
          to={badge.link}
          className="group relative flex items-center justify-center w-[65px] xs:w-[76px] sm:w-[125px] md:w-[140px] shrink-0 sm:shrink transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={badge.src}
            alt={badge.alt}
            title={badge.title}
            className="w-full h-auto object-contain rounded-xl sm:rounded-2xl filter drop-shadow-md group-hover:drop-shadow-2xl group-hover:-translate-y-1.5 transition-all duration-300"
            loading="eager"
          />
        </Link>
      ))}
    </div>
  );
};

export default HexagonBadges;
