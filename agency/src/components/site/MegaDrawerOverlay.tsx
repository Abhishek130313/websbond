import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  X, Home, Building2, Users, Briefcase, Award, PhoneCall, 
  Code, ShoppingBag, TrendingUp, Search, Cpu, Smartphone, Palette,
  FolderGit2, Newspaper, ShieldCheck, Globe, Headset, ArrowRight,
  Star, FileBadge, FolderCheck, Handshake, MessageSquare
} from "lucide-react";
import { Logo } from "./Logo";

type MegaDrawerOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MegaDrawerOverlay = ({ isOpen, onClose }: MegaDrawerOverlayProps) => {
  // Lock body scroll when mega drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/40 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      
      {/* Modal Container Card (Exact Image 1 Auto-Height & Proportions) */}
      <div className="w-full max-w-7xl bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-purple-100 my-auto flex flex-col justify-between max-h-[95vh] overflow-y-auto">
        
        {/* Top Header: Logo + Close Button */}
        <div className="flex items-center justify-between border-b border-purple-100/80 pb-4 w-full shrink-0">
          <Logo size="md" />

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-[#20103A] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Main 3-Column Content Grid (Exact Image 1 Layout & Typography) */}
        <div className="w-full py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Column 1: Company */}
          <div className="lg:col-span-4 flex flex-col gap-3 lg:border-r lg:border-purple-100/80 lg:pr-8">
            <div className="flex items-center gap-3.5 mb-1">
              <div className="w-10 h-10 rounded-full bg-[#F4ECFC] text-[#5B2A8A] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#331B54] font-sans">
                Company
              </h3>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { to: "/", icon: Home, title: "Home", desc: "Discover digital growth solutions" },
                { to: "/about-us", icon: Building2, title: "About Us", desc: "Who we are and what drives us" },
                { to: "/about-us", icon: Users, title: "Our Team", desc: "Talented minds delivering excellence" },
                { to: "/our-portfolio", icon: Handshake, title: "Clients", desc: "Businesses we proudly partner with" },
                { to: "/testimonials", icon: MessageSquare, title: "Testimonials", desc: "Success stories from our clients" },
                { to: "/about-us", icon: Briefcase, title: "Careers", desc: "Build your career with innovators" },
                { to: "/contact-us", icon: PhoneCall, title: "Contact", desc: "Connect with our experts today" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    to={item.to}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-1.5 rounded-xl hover:bg-[#F8F4FF] transition-all duration-150"
                  >
                    <Icon className="w-4 h-4 text-[#5B2A8A] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="text-[13.5px] font-bold text-[#331B54] group-hover:text-[#5B2A8A] transition-colors leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[11.5px] font-normal text-slate-500 leading-tight mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="lg:col-span-4 flex flex-col gap-3 lg:border-r lg:border-purple-100/80 lg:pr-8">
            <div className="flex items-center gap-3.5 mb-1">
              <div className="w-10 h-10 rounded-full bg-[#F4ECFC] text-[#5B2A8A] flex items-center justify-center shrink-0">
                <Code className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#331B54] font-sans">
                Our Services
              </h3>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { to: "/website-design-service-in-delhi", icon: Code, title: "Web Development", desc: "Custom websites that drive results" },
                { to: "/e-commerce-website-services-in-delhi", icon: ShoppingBag, title: "eCommerce Development", desc: "Custom online stores that boost sales" },
                { to: "/digital-marketing-agency", icon: TrendingUp, title: "Digital Marketing", desc: "Boost your online presence" },
                { to: "/seo-service-in-delhi", icon: Search, title: "SEO Services", desc: "Improve your search engine rankings" },
                { to: "/contact-us", icon: Cpu, title: "CRM Development", desc: "Streamline your customer relationships" },
                { to: "/contact-us", icon: Smartphone, title: "Mobile App Development", desc: "Engage your audience with native apps" },
                { to: "/website-design-service-in-delhi", icon: Palette, title: "UI/UX Design", desc: "Create beautiful and functional user interfaces" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    to={item.to}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-1.5 rounded-xl hover:bg-[#F8F4FF] transition-all duration-150"
                  >
                    <Icon className="w-4 h-4 text-[#5B2A8A] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="text-[13.5px] font-bold text-[#331B54] group-hover:text-[#5B2A8A] transition-colors leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[11.5px] font-normal text-slate-500 leading-tight mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 3: Resources & Locations + CTA Box */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-5">
            
            {/* Resources Sub-section */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3.5 mb-1">
                <div className="w-10 h-10 rounded-full bg-[#F4ECFC] text-[#5B2A8A] flex items-center justify-center shrink-0">
                  <FolderGit2 className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#331B54] font-sans">
                  Resources & Locations
                </h3>
              </div>

              <div className="flex flex-col gap-1.5 font-semibold text-[13.5px] text-[#331B54]">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mt-1 mb-0.5">Resources</span>
                <Link to="/our-portfolio" onClick={onClose} className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-[#F8F4FF] text-[#331B54] hover:text-[#5B2A8A] transition-colors">
                  <Briefcase className="w-4 h-4 text-[#5B2A8A]" />
                  <span>Web Portfolio</span>
                </Link>
                <Link to="/case-studies" onClick={onClose} className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-[#F8F4FF] text-[#331B54] hover:text-[#5B2A8A] transition-colors">
                  <Search className="w-4 h-4 text-[#5B2A8A]" />
                  <span>SEO Portfolio</span>
                </Link>
                <Link to="/case-studies" onClick={onClose} className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-[#F8F4FF] text-[#331B54] hover:text-[#5B2A8A] transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#5B2A8A]" />
                  <span>Case Study</span>
                </Link>
                <Link to="/blog" onClick={onClose} className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-[#F8F4FF] text-[#331B54] hover:text-[#5B2A8A] transition-colors">
                  <Newspaper className="w-4 h-4 text-[#5B2A8A]" />
                  <span>Blogs</span>
                </Link>
              </div>

              {/* Real Locations */}
              <div className="pt-2 border-t border-purple-100/70">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Locations
                </span>
                <div className="flex items-center gap-5 text-[13.5px] font-bold text-[#331B54]">
                  <span className="flex items-center gap-1.5">
                    <span className="text-base">🇮🇳</span> India
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#5B2A8A]" /> Global / USA
                  </span>
                </div>
              </div>
            </div>

            {/* Let's Build Something Great CTA Card */}
            <div className="bg-[#F7F2FC] p-4 rounded-2xl border border-purple-100/80 shadow-xs relative">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#EFEBFA] text-[#5B2A8A] flex items-center justify-center shrink-0 shadow-xs">
                  <Headset className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#331B54] leading-tight">
                    Let's Build Something Great
                  </h4>
                  <p className="text-[11.5px] font-medium text-slate-500 leading-snug mt-0.5">
                    We are here to help your business grow.
                  </p>
                </div>
              </div>

              <Link
                to="/contact-us"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-1.5 bg-[#20103A] hover:bg-[#351A5E] text-white font-bold text-xs px-5 py-2 rounded-full shadow-xs transition-all cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-200" />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Statistics Counter Bar (Exact Image 1 Compartment Layout) */}
        <div className="w-full border-t border-slate-200/90 pt-5 pb-2 mt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center shrink-0">
          <div className="flex items-center justify-start sm:justify-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#F4ECFC] text-[#5B2A8A] flex items-center justify-center shrink-0">
              <FileBadge className="w-5 h-5 text-[#5B2A8A] stroke-[1.8]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold text-[#331B54] leading-tight font-sans">2026</span>
              <span className="text-[11.5px] font-medium text-slate-500 leading-tight mt-0.5">Established & Launched</span>
            </div>
          </div>

          <div className="flex items-center justify-start sm:justify-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#F4ECFC] text-[#5B2A8A] flex items-center justify-center shrink-0">
              <FolderCheck className="w-5 h-5 text-[#5B2A8A] stroke-[1.8]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold text-[#331B54] leading-tight font-sans">5+ Projects</span>
              <span className="text-[11.5px] font-medium text-slate-500 leading-tight mt-0.5">Live & Delivered</span>
            </div>
          </div>

          <div className="flex items-center justify-start sm:justify-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#F4ECFC] text-[#5B2A8A] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#5B2A8A] stroke-[1.8]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold text-[#331B54] leading-tight font-sans">10+ Projects</span>
              <span className="text-[11.5px] font-medium text-slate-500 leading-tight mt-0.5">In Engineering</span>
            </div>
          </div>

          <div className="flex items-center justify-start sm:justify-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#F4ECFC] text-[#5B2A8A] flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-[#5B2A8A] stroke-[1.8]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold text-[#331B54] leading-tight font-sans">4.9/5 Rating</span>
              <span className="text-[11.5px] font-medium text-slate-500 leading-tight mt-0.5">On Google & Clutch</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
