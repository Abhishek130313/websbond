import { useState, useRef } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { Star, Loader2, Phone, ExternalLink, CheckCircle } from "lucide-react";
import heroBg from "@/assets/bg_testimonials_1782999819201.png";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import { REAL_GOOGLE_REVIEWS, GOOGLE_BUSINESS_PROFILE_URL } from "@/data/googleReviews";

const SERVICES_OPTIONS = [
  "Website Design & Development",
  "SEO Optimization",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Content Marketing",
  "E-Commerce Solutions",
  "App Development",
  "Google My Business",
];

const VIDEOS = [
  { id: "placeholder", name: "Rajesh Kumar", role: "Business Owner, Delhi", thumb: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80" },
  { id: "placeholder", name: "Sunita Mehta", role: "Clinic Director, Gurgaon", thumb: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80" },
  { id: "placeholder", name: "Priya Sharma", role: "E-Commerce Brand, NCR", thumb: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80" },
  { id: "placeholder", name: "Dr. Anil Gupta", role: "Medical Practice, Delhi", thumb: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80" },
];

export const TestimonialsPage = () => {
  const [playing, setPlaying] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const displayedReviews = showAllReviews ? REAL_GOOGLE_REVIEWS : REAL_GOOGLE_REVIEWS.slice(0, 4);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name    = (data.get("name")    as string)?.trim();
    const phone   = (data.get("phone")   as string)?.trim();
    const email   = (data.get("email")   as string)?.trim();
    const service = (data.get("service") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !phone || !email) {
      toast({ title: "Please fill in all required fields (*).", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(getApiUrl("/api/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, message, source: "Testimonials Form" }),
      });
      if (!res.ok) throw new Error("Failed");
      toast({ title: "🎉 Quote Request Received!", description: "We will contact you shortly." });
      form.reset();
    } catch {
      toast({ title: "Something went wrong.", description: "Please call us directly at +91 9306623619.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="Client Reviews & Testimonials | Websbond" 
        description="Hear what our clients say about their digital growth journey with Websbond. Verified reviews for SEO, SMO, website development, and PPC across Delhi NCR and Haryana." 
        path="/testimonials"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Testimonials", path: "/testimonials" }]}
      />

      {/* ── Page Hero Header ── */}
      <section 
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center hero-image-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            
            {/* Left Column: Title and Subtext */}
            <div className="space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-1000">
              <h1 className="font-jost font-black text-4xl md:text-6xl leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                Testimonials
              </h1>
              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed max-w-xl font-medium drop-shadow-md">
                Hear what our clients have to say about their journey with us—real experiences, real success, and lasting partnerships built on trust and results.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+919306623619"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-full text-[#002b49] bg-white transition-all hover:scale-105 shadow-md text-sm"
                >
                  <Phone className="w-4 h-4 text-[#eb560c]" /> +91 9306623619
                </a>
              </div>
            </div>

            {/* Right Column: Quote Form Card */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 fill-mode-both">
              <div
                className="bg-white/[0.08] border border-white/[0.15] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
              >
                <h3 className="font-jost font-bold text-xl border-b border-white/20 pb-3 mb-5 text-left text-white">
                  Send Your Message
                </h3>

                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c]"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter Your Email Id"
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c]"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter Your Mobile No."
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c]"
                  />

                  <select
                    name="service"
                    required
                    className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-semibold"
                  >
                    <option value="">Select Services *</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>

                  {/* Mock ReCAPTCHA */}
                  <div className="bg-slate-50 border border-gray-150 rounded-xl p-3 flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-500 font-bold select-none">
                      <input 
                        type="checkbox" 
                        required 
                        className="w-4 h-4 rounded border-gray-300 text-[#eb560c] focus:ring-[#eb560c] accent-[#eb560c] cursor-pointer" 
                      />
                      I'm not a robot
                    </label>
                    <div className="flex flex-col items-center">
                      <img loading="lazy" decoding="async" 
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                        className="w-5 h-5 object-contain opacity-75" 
                        alt="recaptcha logo" 
                      />
                      <span className="text-[7px] text-gray-400 font-bold tracking-tight mt-0.5">reCAPTCHA</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-lg transition-all duration-300 hover:opacity-90 disabled:opacity-60 text-sm uppercase tracking-wider bg-[#002b49]"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      "Send Message !"
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Client Video Gallery Section ── */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span style={{ color: "#004b75" }}>→</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#eb560c]">
                OUR CLIENT
              </span>
            </div>
            <h2
              className="font-jost font-black text-2xl sm:text-4xl text-[#002b49]"
            >
              Hear What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {VIDEOS.map((v, i) => {
              const isPlaceholder = v.id === "placeholder";
              return (
              <button
                key={i}
                onClick={() => !isPlaceholder && setPlaying(v.id)}
                className="group relative overflow-hidden rounded-2xl text-left w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border border-gray-150"
                style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.03)", cursor: isPlaceholder ? "default" : "pointer" }}
              >
                <div className="relative overflow-hidden" style={{ height: 260 }}>
                  <img
loading="lazy" decoding="async"                     src={v.thumb}
                    alt={v.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-all" />

                  {isPlaceholder ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="text-white text-xs font-semibold uppercase tracking-wider bg-black/50 px-3 py-1.5 rounded-full">
                        Video Coming Soon
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 bg-[#FF0000]">
                        <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Details Footer */}
                <div className="p-4 border-t border-gray-100">
                  <h4 className="font-jost font-bold text-sm text-[#002b49]">{v.name}</h4>
                  <p className="text-gray-400 text-xs font-semibold mt-0.5">{v.role}</p>
                </div>
              </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Need Help Banner Section ── */}
      <section 
        className="py-10 text-white"
        style={{ background: "#002b49" }}
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
            <h3 className="font-jost font-bold text-lg md:text-xl uppercase tracking-wider">
              Need Help? Contact with our marketing expert!
            </h3>
            <a
              href="tel:+919306623619"
              className="inline-flex items-center gap-2 font-bold px-6 py-2.5 rounded-full text-[#002b49] bg-white transition-all hover:scale-105 text-sm"
            >
              <Phone className="w-4 h-4 text-[#eb560c]" /> +91 9306623619
            </a>
          </div>
        </div>
      </section>

      {/* ── Client Text Reviews Section (Real Google Business Reviews) ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs mb-3 text-xs font-bold text-slate-800">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>4.9 / 5.0 Google Business Reviews</span>
            </div>
            <h2 className="font-jost font-black text-2xl sm:text-4xl text-[#002b49]">
              Verified Google Client Reviews
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Read real feedback directly from our verified Google Business Profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {displayedReviews.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Verified Google Review</span>
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{r.text}"
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs flex items-center justify-center border border-indigo-200">
                      {r.author_name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-jost font-bold text-sm text-[#002b49]">{r.author_name}</h4>
                      <span className="text-[10px] text-slate-500 font-medium block">{r.author_role}</span>
                    </div>
                  </div>
                  <a 
                    href={GOOGLE_BUSINESS_PROFILE_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Show More & Google Profile Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="px-6 py-3 rounded-full bg-[#002b49] hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-sm"
            >
              {showAllReviews ? "Show Fewer Reviews" : "Show More Google Reviews"}
            </button>

            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-800 hover:text-indigo-600 font-bold text-xs transition-all shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
              <span>View All Reviews on Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {playing && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setPlaying(null)}
        >
          <div
            className="w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {playing === "placeholder" ? (
              <div className="text-center text-white p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <p className="text-lg font-semibold">Real client video coming soon</p>
                <p className="text-sm text-white/60 mt-2">We are recording authentic testimonial videos with this client.</p>
              </div>
            ) : (
            <iframe
              src={`https://www.youtube.com/embed/${playing}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              title="Client Testimonial Video"
            />
            )}
          </div>
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-bold"
            onClick={() => setPlaying(null)}
          >
            ×
          </button>
        </div>
      )}
    </Layout>
  );
};

export default TestimonialsPage;

