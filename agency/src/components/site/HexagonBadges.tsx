import React from "react";

export const HexagonBadges = () => {
  const badgeImages = [
    {
      src: "/badges/badge_webdesign.jpg",
      alt: "Top Web Design Company WebsBond Delhi NCR 2026",
      title: "Top Web Design Company"
    },
    {
      src: "/badges/badge_aipowered.jpg",
      alt: "AI Powered AI Automation Smart Solutions",
      title: "AI Powered Smart Solutions"
    },
    {
      src: "/badges/badge_fullservice.jpg",
      alt: "Top Full Service Digital Company WebsBond Delhi 2026",
      title: "Top Full Service Agency"
    },
    {
      src: "/badges/badge_speed100.jpg",
      alt: "100/100 Speed Lighthouse Audit WebsBond",
      title: "100/100 Speed Audit"
    },
    {
      src: "/badges/badge_topseo.jpg",
      alt: "Top SEO Company Rank #1 Focus",
      title: "Top SEO Company"
    }
  ];

  return (
    <div className="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-4 md:gap-5 my-6 sm:my-8 w-full max-w-5xl mx-auto px-2 select-none overflow-x-auto no-scrollbar">
      {badgeImages.map((badge, idx) => (
        <div
          key={idx}
          className="group relative flex items-center justify-center w-[62px] xs:w-[72px] sm:w-[120px] md:w-[135px] shrink-0 sm:shrink transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          <img
            src={badge.src}
            alt={badge.alt}
            title={badge.title}
            className="w-full h-auto object-contain rounded-xl sm:rounded-2xl filter drop-shadow-md group-hover:drop-shadow-2xl group-hover:-translate-y-1 transition-all duration-300"
            loading="eager"
          />
        </div>
      ))}
    </div>
  );
};

export default HexagonBadges;

