import { 
  Home, 
  UserCheck, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Building, 
  Mail, 
  Monitor, 
  ShoppingCart, 
  Megaphone, 
  Search, 
  Database, 
  Smartphone, 
  Palette, 
  Globe, 
  FileText, 
  Server, 
  Rss, 
  HardDrive, 
  MapPin, 
  Phone, 
  Clock, 
  CreditCard,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="relative bg-gradient-to-b from-[#F5EFFC] via-[#FAF5FF] to-[#F1E8FA] text-slate-800 select-none border-t border-purple-200/80 overflow-hidden font-sans">
    
    {/* Background World Map Vector Pattern Watermark */}
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.035] pointer-events-none z-0">
      <svg viewBox="0 0 1000 500" className="w-full h-auto fill-[#552782]">
        <path d="M150 120 h4 v4 h-4 z M160 120 h4 v4 h-4 z M170 120 h4 v4 h-4 z M140 130 h4 v4 h-4 z M150 130 h4 v4 h-4 z M160 130 h4 v4 h-4 z M170 130 h4 v4 h-4 z M180 130 h4 v4 h-4 z M130 140 h4 v4 h-4 z M140 140 h4 v4 h-4 z M150 140 h4 v4 h-4 z M160 140 h4 v4 h-4 z M170 140 h4 v4 h-4 z M180 140 h4 v4 h-4 z M190 140 h4 v4 h-4 z M200 140 h4 v4 h-4 z M120 150 h4 v4 h-4 z M130 150 h4 v4 h-4 z M140 150 h4 v4 h-4 z M150 150 h4 v4 h-4 z M160 150 h4 v4 h-4 z M170 150 h4 v4 h-4 z M180 150 h4 v4 h-4 z M190 150 h4 v4 h-4 z M200 150 h4 v4 h-4 z M210 150 h4 v4 h-4 z M220 150 h4 v4 h-4 z M130 160 h4 v4 h-4 z M140 160 h4 v4 h-4 z M150 160 h4 v4 h-4 z M160 160 h4 v4 h-4 z M170 160 h4 v4 h-4 z M180 160 h4 v4 h-4 z M190 160 h4 v4 h-4 z M200 160 h4 v4 h-4 z M210 160 h4 v4 h-4 z M140 170 h4 v4 h-4 z M150 170 h4 v4 h-4 z M160 170 h4 v4 h-4 z M170 170 h4 v4 h-4 z M180 170 h4 v4 h-4 z M190 170 h4 v4 h-4 z M150 180 h4 v4 h-4 z M160 180 h4 v4 h-4 z M170 180 h4 v4 h-4 z M180 180 h4 v4 h-4 z M160 190 h4 v4 h-4 z M170 190 h4 v4 h-4 z M500 100 h4 v4 h-4 z M510 100 h4 v4 h-4 z M520 100 h4 v4 h-4 z M530 100 h4 v4 h-4 z M490 110 h4 v4 h-4 z M500 110 h4 v4 h-4 z M510 110 h4 v4 h-4 z M520 110 h4 v4 h-4 z M530 110 h4 v4 h-4 z M540 110 h4 v4 h-4 z M550 110 h4 v4 h-4 z M480 120 h4 v4 h-4 z M490 120 h4 v4 h-4 z M500 120 h4 v4 h-4 z M510 120 h4 v4 h-4 z M520 120 h4 v4 h-4 z M530 120 h4 v4 h-4 z M540 120 h4 v4 h-4 z M550 120 h4 v4 h-4 z M560 120 h4 v4 h-4 z M570 120 h4 v4 h-4 z M480 130 h4 v4 h-4 z M490 130 h4 v4 h-4 z M500 130 h4 v4 h-4 z M510 130 h4 v4 h-4 z M520 130 h4 v4 h-4 z M530 130 h4 v4 h-4 z M540 130 h4 v4 h-4 z M550 130 h4 v4 h-4 z M560 130 h4 v4 h-4 z M570 130 h4 v4 h-4 z M580 130 h4 v4 h-4 z M490 140 h4 v4 h-4 z M500 140 h4 v4 h-4 z M510 140 h4 v4 h-4 z M520 140 h4 v4 h-4 z M530 140 h4 v4 h-4 z M540 140 h4 v4 h-4 z M550 140 h4 v4 h-4 z M560 140 h4 v4 h-4 z M570 140 h4 v4 h-4 z M500 150 h4 v4 h-4 z M510 150 h4 v4 h-4 z M520 150 h4 v4 h-4 z M530 150 h4 v4 h-4 z M540 150 h4 v4 h-4 z M550 150 h4 v4 h-4 z M510 160 h4 v4 h-4 z M520 160 h4 v4 h-4 z M530 160 h4 v4 h-4 z M540 160 h4 v4 h-4 z M750 140 h4 v4 h-4 z M760 140 h4 v4 h-4 z M770 140 h4 v4 h-4 z M780 140 h4 v4 h-4 z M740 150 h4 v4 h-4 z M750 150 h4 v4 h-4 z M760 150 h4 v4 h-4 z M770 150 h4 v4 h-4 z M780 150 h4 v4 h-4 z M790 150 h4 v4 h-4 z M800 150 h4 v4 h-4 z M740 160 h4 v4 h-4 z M750 160 h4 v4 h-4 z M760 160 h4 v4 h-4 z M770 160 h4 v4 h-4 z M780 160 h4 v4 h-4 z M790 160 h4 v4 h-4 z M800 160 h4 v4 h-4 z M810 160 h4 v4 h-4 z M750 170 h4 v4 h-4 z M760 170 h4 v4 h-4 z M770 170 h4 v4 h-4 z M780 170 h4 v4 h-4 z M790 170 h4 v4 h-4 z M800 170 h4 v4 h-4 z M760 180 h4 v4 h-4 z M770 180 h4 v4 h-4 z M780 180 h4 v4 h-4 z M790 180 h4 v4 h-4 z M770 190 h4 v4 h-4 z M780 190 h4 v4 h-4 z" />
      </svg>
    </div>

    {/* ── Top Main Footer Navigation Columns & Reviews ── */}
    <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">

        {/* Col 1: Company Info (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-base font-extrabold text-[#1E1238] mb-4 font-sans tracking-tight">
            Company <span className="font-serif italic text-[#552782] font-semibold">Info</span>
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
            <li>
              <Link to="/" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Home className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <UserCheck className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/our-team" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Users className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Our Team</span>
              </Link>
            </li>
            <li>
              <Link to="/our-portfolio" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Briefcase className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Clients</span>
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <MessageSquare className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Testimonials</span>
              </Link>
            </li>
            <li>
              <Link to="/careers" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Building className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Careers</span>
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Mail className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 2: Our Services (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-base font-extrabold text-[#1E1238] mb-4 font-sans tracking-tight">
            Our <span className="font-serif italic text-[#552782] font-semibold">Services</span>
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
            <li>
              <Link to="/website-design-service-in-delhi" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Monitor className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Web Development</span>
              </Link>
            </li>
            <li>
              <Link to="/e-commerce-website-services-in-delhi" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <ShoppingCart className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>eCommerce Development</span>
              </Link>
            </li>
            <li>
              <Link to="/smm-service-in-delhi" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Megaphone className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Digital Marketing</span>
              </Link>
            </li>
            <li>
              <Link to="/seo-service-in-delhi" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Search className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>SEO Services</span>
              </Link>
            </li>
            <li>
              <Link to="/crm-development" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Database className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>CRM Development</span>
              </Link>
            </li>
            <li>
              <Link to="/app-development-services" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Smartphone className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Mobile App Development</span>
              </Link>
            </li>
            <li>
              <Link to="/ui-ux-design" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Palette className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>UI/UX Design</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Work & Resources (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-base font-extrabold text-[#1E1238] mb-4 font-sans tracking-tight">
            Work & <span className="font-serif italic text-[#552782] font-semibold">Resources</span>
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
            <li>
              <Link to="/our-portfolio" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Briefcase className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Web Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/seo-service-in-delhi" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Globe className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>SEO Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <FileText className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Case Study</span>
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Server className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>IT Outsourcing</span>
              </Link>
            </li>
            <li>
              <Link to="/blog" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <Rss className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Blogs</span>
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="inline-flex items-center gap-2 hover:text-[#552782] transition-colors group">
                <HardDrive className="w-3.5 h-3.5 text-purple-700 group-hover:scale-110 transition-transform" />
                <span>Domain & Hosting</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Review Ratings & Badges (3 cols) */}
        <div className="lg:col-span-3 flex flex-col justify-start">
          <p className="text-xs font-medium text-slate-700 leading-relaxed mb-4">
            WebsBond is rated <strong className="font-extrabold text-[#1E1238]">4.9 / 5</strong> average from <strong className="font-extrabold text-[#552782]">50+ verified reviews</strong> on Google Reviews!
          </p>

          {/* Google Verified Review Card Badge */}
          <div className="bg-white rounded-xl border border-purple-200/80 p-3 shadow-xs flex items-center gap-3 mb-3 max-w-[210px]">
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center font-extrabold text-blue-600 text-lg">
              G
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-amber-400 text-xs mb-0.5">
                ★ ★ ★ ★ ★
              </div>
              <div className="text-[10px] font-bold text-slate-600">
                <strong className="text-slate-900 font-extrabold">4.9 Rating</strong> | 50+ Reviews
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* ── Middle Divider & Contact/Office Grid ── */}
    <div className="border-t border-purple-200/70 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

          {/* Logo & Social Links (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <div className="flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                <Youtube className="w-4 h-4 fill-current" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* IND (India) Regional Office (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl sm:text-2xl font-black text-[#552782] tracking-tighter">IND</span>
            </div>
            <div className="space-y-2 text-xs font-semibold text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <span>Unit No-301, 3rd Floor, NDM-1, NSP, Pitampura, Delhi 110034</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-700 shrink-0" />
                <a href="tel:+919306623619" className="hover:text-purple-800 font-bold">+91 9306623619</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-700 shrink-0" />
                <span>Mon - Fri, 10 AM - 07 PM</span>
              </div>
            </div>
          </div>

          {/* Mail Us & Pay Now CTA (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start justify-between h-full">
            <div>
              <h5 className="text-sm font-extrabold text-[#1E1238] mb-2 font-sans">
                Mail us at
              </h5>
              <div className="space-y-1.5 text-xs font-semibold text-slate-700 mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-purple-700" />
                  <span><strong>Sales:</strong> <a href="mailto:connect@websbond.com" className="hover:text-purple-800">connect@websbond.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-purple-700" />
                  <span><strong>Career:</strong> <a href="mailto:hr@websbond.com" className="hover:text-purple-800">hr@websbond.com</a></span>
                </div>
              </div>
            </div>

            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-[#552782] hover:bg-purple-900 text-white font-extrabold text-xs px-6 py-2.5 rounded-full transition-all shadow-md hover:scale-105"
            >
              <span>Pay Now</span>
              <CreditCard className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </div>

    {/* ── Bottom Copyright & Legal Links ── */}
    <div className="border-t border-purple-200/60 py-4 text-xs font-semibold text-slate-600 relative z-10 bg-purple-50/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          © 2016-2026 All rights reserved to <strong className="text-[#1E1238] font-extrabold">WebsBond Pvt Ltd</strong>
        </div>
        <div className="flex items-center gap-4 text-slate-600">
          <Link to="/contact-us" className="hover:text-[#552782] transition-colors">Refund Policy</Link>
          <span>|</span>
          <Link to="/contact-us" className="hover:text-[#552782] transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link to="/contact-us" className="hover:text-[#552782] transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </div>

  </footer>
);
