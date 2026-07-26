import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { 
  Send, Phone, ChevronDown, CheckCircle2, User, Mail, Lock,
  Search, MousePointerClick, Share2, Target, FileText, 
  ShieldCheck, TrendingUp, Sparkles, Building2, Stethoscope, 
  Briefcase, ShoppingBag, GraduationCap, Scale, Cpu, Loader2,
  Star, Rocket, ArrowRight, HelpCircle, Utensils, Store, Calendar, Globe, Users, MessageSquare,
  HeartHandshake, Heart, Landmark, IndianRupee
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/api";
import { Link } from "react-router-dom";

/* ========================================================================= */
/* 5 FULL-WIDTH 3D METALLIC VECTOR SVG HEXAGON BADGES WITH BALANCED SPACING */
/* ========================================================================= */
const HexagonBadgeClutch = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto max-w-[76px] sm:max-w-[84px] md:max-w-[90px] filter drop-shadow-xl hover:scale-105 transition-transform cursor-pointer shrink-0">
    <defs>
      <linearGradient id="clutch3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="50%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="clutchStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="50%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
    </defs>
    <polygon points="50,9 94,33 94,91 50,115 6,91 6,33" fill="#020617" opacity="0.6" />
    <polygon points="50,4 94,28 94,86 50,110 6,86 6,28" fill="url(#clutch3D)" stroke="url(#clutchStroke)" strokeWidth="3" />
    <polygon points="50,8 90,30 90,84 50,106 10,84 10,30" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
    
    <circle cx="50" cy="21" r="8" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="1.2" />
    <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900">C</text>
    
    <text x="50" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">Clutch</text>
    
    <rect x="8" y="53" width="84" height="21" rx="4" fill="#0F172A" stroke="#3B82F6" strokeWidth="0.9" />
    <text x="50" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="7.8" fontWeight="900" letterSpacing="0.4">TOP COMPANY</text>
    
    <text x="50" y="94" textAnchor="middle" fill="#FBBF24" fontSize="10.5">★★★</text>
  </svg>
);

const HexagonBadgeDMCA = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto max-w-[76px] sm:max-w-[84px] md:max-w-[90px] filter drop-shadow-xl hover:scale-105 transition-transform cursor-pointer shrink-0">
    <defs>
      <linearGradient id="dmca3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B0764" />
        <stop offset="50%" stopColor="#2E1065" />
        <stop offset="100%" stopColor="#1E0A38" />
      </linearGradient>
      <linearGradient id="dmcaStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E9D5FF" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#6B21A8" />
      </linearGradient>
    </defs>
    <polygon points="50,9 94,33 94,91 50,115 6,91 6,33" fill="#1E0A38" opacity="0.6" />
    <polygon points="50,4 94,28 94,86 50,110 6,86 6,28" fill="url(#dmca3D)" stroke="url(#dmcaStroke)" strokeWidth="3" />
    <polygon points="50,8 90,30 90,84 50,106 10,84 10,30" fill="none" stroke="#C084FC" strokeWidth="1" opacity="0.6" />
    
    <circle cx="50" cy="21" r="8" fill="#581C87" stroke="#E9D5FF" strokeWidth="1.2" />
    <text x="50" y="24" textAnchor="middle" fill="#FDE047" fontSize="8" fontWeight="900">🛡</text>
    
    <text x="50" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">DMCA</text>
    
    <rect x="8" y="53" width="84" height="21" rx="4" fill="#2E1065" stroke="#C084FC" strokeWidth="0.9" />
    <text x="50" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="7.8" fontWeight="900" letterSpacing="0.4">PROTECTED</text>
    
    <text x="50" y="94" textAnchor="middle" fill="#FBBF24" fontSize="10.5">★★★</text>
  </svg>
);

const HexagonBadgeGoogle = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto max-w-[76px] sm:max-w-[84px] md:max-w-[90px] filter drop-shadow-xl hover:scale-105 transition-transform cursor-pointer shrink-0">
    <defs>
      <linearGradient id="google3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9A3412" />
        <stop offset="50%" stopColor="#7C2D12" />
        <stop offset="100%" stopColor="#431407" />
      </linearGradient>
      <linearGradient id="googleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDBA74" />
        <stop offset="50%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#9A3412" />
      </linearGradient>
    </defs>
    <polygon points="50,9 94,33 94,91 50,115 6,91 6,33" fill="#431407" opacity="0.6" />
    <polygon points="50,4 94,28 94,86 50,110 6,86 6,28" fill="url(#google3D)" stroke="url(#googleStroke)" strokeWidth="3" />
    <polygon points="50,8 90,30 90,84 50,106 10,84 10,30" fill="none" stroke="#FB923C" strokeWidth="1" opacity="0.6" />
    
    <circle cx="50" cy="21" r="8" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1.2" />
    <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900">G</text>
    
    <text x="50" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">Google</text>
    
    <rect x="8" y="53" width="84" height="21" rx="4" fill="#7C2D12" stroke="#FB923C" strokeWidth="0.9" />
    <text x="50" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="7.8" fontWeight="900" letterSpacing="0.3">5 STAR RATING</text>
    
    <text x="50" y="94" textAnchor="middle" fill="#FBBF24" fontSize="10.5">★★★</text>
  </svg>
);

