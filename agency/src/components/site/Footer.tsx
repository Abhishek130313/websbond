import { Phone, Mail, MapPin, Star, ShieldCheck, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import logo3d from "@/assets/websbond-logo-3d.webp";

export const Footer = () => (
  <footer className="bg-white text-slate-900 select-none border-t border-purple-200">
    
    {/* ── Top Ratings & Reviews Bar (Video 00:59) ── */}
    <div className="bg-[#F7F6FB] py-6 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="text-xs font-bold text-slate-700">
          Websbond is rated <span className="text-purple-800 font-extrabold">4.9 / 5</span> average score from 250+ verified client reviews on Google & Clutch!
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white border border-purple-200 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-extrabold text-slate-800 shadow-xs">
            <span className="text-amber-500 font-bold">★ 4.9 Rating</span>
            <span className="text-slate-400">|</span>
            <span className="text-purple-800">Google Verified</span>
          </div>
          <div className="bg-white border border-purple-200 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-extrabold text-slate-800 shadow-xs">
            <span className="text-amber-500 font-bold">★ 5.0 Rating</span>
            <span className="text-slate-400">|</span>
            <span className="text-purple-800">Clutch Top SEO</span>
          </div>
        </div>
      </div>
    </div>

    {/* ── Main Multi-Column Footer Grid (Video 01:00 - 01:03) ── */}
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Col 1: Brand & Logo */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center rounded-xl bg-purple-100 w-9 h-9">
              <img src={logo3d} alt="Websbond logo" className="w-7 h-7 object-contain" />
            </span>
            <span className="font-extrabold text-xl text-purple-950 font-jost">
              websbond<span className="text-purple-700">.com</span>
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            Websbond is a top-tier digital marketing & website design agency in Delhi NCR offering custom web apps, SEO, PPC, and GMB growth platforms.
          </p>
        </div>

        {/* Col 2: Company Info */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-950 mb-4 font-mono">
            Company Info
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
            <li><Link to="/" className="hover:text-purple-800 transition-colors">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-purple-800 transition-colors">About Us</Link></li>
            <li><Link to="/our-portfolio" className="hover:text-purple-800 transition-colors">Our Portfolio</Link></li>
            <li><Link to="/case-studies" className="hover:text-purple-800 transition-colors">Case Studies</Link></li>
            <li><Link to="/testimonials" className="hover:text-purple-800 transition-colors">Testimonials</Link></li>
            <li><Link to="/blog" className="hover:text-purple-800 transition-colors">Blog & News</Link></li>
          </ul>
        </div>

        {/* Col 3: Our Services */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-950 mb-4 font-mono">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
            <li><Link to="/website-design-service-in-delhi" className="hover:text-purple-800 transition-colors">Web Development</Link></li>
            <li><Link to="/seo-service-in-delhi" className="hover:text-purple-800 transition-colors">SEO & AI Search</Link></li>
            <li><Link to="/google-ads-services" className="hover:text-purple-800 transition-colors">Google Ads & PPC</Link></li>
            <li><Link to="/smm-service-in-delhi" className="hover:text-purple-800 transition-colors">Social Media Marketing</Link></li>
            <li><Link to="/gmb-service-in-delhi" className="hover:text-purple-800 transition-colors">GMB Local Maps</Link></li>
            <li><Link to="/e-commerce-website-services-in-delhi" className="hover:text-purple-800 transition-colors">E-Commerce Stores</Link></li>
          </ul>
        </div>

        {/* Col 4: Work & Resources */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-950 mb-4 font-mono">
            Work & Resources
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
            <li><Link to="/our-portfolio" className="hover:text-purple-800 transition-colors">Web Portfolio</Link></li>
            <li><Link to="/seo-analyzer" className="hover:text-purple-800 transition-colors">Free SEO Audit</Link></li>
            <li><Link to="/case-studies" className="hover:text-purple-800 transition-colors">Case Study Library</Link></li>
            <li><Link to="/contact-us" className="hover:text-purple-800 transition-colors">Client Support</Link></li>
            <li><Link to="/contact-us" className="hover:text-purple-800 transition-colors">Domain & Hosting</Link></li>
          </ul>
        </div>

        {/* Col 5: Location & Direct Contact */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-950 mb-4 font-mono">
            Contact Us
          </h4>
          <div className="space-y-3 text-xs text-slate-600 font-medium mb-6">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
              <span>Sector 48, Sohna Road, Gurugram, Haryana 122018</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-700 shrink-0" />
              <a href="tel:+919306623619" className="hover:text-purple-800 font-bold">+91 9306623619</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-700 shrink-0" />
              <a href="mailto:connect@websbond.com" className="hover:text-purple-800 font-bold">connect@websbond.com</a>
            </div>
          </div>

          <Link
            to="/payment"
            className="inline-flex items-center gap-2 bg-purple-800 hover:bg-purple-900 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Pay Now ➔</span>
          </Link>
        </div>

      </div>
    </div>

    {/* ── Bottom Bar (Video 01:04) ── */}
    <div className="bg-[#F7F6FB] border-t border-purple-100 py-4 text-xs text-slate-600 font-medium">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          Copyright © 2016-2026 All rights reserved to <strong className="text-purple-950">Websbond Digital Engine</strong>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/contact-us" className="hover:text-purple-800">Refund Policy</Link>
          <span>|</span>
          <Link to="/contact-us" className="hover:text-purple-800">Privacy Policy</Link>
          <span>|</span>
          <Link to="/contact-us" className="hover:text-purple-800">Terms & Conditions</Link>
        </div>
      </div>
    </div>

  </footer>
);
