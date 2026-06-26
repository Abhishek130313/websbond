import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Loader2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

export const Footer = ({ theme = "dark" }: { theme?: "dark" | "light" }) => {
  const [subscribing, setSubscribing] = useState(false);

  return (
    <footer className="bg-slate-950 border-t border-white/[0.06] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full radial-glow pointer-events-none" style={{ "--glow-color": "rgba(59, 130, 246, 0.03)" } as React.CSSProperties} />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/[0.06]">
        {/* Company Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Logo size="lg" />
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            Crafting premium custom websites, running high-ROI marketing campaigns, and providing 24/7 real human support for businesses scaling online.
          </p>
          
          {/* Contact Details */}
          <div className="flex flex-col gap-3.5 text-xs text-slate-300 font-medium">
            <a href="tel:+919306623619" className="flex items-center gap-2 hover:text-white transition-colors group w-fit">
              <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <span>+91 9306623619</span>
            </a>
            <div className="flex items-center gap-2 group w-fit text-slate-300">
              <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                <MapPin className="w-3.5 h-3.5 text-amber-400 animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
              <span>Sector 48, Sohna Road, Gurugram, Haryana - 122018</span>
            </div>
            <a href="mailto:websbond@websbond.com" className="flex items-center gap-2 hover:text-white transition-colors group w-fit">
              <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <span className="font-mono">websbond@websbond.com</span>
            </a>
            <a href="mailto:service@websbond.com" className="flex items-center gap-2 hover:text-white transition-colors group w-fit">
              <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="font-mono">service@websbond.com</span>
            </a>
            <a href="mailto:help@websbond.com" className="flex items-center gap-2 hover:text-white transition-colors group w-fit">
              <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span className="font-mono">help@websbond.com</span>
            </a>
          </div>

          <div className="flex gap-2">
            {[
              { icon: Facebook, href: "https://facebook.com/websbond", label: "Facebook" },
              { icon: Instagram, href: "https://instagram.com/websbond", label: "Instagram" },
              { icon: Linkedin, href: "https://linkedin.com/company/websbond", label: "LinkedIn" },
              { icon: Youtube, href: "https://youtube.com/@websbond", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a 
                key={label} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 grid place-items-center rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 text-slate-400 hover:text-white transition-all"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div className="lg:col-span-2 md:pl-4">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">Company</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Our Work", "/our-work"],
              ["About Us", "/about"],
              ["Blog", "/blog"],
              ["Contact", "/contact"]
            ].map(([l, to]) => (
              <li key={l}>
                <Link to={to} className="hover:text-white transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div className="lg:col-span-3">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">Services</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            {[
              "Website Development",
              "SEO Optimization",
              "Digital Marketing & Ads",
              "Brand Design",
              "Social Media Management",
              "24/7 Human Support"
            ].map((l) => (
              <li key={l}>
                <Link to="/services" className="hover:text-white transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="lg:col-span-3">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            Practical digital tips, marketing strategies, and design updates sent straight to your inbox.
          </p>
          
          <form 
            className="space-y-2.5" 
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const email = (form.elements.namedItem("footer-email") as HTMLInputElement)?.value;
              if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                toast({ title: "Invalid email address", description: "Please enter a valid email address.", variant: "destructive" });
                return;
              }
              setSubscribing(true);
              try {
                const response = await fetch(getApiUrl("/api/newsletter"), {
                  method: "POST", 
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                });
                if (!response.ok) throw new Error("Subscription failed");
                toast({ title: "Subscribed!", description: "You will now receive our latest updates in your inbox." });
                form.reset();
              } catch {
                toast({ title: "Subscription failed", description: "Please try again later.", variant: "destructive" });
              }
              setSubscribing(false);
            }}
          >
            <input 
              type="email" 
              name="footer-email" 
              aria-label="Newsletter email address" 
              placeholder="Enter your email"
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-purple-500 focus:bg-white/[0.04] transition-all font-sans" 
            />
            <button 
              type="submit" 
              disabled={subscribing}
              className="w-full bg-white hover:bg-slate-100 text-slate-950 font-bold py-3 rounded-xl transition-all disabled:opacity-60 flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
            >
              {subscribing && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              {subscribing ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">
        <span>© {new Date().getFullYear()} Websbond. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};
