import { useState } from "react";
import { CheckCircle2, User, Phone, Mail, MessageSquare, Send, Sparkles } from "lucide-react";
import { submitContactForm } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export const AboutSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Fields Required",
        description: "Please fill in your Name, Phone, and Email.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: "Consultation Request",
        message: formData.message || "Consultation Request from Website",
      });
      toast({
        title: "Proposal Requested! 🎉",
        description: "Thank you! Our team will contact you within 24 hours.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at +91 9306623619.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white text-slate-900 select-none border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Top Header & 2-Column Content (Video 00:15 - 00:24) ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Heading + Copy */}
          <div className="lg:col-span-7">
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full mb-4 inline-block border border-purple-200">
              ✦ About Websbond Digital Engine
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 font-jost">
              Turn Your Website Into a High-Converting{" "}
              <span className="bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent">
                Digital Growth Engine
              </span>
            </h2>

            <h3 className="text-lg font-bold text-purple-900 mb-4">
              Your Strategic Partner for Web Design, Digital Marketing, SEO & AI Search Visibility
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              With years of dedicated engineering experience in Delhi NCR and Haryana, Websbond has empowered businesses with custom-coded SEO platforms, performance ad campaigns, and scalable web apps. We don't just build websites; we craft conversion-focused digital engines.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "100/100 Google PageSpeed Core Web Vitals Guaranteed",
                "Proven Rank #1 SEO & Local GMB Map Pack Positioning",
                "Dedicated Full-Stack Engineers & Direct Transparency",
                "Complete Telemetry with GA4 Goal Conversion Tracking",
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Photo Stack Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-purple-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Websbond Engineering Team"
                className="w-full h-[340px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-md">
                <div className="text-xs font-extrabold text-purple-950">Leveraging 10+ years of IT expertise</div>
                <div className="text-[11px] text-slate-600">Helping businesses operate more efficiently with custom web tools.</div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Banner: Stats Counters + Quote Form (Video 00:25 - 00:26) ── */}
        <div id="contact-section" className="bg-[#F7F6FB] rounded-3xl p-8 lg:p-12 border border-purple-200/80 grid lg:grid-cols-12 gap-10 items-center shadow-sm">
          
          {/* Left Stats Counter */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest block mb-2 font-mono">
              Partner with India's Elite Digital Architects
            </span>

            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 font-jost">
              Code. Rank. Convert.
            </h3>

            <div className="grid grid-cols-3 gap-4 border-t border-b border-purple-200 py-6 mb-6">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-purple-800 font-mono">7,500,000+</div>
                <div className="text-[11px] font-bold text-slate-600 mt-1">Leads Driven</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-purple-800 font-mono">5,000+</div>
                <div className="text-[11px] font-bold text-slate-600 mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-purple-800 font-mono">10+</div>
                <div className="text-[11px] font-bold text-slate-600 mt-1">Years Experience</div>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-medium">
              We specialize in custom web development, organic search positioning, and ROI-driven ad management.
            </p>
          </div>

          {/* Right Quote Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-purple-200 shadow-md">
            <h4 className="text-xl font-extrabold text-slate-900 mb-2 font-jost">
              Request Your Custom Proposal
            </h4>
            <p className="text-xs text-slate-500 mb-6">Fill in details below for a free audit and custom strategy plan.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-purple-50/50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-purple-600 font-medium"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone No *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-purple-50/50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-purple-600 font-medium"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-purple-50/50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-purple-600 font-medium"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Type Your Message / Goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-purple-50/50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-purple-600 font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-800 hover:bg-purple-900 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Proposal Request ➔"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
