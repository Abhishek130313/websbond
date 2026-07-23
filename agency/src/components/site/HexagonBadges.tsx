import React from "react";

export const HexagonBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 my-8 max-w-4xl mx-auto px-4 select-none">
      
      {/* Badge 1: Top Web Design Company */}
      <div className="relative w-[110px] sm:w-[130px] h-[125px] sm:h-[145px] transition-transform duration-300 hover:scale-105 filter drop-shadow-xs">
        <svg viewBox="0 0 120 135" className="w-full h-full">
          {/* Hexagon Outer Border & Background */}
          <polygon 
            points="60,4 114,35 114,100 60,131 6,100 6,35" 
            fill="#FFFFFF" 
            stroke="#CBD5E1" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
          />
          <polygon 
            points="60,8 110,37 110,98 60,127 10,98 10,37" 
            fill="#FFFFFF" 
            stroke="#E2E8F0" 
            strokeWidth="1.5" 
            strokeLinejoin="round" 
          />

          {/* Top Text */}
          <text x="60" y="24" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="800" letterSpacing="0.5">
            TOP
          </text>
          <text x="60" y="32" textAnchor="middle" fill="#1E293B" fontSize="7.5" fontWeight="900" letterSpacing="0.3">
            WEB DESIGN
          </text>
          <text x="60" y="40" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="700">
            COMPANY
          </text>

          {/* Lines Around Top Text */}
          <line x1="22" y1="28" x2="38" y2="28" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="82" y1="28" x2="98" y2="28" stroke="#CBD5E1" strokeWidth="1" />

          {/* Center Dark Bar (Clutch Style) */}
          <rect x="14" y="48" width="92" height="34" rx="4" fill="#1E293B" />
          <text x="60" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            WebsBond
          </text>
          <circle cx="94" cy="62" r="2" fill="#FF4500" />

          {/* Bottom Footer Text */}
          <text x="60" y="96" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="800" letterSpacing="0.8">
            DELHI NCR
          </text>
          <text x="60" y="108" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="900">
            2026
          </text>
        </svg>
      </div>

      {/* Badge 2: Google Partner Verified Agency */}
      <div className="relative w-[110px] sm:w-[130px] h-[125px] sm:h-[145px] transition-transform duration-300 hover:scale-105 filter drop-shadow-xs">
        <svg viewBox="0 0 120 135" className="w-full h-full">
          {/* Hexagon Frame */}
          <polygon 
            points="60,4 114,35 114,100 60,131 6,100 6,35" 
            fill="#FFFFFF" 
            stroke="#94A3B8" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
          />

          {/* Multi-color Google G Icon */}
          <g transform="translate(44, 18) scale(1.35)">
            <path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h5.9c-.3 1.4-1 2.6-2.2 3.4v2.8h3.6c2.1-1.9 3.2-4.8 3.2-8.4z"/>
            <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.3 1.1-3.7 1.1-2.8 0-5.2-1.9-6.1-4.5H2.2v2.9C4 20.6 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.9 14.1c-.2-.7-.4-1.4-.4-2.1s.2-1.4.4-2.1V7H2.2C1.4 8.5 1 10.2 1 12s.4 3.5 1.2 5l3.7-2.9z"/>
            <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2C17.5 2.1 15 1.2 12 1.2 7.7 1.2 4 3.6 2.2 7.1l3.7 2.9c.9-2.6 3.3-4.6 6.1-4.6z"/>
          </g>

          {/* Text: Google Partner */}
          <text x="60" y="66" textAnchor="middle" fill="#1E293B" fontSize="10.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">
            Google
          </text>
          <text x="60" y="79" textAnchor="middle" fill="#1E293B" fontSize="10.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">
            Partner
          </text>

          {/* Subtitle Line */}
          <line x1="25" y1="88" x2="95" y2="88" stroke="#CBD5E1" strokeWidth="1" />
          <text x="60" y="103" textAnchor="middle" fill="#475569" fontSize="7" fontWeight="800" letterSpacing="0.6">
            VERIFIED AGENCY
          </text>
        </svg>
      </div>

      {/* Badge 3: Top Full Service Digital Company */}
      <div className="relative w-[110px] sm:w-[130px] h-[125px] sm:h-[145px] transition-transform duration-300 hover:scale-105 filter drop-shadow-xs">
        <svg viewBox="0 0 120 135" className="w-full h-full">
          <polygon 
            points="60,4 114,35 114,100 60,131 6,100 6,35" 
            fill="#FFFFFF" 
            stroke="#CBD5E1" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
          />
          <polygon 
            points="60,8 110,37 110,98 60,127 10,98 10,37" 
            fill="#FFFFFF" 
            stroke="#E2E8F0" 
            strokeWidth="1.5" 
            strokeLinejoin="round" 
          />

          <text x="60" y="24" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="800" letterSpacing="0.5">
            TOP
          </text>
          <text x="60" y="32" textAnchor="middle" fill="#1E293B" fontSize="7" fontWeight="900" letterSpacing="0.2">
            FULL SERVICE
          </text>
          <text x="60" y="40" textAnchor="middle" fill="#475569" fontSize="6" fontWeight="800">
            DIGITAL COMPANY
          </text>

          <rect x="14" y="48" width="92" height="34" rx="4" fill="#1E293B" />
          <text x="60" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            WebsBond
          </text>
          <circle cx="94" cy="62" r="2" fill="#FF4500" />

          <text x="60" y="96" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="800" letterSpacing="0.8">
            DELHI
          </text>
          <text x="60" y="108" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="900">
            2026
          </text>
        </svg>
      </div>

      {/* Badge 4: Clutch Global Winner (Dark Hexagon + Mint Ribbon) */}
      <div className="relative w-[110px] sm:w-[130px] h-[125px] sm:h-[145px] transition-transform duration-300 hover:scale-105 filter drop-shadow-xs">
        <svg viewBox="0 0 120 135" className="w-full h-full">
          {/* Dark Background Hexagon */}
          <polygon 
            points="60,4 114,35 114,100 60,131 6,100 6,35" 
            fill="#1E293B" 
            stroke="#334155" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
          />

          <text x="60" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif">
            Clutch
          </text>
          <circle cx="86" cy="32" r="2" fill="#FF4500" />

          {/* Transversal Mint Green Ribbon */}
          <polygon points="2,54 118,54 114,76 6,76" fill="#6EE7B7" />
          <text x="60" y="69" textAnchor="middle" fill="#0F172A" fontSize="10.5" fontWeight="900" letterSpacing="1 font-sans">
            GLOBAL
          </text>

          <text x="60" y="96" textAnchor="middle" fill="#CBD5E1" fontSize="7.5" fontWeight="800" letterSpacing="0.5">
            SPRING
          </text>
          <text x="60" y="108" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900">
            2024
          </text>
        </svg>
      </div>

      {/* Badge 5: Top SEO Company */}
      <div className="relative w-[110px] sm:w-[130px] h-[125px] sm:h-[145px] transition-transform duration-300 hover:scale-105 filter drop-shadow-xs">
        <svg viewBox="0 0 120 135" className="w-full h-full">
          <polygon 
            points="60,4 114,35 114,100 60,131 6,100 6,35" 
            fill="#FFFFFF" 
            stroke="#CBD5E1" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
          />
          <polygon 
            points="60,8 110,37 110,98 60,127 10,98 10,37" 
            fill="#FFFFFF" 
            stroke="#E2E8F0" 
            strokeWidth="1.5" 
            strokeLinejoin="round" 
          />

          <text x="60" y="25" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="800" letterSpacing="0.5">
            TOP
          </text>
          <text x="60" y="35" textAnchor="middle" fill="#1E293B" fontSize="8" fontWeight="900" letterSpacing="0.3">
            SEO COMPANY
          </text>

          <rect x="14" y="48" width="92" height="34" rx="4" fill="#1E293B" />
          <text x="60" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            WebsBond
          </text>
          <circle cx="94" cy="62" r="2" fill="#FF4500" />

          <text x="60" y="96" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="800" letterSpacing="0.8">
            DELHI
          </text>
          <text x="60" y="108" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="900">
            2026
          </text>
        </svg>
      </div>

    </div>
  );
};

export default HexagonBadges;
