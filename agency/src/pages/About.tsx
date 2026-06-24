import { Sparkles, Target, Eye, Heart, CheckCircle2, Users, Trophy, Smile, Star, ArrowRight, Database, Cpu, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";
import a3 from "@/assets/avatar3.jpg";

const values = [
  { icon: Heart, title: "Transparency First", desc: "Our pricing contracts are simple and honest. No hidden parameters, no surprise bills." },
  { icon: Users, title: "Direct Connection", desc: "We do not use bots. You speak directly with our lead developers and project designers." },
  { icon: Trophy, title: "Quality Codebases", desc: "No templates or page builder speed blockers. We write custom lightweight React code." },
  { icon: Smile, title: "Client First Handoff", desc: "We strive to deliver complete business growth and seamless analytics integrations." },
];

const processSteps = [
  { n: "01", t: "Discovery & Blueprint", d: "Mapping your business goals, targets, and structural requirements." },
  { n: "02", t: "Bespoke Design", d: "Uniquely designing layouts and interactive flow prototypes." },
  { n: "03", t: "Clean Code Engineering", d: "React & Next.js custom coding under high-performance rules." },
  { n: "04", t: "Launch & SEO Retainers", d: "Google maps indexing, speed tuning, and 24/7 human support." },
];

export const AboutPage = () => {
  return (
    <Layout>
      <SEO 
        title="About Websbond | Elite Website Designers & Digital Agency Indore" 
        description="Websbond — Indore ka best website design company. Custom React websites, local Google SEO, aur direct developer support. Website banwana hai? Mil ke baat karein." 
        path="/about"
        keywords="about websbond, website designer Indore, digital agency Indore, website banwaye, best web developer Indore"
      />

      {/* ── Centered Hero Header ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface-2 to-indigo-500/5 dark:to-indigo-950/20 pt-8 pb-12 border-b border-border">
        
        <div className="absolute inset-0 grid-mesh opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none animate-aurora-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none animate-aurora-2" />
        <div className="absolute top-12 right-12 w-6 h-6 border border-indigo-200/40 rounded-full animate-pulse pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left gap-5">
              <div className="inline-flex items-center gap-2 border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50/60 dark:bg-indigo-950/20 backdrop-blur-md text-indigo-600 dark:text-indigo-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                Elite Software Engineering — Indore
              </div>
              
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground tracking-tight">
                Built With Purpose.<br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-500 bg-clip-text text-transparent">
                  Engineered For Growth.
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed font-semibold">
                Websbond — Indore ka best digital agency. Hum custom React websites, data-backed local SEO, aur 24/7 direct developer support provide karte hain. Website banwana hai? Shuru karein.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-xs"
                >
                  Contact Our Team <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://wa.me/919306623619?text=Namaste!%20Websbond%20ke%20baare%20mein%20jaanna%20chahta%20hun."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all text-xs shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
                <a
                  href="#about-vision"
                  className="inline-flex items-center gap-2 bg-card border border-border hover:bg-surface-2 text-foreground font-bold px-6 py-3 rounded-xl transition-all text-xs shadow-sm"
                >
                  Read Our Story
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {["100% Code Handoff", "Direct WhatsApp Line", "0% Upfront Payment", "Google #1 Rankings"].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Database reviews visualization */}
            <div className="relative flex items-center justify-center pt-8 lg:pt-0">
              <div className="glass-panel border-slate-200/80 dark:border-white/[0.06] rounded-3xl p-5 shadow-sm w-full max-w-[340px] font-mono text-[10px] text-muted-foreground">
                <div className="flex items-center gap-1.5 border-b border-slate-200/60 dark:border-white/[0.06] pb-2 text-foreground font-bold">
                  <Database className="w-4 h-4 text-indigo-500" />
                  <span>Data Layer Query</span>
                </div>
                <div className="py-3 flex flex-col gap-1">
                  <div className="text-slate-600 dark:text-slate-400">SELECT * FROM client_reviews ORDER BY rating DESC;</div>
                  <div className="text-emerald-600 dark:text-emerald-500/80">{"=>"} 3 rows returned (0.01s)</div>
                </div>
                <div className="space-y-2 border-t border-slate-200/60 dark:border-white/[0.06] pt-3">
                  <div className="p-2 bg-slate-100/50 dark:bg-white/[0.02] rounded-lg">
                    <span className="text-indigo-600 dark:text-indigo-400">Rohit Verma:</span> "Websbond completely transformed our hotel's online presence."
                  </div>
                  <div className="p-2 bg-slate-100/50 dark:bg-white/[0.02] rounded-lg">
                    <span className="text-indigo-600 dark:text-indigo-400">Neha Sharma:</span> "Very professional team and instant 24/7 support."
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Page Content ── */}
      <div id="about-vision" className="bg-background text-foreground py-10 transition-colors duration-300">
        
        {/* Mission / Vision split grid */}
        <section className="container mx-auto px-4 py-4 grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "Delivering world-class design standards and robust coding assets to Indian small and medium businesses, without charging overpriced consulting rates." },
            { icon: Eye, title: "Our Vision", desc: "Creating a new benchmark in web delivery where clients have full project code ownership, 100% search speed score, and developer direct transparency." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-indigo-300/50 dark:hover:border-indigo-500/40 hover:bg-slate-500/[0.02] dark:hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-brand-soft text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/10 grid place-items-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 py-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="mt-2 text-muted-foreground text-xs sm:text-sm font-medium">These principles define every project we build and handoff.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-panel rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-300/40 dark:hover:border-indigo-500/20 hover:bg-slate-500/[0.02] dark:hover:bg-white/[0.03] transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-brand-soft text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/10 grid place-items-center mb-3">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-foreground mb-1.5">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="container mx-auto px-4 py-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Our Engineering <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Process</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-5">
            {processSteps.map(({ n, t, d }) => (
              <div key={n} className="glass-panel rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/20 hover:bg-slate-500/[0.02] dark:hover:bg-white/[0.03] transition-all duration-350">
                <div className="font-display font-extrabold text-3xl text-indigo-500/25 mb-2">{n}</div>
                <h3 className="font-display font-bold text-sm sm:text-base text-foreground mb-1.5">{t}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Grid - Replaced with trust-building metrics */}
        <section className="container mx-auto px-4 py-6">
          <div className="glass-panel border-slate-200/80 dark:border-white/[0.06] rounded-3xl shadow-sm grid grid-cols-2 md:grid-cols-4 divide-y divide-x divide-slate-200/60 dark:divide-white/[0.06] md:divide-y-0">
            {[
              { icon: Users, val: "Direct", label: "WhatsApp Chat" },
              { icon: Trophy, val: "100%", label: "Speed Guarantee" },
              { icon: CheckCircle2, val: "0%", label: "Upfront payment" },
              { icon: Smile, val: "100%", label: "Code Handoff" },
            ].map(({ icon: Icon, val, label }) => (
              <div key={label} className="p-5 sm:p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-soft text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/10 grid place-items-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-lg sm:text-xl text-foreground tracking-tight">{val}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-bold uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Founders / Team Section */}
        <section className="container mx-auto px-4 py-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
              Our Leadership
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight animate-fade-in">
              Meet Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Founders</span>
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-semibold">
              The engineers and builders behind Websbond's client success stories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Abhishek */}
            <div className="glass-panel rounded-3xl p-5 sm:p-6 shadow-sm border border-border hover:border-indigo-300 dark:hover:border-indigo-500/20 hover:bg-slate-500/[0.02] dark:hover:bg-white/[0.02] transition-all duration-300">
              <h3 className="font-display font-bold text-base text-foreground">Abhishek Singh Rawat</h3>
              <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider mt-0.5">Co-Founder &amp; Tech Lead</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Oversees our custom lightweight React codebases, API performance, and technical SEO structure.</p>
            </div>

            {/* Gopal */}
            <div className="glass-panel rounded-3xl p-5 sm:p-6 shadow-sm border border-border hover:border-indigo-300 dark:hover:border-indigo-500/20 hover:bg-slate-500/[0.02] dark:hover:bg-white/[0.02] transition-all duration-300">
              <h3 className="font-display font-bold text-base text-foreground">Gopal Sharma</h3>
              <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider mt-0.5">Co-Founder &amp; Design Lead</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Directs UI/UX visual flow, creative brand messaging, and client business scaling retainers.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-8 mb-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Client <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent">love.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Rohit Verma", role: "Hotel Owner, Kanpur", img: a1, text: "Websbond completely transformed our hotel's online presence. Direct bookings increased 3x!" },
              { name: "Neha Sharma", role: "Salon Owner, Lucknow", img: a2, text: "Very professional team and instant 24/7 support. Highly recommended!" },
              { name: "Amit Patel", role: "Kirana Store, Indore", img: a3, text: "The website was designed so beautifully that customers started messaging us directly." },
            ].map((r, idx) => (
              <article key={idx} className="glass-panel rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-300/40 dark:hover:border-indigo-500/20 hover:bg-slate-500/[0.02] dark:hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="mt-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">"{r.text}"</p>
                </div>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
                  <img src={r.img} alt={r.name} className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-800" />
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-foreground">{r.name}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">{r.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>

      <CtaBanner 
        title="Let's build something" 
        highlight="huge together." 
        subtitle="Your business vision, our engineering expertise — the perfect match." 
      />
    </Layout>
  );
};

export default AboutPage;