const HexagonBadgeSEO = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto max-w-[76px] sm:max-w-[84px] md:max-w-[90px] filter drop-shadow-xl hover:scale-105 transition-transform cursor-pointer shrink-0">
    <defs>
      <linearGradient id="seo3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#065F46" />
        <stop offset="50%" stopColor="#064E3B" />
        <stop offset="100%" stopColor="#022C22" />
      </linearGradient>
      <linearGradient id="seoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6EE7B7" />
        <stop offset="50%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>
    <polygon points="50,9 94,33 94,91 50,115 6,91 6,33" fill="#022C22" opacity="0.6" />
    <polygon points="50,4 94,28 94,86 50,110 6,86 6,28" fill="url(#seo3D)" stroke="url(#seoStroke)" strokeWidth="3" />
    <polygon points="50,8 90,30 90,84 50,106 10,84 10,30" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.6" />
    
    <circle cx="50" cy="21" r="8" fill="#065F46" stroke="#6EE7B7" strokeWidth="1.2" />
    <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="900">📈</text>
    
    <text x="50" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">SEO</text>
    
    <rect x="8" y="53" width="84" height="21" rx="4" fill="#064E3B" stroke="#34D399" strokeWidth="0.9" />
    <text x="50" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="900" letterSpacing="0.3">VERIFIED EXPERT</text>
    
    <text x="50" y="94" textAnchor="middle" fill="#FBBF24" fontSize="10.5">★★★</text>
  </svg>
);

const HexagonBadgeHubSpot = () => (
  <svg viewBox="0 0 100 120" className="w-full h-auto max-w-[76px] sm:max-w-[84px] md:max-w-[90px] filter drop-shadow-xl hover:scale-105 transition-transform cursor-pointer shrink-0">
    <defs>
      <linearGradient id="hub3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9E3216" />
        <stop offset="50%" stopColor="#7A2510" />
        <stop offset="100%" stopColor="#451206" />
      </linearGradient>
      <linearGradient id="hubStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDBA74" />
        <stop offset="50%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#C2410C" />
      </linearGradient>
    </defs>
    <polygon points="50,9 94,33 94,91 50,115 6,91 6,33" fill="#451206" opacity="0.6" />
    <polygon points="50,4 94,28 94,86 50,110 6,86 6,28" fill="url(#hub3D)" stroke="url(#hubStroke)" strokeWidth="3" />
    <polygon points="50,8 90,30 90,84 50,106 10,84 10,30" fill="none" stroke="#FDBA74" strokeWidth="1" opacity="0.6" />
    
    <circle cx="50" cy="21" r="8" fill="#5E1B0B" stroke="#FDBA74" strokeWidth="1.2" />
    <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900">H</text>
    
    <text x="50" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">HubSpot</text>
    
    <rect x="8" y="53" width="84" height="21" rx="4" fill="#4D1508" stroke="#FDBA74" strokeWidth="0.9" />
    <text x="50" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="900" letterSpacing="0.3">CERTIFIED PARTNER</text>
    
    <text x="50" y="94" textAnchor="middle" fill="#FBBF24" fontSize="10.5">★★★</text>
  </svg>
);

