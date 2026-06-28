import { useState, useRef } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import { Phone, Mail, MapPin, Loader2, Send } from "lucide-react";

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

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      const res = await fetch(getApiUrl("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          subject: "Inquiry - " + service,
          message: `Requested Service: ${service}\n\nClient Message:\n${message || "No message provided."}`
        }),
      });
      if (!res.ok) throw new Error("Failed");
      toast({ title: "🎉 Message Sent Successfully!", description: "Our expert team will contact you shortly." });
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
        title="Contact Us | Best Digital Marketing Agency Delhi NCR | Websbond" 
        description="Connect with Websbond today! Submit your query or call us at +91 9306623619 to grow your business with expert SEO, PPC, SMO & Web Development." 
        path="/contact-us" 
      />

      {/* ── Page Hero Header ── */}
      <section 
        className="relative overflow-hidden py-16 md:py-20 text-white text-center" 
        style={{ background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)" }}
      >
        <div className="absolute inset-0 bg-[#004b75]/35 opacity-20 pointer-events-none" />
        <div className="container relative z-10">
          <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-white/85 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-semibold">
            We're just a message away! Connect with us today to discuss how our result-driven marketing strategies can take your business to the next level.
          </p>
        </div>
      </section>

      {/* ── Main Split Contact Section ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
            
            {/* Left: Send Message Form */}
            <div className="lg:col-span-7">
              <div
                className="rounded-3xl p-6 sm:p-9 shadow-2xl h-full flex flex-col justify-between"
                style={{
                  background: "rgba(22, 36, 62, 0.96)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div>
                  <h3 className="font-jost font-bold text-white text-2xl mb-6">
                    Send Message
                  </h3>

                  <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Row 1: Full Name + Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Full Name*"
                          className="w-full px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb560c]"
                          style={{
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            color: "#fff",
                          }}
                        />
                      </div>
                      <div>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="Phone*"
                          className="w-full px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb560c]"
                          style={{
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            color: "#fff",
                          }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email*"
                      className="w-full px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb560c]"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff",
                      }}
                    />

                    {/* Select Services */}
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb560c]"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      <option value="" style={{ background: "#002b49" }}>Select Services *</option>
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s} style={{ background: "#002b49" }}>{s}</option>
                      ))}
                    </select>

                    {/* Message */}
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Message"
                      className="w-full px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb560c] resize-none"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff",
                      }}
                    />

                    {/* Mock ReCAPTCHA */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between">
                      <label className="flex items-center gap-2.5 cursor-pointer text-xs text-white/85 font-bold select-none">
                        <input 
                          type="checkbox" 
                          required 
                          className="w-4 h-4 rounded border-gray-300 text-[#eb560c] focus:ring-[#eb560c] bg-white/20 accent-[#eb560c] cursor-pointer" 
                        />
                        I'm not a robot
                      </label>
                      <div className="flex flex-col items-center">
                        <img 
                          src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                          className="w-5.5 h-5.5 object-contain opacity-70" 
                          alt="recaptcha logo" 
                        />
                        <span className="text-[7px] text-white/30 font-bold tracking-tight mt-0.5">reCAPTCHA</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:opacity-90 disabled:opacity-60 text-sm uppercase tracking-wider"
                      style={{ background: "#eb560c" }}
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message!</>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right: Get In Touch */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-6 text-[#002b49]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ color: "#004b75" }}>→</span>
                  <span
                    className="text-sm font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#eb560c" }}
                  >
                    NEED ANY HELP?
                  </span>
                </div>

                <h2
                  className="font-jost font-black text-3xl md:text-4xl leading-tight"
                >
                  Get in touch with us
                </h2>

                <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed font-semibold">
                  Get in touch today to start growing your digital presence with expert guidance.
                </p>
              </div>

              {/* Detail Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-2">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#eb560c] flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Have any question?</h4>
                    <a 
                      href="tel:+919306623619" 
                      className="font-jost font-black text-lg text-[#002b49] hover:text-[#eb560c] transition-colors mt-1 block"
                    >
                      +91 9306623619
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-2">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#eb560c] flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Write email</h4>
                    <a 
                      href="mailto:websbond@websbond.com" 
                      className="font-jost font-black text-lg text-[#002b49] hover:text-[#eb560c] transition-colors mt-1 block"
                    >
                      websbond@websbond.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-2">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#eb560c] flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Our Location</h4>
                    <span 
                      className="font-jost font-black text-lg text-[#002b49] mt-1 block leading-tight"
                    >
                      Delhi NCR & Haryana, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Google Map Section ── */}
      <section className="w-full h-[400px] border-t border-b border-gray-150">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.556277983637!2d77.02633855!3d28.4471923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d182276555555%3A0x6bf1e3e0cb3d0774!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1703623619223!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Websbond Location Map"
        />
      </section>
    </Layout>
  );
};

export default ContactPage;
