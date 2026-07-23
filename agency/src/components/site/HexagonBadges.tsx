import React from "react";

export const HexagonBadges = () => {
  const badgeImages = [
    {
      src: "/badges/badge_webdesign.jpg",
      alt: "Top Web Design Company WebsBond Delhi NCR 2026",
      title: "Top Web Design Company"
    },
    {
      src: "/badges/badge_googlepartner.jpg",
      alt: "Google Partner Verified Agency",
      title: "Google Partner"
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
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 my-8 max-w-4xl mx-auto px-4 select-none">
      {badgeImages.map((badge, idx) => (
        <div
          key={idx}
          className="group relative flex items-center justify-center w-[100px] sm:w-[125px] md:w-[135px] transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          <img
            src={badge.src}
            alt={badge.alt}
            title={badge.title}
            className="w-full h-auto object-contain rounded-2xl drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300 mix-blend-multiply"
            loading="eager"
          />
        </div>
      ))}
    </div>
  );
};

export default HexagonBadges;