export const DigitalMarketingPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast({ title: "Details Required", description: "Name, phone and email are required.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: "Digital Marketing Free Proposal Request",
        message: formData.message || "Requested digital marketing proposal"
      });
      toast({ title: "Proposal Request Received! 🎉", description: "Our growth experts will reach out to you within 30 minutes." });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast({ title: "Submission Failed", description: "Please try contacting us directly via WhatsApp or phone call.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How long does it take to see results from digital marketing?",
      a: "Results vary by marketing channel. Paid advertising campaigns (Google Ads & Meta Ads) deliver instant leads within 24 to 48 hours. Organic strategies like SEO and Content Marketing typically build strong momentum and top rankings within 3 to 6 months."
    },
    {
      q: "Which digital marketing services do you offer?",
      a: "We offer end-to-end digital growth solutions including Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC/Google Ads), Social Media Optimization (SMO), E-Mail Marketing, Content Marketing, and Conversion Rate Optimization."
    },
    {
      q: "Do you work with businesses outside India?",
      a: "Yes, absolutely! Websbond is a global digital marketing agency serving clients across the US, UK, UAE, Canada, Australia, and India with localized market strategies."
    },
    {
      q: "How do you measure the success of a campaign?",
      a: "We measure campaign success through transparent metrics: Cost Per Lead (CPL), Return On Ad Spend (ROAS), organic keyword ranking growth, website conversion rate, and overall revenue growth."
    },
    {
      q: "What platforms do you specialize in?",
      a: "We specialize in Google Search & Shopping Ads, Meta (Instagram & Facebook) Ads, LinkedIn B2B campaigns, YouTube Ads, Google My Business (GMB), and automated email funnels."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Digital Marketing Agency | Performance Marketing Services | Websbond"
        description="Fuel your growth with Websbond's result-oriented digital marketing, SEO, Google Ads, and social media campaigns."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION - MATCHING HD DESIGN MOCKUP PIXEL PERFECT */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#F3EFFE] via-[#FAF8FF] to-white pt-36 md:pt-40 pb-16 border-b border-purple-100/60 overflow-hidden select-none">
        
        {/* Soft Background Wave & Light Glow Lines */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-300/25 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* LEFT COLUMN: COPY, BULLETS, HEXAGON BADGES & CTAS (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              
              {/* Top Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-purple-200/70 text-[#5B32EA] text-[11px] font-bold tracking-wider uppercase mb-5 shadow-xs backdrop-blur-md">
                <span>GLOBAL DIGITAL GROWTH PARTNER</span>
                <span className="w-2 h-2 rounded-full bg-[#5B32EA]" />
              </div>

              {/* Main Headline (UNBOLDED ELEGANT SERIF ITALIC TYPOGRAPHY MATCHING REFERENCE IMAGE 1 & 2) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-slate-900 leading-[1.18] tracking-tight mb-4 font-sans">
                Fuel Your Growth With <br />
                <span className="text-[#5B32EA] italic font-normal font-sans">Marketing & Web solutions</span> <br />
                <span className="text-slate-900 font-semibold">That Convert.</span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-lg font-normal">
                We craft ROI-driven campaigns and data-focused strategies that generate quality traffic, qualified leads, and real business growth for brands worldwide.
              </p>

              {/* 4 Feature Capsules (Horizontal Pill List) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                {[
                  "Data-Driven",
                  "ROI Focused",
                  "Transparent",
                  "Result Oriented"
                ].map((pill) => (
                  <span 
                    key={pill} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50/90 border border-purple-100 text-[#5B32EA] text-xs font-bold shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B32EA]" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>

              {/* 5 FULL-WIDTH 3D METALLIC VECTOR SVG HEXAGON BADGES WITH INCREASING EVEN SPACING */}
              <div className="w-full flex items-center justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 py-2">
                <HexagonBadgeClutch />
                <HexagonBadgeDMCA />
                <HexagonBadgeGoogle />
                <HexagonBadgeSEO />
                <HexagonBadgeHubSpot />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 w-full">
                <button
                  onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3.5 rounded-full bg-[#5B32EA] hover:bg-[#4A26D2] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-purple-500/25 transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Get Free Marketing Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/our-portfolio"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-purple-50 border border-purple-200 text-[#5B32EA] font-bold text-xs sm:text-sm shadow-2xs transition-all inline-flex items-center gap-2"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* MIDDLE COLUMN: ULTRA-CLEAN GRAPH VISUAL WITH LIGHT VIOLET PROGRESSIVE ASCENDING SHADES & ZERO BACKGROUND SHADOWS */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center relative min-h-[500px] w-full select-none">
              
              <div className="relative w-full max-w-[370px] h-[480px] mx-auto">

                {/* 1. TOP-LEFT: 3D ISOMETRIC TARGET BOARD WITH BLUE DART */}
                <div className="absolute left-2 top-0 w-36 h-36 z-20 hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 160 160" className="w-full h-full filter drop-shadow-xl">
                    <defs>
                      <linearGradient id="purpleTarget3D" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8A52F3" />
                        <stop offset="60%" stopColor="#5B32EA" />
                        <stop offset="100%" stopColor="#3C1A9E" />
                      </linearGradient>
                      <linearGradient id="targetRim" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4F26C9" />
                        <stop offset="100%" stopColor="#250E6B" />
                      </linearGradient>
                    </defs>

                    <g transform="translate(5, 5)">
                      <ellipse cx="68" cy="90" rx="58" ry="46" fill="url(#targetRim)" />
                      <ellipse cx="70" cy="85" rx="58" ry="46" fill="url(#purpleTarget3D)" />
                      <ellipse cx="70" cy="85" rx="46" ry="36" fill="#FFFFFF" />
                      <ellipse cx="70" cy="85" rx="34" ry="26" fill="url(#purpleTarget3D)" />
                      <ellipse cx="70" cy="85" rx="22" ry="17" fill="#FFFFFF" />
                      <ellipse cx="70" cy="85" rx="11" ry="8.5" fill="#5B32EA" />
                      <ellipse cx="70" cy="85" rx="4" ry="3" fill="#FFFFFF" />

                      <line x1="126" y1="29" x2="71" y2="86" stroke="#1E1B4B" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
                      <line x1="125" y1="28" x2="70" y2="85" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                      <line x1="125" y1="28" x2="70" y2="85" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" />

                      <polygon points="125,28 142,10 128,20" fill="#3B82F6" />
                      <polygon points="125,28 148,22 134,30" fill="#2563EB" />
                      <polygon points="125,28 138,40 128,34" fill="#1D4ED8" />
                      <polygon points="125,28 116,14 122,22" fill="#60A5FA" />
                    </g>
                  </svg>
                </div>

                {/* 2. TOP-RIGHT: CONVERSIONS CARD */}
                <div className="absolute right-0 top-0 bg-white/95 backdrop-blur-md border border-purple-100/90 rounded-2xl p-2.5 shadow-lg shadow-purple-950/10 w-28 sm:w-30 text-left z-20 hover:shadow-xl transition-shadow">
                  <div className="text-[9px] text-slate-500 font-semibold tracking-tight">Conversions</div>
                  <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                    ▲ 35%
                  </div>
                  <div className="flex items-end gap-1 h-4 mt-1.5">
                    <span className="w-1.5 h-1.5 bg-purple-100 rounded-2xs"></span>
                    <span className="w-1.5 h-2.5 bg-purple-200 rounded-2xs"></span>
                    <span className="w-1.5 h-3.5 bg-purple-300 rounded-2xs"></span>
                    <span className="w-1.5 h-4 bg-[#5B32EA] rounded-2xs shadow-2xs"></span>
                  </div>
                </div>

                {/* 3. MIDDLE-RIGHT: ROI GROWTH CARD */}
                <div className="absolute right-2 top-[115px] bg-white/95 backdrop-blur-md border border-purple-100/90 rounded-2xl p-2.5 shadow-lg shadow-purple-950/10 w-30 sm:w-32 text-left z-20 hover:shadow-xl transition-shadow">
                  <div className="text-[9px] text-slate-500 font-semibold tracking-tight">ROI Growth</div>
                  <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                    ▲ 52%
                  </div>
                  <svg className="w-full h-5 text-[#5B32EA] mt-1" viewBox="0 0 100 25" fill="none">
                    <path d="M 0 20 Q 25 2, 50 14 T 95 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="95" cy="4" r="3" fill="#5B32EA" stroke="#FFFFFF" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* 4. MIDDLE-LEFT: TOTAL LEADS CARD */}
                <div className="absolute left-0 top-[205px] bg-white/95 backdrop-blur-md border border-purple-100/90 rounded-2xl p-3 shadow-xl shadow-purple-950/15 w-40 sm:w-44 text-left z-30 hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">TOTAL LEADS</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-emerald-50 text-emerald-600 text-[8.5px] font-bold">Active</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight my-0.5 whitespace-nowrap">
                    50+ Leads <span className="text-xs font-normal text-slate-500">/ Month</span>
                  </div>
                  <div className="text-[9.5px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span>▲ 42% vs last month</span>
                  </div>
                </div>

                {/* 5. BOTTOM: 6 CLEAN LIGHT VIOLET ASCENDING SHADE BARS WITH ZERO BACKGROUND SHADOW */}
                <div className="absolute bottom-0 inset-x-0 h-[260px] pointer-events-none z-10">
                  
                  {/* Clean SVG Wavy Bezier Trendline & Dot Nodes */}
                  <svg className="absolute inset-0 w-full h-full text-[#6C3AE8]" viewBox="0 0 350 250" fill="none">
                    <defs>
                      <linearGradient id="softPurpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <path 
                      d="M 15 240 C 40 230, 65 220, 80 215 C 100 205, 110 192, 125 185 C 145 175, 155 160, 170 150 C 190 135, 200 120, 215 108 C 235 90, 245 78, 260 68 C 280 50, 290 32, 305 20 L 305 250 L 15 250 Z" 
                      fill="url(#softPurpleGrad)" 
                    />

                    <path 
                      d="M 15 240 C 40 230, 65 220, 80 215 C 100 205, 110 192, 125 185 C 145 175, 155 160, 170 150 C 190 135, 200 120, 215 108 C 235 90, 245 78, 260 68 C 280 50, 290 32, 305 20" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />

                    <circle cx="35" cy="235" r="2.5" fill="#6C3AE8" />
                    <circle cx="80" cy="215" r="2.5" fill="#6C3AE8" />
                    <circle cx="125" cy="185" r="3" fill="#6C3AE8" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="170" cy="150" r="3" fill="#6C3AE8" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="215" cy="108" r="3.5" fill="#6C3AE8" stroke="#FFFFFF" strokeWidth="1.2" />
                    <circle cx="260" cy="68" r="3.5" fill="#6C3AE8" stroke="#FFFFFF" strokeWidth="1.2" />
                    
                    <circle cx="305" cy="20" r="6.5" fill="#6C3AE8" stroke="#FFFFFF" strokeWidth="2.5" />
                  </svg>

                  {/* 6 Ascending Rounded Light Violet Bars - INCREASING INTENSITY VIOLET SHADE FROM LEFT TO RIGHT */}
                  <div className="absolute bottom-0 right-2 flex items-end gap-3 sm:gap-3.5">
                    {/* Bar 1 (Lowest, Lightest Soft Pastel Violet) */}
                    <div className="w-6 sm:w-7 h-10 bg-gradient-to-t from-[#F3E8FF] to-[#E9D5FF] rounded-t-2xl shadow-2xs" />

                    {/* Bar 2 */}
                    <div className="w-6 sm:w-7 h-16 bg-gradient-to-t from-[#E9D5FF] to-[#D8B4FE] rounded-t-2xl shadow-2xs" />

                    {/* Bar 3 */}
                    <div className="w-6 sm:w-7 h-28 bg-gradient-to-t from-[#D8B4FE] to-[#C084FC] rounded-t-2xl shadow-2xs" />

                    {/* Bar 4 */}
                    <div className="w-6 sm:w-7 h-40 bg-gradient-to-t from-[#C084FC] to-[#A855F7] rounded-t-2xl shadow-2xs" />

                    {/* Bar 5 */}
                    <div className="w-6 sm:w-7 h-52 bg-gradient-to-t from-[#A855F7] to-[#9333EA] rounded-t-2xl shadow-xs" />

                    {/* Bar 6 (Tallest, Deep Vibrant Violet) */}
                    <div className="w-6 sm:w-7 h-64 bg-gradient-to-t from-[#9333EA] to-[#7E22CE] rounded-t-2xl shadow-xs" />
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: PROPOSAL FORM CARD (4 COLS) */}
            <div className="lg:col-span-4 relative z-10">
              <div id="proposal-form" className="bg-white border border-purple-100/80 shadow-2xl shadow-purple-900/10 rounded-3xl p-6 sm:p-7 text-left">
                
                <div className="mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                    Request <span className="text-[#5B32EA] italic font-normal">A Free Proposal</span>
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">
                    Tell us about your goals and we'll create a custom strategy for you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  {/* Field 1: Full Name with Icon */}
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#5B32EA] focus:ring-2 focus:ring-purple-100 bg-slate-50/50 font-medium"
                      required
                    />
                  </div>

                  {/* Field 2: Phone Number with Icon */}
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#5B32EA] focus:ring-2 focus:ring-purple-100 bg-slate-50/50 font-medium"
                      required
                    />
                  </div>

                  {/* Field 3: Email Address with Icon */}
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#5B32EA] focus:ring-2 focus:ring-purple-100 bg-slate-50/50 font-medium"
                      required
                    />
                  </div>

                  {/* Field 4: Message Textarea */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Tell us about your business goals & required services..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:border-[#5B32EA] focus:ring-2 focus:ring-purple-100 bg-slate-50/50 resize-none font-medium"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-[#5B32EA] hover:bg-[#4A26D2] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-1"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Proposal Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Privacy note */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium mt-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>We respect your privacy. No spam, ever.</span>
                  </div>

                </form>

              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* REAL AGENCY METRICS PROOF CAPSULE BELOW HERO */}
          {/* ========================================================================= */}
          <div className="mt-12 bg-white border border-[#E9E4F8] shadow-sm rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-around gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#5B32EA] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-slate-900 leading-none">50+ Leads / Mo</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Quality Leads Generated</div>
              </div>
            </div>

            <div className="w-px h-8 bg-slate-200 hidden md:block" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-slate-900 leading-none">5+</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Active Projects Delivered</div>
              </div>
            </div>

            <div className="w-px h-8 bg-slate-200 hidden md:block" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-500" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-slate-900 leading-none">4.9 / 5</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Google Rating</div>
              </div>
            </div>

            <div className="w-px h-8 bg-slate-200 hidden md:block" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#5B32EA] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-slate-900 leading-none">100%</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Client Satisfaction</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. COMPACT NARROW LIGHT VIOLET BANNER STRIP (FORCED EXACT 2-LINE HEADLINE MATCHING REFERENCE IMAGE 2) */}
      {/* ========================================================================= */}
      <section className="py-10 bg-gradient-to-r from-[#F2EDFE] via-[#FAF8FF] to-[#EFEAFE] border-y border-purple-200/60 relative overflow-hidden select-none">
        
        {/* Ambient Subtle Wave Overlays */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-200/30 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            
            {/* LEFT SIDE: COMPACT HIGH-QUALITY PHOTO WITH OVERLAY CARD */}
            <div className="w-full lg:w-5/12 relative shrink-0">
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-purple-200/80 bg-white group h-48 sm:h-56 w-full">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Websbond Digital Growth Team Collaboration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Soft gradient bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                {/* FLOATING TOP-LEFT CAMPAIGN PERFORMANCE OVERLAY CARD */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-purple-100 rounded-xl p-2.5 shadow-md z-20 flex items-center justify-between gap-3 w-48 sm:w-52">
                  <div>
                    <div className="text-[9px] text-slate-500 font-semibold tracking-wide uppercase">Campaign Performance</div>
                    <div className="text-base font-extrabold text-slate-900 mt-0.5">24,570</div>
                    <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                      <TrendingUp className="w-3 h-3 text-emerald-500" />
                      <span>▲ 42% <span className="text-slate-400 font-normal">vs last mo</span></span>
                    </div>
                  </div>

                  {/* Sparkline curve */}
                  <svg className="w-12 h-6 text-[#5B32EA]" viewBox="0 0 100 40" fill="none">
                    <path d="M 0 32 Q 20 25, 40 28 T 70 12 T 100 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="100" cy="4" r="3.5" fill="#5B32EA" stroke="#FFFFFF" strokeWidth="1.5" />
                  </svg>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE: BADGE, GUARANTEED EXACT 2-LINE HEADLINE, SUBTITLE & CTA BUTTONS */}
            <div className="w-full lg:w-7/12 text-left flex flex-col justify-center">
              
              {/* Purple Pill Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-purple-200 text-[#5B32EA] text-[10px] font-extrabold tracking-wider uppercase mb-2.5 shadow-2xs backdrop-blur-md w-fit">
                <span>SMART. SCALABLE. SECURE.</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B32EA]" />
              </div>

              {/* GUARANTEED EXACT 2-LINE HEADLINE (BLOCK SPANS PREVENT 3RD LINE WRAP) */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[23px] xl:text-[25px] font-extrabold text-slate-900 leading-snug tracking-tight mb-2.5 font-sans">
                <span className="block text-slate-900">
                  Ready To Scale Your Business Online?
                </span>
                <span className="block text-[#5B32EA] italic font-normal">
                  Marketing & Web solutions drive growth to your business.
                </span>
              </h2>

              {/* Subtitle Paragraph */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal max-w-xl">
                We combine data-driven strategies with expert execution to help you attract more customers, boost visibility, and deliver measurable growth.
              </p>

              {/* 4 Feature Capsules (Horizontal Pill List) */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {[
                  { label: "ROI Focused", icon: Target },
                  { label: "Weekly Reporting", icon: Calendar },
                  { label: "Dedicated Manager", icon: Users },
                  { label: "Global Support", icon: Globe }
                ].map((pill) => (
                  <span 
                    key={pill.label} 
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-purple-200/80 text-slate-800 text-[11px] font-bold shadow-2xs hover:border-purple-300 transition-colors"
                  >
                    <pill.icon className="w-3 h-3 text-[#5B32EA]" />
                    <span>{pill.label}</span>
                  </span>
                ))}
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-5 py-2.5 rounded-xl bg-[#5B32EA] hover:bg-[#4A26D2] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-purple-500/25 transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 text-slate-900 font-bold text-xs sm:text-sm shadow-2xs transition-all inline-flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#5B32EA]" />
                  <span>Book Strategy Call</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT WE DO / SERVICES GRID - COMPACT SLEEK 3D CARDS */}
      {/* ========================================================================= */}
      <section id="what-we-do" className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF8FF] via-[#F4EFFF] to-[#FAF8FF] border-b border-purple-100/60 relative overflow-hidden select-none">
        
        {/* Soft Background Flow Waves & Dot Matrices */}
        <div className="absolute top-10 left-4 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-4 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          
          {/* Eyebrow Pill Accent Tag with Side Lines */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#5B32EA]" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5B32EA]">WHAT WE DO</span>
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#5B32EA]" />
          </div>

          {/* SLEEK, COMPACT 2-LINE HEADLINE */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold text-slate-900 leading-tight font-sans max-w-5xl mx-auto mb-2 tracking-tight">
            <span className="block text-slate-900">
              Buy Results-Focused Marketing Services That
            </span>
            <span className="block text-[#5B32EA] italic font-normal my-0.5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Maximize Conversions
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            We combine creativity, data, and technology to deliver marketing solutions that connect with your audience and drive measurable results.
          </p>

          {/* 6 CARDS GRID WITH SLEEK COMPACT PROPORTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
            {[
              {
                num: "01",
                icon: Search,
                title: "Search Engine Optimization",
                desc: "Rank higher on search engines, drive organic traffic, and build long-term visibility.",
                linkText: "Explore Search →",
                to: "/seo-service-in-delhi",
                imgSrc: "/services/seo-3d.png"
              },
              {
                num: "02",
                icon: Target,
                title: "Pay Per Click Advertising",
                desc: "Get instant visibility and high-quality leads with ROI-focused Google Ads & PPC campaigns.",
                linkText: "Explore PPC →",
                to: "/google-ads-services",
                imgSrc: "/services/ppc-3d.png"
              },
              {
                num: "03",
                icon: Share2,
                title: "Social Media Optimization",
                desc: "Build your brand, engage your audience, and grow across all major social platforms.",
                linkText: "Explore Social →",
                to: "/smo-service-in-delhi",
                imgSrc: "/services/smo-3d.png"
              },
              {
                num: "04",
                icon: MousePointerClick,
                title: "Google Ads Management",
                desc: "Expert management to reduce ad spend wastage and maximize your returns.",
                linkText: "Explore Google Ads →",
                to: "/google-ads-services",
                imgSrc: "/services/google-ads-3d.png"
              },
              {
                num: "05",
                icon: Mail,
                title: "E-Mail Marketing",
                desc: "Nurture leads, build relationships, and increase customer lifetime value.",
                linkText: "Explore E-Mail →",
                to: "/content-writing-service-in-delhi",
                imgSrc: "/services/email-3d.png"
              },
              {
                num: "06",
                icon: FileText,
                title: "Content Marketing",
                desc: "Strategic content that informs, engages, and converts your ideal customers.",
                linkText: "Explore Content →",
                to: "/content-writing-service-in-delhi",
                imgSrc: "/services/content-3d.png"
              }
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-purple-100/90 shadow-md hover:shadow-xl rounded-2xl p-5 transition-all duration-300 flex items-center justify-between gap-3 group hover:border-purple-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Left Card Details (55% width) */}
                <div className="flex flex-col justify-between h-full w-[55%] pr-1 z-10">
                  <div>
                    {/* Top Row: Number Badge & Icon Pill */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-6 h-6 rounded-lg bg-purple-50 text-[#5B32EA] font-extrabold text-[11px] flex items-center justify-center border border-purple-100 shadow-2xs">
                        {card.num}
                      </span>
                      <div className="w-6 h-6 rounded-lg bg-purple-50 text-[#5B32EA] flex items-center justify-center border border-purple-100 group-hover:bg-[#5B32EA] group-hover:text-white transition-colors shadow-2xs">
                        <card.icon className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug font-sans">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-[11px] leading-relaxed mb-3">
                      {card.desc}
                    </p>
                  </div>

                  {/* Explore Link */}
                  <Link
                    to={card.to}
                    className="text-[11px] font-extrabold text-[#5B32EA] hover:text-[#4A26D2] inline-flex items-center gap-1 transition-all mt-auto"
                  >
                    <span>{card.linkText}</span>
                  </Link>
                </div>

                {/* Right 3D Visual Image Asset */}
                <div className="w-[45%] flex items-center justify-center shrink-0 relative py-1">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-auto max-w-[140px] sm:max-w-[160px] object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM CUSTOM SOLUTION CAPSULE BAR MATCHING REFERENCE IMAGE 2 */}
          <div className="mt-10 bg-white/90 border border-purple-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-xs backdrop-blur-md">
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-purple-100/80 text-[#5B32EA] flex items-center justify-center shrink-0 shadow-2xs">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                Need a <span className="text-[#5B32EA] font-extrabold">custom solution?</span> Our experts are here to help you grow.
              </span>
            </div>

            <button
              onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 rounded-xl bg-[#5B32EA] hover:bg-[#4A26D2] text-white font-extrabold text-xs shrink-0 shadow-md hover:shadow-purple-500/25 transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Let's Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INDUSTRIES WE WORK WITH - ULTRA-CLEAN, SLEEK & PERFECTLY FITTED 3D IMAGES */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF8FF] via-white to-[#F6F2FF] border-b border-purple-100/60 relative overflow-hidden select-none">
        
        {/* Ambient Subtle Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          
          {/* Eyebrow Accent Tag: ― WE WORK WITH ― */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#5B32EA]" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5B32EA]">WE WORK WITH</span>
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#5B32EA]" />
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 font-sans">
            Industries We <span className="text-[#5B32EA] italic font-normal">Drive Growth</span> For
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Tailored marketing strategies and data-driven solutions designed to accelerate growth across every industry.
          </p>

          {/* 8 CARDS GRID (4 Columns x 2 Rows) - CLEAN, COMPACT & UNCLUTTERED */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-left">
            {[
              {
                title: "E-Commerce & Retail",
                imgSrc: "/industries/ecommerce-3d.png",
                points: ["SEO & Visibility", "Paid Advertising", "CRO & Analytics"]
              },
              {
                title: "SaaS & Technology",
                imgSrc: "/industries/saas-3d.png",
                points: ["Lead Generation", "Product Marketing", "Growth Automation"]
              },
              {
                title: "Healthcare & Clinics",
                imgSrc: "/industries/healthcare-3d.png",
                points: ["Local SEO", "Patient Acquisition", "Reputation Management"]
              },
              {
                title: "Real Estate & Construction",
                imgSrc: "/industries/realestate-3d.png",
                points: ["Lead Generation", "SEO & PPC", "Brand Building"]
              },
              {
                title: "Education & E-Learning",
                imgSrc: "/industries/education-3d.png",
                points: ["Student Enrollment", "Performance Marketing", "Content Strategy"]
              },
              {
                title: "Finance & Fintech",
                imgSrc: "/industries/finance-3d.png",
                points: ["Lead Generation", "Compliance Marketing", "Customer Retention"]
              },
              {
                title: "Hospitality & Restaurants",
                imgSrc: "/industries/hospitality-3d.png",
                points: ["Local SEO", "Social Media Marketing", "Online Reservations"]
              },
              {
                title: "Local Businesses & Services",
                imgSrc: "/industries/local-3d.png",
                points: ["Local Visibility", "Review & Reputation", "Conversion Optimization"]
              }
            ].map((card) => (
              <div 
                key={card.title} 
                className="bg-white border border-purple-100/90 shadow-sm hover:shadow-lg rounded-2xl p-4.5 sm:p-5 transition-all duration-300 flex flex-col justify-between group hover:border-purple-300 transform hover:-translate-y-1"
              >
                <div>
                  {/* Top 3D Illustration Display (No gray box, clean transparent PNG, zero clipping) */}
                  <div className="w-full h-36 sm:h-40 flex items-center justify-center mb-3 overflow-visible px-1">
                    <img
                      src={card.imgSrc}
                      alt={card.title}
                      className="max-h-[135px] sm:max-h-[150px] w-auto max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 font-sans leading-snug">
                    {card.title}
                  </h3>

                  {/* 3 Checkmark Bullet Points */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    {card.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B32EA] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Solutions Link */}
                <button 
                  onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[11px] sm:text-xs font-extrabold text-[#5B32EA] hover:text-[#4A26D2] inline-flex items-center gap-1.5 transition-all group-hover:gap-2.5 mt-auto"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* BOTTOM TRUSTED BY 150+ BUSINESSES CAPSULE BAR MATCHING IMAGE 2 */}
          <div className="mt-10 bg-white border border-purple-200/80 rounded-2xl p-4 sm:p-5 shadow-sm max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
            
            {/* Left Metrics */}
            <div className="flex items-center gap-3 text-left shrink-0">
              <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                Trusted by <span className="text-[#5B32EA]">150+</span>
                <div className="text-[11px] font-medium text-slate-500">Businesses Worldwide</div>
              </div>
            </div>

            <div className="w-full lg:w-px h-px lg:h-8 bg-slate-200" />

            {/* Middle 8 Industry Icons Row */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-5 w-full max-w-4xl text-center">
              {[
                { label: "Healthcare", icon: Heart },
                { label: "Education", icon: GraduationCap },
                { label: "Real Estate", icon: Building2 },
                { label: "Restaurants", icon: Utensils },
                { label: "NGOs", icon: HeartHandshake },
                { label: "Finance", icon: IndianRupee },
                { label: "Startups", icon: Rocket },
                { label: "Enterprise", icon: Briefcase },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1 group cursor-pointer">
                  <div className="w-8.5 h-8.5 rounded-xl bg-purple-50 text-[#5B32EA] flex items-center justify-center group-hover:bg-[#5B32EA] group-hover:text-white transition-colors border border-purple-100/70">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-px h-px lg:h-8 bg-slate-200" />

            {/* Right Metrics */}
            <div className="flex items-center gap-3 text-left shrink-0">
              <div className="text-base sm:text-lg font-extrabold text-[#5B32EA] leading-tight">
                100+
                <div className="text-[11px] font-medium text-slate-500">Industries Served</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PROCESS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9FF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">OUR PROCESS</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 font-sans">
              Simple Process. <span className="text-[#5B32EA] italic font-normal">Proven Results.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Research & Audit",
                  desc: "We analyze your business, competitors & audience.",
                  color: "bg-pink-50 border-pink-200 text-pink-600"
                },
                {
                  step: "02",
                  title: "Strategy & Plan",
                  desc: "We build a data-driven marketing strategy.",
                  color: "bg-emerald-50 border-emerald-200 text-emerald-600"
                },
                {
                  step: "03",
                  title: "Execute & Optimize",
                  desc: "We run campaigns, test and optimize continuously.",
                  color: "bg-amber-50 border-amber-200 text-amber-600"
                },
                {
                  step: "04",
                  title: "Measure & Scale",
                  desc: "We track results, improve ROI & scale growth.",
                  color: "bg-purple-50 border-purple-200 text-[#5B32EA]"
                }
              ].map((item) => (
                <div key={item.step} className="bg-white border border-purple-100/80 rounded-2xl p-6 shadow-xs relative">
                  <div className={`w-10 h-10 rounded-full ${item.color} border flex items-center justify-center font-extrabold text-sm mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-purple-100 shadow-xl bg-white p-2">
                <img
                  src="/article-marketing-leads.png"
                  alt="Websbond Marketing Process Dashboard"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6 text-white bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="text-xs font-bold text-[#C084FC] uppercase tracking-wider">Continuous Growth</div>
                  <div className="text-sm font-semibold">Data-backed execution for max ROI</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR WORK / CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">OUR WORK</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-14 font-sans max-w-3xl mx-auto">
            Success Stories That <span className="text-[#5B32EA] italic font-normal">Inspire Confidence</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1 */}
            <div className="bg-[#FAF9FF] border border-purple-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="/article-marketing-leads.png"
                    alt="E-Commerce Fashion Store Growth"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    E-COMMERCE
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Fashion Store Growth</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Increased organic traffic by 210% and revenue by 3.4x in 6 months.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-purple-100">
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">210%</div>
                      <div className="text-[11px] font-medium text-slate-500">Traffic Increase</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">3.4x</div>
                      <div className="text-[11px] font-medium text-slate-500">Revenue Growth</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/case-studies" className="text-xs font-bold text-[#5B32EA] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF9FF] border border-purple-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="/client-bg-timesquare.jpg"
                    alt="Real Estate Lead Generation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#5B32EA] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    LEAD GENERATION
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Real Estate Leads</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Generated 850+ qualified leads with cost per lead reduced by 60%.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-purple-100">
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">850+</div>
                      <div className="text-[11px] font-medium text-slate-500">Leads Generated</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">60%</div>
                      <div className="text-[11px] font-medium text-slate-500">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/case-studies" className="text-xs font-bold text-[#5B32EA] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF9FF] border border-purple-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="/client-bg-ranga-pest.jpg"
                    alt="Local Business Appointments"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    LOCAL BUSINESS
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Clinic Appointment</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Increased appointments by 180% through local SEO & ads.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-purple-100">
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">180%</div>
                      <div className="text-[11px] font-medium text-slate-500">Appointments</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#5B32EA]">2.7x</div>
                      <div className="text-[11px] font-medium text-slate-500">ROI Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/case-studies" className="text-xs font-bold text-[#5B32EA] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHAT OUR CLIENTS SAY / TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF9FF] border-b border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-6">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">CLIENTS LOVE US</span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-14 font-sans max-w-3xl mx-auto">
            What Our <span className="text-[#5B32EA] italic font-normal">Clients Say</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  quote: "Websbond is an incredible team! They understood our goals and delivered results beyond expectations.",
                  name: "John Miller",
                  role: "CEO, TechWave"
                },
                {
                  quote: "Our ROI has improved significantly since we started working with Websbond. Highly recommended!",
                  name: "Sarah Thompson",
                  role: "Marketing Head, UpScale"
                },
                {
                  quote: "Professional, transparent & result-oriented. They truly care about your business growth.",
                  name: "Michael Brown",
                  role: "Founder, BuildCraft"
                },
                {
                  quote: "Great communication, fast execution and amazing results. The team is always a step ahead.",
                  name: "Emma Wilson",
                  role: "Director, StyleHub"
                }
              ].map((t) => (
                <div key={t.name} className="bg-white border border-purple-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">"{t.quote}"</p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-purple-100 text-[#5B32EA] font-bold text-xs flex items-center justify-center">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t.name}</div>
                      <div className="text-[11px] text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/50 border border-purple-200/80 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-purple-100 flex items-center justify-center mb-4">
                <span className="font-extrabold text-slate-900 text-2xl">G</span>
              </div>

              <div className="text-3xl font-extrabold text-slate-900 mb-1">4.9/5</div>
              <div className="text-xs font-semibold text-slate-500 mb-3">Google Rating</div>

              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <p className="text-xs text-slate-500 font-medium">Based on 70+ verified client reviews</p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-24 h-24 rounded-3xl bg-purple-100/80 text-[#5B32EA] flex items-center justify-center mb-6 shadow-md border border-purple-200">
                <HelpCircle className="w-12 h-12" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#5B32EA]">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 mt-2 mb-4 font-sans">
                Got Questions? We Have <span className="text-[#5B32EA] italic font-normal">Answers</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Have doubts about digital marketing strategies, campaign timelines, or ROI measurement? Explore answers to common questions below.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.q}
                  className="bg-[#FAF9FF] border border-purple-100/90 rounded-2xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#5B32EA] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center shrink-0 transition-transform ${openFaq === idx ? "rotate-180 bg-[#5B32EA] text-white" : "text-[#5B32EA]"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-100/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. BOTTOM VIBRANT CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#432368] via-[#5B32EA] to-[#4F46E5] text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-4 font-sans tracking-tight">
              Let's Build Your Growth Engine <br className="hidden sm:block" />
              And Take Your Business To The <span className="text-[#C084FC] italic font-normal">Next Level.</span>
            </h2>
            <p className="text-purple-100 text-sm sm:text-base mb-8 max-w-xl font-normal">
              Book a free strategy call with our experts today!
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-purple-50 text-[#5B32EA] font-bold text-sm shadow-xl transition-all inline-flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919306623619"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm backdrop-blur-md transition-all inline-flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center relative">
            <div className="w-64 h-64 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-6 shadow-2xl relative">
              <div className="w-20 h-20 rounded-2xl bg-white text-[#5B32EA] flex items-center justify-center mb-4 shadow-lg animate-bounce">
                <Rocket className="w-10 h-10" />
              </div>
              <div className="text-base font-bold text-[#FFFFFF]">Scale Your Revenue</div>
              <div className="text-xs text-purple-200 text-center mt-1">Guaranteed High-ROI Campaigns</div>
            </div>
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default DigitalMarketingPage;
